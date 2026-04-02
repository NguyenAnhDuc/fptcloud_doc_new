---
id: "create-a-new-model-serving-deployment"
title: "Tạo deployment mới"
description: "Hướng dẫn tạo một deployment Model Serving mới trên FPT AI Factory."
sidebar_label: "Tạo deployment mới"
sidebar_position: "7"
---

# Tạo deployment mới

**Bước 1:** Chọn **AI Platform** → **Model Serving** → **Deployment** → **New Deployment.**

**Bước 2:** Nhập thông tin Model Settings, sau đó nhấn Next.
  * **Model Information:** Thông tin triển khai AI. Chọn Model Type:
    * Model included in Image: Mô hình AI được đóng gói trong Container Image
    * Model not included in Image: Mô hình AI không được đóng gói trong Container Image
    * NVIDIA NGC Catalog: Mô hình AI sử dụng công nghệ NVIDIA NGC
  * Nếu Model Type là **Model included in Image**, chọn Model Source:
    * **Model Source:** Nguồn lựa chọn mô hình. Chọn Model Source:
      * **Model Catalog:** Kho lưu trữ mô hình công khai tập trung, được chia sẻ cho người dùng sử dụng.
        * Model Name: Tên mô hình được chọn trên Model Catalog.
        * Model Version: Phiên bản mô hình được chọn trên Model Catalog.
        * Model Token: Token xác thực với Model Catalog để triển khai _(Tạo token bằng cách: trên giao diện trang chủ, chọn **Token** → **Create**)_
      * **Private Model:** Kho lưu trữ riêng của người dùng, có thể sử dụng nội bộ trong tổ chức.
        * Model Name: Tên mô hình được chọn trên Private.
        * Model Version: Phiên bản mô hình được chọn trên Private Model.
        * Model Token: Token xác thực với Private Model để triển khai
      * **Custom Model:** Mô hình tùy chỉnh trên Internet, hiện chỉ hỗ trợ mô hình Hugging Face.
        * Model URL: Đường dẫn đến mô hình tùy chỉnh
        * Model Token: Token xác thực người dùng trên nền tảng của Custom Model được chọn (ví dụ: Hugging Face)

Nếu chọn Model Type là **Model included in Image** hoặc **Model not Included in Image**, chọn Image Information:
  * **Image Information:** Thông tin triển khai Container Image. Nhập thông tin Image:
    * Image Source: Chọn loại Image **Public** (không cần nhập user/password) hoặc Private (cần nhập user/password)
    * Image Registry: Liên kết đến vị trí lưu trữ container image.
    * Image Tag: Phiên bản container image

[![Alt text](/img/migrated/model-included-in-image-or-model-not-inc-077c1a4d.png)](/img/migrated/model-included-in-image-or-model-not-inc-077c1a4d.png)

Nếu Model Type là **NVIDIA NIM – NGC Catalog**, chọn thông tin triển khai:
  * **NIM Model:** Chọn NIM Model để triển khai.
  * **NIM Helm Chart:** Chọn Helm Chart phù hợp để triển khai Model.
  * **NCG Personal Key:** Khóa cá nhân để xác thực người dùng với NGC Catalog.

[![Alt text](/img/migrated/Nim-1e0eaace.png)](/img/migrated/Nim-1e0eaace.png)

**Bước 3:** Nhập thông tin Deployment Settings, sau đó nhấn Next.
  * **Deployment Information:** Thông tin về Deployment
    * Serving Name: Tên của deployment sẽ được phục vụ.
    * Choose Cluster: Chọn cụm K8S để phục vụ từ danh sách các cụm K8S trong VPC này.
    * Instance Replica: Số lượng đơn vị xử lý trong deployment này.
    * Resource Type: Thông tin về cấu hình tài nguyên. Có hai loại tài nguyên:
      * Flavor: Lựa chọn cấu hình sẵn cho CPU/RAM/DISK/GPU
      * Custom: Cấu hình tùy chỉnh cho CPU/RAM/DISK/GPU theo nhu cầu.

[![](/img/migrated/6-7fbcb74f.png)](/img/migrated/6-7fbcb74f.png)

  * **_Advance Settings:_** Nhập các cấu hình nâng cao cho Deployment. Nhấn See More để cấu hình.
    * **_Deployment Strategy:_** Chọn chiến lược triển khai cho K8S. Các chiến lược có sẵn:
      * **_Recreate:_** Tạo lại các instance khi có thay đổi (sẽ có downtime)
      * **_Rolling:_** Thay thế dần các instance trong quá trình cập nhật (không có downtime), nhưng yêu cầu tài nguyên bổ sung tương đương một instance.
    * **_Startup Command:_** Cấu hình lệnh khởi động cho các instance
    * **_Environment Variable:_** Định nghĩa các biến môi trường cho instance
    * **_Nodes Selector:_** Chọn worker node/worker group cụ thể để triển khai
    * **_Tags:_** Gán nhãn cho Deployment

[![](/img/migrated/7-2b6d1e21.png)](/img/migrated/7-2b6d1e21.png)

**Bước 4:** Nhập chi tiết cấu hình cho **Traffic Settings**, sau đó nhấn Next.
  * **Traffic Information:** Cấu hình kết nối bên ngoài cho Deployment
    * **_Services Type:_** Loại dịch vụ cho kết nối bên ngoài
      * Load Balancer: Sử dụng cân bằng tải
      * Cluster IP: Sử dụng giao tiếp nội bộ trong Kubernetes Cluster
      * Ingress: Sử dụng ứng dụng Ingress để quản lý luồng kết nối
    * **_Traffic Type:_** Chỉ định loại kết nối: public hoặc private
    * **_Port:_** Cổng kết nối bên ngoài

[![](/img/migrated/8-c8ac7bd7.png)](/img/migrated/8-c8ac7bd7.png)

**Bước 5: Xem lại thông tin đã nhập và nhấn Confirm để tạo cụm Deployment**

[![Alt text](/img/migrated/9-81fe7bb0.png)](/img/migrated/9-81fe7bb0.png)
