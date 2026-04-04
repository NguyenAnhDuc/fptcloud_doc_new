---
id: "refresh-robot-account"
title: "Robot account の secret をリフレッシュする"
description: "トークンを紛失した場合やセキュリティ上の理由でリセットが必要な場合に robot account の secret を再生成する。"
sidebar_label: "Robot account の secret をリフレッシュする"
sidebar_position: "25"
---

# Robot account の secret をリフレッシュする

Robot account のトークンは作成時に一度だけ表示されます。トークンを紛失した場合やセキュリティ上の理由で交換が必要な場合、FPT Cloud では robot account を削除・再作成せずに secret を再生成できます。

1. **Robot Account** リストでリフレッシュしたい robot account を選択し、**ACTION REFRESH SECRET** を選択します。

   [![ACTION REFRESH SECRET を選択](/img/migrated/Picture79-c15b2ebd.png)](/img/migrated/Picture79-c15b2ebd.png)

2. 以下の 2 つの方法のいずれかで secret をリフレッシュします:

   **方法 1 - 自動:** システムが新しい secret を自動生成します。secret をコピーするか、**Export to File** で保存します。

   [![Secret の自動リフレッシュ](/img/migrated/Picture80-b745cd4f.png)](/img/migrated/Picture80-b745cd4f.png)

   [![新しい secret の保存ダイアログ](/img/migrated/Picture81-1d68b601.png)](/img/migrated/Picture81-1d68b601.png)

   **方法 2 - 手動:** カスタム secret を自分で入力します。

   [![手動による secret の設定](/img/migrated/Picture82-b708581c.png)](/img/migrated/Picture82-b708581c.png)

:::warning
リフレッシュ後は、この robot account を使用しているすべてのパイプラインとシステムで新しい secret に更新してください。
:::
