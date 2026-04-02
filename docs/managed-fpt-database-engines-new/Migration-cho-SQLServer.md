---
id: "Migration-cho-SQLServer"
title: "Migration for SQL Server"
description: "This guide explains how to migrate a SQL Server database using the BACPAC export/import method via SSMS."
sidebar_label: "Migration for SQL Server"
sidebar_position: 46
---

# Migration for SQL Server

**1. Export Data Tier Application via SSMS tool**

Connect to a SQL instance and expand databases in the object explorer. Right-click on a database in SSMS and you get data-tier application options as shown below.

[![](/img/migrated/1_Export_1-d4365f71.jpg)](/img/migrated/1_Export_1-d4365f71.jpg)

Right-click on the source SQL Database and click on Export Data-tier application. It launches an introduction page. This introduction page defines the summary and high-level steps for this wizard. The high-level steps are as follows:

[![](/img/migrated/1_Export_2-d3f52e18.jpg)](/img/migrated/1_Export_2-d3f52e18.jpg)

Click Next.

[![](/img/migrated/1_Export_3-7490f5a7.jpg)](/img/migrated/1_Export_3-7490f5a7.jpg)

Let's use a local disk directory, as shown below.

[![](/img/migrated/1_Export_4-8c6e3dca.jpg)](/img/migrated/1_Export_4-8c6e3dca.jpg)

By default, it extracts all schema, tables (with data) available in the database. We can also filter selected objects in the advanced page — select all database schema, tables in the advanced tab of this page. Click on the advanced tab and review the objects. It groups objects per schema such as dbo.

[![](/img/migrated/1_Export_5-63599b2c.jpg)](/img/migrated/1_Export_5-63599b2c.jpg)

We are not using any object filtering in BACPAC export. It will create an export for all tables in the database. Click on Next and review the configurations.

[![](/img/migrated/1_Export_6-836722b9.jpg)](/img/migrated/1_Export_6-836722b9.jpg)

Click **Finish**, and it starts the export of the database. You can see the success message for each step.

[![](/img/migrated/1_Export_7-3d69fcc1.jpg)](/img/migrated/1_Export_7-3d69fcc1.jpg)

We can browse to the directory and verify a BACPAC extension file exists.

[![](/img/migrated/1_Export_8-64c67507.jpg)](/img/migrated/1_Export_8-64c67507.jpg)

**2. Import a BACPAC file using SSMS Import Data-tier Application wizard**

We can copy this BACPAC file to destination SQL instance having either on-premise or Azure SQL Database. Right-click on the connected destination instance and launch **Import Data-tier applications** wizard.

[![](/img/migrated/2_Import_1-9edba262.jpg)](/img/migrated/2_Import_1-9edba262.jpg)

Click Next.

[![](/img/migrated/2_Import_2-83efdecd.jpg)](/img/migrated/2_Import_2-83efdecd.jpg)

In the next page, we specify a setting for the new database. We cannot use an existing SQL Database for importing a BACPAC package.

It also requires input for the data and log file of this new database. By default, it shows you the default data and log file location of the connected SQL instance. We can change it per requirement.

[![](/img/migrated/2_Import_3-e974b6e3.jpg)](/img/migrated/2_Import_3-e974b6e3.jpg)

Modify the new database name. In this demonstration, we specify AdventureWorksDW_BACPAC as the SQL Database name. Click Next.

[![](/img/migrated/2_Import_4-737faea7.jpg)](/img/migrated/2_Import_4-737faea7.jpg)

The next page is a summary page showcasing your configurations. We recommend you always review it before proceeding. You can easily navigate back and make the required changes.

[![](/img/migrated/2_Import_5-1775aa97.jpg)](/img/migrated/2_Import_5-1775aa97.jpg)

Click **Finish**, and you can see the following steps:

- Creates a new database
- Imports schema and data into this new database
- Disables indexes
- Inserts data into tables
- Enables indexes

[![](/img/migrated/2_Import_6-044eccdb.jpg)](/img/migrated/2_Import_6-044eccdb.jpg)

[![](/img/migrated/2_Import_7-7ba3e502.jpg)](/img/migrated/2_Import_7-7ba3e502.jpg)

Refresh the object explorer, and you see the newly restored database.
