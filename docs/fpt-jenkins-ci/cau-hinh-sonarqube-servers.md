---
id: "cau-hinh-sonarqube-servers"
title: "Configure SonarQube servers"
sidebar_label: "Configure SonarQube servers"
sidebar_position: 16
---

# Configure SonarQube servers

FPT Cloud allows you to configure SonarQube Server in Jenkins for source code scanning integration through the Portal interface.

### Add a new SonarQube server

**Step 1:** In the FPT Portal menu > **Jenkins CI** > **Detail Cluster** > **Configurations** > **SonarQube** > **Add SonarQube**.

[![](/img/migrated/Picture71-633dc912.png)](/img/migrated/Picture71-633dc912.png)

**Step 2:** Enter the required information to create a new SonarQube server:

- **Name:** Enter the SonarQube server name.
- **Server URL:** Enter the public domain URL of the SonarQube system.
- **Server authentication token:** Select a credential of type **Secret Text** to authenticate with SonarQube. If you have not yet created the credential, create it before configuring the SonarQube server.

[![](/img/migrated/Picture72-129945ad.png)](/img/migrated/Picture72-129945ad.png)

**Step 3:** Result after adding the SonarQube server configuration.

[![](/img/migrated/Picture73-5b081a3b.png)](/img/migrated/Picture73-5b081a3b.png)

Result in Jenkins:

[![](/img/migrated/Picture74-888bade3.png)](/img/migrated/Picture74-888bade3.png)

[![](/img/migrated/Picture75-fccead94.png)](/img/migrated/Picture75-fccead94.png)

### Edit a SonarQube server

**Step 1:** In the FPT Portal menu > **Jenkins CI** > **Detail Cluster** > **Configurations** > **SonarQube** > select the SonarQube server to edit.

[![](/img/migrated/Picture76-8dd18554.png)](/img/migrated/Picture76-8dd18554.png)

**Step 2:** Enter the updated information. You can update the server URL or select a different authentication credential.

[![](/img/migrated/Picture77-d96ace12.png)](/img/migrated/Picture77-d96ace12.png)

**Step 3:** Result after editing.

[![](/img/migrated/Picture78-bd49a38c.png)](/img/migrated/Picture78-bd49a38c.png)

### Delete a SonarQube server

**Step 1:** In the FPT Portal menu > **Jenkins CI** > **Detail Cluster** > **Configurations** > **SonarQube** > select the SonarQube server to delete.

[![](/img/migrated/Picture79-550edce0.png)](/img/migrated/Picture79-550edce0.png)

**Step 2:** Enter the confirmation text to confirm the action.

[![](/img/migrated/Picture80-0e42955d.png)](/img/migrated/Picture80-0e42955d.png)

**Step 3:** Result after deleting the SonarQube configuration.

[![](/img/migrated/Picture81-2069cb06.png)](/img/migrated/Picture81-2069cb06.png)

Result in Jenkins:

[![](/img/migrated/Picture82-307c9ace.png)](/img/migrated/Picture82-307c9ace.png)

[![](/img/migrated/Picture83-1b0ac94a.png)](/img/migrated/Picture83-1b0ac94a.png)
