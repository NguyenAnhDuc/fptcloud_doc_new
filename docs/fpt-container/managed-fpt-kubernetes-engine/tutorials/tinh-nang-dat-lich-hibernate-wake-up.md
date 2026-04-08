---
id: "tinh-nang-dat-lich-hibernate-wake-up"
title: "Schedule Hibernate & Wake-up feature"
description: "How to schedule automatic Hibernate and Wake-up for Kubernetes clusters in Managed FPT Kubernetes Engine."
sidebar_label: "Schedule Hibernate & Wake-up feature"
sidebar_position: "24"
---

# Schedule Hibernate & Wake-up feature

Building on the direct Hibernate & Wake-up feature on the Portal, FPT Cloud provides the Schedule Hibernate & Wake-up service, allowing users to automate cluster Hibernate and Wake-up operations. FPT Cloud lets you create, edit, or delete one or more schedules at the same time as needed.

**Step 1:** From the menu, select **Kubernetes**. The **Kubernetes Management** page appears.
[![](/img/migrated/Picture13-1-0109824e.png)](/img/migrated/Picture13-1-0109824e.png)

**Step 2:** Access the cluster detail page and select **Schedule Hibernation** under the **Advanced** section to set up a schedule.
[![](/img/migrated/Picture14-1-2c3c6a86.png)](/img/migrated/Picture14-1-2c3c6a86.png)

**Step 3:** Configure the schedule settings.
[![](/img/migrated/Picture15-1-f144a484.png)](/img/migrated/Picture15-1-f144a484.png)

**Step 4:** Select the time to Wake-up and Hibernate the cluster (Timezone: UTC+7).
  * _Option 1: Click the calendar icon on each field to set the time._
[![](/img/migrated/Picture16-1-47d859ec.png)](/img/migrated/Picture16-1-47d859ec.png)
  * _Set time using the clock._
[![](/img/migrated/Picture17-1-2ecfd828.png)](/img/migrated/Picture17-1-2ecfd828.png)
  * _Option 2: Enter the time directly as text._
[![](/img/migrated/Picture18-1-8c63c9fb.png)](/img/migrated/Picture18-1-8c63c9fb.png)

**Step 5:** Add or remove schedules.
  * _Add a schedule._
[![](/img/migrated/Picture19-1-971ccfe9.png)](/img/migrated/Picture19-1-971ccfe9.png)
  * _Remove a schedule._
[![](/img/migrated/Picture20-1-22355561.png)](/img/migrated/Picture20-1-22355561.png)

**Step 6:** Save the new schedule after creating or modifying it.
[![](/img/migrated/Picture21-1-10c054b1.png)](/img/migrated/Picture21-1-10c054b1.png)

The system returns a _Success_ status when the schedule has been successfully saved. The display also shows the time remaining until the next Hibernate or Wake-up event.
[![](/img/migrated/Picture22-1-9ff6a66a.png)](/img/migrated/Picture22-1-9ff6a66a.png)

**Note:** You can create or delete multiple schedules at once, for multiple days and times. However, the interval between the Hibernate and Wake-up times must be at least 15 minutes apart.
