---
id: "fpt-container-registry"
title: "FPT Container Registry"
description: "FPT Cloud が提供するコンテナイメージの保存・管理サービス。"
sidebar_label: "FPT Container Registry"
sidebar_position: 1
draft: true
---

# FPT Container Registry

**FPT Container Registry** は、FPT Cloud が提供するコンテナイメージの保存・管理サービスです。イメージのストレージ、セキュリティ、レプリケーション、ガバナンスを含むコンテナライフサイクル全体を一元管理でき、DevOps ツール、CI/CD パイプライン、Kubernetes Engine、Virtual Machines とシームレスに統合できます。

## 利用前の検討事項

- **リージョン:** Registry のリージョンは pull/push の速度に影響します。トラフィック発生元に最も近いリージョンを選択してパフォーマンスを最適化してください。
- **Repository 数とストレージサイズ:** 各 FPT Cloud アカウントには Container Registry のクォータが設定されています。必要な repository 数と最大ストレージサイズを事前に確認してください。

## 主なメリット

- FPT Cloud の S3 基盤に統合された一元的なイメージストレージ。
- CI/CD パイプラインへの容易な統合により、複数環境へのデプロイを効率化。
- pull/push 操作数の制限なし（サービスプランによる）。ハノイとホーチミン市の 2 リージョンで高速なイメージ転送を実現。

:::note
このサービスは Tenant Owner のみがアクティベートできます。
:::
