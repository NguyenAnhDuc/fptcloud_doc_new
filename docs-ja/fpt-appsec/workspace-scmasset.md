---
id: "workspace-scmasset"
title: "2. Assetの概要情報の確認"
description: "**Org Admin** および **チームのユーザー** がassetを新規追加できます。"
sidebar_label: "2. Assetの概要情報の確認"
sidebar_position: 25
---

# 2. Assetの概要情報の確認

## Assetの追加
**Org Admin** および **チームのユーザー** がassetを新規追加できます。
**手順1** : チームを選択後、**Add Asset** をクリックします。
[![anhfsec](/img/migrated/19-b5c086ac.png)](/img/migrated/19-b5c086ac.png)
**手順2** : GitHub/GitLab/GitLabを選択します。
[![anhfsec](/img/migrated/20-565cbb9b.png)](/img/migrated/20-565cbb9b.png)
_注意: asset sourceの種類（GitHub/GitLab/GitLab）が **Integration** 画面で連携されている場合にのみ、asset追加のポップアップが表示されます。未連携のsourceを選択した場合、そのsourceタイプの **Integration** タブに遷移します。_
**手順3** : スキャン対象のソースを含む **project/repo** を選択します。
[![anhfsec](/img/migrated/21-8f69016c.png)](/img/migrated/21-8f69016c.png)
画面には、各リポジトリと所属するブランチを含む **Repository group** が表示されます。ブランチ名でブランチを検索することもできます。
**手順4** : 希望のリポジトリとブランチを選択し、**Add** をクリックします。
[![anhfsec](/img/migrated/23-0c6ab90e.png)](/img/migrated/23-0c6ab90e.png)
追加が成功すると、システムは初回スキャンを自動実行し、Asset ManagementのAll Assetsタブに結果を表示します。asset追加の履歴はHistoryタブで確認できます。

