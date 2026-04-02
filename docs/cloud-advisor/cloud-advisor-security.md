---
id: "cloud-advisor-security"
title: "Security issues"
description: "Guide to security-related issues in Cloud Advisor, including MFA and Security Groups."
sidebar_label: "Security issues"
sidebar_position: 4
---

# Security issues

Cloud Advisor surfaces the following security-related issues:

## MFA on tenant

- **Description**: This rule checks whether the Tenant Owner has enabled MFA.
- **Violation list shows**:
  - Tenant owner
  - Email
  - MFA Status: enabled/disabled

## MFA should be enabled for all IAM users

- **Description**: This rule checks whether IAM users have enabled MFA.
- **Violation list shows**:
  - IAM users
  - Email
  - MFA Status: enabled/disabled

## Security Groups - Specific ports unrestricted

- **Description**: This rule checks for Security Groups that allow unrestricted access (0.0.0.0/0) to specific ports.
- **Violation list shows**:
  - Project
  - Region
  - VPC
  - Security Group name
  - Protocol
  - Port range
  - IP range
  - Associations

## Security Groups - Specific ports unrestricted to a resource

- **Description**: This rule checks for Security Groups that allow unrestricted access (0.0.0.0/0) to a specific resource.
- **Violation list shows**:
  - Project
  - Region
  - VPC
  - Security Group name
  - Protocol
  - Port range
  - IP range
  - Associations
