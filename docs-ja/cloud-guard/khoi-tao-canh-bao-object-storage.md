---
id: "khoi-tao-canh-bao-object-storage"
title: "Object Storage のアラートを作成する"
sidebar_label: "Object Storage のアラートを作成する"
sidebar_position: 5
---

# Object Storage のアラートを作成する

**手順 1:** メニューから **Security** > **Cloud Guard** に移動し、**Resource Alerts** タブを開いて **Create Alert** をクリックします。

Object Storage のアラートを作成するには、**Type** = **Object Storage** を選択します。

[![file](/img/migrated/image-1696235964781-27725bb4.png)](/img/migrated/image-1696235964781-27725bb4.png)

**Metric Type**、**Apply to**、**Severity** を選択し、**Configure Condition** でアラート条件を設定して、**Notify to** で受信者を選択します。

:::note
Object Storage アラートの受信者は **Tenant レベル**の受信者である必要があります。これらの受信者は、同じ Tenant に属するすべての VPC で共有されます。
:::

**手順 2:** 受信者を選択するか、**Create recipient here** をクリックして新しい Tenant レベルの受信者を作成します。

[![file](/img/migrated/image-1696236659925-9bb270d8.png)](/img/migrated/image-1696236659925-9bb270d8.png)

**Tenant-level recipient** にチェックを入れて、Tenant 全体の受信者を作成します。

**手順 3:** アラート作成画面に戻り、新しく作成した受信者を選択して **Create** をクリックします。

[![file](/img/migrated/image-1696237048466-bfaa420d.png)](/img/migrated/image-1696237048466-bfaa420d.png)

アラートが作成されてリストに表示されます。条件が超過した場合または正常に戻った場合、設定した通知方法で受信者に自動的に通知が送信されます。
