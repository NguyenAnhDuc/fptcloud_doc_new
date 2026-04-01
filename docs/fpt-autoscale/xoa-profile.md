---
id: "xoa-profile"
title: "Xóa Profile"
sidebar_label: "Xóa Profile"
sidebar_position: "5"
---

# Xóa Profile

##  **Step 1:** Truy cập trang **Autoscaling > Autoscale Profile**. Trên dòng tương ứng với profile cần xóa, chọn biểu tượng **Delete**.
[![delete profile](/img/migrated/Screenshot-2024-10-01-171413-fec288a5.png)](/img/migrated/Screenshot-2024-10-01-171413-fec288a5.png)
##  **Step 2:** Một hộp thoại sẽ xuất hiện. Nếu tên profile cần xóa là chính xác, chọn **Delete profile** để xác nhận. Ngược lại, chọn **Cancel** để hủy thao tác.
[![delete profile confirmation dialog](/img/migrated/Screenshot-2024-10-01-171633-abcf343f.png)](/img/migrated/Screenshot-2024-10-01-171633-abcf343f.png)
## Lưu ý
Trong trường hợp nhận được thông báo sau:
[![delete profile failed becase still linked to a group](/img/migrated/Screenshot-2024-10-01-174412-8d122a6f.png)](/img/migrated/Screenshot-2024-10-01-174412-8d122a6f.png)
Điều này có nghĩa là profile đang được sử dụng làm tham chiếu cơ sở bởi một hoặc nhiều Autoscale Group, Instance Node. Hãy đảm bảo chúng được xóa hoàn tất trước khi thực hiện lại việc xóa Autoscale Profile.
