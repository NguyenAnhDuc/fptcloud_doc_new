---
id: "manage-access-keys"
title: "access key の管理"
description: "FPT Object Storage での Admin access key および SubUser access key の管理手順です。"
sidebar_label: "access key の管理"
sidebar_position: "9"
---

# access key の管理

access key と Secret Key のペアは FPT Object Storage サービスの基本的な認証方式です。SDK、API、S3 Client などのポータル以外の方法で bucket を使用するには、以下の情報が必要です。

- access key
- Secret Key
- endpoint
- Region（オプション）

これらの情報はすべて FPT Unify Portal で提供されます。

この情報は大切に保管してください。Access Key タブで作成された access key はすべて Admin 権限を持つキーです。この情報が漏洩した場合、bucket 内のすべてのデータが失われる可能性があります。複数のユーザーで bucket へのアクセスを共有したり、安全でないアプリケーションにキーを保存したりする必要がある場合は、アクセスが制限された SubUser を作成し、SubUser の access key を使用してください。

キーが漏洩した疑いがある場合は、すぐに FPT Portal にアクセスしてそのキーを削除し、その他のリスクが発生するのを防いでください。

## Admin Access Key の作成

現在、各アカウントは 1 つのリージョンにつき最大 5 ペアの Admin Access Key を作成できます。5 ペア以上のキーが必要な場合は、SubUser を追加作成してください。

セキュリティ上の理由から、Secret Key は作成ステップでのみ 1 度だけ表示されます。bucket へのアクセス権を失わないよう、安全な場所に大切に保管してください。

1. **Object Storage** メニューにアクセスし、**Access Key** タブを選択して **Region** を選択します。
2. **Generate Key** ボタンをクリックします。
3. システムが **access key** と **Secret Key** のペアを生成します。
4. キーを安全な場所に**コピーして保存**し、**Confirm Access Key** をクリックして完了します。

---

## Access Key の削除

削除後、そのキーを使用しているすべてのアプリケーションまたはクライアントはアクセスできなくなります。

1. **Object Storage** メニューにアクセスし、**Access Key** タブを選択して **Region** を選択します。
2. 削除する access key を見つけ、操作列の **Delete** を選択します。
3. ダイアログボックスが表示されたら削除を確認します。

---

## endpoint 情報の取得

**endpoint** は FPT Object Storage への接続に使用する HTTPS アドレスです。各 **region** ごとに異なる endpoint があります。

1. **Object Storage** メニューにアクセスし、**Access Key** タブを選択して **Region** を選択します。
2. **Endpoint** 列で対応する **URL をコピー**できます。
