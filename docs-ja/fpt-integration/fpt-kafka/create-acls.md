---
id: "create-acls"
title: "ACLの作成"
description: "FPT KafkaでアクセスをコントロールするためのACLを作成する方法。"
sidebar_label: "ACLの作成"
sidebar_position: 14
---

# ACLの作成

ACLは特定のtopicまたはconsumer groupに対するcredentialのRead/Write権限を付与または拒否し、必要に応じてIPベースの制限を追加します。ACLを作成する前にcredentialを作成する必要があります。

1. メニューから**Application** > **ACLs**に移動し、**Create**をクリックします。
2. 必要な情報を入力します：
   - **Credential**（必須）：作成済みのcredentialを選択
   - **Resource Type**（必須）：TopicまたはGroup — 対象リソースを定義
   - **Pattern Type**（必須）：
     - **Literal**：「Resource name」フィールドで指定した1つのtopic/groupにのみ適用
     - **Prefixed**：「Resource name」フィールドのprefixを持つすべてのtopic/groupに適用
   - **Host**（任意）：接続を許可するIPアドレス。空白にするとすべてのIPを許可
   - **Operation**（必須）：ReadまたはWrite
   - **Permission**（必須）：AllowまたはDeny

   [![credential・リソースタイプ・権限オプションを含むACL作成フォーム](/img/migrated/Pic1_ACL-194aa4c5.png)](/img/migrated/Pic1_ACL-194aa4c5.png)

3. **OK**をクリックして完了します。
