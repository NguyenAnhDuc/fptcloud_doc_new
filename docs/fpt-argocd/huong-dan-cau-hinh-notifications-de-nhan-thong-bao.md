---
id: "huong-dan-cau-hinh-notifications-de-nhan-thong-bao"
title: "Hướng dẫn cấu hình notifications để nhận thông báo khi ứng dụng thay đổi"
description: "**_1. Telegram_**"
sidebar_label: "Hướng dẫn cấu hình notifications để nhận thông báo khi ứng dụng thay đổi"
sidebar_position: "50"
---

# Huong Dan Cau Hinh Notifications De Nhan Thong Bao

**_1. Telegram_**
Để thực hiện cấu hình thông báo tới telegram thực hiện các bước sau: Bước 1: Lấy API token sử dụng @Botfather. Sử dụng ứng dụng Telegram, tìm kiếm @BotFather
[![](/img/migrated/Picture93-1-ce5f72d1.png)](/img/migrated/Picture93-1-ce5f72d1.png)
Gõ **/help** để xem các options được sử dụng
[![](/img/migrated/Picture94-1-1e58a9d9.png)](/img/migrated/Picture94-1-1e58a9d9.png)
Gõ **/newbot** để tạo bot mới:
[![](/img/migrated/Picture95-1-ca767ba6.png)](/img/migrated/Picture95-1-ca767ba6.png)
Nhập tên bot _Lưu ý tên bot phải kết thúc bằng "bot"_
[![](/img/migrated/Picture96-1-bd26e3a2.png)](/img/migrated/Picture96-1-bd26e3a2.png)
Token access được sử dụng để cấu hình token Telegram trên Portal. Tương tự mục 5.12.2 (mục a)
**Bước 2** : Cấu hình Token trên FPT Cloud để gửi thông báo tới telegram theo mục 5.12.2.1
**Bước 3** : Tạo một channel để nhận thông báo 
[![](/img/migrated/Picture97-1-2ce6eac4.png)](/img/migrated/Picture97-1-2ce6eac4.png)
Chọn private channel:
[![](/img/migrated/Picture98-1-38531c73.png)](/img/migrated/Picture98-1-38531c73.png)
**Bước 4** : Thêm account bot vừa tạo tới channel
[![](/img/migrated/Picture99-1-7d3819fc.png)](/img/migrated/Picture99-1-7d3819fc.png)
**Bước 5** : Sử dụng **ChatID** trong subscription để tích hợp telegram: 
[![](/img/migrated/Picture100-1-bcafb00a.png)](/img/migrated/Picture100-1-bcafb00a.png)
**Bước 6** : Cấu hình Notifications telegram trong applications:
[![](/img/migrated/Picture101-1-1d6a048a.png)](/img/migrated/Picture101-1-1d6a048a.png)
**Bước 7** : Thực hiện Sync Applications và xem message gửi tới telegram:
[![](/img/migrated/Picture102-1-cb19eee7.png)](/img/migrated/Picture102-1-cb19eee7.png)
**_2. Slack_**
**Bước 1** : Tạo workspace slack:
[![](/img/migrated/Picture103-1-5d03b136.png)](/img/migrated/Picture103-1-5d03b136.png)
**Bước 2** : Tạo channel:
[![](/img/migrated/Picture104-1-6d217f24.png)](/img/migrated/Picture104-1-6d217f24.png)
**Bước 3** : Tạo mới app trong slack để sử dụng theo [link](https://api.slack.com/apps). 
[![](/img/migrated/Picture105-1-c0c06844.png)](/img/migrated/Picture105-1-c0c06844.png)
Tạo App **From scratch**(click)
[![](/img/migrated/Picture106-1-fa3dbfc2.png)](/img/migrated/Picture106-1-fa3dbfc2.png)
**Bước 4** : Thực hiện cấu hình **OAuth & Permissions**:
[![](/img/migrated/Picture107-1-92d32a17.png)](/img/migrated/Picture107-1-92d32a17.png)
Thực hiện cấu hình OAuth Scope để cho phép ArgoCD Notifictions gửi thông báo tới Channel:
[![](/img/migrated/Picture108-1-5ea1dd4e.png)](/img/migrated/Picture108-1-5ea1dd4e.png)
**Bước 5** : Thực hiện cấu hình **OAuth Tokens for Your Workspace** :
[![](/img/migrated/Picture109-1-d8859cb0.png)](/img/migrated/Picture109-1-d8859cb0.png) [![](/img/migrated/Picture110-1-3d87cff7.png)](/img/migrated/Picture110-1-3d87cff7.png)
Slack sẽ tạo một **Bot User OAuth Token**. 
[![](/img/migrated/Picture111-1-32b46326.png)](/img/migrated/Picture111-1-32b46326.png)
**Bước 6** : Cấu hình Slack token trên Portal FPT Cloud để gửi thông báo từ ArgoCD Notifications tới Slack sử dụng **Bot User OAuth Token**. Thực hiện tương tự mục 5.12.2.2
**Bước 7** : Thêm Apps tới channel:
[![](/img/migrated/Picture112-1-15069836.png)](/img/migrated/Picture112-1-15069836.png)
**Bước 8** : Thực hiện cấu hình ArgoCD Applications để gửi thông báo tới slack:
Sau khi applications được tạo, thực hiện Edit app thêm annotations, thông báo sẽ được gửi tới channel:
[![](/img/migrated/Picture113-1-8b39278c.png)](/img/migrated/Picture113-1-8b39278c.png) [![](/img/migrated/Picture114-1-1a266777.png)](/img/migrated/Picture114-1-1a266777.png)
Thực hiện Sync Applications để test notifiations:
[![](/img/migrated/Picture115-1-6b2804be.png)](/img/migrated/Picture115-1-6b2804be.png)
Channel của slack sẽ nhận được thông báo lên quan đến trạng thái của Applications:
[![](/img/migrated/Picture116-1-e420e948.png)](/img/migrated/Picture116-1-e420e948.png)
**_3. Email_**
**Bước 1** : Thực hiện cấu hình thông tin email tương tự mục 5.12.2.3 trên Portal
**Bước 2** : Thực hiện cấu hình ArgoCD Applications để gửi thông báo đến mail bằng cách thêm annotations như sau:
[![](/img/migrated/Picture117-1-a00e335a.png)](/img/migrated/Picture117-1-a00e335a.png)
**Bước 3** : Thực hiện sync ứng dụng thông báo sẽ được gửi đến email của người nhận đã được config:
[![](/img/migrated/Picture118-1-deb1583a.png)](/img/migrated/Picture118-1-deb1583a.png)
