---
id: "import-config"
title: "Import Config"
description: "迅速なデプロイや設定ファイルが既に準備されている場合、UIで設定するのではなく、この機能を使用してコンテナを作成できます。"
sidebar_label: "Import Config"
sidebar_position: 6
---

# Import Config

迅速なデプロイや設定ファイルが既に準備されている場合、ユーザーインターフェースで設定するのではなく、この機能を使用してコンテナを作成できます。
### ステップ1：設定のインポートモーダルを開く
  1. サイドメニューからGPU Containerに移動します。
  2. コンテナ一覧ページの右上にある「設定のインポート」をクリックします。

[![Alt text](/img/migrated/import-1-4a9b93de.png)](/img/migrated/import-1-4a9b93de.png)
### ステップ2：YAML形式の設定ファイルを提供する
設定は2つの方法でインポートできます：
  * YAMLエディタに直接YAMLを貼り付けます。
  * 「ファイルをアップロード」ボタンをクリックしてYAMLファイルをアップロードします。現在、GPU ContainerはYAMLファイルのみをサポートしています。

**テンプレートのダウンロード**をクリックしてサンプルYAMLテンプレートをダウンロードできます。
[![Alt text](/img/migrated/import-3-83178ce0.png)](/img/migrated/import-3-83178ce0.png)
| フィールド | データ型 | サンプルデータ | 説明 |
| --- | --- | --- | --- |
| name | string | my-container | コンテナの名前。テナントごとに一意である必要があります |
| instance_type | string | GPU-H100-1 | ベトナムサイトは1xH100〜8xH100をサポート；日本サイトは1xH200〜8xH200をサポート |
| **image_setting** |   |   | コンテナは1つのイメージしか持てないため、**template_name** または **image_url + image_tag** のいずれかを指定してください |
|  template_name | string | Jupyter Notebook | 組み込みテンプレート名。FPTが提供する組み込みテンプレートを使用する場合に指定します。リスト内の正確な名前を入力してください：`Jupyter Notebook`、`Code Server`、`vllm-openai`、`vllm-openai-v0.10.1`、`ollama`、`ollama-openwebui`、`Ubuntu 24.04`、`Tensorflow 2.19.0`、`Nvidia Cuda 12.9.1`、`NVIDIA Pytorch 25.03`。 |
|  image_url | string | registry/myimage:latest | （オプション）カスタムイメージURL。組み込みテンプレートを使用する場合は空白にしてください。 |
|  image_tag | string | v1.0 | （オプション）カスタムイメージのタグ。 |
|  image_user | string | admin | （オプション）プライベートイメージレジストリのユーザー名。 |
|  image_password | string | password123 | （オプション）プライベートイメージレジストリのパスワード |
| **access_container** |   |   |   |
|  tcp_ports | list[int] | [22, 33] | コンテナが公開するTCPポート |
|  http_ports | list[int] | [8888, 6006] | コンテナが公開するHTTPポート |
|  ssh_keys |   |   | 名前とキーのSSHキーペアを提供します。最大10個のキーを許可します |
|  name | string | key01 | SSHキーの名前 |
|  key | string | "ssh-rsa AAAAB3..." | SSH公開鍵 |
| **advanced_settings** |   |   |   |
|  persistent_disk |   |   |   |
|  mount_capacity | int (GB) | 20 | アタッチする永続ストレージの量。 |
|  mount_path | string | /workspace | コンテナ内で永続ディスクがマウントされるパス。 |
|  environment_variables |   |   |   |
|  key | string | USERNAME | 実行時に注入される環境変数。 |
|  value | string | admin |   |
|  startup_commands |   |   |   |
|  cmds | list[string] |   | 起動コマンド（オプション）。 |
|  args | list[string] |   | 起動コマンドの引数（オプション）。 |
### ステップ3：設定を確認する
[!(/img/migrated/information-fill-1-30ad0c7d.png)](/img/migrated/information-fill-1-30ad0c7d.png)
**注意：** 「Review」ボタンはYAMLエディタ内のすべてのバリデーションが通過した場合にのみ有効になります。
**Review** をクリックして続行します。この画面では以下ができます：
  * テンプレート、GPU、CPU、RAM、ディスク割り当てを含むコンテナの設定を確認します。
  * 推定時間コストを確認するために料金サマリーを確認します。 [![Alt text](/img/migrated/import-4-efe3185f.png)](/img/migrated/import-4-efe3185f.png)

### ステップ4：コンテナを作成する
確認後、**Create Container** をクリックしてデプロイを開始します。システムは提供された設定ファイルに基づいてコンテナを自動的に作成・起動します。
