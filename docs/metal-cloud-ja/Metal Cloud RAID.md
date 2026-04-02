---
id: "Metal Cloud RAID"
title: "RAID definition"
description: "RAID (Redundant Array of Independent Disks) is a method of configuring member drives to create a high-availability, high-performance system"
sidebar_label: "RAID definition"
sidebar_position: 6
---

# RAID definition

RAID (Redundant Array of Independent Disks) is a method of configuring member drives to create a high-availability, high-performance system. RAID levels provide different levels of redundancy and performance and also determine the number of members in the array.

# RAID levels

RAID levels determine the relationship between the disks.

| Level | Description | Drive count | Approximate array capacity | Redundancy* |
| --- | --- | --- | --- | --- |
| RAID 0 | RAID 0 combines two or more disks by striping data across them. Data chunks are written alternately to each disk in the array. | 1 - 8 | Drive count × drive size | None |
| RAID 1 | RAID 1 is a configuration that mirrors data across two or more disks. All data written to the array is placed on each device in the group, so each disk contains the complete set of available data. | 2 | Drive size | 1 |

*Redundancy refers to the number of drive failures the array can tolerate. In some cases, the array can tolerate more than one drive failure.
