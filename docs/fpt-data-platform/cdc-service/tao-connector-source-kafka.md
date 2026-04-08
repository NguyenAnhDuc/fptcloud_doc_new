---
id: "tao-connector-source-kafka"
title: "Create connector source Kafka"
sidebar_label: "Create connector source Kafka"
description: "Create connector source Kafka"
sidebar_position: 23
---

# Create connector source Kafka

Connect and ingest data from one or more Kafka topics of another Kafka cluster (which can be an external source or a different system).

Enables **synchronization** and **forwarding** of data between clusters.

**Use case: Create a connector with Type: source, Database: Kafka**

**Pre-condition:** CDC service status is **Healthy**

To create a connector, follow these steps:

**Step 1:** From the menu bar, select **Data Platform** > **Workspace Management** > Workspace name

**Step 2:** Under **My services**, select **CDC service**

**Step 3:** On the **CDC service** detail screen > Select the **Connectors** tab > Click **Create a connector**

![create-connector](images/tao-connector-source-kafka/img-001.png)

**Step 4:** Enter the connector information:

  * **Name** (required): connector name

Note: The connector name may contain lowercase letters a-z or digits 0-9. Spaces are not allowed; use "-" instead of a space.

  * **Type** (required): select source

  * **Database** (required): select Kafka

![Hình ảnh](images/tao-connector-source-kafka/img-002.png)

**Step 5:** Click **Next** to proceed to the **Properties** screen

There are two options: From FPT Database Engine, Manual configuration

  * **When selecting Manual configuration**

Enter and select the following information:

    * **Cluster alias name**: Alias name representing the Kafka cluster, containing only letters, digits, and "-"; used as a prefix for topic names when replicating data.

    * **Bootstrap server endpoint:** enter the Bootstrap server endpoint address

    * **Security protocol**: select one of the following security protocols:

    * **SASL_PLAINTEXT**: A simple authentication mechanism using Username and password

      * SASL Mechanism

      * SASL Username

      * SASL Password

    * **SASL_SSL:** Provides comprehensive security for authentication and data encryption via Username and password

      * SASL Mechanism1

      * SASL Username

      * SASL Password

    * **PLAINTEXT:** Data transmitted over the network is not encrypted; not recommended

    * **SSL:** A network security protocol used to protect data when transmitted over the Internet

![Hình ảnh](images/tao-connector-source-kafka/img-003.png)

  * **When selecting From FPT Database Engine**

Enter and select the following information:

  * **Database Name (required):** select Database

    * **Cluster alias name**: Alias name representing the Kafka cluster, containing only letters, digits, and "-"; used as a prefix for topic names when replicating data.

    * **Bootstrap server endpoint:** enter the Bootstrap server endpoint address

    * **Security protocol**: select one of the following security protocols:

    * **SASL_PLAINTEXT**: A simple authentication mechanism using Username and password

      * SASL Mechanism

      * SASL Username

      * SASL Password

    * **SASL_SSL**: Provides comprehensive security for authentication and data encryption via Username and password

      * SASL Mechanism

      * SASL Username

      * SASL Password

    * **PLAINTEXT**: Data transmitted over the network is not encrypted; not recommended

    * **SSL**: A network security protocol used to protect data when transmitted over the Internet

![Hình ảnh](images/tao-connector-source-kafka/img-004.png)

  * **Kafka topic**

Click the '+' button to retrieve topic information

Note: maximum of 100 topics can be retrieved

Click **Test Connection** to verify the connection from the **Workspace** to the **Kafka Cluster**

**Step 6:** Click **Next** to proceed to the **Additional properties** screen

Enter and select the following information:

  * **Task:**

    * Number of tasks: Enter the number of tasks for the connector. _(This number should be less than or equal to the number of partitions in the Kafka topic.)_
  * _**Replication**:_

  * Replication policy: Select the policy for replicating topics.

    * _DefaultReplicationPolicy_: Adds the source cluster alias prefix to the replicated topic name.

Example: topic-name becomes alias-name.topic-name

    * _IdentityReplicationPolicy_: Keeps the original topic name.

Example: topic-name remains topic-name

  * Replication factor: Enter the number of replicas for each Kafka topic partition.

    * Enter -1 to use the broker's default replication factor.

![Hình ảnh](images/tao-connector-source-kafka/img-005.png)

**Step 7:** Click **Next** to proceed to the **Review** screen

![Hình ảnh](images/tao-connector-source-kafka/img-006.png)

**Step 8:** Review the information and click **Create** to complete the connector creation.
