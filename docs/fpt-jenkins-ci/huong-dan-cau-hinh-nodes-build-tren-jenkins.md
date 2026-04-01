---
id: "huong-dan-cau-hinh-nodes-build-tren-jenkins"
title: "Hướng dẫn cấu hình Nodes Build trên Jenkins"
sidebar_label: "Hướng dẫn cấu hình Nodes Build trên Jenkins"
sidebar_position: "24"
---

# Hướng dẫn cấu hình Nodes Build trên Jenkins

Hiện tại, trên FPT Cloud Portal chỉ for phép user tạo Jenkins Agent loại Cloud. Để can thêm mới a Agent do khách hàng quản lý,can thực hiện as follows:
  * **Add mới Agent loại Node**

**Step 1.** Chuẩn bị VM to làm agent for Jenkins
-Agent for Jenkins can chạy a số hệ điều hành sau: Windows, Linux (Ubuntu/Centos,… )
-Cài đặt Java trên VM to kết nối tới Jenkins:
**Đối with Linux:** VM trên FPT Cloud is support ubuntu, in hướng dẫn user cài java trên ubuntu. Tuỳ nhu cầu sử dụng of user can cài the version java khác nhau. Ví dụ user muốn cài java 11, thực hiện cài đặt as follows:
**sudo apt update**
**sudo apt install openjdk-11-jdk**
Check version java is cài đặt:
**Java –version** [![](/img/migrated/Picture118-27136265.png)](/img/migrated/Picture118-27136265.png)
**Đối with windows:** Download java version phù hợp: <https://www.oracle.com/java/technologies/downloads/?er=221886> [![](/img/migrated/Picture119-e4468e48.png)](/img/migrated/Picture119-e4468e48.png) Thực hiện cài đặt trên máy client
Configure JAVA_PATH in enviroment
Check version
**Step 2.** Log in ando Jenkins instance with username/password trên Portal [![](/img/migrated/Picture119-e4468e48.png)](/img/migrated/Picture119-e4468e48.png)
**Step 3.** Thực hiện tạo mới a Node as follows: [![](/img/migrated/Picture120-0c00ad8a.png)](/img/migrated/Picture120-0c00ad8a.png) [![](/img/migrated/Picture121-8e302013.png)](/img/migrated/Picture121-8e302013.png) Tiếp tục cấu hình the thông tin: [![](/img/migrated/Picture122-83cc3c7d.png)](/img/migrated/Picture122-83cc3c7d.png)
**Step 4.** Sau when tạo nodes lấy thông tin to kết nối tới nodes as follows [![](/img/migrated/Picture123-fbb1d582.png)](/img/migrated/Picture123-fbb1d582.png) Information to connect agent: [![](/img/migrated/Picture124-91fc45b1.png)](/img/migrated/Picture124-91fc45b1.png)
**Step 5.** Chỉnh sửa commad to connect Agent as follows:
FPT Cloud sử dụng websocket to connect Agent Jenkins. Vì vậy, to can connect tới Agent Jenkins cần thêm options **“-webSocket”** to can kết nối to Agent:
**Example:** curl -sO [](https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/jnlpJars/agent.jar) java -jar agent.jar -url <https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/> -secret secretData -name "Jenkins VM customize" -webSocket -workDir "/root/jenkins-home"
**Step 6.** Check kết quả when kết nối to node:
Logs kết nối agent: [![](/img/migrated/Picture125-504e5577.png)](/img/migrated/Picture125-504e5577.png) Kết quả connect trên Jenkins: ![]() Create a jobs sử dụng Agent. Kết quả as follows: [![](/img/migrated/Picture126-5f697d59.png)](/img/migrated/Picture126-5f697d59.png)
