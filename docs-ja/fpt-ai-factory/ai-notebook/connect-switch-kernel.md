---
id: "connect-switch-kernel"
title: "Kernelの接続と切り替え"
description: "AI NotebookでKernel環境を切り替える方法。"
sidebar_label: "Kernelの接続と切り替え"
sidebar_position: "6"
---

# Kernelの接続と切り替え

**ステップ1:** カーネル設定メニューを開く

Notebook IDEで、右上の**カーネル設定メニュー**を開きます。

| オプション | 説明 | 使用タイミング |
| --- | --- | --- |
| **Running Kernels** | 既存のアクティブなカーネル（例：Python 3）に接続します。 | 作業を迅速に再開し、リソースを節約 |
| **Start Other Kernels** | 選択したGPUリソース（1x、2x、4x、8x H100）で新しいカーネルを起動します。 | 新しい実験や重いワークロード |
| **No Kernel** | 計算リソースを割り当てずにノートブックを開く。 | 実行せずにコードを表示または編集 |

---

**ステップ2a:** 新しいカーネルを開始する

1. 「**Start Other Kernels**」で、使用するGPUタイプを選択してください。
2. 「**Confirm**」をクリックし、確認ポップアップを承認してください。

[![GPU確認ポップアップ画面](/img/migrated/image-6-dd343caf.png)](/img/migrated/image-6-dd343caf.png)

3. ノートブックの準備が整うまで約**1〜2分**待ちます。
4. 接続が完了すると、新しいカーネルが「**Running Kernels**」に表示されます。

---

**ステップ2b:** 既存カーネルへの切り替え

1. 「**Running Kernels**」で、接続したいカーネルを選択します。
2. ノートブックの準備が整うまで約**1〜2分**待ちます。
3. 接続が完了すると、カーネルが「**Running Kernels**」で選択されます。
