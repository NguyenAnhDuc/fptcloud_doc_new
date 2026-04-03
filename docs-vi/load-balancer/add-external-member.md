---
id: "add-external-member"
title: "ロードバランサーへの外部メンバーの追加"
description: "FPT Cloud ロードバランサーのサーバープールに外部エンドポイントを追加・削除する方法を説明します。"
sidebar_label: "外部メンバーの追加"
sidebar_position: "8"
---

# Add external members to a Load Balancer

The **External member** feature lets you add external endpoints (servers, services, or applications running outside the VPC) to a Server Pool. This expands the Load Balancer's processing capacity by leveraging external resources.

External members can also be added during initial Load Balancer creation.

**Step 1:** In the Load Balancer list, select the Load Balancer to which you want to add an external member.

**Step 2:** On the Load Balancer detail page, select the **Server pool** tab, then choose the Server Pool you want to add the external member to.

**Step 3:** Under **Add server**, click **Add external member** and enter the following details:

- **Name**: Display name for the external member.
- **IP Address**: IP address of the external member.
- **Port**: The port the member listens on to handle incoming requests.
- **Weight**: The priority weight of the external member. Members with higher weights receive more requests.

**Step 4:** Click **Update Server pool** to save.

To remove an external member, click **Remove** in the member's **Action** menu.
