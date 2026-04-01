---
id: "khoi-tao-profile"
title: "Khởi tạo Profile"
sidebar_label: "Khởi tạo Profile"
sidebar_position: "3"
---

# Khởi tạo Profile

##  **Bước 1** : Truy cập trang **Autoscaling > Autoscale Profile**. Chọn **Create profile**.
[![create profile button](/img/migrated/Screenshot-2024-09-30-141746-e33a4741.png)](/img/migrated/Screenshot-2024-09-30-141746-e33a4741.png)
##  **Bước 2** : Cấu hình các thông số kỹ thuật.
[![create profile page](/img/migrated/screencapture-console-fptcloud-000823-IN-44f85951.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-44f85951.png)
**General Information**
Nhập tên profile sao cho dễ quản lý nhất. Tên không vượt quá 80 kí tự, bao gồm các kí tự chữ cái latin, số, dấu gạch dưới, dấu gạch nối và dấu chấm.
**Image**
Hiện tại, các OS Families được cung cấp sẵn bao gồm: Ubuntu, Windows, CentOS, Debian. Mỗi nhóm OS sẽ gồm nhiều bản phân phối khác nhau.
Đặc biệt, nhóm Custom là nhóm thường được ưu tiên sử dụng, gồm các images đã được chính người dùng tùy biến và cấu hình ứng dụng phù hợp với nhu cầu sử dụng. Images thuộc nhóm này có thể có được bằng cách:
**Credentials**
Các hình thức xác thực được hỗ trợ gồm:
  * Password.
  * None: Nếu không có nhu cầu truy cập và xác thực có thể chọn _None_ để không áp dụng bất kỳ hình thức nào.

Nếu image được chọn thuộc nhóm Custom, điều này được ngầm hiểu rằng phương thức xác thực đã được cấu hình sẵn trong image và không có thay đổi gì thêm.
**Resource**
CPU & RAM: Lựa chọn thông số phù hợp với nhu cầu sử dụng dựa trên các mẫu đã được cung cấp.
Storage: Chọn loại ổ đĩa và dung lượng phù hợp với nhu cầu. Mặc định sẽ là Premium-SSD và tối thiểu 40 GB. 
**Lưu ý** : Dung lượng tối thiểu cụ thể sẽ được đề xuất phù hợp với thông số của image được chọn, việc giảm dung lượng ổ đĩa xuống dưới mức yêu cầu của image có thể dẫn đến lỗi không mong muốn.
**Network**
Lựa chọn subnet và security group phù hợp trong VPC. Subnet và security group cần được khởi tạo sẵn, nếu chưa có hãy tạo mới:
**Advanced setting**
Nhập đoạn mã [cloud-init](https://cloudinit.readthedocs.io/en/latest/topics/examples.html "Cloud config examples") nếu có. Khi một node khởi động, cloud-init sẽ đọc các metadata được cung cấp từ cloud, và khởi tạo hệ thống dựa trên chúng. Cloud-init thường được dùng với mục đích setup network, storage, SSH public keys, và nhiều phần khác của hệ thống.
Ví dụ: Với đoạn script mẫu này, các node trong group sẽ cài đặt các gói cần thiết, sau đó clone một static website từ github và khởi động máy chủ nginx. Để xem kết quả, người dùng có thể thực hiện allocate Floating IP cho node và thực hiện truy cập vào website thông qua Floating IP đó.

```
Copy
# Note, if packages are given, or package_upgrade is true, then
# update will be done independent of this setting.
package_update: true

# if packages are specified, this package_update will be set to true
# packages may be supplied as a single package name or as a list
# with the format [, ] wherein the specific
# package version will be installed.
packages:
- nginx
- git

# runcmd contains a list of either lists or a string
# each item will be executed in order at rc.local like level with
# output to the console
# - runcmd only runs during the first boot
# - if the item is a list, the items will be properly executed as if
# passed to execve(3) (with the first arg as the command).
# - if the item is a string, it will be simply written to the file and
# will be interpreted by 'sh'
runcmd:
- systemctl enable nginx
- systemctl start nginx
- git clone https://github.com/cloudacademy/static-website-example.git
- cp -r ./static-website-example/* /var/www/html/
- rm -r ./static-website-example
```

**Lưu ý** : Tránh sử dụng các thông tin có yếu tố nhạy cảm trong script như: password, token, secret key, thông tin cá nhân, ...
##  **Bước 3** : Chọn **Create profile** để xác nhận.
Sau khi tạo thành công, profile sẽ hiển thị trên danh sách các profiles hiện có.
[![list profiles after create](/img/migrated/Screenshot-2024-09-30-172521-27261ff1.png)](/img/migrated/Screenshot-2024-09-30-172521-27261ff1.png)
Có thể xem lại thông tin chi tiết của profile bằng cách click vào tên profile tương ứng trên danh sách:
[![click to view profile details](/img/migrated/Screenshot-2024-10-01-164339-e3a959ae.png)](/img/migrated/Screenshot-2024-10-01-164339-e3a959ae.png)
[![profile detail page](/img/migrated/screencapture-console-fptcloud-000823-IN-5d746d0a.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-5d746d0a.png)
## Lưu ý
Hiện chưa hỗ trợ thay đổi các thông số kỹ thuật cho profile, điều này nhằm đảm bảo tính nhất quán cho việc tham chiếu cấu hình. Tuy nhiên, có thể thay đổi tên khác cho profile.
