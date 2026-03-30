---
id: "gpu-general"
title: "Console PortalでのGPU管理"
description: "FPT Cloud PortalでGPU搭載インスタンスの作成、GPU の追加・削除、GPUサイズ変更を行います。"
sidebar_label: "Console PortalでのGPU管理"
sidebar_position: 21
---

# Console PortalでのGPU管理

FPT Cloud Portal上で、GPU搭載インスタンスの作成、既存インスタンスへのGPU追加、GPUの削除、またはGPU設定のサイズ変更を直接行うことができます。

## GPU搭載インスタンスの作成

1. **Instance Management** で **Create instance** をクリックします。

   [![Instance Management画面](/img/migrated/image-1744799866857-2ea8b0f3.png)](/img/migrated/image-1744799866857-2ea8b0f3.png)

2. **GPU** を選択し、使用するGPUカードのタイプを選択します。

   [![GPUタイプの選択](/img/migrated/image-1744799912482-215598f9.png)](/img/migrated/image-1744799912482-215598f9.png)

3. 残りの情報を入力し、**Create Instance** をクリックします。

   [![GPU Instanceの作成確認](/img/migrated/image-1744799934410-03d823e6.png)](/img/migrated/image-1744799934410-03d823e6.png)

GPU情報はInstance Detail画面で確認できます。

[![GPU情報が表示されたInstance Detail](/img/migrated/image-1744799982286-e3f4b4f1.png)](/img/migrated/image-1744799982286-e3f4b4f1.png)

## インスタンスへのGPU追加

:::note
GPU追加前にインスタンスを **Power off** する必要があります（ステータスが「Stopped」であること）。インスタンスが「Running」または「Pending」状態の場合、この機能は無効になります。
:::

1. **Instance Management** でGPUを追加するインスタンスを選択します。

   [![インスタンスの選択](/img/migrated/image-1744799997207-f8405b2c.png)](/img/migrated/image-1744799997207-f8405b2c.png)

2. **Actions** → **Add GPU** を選択します。

   [![Add GPUオプションがあるActionsメニュー](/img/migrated/image-1744800019053-f556d42e.png)](/img/migrated/image-1744800019053-f556d42e.png)

3. リストから適切な **GPU type** を選択し、**Add GPU** をクリックします。

4. Instance Detail画面で情報を確認します。

   [![GPU追加後のInstance Detail](/img/migrated/image-1744800059691-eba5d618.png)](/img/migrated/image-1744800059691-eba5d618.png)

## インスタンスからのGPU削除

:::note
GPU削除前にインスタンスを **Power off** する必要があります。
:::

1. **Instance Management** でインスタンスを選択し、**Remove GPU** をクリックします。
2. リストから通常の **resource type**（GPUなし）を選択します。
3. **Remove GPU** をクリックします。システムがGPUを削除し、インスタンスを選択したリソースタイプに移行します。

## GPUのサイズ変更

:::note
サイズ変更前にインスタンスを **Power off** する必要があります。
:::

1. **Instance Management** でインスタンスを選択し、**Resize** をクリックします。
2. **template** と **resource type** を選択します：
   - GPUありのインスタンスはGPUタイプにのみサイズ変更できます。
   - GPUなしのインスタンスはGPUなしタイプにのみサイズ変更できます。GPUタイプに切り替えるには **Add GPU** を使用してください。
3. **Resize Instance** をクリックします。

## 次のステップ

- [Specificサービス向けGPU管理](./gpu-specific.md)
