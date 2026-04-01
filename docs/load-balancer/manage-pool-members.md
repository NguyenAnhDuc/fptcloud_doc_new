---
id: "manage-pool-members"
title: "Add and remove Server Pool members"
description: "How to add and remove member instances from a Load Balancer Server Pool on FPT Cloud."
sidebar_label: "Add and remove pool members"
sidebar_position: 19
---

# Add and remove Server Pool members

A **Member** is a server in a **Server Pool** responsible for handling requests routed through the Load Balancer.

Server Pool members are created automatically when you create a Load Balancer.

## Add a member

**Step 1:** In the Server Pool list, click the Server Pool you want to add a member to.

[![](/img/migrated/image-1710989399033-82cb406f.png)](/img/migrated/image-1710989399033-82cb406f.png)

**Step 2:** Under **Add server**, the **Select instance** panel lists available instances. Select the instances to add.

[![](/img/migrated/image-1710989438271-ca679a80.png)](/img/migrated/image-1710989438271-ca679a80.png)

Configure each member:

- **Port**: The port the member listens on to handle requests.
- **Weight**: Priority weight for request distribution. Members with higher weights receive more requests.

## Remove a member

To remove a Server Pool member, click **Remove** in the member's **Action** menu.

[![](/img/migrated/image-1710989470976-16ee6e91.png)](/img/migrated/image-1710989470976-16ee6e91.png)
