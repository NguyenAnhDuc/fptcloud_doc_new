---
id: "huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal"
title: "Hướng dẫn tạo Jenkins pipline CI/CD tích hợp các tính năng trên Portal"
sidebar_label: "Hướng dẫn tạo Jenkins pipline CI/CD tích hợp các tính năng trên Portal"
sidebar_position: "25"
---

# Hướng dẫn tạo Jenkins pipline CI/CD tích hợp các tính năng trên Portal

Trong hướng dẫn này sẽ hướng dẫn người dùng tạo một CI/CD flow cơ bản như sau: [![](/img/migrated/Picture127-aecf39ae.png)](/img/migrated/Picture127-aecf39ae.png) Luồng triển khai CI/CD diễn ra các hoạt động như sau:
**Bước 1.** Sự kiện kích hoạt luồng: developer có thể kích hoạt luồng triển khai CI/CD với sự kiện **Push commit/Merge request build**
**Bước 2.** Hệ thống mã nguồn (source control management) sẽ gửi thông điệp trigger tới hệ thống CI/CD. Hệ thống mã nguồn sẽ gửi thông điệp build qua webhook để kích hoạt một jobs build trên Jenkins
**Bước 3.** Hệ thống CI/CD sử dụng FPT Jenkins CI và sử dụng FPT Cloud Agent sẽ tiến hành thực hiện các bước bao gồm: Scan code với sonarqube, Unittest, Build images.
**Bước 4.** Nếu Pass qua các bài kiểm thử và build images thành công, images sẽ được đẩy tới hệ thống FPT Container Registry (FCR) để lưu trữ images phục vụ việc deploy ứng dụng.
**Bước 5.** Sau khi images được đẩy lên FCR, hệ thống sẽ thực hiện cập nhật tag images mới tới source code chứa config được quản lý bởi FPT Argo CD
**Bước 6.** Hệ thống FPT Argo CD thực hiện deploy ứng dụng lên môi trường dev/test/staging
**Bước 7.** Sau khi deploy ứng dụng, hệ thống CI/CD thực hiện chạy Automations test để kiểm thử tự động trên môi trường staging
**Bước 8.** Sau khi chạy xong luồng CI/CD pipeline, hệ thống CI/CD trả kết quả build về cho developer.
Mô hình hệ thống CI/CD sử dụng các thành phần bao gồm:  
| STT  | Tên hệ thống  | Công cụ sử dụng  |  
| --- | --- | --- |  
| 1  | Source code Management  | Gitlab  |  
| 2  | CI server  | FPT Jenkins CI  |  
| 3  | CD  | FPT ArgoCD  |  
  1. Login vào Jenkins với username/pass trên portal:
  2. Trên FPT Cloud Portal tạo credential để sử dụng trong pipeline bao gồm: -Credential với kind User with Password để authenticator cho gitlab, Container Registry: [![](/img/migrated/Picture128-ceb629a5.png)](/img/migrated/Picture128-ceb629a5.png) [![](/img/migrated/Picture129-78a57dc5.png)](/img/migrated/Picture129-78a57dc5.png) -Credential với kind Secret Text để authen cho SonarQube: [![](/img/migrated/Picture130-62a27646.png)](/img/migrated/Picture130-62a27646.png)
  3. Cấu hình sonarqube server để thực hiện Scan Code trong pipeline [![](/img/migrated/Picture131-81a306f2.png)](/img/migrated/Picture131-81a306f2.png)
  4. Cấu hình Email Notifications trên FPT Cloud Portal để tích hợp trong pipeline [![](/img/migrated/Picture132-77753ca6.png)](/img/migrated/Picture132-77753ca6.png)
  5. Tạo job với loại Pipeline để thiết lập một luồng CI/CD cơ bản: Click **New Item** hoặc **Create a job** để tạo một pipeline jobs CI/CD: [![](/img/migrated/Picture133-102cb0ac.png)](/img/migrated/Picture133-102cb0ac.png) Nhập thông tin tạo jobs: [![](/img/migrated/Picture134-2b34d23c.png)](/img/migrated/Picture134-2b34d23c.png) Cấu hình pipeline jobs với pipeline script. Có 2 lựa chọn để cấu hình jenkinsfile: Cách 1: Nhập script pipeline qua giao diện Jenkins: [![](/img/migrated/Picture135-40b308ac.png)](/img/migrated/Picture135-40b308ac.png) Cách 2: Sử dụng Jenkinsfile để cấu hình pipeline script từ source code: [![](/img/migrated/Picture136-4cae1695.png)](/img/migrated/Picture136-4cae1695.png) [![](/img/migrated/Picture137-0425bb84.png)](/img/migrated/Picture137-0425bb84.png) Pipeline chạy jobs: [![](/img/migrated/Picture138-384988ca.png)](/img/migrated/Picture138-384988ca.png)
