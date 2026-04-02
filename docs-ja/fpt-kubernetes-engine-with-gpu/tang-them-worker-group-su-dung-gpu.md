---
id: "tang-them-worker-group-su-dung-gpu"
title: "GPUワーカーグループの追加"
sidebar_label: "GPUワーカーグループの追加"
sidebar_position: "9"
---

# GPUワーカーグループの追加

**前提条件:**
- 希望する新しいワーカーグループ構成に十分なCPU、GPU、RAM、ストレージ、インスタンスのクォータ。Autoscaleを使用する場合は、GPUクォータが希望する追加ノードの最大数を満たす必要があります。
- ネットワークサブネット1つ: KubernetesノードにはStaticIPプールが必要です。

手順は以下の通りです。

**ステップ1:** FPT Cloudポータル console.fptcloud.com にアクセスし、Kubernetesセクションに移動して変更したいクラスターをクリックし、Node Poolsに移動して「Edit Workers」をクリックします。

[![](/img/migrated/Picture4-3-aa3ce5ce.png)](/img/migrated/Picture4-3-aa3ce5ce.png)

**ステップ2:** 「Add worker group」をクリックして新しいワーカーグループを追加します。

[![](/img/migrated/Picture5-2-3779376b.png)](/img/migrated/Picture5-2-3779376b.png)

通常のKubernetes初期化設定に加えて、Worker GroupでGPUオプションを設定します。
- インスタンスタイプ: **GPU** を選択
- GPUタイプ（A30、A100など）を選択
- GPU共有設定（None / Single / Mixed）を選択
- GPUタイプ設定（CPU / RAM / GPU RAM）を選択

[![](/img/migrated/Picture6-2-4a875296.png)](/img/migrated/Picture6-2-4a875296.png)

**ステップ3:** 初期化情報を確認してSaveをクリックします。

[![](/img/migrated/Picture7-1-ef376286.png)](/img/migrated/Picture7-1-ef376286.png)

**ステップ4:** KubernetesクラスターへのWorker Group追加状態を監視します。ステータスがSucceeded（Running）になったら、アプリケーションをデプロイできます。
