---
id: "huong-dan-tao-jobs-tren-jenkins-chay-tren-fpt-cloud-agent"
title: "Hướng dẫn tạo jobs trên Jenkins chạy trên FPT Cloud Agent"
sidebar_label: "Hướng dẫn tạo jobs trên Jenkins chạy trên FPT Cloud Agent"
sidebar_position: "23"
---

# Hướng dẫn tạo jobs trên Jenkins chạy trên FPT Cloud Agent

Tuỳ fromng version of hệ thống Jenkins will có the theh cấu hình khác nhau to phù hợp for mỗi version.
Từ version 2.451.0 do FPT Cloud cung cấp, to sử dụng kubenetes agent must tạo folder and cấu hình agent can sử dụng for folder. Đối with việc quản lý the dự án is triển khai CI/CD trên Jenkins, user should tạo folder for fromng dự án and cấu hình the service in folder dự án, hành động this will giúp user can phân permission for user ando fromng project and dễ dàng quản lý the project.
Để tạo a jobs jenkins cần the thông tin sau:
  * * **Label of agent:** [![](/img/migrated/Picture103-c115e03c.png)](/img/migrated/Picture103-c115e03c.png) Trong trường hợp user tạo a job bình thường loại freestyle and cấu hình chạy trên agent of FPT Cloud will báo lỗi as follows: [![](/img/migrated/Picture104-4ee62b2a.png)](/img/migrated/Picture104-4ee62b2a.png) Để can tạo job and chạy trên jenkins user can thực hiện the bước as follows:

**Step 1.** Create folder to quản lý the job trên Jenkins
***Trên Dashboard Jenkins > New Item: [![](/img/migrated/Picture105-46822182.png)](/img/migrated/Picture105-46822182.png)
***Create item dạng folder: [![](/img/migrated/Picture106-2d903e4d.png)](/img/migrated/Picture106-2d903e4d.png)
***Configure kubenetes agent is sử dụng in folder: [![](/img/migrated/Picture107-13b71bc6.png)](/img/migrated/Picture107-13b71bc6.png)
**Step 2.** Create a job đơn giản chạy trên Jenkins:
* **Trong folder vừa tạo > Select **New item/ Create a job:** [![](/img/migrated/Picture108-8729b0b8.png)](/img/migrated/Picture108-8729b0b8.png)
***Create jobs loại Freestyle to cấu hình jobs: [![](/img/migrated/Picture110-c5cac842.png)](/img/migrated/Picture110-c5cac842.png)
***Enter label agent chạy jobs: [![](/img/migrated/Picture111-e24ed221.png)](/img/migrated/Picture111-e24ed221.png)
***Configure a execute shell to test jobs: [![](/img/migrated/Picture112-fd5e8c52.png)](/img/migrated/Picture112-fd5e8c52.png)
Configure execute shell > Save jobs: [![](/img/migrated/Picture113-5be28d74.png)](/img/migrated/Picture113-5be28d74.png)
**Step 3.** Chạy thử jobs jenkins has been tạo [![](/img/migrated/Picture114-a0689b0d.png)](/img/migrated/Picture114-a0689b0d.png) **Step 4.** Kết quả chạy jobs [![](/img/migrated/Picture115-145b00f7.png)](/img/migrated/Picture115-145b00f7.png) Kết quả chạy jobs: [![](/img/migrated/Picture116-7605e149.png)](/img/migrated/Picture116-7605e149.png) [![](/img/migrated/Picture117-806d0758.png)](/img/migrated/Picture117-806d0758.png)
