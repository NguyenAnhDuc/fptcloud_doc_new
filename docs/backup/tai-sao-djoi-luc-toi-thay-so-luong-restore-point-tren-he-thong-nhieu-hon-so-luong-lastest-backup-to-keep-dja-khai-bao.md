---
id: "tai-sao-djoi-luc-toi-thay-so-luong-restore-point-tren-he-thong-nhieu-hon-so-luong-lastest-backup-to-keep-dja-khai-bao"
title: "Why do I sometimes see more Restore Points than the Latest Backup to Keep value I configured?"
description: "Explanation of why restore point count may exceed the configured Latest Backup to Keep value due to incremental backup chain dependencies."
sidebar_label: "Why are there more Restore Points than configured?"
sidebar_position: "12"
---
# Why do I sometimes see more Restore Points than the Latest Backup to Keep value I configured?

Due to the nature of **incremental backup** — which only stores the changes between the current system and the most recent backup — restoring an **incremental backup** requires the older Restore Points in the chain. Depending on the backup mode you have selected, **FPT Cloud** will always automatically delete Restore Points that are no longer needed to optimize storage capacity.
