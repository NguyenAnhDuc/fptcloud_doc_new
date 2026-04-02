---
id: "vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server"
title: "Baremetal (GPU Server) での File Storage – High Performance の利用"
description: "ベトナムリージョンの Baremetal GPU サーバーで File Storage – High Performance をマウントする手順。"
sidebar_label: "Baremetal (GPU Server) での利用"
sidebar_position: 5
---

# Baremetal (GPU Server) での File Storage – High Performance の利用

## 1. 概要

サービス割り当てリクエストが承認されると、Baremetal で File Storage を利用するための情報が提供されます。

重要な注意事項:

- サブネットごとに異なるエンドポイントが割り当てられます。マウント前に提供された情報を注意深く確認して、設定エラーを防いでください。

## 2. 利用手順

### A. FPT AI FACTORY イメージを使用する場合

**ステップ 1: OS 上でマウントポイントを作成する**

```bash
mkdir /mnt/hps
```

**ステップ 2: ファイルシステムをマウントする**

エンドポイント `10.101.33.1` を提供されたエンドポイントに置き換えてください。

**TCP 経由で VAST NFS をマウント**

```bash
mount -o proto=tcp,vers=3 10.101.33.1:/test /mnt/hps
mount -o proto=tcp,vers=3,nconnect=64 10.101.33.1:/mountpoint /mnt/hps
```

**RDMA 経由で VAST NFS をマウント**

```bash
mount -o proto=rdma,port=20049,vers=3 10.101.33.1:/mountpoint /mnt/hps
mount -o proto=rdma,port=20049,nconnect=64,vers=3 10.101.33.1:/mountpoint /mnt/hps
```

**Multi-Path RDMA でマウント**

```bash
sudo mount -v -o vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 10.101.33.1:/test /mnt/hps
```

**ステップ 3: 再起動時の自動マウントを設定する**

`/etc/fstab` を編集します。

```
# /etc/fstab に以下のエントリを追加
10.101.33.1:/test /mnt/hps nfs vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 0 0
```

設定にエラーがないか確認するには以下を実行します。

```bash
mount -a
```

### B. カスタム Ubuntu OS を使用する場合

カスタムイメージを使用する場合は、以下の手順で VAST Client をインストールする必要があります。

**ステップ 1: VAST NFS Client をインストールする**

```bash
apt update && apt install -y nfs-common dpkg-dev autotools-dev debhelper curl
curl -sSf https://s3-sgn10.fptcloud.com/file-storage-resource/download.sh | bash -s
tar xvf vastnfs-*.tar.xz
cd vastnfs-*/
./build.sh bin
sudo apt install ./dist/*.deb
sudo depmod -a
sudo update-initramfs -u -k $(uname -r)
sudo apt update
sudo apt install nfs-common -y
sudo reboot
```

**ステップ 2: OS 上でマウントポイントを作成する**

```bash
mkdir /mnt/hps
```

**ステップ 3: ファイルシステムをマウントする**

エンドポイント `10.101.33.1` を提供されたエンドポイントに置き換えてください。

**TCP 経由で VAST NFS をマウント**

```bash
mount -o proto=tcp,vers=3 10.101.33.1:/test /mnt/hps
mount -o proto=tcp,vers=3,nconnect=64 10.101.33.1:/mountpoint /mnt/hps
```

**RDMA 経由で VAST NFS をマウント**

```bash
mount -o proto=rdma,port=20049,vers=3 10.101.33.1:/mountpoint /mnt/hps
mount -o proto=rdma,port=20049,nconnect=64,vers=3 10.101.33.1:/mountpoint /mnt/hps
```

**Multi-Path RDMA でマウント**

```bash
sudo mount -v -o vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 10.101.33.1:/test /mnt/hps
```

**ステップ 4: 再起動時の自動マウントを設定する**

`/etc/fstab` を編集します。

```
## LustreFS ##
# /etc/fstab に以下のエントリを追加
10.101.33.1:/test /mnt/hps nfs vers=3,proto=rdma,port=20049,spread_reads,spread_writes,nconnect=64,localports=10.101.32.41,remoteports=10.101.33.1-10.101.33.64 0 0
```

設定にエラーがないか確認するには以下を実行します。

```bash
mount -a
```
