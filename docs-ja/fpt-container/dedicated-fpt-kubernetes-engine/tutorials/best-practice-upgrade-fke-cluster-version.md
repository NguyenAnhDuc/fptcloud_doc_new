---
id: "best-practice-upgrade-fke-cluster-version"
title: "FKE clusterバージョンアップグレードのベストプラクティス"
description: "D-FKEサービスはPortal ConsoleからKubernetes clusterのバージョンアップグレードをサポートしています。"
sidebar_label: "ベストプラクティス: バージョンアップグレード"
sidebar_position: "26"
---

# FKE clusterバージョンアップグレードのベストプラクティス

D-FKEサービスはPortal ConsoleからKubernetes clusterのバージョンアップグレードをサポートしています。

## A. 製品機能

- **masterとworker nodeの両方がアップグレードされます:** プロセスは完全に自動化されており、ユーザーはclusterに直接介入することなく、ポータルから簡単に操作できます。
- **ゼロダウンタイムのmasterアップグレード:** clusterがHAモード（3台のmaster）を使用している場合、システムは自動的にmasterを次のバージョン（例: 1.21 → 1.22）にダウンタイムなしでアップグレードします。masterが1台のclusterでは、数分間のmasterダウンタイムが発生し、その間Kubernetes APIが使用できませんが、アプリケーションのworkloadは正常に動作し続けます。
- **ゼロダウンタイムのworkerアップグレード:** システムは各worker nodeを順番にRolling updateします。各workerはpod workloadをdrainし、node更新が完了するまでcordon（スケジュール無効）されます。

## B. アップグレードプロセスの詳細

**1. アップグレード前**
- clusterアップグレードのための環境をセットアップします。
- 環境チェック: cluster status / network status。

**2. アップグレード**
（nodeを順番にアップグレード: masterが先、次にworker）
- nodeをcordonする。
- nodeをdrainする。
- nodeがready状態であることを確認する。
- 古いcertsとkeysをバックアップ; 古いconfigsをバックアップ（master）。
- apiserverのetcd-serversを更新（master）。
- nodeに新バージョンのソフトウェアをインストール: kubelet、calico、container runtime、coredns、nodelocaldns、metrics serverなど。

**3. アップグレード後**
- nodeに新バージョンのアドオンをインストール: CSI、CCM、Autoscaler。
- アップグレード状態を確認する。
- クリーンアップ。

## C. clusterアップグレード時の推奨事項

- clusterのアップグレードは、業務時間外や週末など、システム負荷が低い時間帯に実施してください。
- 本番環境をアップグレードする前に、dev/uat環境でアプリケーションが新しいKubernetesバージョンと互換性があるかテストしてください。特に新しいKubernetes APIバージョンについて確認してください。
- clusterバージョンを順番にアップグレードしてください（例: 1.21 → 1.22 → 1.23）。
- clusterが常に最新のサポートバージョンを使用していることを確認してください（EOLバージョン表を参照）。
- アップグレード前にcluster configurationをバックアップしてください: CDツールを使用するか、manifest/helm chartをバックアップしてください。
- control planeのダウンタイムをゼロにするため、HA master（3台のmaster）でclusterをデプロイしてください。
- アプリケーションworkloadのダウンタイムをゼロにするため、2台以上のHA workerでclusterをデプロイしてください。
- Deployment、Replicaset、DaemonSetなどのWorkload Controllerを使用し、2台以上のreplicaでアプリケーションをデプロイしてください。単一のPodのデプロイは避けてください。
- local storage（empty dir、hostpathなど）は使用せず、CSIを使用してください。
- アプリケーションが複数のworker nodeで動作することを保証するために、Anti-Affinityルールをデプロイしてください。
- アップグレード中にFPTのシステムがclusterに接続できるようファイアウォールのポートを開放してください（FKE controller: 103.160.90.33からcluster port tcp 6443、32085、2022; FPT Cloud Portal: 103.160.90.36、103.160.90.37、103.160.90.39からPublic IP port tcp 6443）。
- worker nodeのRolling updateに十分なリソースを確保するため、アプリケーションのリソースサイジングを設計してください（clusterバージョンのアップグレード前にバッファとして1台のworkerをスケールアウトすることを検討してください）。

## D. D-FKE EOLチャート

| Kubernetesバージョン | アップストリームリリース | FKE GA | FKE標準サポート終了 |
| --- | --- | --- | --- |
| 1.21 | 2021年4月 | 2021 | 2024年9月 |
| 1.22 | 2021年8月 | 2022 | 2024年11月 |
| 1.23 | 2021年12月 | 2023 | 2025年2月 |
| 1.24 | 2022年5月 | | |
| 1.25 | 2022年8月 | 2023年10月 | 2025年8月 |
| 1.26 | 2022年12月 | 2024年1月 | 2025年11月 |
| 1.27 | 2023年4月 | 2024年2月 | 2026年2月 |
| 1.28 | 2023年8月 | 2024年3月 | 2026年5月 |
| 1.29 | 2024年1月 | | |
