---
id: "gpu-specific"
title: "GPU Specific"
sidebar_label: "Specific サービス向け GPU 管理"
sidebar_position: 3
---

Specific サービスタイプ向け Console Portal での GPU 管理


## 1. 既存の仮想マシンに GPU を追加する
以前に作成した仮想マシンにGPUを追加するには、以下の手順に従ってください。

**ステップ 1**: メニューで **Instance Management** を選択します。**Actions** セクションで **Add GPU** を選択します。

![file](/img/migrated/docs-ja-cloud-server/gpu-specific/img-001.png)


:::warning
マシンにGPUカードを追加する前に、サーバーをシャットダウンしてください。
:::


**ステップ 2**: 対応するリストから **GPU** 設定を選択し、**Update** をクリックします。

この機能を使用するには、仮想マシンが最低でも8 vCPU – 24 GB RAMの設定を満たしている必要があります。

## 2. 新しい GPU 仮想マシンを作成する
  * この操作を実行するには、ユーザーにGPUクォータが割り当てられている必要があります。VPCのGPU使用クォータが不足すると、新しいGPU Serverを作成する際にエラー通知が表示されます。

  * 作成後、システムはすぐに仮想マシンにGPUを追加します。ユーザーは仮想マシンのコンソールにアクセスしてGPU情報を確認できます。

  * GPU Serverを作成するための最小設定は8 vCPU – 24 GB RAMです。


**ステップ 1**: メニューで **Compute Engine** > **Instance Management** を選択し、**Create instance** をクリックします。

![file](/img/migrated/docs-ja-cloud-server/gpu-specific/img-002.png)

**ステップ 2**: 以下のオプションで必要に応じて仮想マシンを設定します。

  * **Instance Type**: GPUを選択します。
  * **GPU type:** リストから適切なGPUタイプを選択します。
  * **Image:** ニーズに合ったメインOSを選択します。各OSグループには異なるバージョンが含まれます。デフォルトは最新バージョンです。
  * **Resource type**: リストから仮想マシンに適した設定を選択します。
  * **Local Storage**: マシンにディスクを追加し、容量を増減するか、デフォルトの容量（最低40 GB）を使用します。
  * **Subnet & Private IP**: VPCのネットワークに基づいてSubnetとプライベートIPを自動割り当てします。ユーザーは必要に応じて変更できます。
  * **Instance name**: 管理しやすい仮想マシン名を入力します。これは仮想マシンのホスト名にもなります。
  * **Authentication type**: Standard（Username/Password）またはSSH key。SSH Keyを選択した場合、システムは最新のSSH keyを使用します（変更可能）。Standardメソッドを使用する場合、ユーザーはパスワードを安全に保管してください。


**ステップ 3**: **Create Instance** をクリックして仮想マシンを作成します。システムは確認を表示し、リソースを確認して、選択した設定に基づいて新しい仮想マシンの初期化処理を進めます。

初期化が成功すると、新しく作成した仮想マシンを確認し、管理ダッシュボードで情報を確認できます。各仮想マシンには名前、設定（RAM、CPU、GPU、Storage）、IPアドレス、動作状態（オフ/オン/Suspended）が一覧に表示されます。

## 3. 仮想マシンから GPU を取り外す
仮想マシンに **GPU** を追加済みで、使用する必要がなくなった場合は、以下の手順で **GPU** を取り外すことができます。

**ステップ 1**: メニューで **Instance Management** を選択します。**GPU** を取り外す仮想マシンの **Actions** セクションで **Remove GPU** を選択します。

**ステップ 2:** **GPU** 削除情報を確認し、**Update** をクリックします。
