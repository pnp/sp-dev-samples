# SharePoint web hooks Azure AD reference implementation - Deployment guide #
This guide will provide you step by step guidance on how to deploy this sample application. We'll first start with preparing the Azure resources, then we'll prep the application and SharePoint needs and finally we'll show you how to deploy the needed components.

## Preparing Microsoft Azure for hosting the web hook sample application
For this sample we're using Azure Web Apps to host the SharePoint Add-In and host the Azure Web Jobs, we using an Azure Storage Account for it's queuing option and finally we use a SQL Azure database to host our data. In this chapter you'll be guided in how to setup these. All of the work in below chapters is done using the Azure management portal (https://portal.azure.com). 

### Creating the Azure Web Application
1) Adding a new Azure Web App

![Adding an Azure web app](http://i.imgur.com/1M8Zulm.png)

2) Give your web app a unique name, pick the subscription and resource group you want and finally select a service plan:

![Web App settings](http://i.imgur.com/CLBfu1O.png)

> **Important**
Remember the url you've chosen (pnpwebhookdemo.azurewebsites.net) in above screen-shot

3) Once the Web App is provisioned navigate to it and download it's publishing profile.

![Download the publishing profile](http://i.imgur.com/Db304vY.png)

> **Important**
Store the publishing profile as you'll need this file later on

### Creating the Azure SQL Server database
1) Adding a new Azure SQL database

![Create a SQL Azure database](http://i.imgur.com/1gfOYtD.png)

2) Give your database a name, pick the subscription and resource group you want, select a service plan and select a server

![Configure DB](http://i.imgur.com/dT6dcej.png)

> **Important**
Remember the name you've chosen (PnPWebHookDemo) in above screen-shot

2.1) Select an existing Azure SQL server if you already have one

![Select existing server](http://i.imgur.com/PaRSrmb.png)

2.2) or create a new Azure SQL server

![Create new SQL Azure server](http://i.imgur.com/cbQj9P6.png)

> **Important**
Remember the name of the server you've chosen

3) Navigate to the created database and go to the server firewall settings

![Configure SQL server](http://i.imgur.com/FPWAdQA.png)

4) Configure the Azure SQL server firewall to allow access to the IP your using. 

![Configure firewall settings](http://i.imgur.com/PIVbThW.png)

### Creating the Azure Storage account
1) Add a new storage account

![Create storage account](http://i.imgur.com/wfkbjBc.png)

2) Configure the storage account: use the classic deployment model, select your subscription and resource group and finalize the account creation

![Configure storage account](http://i.imgur.com/oEuDeV5.png)

3) Once the storage account is available navigate to it, go to Keys and copy the primary connections string

