---
id: "quan-ly-api-site"
title: "Manage API Site"
sidebar_label: "Manage API Site"
sidebar_position: 8
---

Manage API Site


A site is an entity used to map products to a portal.

If you are on the **Pilot** or **Normal** plan, a default Public site is provided and you cannot create additional sites. To use multiple sites, upgrade to a higher plan.

## 1\. Create a New Site

**Step 1:** From the **Application** menu, go to **API Manager** > **Sites**, then click **Create.**

![Userguide FPT API Management 16](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-001.png)

**Step 2:** Enter the required information:

  * **Name:** Site name.
  * **Title:** Site title.
  * **Production mode:** Select the product mode.
  * **Virtual area:** Select a virtual area from the list pre-configured by the admin.
  * **Gateway:** Select a gateway from the list pre-configured by the admin.
  * **Portal:** Select a portal from the list pre-configured by the admin.


![Userguide FPT API Management 17](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-002.png)

**Step 3**: Click **OK** to create the **Site**.

![Userguide FPT API Management 18](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-003.png)

## 2\. Edit Site Information

To update the information of a **Site**, follow these steps:

**Step 1:** In **Site Management**, select the **Site** to edit > click **Edit**.

![Userguide FPT API Management 47](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-004.png)

**Step 3:** Enter the new information and click **OK**.

![Userguide FPT API Management 48](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-005.png)

**Note:** Some fields cannot be changed and will be disabled in the edit interface. The remaining fields must follow the same validation rules as when creating a site.


## 3\. Staging a Product

To publish a product to a site, you must first stage the product onto the site.

**Note:** When a product is staged to a site, consumers cannot yet use the APIs within that product. The product must be published before consumers can access it.

To assign a product to a site, follow these steps:

**Step 1:** In **Product Management**, select the **Product** to publish to the **Site** > **Staging**.

![Userguide FPT API Management 19](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-006.png)

**Step 2:** Click **Staging to New site**.

![Userguide FPT API Management 20](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-007.png)

**Step 3:** Enter the required information:

  * **Product**: The product to assign to the site.
  * **Site to publish**: Select the previously created site.


![Userguide FPT API Management 21](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-008.png)

**Step 4:** Click **OK**.

![Userguide FPT API Management 22](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-009.png)

**Note:**

  * One site can contain multiple products.
  * One product can be used across multiple sites.
  * The site determines which products are visible on that site (including the APIs within child products).


## 4\. Manage Product Status within a Site

After staging a product, you can go directly to the site to manage the products it contains and their operational status.

To manage products in a specific site, follow these steps:

**Step 1:** In **Site Management**, select the **Site** whose products you want to manage.

![Userguide FPT API Management 49](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-010.png)

**Step 2:** Click **Product.**

Here you will see the list of products and their status within the site.

A product can have the following statuses: **Unstaging**, **Staging**, **Published**, **Deprecated**, **Retired**, **Archived.**

The relationship between statuses is illustrated below:

![Userguide FPT API Management 50](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-011.png)

  * In the **Published** state, only consumers assigned to that product can view and use it.
  * In the **Deprecated** state, new consumers cannot see the product, but existing consumers can continue using it.
  * In the **Retired** state, existing consumers can no longer use the product.
  * In the **Archived** state, the product can be deleted. To manage products in the **Archived** state, go to the **Archived products** tab.


## 5\. Get the Product Endpoint

Each product in the Published state has an endpoint that consumers use.

To retrieve the endpoint of a product, follow these steps:

**Step 1:** In **Site Management**, select the **Site** containing the product > click **Product.**

![Userguide FPT API Management 51](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-012.png)

**Step 2:** Select the **Product** > click **Manage Api.**

![Userguide FPT API Management 52](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-013.png)

**Step 3:** The endpoint information is displayed in the **API EndPoint** column.

![Userguide FPT API Management 53](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-014.png)


## 6\. Manage the Developer Portal

After publishing a site, a portal page is created. This page is used to manage the list of products published on the site and the APIs belonging to each product.


To get the portal link, follow these steps:

**Step 1****:** From the menu, go to **Sites** > select a site > click **Edit**. The portal link is displayed in the **Portal URL** field.


![PybQsyRHfYQdAAAAAElFTkSuQmCC](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-015.png)


Step 2: Accessing that link opens a page with the following interface:


![](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-016.png)


To log in, you need an account with a username and password. Contact us to receive your account credentials.


## 7\. Manage IP Access Control

To enhance security, API providers can allow or block consumers from calling APIs from specific IP addresses.


Step 1: From the menu, go to **Sites** and select a site that has a product in the Published state.


![](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-017.png)

Step 2: Click **API Browser**, then in the details panel, check **Enable IP Limitation**.


![](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-018.png)


Step 3: Enter the IPs to Allow/Deny:

  * If an IP is entered in **Allow**: Consumers can call the API from these IP addresses.
  * If an IP is entered in **Deny**: Consumers cannot call the API from these IP addresses.
  * If IPs are in **Allow** and **Deny** is empty: Only IPs in the Allow list can access the API.


  * If IPs are in **Deny** and **Allow** is empty: All IPs can access the API except those in the Deny list.
  *   * Note: An IP address cannot be simultaneously allowed and denied.


## 8\. Testing

You can test whether a published API is working correctly before sharing the information with consumers — directly within API Management.


Follow these steps:


Step 1: From the **API Manager** menu, go to **Site** > **Product** > **Manage API**, then select the API you want to test.


Step 2: Click **Test API** or **Test With Consumer**.


For example, with **Test With Consumer**:


![0L+8P1vSrnc3CgBYH8pbd269XkPQNauXZuhoaHGHBy46gFIPazbHYAsWLAg3d3djaVPTQACAAAAL0wCEIDnjyGwAAAAAACAgkn+Hzty+ksupAM1AAAAAElFTkSuQmCC](/img/migrated/docs-fpt-api-management/quan-ly-api-site/img-019.png)


  1. Select the subscribed consumer shown in the **Consumer** dropdown.


  2. Select the corresponding HTTP method (GET/POST/PUT/DELETE).


  3. Prepend **https://** to the API endpoint.


For example: **https://** gateway.apim.fptcloud.com/demo/truong11/newapi


  4. Select the authentication method:

– Basic: The system automatically retrieves the username for the selected consumer. You only need to enter the password. Refer to the "Get consumer credentials" section for instructions.


  * – API key: The system automatically retrieves the key name. You only need to enter the key value. Refer to the "Get consumer credentials" section for instructions.
  *

  5. Click **Call** to invoke the API. The result is displayed in the **Response** field.


*
