---
id: "resize-load-balancer"
title: "Resize Load Balancer"
description: "The **'Resize Load Balancer Package'** feature plays an important role in managing your **Load Balancer**. It allows you"
sidebar_label: "Resize Load Balancer"
sidebar_position: 9
---

# Resize Load Balancer

## Resize Load Balancer Package
The **"Resize Load Balancer Package"** feature plays an important role in managing your **Load Balancer**. It allows you to customize service packages to suit your operational and financial needs, such as:
  * **Improving performance:** The resize feature ensures your application always has enough resources to handle traffic loads.
  * **Enhancing availability:** It helps ensure your application remains available even during sudden traffic spikes.
  * **Cost savings:** Resize helps optimize your resource usage by making sure you only use what you need, thus reducing cloud expenses and avoiding resource waste.

### To resize a **Load Balancer** , follow the steps below:
**Step 1:** On the Load Balancer list screen, click the **three-dot icon** for the Load Balancer you want to resize, then select **Resize**.
**Step 2:** A dialog box will appear showing the available **Load Balancer** packages. Select the package that best fits your usage needs.
**Step 3:** Click **Resize load balancer** to apply the change, or **Cancel** to abort.
> **Note:**
>   * Ensure the VPC has been granted quota for the new size before resizing. 
>   * The **Resize** process will take a certain amount of time, during which your Load Balancer may experience downtime. It will resume normal operations once the process is complete. 
>   * After a successful **Resize** , check the actual Load Balancer metrics in the **Monitor** tab to confirm that the new package meets your real-world usage demands.
>