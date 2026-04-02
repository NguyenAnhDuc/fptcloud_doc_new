---
id: "manage-container"
title: "Manage Container"
description: "GPU Containerの管理：起動、編集、停止、削除の方法。"
sidebar_label: "Manage Container"
sidebar_position: 9
---

# Manage Container

## コンテナを起動する
  1. コンテナ一覧を開きます
  2. 起動したいGPU Containerを見つけて、3点アイコンをクリックします。
  3. 「Start」アクションを選択します

## コンテナを編集する
[!(/img/migrated/Vector-a4233e15.png)](/img/migrated/Vector-a4233e15.png)
**警告：** 変更を保存するとコンテナが再起動されます。一時ディスク上のすべてのデータは完全に失われることにご注意ください。
  1. コンテナ一覧から、編集したいコンテナを選択して「コンテナ詳細」画面にアクセスします。
  2. 変更したいセクションの編集アイコンをクリックします。「コンテナへのアクセス」セクション（ポートとSSHを含む）と「詳細設定」セクション（永続ディスク、環境変数、起動コマンドを含む）を編集できます。
  3. 「保存」をクリックして確認します。

## コンテナを停止する
[!(/img/migrated/Vector-a4233e15.png)](/img/migrated/Vector-a4233e15.png)
**警告：** 停止中のGPU Containerに対しても、アイドル状態の料金が請求されます。コンテナを保持する必要がない場合は、完全に終了してください。
  1. コンテナ一覧を開きます
  2. 停止したいGPU Containerを見つけて、3点アイコンをクリックします
  3. 「Stop」アクションを選択します
  4. 「Confirm」をクリックして確認します

## コンテナを削除する
[!(/img/migrated/Alert-triangle-3b4ebdf0.png)](/img/migrated/Alert-triangle-3b4ebdf0.png)
**危険：** コンテナを削除すると、一時ストレージと永続ストレージのすべてのデータが完全に削除されます。再度アクセスしたいデータは必ず保存してください。
  1. コンテナ一覧を開きます。
  2. 削除したいGPU Containerを見つけて、3点アイコンをクリックします。
  3. 「Delete」アクションを選択します。
  4. テキストフィールドに「delete」と入力して「Confirm」をクリックして確認します
