---
id: "quan-ly-security-group"
title: "Security Group管理"
description: "インスタンスへの受信・送信トラフィックを制御するSecurity Groupの作成と管理を行います。"
sidebar_label: "Security Group管理"
sidebar_position: 72
---

# Security Group管理

Security Groupは仮想ネットワークファイアウォールとして機能し、インスタンスへの受信・送信接続を制御します。DDoS攻撃やその他のインターネット上の脅威からインスタンスを保護します。

FPT Cloudは2種類をサポートしています：
- **Security Group**：インターネットとの間のトラフィックを制御します。
- **Distributed Firewall** *（Specificのみ）*：内部ネットワーク内のトラフィックを制御します。

## Security Groupの作成

1. **Security group** → **Networking** に移動し、**New Security Group** をクリックします。
2. 必要な情報を入力します：Name、Type、Subnet、Applied CIDR/instances、セキュリティルールの設定（Inbound/Outbound）。
3. **Create security group** をクリックします。

## その他のガイド

- [Security Groupのフィルター](./security-group-filter.md)
- [Priority Rule管理](./security-group-priority-rule.md)
