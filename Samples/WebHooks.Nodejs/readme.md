# Sample Node.js SharePoint webhook application

## Summary

Sample Node.js webhook application for Sharepoint. This application allows you to manage all subscriptions for a specific list or library and shows you the webhook changes when they happen.

![Notification sample](./assets/homepage-view.png)

## Applies to

- Office 365 Tenant (MT) with [First Release enabled](https://support.office.com/en-us/article/Set-up-the-Standard-or-First-Release-options-in-Office-365-3b3adfa4-1777-4ff0-b606-fb8732101f47).

## Solution
Solution | Author(s)
---------|----------
Webhook.Nodejs | Elio Struyf (MVP, Ventigrate, [@eliostruyf](https://twitter.com/eliostruyf))

### Version history
Version  | Date | Comments
---------| -----| --------
1.0.0  | September 27, 2016 | Initial release
1.0.1  | February 10, 2017 | Small improvements in docs and packages

### Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Prerequisites

You will need to register an Azure AD application with *application permissions*.

### Azure AD application and certificate configuration
- Create a new Azure AD application
- Give the application the following permissions: **Read and write items and lists in all site collections**

![Read & Write permissions](./assets/azure-ad-permissions.png)

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

### Installation & configuration
- Clone this repo
- Open your command prompt and navigate to the folder
- Update the config.json file with the correct information:
    - adalConfig
        - authority: change the tenant name
        - clientId: specify your Azure AD client application ID
        - subscriptionUrl: the URL that SharePoint has to call. Use ngrok for testing.
        - resouce: the URL of your SharePoint site for which you want to retrieve the access token
        - fingerPrint: finger print of your certificate
    - webhookConfig
        - url: URL of the SharePoint site
        - listName: name of the list / library to which you want to subscribe your webhook
        - clientState: clientState name you want to use for your subscription
- Run: `$ npm install`
- Run: `$ tsd install`

####  Local development
During development you could test your webhook locally with the following steps:
- Open another command prompt. Navigate to the ngrok folder and run:
    - `$ ngrok http 3000`
    - copy the **https** forwarding URL of ngrok and use it in the config.json file for the **subscriptionUrl**
- Run: `$ npm start`
    - This transpiles TypeScript to JavaScript and start the server on http://localhost:3000
- Navigate to http://localhost:3000