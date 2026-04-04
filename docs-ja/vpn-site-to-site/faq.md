---
id: "faq"
title: "よくある質問"
description: "VPN Site-to-Siteサービスに関するよくある質問と回答。"
sidebar_label: "よくある質問"
sidebar_position: "39"
---

# よくある質問

## 初期設定

### Q: **企業がVPNを使用する理由は何ですか？**
VPNは、リモートユーザーをオフィスネットワークに接続するための、コスト効率が高く、高速で安全な手段です。VPN接続は通常パブリックインターネット上で行われるため、ダイレクト接続よりも低コストでありながら、安全な接続を維持できます。

* * *

### Q: **VPN Site-to-Siteの接続が成功したか確認する方法は？**
管理画面で以下の項目を確認してください：
  * **Operation Status**: _Online_ であること
  * **Provisioning Status**: _Active_ であること

_注意:_ この状態は **Phase 1** の接続のみを反映しています。
**Phase 2** を確認するには、VPN Connectionで設定したSubnetに属するマシン間でpingを実行してください。

* * *

### Q: **IKEおよびIPSecポリシーのパラメーターは両端で同一にする必要がありますか？**
はい。接続を正常に確立するには、**Phase 1 (IKE)** および **Phase 2 (IPSec)** の設定パラメーターが両側で一致している必要があります。
設定ガイド：
  * IKE (Phase 1) の設定: [こちら](../vpn-site-to-site/index.md)
  * IPSec (Phase 2) の設定: [こちら](../vpn-site-to-site/index.md)
  * DPD (VPN Connection) の設定: [こちら](../vpn-site-to-site/index.md)

* * *

### Q: **VPN Site-to-SiteはFortigate、Pfsense、Checkpointなどと互換性がありますか？**
はい。**Fortigate**、**Pfsense**、**Checkpoint** などの一般的な機器をサポートしています。
設定ドキュメント：
  * Fortigateの場合: [こちら](../vpn-site-to-site/index.md)
  * Pfsenseの場合: [こちら](../vpn-site-to-site/index.md)
  * Checkpointの場合: [こちら](../vpn-site-to-site/index.md)

## 運用とテスト

### Q: **使用しないときにVPN接続を一時停止し、必要なときに再開できますか？**
はい。接続ステータスを _Inactive_ に設定することで一時停止できます。
詳細はこちら: [リンク](https://www.google.com)

* * *

### Q: **VPNのアクティビティログを監視・確認するにはどうすればよいですか？**
**Activity log** サービスにアクセスし、type = "VPN" を選択して確認したい日付を入力してください。詳細はこちら: [こちら](../vpn-site-to-site/index.md)

* * *

## トラブルシューティング

### Q: **VPN接続が失敗した場合、最初に確認すべき項目は？**
  * IPアドレス、PSKキー、IPsec設定
  * ファイアウォールとルーティングの設定
  * 機器のログを確認して原因を特定
  * 自己解決が困難な場合は、テクニカルサポートにお問い合わせください

* * *

### Q: **VPNが接続成功と表示されるが、両側でpingが通らない場合は？**
  * ルーティング設定、Security group、ファイアウォールを再確認してください
  * NATや重複IPが発生していないか確認してください

* * *

### Q: **VPN接続が切断された場合の対処方法は？**
  * IKE/IPSecの情報が一致しているか確認してください
  * インターネット回線の品質を確認してください
  * 情報が一致していて回線も安定している場合は、テクニカルチームにサポートを依頼してください

* * *

### Q: **VPNの速度が遅い場合、改善する方法は？**
  * セキュリティ要件に適合する範囲で、より軽量な暗号化アルゴリズムを使用する
  * 主要な接続拠点の帯域幅をアップグレードする
