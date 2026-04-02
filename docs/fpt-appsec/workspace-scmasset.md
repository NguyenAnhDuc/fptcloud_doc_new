---
id: "workspace-scmasset"
title: "Source code management asset operations"
description: "How to add, view, and manage SCM assets (repositories) in FPT AppSec"
sidebar_label: "Source code management assets"
sidebar_position: 25
---

# Source code management asset operations

## Add an asset

**Org Admin** and **Team Users** have permission to add assets.

**Step 1:** After selecting a team, click **Add Asset**.

[![anhfsec](/img/migrated/19-b5c086ac.png)](/img/migrated/19-b5c086ac.png)

**Step 2:** Select GitHub/GitLab/GitLab Server.

[![anhfsec](/img/migrated/20-565cbb9b.png)](/img/migrated/20-565cbb9b.png)

> **Note:** The add asset popup only appears when the asset source (GitHub/GitLab/GitLab Server) has been integrated in the **Integration** screen. If you click a source that has not been integrated yet, the system redirects to the **Integration** tab for that source.

**Step 3:** Select the **project/repo** containing the source code to scan.

[![anhfsec](/img/migrated/21-8f69016c.png)](/img/migrated/21-8f69016c.png)

The screen shows a **Repository group** with repositories and their branches. You can search for a branch by name.

**Step 4:** Select the repo and branch, then click **Add**.

[![anhfsec](/img/migrated/23-0c6ab90e.png)](/img/migrated/23-0c6ab90e.png)

After successfully adding, the system automatically runs the first scan and displays results in the Asset Management **All Assets** tab. You can view the add history in the **History** tab.

## View asset overview

**Step 1:** In Asset Management > All, click any asset's name link.

[![Alt text](/img/migrated/a1-29caace2.jpg)](/img/migrated/a1-29caace2.jpg)

**Step 2:** On the Asset Overview screen, you can view:

- **General information**: Asset Status, Language, Owner, Added By, Added At
- **Language chart**: Horizontal bar showing language percentages in descending order; legend shows top 5 languages + "Other"
- **Issue overview**: Scan Type, Commit + Scan Time, Total Open Issues, Severity counts, Scanning Times By Day (last 7 days)
- **Latest requests**: Up to 3 most recent scan requests (Scanned By, Scanned At, scan result)

**Step 3:** In the **History** tab, you can track the asset's scan history and filter by **Scan type** and **Time range**.

[![Alt text](/img/migrated/a2-74cfdb07.jpg)](/img/migrated/a2-74cfdb07.jpg)

## View issues

### Access the Issue list

- In the Asset List, click any asset name. The system navigates to Asset Detail with the Overview tab open by default.
- Select the **Issue** tab to view the issue list.

[![Alt text](/img/migrated/a3-04b8efd8.jpg)](/img/migrated/a3-04b8efd8.jpg)

> **Note:** The default sort is by Score descending; each page shows up to 10 issues.

### Issue information

Each issue is displayed as an Issue Info Card with: Severity, Vulnerability Type, Issue ID + link copy, Vul References (CWE list), Score (0–10), Issue Status, Note Status button, Details button, Code Block, Issue Suggest Summary, and Project Link.

[![Alt text](/img/migrated/a4-68d75c1d.jpg)](/img/migrated/a4-68d75c1d.jpg)

### Filter, search, and sort issues

**Filter** by: Severity, Status, Priority Score (0–10), Security Category, Vulnerability Type, OWASP Top 10, CWE. Multiple conditions can be selected.

[![Alt text](/img/migrated/a5-3147a913.jpg)](/img/migrated/a5-3147a913.jpg)

**Search** by: Issue ID, Issue Name, Issue Suggest Summary. Press Enter to search; Clear to reset.

[![Alt text](/img/migrated/a6-f4cba640.jpg)](/img/migrated/a6-f4cba640.jpg)

**Sort** by: Severity (C→H→M→L), Score, Created Time. Default: Score descending.

[![Alt text](/img/migrated/a6.1-67856fbc.jpg)](/img/migrated/a6.1-67856fbc.jpg)

### View issue details

**Step 1:** Click **Details** on any issue card (Code Analysis/Secret Scanning/IaC Scanning) to open the Issue Detail popup.

[![Alt text](/img/migrated/a7-1c9151c8.jpg)](/img/migrated/a7-1c9151c8.jpg)

**Step 2:** The Issue Detail screen shows:

[![Alt text](/img/migrated/a8-3bb4ae93.jpg)](/img/migrated/a8-3bb4ae93.jpg)

- Severity, Vulnerability Type, Link (copy icon), Issue Status

[![Alt text](/img/migrated/a9-2e85bb93.jpg)](/img/migrated/a9-2e85bb93.jpg)

- Issue Description, Issue Remediation, References, Issue File, Code Block (with highlighted error line), Activity log

## Rescan an asset

### From the Asset List

**Step 1:** In All Assets, click the **⋮** icon on an asset or scan type.

[![Alt text](/img/migrated/a10.1-b7dd8b2b.jpg)](/img/migrated/a10.1-b7dd8b2b.jpg)

**Step 2:** Select **Rescan**. The system rescans and shows _"Rescan requested successfully"_.

[![Alt text](/img/migrated/a10-9384c219.jpg)](/img/migrated/a10-9384c219.jpg)

> **Note:** The **Rescan** button is disabled until the scan completes.

### From the Asset Detail

**Step 1:** Click an asset name to open the detail screen.

**Step 2:** Select the **Issue** tab, then choose a sub-tab (Code Analysis, Secret Scanning, IaC Scanning).

[![Alt text](/img/migrated/a11-cbb7ee44.png)](/img/migrated/a11-cbb7ee44.png)

**Step 3:** Click **Rescan now** in the top right. On success: _"Rescan requested successfully"_.

[![Alt text](/img/migrated/a12-beb19e36.jpg)](/img/migrated/a12-beb19e36.jpg)

## Disable/enable an asset

### Disable

**Step 1:** Go to Workspace → **All Assets**.

**Step 2:** Click the **⋮** icon on the asset, then select **Disable**.

[![Alt text](/img/migrated/a13-f93bcda0.jpg)](/img/migrated/a13-f93bcda0.jpg)

**Step 3:** Type **disable** in the confirmation box, then click **Confirm**.

[![Alt text](/img/migrated/a14-8be1bbf4.jpg)](/img/migrated/a14-8be1bbf4.jpg)

### Enable

**Step 1:** Click the **⋮** icon on a disabled asset, then select **Enable**.

[![Alt text](/img/migrated/a15-c6184f8c.jpg)](/img/migrated/a15-c6184f8c.jpg)

**Step 2:** Click **Confirm**.

[![Alt text](/img/migrated/a16-1a0df72c.jpg)](/img/migrated/a16-1a0df72c.jpg)

> **Note:** Only Admin, Team Manager, and Asset Owner can enable/disable assets.

## Delete an asset

**Step 1:** Go to Workspace → **All Assets**.

**Step 2:** Click the **⋮** icon on the asset, then select **Delete**.

[![Alt text](/img/migrated/a17-62e36a0d.jpg)](/img/migrated/a17-62e36a0d.jpg)

> **Note:** Only Org Admin has permission to delete assets.

**Step 3:** Type **delete** in the confirmation box, then click **Confirm**.

[![Alt text](/img/migrated/a18-4175bb2b.jpg)](/img/migrated/a18-4175bb2b.jpg)
