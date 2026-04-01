---
id: "initial-setup"
title: "初期設定"
description: "FPT Cloud ロードバランサーサービスを使用する前に完了すべき前提条件。"
sidebar_label: "初期設定"
sidebar_position: 2
---

# 初期設定

FPT Cloud Load Balancer サービスを使用する前に、以下の手順を完了します。

- FPT Cloud アカウントを作成し、FPT Portal にログインします。
- FPT Cloud で仮想サーバーを作成します。
- 仮想サーバーに Security Group をアタッチします。

## アカウントを作成して FPT Portal にログインします

1. <https://console.fptcloud.com> にアクセスし、FPT Cloud のアカウント認証情報でログインします。
2. サービスに使用する正しい Tenant、Region、VPC を選択します。

:::note
FPT Cloud アカウントをお持ちでない場合は、<https://fptcloud.com/> にアクセスし、**Sign Up** をクリックして手順に従います。サポートチームがアカウントの詳細を確認するために連絡します。
:::

## 仮想サーバーを作成します

FPT ロードバランサーは FPT Cloud 上の仮想サーバーの負荷分散をサポートします。Cloud Server のドキュメントに従って仮想サーバーを作成・管理します。

## 仮想サーバーに Security Group をアタッチします

Security Group は仮想マシンレベルのネットワークファイアウォールとして機能し、インバウンドおよびアウトバウンドトラフィックを制御します。デフォルトでは、FPT Cloud 仮想マシンはすべてのアウトバウンドトラフィックを許可しますが、すべてのインバウンドトラフィックをブロックします。

ロードバランサーは特定のポートを開く必要があります。HTTP/HTTPS などのサービスポートに加えて、ヘルスチェックに使用するポートも開く必要があります。

例：仮想マシン A と B の port 80 で動作する Web サーバーにトラフィックを分散する Load Balancer LB1 を作成する場合：

1. 新しい Security Group を作成します。
2. port 80 のインバウンドルールを追加します。
3. 作成した Security Group を仮想マシン A と仮想マシン B にアタッチします。
4. LB1 が External Load Balancer（Public IP が割り当てられている）の場合、LB1 にも Security Group をアタッチします。
