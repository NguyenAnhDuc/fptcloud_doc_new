---
id: "tao-security-profile"
title: "Security Profile の作成"
description: "Security Profiles > AntiVirus。"
sidebar_label: "Security Profile の作成"
sidebar_position: 7
---

# Security Profile の作成

## AntiVirus
**ステップ 1：** **Security Profiles** > **AntiVirus** を選択します。
![Userguide Fortigate FPT NGFW 2022 13](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-13-102-881981db.png)  
**ステップ 2：** 新しいプロファイルを作成するか、**Fortigate** の既存プロファイルを使用することができます。  
![Userguide Fortigate FPT NGFW 2022 14](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-14-102-d5b64418.png)  
**検査プロトコル**、**Feature**、および **Action** を選択します。

## Web Filter
**ステップ 1：** **Security Profiles** > **Web Filter** を選択します。
![Userguide Fortigate FPT NGFW 2022 15](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-15-102-5d2b8463.png)
**ステップ 2：** 新しいプロファイルを作成するか、**Fortigate** の既存プロファイルを使用することができます。
![Userguide Fortigate FPT NGFW 2022 16](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-16-102-7d7928a3.png)  
**ステップ 3：**
**URL Filter** を有効にして **Create New** をクリックします。
  * 特定の Web サイト（例：fptsmartcloud.com）のみアクセスを許可するプロファイルを作成します。

  * ![Userguide Fortigate FPT NGFW 2022 17](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-17-102-064d7203.png)**残りのすべてのアクセスをブロックするプロファイルを作成します：** Regex 形式 `[^.]` を使用して残りのサイトをブロックします。

![Userguide Fortigate FPT NGFW 2022 18](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-18-102-0730e9d9.png)
![Userguide Fortigate FPT NGFW 2022 19](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-19-17350cd9.png)

## Application Control
**ステップ 1：** **Security Profiles** > **Application Control** を選択します。
![Userguide Fortigate FPT NGFW 2022 20](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-20-102-4e4f0eba.png)
**ステップ 2：** 新しいプロファイルを作成するか、Fortigate の既存プロファイルを使用してソーシャルメディアサイトへのアクセスをブロックします。
![Userguide Fortigate FPT NGFW 2022 21](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-21-102-f6520a67.png)
![Userguide Fortigate FPT NGFW 2022 22](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-22-102-568d50f4.png)
**ステップ 3：** 既存のシグネチャを使用するか、**Create New** > **Custom Application Signature** で新規作成します。
![Userguide Fortigate FPT NGFW 2022 23](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-23-102-8c16436a.png)

## Intrusion Prevention – IPS
**ステップ 1：** **Security Profiles** > **Intrusion Prevention** を選択します。
![Userguide Fortigate FPT NGFW 2022 24](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-24-102-a9517010.png)
**ステップ 2：** 新しいプロファイルを作成するか、Fortigate の既存プロファイルを使用して C&C サーバー（Botnet）へのアクセスをブロックします。
![Userguide Fortigate FPT NGFW 2022 25](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-25-102-d20e176d.png)
![Userguide Fortigate FPT NGFW 2022 26](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-26-102-c379afe0.png)
**ステップ 3：** 既存の IPS シグネチャを使用するか、**IPS Signature and Filter** > **Create New** で新規作成します。
![Userguide Fortigate FPT NGFW 2022 27](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-27-102-ccc83cc5.png)

## WebApplication FireWall – WAF
**ステップ 1：** **Security Profiles** > **Web Application FireWall** を選択します。  
![Userguide Fortigate FPT NGFW 2022 28](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-28-102-3da9bc27.png)  
**ステップ 2：** 新しいプロファイルを作成するか、Fortigate の既存プロファイルを使用して Web サーバーへの攻撃（SQL Injection、Cross Site Scripting）をブロックします。
![Userguide Fortigate FPT NGFW 2022 29](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-29-102-2ec3dddd.png)
**ステップ 3：** **Edit** > **Sql Injection**（Extended）、**Cross Site**（Extended）のシグネチャを有効にします。  
![Userguide Fortigate FPT NGFW 2022 30](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-30-102-dd9edd12.png)
