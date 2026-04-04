---
id: "danh-tag-cho-vm"
title: "Tag VMs"
description: "The Tagging feature allows users to label virtual machines with custom tags for classification, search, and resource management."
sidebar_label: "Tag VMs"
sidebar_position: "34"
---

# Tag VMs

The **Tagging** feature allows you to label virtual machines with custom tags for **classification, search, and more effective resource management**.

- **Smart classification:** Easily organize virtual machines by environment (Production, Staging, Development), project, department, or any criteria that fits your management process.
- **Quick search:** Filter and find VMs easily based on their tags without having to remember complex names.
- **Efficient management:** Track costs, resource usage, and generate reports based on tagged VM groups.
- **Flexible customization:** Tags can be customized and applied for various purposes to meet specific business needs.

With the Tagging feature, managing virtual infrastructure becomes more organized, saves time, and improves operational efficiency.

## Create a Tag

To tag VMs in an MFKE worker group, first create a tag for the intended purpose.

**Step 1:** On the **Unify Portal**, select **Tagging** → **Create tag**.
[![](/img/migrated/Picture1-10-bf6844ca.png)](/img/migrated/Picture1-10-bf6844ca.png)

**Step 2:** Enter the tag information and click **Create**.
[![](/img/migrated/Picture2-8-51004a9e.png)](/img/migrated/Picture2-8-51004a9e.png)

  * **Key** (required): Enter a key to identify the tag.
  * **Value** (required): Enter a value for the tag corresponding to the key.
  * **Color:** Select a color for displaying the tag.
  * **Resource scope:** Select the VPC where the tag is displayed.

[![](/img/migrated/Picture3-8-ae6842be.png)](/img/migrated/Picture3-8-ae6842be.png)

## Assign a Tag to an MFKE worker group

**For a new cluster:**

**Step 1:** On the **Unify Portal**, select **Kubernetes** → **Managed** → **Create a Kubernetes Engine** to create a new cluster.
[![](/img/migrated/Picture4-7-53217cf7.png)](/img/migrated/Picture4-7-53217cf7.png)

**Step 2:** In the **Nodes Pool** section, select the Tag you want to use for the worker group.
[![](/img/migrated/Picture5-7-393f40ab.png)](/img/migrated/Picture5-7-393f40ab.png)

Enter all required cluster information and click **Create a Kubernetes**.
[![](/img/migrated/Picture6-7-1907fecc.png)](/img/migrated/Picture6-7-1907fecc.png)

## Edit a Tag for a worker group

**Step 1:** From the menu, select **Kubernetes**. The **Kubernetes Management** page appears. Select the Cluster you want to edit the Tag for.
[![](/img/migrated/Picture7-7-fd7c4aed.png)](/img/migrated/Picture7-7-fd7c4aed.png)

**Step 2:** Select **Node Pools** > **Edit Workers**.
[![](/img/migrated/Picture8-6-119a53db.png)](/img/migrated/Picture8-6-119a53db.png)

**Step 3:** Add the Tag to the worker group and click **Save**.
[![](/img/migrated/Picture9-5-041f86ef.png)](/img/migrated/Picture9-5-041f86ef.png)
[![](/img/migrated/Picture10-5-a318c11e.png)](/img/migrated/Picture10-5-a318c11e.png)
[![](/img/migrated/Picture11-4-1f1f1d05.png)](/img/migrated/Picture11-4-1f1f1d05.png)

The Tag editing process takes a few minutes. The cluster status changes to **Processing** during this time, and you cannot make other changes to the cluster until the process completes.

## Remove a Tag from a worker group

**Step 1:** Select **Node Pools** > **Edit Workers**.
[![](/img/migrated/Picture12-4-5468c29c.png)](/img/migrated/Picture12-4-5468c29c.png)

**Step 2:** Click the remove icon to delete the tag from the worker group, then click **Save**.
[![](/img/migrated/Picture13-3-fe7a1c46.png)](/img/migrated/Picture13-3-fe7a1c46.png)
[![](/img/migrated/Picture14-3-ca5786f0.png)](/img/migrated/Picture14-3-ca5786f0.png)
[![](/img/migrated/Picture15-3-b7cb4e29.png)](/img/migrated/Picture15-3-b7cb4e29.png)

The Tag removal process takes a few minutes. The cluster status changes to **Processing** during this time, and you cannot make other changes to the cluster until the process completes.
