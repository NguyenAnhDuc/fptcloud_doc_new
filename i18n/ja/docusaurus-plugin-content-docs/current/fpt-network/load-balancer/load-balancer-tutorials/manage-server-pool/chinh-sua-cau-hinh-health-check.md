---
id: "chinh-sua-cau-hinh-health-check"
title: "ヘルスチェックの設定"
description: "FPT Cloud Load Balancer のヘルスチェックの仕組みと設定方法を説明します。"
sidebar_label: "ヘルスチェックの設定"
sidebar_position: "23"
---

# ヘルスチェックの設定

**Health check** はバックエンドサーバーの可用性とパフォーマンスを確保する Load Balancer の重要な機能です。正常なサーバーを検出し、利用不能なサーバーをプールから自動的に除外します。

**仕組み：**

- **定期チェック**: Load Balancer は各 member に対して定期的にヘルスチェック（Ping、HTTP GET など）を実施します。
- **異常検知**: member が応答しないかエラーを返した場合、異常と判断されます。
- **異常メンバーの除外**: Load Balancer は異常な member へのトラフィック転送を停止します。

**メリット：**

- **可用性の向上**: 正常なサーバーのみがトラフィックを受け取ります。
- **パフォーマンスの最適化**: 障害が発生したサーバーを自動的に除外して Load Balancer が調整します。
- **自動管理**: 手動での介入を削減します。
- **セキュリティ**: 異常または安全でないサーバーへのトラフィック送信を防ぎます。

**サポートされるヘルスチェックの種類：**

- **Health check HTTP/HTTPS**: TCP または Proxy プロトコルの Server Pool 向け。
- **Health check TCP**: TCP または Proxy プロトコルの Server Pool 向け。
- **Health check PING**: UDP プロトコルの Server Pool 向け。

ヘルスチェックを設定するには、Server Pool のプロトコルに基づいてヘルスチェックプロトコルを選択します：

| Health Monitor \ Pool | HTTP | HTTPS | PING | SCTP | TCP | TLS-HELLO | UDP-CONNECT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HTTP | Y | Y | Y | N | Y | Y | N |
| HTTPS | Y | Y | Y | N | Y | Y | N |
| PROXY | Y | Y | Y | N | Y | Y | N |
| PROXYV2 | Y | Y | Y | N | Y | Y | N |
| SCTP | Y | N | N | Y | Y | N | Y |
| TCP | Y | Y | Y | N | Y | Y | N |
| UDP | Y | N | N | Y | Y | N | Y |
