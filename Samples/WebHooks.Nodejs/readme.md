# Sample Node.js SharePoint webhook application

## Summary

Sample Node.js Web Hooks handler web application for SharePoint. This application allows you to manage web hooks subscriptions for a specific list or library, how to listen to web hook events, to handle changes in items when they happen.

![Notification sample](./assets/homepage-view.png)

## Applies to

- Office 365 Tenant (MT) with [First Release enabled](https://support.office.com/en-us/article/Set-up-the-Standard-or-First-Release-options-in-Office-365-3b3adfa4-1777-4ff0-b606-fb8732101f47).

## Solution
Solution | Author(s)
---------|----------
Webhook.Nodejs | Elio Struyf (MVP, Ventigrate, [@eliostruyf](https://twitter.com/eliostruyf)), Massimo Prota (Rapid Circle)

### Version history
Version  | Date | Comments
---------| -----| --------
1.0.0  | September 27, 2016 | Initial release
1.0.1  | February 10, 2017 | Small improvements in docs and packages
1.1.0  | July 23, 2017 | Improved handling of subscribed Web in ChangeHelper. Simplified setup documentation

### Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Prerequisites

You will need to register an Azure AD application with *application permissions*.

### Azure AD application and certificate configuration
- Create a new Azure AD application
- Make sure to add `http://localhost:3000` in the list of allowed Reply URLs

![Reply URLs](./assets/azure-ad-replyurls-1.png)

- Give the application the following permissions: **Read and write items and lists in all site collections**

![Read & Write permissions](./assets/azure-ad-permissions.png)

- Make sure to perform admin trust for the registered application, as it is needed because we're requesting some Application Permission.  
  This can be done via specific **Grant Permissions**  action available in Azure Portal

![Grant permissions - Admin trust](./assets/azure-ad-permissions-grant.png)

### NodeJs enviroment configuration
- Run `$ npm install -g keycred`
- Run `$ keycred`
    - Fill in the questions
- Once you provided all the info, your certificate information is provided

![Certificate information](./assets/certificate.png)

- Open the manifest of the Azure AD application and add the following information to the file:
    - customKeyIdentifier
    - value
    - keyId

```JSON
"keyCredentials": [
    {
        "customKeyIdentifier": "customKeyIdentifier",
        "keyId": "keyId",
        "type": "AsymmetricX509Cert",
        "usage": "Verify",
        "value":  "value"
    }
],
```

![keyCredentials config](./assets/manifest.png)

- In your project folder, create a new **privatekey.pem** file and paste in the private key information:

```
-----BEGIN RSA PRIVATE KEY-----
THE KEY ITSELF
-----END RSA PRIVATE KEY-----
```

- Add the fingerPrint ID to the config.json file (check configuration section)

If this is the first time you use NodeJS on the machine, or you're unsure:

-  Run `$ npm install -g gulp typescript gulp-typescript`

### Installation & configuration
- Clone this repo
- Open your command prompt and navigate to the folder
- Create a file `config.json`, based on `config.sample.json` containing following information:
```JSON
{
    "adalConfig": {
        "authority": "https://login.microsoftonline.com/<tenant.onmicrosoft.com>",
        "clientID": "<App AAD ClientId>",
        "subscriptionUrl": "http://<web hook listener URL>/listen",
        "resource": "https://<tenant>.sharepoint.com",
        "fingerPrint": "<self-certificate fingerprint>"
    },
    "webhookConfig": {
        "url": "https://<tenant>.sharepoint.com/sites/<site path>",
        "listName": "<list name>",
        "clientState": "WebHooksNodeSample"
    }
}
```

- Run: `$ npm install`

####  Local development
During development you could test your webhook locally with the following steps:
- Open another command prompt. Navigate to the ngrok folder and run:
    - `$ ngrok http 3000`
    - copy the **https** forwarding URL of ngrok and use it in the `config.json` file for the _subscriptionUrl_ value
    - make sure to add this URL also to the list of Reply URLs for the application in Azure AD, and save (it can take couple of minutes before changes are actually applied and propagated)
- Run: `$ npm start`
    - This transpiles TypeScript to JavaScript and start the server on `http://localhost:3000`
- Navigate to `http://localhost:3000`