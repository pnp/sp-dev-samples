-- Step1: Execute against master db
--CREATE LOGIN WebHooksAdmin WITH PASSWORD = 'Pass@word1'

-- Step2: Execute in WebHooks db
CREATE USER [WebHooksAdmin] FOR LOGIN [WebHooksAdmin] WITH DEFAULT_SCHEMA = dbo

-- Add user to the database reader/writer roles
EXEC sp_addrolemember 'db_datareader', 'WebHooksAdmin'
EXEC sp_addrolemember 'db_datawriter', 'WebHooksAdmin'