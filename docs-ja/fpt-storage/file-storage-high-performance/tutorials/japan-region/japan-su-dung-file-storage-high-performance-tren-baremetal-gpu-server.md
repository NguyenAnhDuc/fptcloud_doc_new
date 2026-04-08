---
id: "japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server"
title: "Baremetal (GPU Server) での File Storage – High Performance の利用 (日本リージョン)"
description: "日本リージョンの Baremetal GPU サーバーで File Storage – High Performance をマウントする手順。"
sidebar_label: "Baremetal (GPU Server) での利用 (日本)"
sidebar_position: 2
pagination_next: null
---

# Baremetal (GPU Server) での File Storage – High Performance の利用 (日本リージョン)

## 概要

File Storage – High Performance は日本リージョンの Baremetal インフラで利用可能です。利用開始するには、営業またはテクニカルサポートにお問い合わせの上、以下の情報をご提供ください。

- **必要なストレージ容量 (クォータ)**
- **接続するサブネット**

## 利用手順

### A. FPT AI FACTORY イメージを使用する場合

FPT AI FACTORY が提供するイメージを使用している場合、DDN クライアントはすでにインストール済みです。以下の手順に従ってください。

**ステップ 1: マウントディレクトリを作成する**

```bash
mkdir /mnt/hps
```

**ステップ 2: 手動マウントコマンドを実行する**

```bash
mount -t lustre 100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps
```

**ステップ 3: 再起動時の自動マウントを設定する**

`/etc/fstab` を編集します。

```
## LustreFS ##
100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps lustre flock,defaults 0 0
```

**各パラメーターの説明**

- `100.69.252.1@o2ib,...,100.69.252.8@o2ib:/scratch`
  - `100.69.252.1` ～ `100.69.252.8` は固定エンドポイント範囲です。
  - `/scratch` は Lustre サーバー上のファイルシステムパスです。
- `/mnt/hps` はクライアント上のマウントポイント（ステップ 1 で作成）です。

設定にエラーがないか確認するには以下を実行します。

```bash
mount -a
```

**ステップ 4: 確認する**

```bash
df -h -t lustre
```

期待される結果:

```
Filesystem                    Size  Used Avail Use% Mounted on
...:/scratch                 11T   8.0K   11T   1%  /mnt/hps
```

### B. カスタム Ubuntu OS を使用する場合

カスタムイメージを使用する場合は、以下の手順でパッケージをビルドしてインストールする必要があります。

**ステップ 1: Lustre Client をビルドする**

現在のカーネルで既にビルド済みの場合はスキップできます。

```bash
wget https://s3-sgn10.fptcloud.com/file-storage-resource/exa-client-6.3.2.tar.gz
tar xzvf exa-client-6.3.2.tar.gz
cd exa-client
./exa_client_deploy.py
# オプション 6 を選択して終了
# (コンパイルされたパッケージは /opt/ddn/exascaler/debs に保存されます)
```

Ubuntu カーネル `5.15.0-130-generic` を使用している場合は、以下のビルド済みパッケージをダウンロードできます。

```bash
wget https://s3-sgn10.fptcloud.com/package-pub/lustre-dev_2.14.0-ddn184-1_amd64.deb
wget https://s3-sgn10.fptcloud.com/package-pub/lustre-client-modules-5.15.0-130-generic_2.14.0-ddn184-1_amd64.deb
wget https://s3-sgn10.fptcloud.com/package-pub/lustre-client-utils_2.14.0-ddn184-1_amd64.deb
```

**ステップ 2: Lustre Client をインストールする**

```bash
sudo dpkg -i lustre-dev_2.14.0-ddn184-1_amd64.deb \
             lustre-client-modules-5.15.0-130-generic_2.14.0-ddn184-1_amd64.deb \
             lustre-client-utils_2.14.0-ddn184-1_amd64.deb
```

**ステップ 3: 設定を最適化する**

`/etc/modprobe.d/lustre.conf` を編集します。

```
options lnet networks=o2ib(bond0)
options ko2iblnd peer_credits=32 peer_credits_hiw=16 concurrent_sends=64
```

`/etc/lustre_client` を編集します。

```
# LNET Interface
IF1=bond0
IF2=none
IF3=none
IF4=none
IF5=none
IF6=none
IF7=none
IF8=none
```

**ステップ 4: マウントポイントを作成する**

```bash
mkdir /mnt/hps
```

**ステップ 5: 手動マウントコマンドを実行する**

```bash
mount -t lustre 100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps
```

**ステップ 6: 自動マウントを設定する**

`/etc/fstab` を編集します。

```
## LustreFS ##
100.69.252.1@o2ib,100.69.252.2@o2ib:100.69.252.3@o2ib,100.69.252.4@o2ib:100.69.252.5@o2ib,100.69.252.6@o2ib:100.69.252.7@o2ib,100.69.252.8@o2ib:/scratch /mnt/hps lustre flock,defaults 0 0
```

設定にエラーがないか確認するには以下を実行します。

```bash
mount -a
```

### C. VM GPU (Ubuntu OS) の場合

カスタム Ubuntu イメージを使用している場合は、以下の手順でパッケージをビルドしてください。

**1. パッケージをビルドする**

```bash
wget https://s3-sgn10.fptcloud.com/file-storage-resource/exa-client-6.3.2.tar.gz
tar xzvf exa-client-6.3.2.tar.gz
cd exa-client
./exa_client_deploy.py
# オプション 2 を選択してビルド
# 完了後、オプション 6 を選択して終了
```

**2. Lustre Client を設定する**

```
# /etc/modprobe.d/lustre.conf
options lnet networks=tcp(eth1)
options ko2iblnd peer_credits=32 peer_credits_hiw=16 concurrent_sends=64
```

```
# /etc/lustre_client
IF1=eth1
IF2=none
...
IF8=none
```

**3. マウントポイントを作成する**

```bash
mkdir /mnt/hps
```

**4. 手動マウントコマンドを実行する**

```bash
mount -t lustre 100.69.252.1@tcp,100.69.252.2@tcp:100.69.252.3@tcp,100.69.252.4@tcp:100.69.252.5@tcp,100.69.252.6@tcp:100.69.252.7@tcp,100.69.252.8@tcp:/scratch /mnt/hps
```

**5. `/etc/fstab` に Lustre マウントエントリを追加する**

```
## LustreFS ##
100.69.252.1@tcp,100.69.252.2@tcp:100.69.252.3@tcp,100.69.252.4@tcp:100.69.252.5@tcp,100.69.252.6@tcp:100.69.252.7@tcp,100.69.252.8@tcp:/scratch /mnt/hps lustre flock,defaults 0 0
```

**6. 確認する**

```bash
df -h -t lustre
```

期待される結果:

```
Filesystem                                                                       Size  Used Avail Use% Mounted on
100.69.252.1@tcp,...:/scratch   11T  8.0K   11T   1% /mnt/hps
```
