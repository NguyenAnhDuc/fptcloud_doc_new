---
id: "managing-products"
title: "Managing Products"
description: "Create, assign APIs, edit, and delete Products on FPT API Management."
sidebar_label: "Managing Products"
sidebar_position: 7
---

# Managing Products

### 1. Declare a Product
**Step 1** : In the **Application** menu, go to **API Manager** > **Products**. Click **Create**.
[![](/img/migrated/Userguide-FPT-API-Management-9-1024x538-a464f0e4.png)](/img/migrated/Userguide-FPT-API-Management-9-1024x538-a464f0e4.png)
**Step 2** : Enter the required information:
  * **Name** : Product name.
  * **Title** : Title for the Product.
  * **Visibility Type** : Product display mode. Options available are Public or Closed.

[![](/img/migrated/Userguide-FPT-API-Management-10-1024x538-5c96395a.png)](/img/migrated/Userguide-FPT-API-Management-10-1024x538-5c96395a.png)
**Step 3** : Click **OK** to create the Product.
[![](/img/migrated/Userguide-FPT-API-Management-11-1024x538-93a6a17c.png)](/img/migrated/Userguide-FPT-API-Management-11-1024x538-93a6a17c.png)
If the **Create** button is disabled, check your API Management service package. For the **Pilot** and **Normal** packages, only a maximum of 1 Product can be created in the system.
### 2. Edit Product Information
To modify the information about a Product, follow these steps:
**Step 1** : In **Product Management** , choose the Product to modify > **Edit**.
[![](/img/migrated/Userguide-FPT-API-Management-42-1024x538-10a13d66.png)](/img/migrated/Userguide-FPT-API-Management-42-1024x538-10a13d66.png)
**Step 2** : Enter new information and click **OK**.
[![](/img/migrated/Userguide-FPT-API-Management-43-1024x538-26ece1a3.png)](/img/migrated/Userguide-FPT-API-Management-43-1024x538-26ece1a3.png)
### 3. Attach APIs to a Product
To attach an API to a Product, follow these steps:
**Step 1** : In **Product Management** , select the Product to which you want to attach an API > Click **Register API**.
[![](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)
**Step 2** : Click **Register**.
[![](/img/migrated/Userguide-FPT-API-Management-13-1024x538-40e6fd9c.png)](/img/migrated/Userguide-FPT-API-Management-13-1024x538-40e6fd9c.png)
**Step 3** : Choose the API to assign to the Product and click **Select**.
[![](/img/migrated/Userguide-FPT-API-Management-14-1024x538-86d8a0d0.png)](/img/migrated/Userguide-FPT-API-Management-14-1024x538-86d8a0d0.png)
**Step 4** : Click **OK** to save.
[![](/img/migrated/Userguide-FPT-API-Management-15-1024x538-26910f97.png)](/img/migrated/Userguide-FPT-API-Management-15-1024x538-26910f97.png)
**Note** : 
  * Products and APIs are linked in a **Many-to-Many** relationship. Therefore, a Product can be associated with multiple APIs, and an API can simultaneously attached to multiple Products.
  * Products will determine how grouped APIs within the product are published to specific consumer types.

### 4. Detach APIs from a Product
To detach an API from a Product, follow these steps:
**Step 1** : In **Product Management** , select the Product to which you want to detach an API > **Register API**.
[![](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)
**Step 2** : Choose the API to remove from the Product > **Remove**.
[![](/img/migrated/Userguide-FPT-API-Management-44-1024x538-ce6ff282.png)](/img/migrated/Userguide-FPT-API-Management-44-1024x538-ce6ff282.png)
**Step 3** : Click **Yes** to confirm.
[![](/img/migrated/Userguide-FPT-API-Management-45-426f4f56.png)](/img/migrated/Userguide-FPT-API-Management-45-426f4f56.png)
### 5. Delete a Product
To delete a previously declared Product from the system, ensure the Product has no REST APIs associated. To remove REST APIs from a Product, follow the instructions in the **Detach APIs from a Product** section.
To delete a Product, follow these steps:
**Step 1** : In **Product Management** , choose the Product to delete > **Remove Product**.
[![](/img/migrated/Userguide-FPT-API-Management-46-1024x538-da46540b.png)](/img/migrated/Userguide-FPT-API-Management-46-1024x538-da46540b.png)
**Step 2** : In the confirmation popup, click **Yes** to proceed.
[![](/img/migrated/Userguide-FPT-API-Management-45-426f4f56.png)](/img/migrated/Userguide-FPT-API-Management-45-426f4f56.png)
**Note** : If you encounter this error: **Could not remove that product as there are still APIs in the product!** , you need to remove all APIs from that Product before performing this action.