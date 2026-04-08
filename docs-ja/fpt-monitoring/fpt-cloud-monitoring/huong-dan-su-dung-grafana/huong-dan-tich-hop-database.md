---
id: "huong-dan-tich-hop-database"
title: "Database 統合ガイド"
description: "FPT Monitoring で metrics と logs を収集するための Database の統合および統合解除ガイド。"
sidebar_label: "Database の統合"
sidebar_position: 14
---

# Database 統合ガイド

## ステップ 1: 機能へのアクセス

- Monitoring サービスを有効化してワークスペースの初期化が完了したら、Console ポータルで Database クラスターの詳細画面を開き、Monitoring を選択します。
- システムは、データベースの種類ごとの metrics および logs の一覧を表示します。FPT Monitoring と統合されていない metric または log は Status = "Disabled" と表示されます。

[![Alt text](/img/migrated/Screenshot_33-828878ed.png)](/img/migrated/Screenshot_33-828878ed.png)

## ステップ 2: 統合 / 統合解除

### 統合（Integrate）

クラスターの metrics/logs 収集を有効にします。

- Monitoring 画面で、統合したいワークスペースに対応する「Integrate」アクションを選択します。

<ảnh đang được update>

- 確認ダイアログで操作を確認して完了します。

<ảnh đang được update>

- 統合が成功すると、Integrated Status が **"Enabled"** に変わり、FPT Monitoring システムが対応する指標の収集を開始します。

<ảnh đang được update>

### 統合解除（Disintegrate）

データベースクラスターの metrics/logs 収集を無効にします。

- Monitoring 画面で、監視を解除したいワークスペースに対応する **"Disintegrate"** アクションを選択します。
- 確認ダイアログで操作を確認して完了します。
- 統合解除が成功すると、Integrated Status が **"Disabled"** に変わり、FPT Monitoring システムが対応する指標の収集を停止します。

<ảnh đang được update>

## ステップ 3: Grafana dashboard へのアクセスと監視情報の確認

- 監視の統合が成功した後（Integrated Status = "Enabled"）、Dashboard URL をクリックして Grafana ページに移動します。
- 次に対応する dashboard template を統合します。詳細は [**3.1. Dashboard Template の統合**](../huong-dan-su-dung-grafana/index.md) をご参照ください。
- 統合した dashboard を開いて監視情報を確認します。

[![Alt text](/img/migrated/Screenshot_34-e8f6a87c.png)](/img/migrated/Screenshot_34-e8f6a87c.png)
