---
id: "tinh-nang-dat-lich-hibernate-wake-up"
title: "Hibernate & Wake-up スケジュール機能"
description: "FPT Cloud は Hibernate & Wake-up スケジュール機能を提供し、クラスターの自動ハイバネートと復帰を設定できます。"
sidebar_label: "Hibernate & Wake-up スケジュール機能"
sidebar_position: 8
---

# Hibernate & Wake-up スケジュール機能

Portal 上での直接 Hibernate & Wake-up 機能に続いて、FPT Cloud は Hibernate & Wake-up スケジュール機能を提供し、ユーザーがクラスターを自動的にハイバネートおよび復帰させることができます。

FPTCloud では、必要に応じて 1 つまたは複数のスケジュールを同時に設定、編集、削除できます。

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。

[![](/img/migrated/Picture13-1-0109824e.png)](/img/migrated/Picture13-1-0109824e.png)

**ステップ 2:** クラスターの詳細ページにアクセスし、**Advanced** セクションの **Schedule Hibernation** を選択してスケジュールを設定します。

[![](/img/migrated/Picture14-1-2c3c6a86.png)](/img/migrated/Picture14-1-2c3c6a86.png)

**ステップ 3:** クラスターの詳細ページにアクセスし、**Advanced** セクションの **Schedule Hibernation** を選択してスケジュールを設定します。

[![](/img/migrated/Picture15-1-f144a484.png)](/img/migrated/Picture15-1-f144a484.png)

**ステップ 4:** クラスターの Wake-up と Hibernate の時刻を選択します（タイムゾーン: UTC+7）。

- _方法 1: 各フィールドのカレンダーアイコンをクリックして時刻を設定します。_

[![](/img/migrated/Picture16-1-47d859ec.png)](/img/migrated/Picture16-1-47d859ec.png)

- _時計で設定_

[![](/img/migrated/Picture17-1-2ecfd828.png)](/img/migrated/Picture17-1-2ecfd828.png)

- _方法 2: テキストフィールドに直接時刻を入力します。_

[![](/img/migrated/Picture18-1-8c63c9fb.png)](/img/migrated/Picture18-1-8c63c9fb.png)

**ステップ 5:** スケジュールの追加/削除

- _スケジュールの追加_

[![](/img/migrated/Picture19-1-971ccfe9.png)](/img/migrated/Picture19-1-971ccfe9.png)

- _スケジュールの削除_

[![](/img/migrated/Picture20-1-22355561.png)](/img/migrated/Picture20-1-22355561.png)

**ステップ 6:** 作成/変更後に新しいスケジュールを保存します。

[![](/img/migrated/Picture21-1-10c054b1.png)](/img/migrated/Picture21-1-10c054b1.png)

この時点で、ユーザーのスケジュールがシステムに正常に更新された場合、システムは _Success_ ステータスを返します。また、表示部分には次回の Hibernate/Wakeup までの残り時間が表示されます。

[![](/img/migrated/Picture22-1-9ff6a66a.png)](/img/migrated/Picture22-1-9ff6a66a.png)

**注意:** ユーザーは異なる日付・時間で複数のスケジュールを同時に作成または削除できます。ただし、Hibernate と Wake-up の時刻の間隔は少なくとも 15 分以上あける必要があります。
