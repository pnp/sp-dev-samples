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
    --[Id] int IDENTITY(1,1) NOT NULL,
	[Id] uniqueidentifier NOT NULL,
    [ListId] uniqueidentifier  NOT NULL,
    [LastChangeToken] nvarchar(max)  NOT NULL
);
GO
ALTER TABLE [dbo].[ListWebHooks]
ADD CONSTRAINT [PK_ListWebHooks]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO