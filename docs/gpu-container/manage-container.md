---
id: "manage-container"
title: "Manage Container"
description: "1. Open the List Containers"
sidebar_label: "Manage Container"
sidebar_position: 9
---

# Manage Container

## Start Container
  1. Open the List Containers 
  2. Find the GPU Container you want to start and click the 3-dot icon. 
  3. Select "Start" action 

## Edit Container
[!(/img/migrated/Vector-a4233e15.png)](/img/migrated/Vector-a4233e15.png)
**Warning:** Saving your changes will restart the container. Please note that all data on the temporary disk will be permanently lost.
  1. From the List Containers, select the container you want to edit and access "Container Details" screen. 
  2. Click the Edit icon of the section you want to modify. You can now edit the 'Access container' section (including Ports and SSH) and the 'Advanced settings' section (including Persistent Disk, Environment Variables, and Startup Commands). 
  3. Confirm by clicking "Save".

## Stop Container
[!(/img/migrated/Vector-a4233e15.png)](/img/migrated/Vector-a4233e15.png)
**Warning:** You will be charged for idle GPU Container even if they are stopped. If you don’t need to retain your container, you should terminate it completely.
  1. Open the List Containers
  2. Find the GPU Container you want to stop and click the 3-dot icon 
  3. Select "Stop" action 
  4. Confirm by clicking "Confirm"

## Delete Container
[!(/img/migrated/Alert-triangle-3b4ebdf0.png)](/img/migrated/Alert-triangle-3b4ebdf0.png)
**Danger:** Deleting a container permanently deletes all data in temporary storage and persistent storage. Be sure you’ve saved any data you want to access again.
  1. Open the List Containers. 
  2. Find the GPU Container you want to delete and click the 3-dot icon. 
  3. Select "Delete" action. 
  4. Confirm by entering the "delete" in the text field and click "Confirm"
