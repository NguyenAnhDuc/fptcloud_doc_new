---
id: "tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal"
title: "FPT Portal での Object Storage Access Key の管理"
description: "Access Key と Secret Key は FPT Object Storage の基本的な認証方式です。SDK、API、S3 Client などのポータル以外の方法で bucket を使用するために必要な情報を管理する手順です。"
sidebar_label: "Access Key の管理"
sidebar_position: "9"
---

# FPT Portal での Object Storage Access Key の管理

Access Key と Secret Key は FPT Object Storage サービスの基本的な認証方式です。SDK、API、S3 Client などのポータル以外の方法で bucket を使用するには、以下の情報が必要です。

- Access Key
- Secret Key
- Endpoint
- Region（任意）

これらの情報はすべて FPT Unify Portal で確認できます。

:::warning
この情報は安全な場所に大切に保管してください。**Access Key** タブで作成した Access Key はすべて Admin 権限を持つ鍵です。情報が漏洩した場合、bucket 内のすべてのデータが失われる可能性があります。複数のユーザーと bucket へのアクセス権を共有する必要がある場合や、安全でないアプリケーションに鍵を保存する場合は、アクセスが制限された SubUser を作成し、SubUser Access Key を使用してください。鍵が漏洩したことに気付いた場合は、すぐに FPT Portal にアクセスして該当の鍵を削除し、さらなるリスクの発生を防いでください。
:::

## Admin Access Key の作成

現在、1 つのアカウントにつき 1 リージョンあたり最大 5 組の Admin Access Key を作成できます。5 組以上必要な場合は、SubUser を追加作成してください。

:::warning
セキュリティ上の理由から、Secret Key は作成時に一度だけ表示されます。bucket へのアクセス権を失わないよう、安全な場所に大切に保管してください。
:::

1. **Object Storage** メニュー → **Access Key** タブ → **Region** を選択します。
2. **Generate Key** ボタンをクリックします。
3. システムが **Access Key** と **Secret Key** のペアを生成します。
4. 安全な場所に鍵をコピーして保管し、**Confirm Access Key** をクリックして完了します。

---

## Access Key の削除

削除後、その鍵を使用しているすべてのアプリケーションまたはクライアントはアクセスできなくなります。

1. **Object Storage** メニュー → **Access Key** タブ → **Region** を選択します。
2. 削除する Access Key を見つけ、操作列の **Delete** を選択します。
3. ダイアログが表示されたら削除を確認します。

---

## Endpoint 情報の取得

**Endpoint** は FPT Object Storage への接続に使用する HTTPS アドレスです。**region** ごとに異なる endpoint があります。

1. **Object Storage** メニュー → **Access Key** タブ → **Region** を選択します。
2. **Endpoint** 列で、対応する **URL をコピー**できます。
