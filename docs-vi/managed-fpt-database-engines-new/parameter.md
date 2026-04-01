---
id: "parameter"
title: "Quản lý Parameter"
description: "Trong hệ quản trị cơ sở dữ liệu (DBMS), parameter (tham số) là các giá trị cấu hình giúp điều chỉnh và kiểm soát các đặc"
sidebar_label: "Quản lý Parameter"
sidebar_position: 33
---

# Parameter

### Tổng quan:
Trong hệ quản trị cơ sở dữ liệu (DBMS), parameter (tham số) là các giá trị cấu hình giúp điều chỉnh và kiểm soát các đặc tính và hành vi của hệ thống trong quá trình vận hành. Các tham số này có thể ảnh hưởng đến hiệu suất, bộ nhớ, thời gian chờ, các cơ chế tối ưu hóa và các yếu tố khác của hệ cơ sở dữ liệu.
Mỗi tham số có thể có các giá trị nhất định và có thể được thay đổi tùy thuộc vào nhu cầu của người quản trị cơ sở dữ liệu để tối ưu hóa hoạt động của hệ thống. Các tham số này có thể thuộc loại dynamic (động) hoặc static (tĩnh), mỗi loại có cách thức áp dụng khác nhau.
  * **Dynamic Parameter (Tham số động)** : Những tham số này có thể thay đổi trong quá trình hoạt động của cơ sở dữ liệu mà không cần khởi động lại hệ thống.
  * **Static Parameter (Tham số tĩnh)** : Những tham số này yêu cầu khởi động lại cơ sở dữ liệu để thay đổi có hiệu lực.

Việc hiểu và quản lý các tham số đúng cách là rất quan trọng để đảm bảo hệ thống hoạt động ổn định, hiệu quả và đáp ứng đúng yêu cầu của người sử dụng.
Trong FPT Database Engine, chức năng **Quản lý Parameter** cho phép người dùng xem và cập nhật các tham số cấu hình của một cụm cơ sở dữ liệu đang chạy trực tiếp trên FPT Cloud Portal. Khi cập nhật tham số động (dynamic), giá trị mới sẽ được áp dụng ngay sau khi thao tác hoàn tất mà không làm gián đoạn dịch vụ. Khi cập nhật tham số tĩnh (static), hệ thống sẽ tự động khởi động lại cơ sở dữ liệu để áp dụng giá trị mới.
### Quyền cần thiết:  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:Configuration  | Edit  | Quyền thay đổi cấu hình cơ sở dữ liệu (parameter, cấu hình scaling, ...)  |  
### Hướng dẫn cập nhật:
Các bước dưới đây hướng dẫn cách cập nhật giá trị của một parameter cho cụm cơ sở dữ liệu:
#### Bước 1: Truy cập trang Quản lý parameter
Đăng nhập FPT Cloud Console. Mở trang **Database list** > chọn ID của cụm cơ sở dữ liệu để mở trang chi tiết > chọn tab **Configure Params** để truy cập trang **Quản lý Parameter** :
[![](/img/migrated/view-param-scaled-f9a798c8.png)](/img/migrated/view-param-scaled-f9a798c8.png)
#### Bước 2: Chọn loại tham số
Chọn loại parameter bạn muốn cập nhật:
  * Dynamic Params
  * Static Params

#### Bước 3: Điều chỉnh giá trị cho tham số
Nhấn biểu tượng **Edit parameter** (biểu tượng bút chì) tương ứng với tham số cần chỉnh sửa, hộp thoại **Update Configure Params** hiển thị đầy đủ thông tin của tham số được chọn và cho phép người dùng cập nhật giá trị trong phạm vi cho phép.
[![](/img/migrated/update-param-scaled-7b919278.png)](/img/migrated/update-param-scaled-7b919278.png)
Kiểm tra thông tin parameter (kiểu dữ liệu, giá trị tối thiểu và tối đa), sau đó cập nhật giá trị trong trường “**Value** ” trong phạm vi cho phép và nhấn “**Update** ” để áp dụng thay đổi.
### Best Practices:
  * Điều chỉnh tham số theo từng bước nhỏ và theo dõi hiệu năng.
  * Ưu tiên tham số dynamic để tránh downtime.
  * Lên lịch bảo trì khi thay đổi tham số static.
  * Ghi nhận thay đổi để phục vụ audit và vận hành.
