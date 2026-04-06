---
id: "mysql-sink-connector"
title: "MySQL Sink Connector"
sidebar_label: "MySQL Sink Connector"
description: "MySQL Sink Connector"
---

# MySQL Sink Connector

**Create a connector with Type: sink, Database: MySQL**

**Pre-condition:** CDC service status is healthy

## Steps to create a connector:

**Step 1:** From the menu bar, select **Data Platform** > select **Workspace Management** > select **Workspace name**

**Step 2:** Under **My services**, select **CDC service**

**Step 3:** On the **CDC service** detail screen > Select the **Connectors** tab > click **Create a connector** ![image-1](images/mysql-sink-connector/img-001.png)

**Step 4:** Fill in the **Connector Information** screen:

  * **Name (required):** connector name

Note: The connector name may contain lowercase letters a-z or digits 0-9. Spaces are not allowed; use "-" as a separator instead.

  * **Type** **(required):** select **sink**

  * **Database (required):** select **MySQL** ![image-2](images/mysql-sink-connector/img-002.png)

**Step 5**: Click **Next** to proceed to the **Properties** screen

Fill in the Properties screen information

  * When **Manual configuration** is selected — fill in:

    * **Host Name** (required): Hostname or IP of MySQL

    * **Port** (required): MySQL server port, default: `3306`.

    * **Database name** (required): Target database the Connector will sink data into

    * **Username** (required): Username used by the Connector

    * **Password** (required): Password used by the Connector

    * **Topics** (required): List of topics the Connector will consume and sink data into the target database, separated by "," ![image-3](images/mysql-sink-connector/img-003.png)

  * When **From Database Engine** is selected — fill in:

    * **Database name** (required): Database name

    * **Host Name** (required): Hostname or IP of MySQL

    * **Port** (required): MySQL server port, default: `3306`.

    * **Database name** (required): Target database the Connector will sink data into

    * **Username** (required): Username used by the Connector

    * **Password** (required): Password used by the Connector

    * **Topics** (required): List of topics the Connector will consume and sink data into the target database, separated by "," ![image-4](images/mysql-sink-connector/img-004.png)

  * Click Test connection to verify the connection from Workspace to the entered Database

  * **Converter**

    * **Converter key**: select the key value for the converter

    * **Converter key schema enable**: select whether to use schema in the Converter key

    * **Converter value**: select the value for the converter

    * **Converter value schema enable**: select whether to use schema in the Converter value

**Step 6:** Click **Next** to proceed to the **Additional Properties** screen

Enter the following information:

  * **Timezone:** select the appropriate timezone for the data from the source database

  * **Task max:** number of tasks to process simultaneously

  * **Type:** select the Database source type

  * **Name**: schema name

  * **Topic 1**: topic name listened to from the source connector

  * **Table 1:** table name listening for data changes from the source connector

  * **Mode** (required): Connector behavior when a message cannot be processed

    * **None**: The Connector will skip messages that cannot be sinked into the database

    * **All**: Error messages will be sent to the specified topic ![image-5](images/mysql-sink-connector/img-005.png)

**Step 7**: Click **Next** to proceed to the **Review** screen ![image-6](images/mysql-sink-connector/img-006.png)

**Step 8:** Review the information and click **Create** to complete the connector creation
