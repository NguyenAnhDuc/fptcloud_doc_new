---
id: "tinh-nang-runtime-security-cluster"
title: "Managed Kubernetes Cluster の Runtime Security 機能"
description: "FPT Cloud Managed Kubernetes クラスターの Runtime Security 機能（Falco 統合）について説明します。"
sidebar_label: "Runtime Security 機能"
sidebar_position: 31
---

# Managed Kubernetes Cluster の Runtime Security 機能

## 1. Runtime Security 機能の概要

FPT Cloud Managed Kubernetes クラスターの情報セキュリティを確保するために、FPT Cloud は K8S クラスター内の異常な動作を検出し、worker node の runtime 層および kernel 層へのリスクを防ぐ Runtime Security ツールの統合機能を開発しました。

Falco は、コンテナおよび Kubernetes システムの異常な動作を監視・検出するための強力なオープンソースツールです。Falco は Sysdig が開発し、現在は CNCF（Cloud Native Computing Foundation）の保証プロジェクトとなっています。Falco の主な機能は、OS やコンテナの動作を監視し、あらかじめ定義されたルールに基づいて異常またはリスクのある動作を検出する「runtime security」（リアルタイムセキュリティ）を提供することです。

FPT Cloud は Runtime Security 統合機能を提供しており、ユーザーが Telegram または Gmail を通じて詳細なアラートを受け取るように設定できます。アラートチャネルを使用することで、Runtime Security はセキュリティイベントをタイムリーに検出し、管理者がシステムを保護するために迅速に対応できるようにします。

## 2. Unify Portal での機能の使い方

**注意:** Managed Kubernetes Cluster のセキュリティ強化機能セットは、クラスターが正常に作成された後（Succeeded（Running）状態）に統合されます。

### A. Falco Engine の統合

**1. Falco Engine の有効化**

- ステップ 1: FPT Cloud Portal（console.fptcloud.com）にアクセスし、**Kubernetes** メニューを選択します。

![](/img/migrated/Picture1-8-88d55a79.png)

- ステップ 2: Runtime を統合したいクラスターを選択します。

![](/img/migrated/Picture2-6-525544d9.png)

- ステップ 3: **Security** タブを選択 > **Runtime Security** を選択して有効化を実行します。

![](/img/migrated/Picture3-6-ce729383.png)

- ステップ 4: **Confirm** を選択して完了します。

![](/img/migrated/Picture4-5-10290f0d.png)

Runtime Security が正常に有効化されましたが、アラートチャネルが設定されていないためアラートは受信されません。

![](/img/migrated/Picture5-5-87c9c8f9.png)

**2. Falco Engine の無効化**

Runtime Security の統合が不要になった場合は、Portal 上でサービスを無効化できます。

- ステップ 1: 有効化状態のボタンをクリックします。

![](/img/migrated/Picture6-5-912fbb00.png)

- ステップ 2: クラスター名を入力して **Disable** をクリックします。

![](/img/migrated/Picture7-5-5b1a1396.png)

無効化後の結果:

![](/img/migrated/Picture8-4-8025d238.png)

### B. Falco UI 機能の統合

**1. Falco UI の有効化**

- ステップ 1: **Security** タブを選択 > **Runtime Security** を選択して有効化を実行します。

![](/img/migrated/Picture9-3-e4bf5847.png)

- ステップ 2: UI を有効化します。

![](/img/migrated/Picture10-3-95f69088.png)

- ステップ 3: Falco UI にアクセスするためのユーザー名とパスワードを入力し、**Confirm** をクリックして完了します。

![](/img/migrated/Picture11-2-5d780203.png)

![](/img/migrated/Picture12-3-2a273fdf.png)

- ステップ 4: kubeconfig ファイルをダウンロードして「falco-falcosidekick-ui」サービスの port-forward を実行します。Lens IDE を使用してダッシュボード上で port-forward を実行できます。**Network** > **Services** を選択 > Namespace `fptcloud-runtime-security` でフィルタリングします。

![](/img/migrated/Picture13-2-7145e357.png)

サービス `falco-falcosidekick-ui` を選択し、**Forward** を選択します。

![](/img/migrated/Picture14-2-bb48a8d7.png)

