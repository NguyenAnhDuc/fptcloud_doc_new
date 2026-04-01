---
id: "clone-bucket-data"
title: "異なる bucket 間でのデータのクローン"
description: "Rclone または s3sync を使用して異なる bucket 間でデータをクローンする手順です。"
sidebar_label: "bucket 間のデータクローン"
sidebar_position: 18
---

# 異なる bucket 間でのデータのクローン

他のプロバイダーから FPT Smart Cloud の S3 に移行する場合、または 2 つの S3 環境を並行して使用する場合、**Rclone** または **s3sync** ツールを使用してデータのクローンプロセスをより便利に実行できます。

例えば S3 Site01 を使用していて S3 Site02 に移行し、Site01 の bucket から Site02 にデータをクローンしたい場合、以下の手順で実行します。

## Linux での bucket データのクローン

1. **Rclone** ツールをダウンロードしてインストールします。

```bash
sudo apt-get install rclone
```

2. Site01 と Site02 の情報を含む rclone フォルダーを作成するために、`~/.config/rclone/rclone.conf` の rclone.conf ファイルを作成し、以下の内容で編集します。

（provider 項目は使用する S3 環境に応じて AWS などに変更できます）

```ini
[site01]
type = s3
provider = Other
env_auth = false
access_key_id = 00d4701ee34ab6a0967b
secret_access_key = SevRaN+gCPbIC6VvUjXx74mhHkbg0ZuQTFpmYTsa
endpoint = https://s3-sgn09.fptcloud.com/
acl = private

[site02]
type = s3
provider = Other
env_auth = false
access_key_id = XRRS541KWS8T9DMDRCFY
secret_access_key = gknj5RPmgifmr4Bc90euHF8GIaZEY7xJD6bVDm7D
endpoint = https://s3-hfx03.fptcloud.com/
acl = private
```

結果:

[![User guide FPT Object Storage 64](/img/migrated/User-guide-FPT-Object-Storage-64-c2814219.png)](/img/migrated/User-guide-FPT-Object-Storage-64-c2814219.png)

3. Site02 でデータを含まない新しい bucket を作成します。

4. **Rclone** を通じて 2 つのサイトの bucket とデータを確認します。

[![User guide FPT Object Storage 65](/img/migrated/User-guide-FPT-Object-Storage-65-b14d85c8.png)](/img/migrated/User-guide-FPT-Object-Storage-65-b14d85c8.png)

5. `--dry-run` オプションでコマンドを実行してクローンプロセス中にエラーがないことを確認します。

```bash
rclone sync -Pv site01:bucket-site01 site02:bucket-site02 --dry-run
```

[![User guide FPT Object Storage 66](/img/migrated/User-guide-FPT-Object-Storage-66-e6bdef85.png)](/img/migrated/User-guide-FPT-Object-Storage-66-e6bdef85.png)

`--dry-run` オプションでエラーが表示されなければ、`--dry-run` オプションを除いてコマンドを実行します。

```bash
rclone sync -Pv site01:bucket-site01 site02:bucket-site02
```

[![User guide FPT Object Storage 67](/img/migrated/User-guide-FPT-Object-Storage-67-c8f6524d.png)](/img/migrated/User-guide-FPT-Object-Storage-67-c8f6524d.png)

実行成功後、rclone を通じて 2 つのサイトのデータと bucket を確認できます。

[![User guide FPT Object Storage 68](/img/migrated/User-guide-FPT-Object-Storage-68-50fda7a1.png)](/img/migrated/User-guide-FPT-Object-Storage-68-50fda7a1.png)
