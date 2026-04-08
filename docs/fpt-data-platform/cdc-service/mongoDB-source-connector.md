---
id: "mongoDB-source-connector"
title: "MongoDB Source Connector"
sidebar_label: "MongoDB Source Connector"
description: "MongoDB Source Connector"
sidebar_position: 5
---

# MongoDB Source Connector

**Create a connector with Type: source, Database: MongoDB**

**Pre-condition:** CDC service status _Healthy_

## MongoDB Configuration

**1\. Enable oplogs:** oplogs must be enabled on the MongoDB server (applies only to standalone; cluster has it enabled by default).

**2\. Permission:** The MongoDB Connector requires the user to have permission to perform find and changeStream operations on the configured database.

  * To create a user with these permissions, use the following command:

```
db.createUser({
            user: "<USERNAME>",
            pwd: "<PASSWORD>",
            roles: [
                { role: "readWrite", db: "<DATABASE>" }
                    ]
            })
```

  * Or across all databases:

```
db.createUser({
            user: "<USERNAME>",
            pwd: "<PASSWORD>",
            roles: [
                { role: "readWrite", db: "" }
                ]
        })
```

## Steps to create a connector:

To create a connector, follow these steps:

**Step 1:** From the menu bar, select **Data Platform** > select **Workspace Management** > select **Workspace name**

**Step 2:** Under **My services**, select **CDC service**

**Step 3:** On the **CDC service** detail screen > Select the **Connectors** tab > click **Create a connector** ![connector-details](images/mongoDB-source-connector/img-001.png)

**Step 4:** Fill in the **Connector Information** screen:

  * **Name (required):** connector name. Note: The connector name may contain lowercase letters a-z or digits 0-9. Spaces are not allowed; use "-" as a separator instead.

    * **Type (required):** select source

    * **Database (required):** select MongoDB ![create-step1](images/mongoDB-source-connector/img-002.png)

**Step 5:** Click **Next** in the top-right corner to proceed to the **Properties** screen and fill in:

  * When **From FPT Database Engine** is selected — fill in:

    * **Database name (required):** Select Database

    * **Connection string (required):** MongoDB connection uri

    * **Database:** Database the connector will listen for changes on

    * **Username (required):** Username to connect to MongoDB

    * **Password (required):** Password to connect to MongoDB

    * **Collection:** Collection the connector will listen for changes on

    * **Topic prefix (required):** Prefix of topic name (.database.collection).

![image-3](images/mongoDB-source-connector/img-003.png)

  * When **Manual configuration** is selected — fill in:

    * **Connection string (required):** MongoDB connection uri

    * **Database:** Database the connector will listen for changes on

    * **Topic prefix (required):** Prefix of topic name (.database.collection). ![image-4](images/mongoDB-source-connector/img-004.png)

**Step 6:** Click Next to proceed to the **Additional Properties** screen

Select the following information:

  * **Snapshot:** Connector behavior after initialization

    * **Latest:** The Connector only listens for data changes

    * **Copy_existing:** The Connector will copy all existing data while simultaneously listening for changes. If the collection changes during the copy process, the connector will generate 2 events with the same record but 2 different operations (copyingData and the record's operation: insert/update/delete).

  * **Error Tolerance:** Connector behavior regarding exceptions.

    * **None:** the connector will stop

**Step 7:** Click **Next** to proceed to the **Review** screen

**Step 8:** Review the information and click **Create** to complete the connector creation.
