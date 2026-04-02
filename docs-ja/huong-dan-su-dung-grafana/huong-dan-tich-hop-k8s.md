---
id: "huong-dan-tich-hop-k8s"
title: "K8s 統合ガイド"
description: "FPT Cloud 上の Kubernetes クラスターに対する Monitoring の統合および統合解除ガイド。"
sidebar_label: "K8s の統合"
sidebar_position: 9
---

# K8s 統合ガイド

## ステップ 1: Monitoring 機能へのアクセス

- Console ポータルでクラスターの詳細画面にアクセスします。
- Monitoring タブを選択します。

システムが Monitoring 統合画面を表示します。

[![Alt text](/img/migrated/Screenshot_20-99aa1fa8.png)](/img/migrated/Screenshot_20-99aa1fa8.png)

## ステップ 2: 統合 / 統合解除

### 1. 統合（Integrate）

クラスターの metrics/logs 収集を有効にします。

- Monitoring 画面で、統合したいワークスペースに対応する **"Integrate"** アクションを選択します。

<ảnh minh họa đang cập nhật>

- 確認ダイアログで操作を確認して完了します。

<ảnh minh họa đang cập nhật>

- 統合が成功すると、Integrated Status が **"Enabled"** に変わり、FPT Monitoring システムが対応する指標の収集を開始します。

<ảnh minh họa đang cập nhật>

### 2. 統合解除（Disintegrate）

データベースクラスターの metrics/logs 収集を無効にします。

- Monitoring 画面で、監視を解除したいワークスペースに対応する **"Disintegrate"** アクションを選択します。
- 確認ダイアログで操作を確認して完了します。
- 統合解除が成功すると、Integrated Status が **"Disabled"** に変わり、FPT Monitoring システムが対応する指標の収集を停止します。

<ảnh minh họa đang cập nhật>

## ステップ 3: Grafana dashboard へのアクセスと監視情報の確認

- 監視の統合が成功した後（Integrated Status = "Enabled"）、Dashboard URL をクリックします。

<ảnh minh họa đang cập nhật>

- 次に対応する dashboard template を統合します。詳細は **3.1. Dashboard Template の統合** をご参照ください。
- 統合した dashboard を開いて Monitoring 情報を確認します。

*イメージ図*

[![Alt text](/img/migrated/Screenshot_21-31d7364e.png)](/img/migrated/Screenshot_21-31d7364e.png)
