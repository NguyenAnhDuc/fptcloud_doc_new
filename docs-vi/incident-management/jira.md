---
id: "jira"
title: "Jira"
description: "**C. Atlassian Jira**"
sidebar_label: "Jira"
sidebar_position: 7
---

# Jira

**C. Atlassian Jira**
Tích hợp Atlassian Jira giúp bạn duy trì trạng thái dự án Jira chính xác và tin cậy trong quá trình ứng phó sự cố. Liên kết tài khoản Jira của bạn sẽ tự động tạo **bug issue** khi một incident được khai báo. 
Cài đặt Jira
[![](/img/migrated/Picture12-e85cc061.png)](/img/migrated/Picture12-e85cc061.png)
  * **Atlassian Server URL** : URL truy cập vào hệ thống Atlassian Jira 
  * **User email** : Email của tài khoản đã đăng ký với Atlassian Jira 
  * **Access Token** : Access Token của tài khoản trên

**Note** : Xem hướng dẫn tạo/lấy Access Token **[tại đây](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)**
Sau khi điền đầy đủ thông tin, click **“Integration”** để tích hợp jira vào hệ thống incident. 
Sau khi cài đặt Jira thành công, xem chi tiết thông tin Jira webhook, click **Show details**
**Kích hoạt sự kiện (trigger event)**
Click **“Run when an event fires”** để tạo 1 trigger
[![](/img/migrated/Picture15-0aab59a9.png)](/img/migrated/Picture15-0aab59a9.png)
  * **Jira Project** : Chọn dự án jira mong muốn khởi tạo issue 
  * **Issue Type** : Loại issue khi khởi tạo 
  * **Incident active stattus** : Trạng thái khởi tạo của issue khi incident có trạng thái active 
  * **Incident resolved stattus** : Trạng thái khởi tạo của issue khi incident có trạng thái resolved 

**Run this action when:**
  * **Incident is declared** : incident được khai báo

Sau khi điền đầy đủ thông tin, click **“Add event action”** để tạo trigger 
Bạn cũng có thể tạo nhiều trigger bằng cách tiếp tục click **“Run when an event fires”** để tạo 1 trigger mới. 
Liên kết tài khoản Jira của bạn sẽ **tự động** tạo **bug issue** khi một incident được khai báo kèm theo link incident tương ứng. 
Ví dụ như sau: 
[![Alt text](/img/migrated/Screenshot_11-1-3905656c.png)](/img/migrated/Screenshot_11-1-3905656c.png)
**Xóa trigger**
Click icon **Trash** để xóa trigger
[![](/img/migrated/Picture17-d289c674.png)](/img/migrated/Picture17-d289c674.png)