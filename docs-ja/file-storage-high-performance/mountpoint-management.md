---
id: "mountpoint-management"
title: "Mount Pointの管理"
description: "FPT File Storage – High PerformanceシステムにおけるMount Pointの管理。Mount Pointはストレージプール内の特定ディレクトリへのアクセスポイントです。"
sidebar_label: "Mount Pointの管理"
sidebar_position: "4"
draft: true
---

# Mount Pointの管理

## **1. Mount Point概要**

### **Mount Pointとは？**

FPT File Storage – High Performanceシステムにおいて、Mount Pointはストレージプール内の特定ディレクトリ（パス）にユーザーが接続するための論理的なアクセスポイントです。
Bare Metalサーバーからデータをマウントするには、以下の設定情報を含むMount Pointを作成する必要があります。
  * **Path** : アクセスしたいストレージシステム内の特定ディレクトリパス。
  * **アクセスプロトコル** : NFSv3またはNFSv4など。
  * **アクセスSubnet** : 指定されたサブネット内のサーバーのみマウントが許可されます。サーバーがこのサブネットリストにない場合、マウントリクエストは拒否されます。

### **Mount Pointの役割**

| コンポーネント | 役割 |
| --- | --- |
| Mount Point | NFSv3/NFSv4/S3経由で内部ネットワークからファイルストレージへのアクセスポイント。 |
| クライアント（サーバー） | ファイルストレージからデータをマウントし、ローカルディスクとして表示。 |
| Storage Backend (VAST) | 基盤となるストレージインフラ。 |
| QoS Policy | IOPS、スループット等を制限するためにMount Pointに紐付けられる。 |

### **Mount Pointの構造**

| **フィールド** | **説明** |
| --- | --- |
| Name | ポータルでの表示名 |
| Path | 実際のパス（例：/ml-data） |
| Protocol | プロトコル：NFSv3またはNFSv4 |
| Subnet | アクセスを許可するCIDRネットワーク範囲 |
| Endpoint Range | 接続エンドポイント |
| QoS Policy | パフォーマンス制御ポリシー |
| NFS Alias | OSに表示されるエイリアスパス |

**他のコンポーネントとの関係**
  * **VPC & Subnet**: Mount Pointは同一または異なるVPC内の複数のサブネットに割り当てることができます。割り当てられたサブネット内のサーバーのみがアクセス可能です。
  * **QoS Policy** : 以下を通じてパフォーマンスを制御します：
    * Max Throughput (MB/s)
    * Max IOPS
    * Burst Limit
  * **NFS Protocol** : TCPとRDMAをサポートします。特に：
    * **TCP** : 一般的で使いやすい。
    * **RDMA** : 高パフォーマンス、低レイテンシ。
    * **Multi-Path RDMA** : 大規模ワークロード向け、並列接続。

---

## **2. Mount Pointの作成**

### **重要な原則**

  * **特定のサブネットにバインド** : 割り当てられたサブネット内のサーバーのみマウント可能。
  * **ルートパス（"/"）に作成しない** : `/project-a`、`/team1/data`などのサブディレクトリを使用。
  * **1パス – 1 Mount Point** : 重複は不可。
  * **Mount Point数に制限なし** : パスが重複しない限り。
  * **NFSv4はフルパスエクスポートが必要** : パス内のすべての親ディレクトリもエクスポートが必要。

> 例：NFSv4で `/project-a/team1/data` をマウントする場合、`/project-a` と `/project-a/team1` もエクスポートする必要があります。

### **Unify PortalでのMount Point作成手順**

  1. **MountPoint** タブに移動し、**Create MountPoint** をクリック。
  2. 情報を入力：
     * **Region** : 使用リージョンを選択。
     * **VPC / Subnet** : GPUサーバーを含むサブネットを選択。
     * **Mount Point名** : 3〜63文字、英数字/"_"、特殊文字で開始/終了不可。
     * **Protocol** : NFSv3またはNFSv4。
       * NFSv3の場合：NFS Aliasを追加可能。
       * NFSv4の場合：**パス内のすべての親フォルダもNFSv4を使用**していることを確認。
     * **Path** : "/"で始まり、"/"またはスペースで終わらず、他のパスと重複しないこと。
     * **オプション** : パスが存在しない場合は「新しいディレクトリを作成」をチェック。
     * **QoS Policy** : 既存のものを選択するか、新規作成。
  3. **Create** をクリックして完了。

### **結果**

  * **成功** : Mount Pointがポータルに表示され、サブネット内のサーバーからマウント可能。
  * **失敗** : エラーが表示されます – 入力情報を確認してください。

---

## **3. Mount Pointの削除**

以下の目的で不要になったMount Pointを削除できます：
  * アクセス権の取り消し。
  * サーバーとストレージシステム間の安全な切断。
  * 再設定またはネットワークインフラの変更への対応。

### **手順**

  1. Unify Portalで **Resource** タブに移動。
  2. 削除するMount Pointを見つけ、**Action > Delete** を選択。
  3. 確認プロンプトが表示されたら操作を確認。

> ⚠️ 注意：
>   * 削除前にすべてのアプリケーションがアンマウントしていることを確認。
>   * **Mount Pointの削除は、割り当てられたディレクトリのデータを削除しません**。
