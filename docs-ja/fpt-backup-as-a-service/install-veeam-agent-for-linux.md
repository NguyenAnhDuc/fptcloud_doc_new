---
id: "install-veeam-agent-for-linux"
title: "Install Veeam Agent for Linux"
description: "**ステップ 1:** backup が必要なサーバー上で、ご自身のアカウントでポータルサイトにログインします。"
sidebar_label: "Install Veeam Agent for Linux"
sidebar_position: 3
---

# Install Veeam Agent for Linux

**ステップ 1:** backup が必要なサーバー上で、ご自身のアカウントでポータルサイトにログインします。

Backup as a Service: <https://baas.fptcloud.com>

[![file](/img/migrated/image-1695290664395-24434403.png)](/img/migrated/image-1695290664395-24434403.png)

ログイン成功後の管理画面は以下のとおりです。

[![file](/img/migrated/image-1695290688881-d34bc29d.png)](/img/migrated/image-1695290688881-d34bc29d.png)

**ステップ 2:** **Managed Computers** メニューから **Download Agent** を選択し、**Linux** を選択します。

[![file](/img/migrated/image-1695290710281-8dee543b.png)](/img/migrated/image-1695290710281-8dee543b.png)

必要に応じて Token の有効期限を変更します。デフォルトは 12 ヶ月です。

[![file](/img/migrated/image-1695290727809-1b6f23f5.png)](/img/migrated/image-1695290727809-1b6f23f5.png)

**ステップ 3:** LinuxAgentPackages.sh ファイルのダウンロードが完了したら、サーバーにコピーしてインストールを実行します。

以下のコマンドを実行します。

```
sudo chmod +x LinuxAgentPackages.sh  
sudo ./LinuxAgentPackages.sh  
```

[![file](/img/migrated/image-1695290745234-3e4654e1.png)](/img/migrated/image-1695290745234-3e4654e1.png)

**ステップ 4:** スクリプトが正常に実行されると、Veeam が自動的に Veeam Agent をインストールします。

以下のコマンドで接続状態を確認します。

```
veeamconsoleconfig -s
```

[![file](/img/migrated/image-1695290759883-5ebe5284.png)](/img/migrated/image-1695290759883-5ebe5284.png)

**ステップ 5:** インストールが正常に完了したことを確認します。

[![file](/img/migrated/image-1695290772560-933364fa.png)](/img/migrated/image-1695290772560-933364fa.png)

Backup Job メニューに backup job が表示されていることを確認します。

[![file](/img/migrated/image-1695290783350-f99963d4.png)](/img/migrated/image-1695290783350-f99963d4.png)
