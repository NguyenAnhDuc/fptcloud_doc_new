---
id: "cau-hinh-sonarqube-servers"
title: "Cấu hình SonarQube servers"
sidebar_label: "Cấu hình SonarQube servers"
sidebar_position: "16"
---

# Configure SonarQube servers

FPT Cloud hỗ trợ user cấu hình SonarQube Server in hệ thống Jenkins phục vụ việc tích hợp scan source code thông qua giao diện Portal. Để thực hiện cấu hình, user thực hiện as follows:
  * **Add mới a SonarQube servers**

**Step 1.** Tại menu FPT Portal > **Jenkins CI** > Detail Cluster > **Configurations** > **SonarQube** > **Add SonarQube :** [![](/img/migrated/Picture71-633dc912.png)](/img/migrated/Picture71-633dc912.png) **Step 2.** Enter thông tin the thông tin cần thiết to tạo mới a SonarQube includes:
  * Name: Enter tên SonarQube muốn tạo
  * Server URL: Enter server URL domain public of hệ thống sonar
  * Server authentication token: thông tin credential to xác thực hệ thống sonar. Information xác thực will is lấy in danh sách the credential with type **Secret Text**. Trong trường hợp user chưa thêm credential, thực hiện tạo thông tin xác thực before cấu hình SonarQube [![](/img/migrated/Picture72-129945ad.png)](/img/migrated/Picture72-129945ad.png) **Step 3.** Kết quả after thêm mới cấu hình SonarQube Servers [![](/img/migrated/Picture73-5b081a3b.png)](/img/migrated/Picture73-5b081a3b.png) Check kết quả dưới Jenkins: [![](/img/migrated/Picture74-888bade3.png)](/img/migrated/Picture74-888bade3.png) [![](/img/migrated/Picture75-fccead94.png)](/img/migrated/Picture75-fccead94.png)
  * **Chỉnh sửa cấu hình SonarQube servers**

**Step 1.** Tại menu FPT Portal > **Jenkins CI** > Detail Cluster > **Configurations** > **SonarQube** > Select **SonarQube server cần chỉnh sửa:** [![](/img/migrated/Picture76-8dd18554.png)](/img/migrated/Picture76-8dd18554.png) **Step 2.** Enter thông tin the thông tin muốn sửa [![](/img/migrated/Picture77-d96ace12.png)](/img/migrated/Picture77-d96ace12.png) FPT Cloud for phép chỉnh sửa thông tin server url or chọn lại credential authen tới hệ thống sonarqube. **Step 3.** Kết quả after chỉnh sửa [![](/img/migrated/Picture78-bd49a38c.png)](/img/migrated/Picture78-bd49a38c.png)
  * **Delete SonarQube servers**

**Step 1.** Tại menu FPT Portal > **Jenkins CI** > Detail Cluster > **Configurations** > **SonarQube** > Select **SonarQube server muốn xóa:** [![](/img/migrated/Picture79-550edce0.png)](/img/migrated/Picture79-550edce0.png) **Step 2.** Enter confirm text to xác thực hành động [![](/img/migrated/Picture80-0e42955d.png)](/img/migrated/Picture80-0e42955d.png) **Step 3.** Kết quả after xoá SonarQube config [![](/img/migrated/Picture81-2069cb06.png)](/img/migrated/Picture81-2069cb06.png) Kết quả dưới hệ thống Jenkins: [![](/img/migrated/Picture82-307c9ace.png)](/img/migrated/Picture82-307c9ace.png) [![](/img/migrated/Picture83-1b0ac94a.png)](/img/migrated/Picture83-1b0ac94a.png)
