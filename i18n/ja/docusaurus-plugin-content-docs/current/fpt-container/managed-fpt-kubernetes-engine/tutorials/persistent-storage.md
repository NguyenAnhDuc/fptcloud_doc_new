---
id: "persistent-storage"
title: "Persistent Storage"
description: "FPTCloud の Managed FKE は、ユーザーが希望する速度でデータを保存・読み書きできる block storage（CSI – Container Storage Interface）ソリューションを提供します。"
sidebar_label: "Persistent Storage"
sidebar_position: 6
---

# Persistent Storage

FPTCloud の Managed FKE は、ユーザーが希望する速度でデータを保存・読み書きできる block storage（CSI – Container Storage Interface）ソリューションを提供します。Managed FKE クラスターには、base worker pool のディスクポリシーと同じポリシーを使用するデフォルトの storage class があらかじめ用意されています。FPTCloud の CSI はオンラインでの volume のリサイズをサポートしています。

[![](/img/migrated/Picture1-1-9affd8aa.png)](/img/migrated/Picture1-1-9affd8aa.png)

ユーザーはこれらの storage class を使用して PVC（Persistent Volume Claim）を作成し、アプリケーションでそれらの PVC を使用することができます。

別のディスクポリシーで新しい storage class を作成したい場合は、以下の手順に従ってください。

- デフォルトの storage class の設定を保存します。
- ディスクポリシーを変更します。
- storage class の名前を変更します。
- デフォルト storage class のアノテーションを削除します。

**注意:** クラスターのデフォルト storage class の設定を変更しないでください。変更した場合、自動的にデフォルト設定にロールバックされます。新しい storageClass を使用したい場合は、PersistentVolumeClaim の設定で storageClassName を指定する必要があります。
