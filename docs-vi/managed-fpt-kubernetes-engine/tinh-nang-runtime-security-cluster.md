---
id: "tinh-nang-runtime-security-cluster"
title: "Tính năng Runtime Security cho Managed Kubernetes Cluster"
description: "**1. Giới thiệu chung tính năng Runtime Security**"
sidebar_label: "Tính năng Runtime Security cho Managed Kubernetes Cluster"
sidebar_position: 31
---

# Tinh Nang Runtime Security Cluster

**1. Giới thiệu chung tính năng Runtime Security**
Để đảm bảo bảo về an toàn bảo mật thông tin cho FPT Cloud Managed Kubernetes cluster, FPT Cloud phát triển tính năng cho phép tích hợp công cụ hỗ trợ Runtime Security cung cấp khả năng phát hiện các hành động bất thường trong K8S cluster có thể gây rủi ro cho lớp runtime và kernel của worker node.
Falco là một công cụ mã nguồn mở mạnh mẽ dùng để giám sát và phát hiện các hoạt động bất thường trong hệ thống container và Kubernetes. Falco được phát triển bởi Sysdig và hiện là một dự án được đảm bảo của CNCF (Cloud Native Computing Foundation). Tính năng chính của Falco là cung cấp "runtime security" - bảo mật thời gian thực - cho các hệ thống bằng cách theo dõi các hành vi của hệ điều hành và các container, sau đó dựa vào các rule đã được xác định trước để phát hiện các hoạt động bất thường hoặc tiềm ẩn rủi ro cho hệ thống.
FPT Cloud cung cấp tích hợp tính năng Runtime Security cho phép người dùng cấu hình nhận cảnh báo chi tiết của các hành vi qua Telegram hoặc Gmail. Bằng cách sử dụng các kênh cảnh báo, Security Runtime giúp đảm bảo rằng các sự kiện bảo mật được phát hiện kịp thời và các quản trị viên có thể hành động nhanh chóng để bảo vệ hệ thống.
**2. Hướng dẫn sử dụng tính năng trên Unify Portal:**
_Lưu ý: Bộ tính năng tăng cường khả năng bảo mật cho Managed Kubernetes Cluster được tích hợp sau khi cluster được khởi tạo thành công (Trạng thái Succeeded (Running))_
**A**. Tích hợp Falco Engine:
**1. Enable Falco Engine**
  * Bước 1: Truy cập portal FPT Cloud console.fptcloud.com, chọn mục **Kubernetes**

![](/img/migrated/Picture1-8-88d55a79.png)
  * Bước 2: Chọn cluster cần tích hợp Runtime 

![](/img/migrated/Picture2-6-525544d9.png)
  * Bước 3: Chọn tab Security > Chọn Runtime Security rồi thực hiện enable:

![](/img/migrated/Picture3-6-ce729383.png)
  * Bước 4: Chọn Confirm để hoàn thành

![](/img/migrated/Picture4-5-10290f0d.png)
Runtime Security được enable thành công nhưng người dùng sẽ không nhận được cảnh báo do chưa cấu hình các kênh nhận cảnh báo.
![](/img/migrated/Picture5-5-87c9c8f9.png)
**B**. Disable Falco Engine
Khi không có nhu cầu tích hợp Runtime Security, người dùng có thể Disable dịch vụ ngay trên portal.
  * Bước 1: Bấm vào button đang ở trạng thái Enable

![](/img/migrated/Picture6-5-912fbb00.png)
  * Bước 2: Nhập tên cụm và bấm Disable

![](/img/migrated/Picture7-5-5b1a1396.png)
Kết quả sau khi Disable:
![](/img/migrated/Picture8-4-8025d238.png)
**C**. Tích hợp tính năng Falco UI
**1. Enable Falco UI**
  * Bước 1: Chọn tab Security Chọn Runtime Security rồi thực hiện enable

![](/img/migrated/Picture9-3-e4bf5847.png)
  * Bước 2: Thực hiện Enable UI

![](/img/migrated/Picture10-3-95f69088.png)
  * Bước 3: Nhập User Name và Password để truy cập vào Falco UI, sau đó bấm Confirm để hoàn thành

![](/img/migrated/Picture11-2-5d780203.png)
![](/img/migrated/Picture12-3-2a273fdf.png)
  * Bước 4: Download file kubeconfig và thực hiện port-forward cho service “falco-falcosidekick-ui". Người dùng có thể sử dụng công cụ Lens IDE để thực hiện port-forward trên giao diện dashboard bằng cách > chọn Network > chọn Services > Filter theo Namespace fptcloud-runtime-security

![](/img/migrated/Picture13-2-7145e357.png)
Chọn Service falco-falcosidekick-ui, chọn Forward
![](/img/migrated/Picture14-2-bb48a8d7.png)
Nhập port forward và bấm Start để truy cập
![](/img/migrated/Picture15-2-8f8f127c.png)
  * Bước 5: Nhập Username và Password đã cấu hình khi enable dịch vụ 

![](/img/migrated/Picture16-2-d46d7feb.png)
Kết quả sau khi login:
![](/img/migrated/Picture17-2-1e73f1f5.png)
Màn hình dashboard khi có cảnh báo:
![](/img/migrated/Picture18-2-9e9a042d.png)
**2. Update Username và Password**
  * Bước 1: Bấm Edit Rutime 

