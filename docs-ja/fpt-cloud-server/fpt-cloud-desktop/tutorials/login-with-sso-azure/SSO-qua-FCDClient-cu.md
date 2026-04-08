---
id: "SSO-qua-FCDClient-cu"
title: "旧FCDClient経由でSSO"
sidebar_label: "旧FCDClient経由でSSO"
sidebar_position: 4
---

旧FCDClientを使用したアクセス（旧フロー）


以前インストールした旧FCDClientをご使用中のユーザー向けです。

**注意：**

  * PC・ラップトップでの旧FCDClientによるアクセスは**2026年3月31日以降**にサポートが終了します。その他のデバイスでのアクセスは新たな通知があるまで引き続きサポートされます。業務の中断を避けるため、ユーザーは積極的に新しいFCDClientをインストールしてください。
  * 旧フローでのアクセス操作は[Webブラウザによるアクセスガイド](<https://fptcloud.com/documents/fpt-cloud-desktop/?doc=SSO-qua-web-browserr> "Webブラウザによるアクセスガイド")と同様ですが、仮想マシン選択ステップでFCDClientアクセス方法を選択する点のみ異なります。


**1. 適切なURLでサービスホームページにアクセスする**

有効なURL形式：

  * FCD用の企業・組織専用URL（顧客管理者がユーザーに提供）
  * 有効な認証コードを既に含むURL（形式：code.domain）。例：pil783454741.pilotfcd.online
  * サービスのデフォルトURL


**このURL情報は顧客管理者が提供します。**

Webブラウザでサービスリンクにアクセスし、**Access through FPT Cloud Desktop Client**を選択します。

![file](images/SSO-qua-FCDClient-cu/img-001.png)

**2. 適切なAuthenticator（Server）にログインする**

ユーザーが**有効な認証コードを既に含むURLでアクセスする場合**（例：有効なコードを含むURL：pil783454741.pilotfcd.online）：

  * 対応するSSOアカウントでログインするだけです（例：Microsoftアカウントでログイン）。SSOに対応するOTPを入力してください => Authenticator（Server）ログイン成功 ![file](images/SSO-qua-FCDClient-cu/img-002.png)


ユーザーがサービスのデフォルトURLからClientをダウンロードする場合：

  * Authentication Code情報を入力します（顧客管理者が管理する情報）（有効なAuthentication Codeの例：pil783454741）


![file](images/SSO-qua-FCDClient-cu/img-003.png)

  * 対応するSSOアカウントでログインします（例：Microsoftアカウントでログイン）。SSOに対応するOTPを入力してください => Authenticator（Server）ログイン成功 ![file](images/SSO-qua-FCDClient-cu/img-004.png)


**3. 仮想マシンへのアクセス** 仮想マシンリスト画面で、アクセスしたい仮想マシンを選択します。**注意：** このステップでは、FCDClientアクセスオプションを選択します。

  * ユーザーが旧FCDClientをインストールしている場合：システムは旧FCDClientを開いて仮想マシンにアクセスします。システムが求めた場合は仮想マシンへのログイン情報を入力します => 仮想マシンへのアクセス成功。
  *     * ユーザーが新しいFCDClientをインストールしている場合：システムはFCDClientを優先して開きます。ユーザーは[ステップ2：新しいFCDClientで仮想マシンへアクセスする](<https://fptcloud.com/documents/fpt-cloud-desktop/?doc=SSO-qua-FCDClient-moi#contentify_1> "ステップ2：新しいFCDClientで仮想マシンへアクセスする")と同様のアクセス手順を再実施する必要があります。


![file](images/SSO-qua-FCDClient-cu/img-005.png)

  * ログインしたいServerに対応するアカウント情報を入力します。


**注意：** 2段階認証のQRコードが表示された場合：Apple StoreまたはCH Play/Google Playからスマートフォンに**Microsoft Authenticator**アプリをダウンロードしてインストールしてください。

![file](images/SSO-qua-FCDClient-cu/img-006.png)

Authenticatorアプリを開いてQRコードをスキャンします。

![file](images/SSO-qua-FCDClient-cu/img-007.png)

  * アプリが同期を行い、FPT Cloud Desktopへのログイン用OTPを表示します。
  * OTPを入力して**Submit**をクリックします => Authenticator（Server）ログイン成功。


**3. 仮想マシンへのアクセス**

仮想マシンリスト画面で、アクセスしたい仮想マシンを選択します。

**注意：** このステップでは、FCDClientアクセスオプションを選択します。

  * ユーザーが旧FCDClientをインストールしている場合：システムは旧FCDClientを開いて仮想マシンにアクセスします。システムが求めた場合は仮想マシンへのログイン情報を入力します => 仮想マシンへのアクセス成功。
  * ユーザーが新しいFCDClientをインストールしている場合：システムはFCDClientを優先して開きます。ユーザーは[ステップ2：新しいFCDClientで仮想マシンへアクセスする](<https://fptcloud.com/documents/fpt-cloud-desktop/?doc=SSO-qua-FCDClient-moi#contentify_1> "ステップ2：新しいFCDClientで仮想マシンへアクセスする")と同様のアクセス手順を再実施する必要があります。


![file](images/SSO-qua-FCDClient-cu/img-008.png)
