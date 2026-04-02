---
id: "khoi-tao-profile"
title: "Profileの作成"
description: "FPT AutoscaleでAutoscale Profileを作成するガイドです。"
sidebar_label: "Profileの作成"
sidebar_position: 3
---

# Profileの作成

## ステップ1: Autoscaling > Autoscale Profileページに移動します。**Create profile**をクリックします。

[![create profile button](/img/migrated/Screenshot-2024-09-30-141746-e33a4741.png)](/img/migrated/Screenshot-2024-09-30-141746-e33a4741.png)

## ステップ2: 技術パラメータを設定します。

[![create profile page](/img/migrated/screencapture-console-fptcloud-000823-IN-44f85951.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-44f85951.png)

**General information**

管理しやすいProfile名を入力します。名前は80文字以内で、ラテン文字、数字、アンダースコア、ハイフン、ピリオドを使用できます。

**Image**

利用可能なOSファミリーには、Ubuntu、Windows、CentOS、Debianがあります。各OSグループには複数のディストリビューションが含まれています。

Customグループはユーザーがカスタマイズ・設定したImageが含まれており、よく利用されます。

**Credentials**

サポートされている認証方法：

- Password
- None: アクセス時に認証が不要な場合は_None_を選択します。

ImageがCustomグループに属する場合、認証方法はImage内にすでに設定されており、変更する必要はありません。

**Resource**

- CPU & RAM: 提供されているオプションから適切なスペックを選択します。
- Storage: ディスクタイプと容量を選択します。デフォルトはPremium-SSDで、最小40 GBです。

:::note
推奨される最小容量は選択したImageの仕様に基づきます。Imageの要件を下回るディスク容量を設定すると、予期しないエラーが発生する場合があります。
:::

**Network**

VPC内の適切なSubnetとSecurity Groupを選択します。SubnetとSecurity GroupはProfileを作成する前に事前に作成しておく必要があります。

**Advanced setting**

必要に応じて[cloud-init](https://cloudinit.readthedocs.io/en/latest/topics/examples.html)スクリプトを入力します。Nodeが起動すると、cloud-initはCloudからメタデータを読み取り、それに基づいてシステムを初期化します。cloud-initは通常、ネットワーク、ストレージ、SSH公開鍵、その他のシステムコンポーネントのセットアップに使用されます。

例：以下のサンプルスクリプトは必要なパッケージをインストールし、GitHubから静的Webサイトをクローンして、nginxサーバーを起動します。結果を確認するには、NodeにFloating IPを割り当て、そのFloating IP経由でWebサイトにアクセスします。

```yaml
# Update apt database on first boot
package_update: true

packages:
  - nginx
  - git

runcmd:
  - systemctl enable nginx
  - systemctl start nginx
  - git clone https://github.com/cloudacademy/static-website-example.git
  - cp -r ./static-website-example/* /var/www/html/
  - rm -r ./static-website-example
```

:::warning
スクリプトにパスワード、トークン、シークレットキー、個人情報などの機密情報を含めないでください。
:::

## ステップ3: **Create profile**をクリックして確定します。

作成に成功すると、ProfileはProfile一覧に表示されます。

[![list profiles after create](/img/migrated/Screenshot-2024-09-30-172521-27261ff1.png)](/img/migrated/Screenshot-2024-09-30-172521-27261ff1.png)

一覧でProfile名をクリックするとProfileの詳細を確認できます：

[![click to view profile details](/img/migrated/Screenshot-2024-10-01-164339-e3a959ae.png)](/img/migrated/Screenshot-2024-10-01-164339-e3a959ae.png)

[![profile detail page](/img/migrated/screencapture-console-fptcloud-000823-IN-5d746d0a.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-5d746d0a.png)

:::note
設定参照の一貫性を確保するため、現在Profileの技術仕様の変更はサポートされていません。ただし、Profile名はいつでも変更できます。
:::
