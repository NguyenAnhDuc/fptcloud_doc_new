---
id: "billing-overview"
title: "Billing Overview"
description: "You need to make a payment to purchase credits before using AI Factory services. Please note that **your balance is a sh"
sidebar_label: "Billing Overview"
sidebar_position: 13
---

# Billing Overview

## Overview
### 1. Payment Requirement:
You need to make a payment to purchase credits before using AI Factory services. Please note that **your balance is a shared one** used to pay for all services of AI Factory, not just GPU Container. After successfully purchasing credits, the number of credits will be displayed on Tenant balance. 

### 2. Regional Websites & Tenants:
**A balance is linked to a specific tenant and region.**
  * Currently, we do not support a single balance across multiple regions or tenants.
  * If you wish to use both the GPU H100 in **Vietnam** and the GPU H200 in **Japan** as infrastructure, you will need to create **separate tenants** for each region.*

*_Once you successfully sign in to the portals at ai.fptcloud.com (Vietnam region) or ai.fptcloud.jp (Japan region), a new tenant will be created automatically._ _Please note that tenants in these two regions are completely separate in terms of balance and service resources._

### 3. Payment Method:
We currently support online payment through Stripe (available with all types of currencies) and VNPay (only available when payment is made in Vietnamese dong). We do not store or process your credit card numbers, they are passed directly to Stripe and VNPay. 

### 4. Price Breakdown:
Every container has an hourly cost based on GPU Instance. There are separate prices and charges for: 
  * GPU instance cost 
  * Persistent storage costs 

You are charged the **GPU instance cost for every second** your container is in the running state. You are charged the **persistent storage cost (which depends on the size of your storage allocation) for every single second** your container exists, even if the container is stopped. Temporary storage is free now. 

## Billing History
You can get a detailed document of your billing history by clicking "Credit History" within the Billing page of the console. [![Alt text](/img/migrated/credit-history-381407df.png)](/img/migrated/credit-history-381407df.png)

## Low Balance
When your account balance is lower than the estimated total cost of using the container for 1 hour, some actions may be limited such as Create Container, Create Storage Volume, Start Container and Restart Container. You will also receive notification from the system to add credits. 

## Negative Balance
Whenever your balance reaches zero or below, your container will be stopped automatically but not destroyed immediately. Data on temporary storage will be deleted and cannot be recovered. Since the data on the persistent storage is still available, you are still billed for persistent storage on stopped container. 
If your balance is negative for **7 consecutive days** , we will delete the container and all data will be permanently deleted. Please plan accordingly.
