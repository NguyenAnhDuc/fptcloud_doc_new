---
id: "them-moi-mot-agent"
title: "Thêm mới một Agent"
sidebar_label: "Thêm mới một Agent"
sidebar_position: "7"
---

# Add mới a Agent

**Step 1.** Tại menu FPT Portal > **Jenkins CI** > **Detail Cluster** > **Agent Managements** :
[![](/img/migrated/Picture9-18241027.png)](/img/migrated/Picture9-18241027.png)
**Step 2.** Nhấn chọn **Add Agent** to nhập information thêm mới a Agent:
[![](/img/migrated/Picture10-003a6a70.png)](/img/migrated/Picture10-003a6a70.png)
Trong that:
  * **Agent name** : Enter tên Agent name
  * **Resources** : Lựa chọn tài nguyên sử dụng for Agent
  * **Descriptions** : Enter mô tả for Agent if có

**Step 3.** Nhấn chọn **Add** to thêm mới a Agent. System will tạo a Agent as required and displayed kết quả trên Portal
[![](/img/migrated/Picture11-47d0c513.png)](/img/migrated/Picture11-47d0c513.png)
Sau when tạo xong status of Agent will chuyển sang **Successed**.
[![](/img/migrated/Picture12-216368ab.png)](/img/migrated/Picture12-216368ab.png)
**Step 4.** Check Agent has been is tạo dưới Jenkins instance:
Log in ando system Jenkins > **Manage Jenkins** > **Cloud** :
[![](/img/migrated/Picture13-e6968122.png)](/img/migrated/Picture13-e6968122.png)
Kết quả Jenkins Agent is tạo dưới Jenkins:
[![](/img/migrated/Picture14-c2b336f7.png)](/img/migrated/Picture14-c2b336f7.png)
Người dùng can xem information details cấu hình Agent:
[![](/img/migrated/Picture15-1ba3bbd5.png)](/img/migrated/Picture15-1ba3bbd5.png)
[![](/img/migrated/Picture16-c793efd3.png)](/img/migrated/Picture16-c793efd3.png)
Note: Khi tạo agent, system will tự động tạo labels for agent and cấu hình ở lựa chọn “Only build jobs with label expressions matching this node”. Do that in jobs Jenkins user need to lưu ý nhập đúng lables. 
Ngoài ra, in quá trình tạo agent, system will tự động tạo a secret to kết nối to cụm kubenetes manage agent, if user xoá secret this system will cannot kết nối to agent: [![](/img/migrated/Picture17-def5a338.png)](/img/migrated/Picture17-def5a338.png)
