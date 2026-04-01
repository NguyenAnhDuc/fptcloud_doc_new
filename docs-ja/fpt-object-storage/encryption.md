---
id: "encryption"
title: "暗号化（SSE-C）"
description: "FPT Object Storage での Server-Side Encryption with Customer-Provided Keys（SSE-C）の利用ガイドです。"
sidebar_label: "暗号化（SSE-C）"
sidebar_position: 8
pagination_next: null
---

# 暗号化（SSE-C）

## Server-Side Encryption with Customer-Provided Keys（SSE-C）

**Server-Side Encryption with Customer-Provided Keys（SSE-C）** は **FPT Object Storage** の機能で、お客様が提供する暗号化キーを使用してデータのセキュリティを強化します。

### SSE-C の動作方法

1. **データのアップロード:**
   - object をアップロードする際、データとともに暗号化キーを提供する必要があります。
   - FPT Object Storage はこの暗号化キーを使用してデータを暗号化してから保存します。
   - 暗号化が完了すると、暗号化キーは破棄されシステムに保存されません。

2. **データのダウンロード:**
   - データをダウンロードする際、最初にデータの暗号化に使用した暗号化キーを提供する必要があります。
   - FPT Object Storage はこのキーを使用してデータを復号化し、返します。

### 重要なポイント

- **キーの管理:**
  - お客様は暗号化キーの管理について全責任を負います。
  - FPT Object Storage はお客様の暗号化キーを保存しません。暗号化キーを紛失した場合、そのキーで暗号化されたデータにアクセスできなくなります。

- **セキュリティ:**
  - SSE-C はデータ保護の追加レイヤーを提供し、厳格なセキュリティ規制の遵守を求める組織に特に有用です。
  - お客様は暗号化キーの管理を通じて重要な object へのアクセスを完全に制御できます。

- **使用方法:**
  - SSE-C を使用する際は、暗号化キーを自分で作成・保存・保護する必要があります。
  - 暗号化キーを管理・保護するための適切なセキュリティプロセスを確保してください。

SSE-C は **FPT Object Storage** 内の機密データを保護する効果的な方法で、お客様にデータへのアクセスとセキュリティに関する最大限の制御を提供します。
