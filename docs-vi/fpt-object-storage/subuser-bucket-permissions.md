---
id: "subuser-bucket-permissions"
title: "subuser への bucket 使用権限の付与"
description: "Bucket Policy を使用して各 subuser に特定の bucket へのアクセス権を付与する手順です。"
sidebar_label: "subuser への bucket 権限付与"
sidebar_position: "19"
---

# subuser への bucket 使用権限の付与

## 概要

現在 FPT Object Storage では subuser を作成できますが、subuser のロールは管理者のすべてのリソースに対して有効になります。例えば Read only ロールの subuser を作成すると、その subuser は管理者のすべての bucket に対して Read 権限を持ちます。

各 bucket に対して権限を付与するには、Bucket Policy を使用する必要があります。

Bucket-1、Bucket-2、Bucket-3 の 3 つの bucket を SubUser-1、SubUser-2、SubUser-3 の 3 人の subuser に付与する場合、以下が **FPT Unify Portal** での詳細な設定ガイドです。

## 前提条件

- FPT Cloud アカウントを持ち、Object Storage サービスが有効化されていること。
- 同じリージョンで bucket が正常に作成されていること。

## 手順の概要

1. **subuser を None 権限で作成**して、subuser が他の bucket にアクセスできないようにします。

2. **特定の bucket への subuser のアクセスを開放します。** 各 bucket で以下のテンプレートに従って Bucket Policy を設定します。

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": ["arn:aws:iam::SUBUSER_ACCOUNT_ID:user/SUBUSER_NAME"]
      },
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME",
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    }
  ]
}
```

- **Version:** policy のバージョン（通常は "2012-10-17"）。
- **Effect:** 権限（"Allow" または "Deny"）。
- **Principal:** 特定のユーザーまたはロール。SUBUSER_ACCOUNT_ID と SUBUSER_NAME を権限を付与する subuser の情報に置き換えてください。
- **Action:** subuser が bucket に対して実行できるアクション（ここでは "s3:*" ですべてのアクション）。
- **Resource:** policy が適用されるリソース（ここでは bucket とその bucket 内のすべての object）。

3. **SubUser Key を作成**してエンドユーザーに提供します。

## まとめ

以上の手順により、bucket policy を使用して FPT Object Storage 内で異なる bucket を使用する subuser の権限付与を行いました。
