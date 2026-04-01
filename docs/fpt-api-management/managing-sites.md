---
id: "managing-sites"
title: "Managing Sites"
description: "Create Sites to publish Products and manage API endpoints for consumers."
sidebar_label: "Managing Sites"
sidebar_position: 8
---

# Managing Sites

A **Site** is an entity used to map products to a portal.
If you're using the **Pilot** or **Normal** package, a default site is provided and additional sites cannot be created. If you need extra sites, consider upgrading to a higher-tier package.
### 1. Creating a New Site
**Step 1** : In the **Application** menu, navigate to **API Manager** > **Sites** , click **Create**.
[![](/img/migrated/Userguide-FPT-API-Management-16-1024x538-be9735da.png)](/img/migrated/Userguide-FPT-API-Management-16-1024x538-be9735da.png)
**Step 2** : Enter the required information:
  * **Name** : Site name.
  * **Title** : Title for the Site.
  * **Production Mode** : Enable or disable
  * **Virtual Area** : Choose an area from the pre-declared list by the admin.
  * **Gateway** : Choose a gateway from the pre-declared list by the admin.
  * **Portal** : Choose a Portal from the pre-declared list by the admin.

[![](/img/migrated/Userguide-FPT-API-Management-17-1024x538-c8843ff5.png)](/img/migrated/Userguide-FPT-API-Management-17-1024x538-c8843ff5.png)
**Step 3** : Click **OK** to create the Site.
[![](/img/migrated/Userguide-FPT-API-Management-18-1024x538-c20fb585.png)](/img/migrated/Userguide-FPT-API-Management-18-1024x538-c20fb585.png)
### 2. Modifying Site Information
To modify the information about a Site, follow these steps:
**Step 1** : In **Site Management** , choose the Site to modify > **Edit**.
[![](/img/migrated/Userguide-FPT-API-Management-47-1024x538-e8bb885d.png)](/img/migrated/Userguide-FPT-API-Management-47-1024x538-e8bb885d.png)
**Step 2** : Enter new information and click **OK**.
[![](/img/migrated/Userguide-FPT-API-Management-48-1024x538-db207ea1.png)](/img/migrated/Userguide-FPT-API-Management-48-1024x538-db207ea1.png)
**Note** : Certain fields cannot be altered and will be disabled in the edit interface.
### 3. Staging a Product
To start deploying a product onto a site, users need to stage (place) the product onto the site.
**Note** : When a product is staged onto a site, consumers still cannot use the APIs within that product. Users need to publish the product for consumers to use it.
Users need to access the product interface and select the site to stage the product.
To assign a product to a site, follow these steps:
**Step 1** : In **Product Management** , select the Product to be published to the Site > **Staging**.
[![](/img/migrated/Userguide-FPT-API-Management-19-1024x538-32e49e03.png)](/img/migrated/Userguide-FPT-API-Management-19-1024x538-32e49e03.png)
**Step 2** : Click **Staging to New site**.
[![](/img/migrated/Userguide-FPT-API-Management-20-1024x538-c19e306e.png)](/img/migrated/Userguide-FPT-API-Management-20-1024x538-c19e306e.png)
**Step 3** : Enter the required information:
  * **Product** : Product to be assigned to the Site.
  * **Site to publish** : Choose a previously created Site.

[![](/img/migrated/Userguide-FPT-API-Management-21-1024x538-9ac596d9.png)](/img/migrated/Userguide-FPT-API-Management-21-1024x538-9ac596d9.png)
**Step 4** : Click **OK**.
[![](/img/migrated/Userguide-FPT-API-Management-22-1024x538-7e8c715e.png)](/img/migrated/Userguide-FPT-API-Management-22-1024x538-7e8c715e.png)
**Note** : 
  * Products and Sites are linked in a **Many-to-Many** relationship. Therefore, a Site can be associated with multiple Products, and a Product can simultaneously attached to multiple Sites.
  * The Site will determine which product is displayed on that site (and the APIs within that product).

