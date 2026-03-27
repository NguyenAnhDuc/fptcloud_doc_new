---
id: "deployment-lora-inference"
title: "Deployment Lora Inference"
description: "**User story:**"
sidebar_label: "Deployment Lora Inference"
sidebar_position: 8
---

# Deployment Lora Inference

## How to deploy a fine-tuned LoRA model?
**User story:**  
As a user, I want to deploy my fine-tuned LoRA model so that I can use it immediately via API without managing infrastructure. 
#### Steps
  1. **Go to the Deployment page** from the navigation bar. 
     * Or click **View deployment** from the success pop-up after fine-tuning. 

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/deploy.png)](https://fptcloud.com/wp-content/uploads/2025/02/deploy.png)
  2. **Click Deploy** next to the LoRA model you want to deploy. 
     * Status will change to **Deploying**. 
  3. Once deployment is successful, the status will show **Deployed**. 

* * *
#### How to manage deployed models?
On the **Deployment** page, you can:
  * **Get API Key** – Retrieve the key to call your model. 
  * **View API request** – Open a pop-up with sample JSON response. 
  * **Try in Playground** – Test the model directly in the UI. 
  * **Undeploy** – Stop the deployed model (confirmation required). 

#### Status badges
  * **Deploying** – Model is being deployed. 
  * **Deployed** – Model is ready for inference. 
  * **Stopped** – Model is undeployed. 
  * **Failed** – Deployment failed.