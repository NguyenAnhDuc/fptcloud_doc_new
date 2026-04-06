---
id: "faq"
title: "Faq"
sidebar_label: "Faq"
sidebar_position: 39
---

よくある質問（FAQ）


## I. 初期設定

### Q: **企業がVPNを使用する理由は何ですか？**

VPNは、リモートユーザーをオフィスネットワークに接続するためのコスト効率が高く、高速で安全な方法です。VPN接続は通常、パブリックインターネット上で確立されるため、ダイレクト接続と比較してコストが低く、安全な接続を確保できます。


### Q: **VPN Site-to-Site接続が成功したかどうかを確認するにはどうすればよいですか？**

管理インターフェースで以下の列を確認してください。

  * **Operation Status**: _Online_ であること
  * **Provisioning Status**: _Active_ であること


_注意：_ このステータスは**Phase 1**の接続のみを反映しています。
**Phase 2**を確認するには、VPN接続で設定されたSubnet範囲内のマシン間でpingを実行してください。


### Q: **IKEとIPSecポリシーのパラメーターは接続の両端で一致している必要がありますか？**

はい。接続を正常に確立するために、**Phase 1（IKE）**と**Phase 2（IPSec）**の設定パラメーターは両側で同一である必要があります。

設定ガイドを参照してください。

  * IKE（Phase 1）の場合：[こちら](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=create-ike-policy>)
  * IPSec（Phase 2）の場合：[こちら](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=create-ipsec-policy>)
  * DPD（VPN接続）の場合：[こちら](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=create-vpn-connection>)


### Q: **VPN Site-to-SiteはFortigate、Pfsense、Checkpointなどと互換性がありますか？**

はい。このサービスは**Fortigate**、**Pfsense**、**Checkpoint**などの一般的なデバイスをサポートしています。
設定ドキュメントは以下を参照してください。

  * Fortigateの場合：[こちら](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-fortigate>)
  * Pfsenseの場合：[こちら](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-pfsense>)
  * Checkpointの場合：[こちら](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-checkpoint-r8120>)


## II. 運用と確認

### Q: **使用しないときにVPN接続を一時停止し、必要なときに再度有効にすることはできますか？**

はい。接続ステータスを_Inactive_に設定することで一時停止できます。

ドキュメントガイド：[リンク](<https://www.google.com>)


### Q: **VPNアクティビティのログを監視・確認するにはどうすればよいですか？**

**Activity log**サービスにアクセスし、type = "VPN"を選択して確認したい日付を入力する必要があります。ドキュメントガイド：[こちら](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=VPN-S2S-check-activity-logs>)


## III. トラブルシューティング

### Q: **VPN接続に失敗しました。最初に何を確認すればよいですか？**

  * IPアドレス、PSKキー、IPsec設定
  * ファイアウォールとルーティングの設定
  * デバイスのログを確認して原因を特定する
  * 自分で解決できない場合は、技術サポートチームにお問い合わせください。


### Q: **VPNが接続成功と表示されても、両側でpingができません。**

  * ルーティング設定、セキュリティグループ、ファイアウォール設定を再確認してください。
  * NATまたはIPの競合がないか確認してください。


### Q: **VPN接続が切断されました。どのように対処すればよいですか？**

  * IKE/IPSec情報が両側で一致していることを確認してください。
  * インターネット接続の品質を確認してください。
  * 情報が一致していて接続が安定している場合は、技術サポートチームに詳細な調査を依頼してください。


### Q: **VPNの速度が遅いです。改善するにはどうすればよいですか？**

  * より軽い暗号化アルゴリズムを使用します（セキュリティ要件に適合する場合）。
  * 主要な接続ポイントで帯域幅をアップグレードします。
