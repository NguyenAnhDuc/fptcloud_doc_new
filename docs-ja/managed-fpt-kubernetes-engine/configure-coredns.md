---
id: "dieu-chinh-cau-hinh-coredns-trong-kubernetes-service"
title: "Kubernetes Service での CoreDNS 設定の調整"
description: "FPT Managed Kubernetes Engine（M-FKE）で CoreDNS の設定を調整する方法を説明します。"
sidebar_label: "CoreDNS 設定の調整"
sidebar_position: 44
---

# Kubernetes Service での CoreDNS 設定の調整

FPT Managed Kubernetes Engine（M-FKE）は CoreDNS を使用してクラスターのドメイン管理と解決を行っています。CoreDNS コンポーネントは FPT によって管理されているため、ユーザーは CoreDNS の Corefile を直接変更することはできません。このガイドでは、M-FKE でユーザーが ConfigMap を使用して CoreDNS の設定を調整する方法を説明します。

## DNS の書き換え（Rewrite DNS）

M-FKE で CoreDNS を使用して DNS の上書きを行うには、`kube-system` namespace の `coredns-custom` ConfigMap を以下のように設定します。

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  test.server: |
    .com:8053 {
    log
    errors
    rewrite stop {
      name regex (.*)\..com {1}.default.svc.cluster.local
      answer name (.*)\.default\.svc\.cluster\.local {1}..com
    }
    forward . /etc/resolv.conf # 特定の DNS サーバー（例: 10.0.0.10）にリダイレクトできますが、そのサーバーは書き換えられたドメイン名を解決できる必要があります
    }
```

その後、`kube-system` namespace の 2 つの CoreDNS pod を削除して、CoreDNS の ConfigMap 設定を再読み込みします。

## カスタム転送サーバー（Custom forward server）

クラスター内のドメイン解決に特定の DNS サーバーを指定する必要がある場合は、以下のように設定します。

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  test.server: | # ここは任意の名前を選択できますが、.server 拡張子で終わる必要があります
    .com:8053 {
        forward foo.com 1.1.1.1
        forward . 2.2.2.2
    }
```

ここで、1.1.1.1 と 2.2.2.2 はユーザーが定義した DNS サーバーです。`forward . 2.2.2.2` は CoreDNS が `*.com` ドメインの解決リクエストを DNS サーバー 2.2.2.2 に送信することを意味します。

その後、`kube-system` namespace の 2 つの CoreDNS pod を削除して、CoreDNS の ConfigMap 設定を再読み込みします。

## カスタムドメイン（Custom domains）

クラスター内部でのみ解決できるカスタムドメインを設定したい場合（例: `puglife.local` のような有効でないドメインの解決）、`coredns-custom` ConfigMap を設定しないと M-FKE クラスターはそのドメインを解決できません。以下のように設定します。

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  puglife.server: | # ここは任意の名前を選択できますが、.server 拡張子で終わる必要があります
    puglife.local:8053 {
        errors
        cache 30
        forward . 192.11.0.1  # テスト/開発用の DNS サーバー
    }
```

その後、`kube-system` namespace の 2 つの CoreDNS pod を削除して、CoreDNS の ConfigMap 設定を再読み込みします。

## スタブドメイン（Stub domain）

CoreDNS を使用してスタブドメインを設定できます。カスタムドメインと IP アドレスをユーザーのインフラストラクチャ環境の正しい値に更新してください。

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  test.server: | # ここは任意の名前を選択できますが、.server 拡張子で終わる必要があります
    abc.com:8053 {
     errors
     cache 30
     forward . 1.2.3.4
    }
    my.cluster.local:8053 {
        errors
        cache 30
        forward . 2.3.4.5
    }
```

その後、`kube-system` namespace の 2 つの CoreDNS pod を削除して、CoreDNS の ConfigMap 設定を再読み込みします。

## Hosts プラグイン（Hosts plugin）

CoreDNS を使用して追加の DNS レコードを宣言するには、以下のように設定します。

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom # これは変更でオーバーライドできる ConfigMap の名前です
  namespace: kube-system
data:
    test.override: | # ここは任意の名前を選択できますが、.override 拡張子で終わる必要があります
          hosts {
              10.0.0.1 example1.org
              10.0.0.2 example2.org
              10.0.0.3 example3.org
              fallthrough
          }
```

その後、`kube-system` namespace の 2 つの CoreDNS pod を削除して、CoreDNS の ConfigMap 設定を再読み込みします。

## DNS クエリログの有効化（Enable DNS query logging）

CoreDNS でのドメイン解決のデバッグをサポートするために DNS ログを有効にするには、`kube-system` namespace の `coredns-custom` ConfigMap に以下の設定を追加します。

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-custom
  namespace: kube-system
data:
  log.override: | # ここは任意の名前を選択できますが、.override 拡張子で終わる必要があります
        log
```

その後、`kube-system` namespace の 2 つの CoreDNS pod を削除して、CoreDNS の ConfigMap 設定を再読み込みします。
