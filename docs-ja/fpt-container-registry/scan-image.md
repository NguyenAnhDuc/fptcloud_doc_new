---
id: "scan-image-1"
title: "イメージをスキャンする"
description: "FPT Portal からコンテナイメージの脆弱性スキャンを実行する。"
sidebar_label: "イメージをスキャンする"
sidebar_position: 10
---

# イメージをスキャンする

FPT Container Registry には、コンテナイメージの脆弱性スキャン機能が統合されています。定期的なスキャンにより、本番環境へのデプロイ前に CVE（共通脆弱性識別子）を早期に発見できます。

## スキャンを実行する

1. サイドバーメニューで **Container Registry** > **Repository** > **Detail Repository** を選択します。

   [![スキャン対象のリポジトリ詳細](/img/migrated/Picture90-097f05eb.png)](/img/migrated/Picture90-097f05eb.png)

2. スキャンしたい artifact を選択して **SCAN** ボタンを表示します。

   [![Artifact を選択して SCAN ボタンを表示](/img/migrated/Picture91-3e24672e.png)](/img/migrated/Picture91-3e24672e.png)

3. **SCAN** をクリックしてスキャンを開始します。

   [![スキャン実行中の状態](/img/migrated/Picture93-55409ce3.png)](/img/migrated/Picture93-55409ce3.png)

4. スキャン完了後、結果を確認します。

   [![スキャン結果](/img/migrated/Picture94-fd252260.png)](/img/migrated/Picture94-fd252260.png)

## スキャン結果を確認する

1. **Detail Repository** で **Vulnerabilities** テーブルをクリックして検出された脆弱性の数を確認します。

2. **Detail Artifact** をクリックして各脆弱性の詳細を表示します。

   [![脆弱性の詳細一覧](/img/migrated/Picture101-55d53435.png)](/img/migrated/Picture101-55d53435.png)

## スキャンを停止する

実行中のスキャンをキャンセルする場合:

1. **Detail Repository** でスキャン中の artifact を選択して **STOP SCAN** ボタンを表示します。
2. **STOP SCAN** をクリックしてスキャンを停止します。
