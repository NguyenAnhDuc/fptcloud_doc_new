---
id: "restore-file-and-folder-for-linux"
title: "Restore File and Folder for Linux"
description: "**ステップ 1:** Linux サーバー上で veeam コマンドを入力して backup 管理インターフェースを起動します。"
sidebar_label: "Restore File and Folder for Linux"
sidebar_position: 3
---

# Restore File and Folder for Linux

**ステップ 1:** Linux サーバー上で `veeam` コマンドを入力して backup 管理インターフェースを起動します。

[![file](/img/migrated/image-1695293630461-653a169c.png)](/img/migrated/image-1695293630461-653a169c.png)

**ステップ 2:** R キーを押します。

[![file](/img/migrated/image-1695293640386-6b890987.png)](/img/migrated/image-1695293640386-6b890987.png)

Tab キーを使用して移動し、restore したい時点を選択します。

**ステップ 3:** 必要に応じてネットワークを設定します。

restore 用に起動した VM が DHCP のネットワークを追加している場合は、Configure network は不要なのでこのステップ 3 をスキップできます。それ以外の場合は「Configure network」をクリックして restore VM に静的 IP を設定する必要があります。注意: この VM の IP はインターネット、または baas-sgn-gw.fptcloud.com (HCM サイト) および baas-han-gw.fptcloud.com のポート 6180 への接続が許可されている必要があります。 [![file](/img/migrated/image-1695293652239-c8d98b0c.png)](/img/migrated/image-1695293652239-c8d98b0c.png) edit a connection を選択して restore VM に手動で IP を設定します。 [![file](/img/migrated/image-1695294368455-b227ce55.png)](/img/migrated/image-1695294368455-b227ce55.png) Edit を選択して VM の IP を設定します。 [![file](/img/migrated/image-1695294377573-3f399b0e.png)](/img/migrated/image-1695294377573-3f399b0e.png) IPv4 Configuration を選択してから Manual モード -> Show を選択して IP を設定します。 [![file](/img/migrated/image-1695294387294-1b721428.png)](/img/migrated/image-1695294387294-1b721428.png) IP の設定が完了したら OK を選択し、ESC を押してメイン画面に戻り、restore を実行します。

**ステップ 4:** I キーを押して、restore が必要なデータが含まれるパーティションをサーバーにマウントします。データは /mnt/backup のパスにマウントされます。

[![file](/img/migrated/image-1695293662668-59e66199.png)](/img/migrated/image-1695293662668-59e66199.png)

**ステップ 5:** /mnt/backup ディレクトリに移動します。

restore が必要な場所にファイルまたはフォルダーをコピーします。

[![file](/img/migrated/image-1695293675138-d1e922a0.png)](/img/migrated/image-1695293675138-d1e922a0.png)

**ステップ 6:** ファイルまたはフォルダーの restore が完了したら、Veeam ソフトウェアに戻り、U キーを押して restore を終了します。

[![file](/img/migrated/image-1695293683941-a9d86933.png)](/img/migrated/image-1695293683941-a9d86933.png)
