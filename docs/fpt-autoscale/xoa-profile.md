---
id: "xoa-profile"
title: "Xóa Profile"
sidebar_label: "Xóa Profile"
sidebar_position: "5"
---

# Delete Profile

##  **Step 1:** Truy cập trang **Autoscaling > Autoscale Profile**. Trên dòng corresponding with profile cần xóa, chọn biểu tượng **Delete**.
[![delete profile](/img/migrated/Screenshot-2024-10-01-171413-fec288a5.png)](/img/migrated/Screenshot-2024-10-01-171413-fec288a5.png)
##  **Step 2:** Một hộp thoại will appears. Nếu tên profile cần xóa là chính xác, chọn **Delete profile** to xác nhận. Ngược lại, chọn **Cancel** to hủy thao tác.
[![delete profile confirmation dialog](/img/migrated/Screenshot-2024-10-01-171633-abcf343f.png)](/img/migrated/Screenshot-2024-10-01-171633-abcf343f.png)
## Save ý
Trong trường hợp nhận is notification sau:
[![delete profile failed becase still linked to a group](/img/migrated/Screenshot-2024-10-01-174412-8d122a6f.png)](/img/migrated/Screenshot-2024-10-01-174412-8d122a6f.png)
Điều this có nghĩa là profile is is sử dụng làm tham chiếu cơ sở bởi a or nhiều Autoscale Group, Instance Node. Hãy đảm bảo chúng is xóa hoàn tất before thực hiện lại việc xóa Autoscale Profile.
