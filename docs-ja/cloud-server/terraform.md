---
id: "terraform"
title: "IaC (Terraform)"
description: "Terraformを使用してFPT Cloud上のインフラのデプロイと管理を自動化します。高度なインフラ管理ソリューションとして、デプロイの自動化を実現します。"
sidebar_label: "IaC (Terraform)"
sidebar_position: 75
---

# IaC (Terraform)

FPT Smart CloudはTerraformを高度なインフラ管理ソリューションとして導入し、ユーザーがクラウドインフラのデプロイと管理を効率的に自動化できるようにしています。Terraformを使用すると、インフラをコードとして定義（Infrastructure as Code）でき、AWS、Azure、Google Cloudなど複数のクラウドプラットフォームにわたってデプロイを一貫性のある形で行い、容易にスケールアップし、管理することができます。このソリューションはリスクを最小化するだけでなく、制御とリソース最適化を強化し、企業が技術目標を迅速かつ持続的に達成することを支援します。

# **セットアップ**

## **1. システム要件**

  * オペレーティングシステム：TerraformはLinux、macOS、Windowsなど複数のOSをサポートしています。
  * バージョン：クラウドサービスプロバイダーとの互換性を確保するため、Terraformの最新バージョンを使用してください。
  * インターネットアクセス：Terraformおよびプラグインのダウンロードのためにインターネットアクセスが必要です。

## **2. Terraformのインストール**

**macOSの場合：**
  * Homebrewを使用：

```
Copybrew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

**Ubuntuの場合：**

```
Copysudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl

curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -

sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"

sudo apt-get update && sudo apt-get install terraform
```

**Windowsの場合：**
  * Terraform Download Pageからダウンロードします。
  * ファイルを解凍し、TerraformのパスをPATH環境変数に追加します。

## **3. インストールの確認**

```
Copyterraform -v
```

## **4. FPT Cloud Terraform用トークンの取得方法**

**Sidebar** → **Token** を選択します。

[![file](/img/migrated/image-1723437528179-91f0c476.png)](/img/migrated/image-1723437528179-91f0c476.png)

## **5. FPT Cloud Providerの初期化**

  * TerraformレジストリでFPT Cloud Providerのバージョンとインストール手順を確認します。

[![file](/img/migrated/image-1723437534957-3c8ce6d5.png)](/img/migrated/image-1723437534957-3c8ce6d5.png)

  * `terraform init` コマンドを使用してFPT Cloud Providerをインストールします：

[![file](/img/migrated/image-1723437542169-e0e540d0.png)](/img/migrated/image-1723437542169-e0e540d0.png)

  * FPT Cloud接続スクリプト：

[![file](/img/migrated/image-1723437548914-a137448d.png)](/img/migrated/image-1723437548914-a137448d.png)

  * FPT Cloudに接続するためのアクセストークンを作成します：

[![file](/img/migrated/image-1723437556421-20c74723.png)](/img/migrated/image-1723437556421-20c74723.png)

  * アクセストークンを使用してFPT Cloudに接続します：

[![file](/img/migrated/image-1723437566706-348f066d.png)](/img/migrated/image-1723437566706-348f066d.png)

# **ドキュメント**

  * Terraform Provider ドキュメント：
    * <https://registry.terraform.io/providers/fpt-corp/fptcloud/latest/docs/>
  * FPT Cloud Terraform ソース：
    * <https://github.com/fpt-corp/terraform-provider-fptcloud>

# **基本コマンド**

## **1. Instance**

  * Instanceを作成するスクリプト：

[![file](/img/migrated/image-1723437678446-b7530cf5.png)](/img/migrated/image-1723437678446-b7530cf5.png)

  * Instance作成スクリプトを正常に実行した後の結果：

[![file](/img/migrated/image-1723437688217-2eb8bf11.png)](/img/migrated/image-1723437688217-2eb8bf11.png)

  * 作成したInstanceを削除：

[![file](/img/migrated/image-1723437700286-b35fddad.png)](/img/migrated/image-1723437700286-b35fddad.png)

## **2. Floating IP**

  * Floating IPを作成するスクリプト：

[![file](/img/migrated/image-1723437714387-6c0be5da.png)](/img/migrated/image-1723437714387-6c0be5da.png)

  * Floating IP作成スクリプトを正常に実行した後の結果：

[![file](/img/migrated/image-1723437730547-f78e85ae.png)](/img/migrated/image-1723437730547-f78e85ae.png)

  * 作成したFloating IPを削除：

[![file](/img/migrated/image-1723437746142-363beff3.png)](/img/migrated/image-1723437746142-363beff3.png)

## **3. Security group**

  * Security Groupを作成するスクリプト：

[![file](/img/migrated/image-1723437759616-a8b23b4a.png)](/img/migrated/image-1723437759616-a8b23b4a.png)

  * Security Group作成スクリプトを正常に実行した後の結果：

[![file](/img/migrated/image-1723437770927-7e2c545b.png)](/img/migrated/image-1723437770927-7e2c545b.png)

  * 作成したSecurity Groupを削除：

[![file](/img/migrated/image-1723437790818-b15cbbf6.png)](/img/migrated/image-1723437790818-b15cbbf6.png)

## **4. ストレージディスク**

  * ストレージを作成するスクリプト：

[![file](/img/migrated/image-1723437806000-91108bc0.png)](/img/migrated/image-1723437806000-91108bc0.png)

  * ストレージ作成スクリプトを正常に実行した後の結果：

[![file](/img/migrated/image-1723437818502-769b79b9.png)](/img/migrated/image-1723437818502-769b79b9.png)

  * 作成したストレージを削除：

[![file](/img/migrated/image-1723437832407-dc6858ee.png)](/img/migrated/image-1723437832407-dc6858ee.png)

## **5. データベース**

  * データベースを作成するスクリプト：

[![file](/img/migrated/image-1728455233157-737c6b5f.png)](/img/migrated/image-1728455233157-737c6b5f.png)

  * 正常に作成された後の結果：

[![file](/img/migrated/image-1728455257294-ab53f375.png)](/img/migrated/image-1728455257294-ab53f375.png)

  * データベースの起動・停止状態を管理するスクリプト：

[![file](/img/migrated/image-1728455276595-5698c246.png)](/img/migrated/image-1728455276595-5698c246.png)

## **6. Dedicated FKE**

  * Dedicated FKEクラスターを作成するスクリプト：

[![file](/img/migrated/image-1728875321308-2f0d39fe.png)](/img/migrated/image-1728875321308-2f0d39fe.png)

  * 正常に作成された後の結果：

[![file](/img/migrated/image-1728875338930-4c7925af.png)](/img/migrated/image-1728875338930-4c7925af.png)

## **7. Managed FKE**

  * Managed FKEクラスターを作成するスクリプト：

[![file](/img/migrated/image-1728875363303-1b9ead1e.png)](/img/migrated/image-1728875363303-1b9ead1e.png)

  * 正常に作成された後の結果：

[![file](/img/migrated/image-1728875375510-c368341c.png)](/img/migrated/image-1728875375510-c368341c.png)
