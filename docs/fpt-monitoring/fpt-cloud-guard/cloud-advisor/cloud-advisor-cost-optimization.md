---
id: "cloud-advisor-cost-optimization"
title: "Cost optimization issues"
description: "Guide to cost optimization issues in Cloud Advisor."
sidebar_label: "Cost optimization issues"
sidebar_position: 4
---

# Cost optimization issues

Cloud Advisor surfaces the following cost optimization issues:

## Low utilization instances

**Description**: Lists instances with low utilization.

| Field | Description |
|-------|-------------|
| Project | Project containing the instance |
| Region | Instance region |
| VPC | Instance VPC |
| Instance name | Name of the instance |
| Instance status | Current instance status |
| Stop duration | Duration the instance has been stopped |
| CPU utilization 14-day average | Average CPU utilization over 14 days |
| Number of days low utilization | Number of days with low utilization |
| Estimated monthly savings | Estimated monthly cost savings |

## Underutilized storage disk

**Description**: Lists storage disks with low utilization.

| Field | Description |
|-------|-------------|
| Project | Project containing the storage disk |
| Region | Storage disk region |
| VPC | Storage disk VPC |
| Storage disk name | Name of the storage disk |
| Storage disk type | Type of storage disk |
| Storage policy | Storage policy applied |
| Storage size | Size of the storage |
| Attached | Attachment status |
| Average IOPS per day | Average IOPS per day |
| Estimated monthly savings | Estimated monthly cost savings |

## Instances stopped

**Description**: Lists instances that have been stopped for more than 30 days.

| Field | Description |
|-------|-------------|
| Project | Project containing the instance |
| Region | Instance region |
| VPC | Instance VPC |
| Instance name | Name of the instance |
| Instance status | Current instance status |
| Stop duration | Duration the instance has been stopped |
| Size | Instance size |
| Estimated monthly savings | Estimated monthly cost savings |

## Unassociated IP addresses

**Description**: Lists IP addresses not attached to any running instance.

| Field | Description |
|-------|-------------|
| Project | Project containing the IP |
| Region | IP region |
| VPC | IP VPC |
| Public IP | Public IP address |
| Estimated monthly savings | Estimated monthly cost savings |
