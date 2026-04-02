---
id: "huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent"
title: "Create jobs on Jenkins using FPT Cloud Agent"
sidebar_label: "Create jobs using FPT Cloud Agent"
sidebar_position: 23
---

# Create jobs on Jenkins using FPT Cloud Agent

Configuration steps may vary depending on your Jenkins version.

From version 2.451.0 provided by FPT Cloud, using a Kubernetes agent requires creating a folder and configuring the agent to be available within that folder. For managing CI/CD projects on Jenkins, it is recommended to create a folder per project and configure services within that folder. This approach allows you to apply per-project permissions and simplifies project management.

To create a Jenkins job, you need the following:

- **Agent label:**

[![](/img/migrated/Picture103-c115e03c.png)](/img/migrated/Picture103-c115e03c.png)

If you create a standard Freestyle job configured to run on an FPT Cloud agent without the correct setup, the following error will appear:

[![](/img/migrated/Picture104-4ee62b2a.png)](/img/migrated/Picture104-4ee62b2a.png)

To create and run a job on Jenkins correctly, follow the steps below.

**Step 1:** Create a folder to manage jobs on Jenkins.

On the Jenkins Dashboard > **New Item**:

[![](/img/migrated/Picture105-46822182.png)](/img/migrated/Picture105-46822182.png)

Create an item of type **Folder**:

[![](/img/migrated/Picture106-2d903e4d.png)](/img/migrated/Picture106-2d903e4d.png)

Configure the Kubernetes agent to be used within the folder:

[![](/img/migrated/Picture107-13b71bc6.png)](/img/migrated/Picture107-13b71bc6.png)

**Step 2:** Create a simple job inside the folder.

Inside the newly created folder > **New Item** / **Create a job**:

[![](/img/migrated/Picture108-8729b0b8.png)](/img/migrated/Picture108-8729b0b8.png)

Create a **Freestyle** job:

[![](/img/migrated/Picture110-c5cac842.png)](/img/migrated/Picture110-c5cac842.png)

Enter the agent label for the job:

[![](/img/migrated/Picture111-e24ed221.png)](/img/migrated/Picture111-e24ed221.png)

Configure an execute shell step to test the job:

[![](/img/migrated/Picture112-fd5e8c52.png)](/img/migrated/Picture112-fd5e8c52.png)

Save the job configuration:

[![](/img/migrated/Picture113-5be28d74.png)](/img/migrated/Picture113-5be28d74.png)

**Step 3:** Run the job.

[![](/img/migrated/Picture114-a0689b0d.png)](/img/migrated/Picture114-a0689b0d.png)

**Step 4:** Job execution result.

[![](/img/migrated/Picture115-145b00f7.png)](/img/migrated/Picture115-145b00f7.png)

[![](/img/migrated/Picture116-7605e149.png)](/img/migrated/Picture116-7605e149.png)

[![](/img/migrated/Picture117-806d0758.png)](/img/migrated/Picture117-806d0758.png)
