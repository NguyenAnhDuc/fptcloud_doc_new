---
id: "trien-khai-ung-dung-tren-worker-managed-gpu-cluster"
title: "Managed GPU Clusterにアプリケーションをデプロイする"
description: "このガイドでは、OllamaとOpen-WebUIを使用してFPT Managed GPU ClusterにDeepSeek-R1モデルをデプロイする手順を説明します。"
sidebar_label: "Managed GPU Clusterにアプリケーションをデプロイする"
sidebar_position: 4
---

# Managed GPU Clusterにアプリケーションをデプロイする

Ollamaは、Llama、DeepSeek、Mistralなど多くのモデルをサポートし、個人のコンピューターやサーバー上で大規模言語モデル（LLM）を実行、管理、カスタマイズできるオープンソースツールです。Open-WebUIは、Ollamaと連携するために特別に設計されたオープンソースのWebインターフェースで、LLMモデルの管理と使用において使いやすいユーザー体験を提供します。

このガイドでは、OllamaとOpen-WebUIを使用してFPT Managed GPU ClusterにDeepSeek-R1モデルをデプロイする手順を説明します。ユーザーがシンプルかつ直感的にモデルを操作できるようにします。

**手順1:** Open-WebUIのソースコードとスクリプトをクローンします。

```bash
git clone https://github.com/open-webui/open-webui
cd open-webui/kubernetes
```

**手順2:** OllamaとOpen-WebUIをデプロイするスクリプトを実行します。ディレクトリには**namespace**、**ollama statefulSet**、**ollama service**、**open-webui deployment**、**open-webui service**など、デプロイに必要なすべてのファイルが含まれています。

```bash
cd kubernetes
kubectl apply -f ./kubernetes/manifest
```

**手順3:** フォワードされたポートでブラウザからOpen-WebUIにアクセスします（例：`http://localhost:52433`）。OpenWebUIを初めてインストール・使用する際は、名前、メールアドレス、パスワードを設定する必要があります。

[![](/img/migrated/36-bb032555.png)](/img/migrated/36-bb032555.png)

**手順4:** セットアップが完了したら、使用するモデルを選択します。この例では、DeepSeek-R1モデルのバージョン**1.5b**をインストールします。

[![](/img/migrated/37-51db1bb9.png)](/img/migrated/37-51db1bb9.png)

**手順5:** モデルのダウンロードと起動が完了したら、ユーザーはインターフェースを通じてシンプルかつ直感的にモデルと対話できます。

[![](/img/migrated/38-b9243be2.png)](/img/migrated/38-b9243be2.png)
