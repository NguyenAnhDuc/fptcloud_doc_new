---
id: "aspm_v1.2.1"
title: "Release note: Issue life cycle management (v1.2.1)"
description: "FPT AppSec v1.2.1 introduces Issue Life Cycle Management for comprehensive issue status tracking"
sidebar_label: "2025-09-06"
sidebar_position: 2
---

# Release note: Issue life cycle management (v1.2.1)

FPT Smart Cloud introduces a new upgrade to FSP (FPT Security Platform) AppSec Service with the **Issue Life Cycle Management** feature, allowing users to manage issue status comprehensively and transparently.

## 1. Description

The **Issue Life Cycle Management** feature allows users to proactively manage the status of issues discovered during scans. Users can change the status (Open / Ignored), add a reason or comment, and track the status change history directly on the issue detail screen.

[![Alt text](/img/migrated/Screenshot-2025-11-14-152307-5fb4bde0.png)](/img/migrated/Screenshot-2025-11-14-152307-5fb4bde0.png)

## 2. Features

- **Note status in Issue list and Issue detail**:
  - Change issue status between Open and Ignored.
  - When changing from Open to Ignored: a reason must be selected; a comment may optionally be added.
  - When changing from Ignored to Open: a comment may optionally be added.
- **Filter by status** - Filter issues by status: Open, Ignored, and ignore reasons.
- **Activity log** - Displays the issue status change history, including old status, new status, change time, and comment (if any).

## 3. Capabilities

- Manage all issue statuses in both Issue list and Issue detail screens.
- Supports unlimited storage and retrieval of change history throughout the issue lifecycle.

## 4. Performance

- Issue status will be **officially updated at the next scan** to ensure data consistency.
- Retrieving status change history in Activity ensures fast response time and clear visibility.
