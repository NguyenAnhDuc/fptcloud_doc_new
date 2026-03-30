---
id: "question-"
title: "NAT Instanceは通常のInstanceとして使用できますか？"
description: "NAT Instanceに関するよくある質問。"
sidebar_label: "FAQ：NAT Instance"
sidebar_position: 107
---

# NAT Instanceは通常のInstanceとして使用できますか？

はい。NAT InstanceはUbuntu上に構築され、NATをサポートする追加のルールがインストールされています。通常のInstanceと同様に使用できます。

routed network用のプライマリNICに加えて、NAT Instanceは9つのisolated networkにわたって最大9つの追加NICを持つことができます。各ネットワーク内のInstanceは、NAT InstanceのNICにデフォルトゲートウェイをリダイレクトするだけでインターネットにアクセスできます。
