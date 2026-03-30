---
id: "demo"
title: "Demo"
description: "To connect to Kafka, you can refer to the detailed steps in the **Document** section from the menu."
sidebar_label: "Demo"
sidebar_position: 20
pagination_next: null
---

# Demo

To connect to Kafka, you can refer to the detailed steps in the **Document** section from the menu.
### Part 1: Producer sends message to topic
**Step 1** : Create a `producer.py` file
[![](/img/migrated/demo1-ab8e9665.png)](/img/migrated/demo1-ab8e9665.png)
**Step 2** : In the file `producer.py`, fill in some informations like:
[![](/img/migrated/demo2-1b34840f.png)](/img/migrated/demo2-1b34840f.png)
  * **sasl_plain_username** and **sasl_plain_password** are the username and password of the credentials you have created.
  * **topic** is the name of the topic you have created and previously set permissions for (allow, write topic).
  * **bootstrap.servers** : This is the information of the cluster that the admin has assigned to the user.

**Step 3** : After setting up the necessary information, open the terminal and run this command:

```
Copypython .\producer.py
```

The result should be as follows:
[![](/img/migrated/demo3-f019af0a.png)](/img/migrated/demo3-f019af0a.png)
If the output is correct, it means the producer has successfully sent messages to the partitions of the topic.
### Part 2: Consumer reads the sent message
**Step 1** : First, create a `consumer.py` file
[![](/img/migrated/demo4-bd2ed2a2.png)](/img/migrated/demo4-bd2ed2a2.png)
[![](/img/migrated/demo5-7e413856.png)](/img/migrated/demo5-7e413856.png)
**Step 2** : In this `consumer.py` file, fill in some informations like:
[![](/img/migrated/demo6-6962ee80.png)](/img/migrated/demo6-6962ee80.png)
  * **group_name** is the name of the group you have created and previously set permissions for (allow, read topic).
  * **sasl_plain_username** and **sasl_plain_password** are the username and password of the credentials you have created.
  * **topic** is the name of the topic you have created and previously set permissions for (allow, write topic; allow, read topic).
  * **bootstrap.servers** : This is the information of the cluster that the admin has assigned to the user.

**Step 3** : After setting up the necessary information, open the terminal and run this command:

```
Copypython .\consumer.py
```

The result should be as follows:
[![](/img/migrated/demo7-d43e6100.png)](/img/migrated/demo7-d43e6100.png)