---
id: "tai-len-custom-image"
title: "Custom Image のアップロード"
description: "Instance 作成時に使用するための Custom Image を FPT Cloud にアップロードします。"
sidebar_label: "Custom Image のアップロード"
sidebar_position: 47
---

# Custom Image のアップロード

FPT Cloud では、Instance 作成時に Custom Image を使用できます。使用する前にイメージをシステムにアップロードする必要があります。

## General タイプの Custom Image をアップロードする

1. **Compute Engine** → **Custom Image** を選択し、**Upload Image** をクリックします。

   [![Upload Image ボタンがある Custom Image 画面](/img/migrated/image-1734596659826-b2abd687.png)](/img/migrated/image-1734596659826-b2abd687.png)

2. 必要事項を入力してマシンからファイルを選択し、**Upload** をクリックします。

   [![Upload Image ダイアログ](/img/migrated/image-1734596547440-d2446434.png)](/img/migrated/image-1734596547440-d2446434.png)

:::note
General サービスタイプでは、QCOW および VMDK ファイル形式がサポートされています。
:::

## ISO タイプの Custom Image をアップロードする

1. **Compute Engine** → **Custom Image** を選択し、**Upload Image** をクリックします。

   [![Custom Image 画面](/img/migrated/Screenshot_35-1024x328-7ae2c81b.png)](/img/migrated/Screenshot_35-1024x328-7ae2c81b.png)

2. 必要事項を入力します。
   - **ISO ファイル**（形式 .iso）: ファイルをドラッグ＆ドロップするか、デバイスから選択します。
   - **Name**: イメージファイルの名前。
   - **Description**: イメージファイルの説明。
   - **Add tag** *(省略可)*: イメージにタグを追加します。

   [![Upload ISO Image ダイアログ](/img/migrated/image-1734596700322-e585989d.png)](/img/migrated/image-1734596700322-e585989d.png)

3. **Upload Image** をクリックします。アップロードの進捗を確認できる ISO イメージ一覧ページに移動します。

   [![ISO イメージ一覧](/img/migrated/image-1734596808937-7682f537.png)](/img/migrated/image-1734596808937-7682f537.png)

## 次のステップ

- [Custom Image の削除](./xoa-custom-image.md)
