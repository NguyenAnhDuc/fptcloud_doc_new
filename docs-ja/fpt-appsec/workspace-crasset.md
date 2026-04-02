---
id: "workspace-crasset"
title: "Container Registry asset（image）の基本操作ガイド"
description: "**Org Admin** および **チームのユーザー** がassetを新規追加できます。"
sidebar_label: "Container Registry asset（image）の基本操作ガイド"
sidebar_position: 26
---

# Container Registry asset（image）の基本操作ガイド

## Assetの追加
**Org Admin** および **チームのユーザー** がassetを新規追加できます。
**手順1** : チームを選択後、**Add Asset** をクリックします。
[![anhfsec](/img/migrated/19-b5c086ac.png)](/img/migrated/19-b5c086ac.png)
**手順2** : FPT Container Registry/Harborを選択します。
[![anhfsec](/img/migrated/20-565cbb9b.png)](/img/migrated/20-565cbb9b.png)
_注意: asset sourceの種類（FPT Container Registry/Harbor）が **Integration** 画面で連携されている場合にのみ、asset追加のポップアップが表示されます。未連携のsourceを選択した場合、そのsourceタイプの **Integration** タブに遷移します。_
**手順3** : スキャン対象のimageを含む **project** を選択します。
[![anhfsec](/img/migrated/21-8f69016c.png)](/img/migrated/21-8f69016c.png)
**Image** と **Image Tags** が表示されます。
**手順4** : 希望のImageを選択して **Add** をクリックします。
[![anhfsec](/img/migrated/23-0c6ab90e.png)](/img/migrated/23-0c6ab90e.png)
追加が成功すると、システムは初回スキャンを自動実行し、Asset ManagementのAll Assetsタブに結果を表示します。asset追加の履歴はHistoryタブで確認できます。
## Assetの概要情報の確認
**手順1** : Asset Management > All 画面で、CR Asset Nameのテキストリンクをクリックしていずれかのassetを選択します。
**手順2** : Asset Overview画面で以下の概要情報を確認できます。
  * 基本情報（General Information）:
    * Asset Name、Asset Access（Public/Private）、Status（Active/Inactive）
    * Owner: assetのオーナー（ユーザー名 + メールアドレス、またはCI/CDパイプライン）
    * Added By: assetを追加したユーザー（ユーザー名 + メールアドレス、またはCI/CDパイプライン）
    * Added At: assetの追加日時
  * メタデータ（Issue Information）:
    * Image ID、Manifest Digest、Image Tag、Image VPC、Base Image、Platform、Target OS、Image Size
  * 直近のスキャン情報（Issue Overview）:
    * Scan Type（ロゴ + スキャン名、クリックで種別ごとの詳細表示）
    * Scan Time、Total Open Issues、No. Severity
    * Scanning Times By Day（直近7日間）のグラフ
  * Latest Request: 直近3件のスキャンリクエスト（Scanned By、Scanned At、スキャン結果）

## Issueの情報確認
### 3.1. Issue Listの表示
[SCM assets](../fpt-appsec/index.md)のガイドと同様です。
### 3.2. Issueの情報確認
  * Issue List画面では、各issueがIssue Info Card形式で以下の情報とともに表示されます。
    * Severity: Critical/High/Medium/Low
    * Package NameまたはSecret Name
    * Issue Title（「:」がある場合、「:」以降の部分を取得）
    * Vul References: CWE/CVE/CVSS
    * Score: 0〜10（小数点1桁で丸め）
    * Issue Status: 直近スキャン後のissueの現在のステータス。
    * Exploit Status: issueが悪用されているかどうかを示します。
    * Image Layer: issueの原因となるDockerfile/Image内のコマンドまたはレイヤー。
    * Fixed in Version: issueが修正されたパッケージバージョン。修正バージョンがない場合はNot availableと表示されます。

### 3.3. Issueのフィルタリング、検索、並べ替え
#### 3.3.1. フィルター
フィルター条件: Severity、Status、Priority Score（0〜10）、Issue Type、「Fixed in」available、Image Layer、Exploit Maturity、Exploit Status。複数条件を同時に選択できます。
#### 3.3.2.
  * 検索キーワード: Issue ID、Issue Title
  * Enterで検索、Clearで一覧をリセット

#### 3.3.3. 並べ替え
  * 並べ替え項目: Severity（C→H→M→L）、Score、Created Time
  * デフォルト: Scoreの降順

### 3.4. Issueの詳細情報確認
**手順1** : いずれかのissueカード（Imageに属する）でDetailsを選択してIssue Detailポップアップを開きます。
**手順2** : Issue Detail画面でissueの詳細情報を確認できます。
  * 基本情報（Issue Detail）:
    * Severity: issueの深刻度（Critical、High、Medium、Low）。
    * Package Name: issueの原因となるパッケージ名（Vulnerabilityの場合）。
    * Vulnerability Type: issueの脆弱性タイプ。
    * Link（コピーアイコン）: IDによるissueのパスをコピーします。新しいタブにこのパスを貼り付けると、システムはIssue List画面を開き、issue_idが検索バーに自動的に設定されます。
    * Issue Status: スキャンバージョン別のissueの現在のステータス（Opened、Ignored）。
  * 詳細情報:
    * Issue Description – issueの詳細説明。
    * Issue Remediation – issueの修正ガイド。以下を含みます。
    * Current package – 現在使用中のパッケージバージョン。
    * Fixed in version – 修正済みバージョン（存在する場合。ない場合は「Not available」と表示）。
    * Security Information – CVSSスコア、攻撃ベクトル
    * References – 関連する参考リンクの一覧。クリックして開きます。
    * Manifest Layer – Dockerfile内のすべてのレイヤーを表示し、エラーのある位置をハイライトして自動的にエラー行を画面中央にスクロールします。
    * Code Block（ソースコードの場合）– コードファイルを表示し、エラーのある行とエラーの原因となるキーワードをハイライトします。
    * Activity: issueのステータス変更履歴

## Assetの再スキャン
[SCM assets](../fpt-appsec/index.md)のガイドと同様です。
## Assetの無効化/有効化
[SCM assets](../fpt-appsec/index.md)のガイドと同様です。
## Assetの削除
[SCM assets](../fpt-appsec/index.md)のガイドと同様です。