![](/img/migrated/Picture19-2-b353e779.png)
  * Bước 2: Thực hiện edit Username và Password và bấm Confirm

![](/img/migrated/Picture20-2-1434324a.png)
![](/img/migrated/Picture21-2-6d5e1e2f.png)
**3. Disable Falco UI**
Để thực hiện disable Falco UI, chọn Edit Runtime > Bấm button đang Enable > Bấm Confirm
![](/img/migrated/Picture22-2-35ccf282.png)
![](/img/migrated/Picture23-2-5cd99243.png)
![](/img/migrated/Picture24-2-1d7bb079.png)
Kết quả sau khi Disable Falco UI:
![](/img/migrated/Picture25-2-4684d6eb.png)
**D**. Tích hợp Runtime Security Event Notification
**1. Telegram**
1.1. Enable Runtime Security Event Notification
Bước 1: Đăng nhập Telegram, search BotFather
![](/img/migrated/Picture26-2-9f59ef7d.png)
Bước 2: Nhập /newbot và tiến hành đặt tên cho bot
![](/img/migrated/Picture27-2-6ee2ba65.png)
Bước 3: Tạo group chat để nhận thông báo
![](/img/migrated/Picture28-2-f21f0f24.png)
![](/img/migrated/Picture29-2-89f24d13.png)
![](/img/migrated/Picture30-2-e9df26be.png) ![](/img/migrated/Picture31-2-c9402508.png)
![](/img/migrated/Picture32-2-b4cf9d92.png)
Bước 4: Trên Unify portal, thực hiện enable Runtime Security Event Notification
![](/img/migrated/Picture33-2-710ec259.png)
Bước 5: Chọn kênh nhận cảnh báo là Telegram, nhập ChatID và Token ID sau đó bấm Confirm
![](/img/migrated/Picture34-2-bdf2572f.png)
Kết quả sau khi cấu hình xong:
![](/img/migrated/Picture35-2-94806381.png)
Khi phát hiện sự bất thường, telegram của người dùng sẽ nhận được cảnh báo như hình dưới đây:
![](/img/migrated/Picture36-2-b799e46e.png)
1.2 Thay đổi kênh nhận thông báo qua Gmail
Lưu ý: Trước khi tạo Application Token cho Gmail, cần phải bật tính năng “Xác minh 2 bước” trên Tài khoản Google của mình.
Bước 1: Truy cập [Link](https://accounts.google.com/v3/signin/challenge/pwd?TL=AKeb6mwAuh3qaC1eKc7XewCMQU6V6lDuv3Om7ECAlm5R3MUftowOoR4MX-XbD84l&cid=3&continue=https%3A%2F%2Fmyaccount.google.com%2Fapppasswords%3Fpli%3D1%26rapt%3DAEjHL4OQmf3KJ7gkSxhbmm5DqwRFDxwc3wwtSlkg1jrKcUHx_TMi-BUsKmUREmg-JFjF-YQ6g1k7h68AIjbt4iHygIAU-91TEcQff78-lVDMW66UknnWR6s&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmyaccount.google.com%2Fapppasswords%3Fpli%3D1%26rapt%3DAEjHL4OQmf3KJ7gkSxhbmm5DqwRFDxwc3wwtSlkg1jrKcUHx_TMi-BUsKmUREmg-JFjF-YQ6g1k7h68AIjbt4iHygIAU-91TEcQff78-lVDMW66UknnWR6s&ifkv=Ab5oB3ob8hiIojOpjbbdnRQCMUP-nN9e1JkarHYVPJC5rqHF2C0uV-5LfGO3o3CngznWNb750rsr&osid=1&rart=ANgoxcdw5cHl3-8KJUueNT-AOeg1uh0cFuqiMIYcsOFhdFZ3OLrYh76YA6MaQzOzIUzWMD0eRq9U2sOrd54eBwDGwp59FrpO-d9ALceCMK6WKkSUeohZqCs&rpbg=1&service=accountsettings) để tạo Application Token 
![](/img/migrated/Picture37-2-80332a4a.png)
![](/img/migrated/Picture38-2-c92796bc.png)
Bước 2: Chọn Edit Runtime
![](/img/migrated/Picture39-1-b7ff93b3.png)
Bước 3: Nhập thông tin để nhận thông báo qua Gmail và bấm Confirm
![](/img/migrated/Picture40-1-517093c1.png)
Kết quả sau khi cấu hình xong:
![](/img/migrated/Picture41-1-65717d16.png)
Khi có bất thường, hệ thống sẽ gửi cảnh báo về Gmail như ví dụ bên dưới:
![](/img/migrated/Picture42-1-0d8044e6.png)
1.3. Disable Runtime Security Event Notification
Khi không có nhu cầu nhận thông báo qua Telegram hoặc Gmail, người dùng vào tab Security > chọn Edit Runtime và thực hiện disable Runtime Security Event Notification > Bấm Confirm
![](/img/migrated/Picture43-1-fdc9e740.png) ![](/img/migrated/Picture44-1-c148eb98.png) ![](/img/migrated/Picture45-1-059e399c.png) ![](/img/migrated/Picture46-1-cb38d13e.png)
Sau khi disable Runtime Security Event Notification, người dùng sẽ không còn nhận bất kỳ cảnh báo nào khi có bất thường xảy ra.
