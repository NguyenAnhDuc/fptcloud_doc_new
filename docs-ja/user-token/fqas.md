---
id: "fqas"
title: "よくある質問"
description: "FPT Cloud PortalのToken機能に関するよくある質問"
sidebar_label: "よくある質問"
sidebar_position: "5"
---

# よくある質問

**1. 一部のTokenが失効できないのはなぜですか？**

FPT Cloud Portalのアップグレード前に作成された古いTokenは、失効機能をサポートしていません。これらのTokenに対してシステムはツールチップ「Tokens created earlier cannot be revoked」を表示します。

**2. TokenはいつExpiredステータスに変わりますか？**

Tokenは作成時点から有効期限を過ぎると「Expired」ステータスに変わります。システムが自動的にこれを行い、以降そのTokenはAPIアクセスに使用できなくなります。
