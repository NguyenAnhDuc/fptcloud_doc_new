---
id: "GPU-VM -インスタンス-の-作成"
title: "Gpu Vm  インスタンス の 作成"
description: "**ステップ1：** コンソール画面で、メニューに移動して**「Compute Engine」**** >****「Instance management」** を選択し、 **「Create instance」** をクリックします。"
sidebar_label: "Gpu Vm インスタンス の..."
sidebar_position: "6"
---

# Gpu Vm  インスタンス の 作成

**ステップ1：** コンソール画面で、メニューに移動して**「Compute Engine」**** >****「Instance management」** を選択し、 **「Create instance」** をクリックします。
[![Alt text](/img/migrated/3-9c690a71.png)](/img/migrated/3-9c690a71.png)
**ステップ2：** 次のオプションで、ニーズに応じて仮想マシンを構成します。
**A/ 構成情報**
  * **インスタンスタイプ：** ユーザーは要件に応じて最適なインスタンスタイプを選択できます。現在、主に次の2つのタイプがあります。**General** と**GPU** 。
  * **General：** 基本的なコンピューティングのニーズに適しています。
  * **GPU：** 高性能コンピューティング、**機械学習、** その他の要求の厳しいタスク向けに設計されています。
  * **FPTクラウドサーバーは、** さまざまなニーズを満たすさまざまな**GPUオプション** を提供します。このセクションでは、ユーザーは**NVIDIA H100 SXM5** または**NVIDIA H200 SXM** を選択できます。

[![Alt text](/img/migrated/1-3-581d480d.png)](/img/migrated/1-3-581d480d.png)
**B/ 画像:** ニーズに応じて適切なオペレーティングシステム(OS)を選択します。
GPU構成の場合は、仮想マシンのセットアップと互換性のあるOSを選択します
[![Alt text](/img/migrated/5-3ed4d4a1.png)](/img/migrated/5-3ed4d4a1.png)
**C/ リソースタイプ:各GPU仮想マシンには、vCPU、RAM、および接続されているGPUの数** に関する異なる構成が付属しています。
ユーザーは自分のニーズに最適な構成を選択できます。
[![Alt text](/img/migrated/6-c6b90c3c.png)](/img/migrated/6-c6b90c3c.png)
**D/ ストレージディスク情報**
  * **ストレージ：** 仮想マシンに接続されるストレージオプションは次のとおりです。
  * **ストレージポリシー：** ストレージのタイプを定義します。デフォルトでは、**GPU仮想マシンはNVMe-SSD** のみをサポートします。
  * **サイズ:** ストレージサイズは、選択した**リソースタイプに基づいて自動的に設定されます。**

[![Alt text](/img/migrated/7-b1e0633b.png)](/img/migrated/7-b1e0633b.png)
**E/ネットワーク情報**
**プライベート IP、フローティングIP、セキュリティ グループなどのサブネットと詳細設定** が含まれます。
  * **サブネットとプライベートIP:** ユーザーは適切なネットワークを選択して、仮想マシンが必要なリソースとサービスに接続できるようにします。これにより、VMはネットワーク上の他のデバイスと通信し、インターネットなどの外部リソースにアクセスできるようになります。ユーザーは**プライベート IP** を手動で入力することも、選択したサブネットに基づいてシステムが自動的に割り当てるようにすることもできます。
  * **フローティングIP:** GPU仮想マシンの場合、VMが正常に作成完了された後に**フローティングIP** が構成されます。デフォルトでは、作成時にこの設定を構成することはできません。
  * **セキュリティグループ：** ユーザーは**、セキュリティグループ** を割り当てて、仮想マシンのインバウンドトラフィックとアウトバウンドトラフィックを制御できます。このフィールドは空白のままにしておき、必要に応じて後で設定することができます。

[![Alt text](/img/migrated/2-3-27e2f9a8.png)](/img/migrated/2-3-27e2f9a8.png)
**F/ 認証情報**
**認証タイプSSHキーまたはパスワードのい** ずれかを選択します。
  * **SSHキー** を選択した場合、システムは最新のSSHキーを自動的に使用します(変更可能)。

[![Alt text](/img/migrated/3-3-8c3590ef.png)](/img/migrated/3-3-8c3590ef.png)
  * **パスワード** 認証方法を使用する場合、ユーザーはパスワードを覚えておき、安全な場所に保管する必要があります。

[![Alt text](/img/migrated/10-ec8c6078.png)](/img/migrated/10-ec8c6078.png)
**G/ 詳細設定**
[![Alt text](/img/migrated/11-eed26672.png)](/img/migrated/11-eed26672.png)
  * **タグ：** リソースの管理と分類に役立つ、以前に作成したタグを選択します。
  * **ユーザーデータ：** このフィールドには**、cloud-initスクリプト** が格納されます。仮想マシンが起動すると、**cloud-initは** クラウドからメタデータを読み取り、それに応じてシステムを構成します。これは通常**、ネットワーク、ストレージ、SSHキー、その他のシステム設定** をセットアップするために使用されます。

**サンプル Cloud-initスクリプト:** 提供されたスクリプトで、システムはパスワード**「Abc123」** を持つユーザー**「testcloudinit」** を自動的に作成します。別のユーザー**「testcloudinit2」** がパスワード**「P@ssw0rd! 」** で作成されます。

```
Copy# cloud-config
users:
- name: testcloudinit
  sudo: ALL=(ALL) NOPASSWD:ALL
  lock_passwd: false
  shell: /bin/bash
  passwd: $6$rounds=4096$V6anciWl30$xKbcljqks1gUkMiM80pyKzhvyhn7U1n.jXcGCUfkUlX.rnllUWKUrmDEzekhhhP8aERSylRuC7gfDhJ32Xv0A1
- name: testcloudinit2
  groups: sudo
  lock_passwd: false
  shell: /bin/bash
  plain_text_passwd: P@ssw0rd!
- hostname: testcloudinit 
```

**ステップ3：GPU仮想マシンの作成**
**「Create instance」** をクリックして、仮想マシンの作成プロセスを開始します。システムは利用可能なリソースを確認し、選択した構成に基づいて新規仮想マシンの作成を続行します。
インスタンスが正常に作成されると、ユーザーは新しく作成された仮想マシンを表示し、**インスタンス管理** ダッシュボードでその詳細を確認できます。各VMには、**名前、構成、現在のステータス** などの完全な情報が表示されます。
