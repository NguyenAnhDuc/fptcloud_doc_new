---
id: "redirect-http-request-sang-https"
title: "HTTPからHTTPSへのリダイレクト設定"
sidebar_label: "HTTPからHTTPSへのリダイレクト設定"
sidebar_position: 15
---

HTTPリクエストのHTTPSへのリダイレクト設定


データの保護と整合性を確保するため、ユーザーはすべての**HTTPトラフィックをHTTPS**にリダイレクトするよう設定できます。以下の手順に従って操作してください。

**ステップ1：** **HTTP、ポート80**プロトコルを使用する新しい**Listener**を作成し、この**Listener**の**L7ポリシー**設定画面で**Redirect HTTP to HTTPS**機能を有効にします。**Listener**の作成方法については**[こちら](<https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener> "こちら")**をご参照ください。

> **注意：** 新しく作成した**HTTP、ポート80 Listener**には、すべての**HTTPリクエスト**を**HTTPS**にリダイレクトするため、対応するServer poolを割り当てる必要はありません。

**ステップ2：** HTTPSリクエストを処理するために、**HTTPS、ポート443**を使用する新しい**Listener**を作成します。対応する**Server pool**と**SSL Certificate**をListenerに割り当ててください。**Listener**の作成方法については**[こちら](<https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener> "こちら")**をご参照ください。**SSL Certificate**をお持ちでない場合は、作成方法について**[こちら](<https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer> "こちら")**をご参照ください。

**HTTP**アクセスが自動的に**HTTPS**にリダイレクトされることを確認します。
