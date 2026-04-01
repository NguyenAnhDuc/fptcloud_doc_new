---
id: "set-up"
title: "Hệ điều hành: Terraform hỗ trợ nhiều hệ điều hành như Linux, macOS, Windows."
sidebar_label: "Hệ điều hành: Terraform hỗ trợ nhiều hệ điều hành như Linux, macOS, Windows."
sidebar_position: "3"
---

# Hệ điều hành: Terraform hỗ trợ nhiều hệ điều hành như Linux, macOS, Windows.

## **1. Yêu cầu hệ thống**
  * Hệ điều hành: Terraform hỗ trợ nhiều hệ điều hành như Linux, macOS, Windows.
  * Phiên bản: Phiên bản mới nhất của Terraform, đảm bảo tương thích với các nhà cung cấp dịch vụ đám mây bạn đang sử dụng.
  * Quyền truy cập internet: Để tải về Terraform và các plugin.

## **2. Cài Đặt Terraform**
**Trên macOS:**
  * Sử dụng Homebrew:

```
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

**Trên Ubuntu:**

```
Copysudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl

curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -

sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"

sudo apt-get update && sudo apt-get install terraform
```

**Trên Windows:**
  * Tải xuống từ Terraform Download Page.
  * Giải nén file và thêm đường dẫn Terraform vào biến môi trường PATH.

## **3. Kiểm Tra Cài Đặt**

```
Copyterraform -v
```

## **4. Cách lấy token sử dụng cho terraform FPTCloud**
Vào **Sidebar** -> chọn mục **Token**
[![file](/img/migrated/image-1723437528179-91f0c476.png)](/img/migrated/image-1723437528179-91f0c476.png)
## **5. Khởi tạo FPT Cloud Provider**
  * Kiểm tra phiên bản và hướng dẫn cài đặt FPT Cloud Provider trên trang Terraform

[![file](/img/migrated/image-1723437534957-3c8ce6d5.png)](/img/migrated/image-1723437534957-3c8ce6d5.png)
  * Sử dụng lệnh “terraform init” để cài đặt FPT Cloud Provider:

[![file](/img/migrated/image-1723437542169-e0e540d0.png)](/img/migrated/image-1723437542169-e0e540d0.png)
  * Script kết nối FPT Cloud:

[![file](/img/migrated/image-1723437548914-a137448d.png)](/img/migrated/image-1723437548914-a137448d.png)
  * Tạo access token để kết nối FPT Cloud:

[![file](/img/migrated/image-1723437556421-20c74723.png)](/img/migrated/image-1723437556421-20c74723.png)
  * Sử dụng accrss token để kết nối đến FPT Cloud:

[![file](/img/migrated/image-1723437566706-348f066d.png)](/img/migrated/image-1723437566706-348f066d.png)
