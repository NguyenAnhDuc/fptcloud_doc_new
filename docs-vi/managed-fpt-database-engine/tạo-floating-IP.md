---
id: "create-floating-ip"
title: "Tạo Floating Ip"
description: "**Floating IP** được dùng để lưu giữ **IP Public** và điều hướng truy cập từ internet vào máy ảo. Để máy ảo có thể truy"
sidebar_label: "Tạo Floating Ip"
sidebar_position: 4
draft: true
---

# Tạo Floating Ip

**Floating IP** được dùng để lưu giữ **IP Public** và điều hướng truy cập từ internet vào máy ảo. Để máy ảo có thể truy cập được từ ngoài internet, bạn cần gắn một Floating IP cho nó. Nếu không còn nhu cầu hoặc muốn thay đổi endpoint, bạn có thể chuyển hướng Floating IP sang máy ảo khác cùng VPC với 1 vài thao tác đơn giản.
**Trường hợp 1: Tạo Floating IP từ cụm Database:**
**Bước 1:** Menu > Database Platform > **Relational Database/ Non-Relational Database/ Search Engines/ Data Streaming/ Time Series Db** > chọn một ID Cluster có trạng thái **Running**. 
[![](/img/migrated/b1-cua-6.2-6e953999.png)](/img/migrated/b1-cua-6.2-6e953999.png)
**Bước 2:** Xuất hiện màn hình Database Detail > tại tab **Overview** chọn Instances List > Click vào **Name** có role **True.**
[![](/img/migrated/b2-cua-6.2-ecd9ba9c.png)](/img/migrated/b2-cua-6.2-ecd9ba9c.png)
**Bước 3:** Xuất hiện màn hình link từ **Node Database** đến **Instance Management** > Tại **Floating IP** chọn **Allocate**.
[![](/img/migrated/b3cua-6.2-0c5d58f3.png)](/img/migrated/b3cua-6.2-0c5d58f3.png)
**Bước 4:** Pop up **Allocate Floating Ip** , người dùng nhập thông tin cần thiết:
  * **IP Address:** người dùng chọn địa chỉ phù hợp theo list có sẵn. Trường hợp không có pool khách hàng liên hệ với bộ phận support để được cấp thêm pool.
  * **Instance:** đã đc chọn mặc định tên cụm DB + mã Id Cluster+ tên node
  * **IP Port:** nhập thông tin Port của Cụm DB và đc gán ở Security
  * **Instance Port:** nhập thông tin port giống vs IP port hoặc thông tin khác dễ nhớ hơn.

[![](/img/migrated/b4-cua-6.2-0745ca34.png)](/img/migrated/b4-cua-6.2-0745ca34.png)
**Bước 5:** Sau khi tạo xong Allocate floating IP, sẽ hiển thị thông tin địa chỉ **Floating IP** : 
[![](/img/migrated/B5-cua-6.2-92407761.png)](/img/migrated/B5-cua-6.2-92407761.png)
**Bước 6:** Kiểm tra thông tin địa chỉ IP vừa tạo Allocate: **Menu** > **Networking** > **Floating IPs** > kiểm tra thông tin Ip public có trạng thái **Active**.
[![](/img/migrated/b6_1-cua-6.2-d37cc8dc.png)](/img/migrated/b6_1-cua-6.2-d37cc8dc.png)
  * Người dùng không muốn sử dụng Public IP có thể disconnect địa chỉ 

[![](/img/migrated/b6_2-cua-6.2-72332857.png)](/img/migrated/b6_2-cua-6.2-72332857.png)
Xuất hiện popup **Disconnect floating IP:** người dùng xác nhận lại thông tin một lần nữa và bấm **Disconnect floating IP**.
[![](/img/migrated/b6_3-cua-6.2-f1272475.png)](/img/migrated/b6_3-cua-6.2-f1272475.png)
**Trường hợp 2: Tạo Floating IP từ Network không qua cụm Database**
Dùng để tạo mới Floating khi người dùng disconnect IP pubic đã tạo hoặc từ cụm Database khi bấm instance không hiển thị Allocate ở Floating IP.
**Bước 1:** Menu > **Networking** > **Floating Ips** > bấm **Allocate IP address**
[![](/img/migrated/TH2_B1-_6.2-23686fb5.png)](/img/migrated/TH2_B1-_6.2-23686fb5.png)
**Bước 2:** Pop up Allocate Floating Ip, người dùng nhập thông tin cần thiết:
  * **IP Address:** người dùng chọn địa chỉ phù hợp theo list có sẵn. Trường hợp không có pool khách hàng liên hệ với bộ phận support để được cấp thêm pool.
  * **Instance:** người dùng chọn tên cụm Database phù hợp theo list có sẵn
  * **IP Port:** nhập thông tin Port của Cụm DB và đc gán ở Security
  * **Instance Port:** nhập thông tin port giống vs IP port hoặc thông tin khác dễ nhớ hơn.

[![](/img/migrated/TH2_B2_6.2-f5b99a21.png)](/img/migrated/TH2_B2_6.2-f5b99a21.png)
**Bước 3:** Kiểm tra thông tin địa chỉ IP vừa tạo Allocate: **Menu** > **Networking** > **Floating IPs** > kiểm tra thông tin Ip public có trạng thái **Active**.
[![](/img/migrated/Th2_b3_6.2-3a398f5d.png)](/img/migrated/Th2_b3_6.2-3a398f5d.png)
**Bước 4:** Sau khi tạo xong Allocate floating IP, sẽ hiển thị thông tin địa chỉ Floating IP tại cụm Database:
[![](/img/migrated/TH2_B4_6.2-87022800.png)](/img/migrated/TH2_B4_6.2-87022800.png)
**Sau khi có địa chỉ Floating IP người dùng lấy địa chỉ IP này để kết nối Database.**
