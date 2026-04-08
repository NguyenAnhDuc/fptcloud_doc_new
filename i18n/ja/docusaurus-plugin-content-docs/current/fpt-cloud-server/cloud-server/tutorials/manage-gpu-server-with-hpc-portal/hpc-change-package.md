---
id: "hpc-change-package"
title: "マシン設定の変更"
description: "使用要件が変わった場合に、HPC Portal上でGPU Serverの設定を変更します。"
sidebar_label: "マシン設定の変更"
sidebar_position: 3
---

# マシン設定の変更

要件が変わり、現在のサーバー設定が高すぎたり低すぎたりする場合、Change Package機能を使用してマシンのセットアップに影響を与えることなく設定を調整できます。

:::warning
Change Package機能を使用する前にマシンをシャットダウンする必要があります。
:::

## 設定の変更

1. 変更したいイメージを選択し、**Change package** をクリックします。
2. 適切な新しい設定パッケージを選択して確認します。

:::note
パッケージ変更後は、マシン上のGPUカードを確認し、安定した動作を確保するためにNVIDIA Studio Driverを最新バージョンに更新してください。
:::

## 次のステップ

- [固定レンタル期間の設定](/ja/docs/fpt-cloud-server/cloud-server/tutorials/manage-gpu-server-with-hpc-portal/hpc-fixed-rental)
