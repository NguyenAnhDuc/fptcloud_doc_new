---
id: "global-search-usage"
title: "Using Global Search"
description: "Step-by-step guide to using the Global Search feature on FPT Cloud to find and manage resources."
sidebar_label: "Using Global Search"
sidebar_position: "2"
---

# Using Global Search

The Global Search feature on FPT Cloud lets you quickly search for resources within a Tenant's scope, including **Instances, IP Addresses, Subnets, Security Groups, and Databases**.

**Step 1.** Enter a keyword in the search box at the top of the FPT Cloud interface.

[![](/img/migrated/gsdb-1024x535-32afb917.png)](/img/migrated/gsdb-1024x535-32afb917.png)

**Step 2.** Select one of the tabs — Instances, IP Addresses, Subnets, Security Groups, or Database — to view results grouped by resource type.

- Results below each tab correspond to that resource type.
- You can search for Public IP and Private IP addresses and apply them to VM NICs. You can view resources associated with an IP (Associated Resource — the current scope supports searching Instances and Subnets by IP). Searching for IPs outside the described catalog (for example, DHCP IPs or gateway IPs) is not supported.
- Click any result to go to the detailed information page for that resource.

:::note
If a resource does not have a detail page, the system navigates to the list screen for that resource type.
:::

**Step 3.** To view all results, click **View all result**.

**Step 4.** The system opens a screen showing all search results.

[![](/img/migrated/Screenshot-2025-11-03-at-10.09.40-1024x5-1d8fcc25.png)](/img/migrated/Screenshot-2025-11-03-at-10.09.40-1024x5-1d8fcc25.png)

**Step 5.** Narrow results using the VPC or Region filters, or use the **Search by resource name** field.

**Step 6.** Click **Download** to export the result list as a file based on what is currently shown on screen.

[![](/img/migrated/search-img-4-1024x801-d4eae9d2.png)](/img/migrated/search-img-4-1024x801-d4eae9d2.png)

The downloaded file is in Excel format and contains 6 sheets:

- **Sheet Summary**: consolidates all search results including Instances, Floating IPs, Subnets, Security Groups, and Databases.
- **Sheet Instances**: groups Instances from the Summary sheet. Left blank if the Summary sheet has no data.

[![](/img/migrated/search-img-5-1024x517-6eb1006b.png)](/img/migrated/search-img-5-1024x517-6eb1006b.png)

- **Sheet Floating IPs**: groups Floating IPs from the Summary sheet. Left blank if the Summary sheet has no data.
- **Sheet Subnets**: groups Subnets from the Summary sheet. Left blank if the Summary sheet has no data.
- **Sheet Security Groups**: groups Security Groups from the Summary sheet. Left blank if the Summary sheet has no data.
- **Sheet Database**: groups Databases from the Summary sheet. Left blank if the Summary sheet has no data.
