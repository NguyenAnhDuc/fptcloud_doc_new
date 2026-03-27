---
id: "them-moi-tag-retention-rule"
title: "Thêm mới Tag Retention Rule"
description: "Để thêm mới một Tag Retention Rule, người dùng có thể thực hiện như sau:"
sidebar_label: "Thêm mới Tag Retention Rule"
sidebar_position: 14
---

# Them Moi Tag Retention Rule

Để thêm mới một Tag Retention Rule, người dùng có thể thực hiện như sau: 
**Bước 1** : Trên Menu **FPT Portal** chọn **Container Registry**. Chọn tab **Policy**
[![](/img/migrated/Picture27-62a35e57.png)](/img/migrated/Picture27-62a35e57.png)
**Bước 2** : Chọn **ADD RULES** và nhập thông tin để tạo một tag retention rule: 
[![](/img/migrated/Picture28-1-01eeb19b.png)](/img/migrated/Picture28-1-01eeb19b.png)
**Bước 3** : Trong menu drop-down Repositories, lựa chọn **matching** hoặc **excluding**. 
[![](/img/migrated/Picture29-1-2c469e51.png)](/img/migrated/Picture29-1-2c469e51.png)
**Bước 4** : Trong text-box Repositories, cấu hình thông tin để xác định các repository được áp dụng các quy tắc: 
Người dùng có thể xác định các repository được áp dụng các quy tắc bằng cách nhập thông tin sau: 
  * Một repository name, ví dụ: **my_repo_1**
  * Danh sách repository được phân tách bằng dấu phẩy, ví dụ: **my_repo_1, my_repo_2, your_repo_3**
  * Một phần repository name với ký tự đại diện

Ví dụ: 
[![](/img/migrated/Screenshot_6-4a6d1e32.png)](/img/migrated/Screenshot_6-4a6d1e32.png)
  * ** để áp dụng cho tất cả các repository trong FPT Container Registry mà người dùng quản lý 

Nếu lựa chọn **matching** , quy tắc sẽ được áp dụng cho tất cả các repository mà bạn xác định. Ngược lại nếu lựa chọn **excluding** , quy tắc sẽ được áp dụng cho tất cả các repository trong dự án ngoại trừ những repository mà bạn xác định. 
**Bước 5** : Trong drop-down menu **By image count or number of days** , xác định số lượng tag cần giữ lại hoặc khoảng thời gian để giữ lại tag 
[![](/img/migrated/Picture30-1-78d8e53a.png)](/img/migrated/Picture30-1-78d8e53a.png)  
| Lựa chọn  | Mô tả  |  
| --- | --- |  
| retain the most recently pushed # images  | Nhập số lượng tối đa image cần giữ lại, giữ lại những tag được push gần đây nhất, không phân biệt độ tuổi tối đa cho một image  |  
| retain the most recently pulled # images  | Nhập số lượng tối đa image cần giữ lại, chỉ giữ lại những images được pull gần đây, không phân biệt độ tuổi tối đa cho một image  |  
| retain the images pushed within the last # days  | Nhập số ngày giữ lại image, chỉ giữ lại những image đã được push trong khoảng thời gian này, không phân biệt lượng tối đa image được lưu  |  
| retain the images pulled within the last # days  | Nhập số ngày giữ lại image, chỉ giữ lại những image đã được pull trong khoảng thời gian này, không phân biệt số lượng image được lưu  |  
| retain always  | Luôn giữ lại những hình ảnh đã được xác định theo quy tắc này  |  
**Bước 6** : Trong drop-down menu Tag, lựa chọn **matching/excluding**
[![](/img/migrated/Picture31-1-82b19f69.png)](/img/migrated/Picture31-1-82b19f69.png)
**Bước 7** : Trong text-box Tag, xác định các tag được áp dụng quy tắc 
Người dùng có thể xác định các tag áp dụng rule bằng cách nhập các thông tin sau: 
  * Nhập một tag name, ví dụ: **my_tag_1**
  * Danh sách các tag phân tách nhau bởi dấu phẩy, ví dụ: **my_tag_1, my_tag_2, your_tag_3**

Một phần tag name với ký tự đại diện Ví dụ: [![](/img/migrated/Screenshot_7-6f3add0a.png)](/img/migrated/Screenshot_7-6f3add0a.png)
** để áp dụng quy tắc cho tất cả các tag trong FPT Container Registry mà người dùng quản lý 
Nếu lựa chọn **matching** , quy tắc sẽ được áp dụng cho tất cả các tag mà bạn xác định. Ngược lại nếu lựa chọn **excluding** , quy tắc sẽ được áp dụng cho tất cả các tag trong repository ngoại trừ những tag mà bạn xác định 
**Bước 8** : Click **Add** để lưu lại quy tắc 
[![](/img/migrated/Picture32-1-7c5cce38.png)](/img/migrated/Picture32-1-7c5cce38.png)
**Bước 9** : Kết quả Tag Retention Rule được tạo: 
[![](/img/migrated/Picture33-1-37c6a3a0.png)](/img/migrated/Picture33-1-37c6a3a0.png)
Ví dụ retention rule: 
**For the repositories matching **** **** , **retain the most recently pushed 20 artifacts with tags matching **** **** **with untagged:**
Đối với các repositories, giữ lại 20 artifacts được push gần nhất với tất cả các tag