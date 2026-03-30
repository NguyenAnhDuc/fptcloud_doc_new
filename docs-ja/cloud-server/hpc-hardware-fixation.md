---
id: "hpc-hardware-fixation"
title: "ハードウェア固定"
description: "イメージに物理サーバーを固定して、起動するたびに同じ物理マシンが使用されるようにします。"
sidebar_label: "ハードウェア固定"
sidebar_position: 28
---

# ハードウェア固定

デフォルトでは、マシン起動時にシステムがセッションごとにランダムで物理サーバーを割り当てます。Hardware Fixation機能は、物理サーバーのMACアドレスをイメージに記録し、起動するたびに常に同じ物理マシンが使用されるようにします。

## Hardware Fixationの有効化

1. イメージを選択し、**Action** → **Hardware fixation** をクリックします。
2. 確認ダイアログで **Enable** を選択します。

## Hardware Fixationの無効化

1. **Hardware fixation** を選択します。
2. ダイアログで **Disable** を選択します。

## 次のステップ

- [マシンのリセット](./hpc-rest-machine.md)
