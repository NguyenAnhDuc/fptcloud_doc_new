---
id: "configure-webhook"
title: "Webhookの設定"
description: "リポジトリの変更を検出するためのArgoCDのGit webhookの概要"
sidebar_label: "Webhookの設定"
sidebar_position: 13
draft: true
---

# Webhookの設定

ArgoCDはGit repositoryの変更を3分ごとに自動確認します。さらに、ArgoCDはGitHub、GitLab、Bitbucket、Bitbucket Server、GogsからのGit webhook notificationをサポートし、新しいcommitがあった際に即座に変更を検出して同期します。

:::note
各webhookタイプは1回のみ作成でき、後で更新できます。ArgoCDはwehookタイプごとに複数のsecretの設定をサポートしていません。
:::
