---
id: "overview-ip-access"
title: "IP Access概要"
description: "IP Accessは設定されたIPアドレスに基づいてシステムアクセスを制御する機能です。"
sidebar_label: "IP Access概要"
sidebar_position: "24"
---

# IP Access概要

IP Access機能はシステムへのアクセスを制御し、設定済みのIPアドレスからのみログインを許可します。許可されたIPリストに含まれないユーザーアカウントはシステムにアクセスできません。

- アクセスを許可するIPに対応するユーザーリストを正確に指定する必要があります。
- 設定中の場合は、現在アクセスに使用しているパブリックIPアドレスと自分のアカウントを追加してください（最初のレコードとして優先）。これにより設定作業が中断されません。

:::warning
IP Access機能はTenant Ownerには適用されません — すべてのTenant OwnerはIPによるアクセス制限を受けません。
:::
