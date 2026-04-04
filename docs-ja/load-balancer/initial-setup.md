---
id: "initial-setup"
title: "初期セットアップ"
description: "FPT Cloud ロードバランサーサービスを使用する前に完了すべき前提条件。"
sidebar_label: "初期セットアップ"
sidebar_position: "2"
---

# 初期セットアップ

FPT Cloud ロードバランサーサービスを使用する前に、以下の手順を完了してください。

- FPT Cloud アカウントを作成し、FPT Portal にログインします。
- FPT Cloud に仮想サーバーを作成します。
- 仮想サーバーに Security Group をアタッチします。

## アカウントの作成と FPT Portal へのログイン

1. <https://console.fptcloud.com> にアクセスし、FPT Cloud アカウントの認証情報でログインします。
2. サービスに適した Tenant、Region、VPC を選択します。

:::note
FPT Cloud アカウントをお持ちでない場合は、<https://fptcloud.com/> にアクセスして **Sign Up** をクリックし、手順に従ってください。サポートチームがアカウントの詳細を確認するためにご連絡します。
:::

## 仮想サーバーの作成

FPT Load Balancer は FPT Cloud 上の仮想サーバーの負荷分散をサポートしています。Cloud Server のドキュメントに従って仮想サーバーを作成・管理してください。

## 仮想サーバーへの Security Group のアタッチ

Security Group は仮想マシンレベルでのネットワークファイアウォールとして機能し、インバウンドおよびアウトバウンドのトラフィックを制御します。デフォルトでは、FPT Cloud 仮想マシンはすべてのアウトバウンドトラフィックを許可し、すべてのインバウンドトラフィックをブロックします。

Load Balancer は特定のポートを開放する必要があります。HTTP/HTTPS などのサービスポートに加えて、ヘルスチェックに使用するポートも開放する必要があります。

例：仮想マシン A と B でポート 80 で動作する Web サーバーのトラフィックを分散する Load Balancer LB1 を作成する場合：

1. 新しい Security Group を作成します。
2. ポート 80 のインバウンドルールを追加します。
3. 仮想マシン A と仮想マシン B に Security Group をアタッチします。
4. LB1 が外部 Load Balancer（Public IP が割り当てられている）の場合は、LB1 にも Security Group をアタッチします。
