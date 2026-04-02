---
id: "aspm_v1.2.1"
title: "1. 概要"
description: "組織がセキュリティリスク管理と運用プロセスの最適化をますます重視する中、issueのライフサイクルを追跡・管理する機能が重要なニーズとなっています。"
sidebar_label: "1. 概要"
sidebar_position: 3
---

# Aspm_V1.2.1

組織がセキュリティリスク管理と運用プロセスの最適化をますます重視する中、issueのライフサイクルを追跡・管理する機能が重要なニーズとなっています。FPT Smart Cloudは、**Issue Life Cycle Management** 機能を搭載したFSP（FPT Security Platform）AppSec Serviceの新バージョンを発表しました。この機能により、ユーザーはissueのステータスをより包括的かつ透明性高く管理できます。
**1. 概要**
**Issue Life Cycle Management** 機能により、ユーザーはスキャン中に検出されたissueのステータスを主体的に管理できます。ユーザーはステータス（Open / Ignored）を変更し、理由やコメントを追加して、issue詳細画面でステータス変更履歴を追跡できます。
[![Alt text](/img/migrated/Screenshot-2025-11-14-152307-5fb4bde0.png)](/img/migrated/Screenshot-2025-11-14-152307-5fb4bde0.png)
**2. 機能**
  * Issue listとIssue detailでのステータス注記:
    * OpenとIgnoredの間でissueのステータスを切り替えます。
    * Open → Ignoredに変更する場合: ignoreの理由を必須で選択し、コメントを追加できます。
    * Ignored → Openに変更する場合: コメントを追加できます（任意）。
  * ステータスによるフィルター: Open、Ignored、およびignoreの理由によるissueのフィルタリングをサポートします。
  * Activityログ: 古いステータス、新しいステータス、変更日時、コメント（ある場合）を含むissueのステータス変更履歴を表示します。

**3. 機能の範囲**
  * Issue listとIssue detailの両方でissueの全ステータスを管理します。
  * issueのライフサイクル全体にわたって、無制限のステータス変更履歴の保存と取得をサポートします。

**4. パフォーマンス**
  * issueのステータスはデータの一貫性を確保するため、**次回のスキャン時に正式に更新されます**。
  * Activityでのステータス変更履歴の取得は、高速で直感的なレスポンスを保証します。
