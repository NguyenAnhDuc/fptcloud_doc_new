---
id: "thay-doi-worker-group-su-sung-gpu"
title: "GPUワーカーグループの変更"
sidebar_label: "GPUワーカーグループの変更"
sidebar_position: "4"
---

# GPUワーカーグループの変更

**前提条件:**
- 希望するワーカーグループ設定変更に十分なCPU、GPU、RAM、ストレージ、インスタンスのクォータ。
- ワーカーノードが新しい設定をロールアウトできるよう、GPUクォータが最低でもMinノード数 + 1を満たす必要があります。Autoscaleを使用する場合は、希望するMaxノード数を満たす必要があります。
- ネットワークサブネット1つ: KubernetesノードにはStaticIPプールが必要です。

手順は以下の通りです。

**ステップ1:** FPT Cloudポータル [console.fptcloud.com](https://console.fptcloud.com/) にアクセスし、Kubernetesセクションに移動して変更したいクラスターをクリックし、Node Poolsに移動して「Edit Workers」アイコンをクリックします。

[![](/img/migrated/Picture8-2-eb37b7ec.png)](/img/migrated/Picture8-2-eb37b7ec.png)

**ステップ2:** 通常のワーカーグループ設定に加えて、GPUオプションを設定します。
- インスタンスタイプ: **GPU** を選択
- GPUタイプ（A30、A100、H100、H200など）を選択
- GPU共有設定（None / Single / Mixed）を選択
- GPUタイプ設定（CPU / RAM / GPU RAM）を選択

[![](/img/migrated/Picture9-2-b3d633b8.png)](/img/migrated/Picture9-2-b3d633b8.png)

:::warning
- GPU共有方式を変更すると、GPUに関連するすべてのワークロードを再デプロイする必要があります。変更前にエラーを回避するためアプリケーションを0にスケールダウンしてください。
- 以前のGPU共有設定がNoneまたはNone with Operatorの場合、SingleまたはMixedに変更することはできません。
- 以前のGPU共有設定がSingleの場合、対応するSingleモードにのみ変更できます。
:::

**ステップ3:** 初期化情報を確認してSaveをクリックします。

**ステップ4:** KubernetesクラスターのWorker Group更新状態を監視します。ステータスがSucceeded（Running）になったら、アプリケーションをデプロイできます。
