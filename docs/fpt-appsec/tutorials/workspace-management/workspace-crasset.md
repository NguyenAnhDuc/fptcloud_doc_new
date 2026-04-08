---
id: "workspace-crasset"
title: "Container Registry asset operations"
description: "How to add, view, and manage Container Registry assets (images) in FPT AppSec"
sidebar_label: "Container Registry assets"
sidebar_position: 3
---

# Container Registry asset operations

## Add an asset

**Org Admin** and **Team Users** have permission to add assets.

**Step 1:** After selecting a team, click **Add Asset**.

[![anhfsec](/img/migrated/19-b5c086ac.png)](/img/migrated/19-b5c086ac.png)

**Step 2:** Select FPT Container Registry or Harbor.

[![anhfsec](/img/migrated/20-565cbb9b.png)](/img/migrated/20-565cbb9b.png)

> **Note:** The add asset popup only appears when the asset source (FPT Container Registry/Harbor) has been integrated in the **Integration** screen. If you click a source that has not been integrated yet, the system redirects to the **Integration** tab for that source.

**Step 3:** Select the **project** containing the image to scan.

[![anhfsec](/img/migrated/21-8f69016c.png)](/img/migrated/21-8f69016c.png)

The screen displays available **Images** and **Image Tags**.

**Step 4:** Select the image you want and click **Add**.

[![anhfsec](/img/migrated/23-0c6ab90e.png)](/img/migrated/23-0c6ab90e.png)

After successfully adding, the system automatically runs the first scan and displays results in the Asset Management **All Assets** tab. You can view add history in the **History** tab.

## View asset overview

**Step 1:** In Asset Management > All, click any CR Asset Name link.

**Step 2:** On the Asset Overview screen, you can view:

- **General information**: Asset Name, Asset Access (Public/Private), Status, Owner, Added By, Added At
- **Metadata (Issue Information)**: Image ID, Manifest Digest, Image Tag, Image VPC, Base Image, Platform, Target OS, Image Size
- **Issue overview**: Scan Type (click to see details by type), Scan Time, Total Open Issues, Severity counts, Scanning Times By Day (last 7 days)
- **Latest requests**: Up to 3 most recent scan requests (Scanned By, Scanned At, scan result)

## View issues

### Access the Issue list

See the [SCM asset guide](/docs/en/fpt-appsec/tutorials/workspace-management/workspace-scmasset/).

### Issue information

Each issue is displayed as an Issue Info Card with:
- Severity: Critical/High/Medium/Low
- Package Name or Secret Name
- Issue Title
- Vul References: CWE/CVE/CVSS
- Score: 0–10 (one decimal place)
- Issue Status: current status from the most recent scan
- Exploit Status: whether the issue has been exploited
- Image Layer: the Dockerfile command or layer causing the issue
- Fixed in Version: the patched package version; "Not available" if no fix exists

### Filter, search, and sort issues

**Filter** by: Severity, Status, Priority Score (0–10), Issue Type, "Fixed in" available, Image Layer, Exploit Maturity, Exploit Status.

**Search** by: Issue ID, Issue Title. Press Enter to search; Clear to reset.

**Sort** by: Severity (C→H→M→L), Score, Created Time. Default: Score descending.

### View issue details

**Step 1:** Click **Details** on any issue card (Image) to open the Issue Detail popup.

**Step 2:** The Issue Detail screen shows: Severity, Package Name, Vulnerability Type, Link, Issue Status, Issue Description, Issue Remediation (Current package, Fixed in version), Security Information (CVSS score, attack vector), References, Manifest Layer, Code Block, and Activity log.

## Rescan, disable/enable, and delete assets

See the [SCM asset guide](/docs/en/fpt-appsec/tutorials/workspace-management/workspace-scmasset/).
