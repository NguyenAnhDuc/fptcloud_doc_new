---
id: "overview-user-group"
title: "User Group概要"
description: "User Groupは同じ役割を持つユーザーグループで、共通のRolesとPermissionが割り当てられます。"
sidebar_label: "User Group概要"
sidebar_position: "11"
---

# User Group概要

User Groupは同じ役割を持つユーザーグループを表すオブジェクトです。同じUser Group内のすべてのIAM userには、そのUser GroupのRoles & Permissionが共通して割り当てられます。

- これにより権限管理の時間を節約できます。各IAM userに個別に権限を付与・更新する代わりに、User Groupを一度更新するだけで済みます。
- 1つのUser Groupには複数のIAM userを含めることができ、1人のIAM userは複数のUser Groupに所属できます。
