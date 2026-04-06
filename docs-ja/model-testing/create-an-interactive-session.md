---
id: "create-an-interactive-session"
title: "interactive sessionの作成"
description: "モデルテストサービスでinteractive sessionを作成するためのガイド"
sidebar_label: "interactive sessionの作成"
sidebar_position: 4
---

# interactive sessionの作成

モデルテストサービスにアクセスし、「Interactive Session」を選択し、「新しいセッションを作成」をクリックします。

[![file](/img/migrated/image-1746688925988.21.46-ae14f354.png)](/img/migrated/image-1746688925988.21.46-ae14f354.png)

### interactive sessionの作成

[![file](/img/migrated/image-1746689212265.22.57-0fa0e464.png)](/img/migrated/image-1746689212265.22.57-0fa0e464.png)

- セッション名を入力
  - デフォルト形式: [int.session]_[timestamp]
  - 編集可能、**最大100文字**
- セッションの説明を入力（最大**200文字**）
- モデルソースのオプション

設定を構成する際、以下の2つのモデルソースから選択できます。

- **Catalog**
  - ソースとして**Catalog**を選択すると、**Model Catalog**内の利用可能なすべてのモデルのリストが表示されます。instruction modelを選択していることを確認してください。
  **例:** Llama-3.1-8B-Instruct
  - このオプションは、事前定義された公開モデルを参照または選択する場合に適しています。
- **Private Model**
  - **Private Model**を選択すると、組織のカスタムモデルまたはプライベートにデプロイされたモデルのみが表示されます。
  - テストするモデルのバージョンを選択します。**モデルにbrowser fileとtagがあることを確認してください。**
  - このオプションは、catalogに公開されていないモデルを使用する場合に使用します。

完了すると、作成されたinteractive sessionのリストが表示されます。
