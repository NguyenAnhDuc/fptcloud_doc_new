---
id: "set-up"
title: "セットアップガイド"
description: "Terraformのインストール方法とFPT Cloudプロバイダーの設定方法。"
sidebar_label: "セットアップガイド"
sidebar_position: 3
---

# セットアップガイド

## 1. システム要件

- **オペレーティングシステム**: TerraformはLinux、macOS、Windowsをサポートしています。
- **バージョン**: ご利用のクラウドプロバイダーとの互換性を確保するために、最新バージョンのTerraformを使用してください。
- **インターネットアクセス**: TerraformとプラグインのダウンロードにはInterneetアクセスが必要です。

## 2. Terraformのインストール

**macOS**（Homebrewを使用）:

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

**Ubuntu**:

```bash
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install terraform
```

**Windows**:

1. [Terraform ダウンロードページ](https://www.terraform.io/downloads)からインストーラーをダウンロードします。
2. アーカイブを展開し、TerraformのパスをPATH環境変数に追加します。

## 3. インストールの確認

```bash
terraform -v
```

## 4. FPT CloudトークンSの取得

**Sidebar** に移動し、**Token** を選択します。

[![FPT CloudサイドバーのTokenセクション](/img/migrated/image-1723437528179-91f0c476.png)](/img/migrated/image-1723437528179-91f0c476.png)

## 5. FPT Cloudプロバイダーの初期化

- Terraformレジストリページでプロバイダーのバージョンとインストール手順を確認します。

  [![TerraformレジストリのFPT Cloudプロバイダー](/img/migrated/image-1723437534957-3c8ce6d5.png)](/img/migrated/image-1723437534957-3c8ce6d5.png)

- `terraform init`コマンドでFPT Cloudプロバイダーをインストールします：

  [![terraform initコマンドの出力](/img/migrated/image-1723437542169-e0e540d0.png)](/img/migrated/image-1723437542169-e0e540d0.png)

- FPT Cloud接続スクリプトを使用します：

  [![FPT Cloud接続スクリプト](/img/migrated/image-1723437548914-a137448d.png)](/img/migrated/image-1723437548914-a137448d.png)

- FPT Cloudへの接続用アクセストークンを作成します：

  [![アクセストークンの作成](/img/migrated/image-1723437556421-20c74723.png)](/img/migrated/image-1723437556421-20c74723.png)

- アクセストークンを使用してFPT Cloudに接続します：

  [![アクセストークンを使用した接続](/img/migrated/image-1723437566706-348f066d.png)](/img/migrated/image-1723437566706-348f066d.png)
