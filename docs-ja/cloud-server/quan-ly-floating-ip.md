---
id: "quan-ly-floating-ip"
title: "Floating IP管理"
description: "インスタンスがインターネットにアクセスできるよう、Floating IPのアタッチ・デタッチ・管理を行います。"
sidebar_label: "Floating IP管理"
sidebar_position: 69
---

# Floating IP管理

Floating IPはパブリックIPアドレスを保持し、インターネットからインスタンスへの受信トラフィックをルーティングします。インスタンスをインターネットからアクセス可能にするには、Floating IPをアタッチする必要があります。

同じVPC内の別のインスタンスにFloating IPをリダイレクトすることができます。これにより、コストを削減しIPを最大限に活用できます。

## 新しいパブリックIPの割り当て

アカウントに残余クォータがある場合、プールから追加のIPを割り当てることができます。

1. **Networking** → **Floating IPs** に移動し、**Allocate floating IP** をクリックします。
2. 必要な情報を入力し、**Allocate** をクリックします。

## インスタンスへのFloating IPのアタッチ

1. Floating IPリストで **Actions** → **Attach** をクリックします。
2. アタッチするインスタンスを選択し、**Attach** をクリックします。

## インスタンスからのFloating IPのデタッチ

1. Floating IPリストで **Actions** → **Detach** をクリックします。
2. デタッチを確認します。

## Floating IPの削除

1. Floating IPリストで **Actions** → **Delete** をクリックします。
2. 削除を確認します。

:::warning
削除後、パブリックIPはプールに返却され、別のアカウントに割り当てられる場合があります。
:::

## 次のステップ

- [Subnet管理](./Quản%20lý%20Subnets.md)
