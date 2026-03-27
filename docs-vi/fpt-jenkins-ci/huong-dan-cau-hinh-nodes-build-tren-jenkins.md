---
id: "huong-dan-cau-hinh-nodes-build-tren-jenkins"
title: "Hướng dẫn cấu hình Nodes Build trên Jenkins"
description: "Hiện tại, trên FPT Cloud Portal chỉ cho phép người dùng tạo Jenkins Agent loại Cloud. Để có thể thêm mới một Agent do kh"
sidebar_label: "Hướng dẫn cấu hình Nodes Build trên Jenkins"
sidebar_position: 24
---

# Huong Dan Cau Hinh Nodes Build Tren Jenkins

Hiện tại, trên FPT Cloud Portal chỉ cho phép người dùng tạo Jenkins Agent loại Cloud. Để có thể thêm mới một Agent do khách hàng quản lý,có thể thực hiện như sau:
  * **Thêm mới Agent loại Node**

**Bước 1.** Chuẩn bị VM để làm agent cho Jenkins
-Agent cho Jenkins có thể chạy một số hệ điều hành sau: Windows, Linux (Ubuntu/Centos,… )
-Cài đặt Java trên VM để kết nối tới Jenkins:
**Đối với Linux:** VM trên FPT Cloud đang support ubuntu, trong hướng dẫn người dùng cài java trên ubuntu. Tuỳ nhu cầu sử dụng của người dùng có thể cài các phiên bản java khác nhau. Ví dụ người dùng muốn cài java 11, thực hiện cài đặt như sau:
**sudo apt update**
**sudo apt install openjdk-11-jdk**
Kiểm tra version java được cài đặt:
**Java –version** [![](/img/migrated/Picture118-27136265.png)](/img/migrated/Picture118-27136265.png)
**Đối với windows:** Download java version phù hợp: <https://www.oracle.com/java/technologies/downloads/?er=221886> [![](/img/migrated/Picture119-e4468e48.png)](/img/migrated/Picture119-e4468e48.png) Thực hiện cài đặt trên máy client
Cấu hình JAVA_PATH trong enviroment
Kiểm tra version
**Bước 2.** Đăng nhập vào Jenkins instance với username/password trên Portal [![](/img/migrated/Picture119-e4468e48.png)](/img/migrated/Picture119-e4468e48.png)
**Bước 3.** Thực hiện tạo mới một Node như sau: [![](/img/migrated/Picture120-0c00ad8a.png)](/img/migrated/Picture120-0c00ad8a.png) [![](/img/migrated/Picture121-8e302013.png)](/img/migrated/Picture121-8e302013.png) Tiếp tục cấu hình các thông tin: [![](/img/migrated/Picture122-83cc3c7d.png)](/img/migrated/Picture122-83cc3c7d.png)
**Bước 4.** Sau khi tạo nodes lấy thông tin để kết nối tới nodes như sau [![](/img/migrated/Picture123-fbb1d582.png)](/img/migrated/Picture123-fbb1d582.png) Thông tin để connect agent: [![](/img/migrated/Picture124-91fc45b1.png)](/img/migrated/Picture124-91fc45b1.png)
**Bước 5.** Chỉnh sửa commad để connect Agent như sau:
FPT Cloud sử dụng websocket để connect Agent Jenkins. Vì vậy, để có thể connect tới Agent Jenkins cần thêm options **“-webSocket”** để có thể kết nối đến Agent:
**Ví dụ:** curl -sO [](https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/jnlpJars/agent.jar) java -jar agent.jar -url <https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/> -secret secretData -name "Jenkins VM customize" -webSocket -workDir "/root/jenkins-home"
**Bước 6.** Kiểm tra kết quả khi kết nối đến node:
Logs kết nối agent: [![](/img/migrated/Picture125-504e5577.png)](/img/migrated/Picture125-504e5577.png) Kết quả connect trên Jenkins: ![]() Tạo một jobs sử dụng Agent. Kết quả như sau: [![](/img/migrated/Picture126-5f697d59.png)](/img/migrated/Picture126-5f697d59.png)