---
id: "managing-consumers"
title: "Managing Consumers"
description: "After the provider publishes a product on a site, the client cannot immediately use those APIs. To enable client access,"
sidebar_label: "Managing Consumers"
sidebar_position: 9
pagination_next: null
---

# Managing Consumers

After the provider publishes a product on a site, the client cannot immediately use those APIs. To enable client access, the provider must go to the **Consumer** menu to create client information and assign the client to a previously published product. Only then can the client utilize the APIs.
### 1. Creating New Consumers
**Step 1** : In the **API Manager** menu, select **Consumers** > **Create**.
[![](/img/migrated/Userguide-FPT-API-Management-26-1024x538-38542a55.png)](/img/migrated/Userguide-FPT-API-Management-26-1024x538-38542a55.png)
**Step 2** : Enter the required information:
  * **Name** : Consumer name.
  * **Site** : Select an active Consumer site.
  * **API Key** : Allow authenticate with an API key when enabled.
  * **Title** : Title for the consumer.
  * **Password** : Password if using Basic Authentication.
  * **Confirm Password** : Password confirmation.
  * **Max per second** : Limits the number of API calls the client can make per second.
  * **Max per minute** : Limits the number of API calls the client can make per minute.
  * **Max per hour** : Limits the number of API calls the client can make per hour.

[![](/img/migrated/Userguide-FPT-API-Management-27-1024x538-8505cbdc.png)](/img/migrated/Userguide-FPT-API-Management-27-1024x538-8505cbdc.png)
**Step 3** : Click **OK** to create.
[![](/img/migrated/Userguide-FPT-API-Management-28-1024x538-29ff8f20.png)](/img/migrated/Userguide-FPT-API-Management-28-1024x538-29ff8f20.png)
### 2. Subscribe to a Product
Once the Consumer is created, to use the APIs within a Product, the Consumer must subscribe to the Product.
**Step 1** : In **Consumer Management** , select the Consumer and click **Product Subscription**.
[![](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)
**Step 2** : Click **Subscribe Product**.
[![](/img/migrated/Userguide-FPT-API-Management-30-1024x538-a7aedaa1.png)](/img/migrated/Userguide-FPT-API-Management-30-1024x538-a7aedaa1.png)
**Step 3** : Select the Product. The Product must be in a published state to select it in the subscription interface.
[![](/img/migrated/Userguide-FPT-API-Management-31-1024x538-85d308c1.png)](/img/migrated/Userguide-FPT-API-Management-31-1024x538-85d308c1.png)
**Step 4** : Click **OK**.
[![](/img/migrated/Userguide-FPT-API-Management-32-1024x538-401df389.png)](/img/migrated/Userguide-FPT-API-Management-32-1024x538-401df389.png)
The client can now use the APIs provided by the API Provider.
**Note** : The product must be in a published state for the consumer to subscribe.
### 3. Unsubscribing Product
**Step 1** : In **Consumer Management** , select the Consumer and click **Product Subscription**.
[![](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)
**Step 2** : Click **Unsubscribe Product**.
[![](/img/migrated/Userguide-FPT-API-Management-54-1024x538-ae92854b.png)](/img/migrated/Userguide-FPT-API-Management-54-1024x538-ae92854b.png)
**Step 3** : Click **OK**.
[![](/img/migrated/Userguide-FPT-API-Management-55-16026107.png)](/img/migrated/Userguide-FPT-API-Management-55-16026107.png)
### 4. Modifying Consumer Information
To adjust a Consumer's information, follow these steps:
**Step 1** : In **Consumer Management** , select the consumer to modify > **Edit**.
[![](/img/migrated/Userguide-FPT-API-Management-56-1024x538-cfc6b966.png)](/img/migrated/Userguide-FPT-API-Management-56-1024x538-cfc6b966.png)
**Step 2** : Enter the new information and click **OK**.
[![](/img/migrated/Userguide-FPT-API-Management-57-1024x538-7fe0874b.png)](/img/migrated/Userguide-FPT-API-Management-57-1024x538-7fe0874b.png)
**Note** : Some fields cannot be changed and will be disabled in the edit interface.
### 5. Retrieving Consumer Authentication Information
To use APIs created from API Management, the Consumer must retrieve authentication information and provide it when sending requests to APIs. Currently, API Management supports two authentication methods: **Basic Auth (User/Pass)** and **API Key**.
#### 5.1. Retrieving Username and Password for Basic Auth:
  * **Username** : Username follows this structure: `Username = UsernameProvider + site name + usernameConsumer`.
_For example_ : `demo123.sitedemo.demoacc`
Or as provided in the Consumer's authentication information:
In **Consumer Management** , select the Consumer > **Edit**.
[![](/img/migrated/Userguide-FPT-API-Management-58-1024x590-c31b656b.png)](/img/migrated/Userguide-FPT-API-Management-58-1024x590-c31b656b.png)
  * **Password** : Password of the user declared during Consumer creation.

#### 5.2. Retrieving API Key Information:
**Step 1** : In **Consumer Management** , select the Consumer > **Edit**.
[![](/img/migrated/Userguide-FPT-API-Management-60-1024x590-14edb59b.png)](/img/migrated/Userguide-FPT-API-Management-60-1024x590-14edb59b.png)
**Step 2** : Retrieve the API Key from the **API Key** field.
[![](/img/migrated/Userguide-FPT-API-Management-61-1024x590-bca437e1.png)](/img/migrated/Userguide-FPT-API-Management-61-1024x590-bca437e1.png)
### 6. Deleting a Consumer
To delete a previously declared Consumer from the system, ensure the Consumer has unsubscribed from all Products. To unsubscribe from products, follow the íntruction in the **Unsubscribing Product** section.
To delete a Consumer, follow these steps:
**Step 1** : In **Consumer Management** , choose the Consumer to delete > **Remove**.
[![](/img/migrated/Userguide-FPT-API-Management-62-1024x538-8c38acd6.png)](/img/migrated/Userguide-FPT-API-Management-62-1024x538-8c38acd6.png)
**Step 2** : In the confirmation popup, click **Yes** to proceed.
[![](/img/migrated/Userguide-FPT-API-Management-55-16026107.png)](/img/migrated/Userguide-FPT-API-Management-55-16026107.png)
**Note** : If you encounter this error: **Could not remove that consumer as there are still subscriptions of that consumer!** , you need to unsubscribe from all products before performing this action.