---
id: "thay-doi-cluster-endponit-access"
title: "クラスターエンドポイントアクセスの変更"
description: "FPT Cloud Kubernetes クラスターのアクセスモードを変更する手順を説明します。"
sidebar_label: "クラスターエンドポイントアクセスの変更"
sidebar_position: 2
---

# クラスターエンドポイントアクセスの変更

**FPT Cloud の Kubernetes クラスターのアクセスモードを変更するには、以下の手順に従ってください。**

**注意:**
- M-FKE は「Public & Private」⇔「Private」のアクセスモードの切り替えのみサポートしています。
- クラスターが「Public」モードの場合、アクセスモードの変更はサポートされていません。

## アクセスモードの変更

**ステップ 1:** アクセスモードを変更したいクラスターを選択し、クラスター名をクリックします。

[![](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)

**ステップ 2:** **Cluster Endpoint Access** セクションで **Edit** ボタンをクリックします。

[![](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)

**ステップ 3:** 希望するアクセスモードを選択し、有効な Allow CIDR を入力して **Confirm** ボタンをクリックします。

[![](/img/migrated/Screenshot-2025-03-20-152635-8d2271bf.png)](/img/migrated/Screenshot-2025-03-20-152635-8d2271bf.png)

## Allow CIDR の更新

**ステップ 1:** アクセスモードを変更したいクラスターを選択し、クラスター名をクリックします。

[![](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)

**ステップ 2:** **Cluster Endpoint Access** セクションで **Edit** ボタンをクリックします。

[![](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)

**ステップ 3:** 追加の有効な CIDR 範囲を入力して **Confirm** ボタンをクリックします。

[![](/img/migrated/Screenshot-2025-03-20-153324-cab3a4aa.png)](/img/migrated/Screenshot-2025-03-20-153324-cab3a4aa.png)

## Allow CIDR の削除

**ステップ 1:** アクセスモードを変更したいクラスターを選択し、クラスター名をクリックします。

[![](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)

**ステップ 2:** **Cluster Endpoint Access** セクションで **Edit** ボタンをクリックします。

[![](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)

**ステップ 3:** すべての既存の CIDR を削除して **Confirm** ボタンをクリックします。

[![](/img/migrated/Screenshot-2025-03-20-153755-e5b8d33b.png)](/img/migrated/Screenshot-2025-03-20-153755-e5b8d33b.png)

[![](/img/migrated/Screenshot-2025-03-20-153912-95e50f54.png)](/img/migrated/Screenshot-2025-03-20-153912-95e50f54.png)

アクセスモードの更新処理は数分以内に完了します。処理中はクラスターのステータスが **Processing** に変わります。新しいアクセスモードへの切り替え中も、クラスターは正常に動作し続けます。
