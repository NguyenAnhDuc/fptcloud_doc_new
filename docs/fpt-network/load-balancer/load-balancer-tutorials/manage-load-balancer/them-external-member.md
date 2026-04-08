---
id: "them-external-member"
title: "Add External Members to Load Balancer"
description: "How to add and remove external endpoints in a Load Balancer Server Pool on FPT Cloud."
sidebar_label: "Add External Members"
sidebar_position: "7"
---

# Add External Members to Load Balancer

The **External member** feature allows you to add external endpoints (servers, services, or applications running on other networks) to a Server Pool. Adding external members lets you expand the Load Balancer's processing capacity and leverage external resources to improve system efficiency.

To add external members to a Load Balancer, follow these steps:

**Step 1:** In the Load Balancer list, select the Load Balancer you want to add an external member to.

**Step 2:** In the Load Balancer detail view, select the **Server pool** tab, then select the Server Pool you want to add the external member to.

**Step 3:** Under **Add server**, click **Add external member** and enter the following:

- **Name**: Display name for the external member.
- **IP Address**: IP address of the external member.
- **Port**: The port on which the member listens for requests. This is typically the port related to the specific service the member provides.
- **Weight**: Priority weight for request handling. Members with higher weight receive more requests.

**Step 4:** Click **Update Server pool** to save.

To remove an external member, click **Remove** from the **Action** menu of the member you want to delete.
