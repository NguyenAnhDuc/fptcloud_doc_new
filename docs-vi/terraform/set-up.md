---
id: "set-up"
title: "Hướng dẫn cài đặt"
description: "Hướng dẫn cài đặt Terraform và cấu hình FPT Cloud provider."
sidebar_label: "Hướng dẫn cài đặt"
sidebar_position: 3
---

# Hướng dẫn cài đặt

## 1. Yêu cầu hệ thống

- **Hệ điều hành**: Terraform hỗ trợ Linux, macOS, Windows.
- **Phiên bản**: Sử dụng phiên bản mới nhất của Terraform để đảm bảo tương thích với các nhà cung cấp dịch vụ đám mây bạn đang sử dụng.
- **Quyền truy cập internet**: Cần thiết để tải về Terraform và các plugin.

## 2. Cài đặt Terraform

**Trên macOS** (sử dụng Homebrew):

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

**Trên Ubuntu**:

```bash
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install terraform
```

**Trên Windows**:

1. Tải xuống từ [Terraform Download Page](https://www.terraform.io/downloads).
2. Giải nén file và thêm đường dẫn Terraform vào biến môi trường PATH.

## 3. Kiểm tra cài đặt

```bash
terraform -v
```

## 4. Lấy token cho Terraform FPT Cloud

Vào **Sidebar** và chọn mục **Token**.

[![Mục Token trên sidebar FPT Cloud](/img/migrated/image-1723437528179-91f0c476.png)](/img/migrated/image-1723437528179-91f0c476.png)

## 5. Khởi tạo FPT Cloud provider

- Kiểm tra phiên bản và hướng dẫn cài đặt FPT Cloud provider trên trang Terraform.

  [![FPT Cloud provider trên Terraform registry](/img/migrated/image-1723437534957-3c8ce6d5.png)](/img/migrated/image-1723437534957-3c8ce6d5.png)

- Sử dụng lệnh `terraform init` để cài đặt FPT Cloud provider:

  [![Kết quả lệnh terraform init](/img/migrated/image-1723437542169-e0e540d0.png)](/img/migrated/image-1723437542169-e0e540d0.png)

- Script kết nối FPT Cloud:

  [![Script kết nối FPT Cloud](/img/migrated/image-1723437548914-a137448d.png)](/img/migrated/image-1723437548914-a137448d.png)

- Tạo access token để kết nối FPT Cloud:

  [![Tạo access token](/img/migrated/image-1723437556421-20c74723.png)](/img/migrated/image-1723437556421-20c74723.png)

- Sử dụng access token để kết nối đến FPT Cloud:

  [![Kết nối bằng access token](/img/migrated/image-1723437566706-348f066d.png)](/img/migrated/image-1723437566706-348f066d.png)
