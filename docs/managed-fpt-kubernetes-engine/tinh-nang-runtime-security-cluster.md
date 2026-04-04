---
id: "tinh-nang-runtime-security-cluster"
title: "Runtime Security feature"
description: "How to use the Runtime Security feature with Falco to detect anomalous behavior in Managed Kubernetes clusters."
sidebar_label: "Runtime Security feature"
sidebar_position: "31"
---

# Runtime Security feature

## 1. Overview of Runtime Security

To ensure information security for FPT Cloud Managed Kubernetes clusters, FPT Cloud has developed a feature that integrates a Runtime Security tool to detect anomalous activity in Kubernetes clusters that may pose risks to the runtime layer and worker node kernel.

Falco is a powerful open-source tool for monitoring and detecting anomalous activity in container and Kubernetes environments. Falco is developed by Sysdig and is currently a CNCF (Cloud Native Computing Foundation) incubating project. Falco's main feature is providing "runtime security" — real-time security — by monitoring operating system and container behavior, then using predefined rules to detect anomalous or potentially risky activity.

FPT Cloud provides Runtime Security integration that allows users to configure detailed alert notifications via Telegram or Gmail. By using alert channels, Runtime Security ensures that security events are detected promptly and administrators can act quickly to protect the system.

## 2. Using the feature on Unify Portal

**Note:** Security enhancement features for Managed Kubernetes Cluster are integrated after the cluster is successfully created (status: Succeeded/Running).

### A. Integrate Falco Engine

**1. Enable Falco Engine**

  * Step 1: Go to FPT Cloud portal console.fptcloud.com and select **Kubernetes**.
![](/img/migrated/Picture1-8-88d55a79.png)

  * Step 2: Select the cluster to integrate Runtime Security for.
![](/img/migrated/Picture2-6-525544d9.png)

  * Step 3: Select the **Security** tab > **Runtime Security**, then enable it.
![](/img/migrated/Picture3-6-ce729383.png)

  * Step 4: Click **Confirm** to complete.
![](/img/migrated/Picture4-5-10290f0d.png)

Runtime Security is enabled successfully, but you will not receive alerts yet since no alert channels have been configured.
![](/img/migrated/Picture5-5-87c9c8f9.png)

### B. Disable Falco Engine

When you no longer need Runtime Security, you can disable it directly on the portal.

  * Step 1: Click the button currently in the Enable state.
![](/img/migrated/Picture6-5-912fbb00.png)

  * Step 2: Enter the cluster name and click **Disable**.
![](/img/migrated/Picture7-5-5b1a1396.png)

Result after disabling:
![](/img/migrated/Picture8-4-8025d238.png)

### C. Integrate Falco UI

**1. Enable Falco UI**

  * Step 1: Select the **Security** tab > **Runtime Security**, then enable it.
![](/img/migrated/Picture9-3-e4bf5847.png)

  * Step 2: Enable the UI.
![](/img/migrated/Picture10-3-95f69088.png)

  * Step 3: Enter a Username and Password to access Falco UI, then click **Confirm**.
![](/img/migrated/Picture11-2-5d780203.png)
![](/img/migrated/Picture12-3-2a273fdf.png)

  * Step 4: Download the kubeconfig file and perform a port-forward for the "falco-falcosidekick-ui" service. You can use Lens IDE to port-forward via the dashboard: go to Network > Services > filter by Namespace `fptcloud-runtime-security`.
![](/img/migrated/Picture13-2-7145e357.png)

Select the `falco-falcosidekick-ui` service and click **Forward**.
![](/img/migrated/Picture14-2-bb48a8d7.png)

Enter the port to forward and click **Start** to access.
![](/img/migrated/Picture15-2-8f8f127c.png)

  * Step 5: Enter the Username and Password configured when enabling the service.
![](/img/migrated/Picture16-2-d46d7feb.png)

Result after login:
![](/img/migrated/Picture17-2-1e73f1f5.png)

Dashboard with alerts:
![](/img/migrated/Picture18-2-9e9a042d.png)

**2. Update Username and Password**

  * Step 1: Click **Edit Runtime**.
![](/img/migrated/Picture19-2-b353e779.png)

  * Step 2: Edit the Username and Password, then click **Confirm**.
![](/img/migrated/Picture20-2-1434324a.png)
![](/img/migrated/Picture21-2-6d5e1e2f.png)

**3. Disable Falco UI**

