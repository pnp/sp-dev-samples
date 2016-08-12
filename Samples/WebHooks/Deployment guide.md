# SharePoint web hooks reference implementation - Deployment guide #
This guide will provide you step by step guidance on how to deploy this sample application. We'll first start with preparing the Azure resources, then we'll prep the application and SharePoint needs and finally and show you how to deploy the needed components.

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

## Preparing SharePoint to host the application

1) Browse to the site you want to deploy the application on and create a new principal via hitting the appregnew.aspx page. You can generate the client id and secret, give it a title and define the app domain being the Azure Web app you've created earlier on (pnpwebhookdemo.azurewebsites.net) and finally enter the redirect url (https://pnpwebhookdemo.azurewebsites.net in this case).

![Appregnew](http://i.imgur.com/Rn4gFG3.png)

> **Important**
Remember the client id and client secret

2) Verify you can access your applications app catalog which you can reach via your SharePoint Administration site

![Go to the app catalog](http://i.imgur.com/lgt7zF6.png)

2.1) If you do not yet have an app catalog then create one

![Create a new app catalog](http://i.imgur.com/j2vmPIb.png)

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
Update the web.config file from the SharePoint.WebHooks.MVCWeb project as shown below:

```XML
<appSettings>
    <add key="webpages:Version" value="3.0.0.0" />
    <add key="webpages:Enabled" value="false" />
    <add key="ClientValidationEnabled" value="true" />
    <add key="UnobtrusiveJavaScriptEnabled" value="true" />
    <!-- Add here a client id and secret for a principal that you grant permissions the needed permissions to the site you're installing this app to
    e.g. d54d2421-b7d5-44b5-b310-800f198f649b
    -->
    <add key="ClientId" value="<ADD THE CLIENT ID>" />
	<!-- e.g.RCmuPd9Y+JxGy5x6k1M0wdxxxxxxxx-->
    <add key="ClientSecret" value="<ADD THE CLIENT SECRET>" />
    <!-- Connection string to Azure storage account: we use a queue for async processing of web hook notifications 
         e.g. efaultEndpointsProtocol=https;AccountName=pnpwebhooksdemo;AccountKey=lG+wBesZObYg8r1pfHHZWf+XtjFuG+4EAHxxxxxx -->
    <add key="StorageConnectionString" value="<ADD THE CONNECTION STRING FOR STORAGE ACCOUNT>" />
    <!-- Name of your tenant e.g. contoso.sharepoint.com -->
    <add key="TenantName" value="<YOUR TENANT NAME>.sharepoint.com" />
    <!-- Url of your web hook service e.g https://pnpwebhookdemo.azurewebsites.net/api/webhook -->
    <add key="WebHookEndPoint" value="https://<ADD AZURE WEB APP NAME>.azurewebsites.net/api/webhook" />
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
    <!-- Add here a client id and secret for a principal that you grant permissions the needed permissions to the site you're installing this app to
    e.g. d54d2421-b7d5-44b5-b310-800f198f649b
    -->
    <add key="ClientId" value="<ADD THE CLIENT ID>" />
	<!-- e.g.RCmuPd9Y+JxGy5x6k1M0wdxxxxxxxx-->
    <add key="ClientSecret" value="<ADD THE CLIENT SECRET>" />
    <!-- Name of your tenant e.g. contoso.sharepoint.com -->
    <add key="TenantName" value="<YOUR TENANT NAME>.sharepoint.com" />
    <!-- Url of your web hook service e.g https://pnpwebhookdemo.azurewebsites.net/api/webhook -->
    <add key="WebHookEndPoint" value="https://<ADD AZURE WEB APP NAME>.azurewebsites.net/api/webhook" />
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

### Deploy the SharePoint Add-In - deploying to Azure
1) Right click on the SharePoint.WebHooks.MVCWeb project and choose publish

![Deploy the MVC app](http://i.imgur.com/AlOI9eI.png)

2) Import the earlier on downloaded publishing profile file

![Import the connection file](http://i.imgur.com/RMz6GuL.png)

3) Switch the destination url to https

![Configure the web publish wizard](http://i.imgur.com/048rUFo.png)

4) Choose the **Debug** configuration (at least if you want to remotely debug), select the created database and click on **Publish**

![Finalize the configuration and publish](http://i.imgur.com/ZQS79SP.png)

### Deploy the SharePoint Add-In - deploying to SharePoint
1) Right click on the SharePoint.WebHooks.MVC project and choose publish

![Publish the SharePoint part](http://i.imgur.com/h8DVwI1.png)

2) Select **Package the add-in**

![Package the add-in](http://i.imgur.com/isTXecw.png)

3) Add your client id

![Add your client id](http://i.imgur.com/euVFVVy.png)

4) Upload the created app package to the tenant app catalog

![Upload to tenant app catalog](http://i.imgur.com/T3WbCWz.png)

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

### Add the application to your SharePoint site
1) Add the add-in to your site via **site contents**

![Add an add-in](http://i.imgur.com/pMvnJGZ.png)

2) Select the correct add-in to add

![Choose your add-in](http://i.imgur.com/S3ArAZ4.png)

3) The add-in will need to be trusted upon installation. Note that it can take a few minutes before the add-in installation is complete, please wait a bit before testing it.

![Trust the add-in](http://i.imgur.com/8SOzJ0Y.png)

**Congrats!! You've completed the installation of this sample.**

