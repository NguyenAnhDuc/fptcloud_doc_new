---
id: "cloud-advisor-security"
title: "Các vấn đề bảo mật"
description: "Hướng dẫn các vấn đề liên quan đến bảo mật trong Cloud Advisor bao gồm MFA và Security Groups."
sidebar_label: "Các vấn đề bảo mật"
sidebar_position: 3
---

# Các vấn đề bảo mật

Cloud Advisor phát hiện các vấn đề bảo mật sau đây:

## MFA on Tenant

* Mô tả: Rule này kiểm tra Tenant Owner có bật MFA hay chưa
* Danh sách vi phạm hiển thị:
  * Tenant owner
  * Email
  * MFA Status: enable/disable

## MFA should be enabled for all IAM users

* Mô tả: Rule này kiểm tra IAM users có bật MFA hay chưa
* Danh sách vi phạm hiển thị:
  * IAM Users
  * Email
  * MFA Status: enable/disable

## Security Groups - Specific Ports Unrestricted

* Mô tả: Rule này kiểm tra các Security Group cho phép truy cập không giới hạn (0.0.0.0/0) vào các port cụ thể.
* Danh sách vi phạm hiển thị:
  * Project
  * Region
  * VPC
  * Security Group name
  * Protocol
  * Port range
  * IP Range
  * Associations

## Security Groups - Specific Ports Unrestricted to a resource

* Mô tả: Rule này kiểm tra các Security Group cho phép truy cập không giới hạn (0.0.0.0/0) vào một tài nguyên.
* Danh sách vi phạm hiển thị:
  * Project
  * Region
  * VPC
  * Security Group name
  * Protocol
  * Port range
  * IP Range
  * Associations
