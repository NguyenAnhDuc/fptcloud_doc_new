---
id: "redirect-http-request-sang-https"
title: "HTTPからHTTPSへのリダイレクト設定"
sidebar_label: "HTTPからHTTPSへのリダイレクト設定"
sidebar_position: 15
description: "データの整合性を保護するため、Load BalancerでHTTPトラフィックをHTTPSにリダイレクトするガイド。"
---

# HTTPからHTTPSへのリダイレクト設定

データの整合性を保護するため、Load Balancerですべての**HTTP**トラフィックを**HTTPS**にリダイレクトするよう設定できます。以下の手順に従ってください。

> **Note:** 新しく作成した**HTTP Listener（ポート80）**にはServer Poolを紐付ける必要はありません。すべての**HTTP**リクエストはすでに**HTTPS**にリダイレクトされるためです。

**HTTP**アクセスが自動的に**HTTPS**にリダイレクトされることを確認してください。
