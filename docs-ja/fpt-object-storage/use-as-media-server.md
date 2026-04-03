---
id: "su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application"
title: "FPT Object Storage をメディアサーバーとして使用する"
description: "FPT Object Storage をウェブサイト・ウェブアプリケーション向けのメディアファイル保存・配信サーバーとして活用する方法です。"
sidebar_label: "メディアサーバーとして使用"
sidebar_position: 15
---

# FPT Object Storage をメディアサーバーとして使用する

## 概要

**FPT Object Storage** は **FPT Smart Cloud** が提供するオブジェクトデータストレージサービスで、AWS S3（Simple Storage Service）と同等のプロトコルをサポートしています。無制限のストレージ、高いセキュリティ、高可用性、手頃な価格といった特長を持ち、**FPT Object Storage** は高頻度で継続的なデータアクセスが必要なウェブサイト・ウェブアプリケーションのメディアストレージとして非常に適した選択肢です。

主なメリット:

- **ウェブサーバーのパフォーマンス向上:** FPT Object Storage でメディアファイルを保存すれば、ウェブサーバーはこれらのファイルの保存・配信を担当する必要がなくなります。リソースをより重要な他の処理に完全に割り当てられます。
- **コスト削減:** ウェブサーバー自体のストレージをメディア保存に使用する場合、大容量が必要になります。ウェブサーバーのストレージ単価は FPT Object Storage より大幅に高いことが多いです。また、ブラウザーがウェブサーバーを経由せず FPT Object Storage から直接ファイルを読み込むため、ウェブサーバーの帯域幅も節約できます。FPT Object Storage は Pay as you go モデルをサポートしており、実際に使用した分のみお支払いいただけます。
- **独立したストレージ:** アプリケーションとデータを分離します。データの中断を心配することなく、アプリケーションをどこにでも配置し、任意の環境に移行できます。例えばウェブサイトを別のサーバーに移行する場合、ウェブサイトのソースコードを新しいサーバーに移すだけで完了します。メディアの移行や、ウェブページに埋め込まれたメディアリンクの変更に時間を費やす必要がありません。
- **ウェブサイトの高速化:** メディアファイルはエンドユーザーのブラウザーが FPT Object Storage の高速データセンターから直接読み込みます。ページ読み込み時間を最小限に抑えられます。FPT Object Storage のデータセンターはハノイとホーチミン市に設置されており、国際インターネットに問題が発生した場合でも国内の速度が常に安定しています。

この記事では、WordPress を実行するウェブサイトへの FPT S3 統合の例をもとに、FPT Object Storage をメディアサーバーとして使用するソリューションの概要と手順を紹介します。

## 前提条件

- WordPress プラットフォームで構築されたウェブサイト。
- FPT Object Storage サービスを使用中であること。
  - メディアを格納するパブリック bucket が作成済みであること。
  - Object Storage サービスの endpoint と access key の情報が揃っていること。

## 概要

デフォルトでは WordPress は S3 Storage を直接使用したファイル保存をサポートしていませんが、一部のプラグインがこれを可能にします。基本的にこれらのプラグインは WordPress のデフォルトのアップロード機能をベースに動作します。WordPress がファイルのアップロードに成功した後、プラグインが **FPT Object Storage** にコピーを作成し、元のファイルを自動削除して WordPress 上のすべてのリンクを **FPT Object Storage** のリンクに置き換えます。

市場には **WP Offload Media Lite**、**MediaCloud**、**Media Library Folders Pro S3**、**W3 Total Cache** などの人気プラグインがあります。この記事では **MediaCloud** プラグインをベースに解説します（他のプラグインも操作の流れは同様です）。

基本手順:
- 新しい bucket を作成する。
- subuser アカウントを作成し、その subuser に bucket の使用権限を付与する。
- WordPress ウェブサイトにプラグインをインストールして設定する。

## ソリューション

### A. 新しい bucket の作成

bucket は S3 上の論理的なストレージ単位です。ウェブサイト全体のメディアデータを格納するための bucket を作成する必要があります。

1. FPT Portal の Object Storage Management に移動するか、使用中の S3 Client を開きます。
2. **Create Bucket** を選択し、作成する bucket 名を入力します。
3. bucket のセキュリティを設定します。デフォルトでは、キーと endpoint のペアを持つすべてのユーザーが bucket 内の object を編集または削除できます。FPT Cloud が提供する高度な機能を使用して bucket のセキュリティを強化してください。
   - **Versioning:** object の変更バージョンを自動保存します。
   - **Bucket Policy:** bucket 内のデータにアクセスできる IP を制限したり、アップロード可能なファイル拡張子を制限したりするポリシーを作成します。

### B. subuser アカウントの作成と bucket 使用権限の付与

テストまたはデモ中は管理者のキーペアを使用して接続できます。ただし長期的には FPT Cloud はこの行為を推奨しません。このキーペアが漏洩した場合、非常に多くのリスクが生じます。ハッカーが Object Storage のすべての bucket のデータを削除しても復元できなくなる可能性があります。制限された権限を持つ subuser を作成し、指定された bucket にのみ影響を与えられるようにしてください。その後、この subuser のキーを WordPress ウェブサイトの設定に使用してください。

### C. WordPress ウェブサイトへのプラグインのインストールと設定

WordPress ウェブサイトの管理画面にアクセスし、**Plugin** セクションに移動します。**Media Cloud** プラグインを検索してダウンロードします。

[![file](/img/migrated/image-1692777159058-5ed07e14.png)](/img/migrated/image-1692777159058-5ed07e14.png)

有効化すると、endpoint、Key、Bucket Name の入力が求められます。これらの情報は以下のガイドに従って FPT Portal から取得できます:

[**access key の管理**](./manage-access-keys.md)

接続成功後、より便利に使用するためにいくつかの基本設定を調整します。

[![file](/img/migrated/image-1692777474055-b9da49d5.png)](/img/migrated/image-1692777474055-b9da49d5.png)

[![file](/img/migrated/image-1692777480835-22740b1c.png)](/img/migrated/image-1692777480835-22740b1c.png)

**UPLOAD HANDLING** セクションで **FPT Object Storage** に同期するファイルの種類を選択します。

[![file](/img/migrated/image-1692777502204-8f725818.png)](/img/migrated/image-1692777502204-8f725818.png)

ファイル削除のメカニズムを設定します。bucket の容量を最適化するために **Delete From Storage** モードを有効にすることをお勧めします。

[![file](/img/migrated/image-1692777521974-1c3a846e.png)](/img/migrated/image-1692777521974-1c3a846e.png)

設定が完了すると、以降アップロードされるすべてのメディアファイルが **FPT Smart Cloud** の bucket に保存されます。画像をアップロードして **FPT Object Storage** 側を確認することでテストできます。

[![file](/img/migrated/image-1692777559714-bd798ada.png)](/img/migrated/image-1692777559714-bd798ada.png)

[![file](/img/migrated/image-1692777569143-a5082faf.png)](/img/migrated/image-1692777569143-a5082faf.png)

:::note
無料版では、プラグインインストール前にアップロードされたファイルは bucket に同期されません。この機能を使用するには Premium 版へのアップグレードが必要です。
:::

## まとめ

以上は、ウェブアプリケーションの画像・動画を保存・配信するメディアサーバーとして **FPT Object Storage** を使用する方法の紹介と手順です。操作中に問題が発生した場合は、Support セクションよりお問い合わせください。
