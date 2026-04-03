---
id: "manage-subusers"
title: "subuser の管理"
description: "FPT Object Storage での subuser の作成・編集・削除および access key 管理の手順です。"
sidebar_label: "subuser の管理"
sidebar_position: "10"
---

# subuser の管理

**subuser** は FPT Object Storage 内で作成されるサブユーザーで、アクセスが制限されており、セキュリティの強化とデータアクセスの制御を改善します。

使用ニーズに応じて、管理者は subuser にさまざまなレベルのアクセスを持つ **role** を割り当てられます。

### サポートされているロール

- **None:** アクセス権なし。
- **Read:** bucket 内のデータの読み取りのみ可能。
- **Write:** bucket へのデータ書き込みのみ可能。
- **Read - Write:** データの読み取りと書き込みが可能。
- **Full:** bucket の設定操作を含む全権限。

subuser の使用により、明確な権限分離が可能になり、複数のユーザーやアプリケーションとアクセスを共有する際のリスクを軽減できます。

---

## 新しい subuser の作成

1. **Object Storage Management** メニューにアクセスし、**SubUser** タブを選択して **Region** を選択します。
2. **Create SubUser** をクリックします。
3. 必要な情報を入力します。
   - **Name:** 識別しやすい表示名。
   - **Access level:** 適切なロールを選択します。
4. **Create** をクリックして subuser の作成を完了します。

---

## SubUser のロールの編集

1. subuser の一覧で、編集する subuser の **Detail** を選択します。
2. **Access level** フィールドで新しい適切なロールを選択します。
3. **Save** をクリックして更新します。

---

## SubUser Access Key の管理

各 subuser は SDK、API、S3 Client を通じた bucket へのアクセス認証に使用できる最大 **2 ペアの access key** を持てます。

### A. SubUser Access Key の作成

1. キーを作成する subuser の **Detail** に移動します。
2. **Generate Key** をクリックします。
3. システムが **access key** と **Secret Key** のペアを生成します。
4. キー情報を安全な場所に**すぐに保存**し、**Confirm access key** をクリックして確認します。

:::note
Secret Key は 1 度だけ表示されます。
:::

### B. SubUser Access Key の削除

1. 削除するキーを含む subuser の **Detail** に移動します。
2. access key の **Action** で **Delete** を選択します。
3. 求められたら操作を確認して削除を完了します。

:::warning
削除後、このキーを使用しているすべてのクライアントはアクセスできなくなります。
:::

---

## subuser の削除

1. subuser の一覧で、削除する subuser の横にある **Delete** を選択します。
2. 警告ダイアログが表示されたら操作を確認します。
