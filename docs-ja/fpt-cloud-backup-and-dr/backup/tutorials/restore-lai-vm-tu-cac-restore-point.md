---
id: "restore-lai-vm-tu-cac-restore-point"
title: "リストアポイントからVMを復元する"
description: "FPT BackupのリストアポイントからVMを以前の安定した状態に復元する方法。"
sidebar_label: "リストアポイントからVMを復元する"
sidebar_position: "4"
---

# リストアポイントからVMを復元する

**Backup Job**によって保護されているVMは、システムが安定して稼働している時点で定期的にリストアポイントが作成されます。システムに問題が発生した場合、最も直近の安定したポイントにVMを復元するだけです。

リストアポイントからVMを復元するには、以下の手順に従ってください：

**ステップ1：** メニューで**Backup & Recovery** > **Backup & Recovery Management**を選択します。**Restore**タブを開きます。現在保護されているVMと、これまでに正常に作成されたリストアポイントの数が表示されます。

**ステップ2：** 復元するVMの**Action**セクションで**Restore**を選択します。

**ステップ3：** **Instance restore**ポップアップに、**インスタンス名**とそのVMの**リストアポイント**リストが表示されます。復元する**リストアポイント**を選択し、**Restore Instance**をクリックします。

**ステップ4：** ユーザーに確認を求める警告ダイアログが表示されます。**Restore Instance**を選択してVMの復元を進めます。
