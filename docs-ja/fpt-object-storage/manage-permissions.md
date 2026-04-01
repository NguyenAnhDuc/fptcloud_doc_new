---
id: "manage-permissions"
title: "permissions の管理"
description: "FPT Object Storage での bucket ACL、object ACL、bucket policy の設定手順です。"
sidebar_label: "Permissions"
sidebar_position: 6
---

# permissions の管理

## Bucket ACL（Access Control List）

Bucket ACL は bucket のアクセス権を管理する仕組みです。FPT Object Storage は 2 つの基本権限を定義しています。

- **Private:** 認証済みかつ権限を付与されたユーザーのみが bucket にアクセスまたは管理できます。
- **Public:** インターネット上の anonymous user を含むすべてのユーザーが bucket への読み取り専用アクセスを持ちます。

:::note
Bucket ACL は object には効力がありません。bucket 内の object をパブリックにするには、Bucket Policy または Object ACL を使用してください。
:::

Bucket ACL を設定するには:

1. 設定する bucket の **Action** で **Config** を選択します。
2. **Public** または **Private** を選択します。

## Object ACL（Object Permission）

Object Permissions は、ACL の仕組みに基づいて、他のユーザーが object に対して実行できる権限を定義します。2 つの権限グループがあります。

- **Private:** anonymous user のアクセスを制限します。認証済みかつ権限を付与されたユーザーのみが object を閲覧できます。
- **Public:** Object URL を通じて anonymous user を含むすべてのユーザーに読み取り専用（read-only）権限を提供します。

:::warning
Object Permissions は Bucket Policy の影響を受けます。Bucket Policy は Object ACL より優先されます。この 2 つの権限レイヤーを同時に使用する際は注意してください。
:::

Object Permissions を設定するには:

1. **Object Storage Management** で権限を変更するファイルを含む bucket を選択します。
2. ファイルの位置に移動します。**Action** で **Edit Permission** を選択します。
3. **Read permission** で **Public** または **Private** を選択し、**Update** をクリックして保存します。

## Bucket Policy の設定

Bucket Policy は S3 のアクセス権管理機能で、bucket 内の object にアクセスして操作できるユーザーと、実行可能なアクションについての詳細なルールを定義できます。IP アドレス、時間、アクション種別（GET、PUT、DELETE）に基づいてアクセスを許可または拒否するルールを作成できます。

Bucket Policy は AWS 標準の JSON 形式で記述します。AWS のポリシー作成ツールを[こちら](https://awspolicygen.s3.amazonaws.com/policygen.html)からご利用いただけます。

パブリック読み取りを許可する bucket policy の例:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": "arn:aws:s3:::example-bucket/*"
    }
  ]
}
```

:::note
- Bucket Policy は Object ACL より優先されます。
- Bucket policy は宣言された bucket にのみ有効です。bucket をまたいで設定することはできません。
:::

Bucket Policy を設定するには:

1. 設定する bucket の **Action** で **Config** を選択します。
2. 既存の policy があり経験がある場合は **JSON Editor** モードを選択します。初めての場合は **Visual Editor** を使用してください。
3. すべての情報を入力したら、新規作成の場合は **Create**、更新の場合は **Update** をクリックします。
