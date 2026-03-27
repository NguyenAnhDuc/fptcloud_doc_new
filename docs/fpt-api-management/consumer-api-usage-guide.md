---
id: "consumer-api-usage-guide"
title: "Consumer Api Usage Guide"
description: "To begin using the APIs, clients will need to acquire the following information:"
sidebar_label: "Consumer Api Usage Guide"
sidebar_position: 11
---

# Consumer Api Usage Guide

### 1. Receiving Information from API Provider
To begin using the APIs, clients will need to acquire the following information:
  * **API Endpoint** : Provided according to the **Get Product Endpoint** instructions.
  * **Authorization** : Consumer's authentication method. Currently supporting Basic or API Key.
    * If the Authorization type is **Basic** :
      * **Username** : Username follows this structure: `Username = UsernameProvider + site name + usernameConsumer`.
_For example_ : `demo123.sitedemo.demoacc`
Or as provided in the Consumer's authentication information.
      * **Password** : Password of the user declared during Consumer creation.
    * If the Authorization type is **API Key** :
      * **Key** : The API Key.
      * **Value** : Provided according to the instructions in the

### 2. Using Postman
Once all necessary information is acquired, clients can use **Postman** to start utilizing APIs provided by API Management.
**Step 1** : Enter the **endpoint** and select the API call **method**.
[![](/img/migrated/Userguide-FPT-API-Management-33-1024x640-6851d77f.png)](/img/migrated/Userguide-FPT-API-Management-33-1024x640-6851d77f.png)
**Step 2** : Enter Authorization Information:
  * Select **Basic Auth** and enter Username/Password if Authorization is **Basic**.
  * Select **API Key** and enter the key if Authorization is **API Key**.

[![](/img/migrated/Userguide-FPT-API-Management-34-1024x640-c6cc1291.png)](/img/migrated/Userguide-FPT-API-Management-34-1024x640-c6cc1291.png)
**Step 3** : Enter any request body, or additional parameters for calling the API, and click **Send**.
[![](/img/migrated/Userguide-FPT-API-Management-35-1024x640-fc9f24a1.png)](/img/migrated/Userguide-FPT-API-Management-35-1024x640-fc9f24a1.png)
**Step 4** : Receive the response:
  * Status code **2xx** : Successful API call.
  * Status code **4xx – 5xx** : Error – report to FCI for assistance.

[![](/img/migrated/Userguide-FPT-API-Management-36-1024x640-9e719493.png)](/img/migrated/Userguide-FPT-API-Management-36-1024x640-9e719493.png)
**Note** : The error checklist should be checked sequentially as follows:
  * Check username, password.
  * Report to API Provider to verify client permissions with the API.
  * Check if the API has been correctly declared, any missing headers or parameters?
  * Check if the API has an error?
  * Report to FCI to verify the gateway.