---
id: "xoa-policy"
title: "Xóa Policy"
sidebar_label: "Xóa Policy"
sidebar_position: "17"
---

# Xóa Policy

##  **ステップ1:** Truy cập trang **Autoscaling > Autoscale Policy**. Trên dòng tương ứng với policy cần xóa, chọn biểu tượng **delete**.
[![delete policy](/img/migrated/Screenshot-2024-10-02-071116-37f91343.png)](/img/migrated/Screenshot-2024-10-02-071116-37f91343.png)
##  **ステップ2:** Một hộp thoại sẽ xuất hiện. Nếu tên policy cần xóa là chính xác, chọn **Delete policy** để xác nhận. Ngược lại, chọn **Cancel** để hủy thao tác.
[![delete policy confirmation dialog](/img/migrated/Screenshot-2024-10-02-071213-f062f4ca.png)](/img/migrated/Screenshot-2024-10-02-071213-f062f4ca.png)
## Lưu ý
Trong trường hợp nhận được thông báo sau:
[![delete policy failed becase still linked to a group](/img/migrated/Screenshot-2024-10-02-071245-ee662fd2.png)](/img/migrated/Screenshot-2024-10-02-071245-ee662fd2.png)
Điều này có nghĩa là policy đang được liên kết với một hoặc nhiều Autoscale Group. Hãy đảm bảo policy đã được detach hoàn tất khỏi tất cả các group trước khi thực hiện lại việc xóa Autoscale Policy.
