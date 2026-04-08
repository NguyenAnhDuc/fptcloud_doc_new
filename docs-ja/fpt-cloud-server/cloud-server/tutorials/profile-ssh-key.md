---
id: "profile-ssh-key"
title: "Profile Ssh Key"
sidebar_label: "SSH Key"
sidebar_position: 5
---

SSH Keyプロファイル


### 1\. SSH Keyプロファイルの作成/インポート
**ステップ1:** メニューから**Compute Engine** > **SSH Management**を選択します。**Import SSH key**を選択します。

![file](/img/migrated/docs-ja-cloud-server/profile-ssh-key/img-001.png)

**ステップ2:** SSH Keyの作成に必要な情報を入力します：

  * **Name:** SSH Keyの名前。
  * **Public Key**: システムがPrivate Keyを生成するために使用するPublic Key。すでにPublic Keyをお持ちの場合は、Public Keyフィールドに入力してください。お持ちでない場合は、**Generate new key pair**を選択します。システムが有効な**Public Key**を自動的に生成します。


現在サポートされているSSH keyの形式：'ssh-rsa'、'ecdsa-sha2-nistp256'、'ecdsa-sha2-nistp384'、'ecdsa-sha2-nistp521'、'ssh-ed25519'。

**ステップ3:** すべての情報を入力したら、**Save**をクリックします。システムは**SSH Key**ペアを作成し、**< >.pem**形式のキーファイルを自動的にダウンロードします。

**注意:** Private Keyファイル**< >.pem**はステップ3で一度だけ提供されます。サーバーへのアクセスを失わないよう、安全な場所に保管してください。

### 2\. SSH Keyプロファイルの詳細表示
ユーザーは**Manage SSH Key Profiles**から、**VPC**内で作成したすべての**SSH Keyプロファイル**を確認できます。

![Userguide FPT Cloud Server 2022 80](/img/migrated/docs-ja-cloud-server/profile-ssh-key/img-002.png)

特定の**SSH Keyプロファイル**を選択すると、システムは**Name**と**Public Key**を表示します。

![file](/img/migrated/docs-ja-cloud-server/profile-ssh-key/img-003.png)

### 3\. SSH Keyプロファイルの削除
**Manage SSH Key Profiles**から**SSH Keyプロファイル**を削除するには、次の手順を実行します：

**ステップ1:** 削除する**SSH Keyプロファイル**を選択し、**Detail**ポップアップを開きます。

![Userguide FPT Cloud Server 2022 82](/img/migrated/docs-ja-cloud-server/profile-ssh-key/img-004.png)

**ステップ2:** **削除**アイコンをクリックします。システムはすぐに**SSH Keyプロファイル**を削除し、処理結果を表示します。

![file](/img/migrated/docs-ja-cloud-server/profile-ssh-key/img-005.png)

**注意:** この操作は**Manage SSH Key Profiles**から**SSH Keyプロファイル**を削除するだけです。この**SSH Key**を使用して作成された仮想マシンには影響しません。ユーザーは以前にダウンロードした**Private Key**ファイルを引き続き使用して仮想マシンに接続できます。
