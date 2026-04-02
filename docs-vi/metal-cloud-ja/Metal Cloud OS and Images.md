---
id: "Metal Cloud OS and Images"
title: "Custom image"
description: "FPT Images là custom image được xây dựng bởi FPT"
sidebar_label: "Custom image"
sidebar_position: 5
---

# Custom image

## FPT Images

FPT Image là custom image được xây dựng bởi FPT, giúp bạn bắt đầu ngay với bất kỳ GPU server nào khả dụng. Image này đi kèm một số thành phần cần thiết cho AI workload, với Ubuntu/CentOS được chọn làm hệ điều hành (OS).

Các phiên bản phụ thuộc đã cài đặt* được tối ưu để đảm bảo tương thích và có thể không phải là phiên bản mới nhất.

| Hệ điều hành | Phiên bản |
| --- | --- |
| Ubuntu | 22.04 |

- Không phụ thuộc vào OS.

| Phụ thuộc | Phiên bản | Ubuntu 22.04 GPU | AI/ML Ready |
| --- | --- | --- | --- |
| NVIDIA Driver | 560.35.03 | ✔️ | ✔️ |
| NVIDIA CUDA Toolkit | 12.6.85 | ✔️ | ✔️ |
| NVIDIA Fabric Manager (NVSwitch Driver) | 560.35 | ✔️ | ✔️ |
| MLNX_OFED (InfiniBand Driver) | 24.10 | ✔️ | ✔️ |
| NVIDIA Datacenter GPU Manager | 3.3.9 | ✔️ | ✔️ |
| VAST Data Client | 4.0.32 | ✔️ | ✔️ |
| Python | 3.10.12 | ✔️ | ✔️ |
| NVIDIA Container Toolkit | 1.17.4 | ❌ | ✔️ |
| NVIDIA cuDNN | 9.7.1.26 | ❌ | ✔️ |
| Docker | 28.0.1 | ❌ | ✔️ |
| PyTorch | 2.6.0+cu12.6 | ❌ | ✔️ |

Custom image template cho phép bạn capture image của Bare Metal GPU Server và nhân bản cấu hình với ít thay đổi nhất trong quy trình đặt hàng. Image template cung cấp tùy chọn tạo image cho tất cả Bare Metal GPU Server bất kể hệ điều hành. Sau khi image template hoàn thành, bạn có thể dùng nó để tạo Bare Metal GPU Server khác.

## Tải lên image

1. Đăng nhập vào tài khoản FPTCloud và chọn tenant, region, **VPC** (nếu có nhiều).
2. Vào **AI Infrastructure** và **Custom images** trong sidebar, nhấn **Upload image**.
3. Để tải file lên, bạn **chọn file từ máy tính** hoặc **kéo thả file** trên trình duyệt.
4. Nhập **tên image**.
5. Nhấn **Upload image**.

_Bạn không thể dùng image này để tạo server mới cho đến khi quá trình tạo image hoàn tất. Thời gian xử lý image template phụ thuộc vào tài nguyên khả dụng trên physical host và lượng dữ liệu được capture trong image template._

## Tiếp tục xử lý

Bạn có thể tiếp tục xử lý file nếu bị lỗi.

1. Trong danh sách custom image, nhấn **Action** của custom image có trạng thái **Failed**.
2. Chọn **Resume**.

## Xóa image

1. Trong danh sách custom image, nhấn **Action** của custom image muốn xóa và chọn **Delete**.
2. Cửa sổ xác nhận có tiêu đề **"Delete custom image"** sẽ mở. Nhấn **Delete image** để xác nhận xóa.

_Xóa image khỏi tài khoản không xóa các server được tạo từ custom image đó. Bare Metal GPU Server có thể được hủy riêng từ FPT Customer Portal._
