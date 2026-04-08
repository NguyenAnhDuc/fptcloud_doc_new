---
id: "them-moi-tag-retention-rule"
title: "Thêm mới tag retention rule"
description: "Tạo quy tắc giữ lại tag để tự động quản lý image trong repository."
sidebar_label: "Thêm mới tag retention rule"
sidebar_position: 2
---

# Thêm mới tag retention rule

Tag retention rule cho phép bạn định nghĩa tiêu chí để tự động giữ lại hoặc xóa tag trong repository, giúp kiểm soát dung lượng lưu trữ mà không cần thao tác thủ công.

1. Trên menu **FPT Portal**, chọn **Container Registry** > tab **Policy**.

   [![Tab Policy trên Container Registry](/img/migrated/Picture27-62a35e57.png)](/img/migrated/Picture27-62a35e57.png)

2. Chọn **ADD RULES** và nhập thông tin để tạo tag retention rule.

   [![Form tạo tag retention rule](/img/migrated/Picture28-1-01eeb19b.png)](/img/migrated/Picture28-1-01eeb19b.png)

3. Trong menu **Repositories**, chọn **matching** hoặc **excluding**.

   [![Tùy chọn matching/excluding cho repository](/img/migrated/Picture29-1-2c469e51.png)](/img/migrated/Picture29-1-2c469e51.png)

4. Trong ô **Repositories**, nhập thông tin để xác định repository áp dụng quy tắc:
   - Tên một repository, ví dụ: `my_repo_1`
   - Danh sách repository cách nhau bằng dấu phẩy, ví dụ: `my_repo_1, my_repo_2`
   - Tên repository với ký tự đại diện

   [![Ví dụ cấu hình repository](/img/migrated/Screenshot_6-4a6d1e32.png)](/img/migrated/Screenshot_6-4a6d1e32.png)

   Dùng `**` để áp dụng cho tất cả repository. Nếu chọn **matching**, quy tắc áp dụng cho các repository bạn xác định. Nếu chọn **excluding**, quy tắc áp dụng cho tất cả ngoại trừ các repository bạn xác định.

5. Trong menu **By image count or number of days**, xác định số lượng tag cần giữ lại hoặc khoảng thời gian giữ lại.

   [![Tùy chọn số lượng hoặc thời gian giữ lại](/img/migrated/Picture30-1-78d8e53a.png)](/img/migrated/Picture30-1-78d8e53a.png)

   | Tùy chọn | Mô tả |
   |---|---|
   | retain the most recently pushed # images | Giữ lại số lượng image được push gần nhất |
   | retain the most recently pulled # images | Giữ lại số lượng image được pull gần nhất |
   | retain the images pushed within the last # days | Giữ lại image được push trong số ngày chỉ định |
   | retain the images pulled within the last # days | Giữ lại image được pull trong số ngày chỉ định |
   | retain always | Luôn giữ lại image theo quy tắc này |

6. Trong menu **Tag**, chọn **matching** hoặc **excluding**.

   [![Tùy chọn matching/excluding cho tag](/img/migrated/Picture31-1-82b19f69.png)](/img/migrated/Picture31-1-82b19f69.png)

7. Trong ô **Tag**, nhập thông tin để xác định tag áp dụng quy tắc:
   - Tên một tag, ví dụ: `my_tag_1`
   - Danh sách tag cách nhau bằng dấu phẩy
   - Tên tag với ký tự đại diện

   [![Ví dụ cấu hình tag](/img/migrated/Screenshot_7-6f3add0a.png)](/img/migrated/Screenshot_7-6f3add0a.png)

   Dùng `**` để áp dụng cho tất cả tag.

8. Click **Add** để lưu quy tắc.

   [![Nút Add để lưu retention rule](/img/migrated/Picture32-1-7c5cce38.png)](/img/migrated/Picture32-1-7c5cce38.png)

9. Kiểm tra tag retention rule vừa tạo.

   [![Kết quả tạo tag retention rule](/img/migrated/Picture33-1-37c6a3a0.png)](/img/migrated/Picture33-1-37c6a3a0.png)

   Ví dụ: quy tắc giữ lại 20 artifact được push gần nhất với tất cả tag trong tất cả repository.
