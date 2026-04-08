---
id: "thay-doi-cau-hinh-internal-subnet-load-balancer"
title: "Internal subnet Load Balancer（CIDR）設定の変更"
description: "FPT Cloud は Unify Portal 上で Internal subnet Load Balancer（CIDR）の範囲を変更できます。"
sidebar_label: "Internal subnet Load Balancer（CIDR）設定の変更"
sidebar_position: 4
---

# Internal subnet Load Balancer（CIDR）設定の変更

FPT Cloud は、Unify Portal 上で Internal subnet Load Balancer（CIDR）の範囲を直接変更することをサポートしています。手順は以下のとおりです。

**ステップ 1:** Internal subnet Load Balancer を変更したいクラスターを選択し、クラスター名をクリックします。

[![](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)

**ステップ 2:** **Advanced** タブを選択し、**Config Internal subnet Load Balancer** ボタンをクリックします。

[![](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)

**ステップ 3:** 有効な CIDR 範囲を入力して **Confirm** ボタンをクリックします。

[![](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)

Internal subnet Load Balancer の更新処理は数分以内に完了します。処理中はクラスターのステータスが **Processing** に変わります。新しい Internal subnet Load Balancer（CIDR）への切り替え中も、クラスターは正常に動作し続けます。
