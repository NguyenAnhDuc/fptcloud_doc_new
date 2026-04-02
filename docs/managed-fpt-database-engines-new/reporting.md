---
id: "reporting"
title: "Reporting"
description: "The Reporting feature allows users to extract statistical data about database cluster activities over a selected time period."
sidebar_label: "Reporting"
sidebar_position: 41
---

# Reporting

The **Reporting** feature allows users to extract statistical data about database cluster activities over a selected time period. Reports can be generated manually or automatically on a schedule.

Reports help users:

- Track activity history.
- Evaluate execution status.
- Support operational audits or internal records.

Currently, FPT Database Engine only supports one report type: backup activity reports for database clusters.

**Required permissions:**

| Permission name | Operation type | Description |
| --- | --- | --- |
| manageDatabase:ReportConfig | Edit | Permission to configure the schedule for receiving reports about database activity. |
