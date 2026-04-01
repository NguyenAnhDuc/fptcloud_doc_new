---
id: "quick-starts"
title: "Bắt đầu nhanh"
description: "Hướng dẫn nhanh để tạo workspace Kafka và các tài nguyên cơ bản."
sidebar_label: "Bắt đầu nhanh"
sidebar_position: 3
---

# Bắt đầu nhanh

Hướng dẫn này giúp bạn nhanh chóng khởi tạo dịch vụ Kafka, tạo topic, credential, ACL và consumer group để bắt đầu gửi và nhận message. Bạn cần được phân bổ quota dịch vụ trước khi thực hiện — liên hệ đội ngũ hỗ trợ nếu chưa có quota.

## 1. Đăng nhập dịch vụ FPT Kafka

1. Từ menu FPT Cloud Portal, chọn **Integrations** > **Kafka Service**.

   [![Màn hình chọn Kafka Service từ menu Integrations](/img/migrated/Picture1_HDNhanh_DN-ed49b5d0.png)](/img/migrated/Picture1_HDNhanh_DN-ed49b5d0.png)

2. Nhấn **Create**, nhập **workspace name**.

   [![Màn hình nhập tên workspace Kafka](/img/migrated/Pic2-93777c70.png)](/img/migrated/Pic2-93777c70.png)

3. Nhấn **Create**. Hệ thống khởi tạo dịch vụ và hiển thị trạng thái xử lý.

Sau khi tạo thành công, bạn được chuyển tự động đến trang quản trị **Kafka Service**. Bạn cũng có thể truy cập lại bằng cách vào trang **Kafka Service** và nhấn **Start** trên instance muốn dùng.

## 2. Tạo topic

Topic là đơn vị lưu trữ message trong Kafka. Mỗi topic được chia thành nhiều partition để tăng khả năng xử lý song song.

1. Từ menu, chọn **Application** > **Topic**, sau đó nhấn **Create**.
2. Điền các thông tin:
   - **Name** (bắt buộc): Tên topic theo định dạng `[prefix].[topic name]`
   - **Partitions** (bắt buộc): Số partition
   - **Replication Factor** (bắt buộc)
   - **Cleanup Policy** (bắt buộc)
   - **Advanced Configuration** (tùy chọn)

   [![Màn hình tạo topic mới với các trường thông tin](/img/migrated/Pic2_Taotopic-67891311.png)](/img/migrated/Pic2_Taotopic-67891311.png)

3. Nhấn **OK** để hoàn tất.

:::note
Tên topic phải theo định dạng **`[prefix].[topic name]`**.
:::

## 3. Tạo credential

Credential là cặp username/password dùng để xác thực kết nối Kafka theo phương thức SASL/SCRAM-SHA-256.

1. Từ menu, chọn **Application** > **Credentials**, sau đó nhấn **Create**.
2. Điền các thông tin:
   - **Username** (bắt buộc)
   - **Password** (bắt buộc)

   [![Màn hình tạo credential mới](/img/migrated/Pic1_Taocre-e9963007.png)](/img/migrated/Pic1_Taocre-e9963007.png)

3. Nhấn **OK** để tạo credential.

:::note
Hệ thống tự động tạo mật khẩu ban đầu. Bạn có thể đặt lại mật khẩu nếu cần. Tên credential phải theo định dạng **`[prefix].[credential name]`**.
:::

## 4. Tạo ACL

ACL kiểm soát quyền truy cập của từng credential vào topic hoặc consumer group, giúp bảo mật dữ liệu trong hệ thống Kafka.

1. Từ menu, chọn **Application** > **ACLs**, sau đó nhấn **Create**.
2. Điền các thông tin:
   - **Credential** (bắt buộc): Chọn credential đã tạo
   - **Resource Type** (bắt buộc): Topic hoặc Group
   - **Pattern Type** (bắt buộc): Literal (một topic cụ thể) hoặc Prefixed (tất cả topic có prefix)
   - **Host** (tùy chọn): Giới hạn truy cập theo địa chỉ IP
   - **Operation** (bắt buộc): Read hoặc Write
   - **Permission** (bắt buộc): Allow hoặc Deny

   [![Màn hình tạo ACL với các tùy chọn phân quyền](/img/migrated/Pic1_ACL-194aa4c5.png)](/img/migrated/Pic1_ACL-194aa4c5.png)

3. Nhấn **OK** để hoàn tất.

## 5. Tạo consumer group

Consumer group tập hợp nhiều consumer cùng đọc message từ một hoặc nhiều topic, cho phép xử lý song song và cân bằng tải.

1. Từ menu, chọn **Application** > **Consumer Groups**, sau đó nhấn **Create**.
2. Điền các thông tin:
   - **Group Name** (bắt buộc): Tên consumer group
   - **Offset strategy** (bắt buộc)
   - **Topic** (bắt buộc)

   :::note
   Một consumer group có thể subscribe nhiều topic.
   :::

   [![Màn hình tạo consumer group mới](/img/migrated/Pic1_TaoGr-d95bddc4.png)](/img/migrated/Pic1_TaoGr-d95bddc4.png)

3. Nhấn **OK** để hoàn tất.
