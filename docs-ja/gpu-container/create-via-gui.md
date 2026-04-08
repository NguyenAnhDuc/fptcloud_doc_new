---
id: "create-via-gui"
title: "Create Via Gui"
description: "各テナントはコンテナを最大10個まで作成できます。制限に達した場合は、未使用のコンテナを削除して新しいコンテナを作成してください。"
sidebar_label: "Create Via Gui"
sidebar_position: 5
---

# Create Via Gui

[!(/img/migrated/information-fill-1-30ad0c7d.png)](/img/migrated/information-fill-1-30ad0c7d.png)
**注意：** 各テナントはコンテナを最大10個まで作成できます。この制限に達した場合は、未使用のコンテナを削除して新しいコンテナを作成してください。

### 1. サイドメニューでGPU Containerを選択し、「Create New Container」ボタンをクリックします
### 2. Container Nameフィールドを使用してコンテナに名前を付けます。
### 3. GPU Instance（現在NVIDIA GPU H100およびH200をサポート）を選択します
### 4. テンプレート：
ユーザーは組み込みテンプレートを使用するか、独自のイメージを使用するかを選択できます。より迅速なデプロイのために、組み込みテンプレートの使用を強くお勧めします。

#### a. 組み込みテンプレート：「Change Template」をクリックしてテンプレートを選択します。
[![Alt text](/img/migrated/Screenshot-2025-06-19-144905-bbf38c4a.png)](/img/migrated/Screenshot-2025-06-19-144905-bbf38c4a.png)

#### b. カスタムテンプレート：「Custom Template」機能を使用して独自のテンプレートを持ち込みます。
[![Alt text](/img/migrated/Screenshot-2025-06-19-145912-f00bf337.png)](/img/migrated/Screenshot-2025-06-19-145912-f00bf337.png)

### 5. コンテナにアクセスする。
#### a. ポート
この機能はコンテナ化されたアプリケーションの柔軟性を大幅に向上させ、1つのコンテナが異なるポートで多様な機能を提供できるようにします。
HTTPとTCPポートの両方がサポートされており、各コンテナにつき各タイプ最大10ポートまで設定できます。

#### b. SSH
SSHキーを追加してコンテナへのリモートアクセスを有効にします。各コンテナは最大10個のSSHキーをサポートします。これらのキーは実行時にコンテナに注入され、提供されたキーのいずれかを使用してコンテナにSSH接続できます。
[!(/img/migrated/information-fill-1-30ad0c7d.png)](/img/migrated/information-fill-1-30ad0c7d.png)
**注意：** 現在、v1.1.2のGPU ContainerはUbuntuテンプレートのみSSH設定が含まれています。他のテンプレートでSSH接続したい場合は、事前にOpenSSH-serverをインストールしてください。
SSHキーを追加するには、以下の手順に従ってください：
  1. ローカルマシンにSSHキーペアが生成されていることを確認します。まだの場合は、ローカルターミナルで以下のコマンドを使用して生成できます：

```
ssh-keygen -t ed25519 -C YOUR_EMAIL@DOMAIN.COM
```

  2. 公開SSHキーを取得するには、以下のコマンドを実行します：

```
cat ~/.ssh/id_ed25519.pub
```

次のような出力が表示されます：

```
ssh-ed25519 AAAAC4NzaC1lZDI1JTE5AAAAIGP+L8hnjIcBqUb8NRrDiC32FuJBvRA0m8jLShzgq6BQ YOUR_EMAIL@DOMAIN.COM
```

  3. 出力をSSH Public Keysフィールドにコピー＆ペーストします： [![Alt text](/img/migrated/Screenshot-2025-07-08-084117-1-f6d63798.png)](/img/migrated/Screenshot-2025-07-08-084117-1-f6d63798.png)

### 6. 詳細設定（オプション）
このセクションには以下が含まれます：
a. **永続ディスク**：トレーニングの重み、モデルなどを保存するために必要なストレージ量を指定します。ストレージの詳細は[こちら](/docs/ja/gpu-container/)/をご参照ください
b. **環境変数**：実行時にコンテナに注入されるキーと値のペアです。
c. **起動コマンド**：コンテナ起動時に実行するコマンドと引数です。

### 7. **「Create New Container」** をクリックしてコンテナを作成・起動します。
### 8. クレジットを追加する
新しいコンテナを作成するために残高が不足している場合（コンテナを1時間使用するコスト未満の場合）、アカウントにクレジットを追加するには以下の手順に従ってください：[クレジットを追加する](/docs/ja/gpu-container/add-credit/)
