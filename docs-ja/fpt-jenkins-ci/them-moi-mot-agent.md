---
id: "them-moi-mot-agent"
title: "Thêm mới một Agent"
sidebar_label: "Thêm mới một Agent"
sidebar_position: "7"
---

# 追加 mới một Agent

**Bước 1.** Tại menu FPT Portal > **Jenkins CI** > **Detail Cluster** > **Agent Managements** :
[![](/img/migrated/Picture9-18241027.png)](/img/migrated/Picture9-18241027.png)
**Bước 2.** Nhấn chọn **Add Agent** để nhập thông tin thêm mới một Agent:
[![](/img/migrated/Picture10-003a6a70.png)](/img/migrated/Picture10-003a6a70.png)
Trong đó:
  * **Agent name** : Nhập tên Agent name
  * **Resources** : Lựa chọn tài nguyên sử dụng cho Agent
  * **Descriptions** : Nhập mô tả cho Agent nếu có

**Bước 3.** Nhấn chọn **Add** để thêm mới một Agent. Hệ thống sẽ tạo một Agent theo yêu cầu và hiển thị kết quả trên Portal
[![](/img/migrated/Picture11-47d0c513.png)](/img/migrated/Picture11-47d0c513.png)
Sau khi tạo xong trạng thái của Agent sẽ chuyển sang **Successed**.
[![](/img/migrated/Picture12-216368ab.png)](/img/migrated/Picture12-216368ab.png)
**Bước 4.** Kiểm tra Agent đã được tạo dưới Jenkins instance:
にログインします hệ thống Jenkins > **Manage Jenkins** > **Cloud** :
[![](/img/migrated/Picture13-e6968122.png)](/img/migrated/Picture13-e6968122.png)
Kết quả Jenkins Agent được tạo dưới Jenkins:
[![](/img/migrated/Picture14-c2b336f7.png)](/img/migrated/Picture14-c2b336f7.png)
Người dùng có thể xem thông tin chi tiết cấu hình Agent:
[![](/img/migrated/Picture15-1ba3bbd5.png)](/img/migrated/Picture15-1ba3bbd5.png)
[![](/img/migrated/Picture16-c793efd3.png)](/img/migrated/Picture16-c793efd3.png)
注意: Khi tạo agent, hệ thống sẽ tự động tạo labels cho agent và cấu hình ở lựa chọn “Only build jobs with label expressions matching this node”. Do đó trong jobs Jenkins người dùng cần lưu ý nhập đúng lables. 
Ngoài ra, trong quá trình tạo agent, hệ thống sẽ tự động tạo một secret để kết nối đến cụm kubenetes manage agent, nếu người dùng xoá secret này hệ thống sẽ không thể kết nối đến agent: [![](/img/migrated/Picture17-def5a338.png)](/img/migrated/Picture17-def5a338.png)
