---
id: "templates"
title: "Templates"
description: "テンプレートはイメージをコンテナとして起動し、必要なコンテナのディスクサイズ、ボリューム、ボリュームパス、ポートを定義するために使用されます。"
sidebar_label: "Templates"
sidebar_position: 11
---

# Templates

テンプレートはイメージをコンテナとして起動し、必要なコンテナのディスクサイズ、ボリューム、ボリュームパス、ポートを定義するために使用されます。テンプレート内で環境変数と起動コマンドを定義することもできます。
## 組み込みテンプレート
これらのテンプレートはFPT AI Factoryによって管理されています。現在、以下の組み込みテンプレートを提供しています：
  1. vLLM v0.8.1
     * 使用目的：このvLLMコンテナイメージはAI Factoryによって構築・管理されています。このテンプレートは最先端エンジンを使用してGPUリソースで高スループットのモデル推論を可能にします。

  * 環境変数：コンテナのカスタマイズのために追加の有用な環境変数が提供されています。

| 変数 | 型 | 説明 |
| --- | --- | --- |
| HUGGING_FACE_HUB_TOKEN | string | Hugging Faceのユーザーアクセストークン |

  * 起動コマンド：

| コマンド | 引数 |
| --- | --- |
| python | --model deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B --dtype bfloat16 --gpu-memory-utilization 0.9 --max-model-len 8192 --api-key your_api_key |
| -m | / |
| vllm.entrypoints.openai.api_server | / |

  * ポート：

| タイプ | ポート |
| --- | --- |
| HTTP | 8000 |

  2. Jupyter Notebook

  * 使用目的：このテンプレートはJupyter Labを提供し、ローカルハードウェアの制限なしにAI/データサイエンティストのリモート開発をサポートします。
  * 環境変数：

| 変数 | 型 | デフォルト | 説明 |
| --- | --- | --- | --- |
| USERNAME | string | admin | Jupyter Notebookにアクセスするユーザー名 |
| PASSWORD | string |   | Jupyter Notebookにアクセスするパスワード _(システムが生成)_ |

  * ポート：

| タイプ | ポート |
| --- | --- |
| HTTP | 8000 |

  3. Ollama WebUI

  * 使用目的：このテンプレートはOllamaやOpenAI互換のAPIを含む各種大規模言語モデル（LLM）プログラムの実行をサポートし、ワークフローに基づいてユーザーが簡単にカスタマイズできます。
  * ポート：

| タイプ | ポート |
| --- | --- |
| HTTP | 8080 |

  4. Ollama

  * 使用目的：このテンプレートは最先端エンジンを使用してGPUリソースで高スループットのモデル推論を可能にします。
  * 環境変数：

| 変数 | 型 | 説明 |
| --- | --- | --- |
| API_TOKEN | string | 外部サービスへの自動認証 _(システムが生成)_ |

  * ポート：

| タイプ | ポート |
| --- | --- |
| HTTP | 8000 |

  5. Code Server

  * 使用目的：このテンプレートはGPU搭載のクラウドベースVS Codeを提供し、完全なIDE機能でAIモデルのリモートトレーニング、テスト、デバッグを可能にします。
  * 環境変数：

| 変数 | 型 | デフォルト | 説明 |
| --- | --- | --- | --- |
| PUID | int | 0 | UserID |
| PGID | int | 0 | GroupID |
| TZ | string | Etc/UTC | タイムゾーン |
| PROXY_DOMAIN | string | code-server.my.domain | サブドメインプロキシのためのプロキシドメイン |
| DEFAULT_WORKSPACE | string | / | code-serverアクセス時に開くデフォルトフォルダ |
| PASSWORD | string | / | code-serverにアクセスするパスワード _(システムが生成)_ |

  * ポート：

| タイプ | ポート |
| --- | --- |
| HTTP | 8443 |

  6. Ubuntu

  * 使用目的：これはユーザーエクスペリエンスを向上させるためにいくつかの便利な追加機能を備えた最小限のUbuntuです。rootアカウントは通常通り利用可能ですが、利便性のために通常のシステムユーザーも作成されています。
  * ポート：

| タイプ | ポート |
| --- | --- |
| TCP | 22 |

  * 追加ソフトウェア
    * Docker：Dockerがインストールされ、自動的に起動します。デフォルトユーザーはdockerグループに追加されており、rootの権限なしにコンテナを管理できます。
    * Nvidia CUDA：Nvidiaドライバーバージョン550.90.07がコンテナにプリインストールされており、CUDAバージョン12.4を提供します。

  7. vLLM v0.10.1
     * 使用目的：このvLLMコンテナイメージはAI Factoryによって構築・管理されています。このテンプレートは最先端エンジンを使用してGPUリソースで高スループットのモデル推論を可能にします。
     * 環境変数：

| 変数 | 型 | 説明 |
| --- | --- | --- |
| HUGGING_FACE_HUB_TOKEN | string | Hugging Faceのユーザーアクセストークン |

  * 起動コマンド：

| コマンド | 引数 |
| --- | --- |
| python | --model openai/gpt-oss-20b --dtype bfloat16 --gpu-memory-utilization 0.9 --max-model-len 8192 --api-key your_api_key |
| -m | / |
| vllm.entrypoints.openai.api_server | / |

  * ポート：

| タイプ | ポート |
| --- | --- |
| HTTP | 8000 |

  8. NVIDIA Pytorch 25.03

  * ポート：

| タイプ | ポート |
| --- | --- |
| TCP | 22 |
| HTTP | 8888 |

  * 起動コマンド：

| コマンド | 引数 |
| --- | --- |
| /bin/bash | / |
| -c | / |
| /usr/sbin/sshd && jupyter lab --ip=0.0.0.0 --port=8888 --allow-root --NotebookApp.token='your_token' --NotebookApp.password='' --notebook-dir=/workspace | / |

  9. Tensorflow 2.19.0

  * ポート：

| タイプ | ポート |
| --- | --- |
| TCP | 22 |

  10. NVIDIA CUDA 12.9.1

  * ポート：

| タイプ | ポート |
| --- | --- |
| TCP | 22 |

## カスタムテンプレート
**「Custom Template」** をクリックして独自のimage:tagをオーバーライドすることで、独自の **Dockerイメージ** を使用できます。イメージがプライベートDockerリポジトリからの場合は、認証のためにユーザー名とパスワードを提供してください。
[![Alt text](/img/migrated/Screenshot-2025-06-19-154727-8b486ae9.png)](/img/migrated/Screenshot-2025-06-19-154727-8b486ae9.png)
