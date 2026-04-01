---
id: "gioi-thieu-chung-ve-quy-trinh-quan-ly-version"
title: "FPTCloud における Kubernetes バージョン管理プロセスの概要"
description: "FPTCloud の Kubernetes バージョン管理プロセスについて説明します。"
sidebar_label: "FPTCloud における Kubernetes バージョン管理プロセスの概要"
sidebar_position: 26
---

# FPTCloud における Kubernetes バージョン管理プロセスの概要

* FPTCloud は Kubernetes オープンソースソフトウェア（OSS）コミュニティの標準に従って Kubernetes バージョンをリリース・更新します。
  * Kubernetes のバージョン形式は x.y.z です。x はメジャーバージョン（x.y から x+1.y に増加）、y はマイナーバージョン（非推奨 API は新しいマイナーバージョンで削除、1.y から 1.y+1 に増加）、例えばバージョン 1.25 は 1.25 のマイナーリリースです。z はパッチリリース（バグ修正やセキュリティ脆弱性のパッチ・更新がパッチリリースで提供されます）。
  * FPTCloud は同時に最も安定した 4 つの Kubernetes マイナーバージョンをサポートし、その中で最も高いバージョンがデフォルトバージョンとして選ばれます。これらの安定したバージョンは十分にテストされており、本番稼働に対応しています。古いバージョンは FPTCloud のリリースノートで定められた End of Life 日まで deprecated のラベルが付けられます。
  * FPTCloud は Kubernetes OSS によってサポートされる新しい Kubernetes バージョンもサポートします。これらの新しいバージョンは Beta タグが付けられ、内部テストとユーザーフィードバックによる改善が進行中です。本番稼働の準備が整うと、Beta タグが外れ Stable または GA（Generally Available）バージョンになります。
  * 古いバージョン（Kubernetes コミュニティと FPT Cloud の標準サポート終了）は技術的なサポートを受けられなくなります。Kubernetes のバグ修正やクラウドプロバイダーの新機能に関連する新機能は End of Life バージョンでは更新されません。セキュリティの脆弱性やリスクもこれらのバージョンでは更新・修正されません。注意: 古いバージョンは FPT Cloud によるサポートおよび SLA の保証が受けられなくなります。
  * 通常クラスターの Kubernetes バージョンは GPU クラスターの Kubernetes バージョンとは異なります（通常、GPU クラスターのデフォルトバージョンは通常クラスターより 1 マイナーバージョン低くなります）。
  * Worker OS の Image バージョンはセキュリティ脆弱性を防止するために継続的にパッチが当てられます。現在、FPTCloud は Kubernetes クラスターの worker node に Ubuntu 22.04 OS image を使用しています。
  * 各バージョンは標準サポート終了の 2 ヶ月前から maintenance 状態になり、ポータルインターフェースに表示されます。まもなく End of Life となるバージョンで稼働しているクラスターは、1 ヶ月前からユーザーが積極的にバージョンをアップグレードするか、auto upgrade version 機能を設定してクラスターが標準サポート終了時に自動アップグレードされるよう、VPC オーナーユーザーへのメール通知が 1 日 1 回送信されます。この期間中にユーザーが積極的にバージョンをアップグレードした場合、VPC オーナーユーザーへのメール送信は停止されます。
  * auto upgrade version が設定されているクラスターには、自動アップグレード予定日の 3 日前に VPC オーナーユーザーへ具体的なアップグレード時間を知らせるメールが送信されます。
