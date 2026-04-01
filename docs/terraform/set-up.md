---
id: "set-up"
title: "Hệ điều hành: Terraform hỗ trợ nhiều hệ điều hành như Linux, macOS, Windows."
sidebar_label: "Hệ điều hành: Terraform hỗ trợ nhiều hệ điều hành như Linux, macOS, Windows."
sidebar_position: "3"
---

# Hệ điều hành: Terraform hỗ trợ nhiều hệ điều hành như Linux, macOS, Windows.

## **1. Requirements system**
  * Hệ điều hành: Terraform hỗ trợ nhiều hệ điều hành như Linux, macOS, Windows.
  * Phiên bản: Phiên bản mới nhất of Terraform, đảm bảo tương thích with the provider service đám mây you is sử dụng.
  * Quyền truy cập internet: Để tải về Terraform and the plugin.

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
  * Download from Terraform Download Page.
  * Giải nén file and thêm đường dẫn Terraform ando biến môi trường PATH.

## **3. Kiểm Tra Cài Đặt**

```
Copyterraform -v
```

## **4. Cách lấy token sử dụng for terraform FPTCloud**
Vào **Sidebar** -> chọn mục **Token**
[![file](/img/migrated/image-1723437528179-91f0c476.png)](/img/migrated/image-1723437528179-91f0c476.png)
## **5. Initialize FPT Cloud Provider**
  * Check version and guide cài đặt FPT Cloud Provider trên trang Terraform

[![file](/img/migrated/image-1723437534957-3c8ce6d5.png)](/img/migrated/image-1723437534957-3c8ce6d5.png)
  * Sử dụng lệnh “terraform init” to cài đặt FPT Cloud Provider:

[![file](/img/migrated/image-1723437542169-e0e540d0.png)](/img/migrated/image-1723437542169-e0e540d0.png)
  * Script kết nối FPT Cloud:

[![file](/img/migrated/image-1723437548914-a137448d.png)](/img/migrated/image-1723437548914-a137448d.png)
  * Create access token to kết nối FPT Cloud:

[![file](/img/migrated/image-1723437556421-20c74723.png)](/img/migrated/image-1723437556421-20c74723.png)
  * Sử dụng accrss token to kết nối to FPT Cloud:

[![file](/img/migrated/image-1723437566706-348f066d.png)](/img/migrated/image-1723437566706-348f066d.png)
