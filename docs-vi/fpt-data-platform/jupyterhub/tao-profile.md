---
id: "tao-profile"
title: "Tạo Profile"
sidebar_label: "Tạo Profile"
description: "Tạo Profile"
sidebar_position: 6
---

# Tạo Profile

Sau khi đăng nhập Jupyterhub, người dùng có vai trò **Admin** lựa chọn Menu **Service** > **Profile**, ấn tab **Create Profile**

 * **Profile Name**: tên profile

 * **Slug**: nhập tên các thư viện cần sử dụng khi Spawn server

 * **Image**: chọn image sử dụng khi chạy profile từ danh sách

 * **MODE**: chọn **local**

 * **S3_ACCESSIBLE**: chọn **false** nếu không sử dụng **S3**, chọn **true** nếu sử dụng **S3** và nhập các thông tin

 * **S3_ENDPOINT**: URL endpoint của S3 service

 * **S3_ACCESS_KEY**: Access key ID để xác thực với S3 service

 * **S3_SECRET_KEY**: Secret access key để xác thực với S3 service

 * **LAKEHOUSE_ENABLED**: chọn **false** nếu không sử dụng kết nối **lakehouse**, chọn **true** nếu sử dụng **lakehouse** và nhập các thông tin

 * **CATALOG_TYPE**: Loại metadata catalog được sử dụng, lựa chọn Hive hoặc Nessie

 * **CATALOG_URI**: URI kết nối đến metadata catalog

 * **SPARK_WAREHOUSE_DIR**: Đường dẫn thư mục warehouse cho Apache Spark

 * **Additional Environment Variables**

 * KEY: nhập tên biến môi trường

 * Value: nhập giá trị của biên môi trường tương ứng

 * **CPU Guarantee**: nhập thông tin lượng CPU đảm bảo cho profile khi khởi tạo

 * **CPU Limit**: nhập thông tin ngưỡng tối đa của CPU khi sử dụng proflie

 * **Memory Guarantee**: nhập thông tin lượng RAM đảm bảo cho profile khi khởi tạo

 * **Memory Limit**: nhập thông tin ngưỡng tối đa của RAM khi sử dụng proflie

 * **Available Worker Pools**: lựa chọn từ danh sách **Worker Pool** từ **service Processing** để chọn môi trường khi Spawn của profile

 * **Active profile**: tích chọn để profile sau khi tạo ở trạng thái **Active**

Sau khi nhập đầy đủ các thông tin, ấn Create Prolife để hoàn thành tạo mới

![Hình ảnh](images/tao-profile/img-001.png)

Để đảm bảo quyền truy cập của người dùng với catalog của lakehouse, thực hiện phân quyền thư mục trên FPT Cloud Storage:

 * **Bước 1.** Truy cập <https://console.fptcloud.com/> , chọn menu **Object Storage**

 * **Bước 2.** Tại giao diện **Object Storage Management**, chọn tab **Sub user**, ấn **Create** **SubUser**

![Hình ảnh](images/tao-profile/img-002.png)

 * **Bước 3.** Nhập **Name** cho **Subuser**, **Access level for sub user** chọn **Full**

![Hình ảnh](images/tao-profile/img-003.png)

 * **Bước 4.** Tại giao diện danh sách **Sub User,** bấm xem chi tiết thông tin, ấn **Generate Key,** sau đó lưu lại thông tin **Access Key** và **Secret Key**

![Hình ảnh](images/tao-profile/img-004.png)

 * **Bước 5.** Quay lại giao diện **Object Storage Management**, chọn tab **Buckets.** Tại bucket cần phân quyền cho subuser, chọn Action **Config**

![Hình ảnh](images/tao-profile/img-005.png)

 * **Bước 6.** Tại giao diện chi tiết bucket chọn tab **Bucket Plolicy**, ấn **Add Policy Statement**

![Hình ảnh](images/tao-profile/img-006.png)

 * **Bước 7.** Tại giao diện **Add Policy Statement**

 * **Sid**: nhập statement ID

 * **Effect**: chọn **Allow**

 * **Principal**: chọn danh sách subuser

 * **Action**: Tích chọn **Action**, tích chọn *_All S3 Actions (s3._)**

 * **Resource (ARN)**: nhập thông tin resource theo format, chỉ định subuser tới chính xác thư mục chứa **catalog** được quyền

Ấn **Add** để hoàn thành cấu hình **Policy Statement**

Sau khi tạo, thông tin profile hiện thị tại tab **Profile List**

![Hình ảnh](images/tao-profile/img-007.png)
