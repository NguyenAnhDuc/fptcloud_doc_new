---
id: "huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal"
title: "Hướng dẫn tạo Jenkins pipline CI/CD tích hợp các tính năng trên Portal"
sidebar_label: "Hướng dẫn tạo Jenkins pipline CI/CD tích hợp các tính năng trên Portal"
sidebar_position: "25"
---

# Hướng dẫn tạo Jenkins pipline CI/CD tích hợp the feature trên Portal

Trong hướng dẫn this will hướng dẫn user tạo a CI/CD flow cơ bản as follows: [![](/img/migrated/Picture127-aecf39ae.png)](/img/migrated/Picture127-aecf39ae.png) Luồng triển khai CI/CD diễn ra the hoạt động as follows:
**Step 1.** Sự kiện kích hoạt luồng: developer can kích hoạt luồng triển khai CI/CD with sự kiện **Push commit/Merge request build**
**Step 2.** System mã nguồn (source control management) will gửi thông điệp trigger tới hệ thống CI/CD. System mã nguồn will gửi thông điệp build qua webhook to kích hoạt a jobs build trên Jenkins
**Step 3.** System CI/CD sử dụng FPT Jenkins CI and sử dụng FPT Cloud Agent will tiến hành thực hiện the bước includes: Scan code with sonarqube, Unittest, Build images.
**Step 4.** Nếu Pass qua the bài kiểm thử and build images successfully, images will is đẩy tới hệ thống FPT Container Registry (FCR) to lưu trữ images phục vụ việc deploy ứng dụng.
**Step 5.** Sau when images is đẩy lên FCR, hệ thống will thực hiện cập nhật tag images mới tới source code chứa config is quản lý bởi FPT Argo CD
**Step 6.** System FPT Argo CD thực hiện deploy ứng dụng lên môi trường dev/test/staging
**Step 7.** Sau when deploy ứng dụng, hệ thống CI/CD thực hiện chạy Automations test to kiểm thử tự động trên môi trường staging
**Step 8.** Sau when chạy xong luồng CI/CD pipeline, hệ thống CI/CD trả kết quả build về for developer.
Mô hình hệ thống CI/CD sử dụng the thành phần includes:  
| STT  | Tên hệ thống  | Công cụ sử dụng  |  
| --- | --- | --- |  
| 1  | Source code Management  | Gitlab  |  
| 2  | CI server  | FPT Jenkins CI  |  
| 3  | CD  | FPT ArgoCD  |  
  1. Login ando Jenkins with username/pass trên portal:
  2. Trên FPT Cloud Portal tạo credential to sử dụng in pipeline includes: -Credential with kind User with Password to authenticator for gitlab, Container Registry: [![](/img/migrated/Picture128-ceb629a5.png)](/img/migrated/Picture128-ceb629a5.png) [![](/img/migrated/Picture129-78a57dc5.png)](/img/migrated/Picture129-78a57dc5.png) -Credential with kind Secret Text to authen for SonarQube: [![](/img/migrated/Picture130-62a27646.png)](/img/migrated/Picture130-62a27646.png)
  3. Configure sonarqube server to thực hiện Scan Code in pipeline [![](/img/migrated/Picture131-81a306f2.png)](/img/migrated/Picture131-81a306f2.png)
  4. Configure Email Notifications trên FPT Cloud Portal to tích hợp in pipeline [![](/img/migrated/Picture132-77753ca6.png)](/img/migrated/Picture132-77753ca6.png)
  5. Create job with loại Pipeline to thiết lập a luồng CI/CD cơ bản: Click **New Item** or **Create a job** to tạo a pipeline jobs CI/CD: [![](/img/migrated/Picture133-102cb0ac.png)](/img/migrated/Picture133-102cb0ac.png) Enter thông tin tạo jobs: [![](/img/migrated/Picture134-2b34d23c.png)](/img/migrated/Picture134-2b34d23c.png) Configure pipeline jobs with pipeline script. Có 2 lựa chọn to cấu hình jenkinsfile: Cách 1: Enter script pipeline qua giao diện Jenkins: [![](/img/migrated/Picture135-40b308ac.png)](/img/migrated/Picture135-40b308ac.png) Cách 2: Sử dụng Jenkinsfile to cấu hình pipeline script from source code: [![](/img/migrated/Picture136-4cae1695.png)](/img/migrated/Picture136-4cae1695.png) [![](/img/migrated/Picture137-0425bb84.png)](/img/migrated/Picture137-0425bb84.png) Pipeline chạy jobs: [![](/img/migrated/Picture138-384988ca.png)](/img/migrated/Picture138-384988ca.png)