port-forward を入力して **Start** をクリックしてアクセスします。

![](/img/migrated/Picture15-2-8f8f127c.png)

- ステップ 5: サービス有効化時に設定したユーザー名とパスワードを入力します。

![](/img/migrated/Picture16-2-d46d7feb.png)

ログイン後の結果:

![](/img/migrated/Picture17-2-1e73f1f5.png)

アラートがある場合のダッシュボード画面:

![](/img/migrated/Picture18-2-9e9a042d.png)

**2. ユーザー名とパスワードの更新**

- ステップ 1: **Edit Runtime** をクリックします。

![](/img/migrated/Picture19-2-b353e779.png)

- ステップ 2: ユーザー名とパスワードを編集して **Confirm** をクリックします。

![](/img/migrated/Picture20-2-1434324a.png)

![](/img/migrated/Picture21-2-6d5e1e2f.png)

**3. Falco UI の無効化**

Falco UI を無効化するには、**Edit Runtime** を選択 > 有効化状態のボタンをクリック > **Confirm** をクリックします。

![](/img/migrated/Picture22-2-35ccf282.png)

![](/img/migrated/Picture23-2-5cd99243.png)

![](/img/migrated/Picture24-2-1d7bb079.png)

Falco UI 無効化後の結果:

![](/img/migrated/Picture25-2-4684d6eb.png)

### C. Runtime Security イベント通知の統合

**1. Telegram**

**1.1. Runtime Security イベント通知の有効化**

ステップ 1: Telegram にログインし、BotFather を検索します。

![](/img/migrated/Picture26-2-9f59ef7d.png)

ステップ 2: `/newbot` を入力してボットに名前を付けます。

![](/img/migrated/Picture27-2-6ee2ba65.png)

ステップ 3: 通知を受け取るグループチャットを作成します。

![](/img/migrated/Picture28-2-f21f0f24.png)

![](/img/migrated/Picture29-2-89f24d13.png)

![](/img/migrated/Picture30-2-e9df26be.png) ![](/img/migrated/Picture31-2-c9402508.png)

![](/img/migrated/Picture32-2-b4cf9d92.png)

ステップ 4: Unify Portal で Runtime Security イベント通知を有効化します。

![](/img/migrated/Picture33-2-710ec259.png)

ステップ 5: アラートチャネルとして Telegram を選択し、ChatID と Token ID を入力して **Confirm** をクリックします。

![](/img/migrated/Picture34-2-bdf2572f.png)

設定完了後の結果:

![](/img/migrated/Picture35-2-94806381.png)

異常が検出されると、以下のようなアラートが Telegram に届きます。

![](/img/migrated/Picture36-2-b799e46e.png)

**1.2. Gmail への通知チャネルの変更**

**注意:** Gmail の Application Token を作成する前に、Google アカウントで「2 段階認証」を有効にする必要があります。

ステップ 1: Application Token を作成するためのリンクにアクセスします。

![](/img/migrated/Picture37-2-80332a4a.png)

![](/img/migrated/Picture38-2-c92796bc.png)

ステップ 2: **Edit Runtime** を選択します。

![](/img/migrated/Picture39-1-b7ff93b3.png)

ステップ 3: Gmail で通知を受け取るための情報を入力して **Confirm** をクリックします。

![](/img/migrated/Picture40-1-517093c1.png)

設定完了後の結果:

![](/img/migrated/Picture41-1-65717d16.png)

異常が発生した場合、システムは以下のような Gmail アラートを送信します。

![](/img/migrated/Picture42-1-0d8044e6.png)

**1.3. Runtime Security イベント通知の無効化**

Telegram または Gmail での通知が不要になった場合は、**Security** タブ > **Edit Runtime** を選択 > Runtime Security イベント通知を無効化 > **Confirm** をクリックします。

![](/img/migrated/Picture43-1-fdc9e740.png) ![](/img/migrated/Picture44-1-c148eb98.png) ![](/img/migrated/Picture45-1-059e399c.png) ![](/img/migrated/Picture46-1-cb38d13e.png)

Runtime Security イベント通知を無効化すると、異常が発生してもアラートを受信しなくなります。
