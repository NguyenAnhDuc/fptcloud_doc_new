---
id: "question"
title: "NAT Instanceは通常のインスタンスとして使用できますか？"
description: "NAT Instanceの通常インスタンスとしての利用と、サポートできるisolated networkの最大数についての説明です。"
sidebar_label: "NAT Instanceは通常のインスタンスとして使用できますか？"
sidebar_position: 6
---

# NAT Instanceは通常のインスタンスとして使用できますか？

はい。NAT InstanceはUbuntu上に構築され、NATルールが追加インストールされています。システム上の通常のインスタンスとして使用できます。

## 1つのNAT Instanceは最大何個のisolated networkをサポートできますか？

routed network用のprimary NICを除き、NAT Instanceはそれぞれ異なるisolated networkに属する最大9個の追加NICを持つことができます。各isolated networkでインターネットアクセスが必要なインスタンスは、default gatewayを対応するNAT InstanceのNICのIPアドレスに設定するだけで利用できます。
