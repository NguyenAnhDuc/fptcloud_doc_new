---
id: "kich-hoat-dich-vu-fpt-container-registry"
title: "FPT Container Registry サービスをアクティベートするための条件"
description: "FPT Portal で FPT Container Registry をアクティベートするために必要な条件と権限。"
sidebar_label: "FPT Container Registry サービスをアクティベートするための条件"
sidebar_position: "3"
---

# FPT Container Registry サービスをアクティベートするための条件

FPT Container Registry を使用するには、FPT Portal でサービスをアクティベートする必要があります。アクティベートには、組織のリソースのセキュリティを確保するための適切な権限が必要です。

サービスをアクティベートするには、**Tenant Owner** であるか、IAM role で `ContainerRegistry:Active` 権限が付与された VPC Admin（通常は **SuperAdmin** ロール）である必要があります。十分な権限がある場合は、FPT Portal の画面から直接アクティベートできます。
