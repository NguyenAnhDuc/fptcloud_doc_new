---
id: "tutorials-khoi-tao-mot-may-ao-moi"
title: "新しい仮想マシンの作成"
description: "FPT Cloud Serverで新しい仮想マシンを作成するための詳細手順。"
sidebar_label: "新しい仮想マシンの作成"
sidebar_position: 11
---

# 新しい仮想マシンの作成

FPT Cloud Serverで新しい仮想マシンを作成するためのステップバイステップガイドです — Instance Type、Image、Storage、Network、Authenticationの各設定を含みます。

## 前提条件

- ✅ [初期設定](./Initial-Setup.md)が完了していること。
- ✅ VPC内にアクティブなSubnetが存在すること。

## 仮想マシンの作成

1. メニューから **Compute Engine** → **Instance Management** を選択し、**Create instance** をクリックします。

   [![Instance Managementの画面](/img/migrated/Screenshot_19-1024x464-45a4bfd7.png)](/img/migrated/Screenshot_19-1024x464-45a4bfd7.png)

2. 仮想マシンを設定します：
   - **Instance Type**: **General**（基本用途）または **GPU**（高性能、Machine Learning）を選択。
   - **Image**: 適切なOSを選択。ISOファイルのアップロードや既存テンプレートからの作成も可能。
   - **Resource type**: CPU・RAMの構成を選択するか、カスタム構成を作成。
   - **Storage**: **Storage Policy**（ストレージの種類）と **Size**（サイズ）を選択。
   - **Instance group** *(任意)*: 物理ホスト上での仮想マシンの配置位置を設定。
   - **Subnet** と **Private IP**: 仮想マシンのネットワークを選択。Private IPを手動入力するか、自動割り当てにすることも可能。
   - **Security Group** *(任意)*: トラフィックを制御するSecurity Groupを選択。
   - **インスタンス名**: 仮想マシン名を入力 — これがホスト名にもなります。
   - **Authentication type**: **SSH Key** または **Standard**（パスワード）を選択。
   - **User data** *(任意)*: 起動時に自動設定を行う [cloud-initスクリプト](https://cloudinit.readthedocs.io/en/latest/reference/examples.html) を含みます。

   [![Create instanceダイアログ](/img/migrated/Screenshot_20-1-1024x546-bf37ac18.png)](/img/migrated/Screenshot_20-1-1024x546-bf37ac18.png)

   [![NetworkとAuthenticationの設定](/img/migrated/Screenshot_21-1-1024x676-96e3971b.png)](/img/migrated/Screenshot_21-1-1024x676-96e3971b.png)

   [![Advanced設定](/img/migrated/Screenshot_22-1-1024x537-9a27a8d4.png)](/img/migrated/Screenshot_22-1-1024x537-9a27a8d4.png)

**Linux用cloud-initスクリプトのサンプル：**

```yaml
#cloud-config
users:
- name: testcloudinit
  sudo: ALL=(ALL) NOPASSWD:ALL
  lock_passwd: false
  shell: /bin/bash
  passwd: $6$rounds=4096$V6anciWl30$xKbcljqks1gUkMiM80pyKzhvyhn7U1n.jXcGCUfkUlX.rnllUWKUrmDEzekhhhP8aERSylRuC7gfDhJ32Xv0A1
- name: testcloudinit2
  groups: sudo
  lock_passwd: false
  shell: /bin/bash
  plain_text_passwd: abc@123Abc123
- hostname: testcloudinit
```

**Windows用cloud-initスクリプトのサンプル：**

```yaml
#cloud-config
users:
- name: testcloudinit
  primary_group: Administrators
  groups: Administrators
  passwd: abc@123Abc123
```

:::note
Windowsで作成した仮想マシンは、cloud-initスクリプトを実行するために再起動が必要です。
:::

3. **Create Instance** をクリックします。

   [![Instanceの作成確認](/img/migrated/Screenshot_24-1-1024x656-a594dc63.png)](/img/migrated/Screenshot_24-1-1024x656-a594dc63.png)

新しい仮想マシンが管理画面に表示され、名前、構成、IPアドレス、ステータスが確認できます。

[![Instance作成後の一覧](/img/migrated/Screenshot_25-1024x522-c45b80c7.png)](/img/migrated/Screenshot_25-1024x522-c45b80c7.png)

## 次のステップ

- [ISOファイルからの仮想マシン作成に関する注意事項](./create-vm-iso.md)
- [Windows仮想マシンへの接続](./tutorials-ket-noi-vao-may-ao-windows.md)
- [Linux仮想マシンへの接続](./tutorials-ket-noi-vao-may-ao-linux.md)
