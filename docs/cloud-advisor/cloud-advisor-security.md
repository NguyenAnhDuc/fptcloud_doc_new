---
id: "cloud-advisor-security"
title: "Cloud Advisor Security"
sidebar_label: "Cloud Advisor Security"
sidebar_position: "4"
---

# Cloud Advisor Security

Show những vấn đề liên quan to Security, includes:

## MFA on Tenant

* Description: Rule this kiểm tra Tenant Owner có bật MFA hay chưa
* List vi phạm displayed:
  * Tenant owner
  * Email
  * MFA Status: enable/disable

## MFA should be enabled for all IAM users

* Description: Rule this kiểm tra IAM users có bật MFA hay chưa
* List vi phạm displayed:
  * IAM Users
  * Email
  * MFA Status: enable/disable

## Security Groups - Specific Ports Unrestricted

* Description: Rule this kiểm tra the Security Group for phép truy cập không giới hạn (0.0.0.0/0) ando the port cụ thể.
* List vi phạm displayed:
  * Project
  * Region
  * VPC
  * Security Group name
  * Protocol
  * Port range
  * IP Range
  * Associations

## Security Groups - Specific Ports Unrestricted to a resource

* Description: Rule this kiểm tra the Security Group for phép truy cập không giới hạn (0.0.0.0/0) ando a tài nguyên.
* List vi phạm displayed:
  * Project
  * Region
  * VPC
  * Security Group name
  * Protocol
  * Port range
  * IP Range
  * Associations
