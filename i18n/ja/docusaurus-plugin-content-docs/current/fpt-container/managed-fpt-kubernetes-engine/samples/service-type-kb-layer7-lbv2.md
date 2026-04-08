---
id: "service-type-kb-layer7-lbv2"
title: "Service Type Loadbalancer Layer 7（LBv2）の使用"
description: "FPT Cloud は、ユーザーが提供する SSL 証明書を使用した Layer 7 Loadbalancer ソリューションを提供します。"
sidebar_label: "Service Type Loadbalancer Layer 7（LBv2）の使用"
sidebar_position: 6
---

# Service Type Loadbalancer Layer 7（LBv2）の使用

FPT Cloud は、ユーザーが自ら提供する SSL 証明書を使用した Layer 7 Loadbalancer ソリューションを提供します。

## 証明書の作成

**ステップ 1:** **Load Balancer タブ**にアクセスし、**Import SSL Certificate** をクリックして新しい証明書を作成します。

[![](/img/migrated/1.-tao-cert-e00d2892.png)](/img/migrated/1.-tao-cert-e00d2892.png)

**ステップ 2:** 必要な情報を入力します（証明書は標準 **PEM** 形式である必要があります）。

[![](/img/migrated/2.-tao-cert-4824eb43.png)](/img/migrated/2.-tao-cert-4824eb43.png)

**ステップ 3:** 証明書が正常に作成されたことを確認します。

[![](/img/migrated/3.-kiem-tra-lai-cert-a241b1e6.png)](/img/migrated/3.-kiem-tra-lai-cert-a241b1e6.png)

## HTTPS メソッドを使用した Loadbalancer Service の作成

Service の初期設定で、上記で作成した SSL 証明書を使用するためのアノテーションを追加します。

```yaml
loadbalancer.fptcloud.com/load-balancer-version: v2

loadbalancer.fptcloud.com/default-tls-secret-ref-name: "name_of_ssl_cert" # cert 名はポータルで作成した名前と一致する必要があります
```

この設定により、Listener のメソッドが **TERMINATED_HTTPS** になります。

**注意:**
- 上記のアノテーションは Load Balancer の作成時に追加する必要があります。
- 現在、Portal での証明書の更新・更改機能は提供されていません。証明書を変更したい場合は、Portal で別の名前で新しく追加し、アノテーションの値を使用したい名前に変更してください（約 20 秒のダウンタイムが発生します）。
