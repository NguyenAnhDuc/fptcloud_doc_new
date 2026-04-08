---
id: "manage-access-list"
title: "Manage access list"
description: "Guide to creating and managing access lists with whitelist/blacklist and HTTP Basic Auth for proxy hosts."
sidebar_label: "Manage access list"
sidebar_position: 9
---

# Manage access list

An **access list** provides whitelist/blacklist functionality for specific IP addresses, combined with HTTP Basic Authentication for proxy hosts. Administrators can configure multiple rules, assign credentials to an access list, and apply it to proxy hosts.

This feature is useful for web services forwarded without built-in authentication, or when you need to block access from unknown IP addresses.

## Create an access list

1. Select **Access List** from the menu to open the management screen.

   [![Access list management screen](/img/migrated/Userguide-FPT-WAF-2022-34-1024x499-a6882854.png)](/img/migrated/Userguide-FPT-WAF-2022-34-1024x499-a6882854.png)

2. Click **Create Access List** to open the creation screen and enter:

   - **Name**: Access list name.
   - **Satisfy Any**
   - **Pass Auth to Host**

3. Click **Create Access List** to create it and open the detail screen.

## Advanced configuration

### Add HTTP Basic Auth credentials

1. Click **Create Basic Auth** to add authentication credentials:

   - **Username**: Authentication username.
   - **Password**: Authentication password.

   Click **Create Basic Auth** or **Create & Add Another** to add multiple accounts.

   [![Configure Basic Auth](/img/migrated/Userguide-FPT-WAF-2022-35-1024x517-4d36978c.png)](/img/migrated/Userguide-FPT-WAF-2022-35-1024x517-4d36978c.png)

### Add whitelist/blacklist IP rules

2. Click **Create Whitelist/Blacklist** to add IP addresses or subnets:

   - **Allow**: IP or subnet allowed to access.
   - **Deny**: IP or subnet denied access.
   - **IP / Subnet**: Enter the IP address or subnet.

   :::note
   Allow/deny rules are applied in the order they are defined.
   :::

   [![Configure whitelist/blacklist](/img/migrated/Userguide-FPT-WAF-2022-36-1024x519-0778cdff.png)](/img/migrated/Userguide-FPT-WAF-2022-36-1024x519-0778cdff.png)

### Assign a proxy host to the access list

3. Click **Create Proxy** to add a proxy host that uses this access list. See [Create a proxy host](/docs/en/fpt-security/fpt-cloud-waf/tutorials/manage-proxy-host/create-proxy-host).

   [![Assign proxy host to access list](/img/migrated/Userguide-FPT-WAF-2022-37-1024x516-993c3cc6.png)](/img/migrated/Userguide-FPT-WAF-2022-37-1024x516-993c3cc6.png)

## Other operations

| Operation | Description |
|---|---|
| **Edit** | Edit access list details |
| **View** | View access list details |
| **Delete** | Delete the access list |
