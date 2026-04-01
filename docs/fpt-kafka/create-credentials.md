---
id: "create-credentials"
title: "Create Credentials"
description: "Users can create **Credentials** (username/password pair) for Kafka Service’s connection configuration using the _SASL/S"
sidebar_label: "Create Credentials"
sidebar_position: 10
---

# Create Credentials

Users can create **Credentials** (username/password pair) for Kafka Service’s connection configuration using the _SASL/SCRAM-SHA-256_ authentication method.
**Step 1** : From the menu, navigate to **Application** > **Credentials**. Click **Create**
**Step 2** : Enter the necessary information"
  * **Username** (required)
  * **Password** (required) 

[![](/img/migrated/Pic1_Taocre-e9963007.png)](/img/migrated/Pic1_Taocre-e9963007.png)
**Note** : Initially, the system will auto-generate a password. You can reset the password if needed.
**Step 3** : Click **OK** to create the credential.
**Note** : The topic name must follow the format **_[prefix].[credential name]_**