### 4. Managing the Status of Products within a Site
After Staging a product, users can directly access the Site to manage the products within it and their operational status.
To manage Products within a specific site, follow these steps:
**Step 1** : In **Site Management** , choose the Site to manage the products within:
[![](/img/migrated/Userguide-FPT-API-Management-49-1024x538-91231408.png)](/img/migrated/Userguide-FPT-API-Management-49-1024x538-91231408.png)
**Step 2** : Click **Product**.
Here, you will see a list of Products and their statuses within the Site.
Each product will have one of the following status: **Unstaging, Staging, Published, Deprecated, Retired, Archived**.
The relationships between these statuses are described as follow:
[![](/img/migrated/Userguide-FPT-API-Management-50-1024x49-64674848.png)](/img/migrated/Userguide-FPT-API-Management-50-1024x49-64674848.png)
  * In the **Published** state, consumers assigned to that product can view and use it.
  * In the **Deprecated** state, consumers will no longer see the product, but those who used it can continue using them.
  * In the **Retired** state, old consumers will no longer be able to access the product.
  * In the **Archived** state, the product can be deleted. To manage products in the Archived state, go to the **Archived Products** tab.

### 5. Getting Product Endpoint Information
Every product in the **Published** state has an **Endpoint** for consumer use.
To get the Endpoint information for a product, follow these steps:
**Step 1** : In **Site Management** , select the Site containing the desired Product > Click **Product**.
[![](/img/migrated/Userguide-FPT-API-Management-51-1024x538-6cfa063a.png)](/img/migrated/Userguide-FPT-API-Management-51-1024x538-6cfa063a.png)
**Step 2** : Choose the Product for which you need Endpoint information > click **Manage API**.
[![](/img/migrated/Userguide-FPT-API-Management-52-1024x538-de25edf9.png)](/img/migrated/Userguide-FPT-API-Management-52-1024x538-de25edf9.png)
**Step 3** : The required information will be available in the **API Endpoint** field.
[![](/img/migrated/Userguide-FPT-API-Management-53-1024x538-0de79411.png)](/img/migrated/Userguide-FPT-API-Management-53-1024x538-0de79411.png)
### 6. Managing the Dev-Portal Page
After publishing a site, a portal page is created. This page manages the list of publicized products on that site and lists the APIs within those products.
To get the portal link, follow these steps:
**Step 1** : Go to **Sites** > Select a site > **Edit**. The portal page link is in the **Portal URL** field.
[![](/img/migrated/api9-ada69ee7.png)](/img/migrated/api9-ada69ee7.png)
**Step 2** : Accessing that link will redirect you to a page with the following interface:
[![](/img/migrated/api10-0c966bd1.png)](/img/migrated/api10-0c966bd1.png)
To log in, you need an username and password. Please contact us for account information.
### 7. Managing IP Addresses
For enhanced security, API Providers can allow or block consumers' API calls from specific IP addresses.
**Step 1** : In **Sites** , select a site containing products in a Published state.
[![](/img/migrated/api11-a78db8be.png)](/img/migrated/api11-a78db8be.png)
**Step 2** : Choose **API Browser** , and in details, enable **IP Limitation**.
[![](/img/migrated/api12-d5952189.png)](/img/migrated/api12-d5952189.png)
**Step 3** : Enter Allowed/Denied IP:
  * If you enter an IP in **Allow** : Consumers can call APIs from IPs listed here.
  * If you enter an IP in **Deny** : Consumers cannot call APIs from IPs listed here.
  * If you enter IPs in **Allow** and leave **Deny** empty: Only IPs listed in Allow can access.
  * If you enter IPs in **Deny** and leave **Allow** empty: All IPs can access except those listed in Deny.

**Note** : You cannot simultaneously allow and deny the same IP.
### 8. Testing
For convenient API verification after publishing on a site before sharing information with consumers, you can test this within our API Management system.
Here's how:
**Step 1** : In **API Manager** menu, go to **Site** > **Product** > **Manage API** , choose the API you want to test.
**Step 2** : Click **Test API** or **Test With Consumer**.
For **Test With Consumer** , follow these steps:
[![](/img/migrated/api13-5ecd3317.png)](/img/migrated/api13-5ecd3317.png)
  1. Choose the subscribed consumer from the list.
  2. Select the corresponding **HTTP method** (GET/POST/PUT/DELETE).
  3. Include **https://** before the API endpoint. 
For instance: `https://gateway.apim.fptcloud.com/demo/truong11/newapi`
  4. Choose the **authentication** method:
     * **Basic** : The system automatically retrieves the corresponding username for the chosen consumer. Enter the password. Refer to **5. Get Consumer Authentication Information** section in **Managing Consumers**.
     * **API Key** : The system automatically retrieves the key name. Enter the key value. Refer to **5. Get Consumer Authentication Information** section in **Managing Consumers**.
  5. Click **Call** to make the API call. The result is displayed in the **Response** field.