---
id: "resize-load-balancer"
title: "Resize a Load Balancer"
description: "How to change the Load Balancer package (resize) to match your performance and cost requirements."
sidebar_label: "Resize a Load Balancer"
sidebar_position: 9
---

# Resize a Load Balancer

The **Resize** feature lets you change your Load Balancer package to match your usage needs — both operationally and financially:

- **Improve performance**: Ensure your application always has enough resources to handle traffic.
- **Increase availability**: Maintain service availability even during traffic spikes.
- **Reduce costs**: Avoid paying for unused resources by selecting a package that matches your actual usage.

**Step 1:** In the Load Balancer list, click the **three-dot menu** for the Load Balancer you want to resize, then select **Resize**.

**Step 2:** A dialog appears showing the available Load Balancer packages. Select the package that fits your requirements.

**Step 3:** Click **Resize load balancer** to confirm, or **Cancel** to discard.

:::note
- Before resizing, ensure the VPC has sufficient quota for the new package size.
- The resize process takes some time. Your Load Balancer will experience a brief interruption during this period and will resume normal operation once complete.
- After a successful resize, check the actual metrics in the **Monitor** tab to confirm the new package meets your real-world requirements.
:::
