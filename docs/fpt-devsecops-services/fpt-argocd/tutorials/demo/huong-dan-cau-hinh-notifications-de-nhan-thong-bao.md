---
id: "huong-dan-cau-hinh-notifications-de-nhan-thong-bao"
title: "Configure notifications to receive alerts"
description: "How to configure ArgoCD notifications for Telegram, Slack, and Email"
sidebar_label: "Configure notifications"
sidebar_position: "50"
---

# Configure notifications to receive alerts

## 1. Telegram

To configure notifications to Telegram, follow these steps:

**Step 1:** Get the API token using @BotFather. Open the Telegram app and search for @BotFather.

[![](/img/migrated/Picture93-1-ce5f72d1.png)](/img/migrated/Picture93-1-ce5f72d1.png)

Type **/help** to see available options.

[![](/img/migrated/Picture94-1-1e58a9d9.png)](/img/migrated/Picture94-1-1e58a9d9.png)

Type **/newbot** to create a new bot:

[![](/img/migrated/Picture95-1-ca767ba6.png)](/img/migrated/Picture95-1-ca767ba6.png)

Enter the bot name. Note: the bot name must end with "bot".

[![](/img/migrated/Picture96-1-bd26e3a2.png)](/img/migrated/Picture96-1-bd26e3a2.png)

The access token is used to configure the Telegram token on the Portal.

**Step 2:** Configure the token on FPT Cloud to send notifications to Telegram.

**Step 3:** Create a channel to receive notifications.

[![](/img/migrated/Picture97-1-2ce6eac4.png)](/img/migrated/Picture97-1-2ce6eac4.png)

Select private channel:

[![](/img/migrated/Picture98-1-38531c73.png)](/img/migrated/Picture98-1-38531c73.png)

**Step 4:** Add the bot account to the channel.

[![](/img/migrated/Picture99-1-7d3819fc.png)](/img/migrated/Picture99-1-7d3819fc.png)

**Step 5:** Use the **ChatID** in the subscription to integrate Telegram:

[![](/img/migrated/Picture100-1-bcafb00a.png)](/img/migrated/Picture100-1-bcafb00a.png)

**Step 6:** Configure Telegram notifications in the application:

[![](/img/migrated/Picture101-1-1d6a048a.png)](/img/migrated/Picture101-1-1d6a048a.png)

**Step 7:** Sync the Application and view messages sent to Telegram:

[![](/img/migrated/Picture102-1-cb19eee7.png)](/img/migrated/Picture102-1-cb19eee7.png)

## 2. Slack

**Step 1:** Create a Slack workspace:

[![](/img/migrated/Picture103-1-5d03b136.png)](/img/migrated/Picture103-1-5d03b136.png)

**Step 2:** Create a channel:

[![](/img/migrated/Picture104-1-6d217f24.png)](/img/migrated/Picture104-1-6d217f24.png)

**Step 3:** Create a new app in Slack at [https://api.slack.com/apps](https://api.slack.com/apps).

[![](/img/migrated/Picture105-1-c0c06844.png)](/img/migrated/Picture105-1-c0c06844.png)

Create the App **From scratch**:

[![](/img/migrated/Picture106-1-fa3dbfc2.png)](/img/migrated/Picture106-1-fa3dbfc2.png)

**Step 4:** Configure **OAuth & Permissions**:

[![](/img/migrated/Picture107-1-92d32a17.png)](/img/migrated/Picture107-1-92d32a17.png)

Configure OAuth Scope to allow ArgoCD Notifications to send messages to the channel:

[![](/img/migrated/Picture108-1-5ea1dd4e.png)](/img/migrated/Picture108-1-5ea1dd4e.png)

**Step 5:** Configure **OAuth Tokens for Your Workspace**:

[![](/img/migrated/Picture109-1-d8859cb0.png)](/img/migrated/Picture109-1-d8859cb0.png)

[![](/img/migrated/Picture110-1-3d87cff7.png)](/img/migrated/Picture110-1-3d87cff7.png)

Slack will create a **Bot User OAuth Token**.

[![](/img/migrated/Picture111-1-32b46326.png)](/img/migrated/Picture111-1-32b46326.png)

**Step 6:** Configure the Slack token on FPT Cloud Portal to send notifications from ArgoCD Notifications to Slack using the **Bot User OAuth Token**.

**Step 7:** Add the App to the channel:

[![](/img/migrated/Picture112-1-15069836.png)](/img/migrated/Picture112-1-15069836.png)

**Step 8:** Configure the ArgoCD Application to send notifications to Slack. After the application is created, edit the app to add annotations — notifications will be sent to the channel:

[![](/img/migrated/Picture113-1-8b39278c.png)](/img/migrated/Picture113-1-8b39278c.png)

[![](/img/migrated/Picture114-1-1a266777.png)](/img/migrated/Picture114-1-1a266777.png)

Sync the Application to test notifications:

[![](/img/migrated/Picture115-1-6b2804be.png)](/img/migrated/Picture115-1-6b2804be.png)

The Slack channel will receive notifications about the Application status:

[![](/img/migrated/Picture116-1-e420e948.png)](/img/migrated/Picture116-1-e420e948.png)

## 3. Email

**Step 1:** Configure the email information on the Portal.

**Step 2:** Configure the ArgoCD Application to send notifications to email by adding annotations as follows:

[![](/img/migrated/Picture117-1-a00e335a.png)](/img/migrated/Picture117-1-a00e335a.png)

**Step 3:** Sync the application — notifications will be sent to the configured recipient's email:

[![](/img/migrated/Picture118-1-deb1583a.png)](/img/migrated/Picture118-1-deb1583a.png)
