---
id: "restore-window-vm-from-cloud-repository"
title: "Restore Window vm From Cloud Repository"
description: "**ステップ 1:** Veeam recovery media の ISO ファイルをアタッチし、ISO ファイルから VM を起動します（VM のディスク数とディスク容量が同じである必要があります）。"
sidebar_label: "Restore Window vm From Cloud Repository"
sidebar_position: 5
---

# Restore Window vm From Cloud Repository

**ステップ 1:** Veeam recovery media の ISO ファイルをアタッチし、ISO ファイルから VM を起動します（VM のディスク数とディスク容量が同じである必要があります）。VM が正常に起動した後のコンソール画面が表示されます。

Bare Metal Recovery を選択します。

**ステップ 2:** Network storage を選択してから Next をクリックします。

Veeam Cloud Connect repository を選択します。

**ステップ 3:** BaaS の URL を入力します。ホーチミン市サイトの場合は baas-sgn-gw.fptcloud.com、ハノイサイトの場合は baas-han-gw.fptcloud.com を入力します。

**ステップ 4:** ご自身のユーザー名とパスワードを入力します。その後、Enter を押して続けます。

**ステップ 5:** restore が必要な VM と希望する restore ポイントを選択します。

**ステップ 6:** Manual restore を選択して対応するディスクをマッピングします。

対応するディスクを restore します。

**ステップ 7:** 情報を確認し、Restore を選択して VM の復旧を実行します。
