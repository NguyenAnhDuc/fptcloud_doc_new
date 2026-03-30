---
id: "cau-hinh-o-dia-cho-may-ao-chay-windows"
title: "Windows Instance のディスクを設定する"
description: "Windows Instance に Storage Disk をアタッチした後のディスク設定手順。"
sidebar_label: "Windows Instance のディスクを設定する"
sidebar_position: 37
---

# Windows Instance のディスクを設定する

FPT Cloud Portal で Storage Disk をアタッチすると、Linux Instance は新しいディスクを自動的に認識します。Windows Instance の場合は、ディスクの管理で手動設定が必要です。

## ディスクの設定

1. Windows Instance に接続します。

2. **ディスクの管理**を開きます。**Windows + R** を押し、`diskmgmt.msc` と入力して **Enter** を押します。

   [![ディスクの管理を開く](/img/migrated/Userguide-FPT-Cloud-Server-2022-62-12b5cc80.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-62-12b5cc80.png)

3. ディスクの管理に、**オフライン**状態の新しいディスクが表示されます。

   [![オフライン状態の新しいディスク](/img/migrated/Userguide-FPT-Cloud-Server-2022-63-8bb2c4a2.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-63-8bb2c4a2.png)

4. ディスクアイコンを右クリックし、**オンライン**を選択します。

   [![ディスクのオンライン選択](/img/migrated/Userguide-FPT-Cloud-Server-2022-64-9b1d70d8.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-64-9b1d70d8.png)

5. ディスクが**オンライン**かつ**初期化されていない**状態に変わります。右クリックして**ディスクの初期化**を選択します。

   [![ディスクの初期化を選択](/img/migrated/Userguide-FPT-Cloud-Server-2022-65-e709db22.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-65-e709db22.png)

6. 適切な**パーティション スタイル**を選択し、**OK** をクリックします。

   [![パーティション スタイルの選択](/img/migrated/Userguide-FPT-Cloud-Server-2022-66-9e4f3cf7.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-66-9e4f3cf7.png)

7. ディスクの未割り当て領域を右クリックし、**新しいシンプル ボリューム**を選択します。

   [![新しいシンプル ボリュームの選択](/img/migrated/Userguide-FPT-Cloud-Server-2022-67-b8dd64a9.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-67-b8dd64a9.png)

8. ウィザードに従って **次へ** をクリックします。

   [![新しいシンプル ボリューム ウィザード](/img/migrated/Userguide-FPT-Cloud-Server-2022-68-4a3afeda.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-68-4a3afeda.png)

9. **シンプル ボリューム サイズ (MB)** フィールドにディスクサイズを入力し、**次へ** をクリックしてウィザードを完了します。

新しいディスクが Windows Instance で使用可能になりました。

## 次のステップ

- [Storage Disk を Instance からデタッチする](./go-storage-disk-khoi-may-ao.md)
