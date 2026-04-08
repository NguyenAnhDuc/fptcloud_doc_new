---
id: "guide-dashboard-overview"
title: "Dashboard metrics: Organization overview"
description: "How to read the Organization overview section of the FPT AppSec Dashboard"
sidebar_label: "Dashboard metrics: Organization overview"
sidebar_position: 2
---

# Dashboard metrics: Organization overview

The Organization overview section displays metrics for your organization (aggregated data from all teams).

> **Note:** Charts use data from the most recent successful scan. Click **Refresh** to reload data.

[![anhfsec](/img/migrated/nhan-refet-85599f8b.png)](/img/migrated/nhan-refet-85599f8b.png)

If there is no data, a dash ("-") is displayed by default.

## Total teams

Description: Total number of teams in the current organization.

[![anhfsec](/img/migrated/total-team-b5b57fe3.png)](/img/migrated/total-team-b5b57fe3.png)

## Total issues

Description: Total number of issues recorded in the most recent successful scan across all assets in the organization (including teams and sub-teams).

Display format:
- 0 – 9,999: shown in full (e.g., 5, 1200)
- 10,000 – 999,999: abbreviated in thousands (k), one decimal place, rounded down

[![anhfsec](/img/migrated/total-issue-ef7d093c.png)](/img/migrated/total-issue-ef7d093c.png)

## Total assets

Description: Total number of assets in the organization, including:
- Source control assets (GitHub, GitLab)
- Container registry assets (FCR, Harbor)

Display format: same as Total issues.

[![anhfsec](/img/migrated/total-asset-e730cbf3.png)](/img/migrated/total-asset-e730cbf3.png)

## Total scan requests

Description: Total number of security scans run (Code + Secret + IaC + Image).

Categories:
- UI scan request
- CI/CD scan request

Display format: same as Total issues.

[![anhfsec](/img/migrated/total-scan-7f7d7250.png)](/img/migrated/total-scan-7f7d7250.png)

## Total issues by severity

Description: Issue count broken down by four severity levels — Critical, High, Medium, Low — from the most recent successful scan.

Display format: same as Total issues.

[![anhfsec](/img/migrated/total-severy-b0caeec2.png)](/img/migrated/total-severy-b0caeec2.png)

## Total issues by scan type

Description: Issue count broken down by scan type:
- Code Analysis
- Secret Scanning
- IaC Scanning
- Image Scanning

Display format: same as Total issues.

[![anhfsec](/img/migrated/total-scan-type-dd22f5d9.png)](/img/migrated/total-scan-type-dd22f5d9.png)
