---
id: "tao-open-metadata-service"
title: "Create Open Metadata service"
sidebar_label: "Create Open Metadata service"
description: "Create Open Metadata service"
---

# Create Open Metadata service

To create an **Open Metadata** service, follow these steps:

**Step 1:** In the menu bar, select **Data Platform** > **Workspace Management** > **Workspace name**

**Step 2:** In the **My services** section, click **Create** > the **New service** popup appears, select **Open Metadata** > **Create**

![Image](images/tao-open-metadata-service/img-001.png)

**Step 3:** In the **Open Metadata** creation form, enter the **Basic Information**:

  * **Orchestration service name** (required): Select the Orchestration service that will orchestrate Spark Job operations

  * **Name** (required): Service name

Note: The service name may contain lowercase letters a-z, uppercase letters A-Z, or digits 0-9. Spaces are not allowed — use "-" or "_" instead.

  * **Description** (optional): Service description

  * **Version** (required): Service version

![Image](images/tao-open-metadata-service/img-002.png)

**Step 4:** Click **Next Step** to proceed to the **Nodes Configuration** screen

Enter the following information:

  * **Storage policy**: Select a Storage policy

  * **Disk size**: Select disk configuration size

  * **Type**: Select flavor

  * **Number of nodes**: Enter the number of nodes

:::warning
The number of nodes must be greater than or equal to 1.
:::

To enable auto-scaling, check **Enable auto scaling** and enter the desired number of nodes

:::warning
The scaled number of nodes must be greater than **Number of nodes**.
:::

![Image](images/tao-open-metadata-service/img-003.png)

**Step 5:** Click **Next** to proceed to the **Advanced** screen

  * **Database** (Database information for storing **Data governance** data — users can use a Database created in the **FPT Database Engine** service or any other **Database**)

When **type** is **PostgreSQL**:

    * **Select Database** (required): Select Database

    * **Host name** (required): Hostname or IP of the Postgres server

    * **Port** (required): Postgres server port, default is 5432

    * **Database** (required): Database name

    * **Username** (required): Account name for accessing the Database

    * **Password** (required): Password for accessing the Database

When **Manual configuration** is selected:

    * **Host name** (required): Hostname or IP of the Postgres server

    * **Port** (required): Postgres server port, default is 5432

    * **Database** (required): Database name

    * **Username** (required): User for accessing the Database

    * **Password** (required): Password for accessing the Database

After entering all **Database** information, click **Test connection** to verify the connection from the **Workspace** to the configured **Database**

  * **Search Engine Database**

    * **Type (required)**: Opensearch or Elasticsearch

    * **Database** (required): Database name

    * **Protocol (required)**: Select http or https

    * **Host name (required)**: Access address

    * **Port (required)**: Connection port

    * **Username (required)**: Account name

    * **Password (required)**: Password

    * **Index (required):** Index

Click **Test connection** to verify the connection from the **Workspace** to the **Search Engine Database**

![Image](images/tao-open-metadata-service/img-004.png)

  * **Single Sign On**

    * If Single Sign On is not enabled, the service is initialized with **Basic authentication**

    * If **Single Sign On** is enabled:

    * **Provider: FPT ID** — Enter the following information:

      * **Email**: FPT email address
    * **Provider: Google** — Enter the following information:

      * **Client ID**: An ID code used to authenticate the client with Google

      * **Client Secret**: Password used to authenticate the client with Google

      * **Email**: Email address

    * **Provider: Keycloak** — Enter the following information:

      * **Auth Provider name**: Provider name

      * **Realm**: A management space in which all users, groups, roles, clients, and other objects are managed and secured independently

      * **Auth server url**: The base URL of the Keycloak server, used by clients to perform authentication

      * **Client ID**: An ID code used to authenticate the client with Keycloak

      * **Client Secret**: Password used to authenticate the client with Keycloak

      * **Username**: Username in Keycloak

      * **Email**: Email address in Keycloak

  * **Custom Domain:**

    * **Domain (required):** Connection address for the Event Gateway service after initialization

      * Contains a-z, A-Z, 0-9, hyphens (-), and dots (.); maximum 100 characters

      * Domain name must not start or end with a hyphen (-) or dot (.)

      * Top level minimum 2, maximum 6 characters

      * Example: domain-name.com

    * **CA bundle (required):** CA certificate chain in PEM format

      * Starts with -----BEGIN CERTIFICATE----- and ends per PEM standard
    * **Private key (required):** Private key in PEM format

      * Starts with -----BEGIN PRIVATE KEY----- and ends per PEM standard

![Alt text](images/tao-open-metadata-service/img-005.png)

  * **Custom Domain**

    * **Purpose:** Allows configuring a custom domain to access services.

      * **For Public Workspace:** Used to assign a domain and certificate without needing to enable/disable TLS (HTTPS is always available).

      * **For Private Workspace:** In addition to the domain and certificate, users can optionally enable or disable TLS/SSL to choose between HTTPS or HTTP.

    * **Public Workspace**

      * **Custom domain**: Check to enable a custom domain.

      * **Domain**: Enter the domain name (e.g., abc.local, jupyter.example.com).

      * **Certificate name**: Select from the list of certificates imported in **Certificate Manager**.

      * **Buttons**:

      * **Manage certificate**: Open the certificate management screen.

      * **Validate**: Verify that the certificate is valid for the domain.

      * 
:::note
In a Public Workspace, the **TLS/SSL certificate** option is **not displayed** — the system supports HTTPS by default.
:::

![Image](images/tao-open-metadata-service/img-006.jpg)

    * **Private Workspace**

      * **Custom domain**: Check to enable a custom domain.

      * **Domain**: Enter the domain name.

      * **TLS/SSL certificate**: Check to enable HTTPS for services.

      * **Certificate name**: Select from the certificate list.

      * **Buttons**:

      * **Manage certificate**: Open certificate management.

      * **Validate**: Verify the certificate.

      * 
:::note
If **TLS/SSL certificate** is unchecked, the service will run over HTTP and no certificate is required.
:::

![Image](images/tao-open-metadata-service/img-007.jpg)

**Step 6:** Click **Next** to proceed to the **Review & create** screen

![Alt text](images/tao-open-metadata-service/img-008.png)

**Step 7.** Review all entered information, then click **Create** to complete the **Open Metadata** initialization

Initialization is complete when the **Worker Status** is **Succeeded** and the **Open Metadata** **Status** is **Healthy** (~10 minutes)