![Copy the connection string](http://i.imgur.com/6cGA3DQ.png)

> **Important**
Remember the storage account connection string

### Creating the Azure AD application
#### Create the self signed certificate
You are now ready to configure the Azure AD Application for invoking SharePoint Online with an App Only access token. In order to do that, you have to create and configure a self-signed X.509 certificate, which will be used to authenticate your Application against Azure AD, while requesting the App Only access token. 

First of all, you have to create the self-signed X.509 Certificate, which can be created using the [makecert.exe](https://msdn.microsoft.com/library/windows/desktop/aa386968.aspx) tool that is available in the Windows SDK or through a provided PowerShell script which does not have a dependency to makecert. Using the PowerShell script is the preferred method.

**Important:** 
It's important that you run the below scripts with Administrator privileges.

##### Using the Create-SelfSignedCertificate PowerShell Script
You can use a provided PowerShell script which does not have a dependency to makecert.exe. The script is called <a href="../scripts/Create-SelfSignedCertificate.ps1">Create-SelfSignedCertificate.ps1</a> and is available in the <a href="../scripts/">Scripts folder</a> of this repository.

To create a self signed certificate with this script:

```PowerShell
.\Create-SelfSignedCertificate.ps1 -CommonName "MyCompanyName" -StartDate 2015-10-25 -EndDate 2016-10-25
```

You will be asked to provide a password to encrypt your private key, and both the .PFX file and .CER file will be exported to the current folder.

##### Using makecert (alternative manual option)
Alternatively, if you have Microsoft Visual Studio 2013/2015 installed on your enviroment, you already have the [makecert tool](https://msdn.microsoft.com/library/windows/desktop/aa386968.aspx), as well. Otherwise, you will have to download from MSDN and to install the Windows SDK for your current version of Windows Operating System.

The command for creating a new self-signed X.509 certificate is the following one:

```
makecert -r -pe -n "CN=MyCompanyName MyAppName Cert" -b 10/25/2015 -e 10/25/2016 -ss my -len 2048
```

The previous command creates a self-signed certificate with a common name (CN) value of "MyCompanyName MyAppName Cert", a validity timeframe between 10/25/2015 and 10/25/2016, and a key length of 2048 bit. The certificate will have an exportable private key and will be stored in the personal certificate store of the current user. 

>For further details about the makecert syntax and command line parameters you can read <a href="https://msdn.microsoft.com/en-us/library/windows/desktop/aa386968(v=vs.85).aspx">the following article</a> on MSDN.

After having created the self-signed X.509 Certificate you have to export it as a .PFX file, which includes the private key value. In order to do that, run the **mmc.exe** command as an Administrator (RunAs Admin) and add the **Certificates MMC** snap-in, targeting the personal store of the current user. In the Current User's Personal folder of Certificates, select the just created certificate, right click on it and select the "Export" functionality. Select to export the private key into a .PFX file. Provide a password to protect the private key of the certificate. Repeat the same process as before, but this time export the certificate as a .CER file, which does not include the private key value.

#### App Only certificate configuration in the Azure Web Application
You will need to upload the .PFX file of the self-signed certificate to create the App Only context. Thus, go into the **"Configuration"** tab and add a new X.509 certificate to the Azure Web App, through the proper configuration section. Alternatively through the new Azure Portal you will go into the App Service, click on **"SSL certificates"**, click on the **"Upload Certificate"** menu at the top, select the PFX certificate that you have created earlier on in these steps and click on **"Upload"**.

![Azure App Service - X.509 Certificate](http://i.imgur.com/3QQf0yt.png)

After that, scroll a little bit to the "Application Settings" section. There, you will have to configure the following settings:
- *WEBSITE_LOAD_CERTIFICATES* with a value of *;
- *WEBJOBS_IDLE_TIMEOUT* with a value of 10000;
- *SCM_COMMAND_IDLE_TIMEOUT* with a value of 10000;

In the following figure you can see a sample configuration. 
![Azure App Service - SSL Certificates Setting](http://i.imgur.com/P0S4wh5.png)

"WEBSITE_LOAD_CERTIFICATES" allows the Azure App Service to access the service account's personal certificate store to read the App Only X.509 certificate. The last two properties allow the web jobs to run for longer than 2 minutes.

#### Azure Active Directory Application registration
First of all, because the this application is an Office 365 Application, you have to **register it in the Azure Active Directory tenant** that is linked to your Office 365 tenant. In order to do that, open the Office 365 Admin Center (https://portal.office.com) using the account of a user member of the Tenant Global Admins group.

Click on the "Azure AD" link that is available under the "Admin centers" group in the left-side treeview of the Office 365 Admin Center. In the new browser's tab that will be opened you will find the Microsoft Azure Management Portal. If it is the first time that you access the Azure Management Portal with your account, you will have to register a new Azure subscription, providing some information and a credit card for any payment need. But don't worry, in order to play with Azure AD and to register an Office 365 Application you will not pay anything. In fact, those are free capabilities. 

Once having access to the Azure Management Portal, select the "Active Directory" section, by clicking on the icon highlighted in the following screen shot:

![Azure AD Button](http://i.imgur.com/OrNF2bz.png)

If you can't see Azure Active Directory as one of your options then scroll to the end of the left menu and click on "More Services". You'll find "Azure Active Directory"  there. Please favorite the feature as you'll need this later.

You'll see on the left side of the blade that you opened the Azure AD tenant corresponding to your Office 365 tenant. Locate and select the option "App Registrations". See the next figure for further details.

![Azure AD Main Page](http://i.imgur.com/ROf6qkd.png)

In the "App Registrations" tab you will find the list of Azure AD applications registered in 
your tenant. Click the "Add" button in the upper left part of the blade, this will show you the following screen.

![Azure AD - Add an Application - First Step](http://i.imgur.com/ziTWo0E.png)

Then, provide a **name** for your application (we suggest to name it "SharePoint WebHook MVC app"), select the option **"Web app / API"**, and fill in the **"Sign-on URL"** with the **URL** of the Azure App Service that you created before. Click create when done.

The newly created app registration will now be listed in your "App Registrations" list.
Open it and then click into settings and then Properties.  You should now be at the following screen: 

![Azure AD - Add an Application - Third Step](http://i.imgur.com/ZnmydCh.png)

Please make sure you :
- Copy the **Aplication ID** value as you'll need it later.
- Provide the **App ID URI** value like https://<your tenant>.onmicrosoft.com/SharePoint.Webhooks.AzureAD
- Press save. 

Now, you should go back to the settings blade. Go into **Keys** where you'll create a Client Secret. In order to do that, add a new security key (selecting 1 year, 2 years or never for key expiration). Press the "Save" button in the lower part of the screen to generate the key value. After saving, you will see the key value. **Copy it in a safe place**, because you will not see it anymore.

![Azure AD - Create a client Secret](http://i.imgur.com/Mw1dTSc.png)

Now click on "Required Permissions", and click on the "Add" button, a new blade will appear.
![Azure AD - Application - Required Permissions](http://i.imgur.com/gRJQf8e.png)

You need to configure the following permissions:
* Microsoft Graph (**Delegated Permission**)
  * **Read directory data**
  * **Read all users' basic profiles**
  * **Read and write access to user profile**
* Windows Azure Active Directory (**Delegated Permission**)
  * **Sign in and read user profile**
* Office 365 SharePoint Online (**Delegated Permission**)
  * **Have full control of all site collections**
* Office 365 SharePoint Online (**Application Permission**)
  * **Have full control of all site collections**

  For further details, see the following figure.
![Azure AD - Application Configuration - Permissions Blade](http://i.imgur.com/kCX2PtI.png)

The "Application Permissions" are those granted to the application when running as App Only. The other set of permissions, called "Delegated Permissions", defines the permissions granted to the application when running under a specific user's account delegation (using an app and user access token, from an OAuth 2.0 perspective).

#### Update Azure AD Application manifest

You can execute the <a href="../scripts/Get-SelfSignedCertificateInformation.ps1">Get-SelfSignedCertificateInformation.ps1</a> script. This script is available in the 
<a href="../scripts/">Scripts folder</a> of this repository:

```PowerShell
.\Get-SelfSignedCertificateInformation.ps1 | clip
```

You will have to provide the path of the .CER file that you created before, when you created the certificate for the AppOnly context configuration.
The command will copy into the clipboard a JSON snippet that you will use in the upcoming steps. Paste the content of the clipboard in a safe place (like a fresh new notepad file).
Notice that the command will also provide the certificate thumbprint needed for configuration later in the document.

Alternatively, start a PowerShell command window, and execute the following instructions:

```PowerShell
$certPath = Read-Host "Enter certificate path (.cer)"
$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2
$cert.Import($certPath)
$rawCert = $cert.GetRawCertData()
$base64Cert = [System.Convert]::ToBase64String($rawCert)
$rawCertHash = $cert.GetCertHash()
$base64CertHash = [System.Convert]::ToBase64String($rawCertHash)
$KeyId = [System.Guid]::NewGuid().ToString()

$keyCredentials = 
'"keyCredentials": [
    {
      "customKeyIdentifier": "'+ $base64CertHash + '",
      "keyId": "' + $KeyId + '",
      "type": "AsymmetricX509Cert",
      "usage": "Verify",
      "value":  "' + $base64Cert + '"
     }
  ],'
$keyCredentials

Write-Host "Certificate Thumbprint:" $cert.Thumbprint
```

Copy the output value into a text file as you will have to use it soon. Note that in case of the last approach you'll need to remove the carriage returns in the copied **value** element data.

Go back to the Azure AD Application that you created in the previous step and click the **"Manifest"** button at the top of the blade, then click **Edit'**. Search for the **keyCredentials** property and replace it with the snippet you generated before, this will be similar to:

```JSON
  "keyCredentials": [
    {
      "customKeyIdentifier": "<$base64CertHash>",
      "keyId": "<$KeyId>",
      "type": "AsymmetricX509Cert",
      "usage": "Verify",
      "value":  "<$base64Cert>"
     }
  ],
```

Click **Save** when you complete this step.

>For further details about running App Only applications, you can read <a href="http://blogs.msdn.com/b/richard_dizeregas_blog/archive/2015/05/03/performing-app-only-operations-on-sharepoint-online-through-azure-ad.aspx">the following article
>from Richard diZerega</a>.

## Prepare the application
### Configure the SQL Azure database
1) Using SQL Server Management Studio (SSMS) connect to your SQL Azure database server

![Connect to your SQL Azure database](http://i.imgur.com/f98MPzP.png)

2) Open a new query for the SQL Azure database you've created earlier on (PnPWebHookDemo) in this case. The SQL script can be found in the SharePoint.WebHooks.Common project, folder SQL/scripts.

![Create database structure](http://i.imgur.com/NZjVM0i.png)

```SQL
SET QUOTED_IDENTIFIER OFF;
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------
IF OBJECT_ID(N'[dbo].[ListWebHooks]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ListWebHooks];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------
CREATE TABLE [dbo].[ListWebHooks] (
	[Id] uniqueidentifier NOT NULL,
    [ListId] uniqueidentifier  NOT NULL,
    [LastChangeToken] nvarchar(max)  NOT NULL
);
GO
ALTER TABLE [dbo].[ListWebHooks]
ADD CONSTRAINT [PK_ListWebHooks]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO
```

3) Open a new query for the master database and run the below shown SQL command to create a new login

![Create account](http://i.imgur.com/YTRzoZ5.png)

```SQL
CREATE LOGIN WebHooksAdmin WITH PASSWORD = 'Pass@word1'
```

4) Create a database user and grant it permissions

![Create user and grant roles](http://i.imgur.com/5cs8Psm.png)

```SQL
CREATE USER [WebHooksAdmin] FOR LOGIN [WebHooksAdmin] WITH DEFAULT_SCHEMA = dbo

-- Add user to the database reader/writer roles
EXEC sp_addrolemember 'db_datareader', 'WebHooksAdmin'
EXEC sp_addrolemember 'db_datawriter', 'WebHooksAdmin'
```

### Update the configuration files (web.config and app.config)
Update the web.config file from the SharePoint.WebHooks.MVC project as shown below:

```XML
<appSettings>
  <!-- MVC settings-->
  <add key="webpages:Version" value="3.0.0.0" />
  <add key="webpages:Enabled" value="false" />
  <add key="aspnet:UseTaskFriendlySynchronizationContext" value="true" />
  <add key="ClientValidationEnabled" value="true" />
  <add key="UnobtrusiveJavaScriptEnabled" value="true" />
  
  <!-- Azure AD settings-->
  <add key="ida:GraphResourceId" value="https://graph.windows.net" />
  <!-- ClientID and Secret from your Azure AD application -->  
  <add key="ida:ClientId" value="<YOUR AZURE AD APPLICATION ID>" />
  <add key="ida:AppKey" value="<YOUR AZURE AD APPLICATION SECRET>" />
  <!-- Name of your tenant e.g. contoso.onmicrosoft.com -->
  <add key="ida:Tenant" value="<YOUR TENANT NAME>.onmicrosoft.com" />
  <add key="ida:AADInstance" value="https://login.microsoftonline.com/{0}" />
  <!-- Url of your web hook service e.g https://pnpwebhookdemoaad.azurewebsites.net/api/webhook -->
  <add key="ida:RedirectUri" value="https://<ADD AZURE WEB APP NAME>.azurewebsites.net/" />

  <!-- Application specific settings -->
  <!-- Connection string to Azure storage account: we use a queue for async processing of web hook notifications 
         e.g. DefaultEndpointsProtocol=https;AccountName=pnpwebhooksdemo;AccountKey=lG+wBesZObYg8r1pfHHZWf+XtjFuG+4EAHxxxxxx -->
  <add key="StorageConnectionString" value="<ADD THE CONNECTION STRING FOR STORAGE ACCOUNT>" />
  <!-- Name of your tenant e.g. contoso.sharepoint.com -->
  <add key="TenantName" value="<YOUR TENANT NAME>.sharepoint.com" />
  <!-- Name of your site collection that you want to use for web hook experimenting -->
  <add key="SiteCollection" value="/sites/<YOUR SITECOLLECTION>" />
  <!-- Url of your web hook service e.g https://pnpwebhookdemoaad.azurewebsites.net/api/webhook -->
  <add key="WebHookEndPoint" value="https://<ADD AZURE WEB APP NAME>.azurewebsites.net/api/webhook" />
  <!-- Location of the certificate used to perform "app-only" authentication towards SharePoint Online using Azure AD authentication -->
  <add key="CertificateStore" value="My" />
  <add key="CertificateLocation" value="CurrentUser" />
  <add key="CertificateThumbprint" value="<YOUR CERTIFICATE THUMPRINT>" />
</appSettings>
<connectionStrings>
  <!-- SQL Azure version -->
  <!-- We need to store the last used change token per subscription and use an Azure SQL database for doing so 
	e.g. metadata=res://*/SQL.ListWebHooks.csdl|res://*/SQL.ListWebHooks.ssdl|res://*/SQL.ListWebHooks.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=tcp:xxx.database.windows.net,1433;Database=PnPWebHookDemo;User ID=WebHooksAdmin;Password=xxxx;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient
	-->
  <add name="SharePointWebHooks" connectionString="metadata=res://*/SQL.ListWebHooks.csdl|res://*/SQL.ListWebHooks.ssdl|res://*/SQL.ListWebHooks.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=tcp:<YOUR SQL SERVER>.database.windows.net,1433;Database=<YOUR DATABASE NAME>;User ID=<YOUR USER ID>;Password=<YOUR PASSWORD>;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />
  <!-- Local dev version -->
  <!--<add name="SharePointWebHooks" connectionString="metadata=res://*/SQL.ListWebHooks.csdl|res://*/SQL.ListWebHooks.ssdl|res://*/SQL.ListWebHooks.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=(localdb)\MSSQLLocalDB;initial catalog=SharePointWebHooks;integrated security=True;multipleactiveresultsets=True;application name=EntityFramework&quot;" providerName="System.Data.EntityClient" />-->
  <!-- The format of the connection string is "DefaultEndpointsProtocol=https;AccountName=NAME;AccountKey=KEY" -->
  <!-- For local execution, the value can be set either in this config file or through environment variables -->
  <add name="AzureWebJobsDashboard" connectionString="<ADD THE CONNECTION STRING FOR STORAGE ACCOUNT>" />
  <add name="AzureWebJobsStorage" connectionString="<ADD THE CONNECTION STRING FOR STORAGE ACCOUNT>" />
</connectionStrings>

```

Update the app.config file from the SharePoint.WebHooks.Job project as shown below:

```XML
  <appSettings>
    <!-- Azure AD settings-->
    <add key="ida:GraphResourceId" value="https://graph.windows.net" />
    <!-- ClientID and Secret from your Azure AD application -->  
    <add key="ida:ClientId" value="<YOUR AZURE AD APPLICATION ID>" />
    <add key="ida:AppKey" value="<YOUR AZURE AD APPLICATION SECRET>" />
    <!-- Name of your tenant e.g. contoso.onmicrosoft.com -->
    <add key="ida:Tenant" value="<YOUR TENANT NAME>.onmicrosoft.com" />
    <add key="ida:AADInstance" value="https://login.microsoftonline.com/{0}" />
    <!-- Url of your web hook service e.g https://pnpwebhookdemoaad.azurewebsites.net/api/webhook -->
    <add key="ida:RedirectUri" value="https://<ADD AZURE WEB APP NAME>.azurewebsites.net/" />

    <!-- Application specific settings -->
    <!-- Connection string to Azure storage account: we use a queue for async processing of web hook notifications 
         e.g. DefaultEndpointsProtocol=https;AccountName=pnpwebhooksdemo;AccountKey=lG+wBesZObYg8r1pfHHZWf+XtjFuG+4EAHxxxxxx -->
    <add key="StorageConnectionString" value="<ADD THE CONNECTION STRING FOR STORAGE ACCOUNT>" />
    <!-- Name of your tenant e.g. contoso.sharepoint.com -->
    <add key="TenantName" value="<YOUR TENANT NAME>.sharepoint.com" />
    <!-- Url of your web hook service e.g https://pnpwebhookdemoaad.azurewebsites.net/api/webhook -->
    <add key="WebHookEndPoint" value="https://<ADD AZURE WEB APP NAME>.azurewebsites.net/api/webhook" />
    <!-- Location of the certificate used to perform "app-only" authentication towards SharePoint Online using Azure AD authentication -->
    <add key="CertificateStore" value="My" />
    <add key="CertificateLocation" value="CurrentUser" />
    <add key="CertificateThumbprint" value="<YOUR CERTIFICATE THUMPRINT>" />
  </appSettings>
  <connectionStrings>
    <!-- SQL Azure version -->
    <!-- We need to store the last used change token per subscription and use an Azure SQL database for doing so 
	       e.g. metadata=res://*/SQL.ListWebHooks.csdl|res://*/SQL.ListWebHooks.ssdl|res://*/SQL.ListWebHooks.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=tcp:xxx.database.windows.net,1433;Database=PnPWebHookDemo;User ID=WebHooksAdmin;Password=xxxx;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient
	   -->
    <add name="SharePointWebHooks" connectionString="metadata=res://*/SQL.ListWebHooks.csdl|res://*/SQL.ListWebHooks.ssdl|res://*/SQL.ListWebHooks.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=tcp:<YOUR SQL SERVER>.database.windows.net,1433;Database=<YOUR DATABASE NAME>;User ID=<YOUR USER ID>;Password=<YOUR PASSWORD>;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />
    <!-- Local dev version -->
    <!--<add name="SharePointWebHooks" connectionString="metadata=res://*/SQL.ListWebHooks.csdl|res://*/SQL.ListWebHooks.ssdl|res://*/SQL.ListWebHooks.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=(localdb)\MSSQLLocalDB;initial catalog=SharePointWebHooks;integrated security=True;multipleactiveresultsets=True;application name=EntityFramework&quot;" providerName="System.Data.EntityClient" />-->
    <!-- The format of the connection string is "DefaultEndpointsProtocol=https;AccountName=NAME;AccountKey=KEY" -->
    <!-- For local execution, the value can be set either in this config file or through environment variables -->
    <add name="AzureWebJobsDashboard" connectionString="<ADD THE CONNECTION STRING FOR STORAGE ACCOUNT>" />
    <add name="AzureWebJobsStorage" connectionString="<ADD THE CONNECTION STRING FOR STORAGE ACCOUNT>" />
  </connectionStrings>
```

Update the app.config from the SharePoint.WebHooks.Common project as shown below:
```XML
  <connectionStrings>
    <!-- SQL Azure version -->
    <add name="SharePointWebHooks" connectionString="metadata=res://*/SQL.ListWebHooks.csdl|res://*/SQL.ListWebHooks.ssdl|res://*/SQL.ListWebHooks.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=tcp:<YOUR SQL SERVER>.database.windows.net,1433;Database=<YOUR DATABASE NAME>;User ID=<YOUR USER ID>;Password=<YOUR PASSWORD>;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />
    <!-- Local dev version -->
    <!--<add name="SharePointWebHooks" connectionString="metadata=res://*/SQL.ListWebHooks.csdl|res://*/SQL.ListWebHooks.ssdl|res://*/SQL.ListWebHooks.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=(localdb)\MSSQLLocalDB;initial catalog=SharePointWebHooks;integrated security=True;multipleactiveresultsets=True;application name=EntityFramework&quot;" providerName="System.Data.EntityClient" />-->
  </connectionStrings>
```

## Deploy the application

### Deploy the MVC Web Application - deploying to Azure
1) Right click on the SharePoint.WebHooks.MVC project and choose publish

![Deploy the MVC app](http://i.imgur.com/AlOI9eI.png)

2) Import the earlier on downloaded publishing profile file

![Import the connection file](http://i.imgur.com/RMz6GuL.png)

3) Switch the destination url to https

![Configure the web publish wizard](http://i.imgur.com/048rUFo.png)

4) Choose the **Debug** configuration (at least if you want to remotely debug), select the created database and click on **Publish**

![Finalize the configuration and publish](http://i.imgur.com/ZQS79SP.png)

### Deploy the Azure web job
1) Right click on the SharePoint.WebHooks.Job project and choose **Publish as Azure WebJob**

![Publish as Azure web job](http://i.imgur.com/hdQFtpZ.png)

2) Define a schedule: choose continous + remove dots from the default name

![Define a schedule](http://i.imgur.com/oU2Ip67.png)

3) Import the earlier on downloaded publishing profile file

![Import the publishing profile](http://i.imgur.com/HMS1XJu.png)

4) Switch the destination url to https

![Update settings](http://i.imgur.com/5srlxCr.png)

5) Choose the **Debug** configuration (at least if you want to remotely debug) and click on **Publish**

![Select config and publish](http://i.imgur.com/0jBLMdC.png)

6) Go to Azure management portal and verify the web job is created and in running state

![Verify in Azure management portal](http://i.imgur.com/EsJE5rs.png)

**Congrats!! You've completed the installation of this sample.**

