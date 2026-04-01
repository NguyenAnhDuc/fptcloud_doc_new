---
id: "mount-bucket-local"
title: "ローカルマシンへの bucket のマウント"
description: "Windows（TntDrive）および Linux（S3FS）を使用してローカルマシンに bucket をドライブとしてマウントする手順です。"
sidebar_label: "ローカルへの bucket マウント"
sidebar_position: 17
---

# ローカルマシンへの bucket のマウント

## Windows での bucket のマウント

**FPT Portal** や **S3 Browser** での利用に加えて、TntDrive ツールを使用して Windows 上のドライブとして **FPT Object Storage** の S3 bucket を直接利用できます。

1. **TntDrive** ツールをダウンロードしてインストールします。

2. **TntDrive** を開き、**Accounts** > **Add new account** を選択します。

[![User guide FPT Object Storage 55](/img/migrated/User-guide-FPT-Object-Storage-55-7eb6bc1c.png)](/img/migrated/User-guide-FPT-Object-Storage-55-7eb6bc1c.png)

3. **S3 Browser** を使用する際と同様の情報を入力します。

[![User guide FPT Object Storage 56](/img/migrated/User-guide-FPT-Object-Storage-56-57f8f183.png)](/img/migrated/User-guide-FPT-Object-Storage-56-57f8f183.png)

4. **TntDrive** ツールでアカウント情報を入力後、**Add New Mapped Drive** を選択します。

[![User guide FPT Object Storage 57](/img/migrated/User-guide-FPT-Object-Storage-57-0f158d91.png)](/img/migrated/User-guide-FPT-Object-Storage-57-0f158d91.png)

5. 以下の情報を設定します。
   - **Storage account:** 追加したアカウント名を選択します。
   - **Amazon S3 Bucket:** マウントする bucket を選択します。直接名前を入力するか、アイコンを選択して選べます。
   - **Mapped drive letter:** bucket とマッピングするドライブ文字を選択します。

[![User guide FPT Object Storage 58](/img/migrated/User-guide-FPT-Object-Storage-58-f37e041c.png)](/img/migrated/User-guide-FPT-Object-Storage-58-f37e041c.png)

6. **Add new drive** を選択します。**TntDrive** の画面にマウントされたドライブの状態が表示されます。

[![User guide FPT Object Storage 59](/img/migrated/User-guide-FPT-Object-Storage-59-8342cb83.png)](/img/migrated/User-guide-FPT-Object-Storage-59-8342cb83.png)

ファイルエクスプローラーで確認できます。

[![User guide FPT Object Storage 60](/img/migrated/User-guide-FPT-Object-Storage-60-c5d9eea8.png)](/img/migrated/User-guide-FPT-Object-Storage-60-c5d9eea8.png)

## Linux での bucket のマウント

このガイドでは、S3FS ツールを使用して Ubuntu 20.04 上で bucket をマウントする手順を説明します。

1. S3FS をインストールします。

```bash
sudo apt-get install s3fs
```

2. access key と Secret key を含むファイルを作成します。

```bash
echo XRRS541KWS8T9DMDRCFY:gknj5Rpmgifmr4Bc90euHF8GIaZEY7xJD6bVDm7D > s3-password
chmod 600 s3-password
```

[![User guide FPT Object Storage 61](/img/migrated/User-guide-FPT-Object-Storage-61-10af958f.png)](/img/migrated/User-guide-FPT-Object-Storage-61-10af958f.png)

3. マウントディレクトリを作成します。

```bash
mkdir /mnt/bucket-01
```

4. fstab でマウントを実行します。

```bash
echo bucket-01 /mnt/bucket-01 fuse.s3fs _netdev,allow_other,passwd_file=/root/s3-password,use_path_request_style,nonempty,uid=0,gid=0,use_cache=/tmp,dbglevel=info,curldbg,url=https://s3-hfx03.fptcloud.com 0 0 >> /etc/fstab
```

結果:

[![User guide FPT Object Storage 62](/img/migrated/User-guide-FPT-Object-Storage-62-ee682ee3.png)](/img/migrated/User-guide-FPT-Object-Storage-62-ee682ee3.png)

5. bucket をマウントします。

```bash
mount -a
```

[![User guide FPT Object Storage 63](/img/migrated/User-guide-FPT-Object-Storage-63-37afcc4b.png)](/img/migrated/User-guide-FPT-Object-Storage-63-37afcc4b.png)
