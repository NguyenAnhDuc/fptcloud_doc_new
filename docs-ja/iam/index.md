---
id: "iam"
title: "IAM (Identity & Access Management)"
description: "FPT IAMは、Tenant ownerがFPT Cloudリソースへのアクセス権を他のユーザーと異なる権限レベルで共有できる機能です。"
sidebar_label: "概要"
sidebar_position: 1
---

# IAM (Identity & Access Management)

FPT Identity & Access Management（FPT IAM）は、Tenant ownerがFPT Cloud上のリソースへのアクセス権を他のユーザーと異なる権限レベルで共有できる機能です。Tenant ownerはVPC上の全リソースを完全に管理でき、権限管理機能も含まれます。IAMを使用するには、Tenant ownerがRole、User Groupを作成し、メールでIAM Userを招待する必要があります。

## 基本概念

- **Role**: 組織内のユーザーの役割。ユーザーが実行できる権限を定義します。FPT IAMはSuper AdminとReadonlyの2つの基本Roleをサポートし、カスタム権限セットを持つCustom Roleを作成することもできます。
- **Permission**: ユーザーがどのリソースに対してどの機能を実行できるかを定義します。各permissionはRoleに属します。
- **User Group**: 同じ役割を持つユーザーグループ（テナントまたはVPC単位）。同じUser Group内の全IAM userに共通のRoles & Permissionが割り当てられます。
- **IAM User**: テナントに招待されたユーザー。割り当てられたRoleに従ってリソースを操作できます。
- **IP Access**: 設定されたIPアドレスに基づいてシステムアクセスを制御する機能。

## 利用開始

[Initial Setup](./initial-setup.md)を参照してFPT IAMの利用を開始してください。
