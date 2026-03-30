---
id: "gpu-specific"
title: "SpecificサービスのGPU管理"
description: "FPT CloudのSpecificサービスタイプでGPUの追加、新規GPU Serverの作成、GPU の削除を行います。"
sidebar_label: "SpecificサービスのGPU管理"
sidebar_position: 22
---

# SpecificサービスのGPU管理

このガイドでは、Specificサービスタイプ向けのGPU管理について説明します。既存インスタンスへのGPU追加、新規GPU Serverの作成、GPUの削除が含まれます。

## 既存インスタンスへのGPU追加

:::note
GPU追加前にインスタンスを **Power off** する必要があります。最小構成：8 vCPU – 24 GB RAM。
:::

1. **Instance Management** で **Actions** → **Add GPU** を選択します。

   [![Add GPUオプションがあるActionsメニュー](/img/migrated/image-1705028237983-e4b7aeed.png)](/img/migrated/image-1705028237983-e4b7aeed.png)

2. リストから **GPU** 設定を選択し、**Update** をクリックします。

## 新規GPU Serverの作成

:::note
- アカウントにGPUクォータが割り当てられている必要があります。VPCのクォータが不足している場合、新規GPU Server作成時にエラーが返されます。
- 最小構成：8 vCPU – 24 GB RAM。
:::

1. **Compute Engine** → **Instance Management** を選択し、**Create instance** をクリックします。

   [![Instance Management画面](/img/migrated/image-1712739862804-d5b7552c.png)](/img/migrated/image-1712739862804-d5b7552c.png)

2. インスタンスを設定します：
   - **Instance Type**：**GPU** を選択します。
   - **GPU type**：適切なGPUタイプを選択します。
   - **Image**：適切なOSを選択します。
   - **Resource type**：リストから設定を選択します。
   - **Local Storage**：ディスクサイズを調整します（最小40 GB）。
   - **Subnet** と **Private IP**：自動割り当てまたはカスタマイズします。
   - **インスタンス名**：インスタンス名を入力します。
   - **Authentication type**：Standard（Password）またはSSH Keyを選択します。

3. **Create Instance** をクリックします。

作成後、システムが即座にGPUをインスタンスに接続します。コンソールを開いてGPU情報を確認できます。

## インスタンスからのGPU削除

1. **Instance Management** で **Actions** → **Remove GPU** を選択します。
2. 内容を確認し、**Update** をクリックします。

## 次のステップ

- [HPC PortalでのGPU Server管理](./quan-ly-gpu-voi-hpc-portal.md)
