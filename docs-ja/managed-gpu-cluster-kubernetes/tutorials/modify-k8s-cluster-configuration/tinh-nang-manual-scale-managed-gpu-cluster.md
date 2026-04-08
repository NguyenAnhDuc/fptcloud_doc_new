---
id: "tinh-nang-manual-scale-managed-gpu-cluster"
title: "Managed GPU Clusterの手動スケール"
description: "Manual Scaleを使用すると、ユーザーは必要に応じてシステムのリソーススケールを能動的に調整できます。"
sidebar_label: "Managed GPU Clusterの手動スケール"
sidebar_position: 3
---

# Managed GPU Clusterの手動スケール

Manual Scaleを使用すると、ユーザーは必要に応じてシステムのリソーススケールを能動的に調整できます。以下の手順でポータルからMetal Cloud Serverの数を増減できます。

**手順1:** メニューで **AI Infrastructure** > **Managed GPU Cluster** を選択します。システムは **Managed GPU Management** ページを表示します。スケールしたいクラスターを選択します。

[![](/img/migrated/17-502dd1f3.png)](/img/migrated/17-502dd1f3.png)

**手順2:** スケールしたいクラスターをクリックし、**Node Pools** > **Edit Workers** を選択します。

[![](/img/migrated/21-de403ab8.png)](/img/migrated/21-de403ab8.png)

[![](/img/migrated/22-ba5ffbfa.png)](/img/migrated/22-ba5ffbfa.png)

**手順3:** **Number of Server** を希望の値に更新し、**Save** をクリックします。

[![](/img/migrated/23-82548293.png)](/img/migrated/23-82548293.png)

**注意:**

手動スケールプロセスは数分かかります。新しいworkerがクラスターに正常に参加するまで、クラスターのステータスは **Processing** に変わります。新しいサーバーのスケールアップ中も、クラスターは正常に動作し続けます。
