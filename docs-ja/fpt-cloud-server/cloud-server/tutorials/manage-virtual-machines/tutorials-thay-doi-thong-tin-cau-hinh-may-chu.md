---
id: "tutorials-thay-doi-thong-tin-cau-hinh-may-chu"
title: "Tutorials Thay Doi Thong Tin Cau Hinh May Chu"
sidebar_label: "サーバー設定の変更"
sidebar_position: 8
---

サーバー情報および設定の変更


## 1\. Resize
**Resize**は、既存の仮想マシンのRAMとCPU設定を変更する機能です。

Resizeの処理中、仮想マシンは一時的にシャットダウンされ、処理完了後に自動的に再起動されます。

将来のResizeで仮想マシンをシャットダウンしたくない場合は、**Hot-add**機能を有効にしてください。**Hot-add**が有効になっている場合、仮想マシンは再起動せずに新しい設定で通常通り動作し続けることができます。

**ステップ1**: メニューで**Instance Management**を選択します。設定を変更するサーバーの**Actions**セクションで、**Resize VM**を選択します。

![Userguide FPT Cloud Server 2022 41](/img/migrated/docs-ja-cloud-server/tutorials-thay-doi-thong-tin-cau-hinh-may-chu/img-001.png)

**ステップ2**: 仮想マシンの新しいサイズを選択します。利用可能なテンプレートから選択するか、**Custom**でカスタム設定を定義できます。

![Userguide FPT Cloud Server 2022 42](/img/migrated/docs-ja-cloud-server/tutorials-thay-doi-thong-tin-cau-hinh-may-chu/img-002.png)

情報を入力した後、**Resize**をクリックして確認します。

システムは利用可能なリソースを確認し、仮想マシンに新しい設定を適用して、処理結果をお知らせします。

### 2\. Rename
ユーザーは**Rename**機能を使用して、既存の仮想マシンの名前を変更できます。

**ステップ1**: メニューで**Instance Management**を選択します。名前を変更するサーバーの**Actions**セクションで、**Rename**を選択します。

![Userguide FPT Cloud Server 2022 43](/img/migrated/docs-ja-cloud-server/tutorials-thay-doi-thong-tin-cau-hinh-may-chu/img-003.png)

**ステップ2:** 仮想マシンの新しい名前を入力し、**Rename**をクリックします。

![Userguide FPT Cloud Server 2022 44](/img/migrated/docs-ja-cloud-server/tutorials-thay-doi-thong-tin-cau-hinh-may-chu/img-004.png)

システムは仮想マシンに新しい名前を適用し、処理結果をお知らせします。

## 3\. Reset Password
認証方式として**Password**を使用して作成された仮想マシンについて、**FPT Cloud**では**FPT Portal**上で直接**root**アカウントの**パスワード**をリセットできます。

**ステップ1**: メニューで**Instance Management**を選択します。パスワードを変更するサーバーの**Actions**セクションで、**Reset Password**を選択します。

![Userguide FPT Cloud Server 2022 45](/img/migrated/docs-ja-cloud-server/tutorials-thay-doi-thong-tin-cau-hinh-may-chu/img-005.png)

**ステップ2:** **Reset Password**をクリックします。システムはユーザーのメールアドレスに新しいパスワードを送信します。
