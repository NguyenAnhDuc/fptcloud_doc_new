---
id: "tutorials-integrate-fpt-object-storage-with-s3-client"
title: "FPT Object Storage と S3 クライアントの統合"
description: "S3CMD、Cyberduck、AWS CLI、WinSCP など各種 S3 クライアントと FPT Object Storage を統合する手順です。"
sidebar_label: "S3 クライアントとの統合"
sidebar_position: 12
---

# FPT Object Storage と S3 クライアントの統合

FPT Object Storage は AWS S3 標準に準拠する S3-SDK または S3-Client との統合をサポートしています。これにより、一般的なツールやライブラリを使用して bucket 上のデータを操作できます。

統合前に、**[access key の管理](./manage-access-keys.md)** のガイドに従って FPT Object Storage から endpoint と access key を収集してください。

## S3CMD（Unix/Linux）

**S3CMD** は Linux/Unix 向けのコマンドラインツールで、FPT Object Storage または AWS S3 上のデータを管理できます。ファイルやディレクトリのアップロード・ダウンロード・管理が可能です。

### A. インストール

**CentOS/RHEL:**

```bash
sudo yum install s3cmd -y
```

**Ubuntu/Debian:**

```bash
sudo apt-get install s3cmd
```

**MacOS:**

```bash
brew install s3cmd
```

その他の OS については S3CMD の公式サイトを参照してください: <https://s3tools.org/download>

### B. 設定

1. ターミナルを開き、以下のコマンドを実行して設定を開始します。

```bash
s3cmd --configure
```

2. 以下の情報を入力します。
   - **access key:** FPT Portal から取得した access key。
   - **Secret Key:** FPT Portal から取得した Secret Key。
   - **Default Region:** FPT Portal から取得します。
   - **S3 Endpoint:** FPT Portal から取得した endpoint（"https://" を除く）。例: `s3-sgn09.fptcloud.com`
   - **DNS-style bucket+hostname:** 空白のまま。
   - **Encryption password:** 空白のまま。
   - **Use HTTPS protocol:** Yes を選択。
   - **HTTP Proxy server name:** 空白のまま。

正しい情報を入力すると、S3CMD が自動的に設定ファイルに保存します。

`~/.s3cfg` ファイルを作成または編集して独自の設定ファイルを作ることもできます。設定ファイルの例:

```ini
[default]
access_key = YOUR_ACCESS_KEY
secret_key = YOUR_SECRET_KEY
bucket_location = YOUR_BUCKET_LOCATION
host_base = YOUR_S3_ENDPOINT
host_bucket = YOUR_S3_ENDPOINT
use_https = True
signature_v2 = False
```

3. 接続の確認

設定完了後、以下のコマンドで接続状態を確認して bucket 一覧を表示できます。

```bash
s3cmd ls
```

bucket 一覧が表示されれば、FPT Object Storage への接続が成功しています。

## Cyberduck（Mac および Windows）

**CyberDuck** は Mac および Windows 向けのオープンソース GUI アプリケーションで、FPT Object Storage または AWS S3 上のファイルを直接管理できます。ファイルのアップロード・ダウンロード・管理のための直感的な環境を提供します。

### A. インストール

Cyberduck の公式サイトからデバイスに適したバージョンをダウンロードしてください: <https://cyberduck.io/download>

### B. 設定

1. インストール後、Cyberduck アプリケーションを開きます。
2. メインインターフェースの **Open Connection** ボタンをクリックするか、メニューから **File** -> **Open Connection** を選択します。

[![file](/img/migrated/image-1692698326176-ef4d33a6.png)](/img/migrated/image-1692698326176-ef4d33a6.png)

3. **Open Connection** ダイアログボックスが表示されます。以下の認証情報を入力します。
   - **Protocol:** **Amazon S3** を選択します。
   - **Server:** FPT Object Storage の endpoint（https を除く）。例: `s3-sgn09.fptcloud.com`
   - **Port:** 443（HTTPS のデフォルトポート）。
   - **access key ID:** FPT Portal から取得した access key。
   - **Secret Key ID:** FPT Portal から取得した Secret Key。

[![file](/img/migrated/image-1692698347523-bab6ef92.png)](/img/migrated/image-1692698347523-bab6ef92.png)

認証情報を入力したら **Connect** をクリックして接続します。

接続成功後、Cyberduck ウィンドウに FPT Object Storage のディレクトリ構造が表示されます。

[![file](/img/migrated/image-1692698365189-9866d9f6.png)](/img/migrated/image-1692698365189-9866d9f6.png)

## AWS CLI（Linux、Mac および Windows）

### A. インストール

**Linux/Unix:**

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

