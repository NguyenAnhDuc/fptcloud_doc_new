---
id: "quan-ly-blades"
title: "Bladesの管理"
sidebar_label: "Bladesの管理"
sidebar_position: 15
---

# Bladesの管理

**ステップ1：** **Menu** から **Gateway and Servers** (**Ctrl + 1**) > **Gateway** > **Edit** を選択します。

[![Userguide Checkpoint FPT NGFW 2022 81](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-81-10-63596ac8.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-81-10-63596ac8.png)

**ステップ2：** **Menu** から **General Properties** を選択し、有効にするBladeにチェックを入れて **OK** をクリックします。

[![Userguide Checkpoint FPT NGFW 2022 82](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-82-dd7296d1.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-82-dd7296d1.png)

[![Userguide Checkpoint FPT NGFW 2022 83](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-83-1db42df8.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-83-1db42df8.png)

**ステップ1：** **Network Security** に属するBlades（Mobile Access、Application Control、URL Filtering、Monitoringなど）

[![Userguide Checkpoint FPT NGFW 2022 84](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-84-84d7216b.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-84-84d7216b.png)

有効化されたBladesの一覧：

[![Userguide Checkpoint FPT NGFW 2022 85](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-85-10-7c332082.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-85-10-7c332082.png)

:::note
有効化後に追加の統合設定が必要なBladeがあります（例：Mobile Access）。
:::

**ステップ2：** **Menu** から **Security Policies** (**Ctrl + 2**) > **New Tab** > **Manage policies and layers** を選択します。

[![Userguide Checkpoint FPT NGFW 2022 88](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-88-10-5fb52a92.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-88-10-5fb52a92.png)

**ステップ3：** 使用中の **Policy** を選択し **Edit** をクリック > **Access Control** レイヤーで **Edit Layer** を選択します。

[![Userguide Checkpoint FPT NGFW 2022 89](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-89-10-45182026.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-89-10-45182026.png)

**ステップ4：** **ステップ1** で有効化したBladeにチェックを入れ、**OK** をクリックします。

[![Userguide Checkpoint FPT NGFW 2022 90](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-90-2bd3b51a.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-90-2bd3b51a.png)

**ステップ5：** 新しいBladeを使用する **Rule/Access** を作成します：

[![Userguide Checkpoint FPT NGFW 2022 91](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-91-10-e0f90092.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-91-10-e0f90092.png)

[![Userguide Checkpoint FPT NGFW 2022 92](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-92-10-c5d36db4.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-92-10-c5d36db4.png)

**ステップ6：** Install Policyを実行します。

**ステップ1：** Threat Preventionに属するBlades（IPS、Anti-Bot、Anti-Virus、Threat Emulation、Threat Extraction）

[![Userguide Checkpoint FPT NGFW 2022 93](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-93-ba72b337.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-93-ba72b337.png)

[![Userguide Checkpoint FPT NGFW 2022 94](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-94-6c721e0f.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-94-6c721e0f.png)

[![Userguide Checkpoint FPT NGFW 2022 95](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-95-10-de409f38.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-95-10-de409f38.png)

**ステップ2：** メニューから **Security Policies** (Ctrl + 2) > **Threat Prevention** > **Policy** を選択します。デフォルト設定を使用するか、必要に応じて変更できます。

[![Userguide Checkpoint FPT NGFW 2022 96](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-96-10-50650383.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-96-10-50650383.png)

**ステップ3：** Install Policyを実行します。

**ステップ1：** **Menu** から **Gateway and Servers** (Ctrl + 1) > **Gateway** > **Edit** を選択します。

[![Userguide Checkpoint FPT NGFW 2022 97](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-97-80a62eda.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-97-80a62eda.png)

**ステップ2：** 不要なBladeのチェックを外します。

[![Userguide Checkpoint FPT NGFW 2022 98](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-98-2e9f3407.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-98-2e9f3407.png)

[![Userguide Checkpoint FPT NGFW 2022 99](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-99-10-10da52d5.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-99-10-10da52d5.png)

**ステップ3：** Install Policyを実行します。
