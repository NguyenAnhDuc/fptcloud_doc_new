---
id: "xoa-whitelisted-ip"
title: "ホワイトリスト IP を削除する"
sidebar_label: "ホワイトリスト IP を削除する"
sidebar_position: 9
---

# ホワイトリスト IP を削除する

1. 1 つ以上のホワイトリスト済み IP を選択し、**Remove** をクリックします。

[![ホワイトリスト IP の削除](/img/migrated/Screenshot_6-57331a11.png)](/img/migrated/Screenshot_6-57331a11.png)

ステータスは **Blacklisting** に変わり、処理が完了するまで対応するテーブルのすべてのアクションが一時的に無効になります。

- ブラックリスト登録が**成功**した場合、IP/CIDR はテーブルから削除され、そのエンドポイントへのアクセスはすべて**ブロック**されます。
- ブラックリスト登録が**失敗**した場合、IP/CIDR のステータスは **Blacklist Failed** に変わります。その IP/CIDR からのアクセスは引き続き正常に行われます。Retry アクションを使用して再試行してください。
