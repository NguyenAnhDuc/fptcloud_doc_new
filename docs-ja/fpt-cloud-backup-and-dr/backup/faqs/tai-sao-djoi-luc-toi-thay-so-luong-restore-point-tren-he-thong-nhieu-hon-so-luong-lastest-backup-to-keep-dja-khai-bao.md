---
id: "tai-sao-djoi-luc-toi-thay-so-luong-restore-point-tren-he-thong-nhieu-hon-so-luong-lastest-backup-to-keep-dja-khai-bao"
title: "設定したLatest Backup to Keepより多くのリストアポイントが表示されるのはなぜですか？"
description: "増分バックアップチェーンの依存関係により、リストアポイント数が設定値を超える場合がある理由の説明。"
sidebar_label: "リストアポイントが設定より多いのはなぜ？"
sidebar_position: "12"
---

# 設定したLatest Backup to Keepより多くのリストアポイントが表示されるのはなぜですか？

**増分バックアップ**の性質（現在のシステムと最新のバックアップの差分のみを保存する）により、**増分バックアップ**を復元するには古いリストアポイントが必要です。選択したバックアップモードに応じて、**FPT Cloud**はストレージ容量を最適化するために不要になったリストアポイントを常に自動的に削除します。
