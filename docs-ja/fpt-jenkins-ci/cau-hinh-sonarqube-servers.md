---
id: "cau-hinh-sonarqube-servers"
title: "Cấu hình SonarQube servers"
sidebar_label: "Cấu hình SonarQube servers"
sidebar_position: "16"
---

# Cấu hình SonarQube servers

FPT Cloud hỗ trợ người dùng cấu hình SonarQube Server trong hệ thống Jenkins phục vụ việc tích hợp scan source code thông qua giao diện Portal. Để thực hiện cấu hình, người dùng thực hiện như sau:
  * **Thêm mới một SonarQube servers**

**Bước 1.** Tại menu FPT Portal > **Jenkins CI** > Detail Cluster > **Configurations** > **SonarQube** > **Add SonarQube :** [![](/img/migrated/Picture71-633dc912.png)](/img/migrated/Picture71-633dc912.png) **Bước 2.** Nhập thông tin các thông tin cần thiết để tạo mới một SonarQube bao gồm:
  * Name: Nhập tên SonarQube muốn tạo
  * Server URL: Nhập server URL domain public của hệ thống sonar
  * Server authentication token: thông tin credential để xác thực hệ thống sonar. Thông tin xác thực sẽ được lấy trong danh sách các credential với type **Secret Text**. Trong trường hợp người dùng chưa thêm credential, thực hiện tạo thông tin xác thực trước khi cấu hình SonarQube [![](/img/migrated/Picture72-129945ad.png)](/img/migrated/Picture72-129945ad.png) **Bước 3.** Kết quả sau khi thêm mới cấu hình SonarQube Servers [![](/img/migrated/Picture73-5b081a3b.png)](/img/migrated/Picture73-5b081a3b.png) Kiểm tra kết quả dưới Jenkins: [![](/img/migrated/Picture74-888bade3.png)](/img/migrated/Picture74-888bade3.png) [![](/img/migrated/Picture75-fccead94.png)](/img/migrated/Picture75-fccead94.png)
  * **Chỉnh sửa cấu hình SonarQube servers**

**Bước 1.** Tại menu FPT Portal > **Jenkins CI** > Detail Cluster > **Configurations** > **SonarQube** > Chọn **SonarQube server cần chỉnh sửa:** [![](/img/migrated/Picture76-8dd18554.png)](/img/migrated/Picture76-8dd18554.png) **Bước 2.** Nhập thông tin các thông tin muốn sửa [![](/img/migrated/Picture77-d96ace12.png)](/img/migrated/Picture77-d96ace12.png) FPT Cloud cho phép chỉnh sửa thông tin server url hoặc chọn lại credential authen tới hệ thống sonarqube. **Bước 3.** Kết quả sau khi chỉnh sửa [![](/img/migrated/Picture78-bd49a38c.png)](/img/migrated/Picture78-bd49a38c.png)
  * **Xóa SonarQube servers**

**Bước 1.** Tại menu FPT Portal > **Jenkins CI** > Detail Cluster > **Configurations** > **SonarQube** > Chọn **SonarQube server muốn xóa:** [![](/img/migrated/Picture79-550edce0.png)](/img/migrated/Picture79-550edce0.png) **Bước 2.** Nhập confirm text để xác thực hành động [![](/img/migrated/Picture80-0e42955d.png)](/img/migrated/Picture80-0e42955d.png) **Bước 3.** Kết quả sau khi xoá SonarQube config [![](/img/migrated/Picture81-2069cb06.png)](/img/migrated/Picture81-2069cb06.png) Kết quả dưới hệ thống Jenkins: [![](/img/migrated/Picture82-307c9ace.png)](/img/migrated/Picture82-307c9ace.png) [![](/img/migrated/Picture83-1b0ac94a.png)](/img/migrated/Picture83-1b0ac94a.png)
