---
id: "fpt-cloud-desktop"
title: "FPT Cloud Desktop とは？"
description: "FPT Cloud Desktop 仮想デスクトップサービスの概要"
sidebar_label: "FPT Cloud Desktop とは？"
sidebar_position: "1"
---

# FPT Cloud Desktop とは？

FPT Cloud Desktop（FCD）は、FPT Smart Cloud が自社開発した FPT Cloud プラットフォーム上に構築された、柔軟かつセキュアな仮想デスクトップサービスです。インターネット接続があれば、さまざまなデバイスやオペレーティングシステムからどこでも仮想デスクトップにアクセスできます。

## 従来の PC に対する優位性

- **データセキュリティ:** 暗号化ストレージ、集中管理、アクセス制御
- **継続的なセキュリティパッチの適用:** 集中的かつ一貫した更新により、時間とリソースを節約
- **インシデント発生時のデータ整合性:** 自動バックアップとディザスタリカバリソリューションの組み合わせ
- **高速かつ柔軟なリソースのスケーリング:** 数時間以内に数千台の仮想デスクトップをプロビジョニング

## 対応する接続デバイス

- Desktop、PC、Laptop
- Mobile（Smartphone）または Tablet
- ThinClient または FPT MiniPC

## アクセス方法

- **Native FCDClient（推奨）:** アプリケーションから仮想デスクトップに直接アクセスでき、最もスムーズで安定したエクスペリエンスを提供します。
- **Web ブラウザ:** インストール不要のブラウザ経由による迅速なアクセス方法です。

[![FPT Cloud Desktop アーキテクチャ図](/img/migrated/image-1767856680108-b18151cf.png)](/img/migrated/image-1767856680108-b18151cf.png)

## 用語と定義

| Terms (English) | Terms (Vietnamese) | 略語 | 定義 |
|---|---|---|---|
| **Virtual Desktop** | Máy ảo / Máy tính ảo | VD | 標準的な物理コンピューターと同様のソフトウェア機能とパフォーマンスを提供する仮想マシンです。仮想マシンは FPT Cloud インフラを共有します。各ユーザーは、異なる構成やオペレーティングシステムで複数の仮想マシンを同時にプロビジョニングして使用できます。 |
| **Desktop Pool** | Nhóm máy ảo | Pool | 共通の Cloud 処理・ストレージインフラを共有する複数の仮想マシンのグループです。通常、部門・機能・使用時間帯などで仮想マシンをグループ化するために使用されます。 |
| **Operating System** | Hệ điều hành | OS | 例: Microsoft Windows、macOS |
| **End-User / User** | Người dùng cuối | N/A | FCD 仮想マシンのエンドユーザーです。FCD User Portal にログインし、プロビジョニングされた仮想マシンにアクセスして、通常の物理コンピューターと同様に使用できます。 |
| **Supported Device** | Thiết bị hỗ trợ | N/A | プロビジョニングされた仮想マシンにアクセスして使用できるデバイスです。 |
| **Local Device** | Thiết bị kết nối | N/A | 仮想マシンへの接続を確立するために使用するデバイスです。 |
| **Local Area Network** | Mạng nội bộ | LAN | 組織内のコンピューターを接続するために使用するネットワークシステムです。 |
| **Authenticator App** | Phần mềm xác thực | N/A | アカウントログインに使用する 6 桁のランダムな確認コードを生成するアプリケーションです。有効期限は 30 秒です。 |
| **Active Directory** | Quản lý thư mục và xác thực | AD | 集中型ユーザー管理システムです。 |
