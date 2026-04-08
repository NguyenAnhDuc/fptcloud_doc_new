---
id: "gan-storage-disk-vao-may-ao"
title: "Storage Disk を Instance にアタッチする"
description: "Storage Disk を Instance にアタッチしてストレージ容量を拡張します。"
sidebar_label: "Storage Disk を Instance にアタッチする"
sidebar_position: 3
---

# Storage Disk を Instance にアタッチする

Storage Disk を作成したら、Instance にアタッチして使用を開始できます — 物理マシンに外付けハードドライブを接続するのと同様です。

## Storage Disk のアタッチ

1. アタッチしたい Storage Disk を選択し、**Actions** → **Attach** をクリックします。

   [![Attach オプションがある Actions メニュー](/img/migrated/image-1712215517268-10c0d6df.png)](/img/migrated/image-1712215517268-10c0d6df.png)

2. ポップアップでアタッチ先の Instance を選択し、**Attach** をクリックします。

   [![Attach 用 Instance 選択ダイアログ](/img/migrated/image-1712215524338-f47bb248.png)](/img/migrated/image-1712215524338-f47bb248.png)

:::note
- 各 Storage Disk は同時に 1 つの Instance にしかアタッチできません。
- Windows Instance の場合、アタッチ後に追加のディスク設定手順が必要です。
:::

## 次のステップ

- [Windows Instance のディスクを設定する](/ja/docs/fpt-cloud-server/cloud-server/tutorials/block-storage/cau-hinh-o-dia-cho-may-ao-chay-windows)
