---
id: "role-overview"
title: "Role概要"
description: "RoleはFPT IAMにおけるユーザーの役割を定義し、実行可能な権限を規定します。"
sidebar_label: "Role概要"
sidebar_position: 4
---

# Role概要

Roleは組織内のユーザーの役割であり、ユーザーが実行できる権限を定義します。

FPT IAMは **Super Admin** と **Readonly** の2つの基本Roleをサポートします。この2つの基本Roleがニーズを満たさない場合、ユーザーはカスタム権限セットを持つ **Custom Role** を作成できます。

各Roleには、ユーザーがどのリソースに対してどのアクションを実行できるかを定義するPermissionリストがあります。
