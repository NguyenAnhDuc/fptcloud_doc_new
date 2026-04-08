---
id: "download-access-log"
title: "アクセス履歴一覧のダウンロード"
description: "FPT IAMでORG上のアクセス履歴一覧をダウンロードする方法。"
sidebar_label: "アクセス履歴一覧のダウンロード"
sidebar_position: 6
---

# アクセス履歴一覧のダウンロード

ユーザーは以下の手順でORG上のアクセス履歴一覧をダウンロードできます。

1. **IP access** ページで **Export access log** を選択し、ダウンロードする日付を選択します（最大7日間）。

[![](/img/migrated/Screenshot_18-1024x483-dcc07689.png)](/img/migrated/Screenshot_18-1024x483-dcc07689.png)

2. メールでアクセス履歴ファイルを確認します。システムはログイン中のユーザーのメールアドレスにファイルを送信します。ファイルには以下の情報が含まれます：
   - **User**: URLにアクセスしたユーザーのメールアドレス。
   - **URL**: ユーザーがアクセスしたURL。
   - **IP**: ユーザーがアクセスしたIPアドレス。
   - **Response HTTP Code**: ユーザーがURLにアクセスした際のHTTPレスポンスステータス。
   - **Date & Time**: アクセス日時。
