---
id: "Initial-Setup"
title: "初期設定"
description: "FPT Kubernetes Engine サービスを使用する前の初期設定手順。"
sidebar_label: "初期設定"
sidebar_position: "2"
---

# 初期設定

FPT Kubernetes Engine を初めてご利用になる場合は、以下の手順を確認・完了してから開始してください。

## FPT Cloud アカウントの作成と FPT Portal へのログイン

1. https://fptcloud.com/ にアクセスし、**Sign Up** を選択します。
2. システムの指示に従って必要な情報を入力します。
3. サポートチームに連絡して情報を確認し、アカウントを有効化します。
4. 付与されたアカウントとパスワードで FPT Portal にログインします。
5. 正しい Tenant、Region、VPC を選択します。

:::note
上記情報について不明な点がある場合、または 3 回の試行後にエラーが発生した場合は、サポートチームにお問い合わせください。
:::

## Static Pool を持つ subnet の作成

Kubernetes cluster は Static Pool オプションが有効になっている subnet でのみ動作します。次の手順に従って subnet を作成してください。

1. **Networking** セクションで **Subnets** タブを選択します。
[![Userguide K8s 1](/img/migrated/Userguide-K8s-1-1024x520-cf033d8c.png)](/img/migrated/Userguide-K8s-1-1024x520-cf033d8c.png)
2. **Subnets Management** ページで **Create** を選択します。
[![Userguide K8s 2](/img/migrated/Userguide-K8s-2-1024x202-6de849e4.png)](/img/migrated/Userguide-K8s-2-1024x202-6de849e4.png)
3. 以下の情報を入力します。
   - **Name:** subnet の分かりやすい名前を入力します。
   - **CIDR:** 有効な CIDR を入力します。
   - **Advanced settings** をチェックします。
   - **Static IP Pool:** CIDR から取得した有効な IP レンジを入力します。
4. **Save** を選択して新しい subnet を作成します。
[![Userguide K8s 3](/img/migrated/Userguide-K8s-3-c5aca27b.png)](/img/migrated/Userguide-K8s-3-c5aca27b.png)

## FKE サービスの有効化とリソースクォータの申請

FPT Cloud を初めてご利用の場合、一部のサービスがアカウントで有効になっていない場合があります。サポートチームに連絡し、希望する構成情報を提供してください。FPT Cloud は FKE サービスの利用に必要な RAM、CPU、Storage、Public IP などのリソースを割り当てます。
