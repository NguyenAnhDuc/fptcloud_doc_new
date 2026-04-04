---
id: "base-model"
title: "Base Model"
description: "Base Model フィールドを使用して model 間の親子関係を定義します。"
sidebar_label: "Base Model"
sidebar_position: "21"
---

# Base Model

Base Model フィールドは、model 間の関係（別の model から派生した model）を示します。親 model が上位、現在表示している model が下位に表示されます。

## Base Model を設定して model を作成する手順

1. **AI Platform** メニューで **Private Model** を選択し、**Create** をクリックして新しい model を作成します。

2. Step 1 で、Title、Description、Model visibility などの必要な情報をすべて入力します。

3. **Base model** フィールドのドロップダウンリストをクリックし、作成中の model の親 model を選択します。
[![](/img/migrated/anh-8-205447ff.png)](/img/migrated/anh-8-205447ff.png)

   > **注意:** 選択できる base model は 1 つのみです。このフィールドは省略可能です。

4. **Next** をクリックします。Step 2 — Tags で、Framework、Architecture、Subject、Task、Others の各 tag を選択します。

5. **Next** をクリックして、作成した model のすべての情報を確認します。**Base model** セクションが以下のように表示されます。
[![](/img/migrated/anh-9-4ab19bb5.png)](/img/migrated/anh-9-4ab19bb5.png)

6. すべての情報が正しければ、**Create a model** をクリックします。

7. システムが model リストに移動し、新しく作成した model が表示されます。

8. 新しく作成した model の詳細画面を開くと、**Base model** セクションと model relationship アイコンが表示されます。
[![](/img/migrated/anh-10-5c581304.png)](/img/migrated/anh-10-5c581304.png)

**Model relationship** アイコンをクリックすると、2 つの model 間の親子関係を示すポップアップが表示されます。ポップアップ内の model 名をクリックすると、その model の詳細画面に移動します。
[![](/img/migrated/anh-11-3de031d8.png)](/img/migrated/anh-11-3de031d8.png)
