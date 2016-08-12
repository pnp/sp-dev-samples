# SharePoint Web Hooks reference implementation #

### Summary ###
This SharePoint PnP reference implementation shows how you can you can make use of web hooks in your applications. The web hooks are implemented in an enterprise ready manner using various Azure components such as Azure Web Jobs, Azure SQL Server and Azure Storage Queues for asynchronous web job notification handling. If you want learn more about web hooks then you can continue reading but do know that we've also recorded a web cast: https://channel9.msdn.com/blogs/OfficeDevPnP/PnP-Web-Cast-Introducing-SharePoint-WebHooks. 

### Applies to ###
-  Office 365 Multi Tenant (MT)

### Prerequisites ###
Microsoft Azure is used to host the various components needed to implement Azure Web Hooks.

### Solution ###
Solution | Author(s)
---------|----------
SharePoint.WebHooks | Bert Jansen (Microsoft)

### Version history ###
Version  | Date | Comments
---------| -----| --------
1.0  | August 11th 2016 | Initial release

### Disclaimer ###
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**


----------

## Quick glance at this sample #
This sample application will show you how to manage web hooks (list defined web hooks, create new ones, update and delete existing ones). It also contains a reference implementation of a web hook service endpoint which you can reuse in your web hook projects. 

![SharePoint Web Hook sample application](http://i.imgur.com/iJO6ukm.png)

Before jumping into more details around this sample and web hooks in general I wanted to make you aware of the [deployment guide for this sample](Deployment guide.md).

## Introduction to web hooks ##
The key functionality of web hooks is notifying your applications from changes in SharePoint they're interested in. There's no need anymore for your application to regularly poll for changes anymore as with web hooks your application will be notified (**push** model) whenever there's a change. Web hooks are not Microsoft specific, it rather is a universal web standard that's also being adopted by other vendors (e.g. WordPress, GitHub, MailChimp,...). Looking at the Microsoft world we also have web hooks in production for other Office 365 components like OneDrive and Outlook. In the upcoming chapters you'll learn how to add a web hook and how to correctly deal with web hook notifications that you'll get from SharePoint. 

> **Important**
Web hooks are only fired after a change happened (so similar to **-ed** events), synchronous (**-ing** events) are not possible.

If you want to learn more about the technical implementation of web hooks then reading [our technical documentation](https://github.com/SharePoint/sp-dev-docs/wiki/SharePoint-Webhooks "web hooks technical overview") is highly recommended. This sample is not a bare bones sample as it's meant to be a reference implementation. If you want to experiment with web hooks then you should also checkout our [basic tutorial](https://github.com/SharePoint/sp-dev-docs/wiki/Webhooks-Basic-Tutorial "Basic tutorial").


### Adding a web hook to your SharePoint list ###
To add a web hook your application first needs create a web hook subscription by **(step number 1)** by doing a `POST /_api/web/lists('list-id')/subscriptions` while specifying a payload that identifies the list which we're adding the web hook for, the location of our web hook service (see later) and the expiration date of the web hook. 

> **Important**
You need to specify the expiration date of your web hook and this can be maximum 6 months. Later on you'll learn how to prolong your web hook.

Once you've requested SharePoint to add your web hook SharePoint will validate that your web hook service end point does exist **(step number 2)**. It will do this by sending a validation string to your service endpoint. SharePoint will expect that the endpoint returns the received validation string within 5 seconds. If this fails then the web hook creation is canceled. In you've deployed your service then this will work **(step number 3)** and SharePoint return a HTTP 201 message on the POST request you issued in step number 1. The payload of the returning message contains the ID of the web hook subscription...if you later on want to manipulate the web hook subscription you need this ID.

![Adding a web hook](http://i.imgur.com/dWzS5nq.png)

Looking at the application you'll see that all web hook CRUD operations are consolidated in the `WebHookManager` class of the SharePoint.WebHooks.Common project. Adding a web hook is done using the `AddListWebHookAsync` method:

```C#
/// <summary>
/// This method adds a web hook to a SharePoint list. Note that you need your webhook endpoint being passed into this method to be up and running and reachable from the internet
/// </summary>
/// <param name="siteUrl">Url of the site holding the list</param>
/// <param name="listId">Id of the list</param>
/// <param name="webHookEndPoint">Url of the web hook service endpoint (the one that will be called during an event)</param>
/// <param name="accessToken">Access token to authenticate against SharePoint</param>
/// <param name="validityInMonths">Optional web hook validity in months, defaults to 3 months, max is 6 months</param>
/// <returns>subscription ID of the new web hook</returns>
public async Task<SubscriptionModel> AddListWebHookAsync(string siteUrl, string listId, string webHookEndPoint, string accessToken, int validityInMonths = 3)
{
    // web hook add code...
}
```

When we make a call to SharePoint we need to provide authentication information and in this case we're using Bearer authentication header with an access token. To obtain the access token we intercept the token via a `ExecutingWebRequest` event handler:

```C#
ClientContext cc = null;

// Create SharePoint ClientContext object...

// Add ExecutingWebRequest event handler
cc.ExecutingWebRequest += Cc_ExecutingWebRequest;

// Capture the OAuth access token since we want to reuse that one in our REST requests
private void Cc_ExecutingWebRequest(object sender, WebRequestEventArgs e)
{
    this.accessToken = e.WebRequestExecutor.RequestHeaders.Get("Authorization").Replace("Bearer ", "");
}
```

### SharePoint calls out to your web hook service ###
When SharePoint detects a change in a list for which you've subscribed a web hook you're service endpoint will be called by SharePoint **(step number 1)**. When you look at the payload that you'll get from SharePoint the following properties are important:
- **subscriptionId**: this is the ID of the web hook subscription. If you for example want to prolong the web hook expiration you need this ID
- **resource**: this is the ID of the list for which the change happened
- **siteUrl**: is the server relative url of the site holding the resource for which the change happened

> **Important**
- SharePoint is only providing you that a change happened...not what actually was changed. Later on you'll see how to deal with this
- Since you get information about the web and list that were changed it means that you can perfectly use the same service endpoint to handle web hook events from multiple sites and lists

When your service is called it's important that you reply with a HTTP 200 message within less than 5 seconds **(step number 2)**. Later on in this article you'll learn more about the why but essentially this comes down to the fact that you need to **asynchronously** need to handle the notifications. In this sample we'll do this by using Azure Web Jobs and Azure Storage Queues.

![SharePoint calls your web hook endpoint](http://i.imgur.com/XaDhJQe.png)

### Grab the changes your service needs to act upon ###
In the previous step your service endpoint was called but SharePoint only provided information about where the change happened, not what was actually changed. To understand what was changed you'll need use the SharePoint `GetChanges()` API as shown in below picture.

![Async GetChanges](http://i.imgur.com/TGjwiFH.png)

You can learn more about the GetChanges() implementation in class `ChangeManager`, method `ProcessNotification` of the SharePoint.WebHooks.Common project. 

> **Important**
- To avoid getting the same change over and over again it's important that you tell SharePoint from which point you want the changes. This is done by passing a changeToken...which also implies that your service endpoint needs to persist the last used changeToken so that it can be used during the next time the service endpoint is called
- SharePoint does not call your service in real-time: when a change happens on a list that has a web hook SharePoint will queue a web hook call out. Once each minute this queue will be read and the needed service endpoints are called. This batching of requests is important as it prevents SharePoint from calling your endpoint 1000 times when you for example bulk upload 1000 records in one shot. So your endpoint is only called once but when you do the `GetChanges()` call you'll get 1000 change events that you need to process.

To guarantee an immediate response, regardless of the number of changes there, it's important that the 'workload' of your service endpoint is executed asynchronously. In this sample we leveraged the power of Azure: the service will serialize the incoming payload and store it an Azure Storage queue while there's an Azure web job that running continuously and checks for messages in the queue. When there are messages in the queue the web job will process them and as such will execute your logic in an asynchronous manner.

### Complete end-to-end flow
Below diagram is showing the complete end-to-end web hook flow:
1. Your application creates a web hook subscription. When it does it grabs the current changeToken from the list it created the web hook for
2. Your application persists the changeToken in a persistent storage (SQL Azure in this sample)
3. A change in SharePoint happens and SharePoint calls your service endpoint
4. Your service endpoint serializes the notification request and stores it in a storage queue
5. Your web job sees the message in the queue and kicks of your message processing logic
6. Your message processing logic grabs the last used change token from the persistent storage
7. Your message processing logic uses the `getChanges()`API to learn what changed
8. The returned changes are processed...now you do what you actually wanted to do :-)
9. Finally we persist the last retrieved changeToken so that next time we're not again getting the changes we've just processed 

![end-to-end flow](http://i.imgur.com/nyKFMCM.png)


## Why would you use web hooks over remote event receivers? ##
There are some key benefits in the web hook model that you should be aware of:
- Web hooks have a **retry mechanism**: when your service endpoint is not reachable (e.g. due to maintenance) SharePoint will retry again. Today this retry mechanism does retry 5 times with a 5 minute wait time between the attempts. If for some reason your service is down for a longer time, the next time when it's up and gets called by SharePoint the call to `getChanges()` will get you the changes that were missed when your service was not available
- Web hook calls are less taxing for your service since SharePoint batches the requests (you get max 1 request per minute per web hook subscription). Also note that the web hook payload is very small
- Web hooks are easier to develop and consume since they're regular HTTP services (Web API) in comparison to WCF services used by remote event receivers


## How to deal with web hook renewal
By now you've learned that the maximum lifetime of your web hook is 6 months. Often you want to web hook to be available for longer time and as such you need to implement logic for doing that. Below 2 patterns are good patterns, the first is lightweight, the second one is slightly more complex and requires an additional web job to be hosted:
- **Basic model:** when your service receives a notification it also gets information about the subscription lifetime. If the subscription is about to expire then inside your notification processing logic you simply extend the lifetime of the subscription. This model is implemented in this sample and works fine for most cases but in case there's no change for 6 months on the list you've a web hook subscription for then the web hook subscription is never prolonged and will be dropped
- **Reliable but more complex model:** you create a web job that on a weekly basis reads all the subscription ID's from the persistent storage and one by one extends the found subscriptions each time. Note that this web job is part of this sample

The actual renewal of web hooks can be done using a `PATCH /_api/web/lists('list-id')/subscriptions(‘subscriptionID’)` REST call. In the sample updating of web hooks is implemented in the `WebHookManager` class of the SharePoint.WebHooks.Common project. Updating a web hook is done using the `AddListWebHookAsync` method:

```C#
/// <summary>
/// Updates the expiration datetime (and notification URL) of an existing SharePoint list web hook
/// </summary>
/// <param name="siteUrl">Url of the site holding the list</param>
/// <param name="listId">Id of the list</param>
/// <param name="subscriptionId">Id of the web hook subscription that we need to update</param>
/// <param name="webHookEndPoint">Url of the web hook service endpoint (the one that will be called during an event)</param>
/// <param name="expirationDateTime">New web hook expiration date</param>
/// <param name="accessToken">Access token to authenticate against SharePoint</param>
/// <returns>true if succesful, exception in case something went wrong</returns>
public async Task<bool> UpdateListWebHookAsync(string siteUrl, string listId, string subscriptionId, string webHookEndPoint, DateTime expirationDateTime, string accessToken)
{
    // web hook update code...
}
```

## Debugging web hooks
Since SharePoint is calling out to your web hook service endpoint it means that your endpoint needs to be reachable by SharePoint which makes developing slightly more complex. Below are some strategies that you can use to make your life easier:
- During initial development you provide your own serialized payload to your service processing logic: this will make it possible to completely test your processing logic without deploying the service endpoint (and even without configuring a web hook)
- If you have access to Azure resources you can deploy your endpoint to Azure using a debug build and configure the Azure App Service for debugging: this will then allow you to set a remote breakpoint and do remote debugging using Visual Studio
- If you do not want to deploy your service during development time you'll need to use a secure tunnel for your service. The idea is that you tell SharePoint that the notification service lives on a shared public endpoint. Client side you install a component that connects to that shared public service and whenever a call is made to the public endpoint the client component is notified and it pushes the payload to your service running on localhost. ngrok (https://ngrok.com/) is an implementation of such a secure tunnel tool





