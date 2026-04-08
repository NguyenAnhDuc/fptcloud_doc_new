---
id: "clone-instance"
title: "仮想マシンのクローン"
description: "元のInstanceと同じ構成で仮想マシンのコピーを作成します。"
sidebar_label: "仮想マシンのクローン"
sidebar_position: 2
---

# 仮想マシンのクローン

Clone Instance機能を使用すると、元の仮想マシンと同一の新しい仮想マシンを作成できます。同じ構成の仮想マシンを複数台デプロイする際の時間を節約できます。

## 前提条件

- ✅ 元のInstanceが **Power on** または **Power off** 状態であること。
- ✅ Instanceに外部ディスクがアタッチされていないこと。

:::note
- この機能は外部ディスクがアタッチされているInstanceには対応していません。
- SnapshotまたはGPUを持つInstanceの場合、システムはInstanceをクローンしますが、SnapshotとGPUは含まれません。
:::

## 仮想マシンのクローン

1. クローンしたいInstanceを選択し、**Actions** → **Clone instance** をクリックします。

   [![Clone instanceオプションがあるActionsメニュー](/img/migrated/image-1717475698353-5ed202f9.png)](/img/migrated/image-1717475698353-5ed202f9.png)

2. 以下のパラメータを入力します。
   - **Instanceの名前**: クローン後の仮想マシン名（英字、数字、`-`、`_`、スペース、ピリオドのみ使用可能）。
   - **Storage policy**: Storageの種類を選択。
   - **Subnet**: リストからSubnetを選択。
   - **Private IP** *(省略可)*: クローンInstanceのIPアドレスを入力。空白の場合はシステムが自動生成。

   [![Clone instanceダイアログ](/img/migrated/image-1717475716702-fb6919a9.png)](/img/migrated/image-1717475716702-fb6919a9.png)

3. **Clone** をクリックします。

システムがInstanceリスト画面に移動します。クローンされたInstanceは **Pending** 状態で表示されます。

[![Pending状態のClone Instance](/img/migrated/image-1717475729573-36124bd2.png)](/img/migrated/image-1717475729573-36124bd2.png)

完了後、状態が **Running** に変わります。

[![Running状態に変わったClone Instance](/img/migrated/image-1717475743661-15f71aa3.png)](/img/migrated/image-1717475743661-15f71aa3.png)

## 次のステップ

- [仮想マシンの起動/停止](./quick-starts-tatbat-may-ao.md)
