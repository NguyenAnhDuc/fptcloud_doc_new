---
id: "terraform"
title: "IaC (Terraform)"
description: "Sử dụng Terraform để tự động hóa triển khai và quản lý hạ tầng trên FPT Cloud. như một giải pháp quản lý hạ tầng tiên tiến, giúp người dùng tự động hóa việc triển"
sidebar_label: "IaC (Terraform)"
sidebar_position: 75
---

# IaC (Terraform)

FPT Smart Cloud giới thiệu Terraform như một giải pháp quản lý hạ tầng tiên tiến, giúp người dùng tự động hóa việc triển khai và quản lý cơ sở hạ tầng đám mây một cách hiệu quả. Với Terraform, người dùng có thể định nghĩa hạ tầng dưới dạng mã (Infrastructure as Code), giúp việc triển khai trở nên nhất quán, dễ dàng mở rộng và quản lý trên nhiều nền tảng đám mây khác nhau như AWS, Azure, và Google Cloud. Giải pháp này không chỉ giảm thiểu rủi ro mà còn tăng cường khả năng kiểm soát và tối ưu hóa tài nguyên, từ đó hỗ trợ doanh nghiệp đạt được mục tiêu công nghệ một cách nhanh chóng và bền vững.
# **Set up**
## **1. Yêu cầu hệ thống**
  * Hệ điều hành: Terraform hỗ trợ nhiều hệ điều hành như Linux, macOS, Windows.
  * Phiên bản: Phiên bản mới nhất của Terraform, đảm bảo tương thích với các nhà cung cấp dịch vụ đám mây bạn đang sử dụng.
  * Quyền truy cập internet: Để tải về Terraform và các plugin.

## **2. Cài Đặt Terraform**
**Trên macOS:**
  * Sử dụng Homebrew:

```
Copybrew tap hashicorp/tap
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
# **Document**
  * Terraform Provider Docs: 
    * <https://registry.terraform.io/providers/fpt-corp/fptcloud/latest/docs/>
  * FPT Cloud Terraform Source:
    * <https://github.com/fpt-corp/terraform-provider-fptcloud>

# **Các lệnh cơ bản**
## **1. Instance**
  * Script tạo instance:

[![file](/img/migrated/image-1723437678446-b7530cf5.png)](/img/migrated/image-1723437678446-b7530cf5.png)
  * Kết quả sau khi chạy script tạo instance thành công:

[![file](/img/migrated/image-1723437688217-2eb8bf11.png)](/img/migrated/image-1723437688217-2eb8bf11.png)
  * Hủy instance đã tạo:

[![file](/img/migrated/image-1723437700286-b35fddad.png)](/img/migrated/image-1723437700286-b35fddad.png)
## **2. Floating IP**
  * Script tạo floating IP:

[![file](/img/migrated/image-1723437714387-6c0be5da.png)](/img/migrated/image-1723437714387-6c0be5da.png)
  * Kết quả sau khi chạy script tạo floating IP thành công:

[![file](/img/migrated/image-1723437730547-f78e85ae.png)](/img/migrated/image-1723437730547-f78e85ae.png)
  * Hủy floating IP đã tạo:

[![file](/img/migrated/image-1723437746142-363beff3.png)](/img/migrated/image-1723437746142-363beff3.png)
## **3. Security group**
  * Script tạo security group:

[![file](/img/migrated/image-1723437759616-a8b23b4a.png)](/img/migrated/image-1723437759616-a8b23b4a.png)
  * Kết quả sau khi chạy script tạo security group thành công:

[![file](/img/migrated/image-1723437770927-7e2c545b.png)](/img/migrated/image-1723437770927-7e2c545b.png)
  * Hủy security group đã tạo:

[![file](/img/migrated/image-1723437790818-b15cbbf6.png)](/img/migrated/image-1723437790818-b15cbbf6.png)
## **4. Storage disk**
  * Script tạo storage:

[![file](/img/migrated/image-1723437806000-91108bc0.png)](/img/migrated/image-1723437806000-91108bc0.png)
  * Kết quả sau khi chạy script tạo storage thành công:

[![file](/img/migrated/image-1723437818502-769b79b9.png)](/img/migrated/image-1723437818502-769b79b9.png)
  * Hủy storage đã tạo:

[![file](/img/migrated/image-1723437832407-dc6858ee.png)](/img/migrated/image-1723437832407-dc6858ee.png)
## **5. Database**
  * Script tạo database:

[![file](/img/migrated/image-1728455233157-737c6b5f.png)](/img/migrated/image-1728455233157-737c6b5f.png)
  * Kết quả khi tạo thành công:

[![file](/img/migrated/image-1728455257294-ab53f375.png)](/img/migrated/image-1728455257294-ab53f375.png)
  * Script quản lý trạng thái chạy/dừng của database:

[![file](/img/migrated/image-1728455276595-5698c246.png)](/img/migrated/image-1728455276595-5698c246.png)
## **6. Dedicated FKE**
  * Script tạo cụm Dedicated FKE:

[![file](/img/migrated/image-1728875321308-2f0d39fe.png)](/img/migrated/image-1728875321308-2f0d39fe.png)
  * Kết quả khi tạo thành công:

[![file](/img/migrated/image-1728875338930-4c7925af.png)](/img/migrated/image-1728875338930-4c7925af.png)
## **7. Managed FKE**
  * Script tạo cụm Managed FKE:

[![file](/img/migrated/image-1728875363303-1b9ead1e.png)](/img/migrated/image-1728875363303-1b9ead1e.png)
  * Kết quả khi tạo thành công:

[![file](/img/migrated/image-1728875375510-c368341c.png)](/img/migrated/image-1728875375510-c368341c.png)
