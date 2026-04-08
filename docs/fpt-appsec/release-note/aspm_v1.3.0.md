---
id: "aspm_v1.3.0"
title: "Release note: Schedule management (v1.3.0)"
description: "FPT AppSec v1.3.0 introduces Schedule Management for automated security scanning"
sidebar_label: "2025-11-07"
sidebar_position: 1
---

# Release note: Schedule management (v1.3.0)

FPT Smart Cloud introduces a new upgrade to FSP (FPT Security Platform) AppSec Service with the **Schedule Management** feature, helping users easily create, monitor, and manage security scan schedules.

## 1. Description

The **Schedule Management** feature allows users to create, manage, and monitor security scan schedules flexibly and efficiently. By configuring scan frequency, scope, and scan type, users can automate security testing processes, reduce manual effort, and ensure continuity in DevSecOps operations.

[![Alt text](/img/migrated/1-1-461969c3.png)](/img/migrated/1-1-461969c3.png)

## 2. Features

- **Create schedule** - Create new schedules with the following details:
  - Name and Description for easy identification.
  - Frequency: supports three modes - On-demand, Weekly, Monthly.
  - Scope configuration: select team, asset type, repository source (GitHub, GitLab, GitLab Server), branch (main/master), and Last Scan condition.
  - Action: select scan types to execute (Code Analysis, Secret Scan, IaC Scan).
- **Schedule list and detail view**
  - Displays all schedules sorted by creation date (newest first).
  - Information includes: Schedule ID, Name, Frequency, Interval, Last Launch, Next Run, Created By, and Action (Edit/Delete).
  - Click a schedule name to view its configuration details.
- **Edit schedule** - Modify schedule information directly from the list or detail screen. Users can update frequency, scope, scan type, or description.
- **Delete schedule** - Remove schedules that are no longer needed with a single action. A confirmation mechanism prevents accidental deletion.

## 3. Capabilities

- Supports creating and managing multiple schedules in parallel, applied to individual teams or different scan scopes.
- Allows flexible scan scope customization by repository source, last scan time, and scan type — suitable for the scale and needs of each organization.
- The system ensures data integrity between schedule edits or deletions.

## 4. Performance

- The automated scanning mechanism operates stably according to the configured schedule, minimizing the risk of missed periodic scans.
- Last Launch and Next Run information is continuously updated, ensuring users always have an accurate view of each schedule's execution status.
