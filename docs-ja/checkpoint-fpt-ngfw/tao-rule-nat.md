---
id: "tao-rule-nat"
title: "NATルールの作成"
sidebar_label: "NATルールの作成"
sidebar_position: 13
---

# NATルールの作成

**ステップ1：** **Object Pane** (**F11**) でSNAT対象のオブジェクトを右クリックし、**Edit** を選択します。

[![Userguide Checkpoint FPT NGFW 2022 60](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-60-90ecad9b.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-60-90ecad9b.png)

**ステップ2：** メニューから **NAT** を選択し、**Add automatic address translation rules** にチェックを入れ、**Hide behind IP address** にチェックを入れ、SNATのIPアドレスを入力して適用するゲートウェイを選択します。

[![Userguide Checkpoint FPT NGFW 2022 61](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-61-4c558934.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-61-4c558934.png)

**ステップ3：** メニューから **Security Policies** (**Ctrl + 2**) > **Access Control** > **NAT** を選択し、ルールが作成されたことを確認します。

[![Userguide Checkpoint FPT NGFW 2022 62](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-62-10-dc17c546.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-62-10-dc17c546.png)

**ステップ4：** Install Policyを実行します。

**ステップ1：** メニューから **Security Policies** (**Ctrl + 2**) > **Access Control** > **NAT** を選択します。

[![Userguide Checkpoint FPT NGFW 2022 63](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-63-10-ac53aa0f.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-63-10-ac53aa0f.png)

**ステップ2：** **Add rule above / to top / to bottom** をクリックして、適切な位置にルールを追加します。

[![Userguide Checkpoint FPT NGFW 2022 64](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-64-10-a10726e9.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-64-10-a10726e9.png)

**ステップ3：** 新しいルールを設定します：

[![Userguide Checkpoint FPT NGFW 2022 65](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-65-10-b8780102.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-65-10-b8780102.png)

- **Name：** [![Userguide Checkpoint FPT NGFW 2022 66](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-66-10-56f58df1.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-66-10-56f58df1.png)
- **Original Source**（NAT前の送信元IP）：[![Userguide Checkpoint FPT NGFW 2022 67](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-67-10-85cf6d50.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-67-10-85cf6d50.png)
- **Original Destination**（NAT前の宛先IP）：[![Userguide Checkpoint FPT NGFW 2022 68](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-68-10-e30c8c04.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-68-10-e30c8c04.png)
- **Original Services**（NAT前のサービス/ポート）：[![Userguide Checkpoint FPT NGFW 2022 69](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-69-10-a48979cb.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-69-10-a48979cb.png)
- **Translated Source**（NAT後の送信元IP）：[![Userguide Checkpoint FPT NGFW 2022 70](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-70-10-9a29270a.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-70-10-9a29270a.png)

送信元IPはそのまま維持します。

- **Translated Destination**（NAT後の宛先IP）：[![Userguide Checkpoint FPT NGFW 2022 71](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-71-10-3ed249b0.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-71-10-3ed249b0.png)
- **Translated Services**（NAT後のサービス/ポート）：[![Userguide Checkpoint FPT NGFW 2022 72](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-72-10-d9e3bb2b.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-72-10-d9e3bb2b.png)
- **Install On**（NATルールを含むデバイス）：[![Userguide Checkpoint FPT NGFW 2022 73](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-73-10-5d70b6f5.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-73-10-5d70b6f5.png)

作成後のDNATルール：

[![Userguide Checkpoint FPT NGFW 2022 74](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-74-10-4254a83f.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-74-10-4254a83f.png)

**ステップ4：** DNATの接続を許可するファイアウォールルールを作成します。

[![Userguide Checkpoint FPT NGFW 2022 75](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-75-10-32e9c82c.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-75-10-32e9c82c.png)

**ステップ5：** Install Policyを実行します。
