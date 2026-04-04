---
id: "phan-quyen-su-dung-bucket-cho-cac-subuser"
title: "SubUser への bucket 使用権限の付与"
description: "Bucket Policy を使用して SubUser ごとに異なる bucket へのアクセス権を付与する方法。"
sidebar_label: "SubUser への bucket 権限付与"
sidebar_position: "19"
---

# SubUser への bucket 使用権限の付与

## はじめに

FPT Object Storage では SubUser の作成がサポートされていますが、SubUser の role は Admin のすべてのリソースに対して有効になります。たとえば、Read only の role を持つ SubUser を作成した場合、その SubUser は Admin のすべての bucket に対して読み取り権限を持ちます。

bucket ごとに権限を設定するには、**Bucket Policy** を使用する必要があります。

例として、Bucket-1、Bucket-2、Bucket-3 の 3 つの bucket があり、SubUser-1、SubUser-2、SubUser-3 の 3 人の SubUser に対してそれぞれ権限を付与するとします。以下は **FPT Unify Portal** での詳細な設定手順です。

## 前提条件

- FPT Cloud アカウントを持ち、Object Storage サービスが有効化されていること。
- 同一 Region 内に bucket が正常に作成されていること。

## 手順の概要

**ステップ 1:** SubUser が他の bucket にアクセスできないよう、**None** 権限で SubUser を作成します。

**ステップ 2:** 特定の bucket への SubUser のアクセスを許可します。各 bucket で、以下のテンプレートに従って Bucket Policy を設定します。

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

- **Version**: policy のバージョン（通常は "2012-10-17"）。
- **Effect**: 権限の種類（"Allow" または "Deny"）。
- **Principal**: 特定のユーザーまたは role。`SUBUSER_ACCOUNT_ID` と `SUBUSER_NAME` を権限を付与する SubUser の情報に置き換えてください。
- **Action**: SubUser が bucket に対して実行できるアクション（ここでは "s3:*" ですべてのアクションを許可）。
- **Resource**: policy が適用されるリソース（ここでは bucket とその中のすべての object）。

**ステップ 3:** SubUser Key を作成し、エンドユーザーに提供します。

## まとめ

以上の手順により、FPT Object Storage で bucket policy を使用して SubUser ごとに異なる bucket へのアクセス権を付与できます。
