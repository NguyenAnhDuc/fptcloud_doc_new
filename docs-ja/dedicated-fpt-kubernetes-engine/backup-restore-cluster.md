---
id: "backup-and-restore-cluster"
title: "Cluster のバックアップとリストア"
description: "Kubernetes cluster をバックアップおよびリストアする手順。"
sidebar_label: "Cluster のバックアップとリストア"
sidebar_position: 25
---

# Cluster のバックアップとリストア

Kubernetes cluster をバックアップするには、**Backup & Recovery** サービスを使用して master node のバックアップを実行します。

1. メニューから **Backup & Recovery** を選択します。**Backup & Recovery** ページが表示されます。
[![Userguide K8s 41](/img/migrated/Userguide-K8s-41-1024x538-9ffaa95c.png)](/img/migrated/Userguide-K8s-41-1024x538-9ffaa95c.png)
2. **Create Backup Job** を選択します。
[![Userguide K8s 39 1](/img/migrated/Userguide-K8s-39-1-8b326028.png)](/img/migrated/Userguide-K8s-39-1-8b326028.png)
3. **New Backup Job** 画面が表示されます。バックアップする cluster に対応するすべての master node VM を選択します。必要に応じて **Retention** と **Schedule** を設定し、**Create** をクリックします。
[![Userguide K8s 40](/img/migrated/Userguide-K8s-40-e5b5a0c6.png)](/img/migrated/Userguide-K8s-40-e5b5a0c6.png)
