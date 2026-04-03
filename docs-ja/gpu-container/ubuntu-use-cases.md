---
id: "ubuntu-use-cases"
title: "Ubuntu Use Cases"
description: "このユースケースでは、Ubuntuテンプレートからリモート環境を作成し、SSH経由で接続してAIワークロードに必要なPyTorchライブラリをインストールします。"
sidebar_label: "Ubuntu Use Cases"
sidebar_position: 23
---

# Ubuntu Use Cases

## Ubuntuを使用してリモート環境を作成する
このユースケースでは、UbuntuテンプレートからリモートEnvironmentを作成し、SSH経由で接続してAIワークロード向けに必要なPyTorchライブラリをインストールする方法を説明します。

### ステップ1：Ubuntuテンプレートを使用してGPU Containerを作成する
  * Ubuntuテンプレートを選択します
  * SSH Terminal Accessを選択して公開鍵を追加します [![Alt text](/img/migrated/Screenshot-2025-07-04-173921-e1a92ec9.png)](/img/migrated/Screenshot-2025-07-04-173921-e1a92ec9.png)

### ステップ2：SSH経由でコンテナに接続する

SSH経由で接続するには、コマンドをコピーしてターミナルに貼り付けます。コマンドプロンプト、PowerShell、またはVS Codeの統合ターミナルなど、任意のターミナルアプリケーションを使用できます。このユースケースではVSCodeを使用します。 [![Alt text](/img/migrated/Screenshot-2025-07-04-174741-230551f8.png)](/img/migrated/Screenshot-2025-07-04-174741-230551f8.png)
完全なウォークスルーについては、詳細ガイドを[こちら](../gpu-container/index.md)でご確認ください。

### ステップ3：環境を設定する
  1. python3をインストールする

```
apt update && apt install -y wget gnupg2 curl software-properties-common 
```

```
apt install -y python3 python3-pip python3-venv 
```

  2. Pytorchをインストールする

```
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124   
```

pytorchが正常にインストールされたか確認する

```
python 3 
```

```
import torch 
```

  3. 行列アルゴリズムを実行する

```
apt install vim 
```

```
vim matrix_mulplication.py 
```

```
python3 matrix_mulplication.py 
```
