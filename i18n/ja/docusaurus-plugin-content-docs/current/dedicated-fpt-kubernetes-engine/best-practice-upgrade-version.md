---
id: "best-practice-upgrade-version"
title: "FKE cluster バージョンアップグレード ベストプラクティス"
description: "D-FKE の Kubernetes cluster バージョンアップグレードのベストプラクティスと処理フローの詳細。"
sidebar_label: "バージョンアップグレード ベストプラクティス"
sidebar_position: 26
draft: true
---

# FKE cluster バージョンアップグレード ベストプラクティス

D-FKE サービスは Portal Console から Kubernetes cluster のバージョンアップグレードをサポートしています。

## A. 製品機能

- **master と worker node の両方をアップグレード:** このプロセスは完全に自動化されており、ユーザーは Portal で簡単に操作でき、cluster に直接介入する必要はありません。
- **ゼロダウンタイムでの master アップグレード:** HA モード（3 master）を使用している cluster では、例えば 1.21 から 1.22 へのアップグレードにダウンタイムはありません。master が 1 台の cluster では master に数分間のダウンタイムが発生します（その間 Kubernetes API に介入できませんが、アプリケーションのワークロードは正常に動作します）。
- **ゼロダウンタイムでの worker アップグレード:** システムが各 worker node を順次ローリングアップデートします。各 worker は Pod のワークロードを drain し、node の更新が完了するまで cordon（スケジュール無効化）されます。

## B. システムのアップグレード処理フロー詳細

**1. Pre-upgrade**
- cluster をアップグレードするための環境をセットアップします。
- 環境を確認します: cluster ステータス/ネットワークステータス。

**2. Upgrade**
（各 node を順次アップグレード: master 先、worker 後）
- node を cordon します。
- node を drain します。
- node が Ready 状態であることを確認します。
- 古い証明書とキーをバックアップし、古い設定をバックアップします（master）。
- apiserver の etcd-servers を更新します（master）。
- node に新バージョンのソフトウェアをインストールします: kubelet、calico、container runtime、coredns、nodelocaldns、metrics server など。

**3. Post-upgrade**
- node に新バージョンのアドオンをインストールします: CSI、CCM、Autoscaler。
- アップグレード状態を確認します。
- クリーンアップを行います。

## C. アップグレード時の推奨事項

- cluster のアップグレードは業務時間外や週末などシステムの負荷が低い時間帯に実行することを推奨します。
- 本番環境をアップグレードする前に、dev/uat 環境で新しい Kubernetes バージョンとアプリケーションの互換性を確認してください（特に新しい Kubernetes API バージョン）。
- cluster のバージョンは順次アップグレードしてください（例: 1.21 → 1.22 → 1.23）。
- cluster は常に最新バージョンを使用してください（EOL バージョン表を参照）。
- アップグレード前に cluster の設定をバックアップします: CD ツールを使用するか manifest/helm chart をバックアップしてください。
- control plane のダウンタイムをゼロにするため HA master（3 master）で cluster をデプロイしてください。
- アプリケーションのワークロードのダウンタイムをゼロにするため 2 台以上の HA worker で cluster をデプロイしてください。
- Deployment、Replicaset、DaemonSet などの Workload Controller として 2 以上のレプリカでアプリケーションをデプロイし、単独の Pod はデプロイしないでください。
- ローカルストレージ（empty dir、hostpath など）を使用するアプリケーションはデプロイせず、CSI を使用してください。
- アプリケーションが複数の worker node で実行されるよう Anti-Affinity ルールをデプロイしてください。
- アップグレード中に FPT のシステムが cluster に接続できるよう firewall のポートを開放してください（FKE controller: 103.160.90.33 から cluster の port tcp 6443、32085、2022。FPT Cloud Portal: 103.160.90.36、103.160.90.37、103.160.90.39 から Public IP port tcp 6443）。
- アプリケーションのリソースサイジングを適切に設計し、worker node のローリングアップデートに十分なリソースを確保してください（バージョンアップグレード前にバッファとして worker を 1 台スケールアウトすることを検討してください）。

## D. D-FKE EOL チャート

| Kubernetes バージョン | Upstream リリース | FKE GA | FKE 標準サポート終了 |
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
