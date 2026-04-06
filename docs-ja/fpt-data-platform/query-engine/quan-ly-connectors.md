---
id: "quan-ly-connectors"
title: "Connectors の管理"
sidebar_label: "Connectors の管理"
description: "Connectors の管理"
---

# Connectors の管理

**Query Engine** の **Connector** 情報が表示されます。

![Image](images/quan-ly-connectors/img-001.png)

**Connector の追加:**

 * **ステップ 1.** **Connectors** 画面で **Create a connector** をクリックし、**Connector Type** として **Iceberg Catalog – Hive** を選択します。

 * **ステップ 2.** **Connector** の情報を入力します。

   * **Enable S3 SSE:**

     * S3 に書き込まれるすべてのファイルは自動的に暗号化されます。ファイルを表示またはダウンロードすると、Workspace が自動的に復号化します。→ データセキュリティが向上します。

     * Keyvault: 作成済みのキーストアを選択します（Keystore の作成）。

     * S3 SSE を有効にしない場合 → ファイルはそのまま保存され、暗号化されません。

   * **Catalog name**: カタログ名

   * **Catalog type**: hive と入力します。

   * **Catalog URL**: Hive Metastore の接続アドレス

   * **File Format**: ファイル形式（parquet/orc/avro）

   * **Default Warehouse Directory**: ディレクトリパス（**s3a:///path**）

   * **S3 Endpoint**: S3 アクセスアドレス（https://）

   * **S3 Access Key**: アクセスキー

   * **S3 Secret Key**: シークレットキー

 * **ステップ 3.** **Create** をクリックして **Connector** を作成するか、**Cancel** をクリックして中止します。（Connector 作成後、Query Engine は **Processing** 状態に移行し、約 **~3 分**で設定が完了します。）

![Image](images/quan-ly-connectors/img-002.png)

**Connector の削除:**

 * **ステップ 1.** **Connectors** 画面で削除するコネクター名を選択し、**Action** > **Delete** を選択します。

 * **ステップ 2.** 確認ダイアログで削除を確定するか、操作をキャンセルします。

![Image](images/quan-ly-connectors/img-003.png)
