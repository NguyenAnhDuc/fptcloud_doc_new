---
id: "status-actions-deployment"
title: "ステータスとアクション"
description: "デプロイメントのステータスと実行可能なアクションです。"
sidebar_label: "ステータスとアクション"
sidebar_position: "11"
---

# ステータスとアクション

Deployment Statuses:  
| **Status**  | **Description**  |  
| --- | --- |  
| Running  | The Deployment has been successfully created and is operating normally  |  
| Creating  | The Deployment is being initialized and is not yet active  |  
| Stopped  | The Deployment has been successfully stopped  |  
| Deleting  | The Deployment is in the process of being deleted  |  
| Stopping  | The Deployment is in the process of being stopped  |  
| Processing  | The Deployment is being updated, such as modifying configuration details or restarting  |  
Actions Available for Deployment Interaction  
| **Action**  | **Description**  |  
| --- | --- |  
| Start  | Start the Deployment to begin using it  |  
| Stop  | Stop the Deployment; the instances running the app will scale down to 0 after stopping  |  
| Delete  | Delete the Deployment; all running resources for the cluster will be reclaimed  |  
| Edit in Details  | Edit the configuration details of the Deployment  |  
| Restart  | Restart the Deployment cluster  |  
The available actions for a Deployment are influenced by the type of deployment and the status of the Deployment cluster. Customers can track this using the following matrix table:
![Alt text](/img/migrated/11.5-48c12d92.png)
![Alt text](/img/migrated/11-687f9e34.png)
