---
id: "quan-ly-tag-retention-rule"
title: "Quản lý Tag Retention Rule"
description: "FPT Cloud hỗ trợ người dùng quản lý các Tag Retention Rule đã được tạo bao gồm Edit enable/disable/delete."
sidebar_label: "Quản lý Tag Retention Rule"
sidebar_position: 15
---

# Quan Ly Tag Retention Rule

FPT Cloud hỗ trợ người dùng quản lý các Tag Retention Rule đã được tạo bao gồm Edit enable/disable/delete. 
**_1. Cập nhật một Tag Retention Rule đã tạo_**
Trường hợp người dùng cần thay đổi một retentions rule đã tạo, có thể thực hiện như sau: 
**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > Chọn **Tag Retention Rule** muốn cập nhật > **Actions** > **Edit** : 
[![](/img/migrated/Picture34-1-011e1b7c.png)](/img/migrated/Picture34-1-011e1b7c.png)
**Bước 2** : Thực hiện cập nhật thông tin cấu hình retention rule: 
[![](/img/migrated/Picture35-1-86268cbd.png)](/img/migrated/Picture35-1-86268cbd.png)
Trong hộp thoại Edit, cho phép người dùng thay đổi cấu hình của một tag retention rule tương tự việc tạo mới một retentions. 
Ví dụ người dùng có thể thay đổi các repo được áp dụng quy tắc, hoặc thay đổi số lượng artifact được giữ lại, …. 
**Bước 3** : Kết quả sau khi cập nhật một retentions: 
[![](/img/migrated/Picture36-1-de8e7ba1.png)](/img/migrated/Picture36-1-de8e7ba1.png)
Ví dụ: 
**For the repositories matching **** **** , **retain the most recently pushed 50 artifacts with tags matching **** **** **with untagged:**
Người dùng vừa thực hiện thay đổi số lượng artifact được giữ lại từ 20 lên 50 artifacts 
**_2. Disable một Tag Retention Rule_**
Người dùng muốn Disable một Tag Retention Rule đang được cấu hình trong repository có thể thực hiện như sau: 
**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > Chọn **Tag Retention Rule** muốn cập nhật > **Actions** > **Disable** : 
[![](/img/migrated/Picture37-24e9ec98.png)](/img/migrated/Picture37-24e9ec98.png)
**Bước 2** : Kết quả sau khi disable tag retention rule: 
[![](/img/migrated/Picture38-1-1c93acbf.png)](/img/migrated/Picture38-1-1c93acbf.png)
**_3. Enable Tag Retention Rule đã disable_**
Người dùng muốn Enable một Tag Retention Rule đang được cấu hình trong repository có thể thực hiện như sau: 
**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > Chọn **Tag Retention Rule** muốn cập nhật > **Actions** > **Enable** : 
[![](/img/migrated/Picture39-1-7345b6d1.png)](/img/migrated/Picture39-1-7345b6d1.png)
**Bước 2** : Kết quả sau khi enable Tag Retention Rule 
[![](/img/migrated/Picture40-1-d3963172.png)](/img/migrated/Picture40-1-d3963172.png)
**_4. Delete Tag Retention Rule_**
Người dùng muốn Delete một Tag Retention Rule đang được cấu hình trong repository có thể thực hiện như sau: 
**Bước 1** : Tại menu **FPT Portal** > **Container Registry** > **Policy** > Chọn **Tag Retention Rule** muốn cập nhật > **Actions** > **Delete** : [![](/img/migrated/Picture41-1-1a763d9c.png)](/img/migrated/Picture41-1-1a763d9c.png)
**Bước 2** : Kết quả sau khi delete Tag Retention Rule:
[![](/img/migrated/Picture42-1-004f9073.png)](/img/migrated/Picture42-1-004f9073.png)