---
id: "SSO-qua-FCDClient-moi"
title: "ステップ 1: 新しい FCDClient のインストール"
sidebar_label: "ステップ 1: 新しい FCDClient のインストール"
sidebar_position: 2
---

新しい FCDClient からのアクセス

最も安定した、すべての機能を利用できるエクスペリエンスを提供し、アプリケーション上で直接操作できます。

# ステップ 1: 新しい FCDClient のインストール

  * 初回のみ実施が必要です。2回目以降は FCDClient アプリケーションから直接アクセスできます。
  * 以前に新しい FCDClient をインストール済みの場合は、このステップをスキップして [ステップ 2: 新しい FCDClient で仮想マシンにアクセスする](<https://fptcloud.com/documents/fpt-cloud-desktop/?doc=SSO-qua-FCDClient-moi#contentify_1> "ステップ 2: 新しい FCDClient で仮想マシンにアクセスする") に進んでください。


**1. 適切な URL でサービスのホームページにアクセスする**

有効な URL の形式:

  * FCD 用の企業/組織専用 URL（カスタマー管理者がユーザーに提供）
  * 有効な authentication code が含まれている URL（形式: code.domain）。例: pil783454741.pilotfcd.online
  * サービスのデフォルト URL


**この URL 情報はカスタマー管理者が提供します**

Web ブラウザでサービスリンクを開き、**Access through FPT Cloud Desktop Client** を選択します。

![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-FCDClient-moi/img-001.png)

**2. FCD Client アプリケーションをダウンロード、インストールし、インストール完了後に開く**

システムは Windows オペレーティングシステムに対応した最新バージョンの Client を自動でダウンロードします（ユーザーが手動でインストールすることもできます）。ダウンロード時にブラウザが以下のような警告を表示した場合: ![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-FCDClient-moi/img-002.png)

三点メニューを選択 > **Keep** > **Keep anyway** を選択します。

![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-FCDClient-moi/img-003.png)

ダウンロードが完了したら、アプリケーションのインストールを行います。**Open file** を選択してデバイスにアプリケーションをインストールします。

![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-FCDClient-moi/img-004.png)

**Windows の場合:** 「Windows protected your PC」ポップアップで、「More info」ハイパーリンクをクリックし、「Run anyway」ボタンをクリックします。

**macOS の場合:**

  * インストールファイルを **「Applications」** にドラッグします。
  * インストールファイルを開き、**「Open」** ボタンをクリックして開封とインストールを確認します。
  * **「Don't warn me when opening applications on this disk image」** のチェックボックスにチェックを入れます。


![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-FCDClient-moi/img-005.png)

**=> FCD Client のインストールが完了しました。インストール後、FCDClient アプリケーションを開いてください。**

**macOS デバイスをご利用の方へのご注意:**

  * [Mac Apple Store](<https://apps.apple.com/us/app/windows-app/id1295203466?mt=12> "Mac Apple Store") から Microsoft Windows App を確認し、追加でインストールする必要があります。


![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-FCDClient-moi/img-006.png)

  * デバイスが FCDClient アプリケーションに関する警告を表示した場合は、Settings > Privacy & Security > FCDClient の Open Anyway にアクセスしてください。


# ステップ 2: 新しい FCDClient で仮想マシンにアクセスする

**3. コンピューターで FCDClient アプリケーションを開いて操作する**

適切な Authenticator（Server）にログインします。

1. [ステップ 1: 新しい FCDClient のインストール](<https://fptcloud.com/documents/fpt-cloud-desktop/?doc=SSO-qua-FCDClient-moi#contentify_0> "ステップ 1: 新しい FCDClient のインストール") でインストールした FCDClient アプリケーションを開きます。

  * **Client に既に Server 情報がある場合**（以前に入力済み、または有効な authentication code を含む URL から Client をダウンロードした場合）: **Connect Server** を選択し、以下の項目 2 で対応するアカウント情報を入力します。 ![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-FCDClient-moi/img-007.png)

  * **Client に Server 情報が表示されていない場合**: Server 情報を手動で入力する必要があります。**New Server** を選択 > 有効な URL またはドメインを入力します（カスタマー管理者が管理する情報）。有効な入力例: 有効な URL pil783454741.pilotfcd.online を直接入力する **または** まずドメイン pilotfcd.online を入力し、その後 Authentication code pil78345474 を入力します。


![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-FCDClient-moi/img-008.png)

2. SSO アカウントでログインします（例: Microsoft アカウントでログイン）。SSO に対応した OTP を入力します => Authenticator（Server）へのログイン成功。

![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-FCDClient-moi/img-009.png)

**4: 仮想マシンへのアクセス**

仮想マシンの一覧画面で、アクセスしたい仮想マシンを選択します。

![file](/img/migrated/docs-ja-fpt-cloud-desktop/SSO-qua-FCDClient-moi/img-010.png)

システムに求められた場合は仮想マシンのログイン情報を入力します => 仮想マシンへのアクセス成功。


新しい FCDClient のその他の機能:

**- Auto-connect Server:** FCDClient アプリケーション内から Authenticator に直接アクセスできます（アプリケーションを直接起動した場合のみ適用。ホームページの「Access through FCDClient」経由でのアクセスには未対応）。

**- Settings:** インストール済みの FCDClient の情報を確認できます。

**- New server:** ユーザーが新しい（Authenticator）Server 情報を手動で追加できます。