To disable Falco UI: select **Edit Runtime** > click the Enable button to toggle it off > click **Confirm**.
![](/img/migrated/Picture22-2-35ccf282.png)
![](/img/migrated/Picture23-2-5cd99243.png)
![](/img/migrated/Picture24-2-1d7bb079.png)

Result after disabling Falco UI:
![](/img/migrated/Picture25-2-4684d6eb.png)

### D. Integrate Runtime Security Event Notification

**1. Telegram**

**1.1. Enable Runtime Security Event Notification**

Step 1: Log in to Telegram and search for BotFather.
![](/img/migrated/Picture26-2-9f59ef7d.png)

Step 2: Enter /newbot and set a name for the bot.
![](/img/migrated/Picture27-2-6ee2ba65.png)

Step 3: Create a group chat to receive notifications.
![](/img/migrated/Picture28-2-f21f0f24.png)
![](/img/migrated/Picture29-2-89f24d13.png)
![](/img/migrated/Picture30-2-e9df26be.png) ![](/img/migrated/Picture31-2-c9402508.png)
![](/img/migrated/Picture32-2-b4cf9d92.png)

Step 4: On the Unify portal, enable Runtime Security Event Notification.
![](/img/migrated/Picture33-2-710ec259.png)

Step 5: Select Telegram as the alert channel, enter the ChatID and Token ID, then click **Confirm**.
![](/img/migrated/Picture34-2-bdf2572f.png)

Result after configuration:
![](/img/migrated/Picture35-2-94806381.png)

When an anomaly is detected, your Telegram will receive an alert like the example below:
![](/img/migrated/Picture36-2-b799e46e.png)

**1.2. Switch notification channel to Gmail**

**Note:** Before creating an Application Token for Gmail, you must enable "2-Step Verification" on your Google Account.

Step 1: Go to [Google App Passwords](https://accounts.google.com/v3/signin/challenge/pwd?TL=AKeb6mwAuh3qaC1eKc7XewCMQU6V6lDuv3Om7ECAlm5R3MUftowOoR4MX-XbD84l&cid=3&continue=https%3A%2F%2Fmyaccount.google.com%2Fapppasswords%3Fpli%3D1%26rapt%3DAEjHL4OQmf3KJ7gkSxhbmm5DqwRFDxwc3wwtSlkg1jrKcUHx_TMi-BUsKmUREmg-JFjF-YQ6g1k7h68AIjbt4iHygIAU-91TEcQff78-lVDMW66UknnWR6s&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmyaccount.google.com%2Fapppasswords%3Fpli%3D1%26rapt%3DAEjHL4OQmf3KJ7gkSxhbmm5DqwRFDxwc3wwtSlkg1jrKcUHx_TMi-BUsKmUREmg-JFjF-YQ6g1k7h68AIjbt4iHygIAU-91TEcQff78-lVDMW66UknnWR6s&ifkv=Ab5oB3ob8hiIojOpjbbdnRQCMUP-nN9e1JkarHYVPJC5rqHF2C0uV-5LfGO3o3CngznWNb750rsr&osid=1&rart=ANgoxcdw5cHl3-8KJUueNT-AOeg1uh0cFuqiMIYcsOFhdFZ3OLrYh76YA6MaQzOzIUzWMD0eRq9U2sOrd54eBwDGwp59FrpO-d9ALceCMK6WKkSUeohZqCs&rpbg=1&service=accountsettings) to create an Application Token.
![](/img/migrated/Picture37-2-80332a4a.png)
![](/img/migrated/Picture38-2-c92796bc.png)

Step 2: Click **Edit Runtime**.
![](/img/migrated/Picture39-1-b7ff93b3.png)

Step 3: Enter the information to receive notifications via Gmail and click **Confirm**.
![](/img/migrated/Picture40-1-517093c1.png)

Result after configuration:
![](/img/migrated/Picture41-1-65717d16.png)

When an anomaly occurs, the system sends an alert to Gmail as shown below:
![](/img/migrated/Picture42-1-0d8044e6.png)

**1.3. Disable Runtime Security Event Notification**

When you no longer want to receive notifications via Telegram or Gmail: go to the **Security** tab > select **Edit Runtime** > disable Runtime Security Event Notification > click **Confirm**.
![](/img/migrated/Picture43-1-fdc9e740.png) ![](/img/migrated/Picture44-1-c148eb98.png) ![](/img/migrated/Picture45-1-059e399c.png) ![](/img/migrated/Picture46-1-cb38d13e.png)

After disabling Runtime Security Event Notification, you will no longer receive any alerts when anomalies occur.