**Windows:**

```
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
```

### B. 設定

インストール後、OS に応じて Command Prompt、PowerShell、またはターミナルを開きます。

以下のコマンドを入力して設定を開始します。

```bash
aws configure
```

以下の情報を順番に入力します。
- **access key ID:** FPT Portal から取得した access key。
- **Secret access key:** FPT Portal から取得した Secret Key。
- **Default region name:** FPT Portal から取得したデフォルトリージョン。
- **Default output format:** `json` と入力します。
- **S3 Endpoint:** FPT Portal から取得した endpoint（https を除く）。例: `s3-sgn09.fptcloud.com`

正しい情報を入力すると、AWS CLI が自動的に設定を保存します。

**インストールと設定の確認:**

```bash
aws --version
```

AWS CLI のバージョンが返ってくれば、インストールと設定が成功しています。

## WinSCP（Windows）

WinSCP は **Windows Secure Copy Protocol** の略で、個人コンピューターとリモートサーバー間の安全なファイル転送用の無料 Windows アプリケーションです。SFTP、SCP、FTP、AWS S3 などのプロトコルを通じたファイル管理・転送を直感的なインターフェースで行えます。

### A. インストール

WinSCP の公式サイトからダウンロードしてインストールしてください: <https://winscp.net/eng/download.php>

### B. 設定

1. インストール後、WinSCP アプリケーションを開きます。
2. **New Session** をクリックして新しい接続セッションの設定を開始します。

[![file](/img/migrated/image-1692698404134-52896479.png)](/img/migrated/image-1692698404134-52896479.png)

3. **Login** ウィンドウで以下の手順を実行します。
   - **File protocol:** **"Amazon S3"** を選択します。
   - **access key ID:** FPT Portal から取得した access key。
   - **Secret access key:** FPT Portal から取得した Secret Key。
   - **Host name:** FPT Portal から取得した endpoint（https を除く）。例: `s3-sgn09.fptcloud.com`
   - **Port number:** 443。

[![file](/img/migrated/image-1692698415054-1e029ed5.png)](/img/migrated/image-1692698415054-1e029ed5.png)

4. **Save** をクリックして設定を保存し、**Login** をクリックして接続します。

接続成功後、WinSCP ウィンドウに FPT Object Storage の bucket 一覧が表示されます。

## S3sync ツール（FreeBSD、Linux、OpenBSD、MacOS）

s3sync は S3 プロトコルを使用するクラウドストレージサービス（Amazon S3、FPT Object Storage など）との間でファイルを管理・同期するオープンソースツールです。ファイルのアップロード・ダウンロードおよび異なるクラウドストレージサービスの bucket 間の同期操作を実行できます。

### A. インストール

プロジェクトのリンクからダウンロードしてインストールしてください: <https://github.com/larrabee/s3sync/releases>

### B. 設定

ツールが動作するために、実行コマンドに認証情報を渡す必要があります。

基本パラメーター:
- **sk:** ソースの access key。
- **ss:** ソースの Secret key。
- **se:** ソースの endpoint。
- **tk:** ターゲットの access key。
- **ts:** ターゲットの Secret key。
- **te:** ターゲットの endpoint。
- **w:** 同期に使用するワーカー数。
- **sync-progress:** 同期進捗を表示します。
- **s3-acl:** アップロード時のファイル権限（private、public-read、public-read-write）。デフォルト値は private。
- **disable-http2:** クライアントの HTTP2 モードを無効にします。

**よく使用するコマンド:**

ローカルから FPT Object Storage へデータをアップロード:

```bash
./s3sync --tk <target_key> --ts <target_secret> --te "target endpoint" -w 64 fs://<local_path> s3://<bucket_name> --sync-progress --s3-acl public-read
```

FPT Object Storage からローカルへデータをダウンロード:

```bash
./s3sync --sk <source_key> --ss <source_secret> --se "source endpoint" -w 64 s3://<bucket_name> fs://<local_path> --sync-progress --disable-http2
```

ある bucket から別の bucket へデータをコピー:

```bash
./s3sync --sk <source_key> --ss <source_secret> --se "source endpoint" --tk <target_key> --ts <target_secret> --te "target endpoint" -w 64 s3://<source_bucket> s3://<target_bucket> --sync-progress --s3-acl public-read --disable-http2
```

Amazon S3 から FPT Object Storage へデータを同期:

```bash
./s3sync --sk <aws_key> --ss <aws_secret> --tk <fpt_key> --ts <fpt_secret> --te "fpt endpoint" -w 64 s3://<aws_bucket> s3://<fpt_bucket> --sync-progress --s3-acl public-read --disable-http2
```
