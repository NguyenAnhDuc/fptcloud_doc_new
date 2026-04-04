---
id: "them-moi-tag-retention-rule"
title: "Tag retention rule を追加する"
description: "Repository 内の image を自動管理するための tag 保持ルールを作成する。"
sidebar_label: "Tag retention rule を追加する"
sidebar_position: "14"
---

# Tag retention rule を追加する

Tag retention rule を使用すると、repository 内の tag を自動的に保持または削除する基準を定義でき、手動操作なしでストレージ使用量を管理できます。

1. **FPT Portal** メニューで **Container Registry** > **Policy** タブを選択します。

   [![Container Registry の Policy タブ](/img/migrated/Picture27-62a35e57.png)](/img/migrated/Picture27-62a35e57.png)

2. **ADD RULES** を選択して tag retention rule の情報を入力します。

   [![Tag retention rule 作成フォーム](/img/migrated/Picture28-1-01eeb19b.png)](/img/migrated/Picture28-1-01eeb19b.png)

3. **Repositories** メニューで **matching** または **excluding** を選択します。

   [![Repository の matching/excluding オプション](/img/migrated/Picture29-1-2c469e51.png)](/img/migrated/Picture29-1-2c469e51.png)

4. **Repositories** フィールドにルールを適用する repository の情報を入力します:
   - 単一の repository 名（例: `my_repo_1`）
   - カンマ区切りの repository リスト（例: `my_repo_1, my_repo_2`）
   - ワイルドカードを使用した repository 名

   [![Repository 設定の例](/img/migrated/Screenshot_6-4a6d1e32.png)](/img/migrated/Screenshot_6-4a6d1e32.png)

   すべての repository に適用するには `**` を使用します。**matching** を選択すると指定した repository にルールが適用されます。**excluding** を選択すると指定した repository 以外のすべてに適用されます。

5. **By image count or number of days** メニューで保持する tag の数または保持期間を指定します。

   [![数量または期間の保持オプション](/img/migrated/Picture30-1-78d8e53a.png)](/img/migrated/Picture30-1-78d8e53a.png)

   | オプション | 説明 |
   |---|---|
   | retain the most recently pushed # images | 最近 push された指定数の image を保持 |
   | retain the most recently pulled # images | 最近 pull された指定数の image を保持 |
   | retain the images pushed within the last # days | 指定日数以内に push された image を保持 |
   | retain the images pulled within the last # days | 指定日数以内に pull された image を保持 |
   | retain always | このルールに従って image を常に保持 |

6. **Tag** メニューで **matching** または **excluding** を選択します。

   [![Tag の matching/excluding オプション](/img/migrated/Picture31-1-82b19f69.png)](/img/migrated/Picture31-1-82b19f69.png)

7. **Tag** フィールドにルールを適用する tag の情報を入力します:
   - 単一の tag 名（例: `my_tag_1`）
   - カンマ区切りの tag リスト
   - ワイルドカードを使用した tag 名

   [![Tag 設定の例](/img/migrated/Screenshot_7-6f3add0a.png)](/img/migrated/Screenshot_7-6f3add0a.png)

   すべての tag に適用するには `**` を使用します。

8. **Add** をクリックしてルールを保存します。

   [![Retention rule を保存する Add ボタン](/img/migrated/Picture32-1-7c5cce38.png)](/img/migrated/Picture32-1-7c5cce38.png)

9. 作成した tag retention rule を確認します。

   [![Tag retention rule 作成後の結果](/img/migrated/Picture33-1-37c6a3a0.png)](/img/migrated/Picture33-1-37c6a3a0.png)

   例: すべての repository のすべての tag で最近 push された 20 件の artifact を保持するルール。
