# SharePoint Web Hooks Azure AD reference implementation #

### Summary ###
This SharePoint PnP reference implementation shows how you can you can make use of web hooks in your applications. The web hooks are implemented in an enterprise ready manner using various Azure components such as Azure AD for authentication, Azure Web Jobs, Azure SQL Server and Azure Storage Queues for asynchronous web job notification handling. If you want learn more about web hooks then you can continue reading but do know that we've also recorded a web cast which is available from the [SharePoint PnP YouTube Channel](https://www.youtube.com/watch?v=j3hWCAI9R20).

<a href="https://www.youtube.com/watch?v=j3hWCAI9R20">
<img src="http://i.imgur.com/0tqP0kO.png" alt="PnP webcast - Introducing SharePoint webhooks" />
</a>

### Applies to ###
- Office 365 Multi Tenant (MT).

### Prerequisites ###
Microsoft Azure is used to host the various components needed to implement Azure Web Hooks.

### Solution ###
Solution | Author(s)
---------|----------
SharePoint.WebHooks.AzureAD | Bert Jansen (**Microsoft**)

### Version history ###
Version  | Date | Comments
---------| -----| --------
1.0  | January 18th 2017 | Initial release

### Disclaimer ###
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**


----------

## Deploying this sample reference implementation #
This sample application will show you how to manage webhooks, specifically managing webhooks for a SharePoint list. It also contains a reference implementation of a webhook service endpoint which you can reuse in your webhook projects.

![SharePoint Web Hook sample application](http://i.imgur.com/iJO6ukm.png)

Deploying this sample requires you to setup some Azure components which are described in depth in our [deployment guide](Deployment guide.md). The deployment guide shows you how to use a Web API function as webhook service, but if you're more interested in use Azure functions then checkout the [Azure Functions guide](azure functions guide.md) for more details.

## Want to learn more about this sample ##
This sample is part of the reference implementation walkthrough and as such we would like to point you to our [official documentation](http://dev.office.com/sharepoint/docs/apis/webhooks/webhooks-reference-implementation) to learn more about this sample.



<img src="https://telemetry.sharepointpnp.com/sp-dev-samples/samples/webhooks" /> 


