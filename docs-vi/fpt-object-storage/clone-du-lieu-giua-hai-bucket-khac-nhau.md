---
id: "clone-du-lieu-giua-hai-bucket-khac-nhau"
title: "Clone dữ liệu giữa hai bucket khác nhau"
description: "Trong trường hợp chuyển môi trường S3 từ nhà cung cấp khác đến S3 của FPT Smart Cloud hoặc sử dụng song song giữa 2 môi "
sidebar_label: "Clone dữ liệu giữa hai bucket khác nhau"
sidebar_position: 18
---

# Clone Du Lieu Giua Hai Bucket Khac Nhau

Trong trường hợp chuyển môi trường S3 từ nhà cung cấp khác đến S3 của FPT Smart Cloud hoặc sử dụng song song giữa 2 môi trường S3, chúng ta có thể sử dụng công cụ **Rclone** hoặc **s3sync** để giúp quá trình clone dữ liệu được tiến hành thuận tiện hơn. Đặt trường hợp ta đang sử dụng S3 Site01 và có ý định sẽ chuyển qua S3 Site02 và muốn clone dữ liệu từ bucket ở Site01 qua Site02. Để thực hiện điều này, FPT Smart Cloud hướng dẫn thực hiện trên các hệ điều hành như sau:

## Clone dữ liệu bucket với Linux
**Bước 1:** Tải và cài đặt công cụ **Rclone:**

```
Copysudo apt-get install rclone
```

**Bước 2:** Để tạo thư mục rclone chứa thông tin Site01 và Site02, tạo file rclone.conf theo đường dẫn ~/.config/rclone/rclone.conf > Edit file rclone.conf với nội dung sau:
(Lưu ý ở mục provider có thể thay đổi tùy theo môi trường S3 sử dụng như AWS,…)

```
Copy[site01]

type = s3

provider = Other

env\_auth = false

access\_key\_id = 00d4701ee34ab6a0967b

secret\_access\_key = SevRaN+gCPbIC6VvUjXx74mhHkbg0ZuQTFpmYTsa

endpoint = https://s3-sgn09.fptcloud.com/

acl = private

 

[site02]

type = s3

provider = Other

env\_auth = false

access\_key\_id = XRRS541KWS8T9DMDRCFY

secret\_access\_key = gknj5RPmgifmr4Bc90euHF8GIaZEY7xJD6bVDm7D

endpoint = https://s3-hfx03.fptcloud.com/

acl = private

```

Kết quả:
**[![User guide FPT Object Storage 64](/img/migrated/User-guide-FPT-Object-Storage-64-c2814219.png)](/img/migrated/User-guide-FPT-Object-Storage-64-c2814219.png)**
**Bước 3:** Tại Site02 thực hiện tạo 1 bucket không chứa dữ liệu.
**Bước 4:** Kiểm tra bucket và dữ liệu ở 2 site thông qua **Rclone.**
**[![User guide FPT Object Storage 65](/img/migrated/User-guide-FPT-Object-Storage-65-b14d85c8.png)](/img/migrated/User-guide-FPT-Object-Storage-65-b14d85c8.png)**
**Bước 5:** Thực hiện clone dữ liệu từ site01:bucket-site01 sang site02:bucket-site02 bằng cách:

```
Copy* Thực hiện lệnh với option –dry-run để đảm bảo không có error trong qua trình clone.
```

```
Copyrclone sync -Pv site01:bucket-site01 site02:bucket-site02 –dry-run
```

**[![User guide FPT Object Storage 66](/img/migrated/User-guide-FPT-Object-Storage-66-e6bdef85.png)](/img/migrated/User-guide-FPT-Object-Storage-66-e6bdef85.png)**
Sau khi chạy lệnh với option –dry-run không xuất hiện error > thực hiện chạy lệnh bỏ option –dry-run

```
Copyrclone sync -Pv site01:bucket-site01 site02:bucket-site02
```

**[![User guide FPT Object Storage 67](/img/migrated/User-guide-FPT-Object-Storage-67-c8f6524d.png)](/img/migrated/User-guide-FPT-Object-Storage-67-c8f6524d.png)**
Sau khi thực hiện thành công, khách hàng có thể kiểm tra lại dữ liệu và bucket ở 2 site thông qua rclone.
**[![User guide FPT Object Storage 68](/img/migrated/User-guide-FPT-Object-Storage-68-50fda7a1.png)](/img/migrated/User-guide-FPT-Object-Storage-68-50fda7a1.png)**
