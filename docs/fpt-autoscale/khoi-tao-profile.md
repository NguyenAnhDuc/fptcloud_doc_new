---
id: "khoi-tao-profile"
title: "Create Profile"
sidebar_label: "Create Profile"
sidebar_position: "3"
---

# Create Profile

##  **Step 1:** Access the page **Autoscaling > Autoscale Profile**. Select **Create profile**.
[![create profile button](/img/migrated/Screenshot-2024-09-30-141746-e33a4741.png)](/img/migrated/Screenshot-2024-09-30-141746-e33a4741.png)
##  **Step 2:** Configure the thông số kỹ thuật.
[![create profile page](/img/migrated/screencapture-console-fptcloud-000823-IN-44f85951.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-44f85951.png)
**General Information**
Nhập tên profile sao for dễ quản lý nhất. Tên không vượt quá 80 kí tự, includes the kí tự chữ cái latin, số, dấu gạch dưới, dấu gạch nối and dấu chấm.
**Image**
Hiện tại, the OS Families is cung cấp sẵn including: Ubuntu, Windows, CentOS, Debian. Mỗi nhóm OS will gồm nhiều bản phân phối khác nhau.
Đặc biệt, nhóm Custom là nhóm thường is ưu tiên sử dụng, gồm the images has been is chính user tùy biến and cấu hình ứng dụng phù hợp with nhu cầu sử dụng. Images thuộc nhóm this can có is bằng theh:
**Credentials**
Các hình thức xác thực is hỗ trợ gồm:
  * Password.
  * None: Nếu không có nhu cầu truy cập and xác thực can chọn _None_ to không áp dụng bất kỳ hình thức nào.

Nếu image is chọn thuộc nhóm Custom, điều this is ngầm hiểu rằng phương thức xác thực has been is cấu hình sẵn in image and không có thay đổi gì thêm.
**Resource**
CPU & RAM: Lựa chọn thông số phù hợp with nhu cầu sử dụng dựa trên the mẫu has been is cung cấp.
Storage: Chọn loại ổ đĩa and dung lượng phù hợp với nhu cầu. Mặc định sẽ là Premium-SSD and tối thiểu 40 GB. 
**Save ý** : Dung lượng tối thiểu cụ thể will is đề xuất phù hợp with thông số of image is chọn, việc giảm dung lượng disk xuống dưới mức yêu cầu of image can dẫn đến lỗi không mong muốn.
**Network**
Lựa chọn subnet and security group phù hợp in VPC. Subnet and security group need to is khởi tạo sẵn, if chưa có hãy tạo mới:
**Advanced setting**
Enter đoạn mã [cloud-init](https://cloudinit.readthedocs.io/en/latest/topics/examples.html "Cloud config examples") if có. Khi a node khởi động, cloud-init will đọc the metadata is cung cấp from cloud, and khởi tạo system dựa trên chúng. Cloud-init thường is dùng with mục đích setup network, storage, SSH public keys, and nhiều phần khác of system.
Example: Với đoạn script mẫu this, the node in group will cài đặt the gói need to thiết, sau that clone a static website from github and khởi động server nginx. Để xem kết quả, user can thực hiện allocate Floating IP for node and thực hiện truy cập ando website thông qua Floating IP that.

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

**Save ý** : Tránh sử dụng the information có yếu tố nhạy cảm in script như: password, token, secret key, information cá nhân, ...
##  **Step 3:** Select **Create profile** to confirm.
Sau when tạo successfully, profile will displayed trên list the profiles hiện có.
[![list profiles after create](/img/migrated/Screenshot-2024-09-30-172521-27261ff1.png)](/img/migrated/Screenshot-2024-09-30-172521-27261ff1.png)
Có thể xem lại information details of profile bằng theh click ando tên profile corresponding trên list:
[![click to view profile details](/img/migrated/Screenshot-2024-10-01-164339-e3a959ae.png)](/img/migrated/Screenshot-2024-10-01-164339-e3a959ae.png)
[![profile detail page](/img/migrated/screencapture-console-fptcloud-000823-IN-5d746d0a.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-5d746d0a.png)
## Save ý
Hiện chưa hỗ trợ thay đổi the thông số kỹ thuật for profile, điều this nhằm đảm bảo tính nhất quán for việc tham chiếu cấu hình. Tuy nhiên, can thay đổi tên khác for profile.
