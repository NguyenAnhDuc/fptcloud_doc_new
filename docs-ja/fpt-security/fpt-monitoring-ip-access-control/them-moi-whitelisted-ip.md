---
id: "them-moi-whitelisted-ip"
title: "ホワイトリストIPの追加"
sidebar_label: "ホワイトリストIPの追加"
sidebar_position: 8
---

# ホワイトリスト IP を追加する

1. 対応するテーブルの **Whitelist IP/Range** ボタンをクリックします。
2. Enter で区切って 1 つ以上の IP または CIDR 範囲を入力します。
3. システムが IP フォーマットを検証し、すでにホワイトリストに登録済みまたは重複するエントリを除外します。

[![ホワイトリスト IP の追加 1](/img/migrated/Screenshot_4-6b6299ec.png)](/img/migrated/Screenshot_4-6b6299ec.png)

4. **Save** をクリックして確定します。

[![ホワイトリスト IP の追加 2](/img/migrated/Screenshot_5-e4ea3b18.png)](/img/migrated/Screenshot_5-e4ea3b18.png)

送信されたすべての IP のステータスは **Whitelisting** になり、処理が完了するまで対応するテーブルのすべてのアクションが一時的に無効になります。

- ホワイトリスト登録が**成功**した場合、ステータスは **Whitelisted** に変わります。それらの IP からのエンドポイントへのアクセスが正常に許可されます。
- ホワイトリスト登録が**失敗**した場合、ステータスは **Whitelist Failed** に変わります。それらの IP からのアクセスは引き続きブロックされます。Retry アクションを使用して再試行してください。
