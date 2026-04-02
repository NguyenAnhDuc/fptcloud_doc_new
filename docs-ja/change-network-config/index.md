---
id: "change-network-config"
title: "ネットワーク設定の変更"
description: "FPT Smart CloudでNIC設定を変更した後、静的IPアドレスを手動で更新するガイドです。"
sidebar_label: "ネットワーク設定の変更"
sidebar_position: 1
---

# ネットワーク設定の変更

FPT Smart CloudでNIC設定を変更した場合、インスタンス内部のIPアドレスは自動的に更新されません。オペレーティングシステム内で新しい静的IPアドレスを手動で設定する必要があります。

## 概要

固定サーバーアドレスの設定や社内ネットワークのIPレンジ管理など、静的IPを設定する理由はさまざまです。

:::caution
静的IPの設定はTCP/IPの基本知識が必要な高度なネットワーク操作です。設定が誤るとネットワークの競合や接続断が発生する可能性があります。
:::

このガイドでは、以下の3つのOSでの静的IP更新手順を説明します。

- Ubuntu Server
- Windows Server
- CentOS
