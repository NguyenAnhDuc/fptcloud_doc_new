---
id: "サイト間VPNの作成 -1"
title: "サイト間VPNの作成"
description: "FPT Cloud Portalで新しいVPN Site-to-Site接続を作成するガイドです。"
sidebar_label: "サイト間VPNの作成"
sidebar_position: 2
---

# サイト間VPNの作成

VPN Site-to-Site接続を作成すると、オンプレミスネットワークとFPT Cloudリソース間のセキュアなトンネルが確立されます。

1. **Networking** → **VPN** タブを選択します。

   ![VPN管理ページ](/img/migrated/image-1742899330143-080379db.png)

2. **Create** をクリックします。

   ![Create VPNボタン](/img/migrated/image-1742899367880-bb010d83.png)

3. **Config** ページで必要な情報を入力します：

   | フィールド | 説明 | 制限 |
   |---|---|---|
   | **Name** | VPN Site-to-Site名 | 最大32文字。文字、数字、アンダースコア、ダッシュ、スペース、ドットのみ |
   | **Description** | VPN接続の説明 | 最大100文字 |
   | **Security Profile** | 接続セキュリティの種類 | |
   | **Authentication mode** | 認証方法 | 現在Certificate認証は未サポート |
   | **Pre-shared key** | 各ピアの秘密鍵 | 8-32文字：A-Z、a-z、0-9、_、. |
   | **Edge gateway** | ネットワーク接続を処理するエッジゲートウェイ | リストから選択 |
   | **Local endpoint IP Address** | FPT CloudシステムのパブリックIP | 他のVPCやサービスに未割当のIP |
   | **Local endpoint Networks** | クラウド上のネットワーク | 他のVPN接続やRemote endpoint Networksと重複不可 |
   | **Remote endpoint IP Address** | オンプレミス側のパブリックIP | IPv4アドレス |
   | **Remote endpoint Networks** | オンプレミス側のネットワーク | Local endpoint Networksと重複不可 |

   ![VPN設定フォーム](/img/migrated/image-1742899430155-89b24257.png)
