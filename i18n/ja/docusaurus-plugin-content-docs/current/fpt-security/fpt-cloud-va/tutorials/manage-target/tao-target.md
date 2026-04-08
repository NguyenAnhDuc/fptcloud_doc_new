---
id: "tao-target"
title: "ターゲットを作成する"
description: "FPT Cloud VAで新しいスキャンターゲットを作成するガイド。"
sidebar_label: "ターゲットを作成する"
sidebar_position: 2
---

# ターゲットを作成する

**ターゲット**とは、FPT VAがセキュリティ脆弱性をスキャンするスキャン対象です。ターゲットは **FPT Portal** 上で作成し、Webサイト、パブリックIPアドレス、または管理するIPレンジを指定できます。

1. メニューから **Security > Cloud VA** を選択し、**Create target** をクリックします。

   [![ターゲットを作成する](/img/migrated/image-1690784417122-8b617f01.bin)](/img/migrated/image-1690784417122-8b617f01.bin)

   :::note
   テナントがサービスへのアクセス権を付与されていない場合、**You do not have sufficient permissions to view this page!** というメッセージが表示されます。クォータが割り当てられている正しいテナントを選択してください。
   :::

2. 必要なフィールドに入力してスキャンを設定します：

   | フィールド | 説明 |
   |---|---|
   | **Name** | スキャンターゲットの名前。 |
   | **Scanning type** | ターゲットタイプを選択します：**Website**（Webアプリケーション）または **Network**（IPアドレスまたはIPレンジ）。 |
   | **URL*** | スキャンするWebアプリケーションのURL。Scanning typeがWebsiteの場合に必須。 |
   | **Network auto-scan** | WebアプリケーションのIPアドレスもスキャンする場合に有効にします。 |
   | **IP address** | スキャンするIPアドレスまたはIPレンジ。Scanning typeがNetworkの場合に必須。 |
   | **Scan mode** | ネットワークターゲットのスキャンモード：Host Discovery、Standard Scan、Deep Scan、Brute Force Scan、またはLog4Shell Scan。 |
   | **Schedule Scan** | スキャンスケジュール：**Onetime**、**Daily**、**Weekly**、または **Monthly**。 |
   | **Start on** | システムがスキャンを開始する日時。 |
   | **Repeat on** | 週または月の中でスキャンを繰り返す曜日。 |
   | **Scan Now** | 作成時にすぐにスキャンします。以降のスキャンはスケジュールに従います。 |
   | **Notify to** | スキャン成功後に通知するメール受信者を選択します。 |

   [![スキャンターゲットを設定する](/img/migrated/image-1690784465895-e0028c0b.bin)](/img/migrated/image-1690784465895-e0028c0b.bin)

   **Advanced settings** を有効にすると、より詳細なスキャン設定が可能です。

   **Website** ターゲットの場合、以下の追加フィールドが使用できます：

   | フィールド | 説明 |
   |---|---|
   | **Exclude URLs** | スキャン中にスキップするパスの一覧。 |
   | **Custom Header** | スキャン中に認証セッションを維持するためのカスタムヘッダーを設定します。[Webサイトのヘッダーを取得する](/ja/docs/fpt-security/fpt-cloud-va/tutorials/manage-target/lay-header)を参照してください。 |
   | **Custom Cookies** | スキャン中に認証セッションを維持するためのカスタムクッキーを設定します。[Webサイトのクッキーを取得する](/ja/docs/fpt-security/fpt-cloud-va/tutorials/manage-target/lay-cookie)を参照してください。 |
   | **Login using your account** | ログイン認証情報を設定します：**None**、**Basic authentication**、または **Login form**。 |

   **Network** ターゲットの場合、以下の追加フィールドが使用できます：

   | フィールド | 説明 |
   |---|---|
   | **Port list** | チェックするサービスポートのセット。 |
   | **Excluded IP** | スキャン中にスキップするIPアドレスの一覧。 |
   | **Alive test** | ネットワーク上にデバイスが存在するかどうかを判断する方法：**Default**、**Custom**、または **Consider Alive**。 |
   | **Authenticate scan** | 認証スキャン用のログイン設定：**None**、**SSH**、または **SMB**。SMBについては[WindowsでRemote Registryを有効にする](/ja/docs/fpt-security/fpt-cloud-va/tutorials/manage-target/mo-remote-registry-window)を参照してください。 |
   | **Monitor** | デバイスのステータスとサービスポートのステータスを監視して異常を検出します。 |

   :::warning
   宣言したURLに対してお客様は全責任を負います。自身が所有するURLのみをスキャンしてください。ログインが必要なターゲットをより深くスキャンするには、適切な認証方法を設定してください。
   :::

3. **Create** をクリックしてターゲットを初期化します。システムはリソースを検証し、指定された設定に基づいてスキャンを処理します。

   作成が完了すると、新しいターゲットが管理ダッシュボードに以下の情報と共に表示されます：

   - **Name**：ターゲット名。
   - **Scanning type**：スキャンタイプ。
   - **Scanning status**：最新スキャンのステータス。
   - **Detected risk**：最新スキャンで検出されたリスクの数。
   - **Last scanned**：最新スキャンの日時。
