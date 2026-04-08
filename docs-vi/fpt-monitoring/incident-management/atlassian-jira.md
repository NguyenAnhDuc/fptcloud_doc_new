---
id: "atlassian-jira"
title: "Atlassian Jira"
description: "Hướng dẫn tích hợp Atlassian Jira với Incident Management"
sidebar_label: "Atlassian Jira"
sidebar_position: 8
---

# Atlassian Jira

Tích hợp **Atlassian Jira** giúp duy trì trạng thái dự án chính xác trong quá trình ứng phó sự cố. Khi một incident được khai báo, hệ thống sẽ tự động tạo **bug issue** trên Jira kèm theo link incident tương ứng.

## Cài đặt Jira

[![Form cài đặt Jira](/img/migrated/Picture12-e85cc061.png)](/img/migrated/Picture12-e85cc061.png)

Nhập các thông tin:

- **Atlassian Server URL**: URL truy cập hệ thống Atlassian Jira
- **User email**: email tài khoản đăng ký với Atlassian Jira
- **Access Token**: access token của tài khoản

:::note
Xem hướng dẫn tạo hoặc lấy Access Token [tại đây](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).
:::

Sau khi điền đầy đủ thông tin, nhấn **Integration** để tích hợp Jira vào hệ thống.

## Tạo trigger

Sau khi cài đặt Jira thành công, nhấn **Show details** rồi nhấn **Run when an event fires**.

[![Form tạo trigger Jira](/img/migrated/Picture15-0aab59a9.png)](/img/migrated/Picture15-0aab59a9.png)

Nhập các thông tin:

- **Jira Project**: dự án Jira để khởi tạo issue
- **Issue Type**: loại issue khi khởi tạo
- **Incident active status**: trạng thái issue khi incident ở trạng thái active
- **Incident resolved status**: trạng thái issue khi incident ở trạng thái resolved
- **Run this action when**: chọn **Incident is declared**

Nhấn **Add event action** để hoàn tất.

:::note
Bạn có thể tạo nhiều trigger bằng cách tiếp tục nhấn **Run when an event fires**.
:::

Ví dụ bug issue được tạo tự động trên Jira:

[![Ví dụ bug issue tự động tạo trên Jira](/img/migrated/Screenshot_11-1-3905656c.png)](/img/migrated/Screenshot_11-1-3905656c.png)

## Xóa trigger

Nhấn biểu tượng **Trash** để xóa trigger.

[![Xóa trigger Jira](/img/migrated/Picture17-d289c674.png)](/img/migrated/Picture17-d289c674.png)
