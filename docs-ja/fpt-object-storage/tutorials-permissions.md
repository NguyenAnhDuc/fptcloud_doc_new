---
id: "tutorials-permissions"
title: "Tutorials Permissions"
sidebar_label: "Tutorials Permissions"
sidebar_position: 6
---

パーミッション


## バケット**アクセスコントロールリスト**（Bucket ACL）

Bucket ACLはバケットのアクセス制御メカニズムです。バケットとその中のオブジェクトに対して、誰が閲覧、書き込み、または管理の権限を持つかを制御できます。

FPT Object StorageではPublicとPrivateの2つの基本権限が定義されています。

  * **Private：** 認証・認可済みのユーザーのみがバケットにアクセスまたは管理できます。
  * **Public：** インターネット上の匿名ユーザーを含む誰もがバケットへの読み取り専用アクセスを持ちます。バケットURLさえあれば、バケット内のオブジェクト一覧をすべて閲覧できます。ただし、Bucket ACLは個別のオブジェクトには適用されません。バケット内のオブジェクトを公開するには、Bucket PolicyまたはObject ACL機能を使用する必要があります。


Bucket ACLを設定するには、以下の手順で操作します。

**ステップ1：** 設定するバケットの**Action**セクションで**Config**を選択します。

**ステップ2：** **Public**または**Private**を選択します。

## オブジェクト**アクセスコントロールリスト**（Object Permission）

**FPT Object Storage**の**Object Permissions**は、他のユーザーがオブジェクトに対して実行できるアクションを定義します。個々のオブジェクトの権限を調整するには、ACLメカニズムに基づいてFPT Unify Portalの**Edit Object Permissions**機能を使用できます。主な権限グループは2つあります。

  * **Private：** 匿名ユーザーのアクセスを制限します。認証・認可済みのユーザーのみがオブジェクトを閲覧できます。
  * **Public：** Object URLを通じて、匿名ユーザーを含むすべての人に読み取り専用アクセスを提供します。


Object Permissionsは**Bucket Policy**の影響も受けることに注意してください。Bucket PolicyはObject ACLより優先されます。両方の権限レイヤーを同時に使用する場合は注意が必要です。

Bucket Policyですべてのオブジェクトが公開と指定されている場合、個々のオブジェクトのACL権限に関わらず、すべてのオブジェクトが公開（読み取り専用）でアクセス可能になります。

FPT Object Storageで**Object Permissions**を設定するには、以下の手順で操作します。

**ステップ1：** **Object Storage Management**ダッシュボードで、権限を変更したいファイルが含まれているバケットを選択します。

**ステップ2：** バケット内のファイルの場所に移動します。**Action**セクションで**Edit Permission**をクリックします。

**ステップ3：** **Read permission**フィールドで希望の表示モード（PublicまたはPrivate）を選択し、**Update**をクリックして変更を保存します。

## Bucket Policyの設定

Bucket PolicyはS3互換のアクセス管理メカニズムで、バケット内のオブジェクトへのアクセスや操作を行えるユーザーと実行可能なアクションについて、詳細なルールを定義できます。IPアドレス、時間、アクションタイプ（GET、PUT、DELETEなど）に基づいてアクセスを許可または拒否するルールを作成できます。

Bucket Policyは、他の組織とバケットを共有したり、データを保護したりする際に役立ちます。他のサービスや特定のユーザー/サブユーザーからのアクセスを許可するポリシーを設定できます。サブユーザーや他のユーザーに権限を設定するツールを提供します。

Bucket PolicyはAWS標準に従ったJSON形式で記述します。[こちら](<https://awspolicygen.s3.amazonaws.com/policygen.html>)のAWSポリシージェネレーターツールを使用してFPT Object Storageに適用できます。

以下はバケットポリシーの例です。
[code]
    Copy{
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "AllowPublicRead",
          "Effect": "Allow",
          "Principal": "*",
          "Action": ["s3:GetObject"],
          "Resource": "arn:aws:s3:::example-bucket/*"
        }
      ]
    }

[/code]

上記の例では、ポリシーによりすべてのユーザー（_Principal: "*"_）が「example-bucket」という名前のバケット内のすべてのオブジェクト（_Resource*_）を読み取る（_Action: s3:GetObject_）権限が付与されます。これはexample-bucketが公開モードになり、誰でもバケット内のオブジェクトを取得できることを意味します。

Bucket Policyはバケット内のデータへのアクセスを管理する強力なツールです。ただし、承認されたユーザーのみがバケット内のデータにアクセスできるよう、バケットポリシーの設定には十分な注意が必要です。

重要な注意事項：

  * Bucket PolicyはObject ACLより優先されます。両方の権限レイヤーを同時に使用する場合は注意が必要です。
  * バケットポリシーは宣言されたバケットにのみ適用され、バケットをまたいで設定することはできません。例えば、bucket-1とbucket-2がある場合、bucket-1のBucket Policyでbucket-2のルールを宣言することはできませんし、その逆も同様です。


バケットのBucket Policyを設定するには、以下の手順で操作します。

**ステップ1：** 設定するバケットの**Action**セクションで**Config**を選択します。

**ステップ2：** すでにJSON形式のポリシーをお持ちでBucket Policyの使用経験がある場合は**JSON Editor**モードを選択します。そうでない場合は**Visual Editor**を使用してください。

**ステップ3：** 必要な情報をすべて入力したら、新規作成の場合は**Create**、更新の場合は**Update**をクリックします。
