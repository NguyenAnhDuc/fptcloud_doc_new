---
id: "restore-linux-vm-from-cloud-repository"
title: "Restore Linux vm From Cloud Repository"
description: "**ステップ 1:** Linux VM を restore するには、VEEAM の公式サイトから Veeam recovery media の ISO ファイルをダウンロードする必要があります。"
sidebar_label: "Restore Linux vm From Cloud Repository"
sidebar_position: 8
---

# Restore Linux vm From Cloud Repository

**ステップ 1:** Linux VM を restore するには、VEEAM の公式サイトから Veeam recovery media の ISO ファイルをダウンロードする必要があります。restore が必要な VM の OS に対応した ISO ファイルをダウンロードします。 [![file](/img/migrated/image-1695294618113-7017717b.png)](/img/migrated/image-1695294618113-7017717b.png)

**ステップ 2:** VM を再起動し、Veeam recovery media の ISO から起動します。利用規約に同意してから続けます。 [![file](/img/migrated/image-1695294644895-2a9750be.png)](/img/migrated/image-1695294644895-2a9750be.png)

**ステップ 3:** 必要に応じてネットワークを設定します。restore 用に起動した VM が DHCP のネットワークを追加している場合は、Configure network は不要なのでこのステップ 3 をスキップできます。それ以外の場合は「Configure network」をクリックして restore VM に静的 IP を設定する必要があります。注意: この VM の IP はインターネット、または baas-sgn-gw.fptcloud.com (HCM サイト) および baas-han-gw.fptcloud.com のポート 6180 への接続が許可されている必要があります。 [![file](/img/migrated/image-1695294671316-44391ccf.png)](/img/migrated/image-1695294671316-44391ccf.png) edit a connection を選択して restore VM に手動で IP を設定します。 [![file](/img/migrated/image-1695294681820-3a5125db.png)](/img/migrated/image-1695294681820-3a5125db.png) Edit を選択して VM の IP を設定します。 [![file](/img/migrated/image-1695294692535-3e2748f0.png)](/img/migrated/image-1695294692535-3e2748f0.png) IPv4 Configuration を選択してから Manual モード -> Show を選択して IP を設定します。 [![file](/img/migrated/image-1695294702919-9bc47e74.png)](/img/migrated/image-1695294702919-9bc47e74.png) IP の設定が完了したら OK を選択し、ESC を押してメイン画面に戻り、restore を実行します。 [![file](/img/migrated/image-1695294720487-cfae6dc7.png)](/img/migrated/image-1695294720487-cfae6dc7.png)

**ステップ 4:** Add Cloud provider を選択します。 [![file](/img/migrated/image-1695294739863-99ac30bf.png)](/img/migrated/image-1695294739863-99ac30bf.png)

**ステップ 5:** BaaS の gateway URL を入力します。baas-sgn-gw.fptcloud.com (HCM サイト) または baas-han-gw.fptcloud.com (ハノイサイト) [![file](/img/migrated/image-1695294750751-e258de28.png)](/img/migrated/image-1695294750751-e258de28.png)

**ステップ 6:** ご自身のユーザー名とパスワードを入力します。その後、Enter を押して続けます。 [![file](/img/migrated/image-1695294761178-6db27dc0.png)](/img/migrated/image-1695294761178-6db27dc0.png)

**ステップ 7:** 希望する backup job 名と restore ポイントを選択します。 [![file](/img/migrated/image-1695294772745-817c2f15.png)](/img/migrated/image-1695294772745-817c2f15.png)

**ステップ 8:** 対応するディスクをマッピングします。 [![file](/img/migrated/image-1695294786115-e28a2a8c.png)](/img/migrated/image-1695294786115-e28a2a8c.png) 対応するディスクを restore します。 [![file](/img/migrated/image-1695294797487-07dc8c7b.png)](/img/migrated/image-1695294797487-07dc8c7b.png) [![file](/img/migrated/image-1695294806424-3d68dddb.png)](/img/migrated/image-1695294806424-3d68dddb.png) [![file](/img/migrated/image-1695294815857-68eb070f.png)](/img/migrated/image-1695294815857-68eb070f.png)

**ステップ 9:** S キーを押して restore を開始します。 [![file](/img/migrated/image-1695294824016-efac8f85.png)](/img/migrated/image-1695294824016-efac8f85.png)