## Assetの概要情報の確認
**手順1** : Asset Management > All 画面で、Asset Nameのテキストリンクをクリックしていずれかのassetを選択します。
[a0](https://fptcloud.com/wp-content/uploads/2025/05/a0.jpg)
**手順2** : Asset Overview画面で以下の概要情報を確認できます。
[![Alt text](/img/migrated/a1-29caace2.jpg)](/img/migrated/a1-29caace2.jpg)
  * 基本情報（General Information）:
    * Asset Status: Active/Inactive
    * Language: 主要言語1〜2件を表示。ホバーすると上位5言語と「Other」が表示されます。
    * Owner: assetのオーナー（ユーザー名 + メールアドレス、またはCI/CDパイプライン）
    * Added By: assetを追加したユーザー（ユーザー名 + メールアドレス、またはCI/CDパイプライン）
    * Added At: assetの追加日時
  * ソースコード情報（Language Spinner Chart）:
    * 横棒グラフで言語の割合を降順で表示
    * 凡例に最大5言語と「Other」（残りの割合）を表示
  * 直近のスキャン情報（Issue Overview）:
    * Scan Type: ロゴ + スキャン名。クリックすると種別ごとの詳細（Code Analysis、Secret Scanning、IaC Scanning）が表示されます。
    * Commit + Scan Time: commit_idとスキャン時刻を表示
    * Total Open Issues: オープン中のIssue数
    * No. Severity: 深刻度別（Critical、High、Medium、Low）のIssue数
    * Scanning Times By Day（直近7日間）のグラフ
  * Latest Request: 直近3件のスキャンリクエスト（Scanned By、Scanned At、スキャン結果）

**手順3**. また、**History** タブでassetのスキャン履歴を確認し、**スキャン種別** と **実行期間** でフィルタリングできます。
[![Alt text](/img/migrated/a2-74cfdb07.jpg)](/img/migrated/a2-74cfdb07.jpg)

## Issueの情報確認
### 3.1. Issue Listの表示
  * Asset Listの画面でCR Asset Nameのテキストリンクをクリックしていずれかのassetを選択します。タブのデフォルト表示がOverviewのAsset Detail画面に遷移します。
  * Issueタブを選択してissue一覧を確認します。

[![Alt text](/img/migrated/a3-04b8efd8.jpg)](/img/migrated/a3-04b8efd8.jpg)
_注意: デフォルトではScoreの降順で並べられ、1ページあたり最大10件のissueが表示されます。_

### 3.2. Issueの情報確認
  * Issue List画面では、各issueがIssue Info Card形式で以下の情報とともに表示されます。

[![Alt text](/img/migrated/a4-68d75c1d.jpg)](/img/migrated/a4-68d75c1d.jpg)
  * Severity: Critical、High、Medium、Low
  * Vulnerability Type（脆弱性タイプ）
  * Issue ID + Link Copy: 新しいタブでissueを直接開くリンクをコピー
  * Vul References: 関連するCWEの一覧（3件以下はすべて表示、4件以上は「+MORE」と表示）
  * Score: 優先度スコア（0〜10）、小数点1桁で丸め
  * Issue Status: 現在のステータス（Open、Ignored、False Positive、Acceptable Risk など）
  * Note Status: ステータス変更ボタン（権限がない場合は無効、ガイドは[こちら](../fpt-appsec/index.md)）
  * Details: issueの詳細を開く
  * Code Block: エラーを含むコード、エラー行と前後4行のコンテキストをハイライト
  * Issue Suggest Summary: 対処方法の提案
  * Project Link: Git上のissueを含むファイルを開く（新しいタブ）

### 3.3. Issueのフィルタリング、検索、並べ替え
#### 3.3.1. フィルター
  * フィルター条件: Severity、Status、Priority Score（0〜10）、Security Category、Vulnerability Type、OWASP Top 10、CWE。複数条件を同時に選択できます。
  * フィルターを選択しない場合、すべてのissueが表示されます。

[![Alt text](/img/migrated/a5-3147a913.jpg)](/img/migrated/a5-3147a913.jpg)

#### 3.3.2. 検索
  * 検索キーワード: Issue ID、Issue Name、Issue Suggest Summary
  * Enterで検索、Clearで一覧をリセット

[![Alt text](/img/migrated/a6-f4cba640.jpg)](/img/migrated/a6-f4cba640.jpg)

#### 3.3.3. 並べ替え
  * 並べ替え項目: Severity（C→H→M→L）、Score、Created Time
  * デフォルト: Scoreの降順

[![Alt text](/img/migrated/a6.1-67856fbc.jpg)](/img/migrated/a6.1-67856fbc.jpg)

### 3.4. Issueの詳細情報確認
**手順1** : いずれかのissueカード（Code Analysis/Secret Scanning/IaC Scanning）でDetailsを選択してIssue Detailポップアップを開きます。
[![Alt text](/img/migrated/a7-1c9151c8.jpg)](/img/migrated/a7-1c9151c8.jpg)
**手順2** : Issue Detail画面でissueの詳細情報を確認できます。
  * 基本情報（Issue Detail）:

[![Alt text](/img/migrated/a8-3bb4ae93.jpg)](/img/migrated/a8-3bb4ae93.jpg)
  * Severity: issueの深刻度（Critical、High、Medium、Low）。
  * Vulnerability Type: issueの脆弱性タイプ。
  * Link（コピーアイコン）: IDによるissueのパスをコピーします。新しいタブにこのパスを貼り付けると、システムはIssue List画面を開き、issue_idが検索バーに自動的に設定されます。
  * Issue Status: スキャンバージョン別のissueの現在のステータス（Opened、Ignored）。

  * 詳細情報:

[![Alt text](/img/migrated/a9-2e85bb93.jpg)](/img/migrated/a9-2e85bb93.jpg)
  * Issue Description: issueの詳細説明。
  * Issue Remediation: issueの修正ガイド。
  * References: 関連する参考リンクの一覧。クリックすると詳細情報が開きます。
  * Issue File: Git内のissueを含むファイルのパス。クリックするとGit上のファイルが直接開きます（新しいタブ）。
  * Code Block: 完全なコードファイルを表示し、エラーのある行とエラーの原因となるキーワードをハイライトします。ポップアップが開かれるとエラー行がコードブロックの中央に表示されます。
  * Activity: issueのステータス変更履歴

## Assetの再スキャン
### 4.1. Asset List画面からの再スキャン
**手順1** : All Assets画面で、assetまたはスキャン種別の右端にある **⋮** アイコンをクリックして再スキャンするassetまたはスキャン種別を選択します。
[![Alt text](/img/migrated/a10.1-b7dd8b2b.jpg)](/img/migrated/a10.1-b7dd8b2b.jpg)
**手順2** : 「Rescan」アクションを選択すると、システムは対象assetまたはスキャン種別を再スキャンし、_「Rescan requested successfully」_ と表示します。
[![Alt text](/img/migrated/a10-9384c219.jpg)](/img/migrated/a10-9384c219.jpg)
失敗した場合、システムは _「Rescan request failed」_ と表示します。
*注意: スキャンが完了するまで **Rescan** ボタンは無効化されます。

### 4.2. Asset Detail画面からの再スキャン
**手順1** : Asset Listの画面でasset名をクリックして詳細に移動します。
**手順2** : Issueタブを選択 → 対応するサブタブを選択（Code Analysis、Secret Scanning、IaC Scanning）。
[![Alt text](/img/migrated/a11-cbb7ee44.png)](/img/migrated/a11-cbb7ee44.png)
**手順3** : 画面右上の「Rescan now」をクリックします。成功すると「Rescan requested successfully」と表示されます。
[![Alt text](/img/migrated/a12-beb19e36.jpg)](/img/migrated/a12-beb19e36.jpg)
失敗した場合は「Rescan request failed」と表示されます。
*注意: スキャンが完了するまで **Rescan** ボタンは無効化されます。

## Assetの無効化/有効化
**Enable/Disable Asset** 機能により、システム内のassetを一時的に無効化または再有効化できます。

### 5.1. Assetの無効化
**手順1** : Workspace メニュー → **All Assets** タブでasset一覧を表示します。
**手順2** : 無効化するassetの右端にある **⋮** メニューアイコンをクリックします。アクション一覧からDisableを選択します。
[![Alt text](/img/migrated/a13-f93bcda0.jpg)](/img/migrated/a13-f93bcda0.jpg)
**手順3** : 確認ボックスに **disable** と正確に入力してConfirmをクリックします。入力が誤っている場合、_「Type correct phrase to confirm your action.」_ というエラーメッセージが表示されます。
[![Alt text](/img/migrated/a14-8be1bbf4.jpg)](/img/migrated/a14-8be1bbf4.jpg)
正確に入力して確認が成功すると、ポップアップが閉じ、Asset List画面のassetが新しいステータス（Disabled）に更新され、_「Disable asset successfully.」_ というトーストメッセージが表示されます。

### 5.2. Assetの有効化
**手順1** : **Disabled** 状態のassetの右端にある **⋮** メニューアイコンをクリックして有効化するAssetを選択します。アクション一覧から **Enable** を選択します。
[![Alt text](/img/migrated/a15-c6184f8c.jpg)](/img/migrated/a15-c6184f8c.jpg)
**手順2** : 権限がある場合、Enable Assetポップアップが表示されます。Confirmをクリックしてassetを再有効化します。
[![Alt text](/img/migrated/a16-1a0df72c.jpg)](/img/migrated/a16-1a0df72c.jpg)
assetの有効化を確認すると、ポップアップが閉じ、Asset Listが新しいステータス（Enabled）に更新され、_「Enable asset successfully.」_ というトーストメッセージが表示されます。
*注意: Admin、Team Manager、Asset ownerの権限がない場合、assetのenable/disableはできません。

## Assetの削除
**Delete Asset** 機能により、ユーザーはassetを組織（org）またはそのassetを直接含むチームから削除できます。
**手順1** : Workspace メニュー → All Assets タブでasset一覧を表示します。
**手順2** : 削除するAssetの右端にある⋮メニューアイコンをクリックします。アクション一覧から **Delete** を選択します。
[![Alt text](/img/migrated/a17-62e36a0d.jpg)](/img/migrated/a17-62e36a0d.jpg)
_注意_ : assetを削除できるのはOrg Adminのみです。
**手順3** : 確認ボックスにdeletという キーワードを正確に入力します。Confirmをクリックしてassetの削除を実行します。
[![Alt text](/img/migrated/a18-4175bb2b.jpg)](/img/migrated/a18-4175bb2b.jpg)
確認が成功すると、ポップアップが閉じ、assetが現在のorg/teamから削除され、_「Deleted asset successfully.」_ というトーストメッセージが表示されます。
