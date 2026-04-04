---
id: "tutorials-quan-ly-subuser"
title: "SubUser の管理"
description: "FPT Object Storage では、アクセスが制限された SubUser を作成してセキュリティを強化し、データへのアクセスをより効果的に管理できます。"
sidebar_label: "SubUser の管理"
sidebar_position: "10"
---

# FPT Object Storage の SubUser 管理

**SubUser** は FPT Object Storage 内でアクセスが制限された状態で作成されるサブユーザーです。セキュリティを強化し、データへのアクセスをより効果的に管理するために役立ちます。
管理者は用途に応じて、異なるアクセスレベルの **role** を SubUser に割り当てることができます。

### サポートされている role:

- **None**: アクセス権なし。
- **Read**: bucket 内のデータの読み取りのみ可能。
- **Write**: bucket へのデータ書き込みのみ可能。
- **Read - Write**: データの読み取りと書き込みが可能。
- **Full**: bucket 設定操作を含むすべての権限。

SubUser を使用することで権限を明確に分離でき、複数のユーザーやアプリケーションとアクセス権を共有する際のリスクを軽減できます。

---

## SubUser の作成

**ステップ 1:** **Object Storage Management** メニューで **SubUser** タブを選択し、**Region** を選択します。

**ステップ 2:** **Create SubUser** をクリックします。

**ステップ 3:** 必要な情報を入力します。
- **Name**: わかりやすい表示名。
- **Access level**: 適切な role を選択します。

**ステップ 4:** **Create** をクリックして SubUser の作成を完了します。

---

## SubUser の role の編集

**ステップ 1:** SubUser 一覧で、編集する SubUser の **Detail** を選択します。

**ステップ 2:** **Access level** フィールドで新しい role を選択します。

**ステップ 3:** **Save** をクリックして更新します。

---

## SubUser Access Key の管理

各 SubUser は、SDK、API、S3 Client 経由で bucket にアクセスする際の認証に使用する **Access Key を最大 2 組**持つことができます。

### A. SubUser Access Key の作成

**ステップ 1:** 鍵を作成する SubUser の **Detail** を開きます。

**ステップ 2:** **Generate Key** をクリックします。

**ステップ 3:** システムが **Access Key** と **Secret Key** のペアを生成します。

**ステップ 4:** すぐに安全な場所に鍵の情報を保管し、**Confirm access key** をクリックして確認します。

:::warning
Secret Key は一度しか表示されません。
:::

### B. SubUser Access Key の削除

**ステップ 1:** 削除する鍵が含まれる SubUser の **Detail** を開きます。

**ステップ 2:** Access Key の **Action** セクションで **Delete** を選択します。

**ステップ 3:** 要求に応じて操作を確認し、鍵の削除を完了します。

:::warning
削除後、この鍵を使用しているすべてのクライアントはアクセス権を失います。
:::

---

## SubUser の削除

**ステップ 1:** SubUser 一覧で、削除する SubUser の横にある **Delete** を選択します。

**ステップ 2:** 警告ダイアログが表示されたら操作を確認します。
