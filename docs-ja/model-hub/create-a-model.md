---
id: "create-a-model"
title: "model の作成"
description: "**Create Model** を使用すると、基本設定、メタデータ、アクセス制御をカスタマイズして、プライベート AI model を構築できます。"
sidebar_label: "model の作成"
sidebar_position: 12
---

# model の作成

**Create Model** を使用すると、基本設定、メタデータ、アクセス制御をカスタマイズして、プライベート AI model を構築できます。Model Hub サービス画面で **Create** ボタンをクリックして作成ページに移動します。 [![file](/img/migrated/image-1757057515124-cb536ba9.png)](/img/migrated/image-1757057515124-cb536ba9.png)

### **ステップ 1：基本情報の入力**
[![file](/img/migrated/image-1757057993590-aafcd5b8.png)](/img/migrated/image-1757057993590-aafcd5b8.png)
**基本情報** セクションで以下のフィールドを入力します：
  * **Model Title**：model の名前を入力します（必須）。
  * **Description**：model の目的の短い説明を入力します。
  * **Base Model**：基盤となる model を選択します（例：GPT-4、LLaMA）。
  * **Model Size (Parameters)**：model のパラメーターサイズを指定します（例：7B、13B）。
  * **Whitelist IPs**：model へのアクセスを許可する IP アドレスを追加します。
    * ルールが設定されていない場合、すべての IP が model のダウンロードを許可されます。最大 10 個の IP アドレスまたは CIDR 範囲をカンマで区切って入力できます。
    * IPv4 形式：
      * x.x.x.x（各 x ∈ [0, 255]）
      * オプションの CIDR サフィックス：/y（y ∈ [0, 32]）
✅ 有効：192.168.0.0 ❌ 無効：192.168.300.1
  * **Avatar**：model を表す画像をアップロードします（任意）。
  * **Overview**：リッチテキスト形式（太字、斜体、リストなど）を使用して詳細な概要を記述します。

### **ステップ 2：タグの追加**
[![file](/img/migrated/image-1757058054240-a8e1b2af.png)](/img/migrated/image-1757058054240-a8e1b2af.png)
**Tags** セクションを使用して、より簡単なカテゴリー分類と検索のために model に関連するキーワードを割り当てます。
**タグカテゴリー**
以下の定義済みカテゴリーでタグを割り当てることができます：
  * **Frameworks**：使用した開発フレームワークを指定します（例：PyTorch、TensorFlow）。
  * **Architecture**：model アーキテクチャを定義します（例：Bert、DistillBert、EfficientNet）。
  * **Subject**：model が関連するドメインまたは分野を示します（例：Healthcare、Finance、Education）。
  * **Task**：model の主な機能を説明します（例：Text Classification、Image Classification、Embedding）。
  * **Others**：上記のカテゴリーに該当しない追加タグを追加します。

### **ステップ 3：プレビュー**
右側の **Preview** パネルには、入力した情報に基づいた model のライブプレビューが表示されます。

### **ステップ 4：ナビゲーション**
  * **Cancel** をクリックして変更を破棄して終了します。
  * **Submit** をクリックして model の作成を確定します。
