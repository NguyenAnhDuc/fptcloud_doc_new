---
id: "Ollama と Open WebUI を使用した DeepSeek-R1 モデルのデプロイ"
title: "Ollama と Open Webui を使用した Deepseek R1 モデルのデプロイ"
description: "Ollama は、パーソナル コンピューターまたはサーバー上で大規模言語モデル (LLM) を実行、管理、およびカスタマイズできるオープンソース ツールであり、Llama、DeepSeek、Mistral などのさまざまなモデルをサポートし"
sidebar_label: "Ollama と Open Webui..."
sidebar_position: 14
pagination_next: null
---

# Ollama と Open Webui を使用した Deepseek R1 モデルのデプロイ

Ollama は、パーソナル コンピューターまたはサーバー上で大規模言語モデル (LLM) を実行、管理、およびカスタマイズできるオープンソース ツールであり、Llama、DeepSeek、Mistral などのさまざまなモデルをサポートしています。Open-WebUIは、Ollama との対話のために特化したオープンソースのWebインターフェイスで、LLM モデルの管理と使用においてユーザーフレンドリーで簡単なUXを提供します。
このドキュメントでは、ユーザーが簡単に使用できるように、Ollama と Open-WebUI を使用して DeepSeek-R1 モデルを FPT マネージド GPU クラスターにデプロイする手順について説明します。
**ステップ1:** Open-WebUIのソースコードと既存のスクリプトをクローンします。

```
Copy> git clone https://github.com/open-webui/open-webui
> cd open-webui/kubernetes
```

**ステップ2:** スクリプトを実行して、ollamaとopen-webuiを展開します。フォルダ内には、**namespace、ollama statefulSet、ollama サービス、open-webui デプロイメント、open-webui サービスなど、** デプロイに必要なすべてのファイルが含まれています。

```
Copy> cd kubernetes
> kubectl apply -f ./kubernetes/manifest
```

**ステップ3:** 転送されたポート(例: http://localhost:52433 )でブラウザーでopen-webuiにアクセスします。 OpenWebUIを初めてインストールして使用する場合、ユーザーは名前、電子メール、パスワードの情報を設定する必要があります。
[![](/img/migrated/36-bb032555.png)](/img/migrated/36-bb032555.png)
**ステップ4:** インストールが完了したら、ユーザーは使用するモデルを選択します。例として、DeepSeek-R1 モデル (バージョン **1.5b**) をインストールします。
[![](/img/migrated/37-51db1bb9.png)](/img/migrated/37-51db1bb9.png)
**ステップ 5:** モデルがダウンロードされて実行されたら、ユーザーはインターフェースでモデルと簡単に対話できます。
[![](/img/migrated/38-b9243be2.png)](/img/migrated/38-b9243be2.png)