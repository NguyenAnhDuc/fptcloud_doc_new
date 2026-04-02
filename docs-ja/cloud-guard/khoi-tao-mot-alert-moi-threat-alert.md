---
id: "khoi-tao-mot-alert-moi-threat-alert"
title: "Threat Alert を作成する"
sidebar_label: "Threat Alert を作成する"
sidebar_position: 9
---

# Threat Alert を作成する

**手順 1:** メニューから **Security** > **Cloud Guard** に移動し、**Threat Alerts** タブを開いて **Create Alert** をクリックします。

[![file](/img/migrated/image-1725532528612-3fb1607b.png)](/img/migrated/image-1725532528612-3fb1607b.png)

ダイアログボックスが表示され、設定手順が案内されます。

**手順 2:** 対応するフィールドに入力してアラートを設定します:

| フィールド | 説明 |
|---|---|
| **Name** | アラート名を入力します |
| **Threat Type** | 監視する攻撃の種類を選択します |
| **Apply to** | アラートを有効にする IP アドレスを選択します |
| **Severity** | 重大度レベルを選択します: Critical、High、Medium、Low |
| **Notify to** | 通知受信者を選択します |

サポートされる脅威タイプ:

1. **High-frequency Being Scanned Detection:** お客様の IP が、22、3389、445 などの危険なポートを通じて外部から異常に高い頻度でスキャンされています。
2. **High-frequency Scanning Detection:** お客様の IP が、危険なポートを通じて外部のインターネットアドレスを異常に高い頻度でスキャンしています。
3. **Malware Infected Detection:** C&C サイトへの接続が検出され、お客様の IP がマルウェアに感染している可能性があります。
4. **Potential DDoS Attack Detection:** 1 分以内に多数のホストが 1 つの宛先 IP にパケットを送信しているため、DDoS 攻撃を受けている可能性があります。

:::note
アラートに設定できる IP は、Floating IP 画面のリストにある IP に限られます。
:::

**手順 3:** **Create** をクリックしてアラートを作成します。システムが設定を検証し、作成プロセスを開始します。

作成後、新しいアラートが管理テーブルに表示されます。

[![file](/img/migrated/image-1725532593169-92edeb64.png)](/img/migrated/image-1725532593169-92edeb64.png)
