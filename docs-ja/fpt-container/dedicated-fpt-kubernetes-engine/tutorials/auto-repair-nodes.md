---
id: "auto-repair-nodes"
title: "Auto Repair Nodes"
description: "D-FKE の node 自動修復機能の概要と設定方法。"
sidebar_label: "Auto Repair Nodes"
sidebar_position: 11
---

# Auto Repair Nodes

## A. 概要

この記事では、FPT Cloud の D-FKE 製品における node auto-repair 機能の仕組みを説明します。

Node auto-repair は cluster 内の node を Ready・Running 状態に保つ機能です。この機能が有効な場合、node に関連するイベントが継続的に監視されます。node が NotReady 状態になった場合、node auto-repair がその node を監視し、3 分後も同じ状態が続いていれば、node を Ready 状態に戻すために必要なアクションを実行します。

## B. インストール

1. 機能リリース後に**新規作成された cluster** の場合: 自動的に機能が有効になります。
2. **既存の cluster** の場合: 以下のコマンドを実行します。

```
kubectl apply -f https://raw.githubusercontent.com/fci-xplat/fke-config/main/node-autorepair
```

## C. 設定

namespace `kube-system` 内の configmap `auto-repair-configmap` には、以下の 2 つのフィールドを編集できます。

```
enable_rebooting_node（デフォルト: "true"）
```

```
enable_replacing_node（デフォルト: "true"）
```

- **enable_rebooting_node**: node auto-repair が障害のある node を再起動する権限を付与します。
- **enable_replacing_node**: node auto-repair が障害のある node を削除する権限を付与します。

cluster 内の node を安定した状態に保ちたい場合は、`enable_replacing_node` を `"false"` に設定してください。

## D. 基本的な動作フローの説明

1. 3 分以上 NotReady 状態の node は再起動されます。
2. node は最大 3 回再起動されます。
3. 再起動しても node が Ready にならない場合、その node 上のすべての Pod が drain されます。
4. cluster に古い node 上の Pod を実行するリソースが不足している場合、cluster に node が追加されます（cluster-autoscaler の動作）。
5. drain された node は 15 分後に自動的に削除されます（cluster-autoscaler の動作）。
6. Cluster Autoscaler が動作していない場合、60 分後に node auto-repair が障害のある node を削除します。

## E. 注意事項

- D-FKE のバックエンドシステムは cluster 内の node を追加・変更・削除する場合があります（firewall が設定された cluster でよく発生します）。
- cluster 内から、node が稼働するインフラにログインすることができます。
