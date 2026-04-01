---
id: "xoa-policy"
title: "Delete Policy"
sidebar_label: "Delete Policy"
sidebar_position: "17"
---

# Delete Policy

##  **Step 1:** Access the page **Autoscaling > Autoscale Policy**. Trên dòng corresponding with policy need to xóa, chọn biểu tượng **delete**.
[![delete policy](/img/migrated/Screenshot-2024-10-02-071116-37f91343.png)](/img/migrated/Screenshot-2024-10-02-071116-37f91343.png)
##  **Step 2:** Một hộp thoại will appears. Nếu tên policy need to xóa là chính xác, chọn **Delete policy** to xác nhận. Ngược lại, chọn **Cancel** to hủy thao tác.
[![delete policy confirmation dialog](/img/migrated/Screenshot-2024-10-02-071213-f062f4ca.png)](/img/migrated/Screenshot-2024-10-02-071213-f062f4ca.png)
## Save ý
Trong trường hợp nhận is notification sau:
[![delete policy failed becase still linked to a group](/img/migrated/Screenshot-2024-10-02-071245-ee662fd2.png)](/img/migrated/Screenshot-2024-10-02-071245-ee662fd2.png)
Điều this có nghĩa là policy is is liên kết with a or nhiều Autoscale Group. Hãy đảm bảo policy has been is detach hoàn tất khỏi tất cả the group before thực hiện lại việc xóa Autoscale Policy.
