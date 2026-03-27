---
id: "gateway"
title: "**Hướng dẫn truy câp:**"
description: "Bước 1: Đăng nhập console.fptcloud.com"
sidebar_label: "**Hướng dẫn truy câp:**"
sidebar_position: 68
---

# **Hướng dẫn truy câp:**

Bước 1: Đăng nhập console.fptcloud.com 
Bước 2: Sau khi đăng nhập thành công, chọn VPC cần xem dữ liệu Gateway
Bước 3: Ở sidebar, chọn và mở rộng menu Network → Chọn Menu Gateway
Lưu ý: Tính năng này chỉ dành riêng cho một số Tenant có cấu hình đặc biêt, vui lòng liên hệ để được hỗ trợ.
# **Quản lý danh sách Gateway**
[![file](/img/migrated/image-1754290296265-667afaca.png)](/img/migrated/image-1754290296265-667afaca.png)
Ở màn hình này, người dùng thể quản lý được danh sách Gateway của 1 VPC
Các thông tin của 1 Gateway bao gồm:
  * **Gateway name** : Tên của Gateway. Click sẽ vào trang chi tiết thông tin của 1 Gateway
  * **Gateway type** : có 2 loại
    * **Basic** : là loại Gateway được thiết lập tự động với các cấu hình mặc định để sử dụng 
    * **Custom** : là loại Gateway cho phép người dùng tự tay cấu hình các thiết lập theo nhu cầu cụ thể
  * **Number of Route** : Số lượng Route của 1 Gateway
  * **Connect to Network** : kết nối của Gateway đến 1 mạng cụ thể

Tab Gateway Type show thông tin loại Gateway
[![file](/img/migrated/image-1754290881511-8614a188.png)](/img/migrated/image-1754290881511-8614a188.png)
# **Quản lý Route của 1 Gateway**
## **1. Quản lý danh sách Route**
[![file](/img/migrated/image-1754290897920-2416f962.png)](/img/migrated/image-1754290897920-2416f962.png)
Các thông tin của 1 Route bao gồm:
  * Route name
  * CIDR Destination
  * IP next hop
  * Status
  * Created at 

## **2. Tạo Route**
Người dùng có thể bấm nút **Create route** để tạo mới 1 Route
[![file](/img/migrated/image-1754290924141-cfae2a04.png)](/img/migrated/image-1754290924141-cfae2a04.png)
  * Với gateway loại Basic sẽ không được tạo Route, chỉ được tạo Route khi Gateway loại Custom

## **3. Chỉnh sửa Route**
Ở cột Actions, người dùng có thể bấm nút Edit để chỉnh sửa thông tin của Route
  * Với gateway loại Basic sẽ không được chỉnh sửa Route, chỉ được chỉnh sửa Route khi Gateway loại Custom

## **4. Xoá Route**
Ở cột Actions, người dùng có thể bấm nút Delete để chỉnh sửa thông tin của Route
  * Với gateway loại Basic sẽ không được xoá Route, chỉ được xoá Route khi Gateway loại Custom

# **Hệ thống cho phép người dùng quản lý NAT rule trong từng Gateway**
## **1. Quản lý danh sách NAT Rule**
[![](/img/migrated/list-nat-rule-1024x479-b73cc002.png)](/img/migrated/list-nat-rule-1024x479-b73cc002.png)
Người dùng có thể filter NAT rule 
[![](/img/migrated/filter-nat-1024x510-0eb92fe2.png)](/img/migrated/filter-nat-1024x510-0eb92fe2.png)
Giải thích các trường thông tin hỗ trợ filter:  
| Field  | Ý nghĩa  |  
| --- | --- |  
| Nat rule name  | Nhập tên NAT rule hoặc một phần tên. Hệ thống sẽ lọc theo chuỗi ký tự bạn nhập. Ví dụ: nhập "web" để tìm các rule như “web-nat-01”, “web-service-nat”.  |  
| Nat rule status  | Dropdown chọn trạng thái NAT rule, bao gồm: Active, Inactive, Pending, Deleting. Dùng để lọc các rule đang hoạt động hoặc đã tắt.  |  
| Nat rule type  | Dropdown lọc theo loại NAT rule: Outbound NAT (SNAT), Inbound NAT (DNAT). Ví dụ: chọn Outbound NAT để chỉ hiển thị các rule chuyển IP nội bộ ra IP public.  |  
| External IP  | Lọc NAT rule theo IP Public (External IP). Nhập địa chỉ IP ngoài mà rule sử dụng. Hỗ trợ định dạng IPv4. Ví dụ: nhập 203.113.1.15 để tìm tất cả rule sử dụng IP này làm SNAT hoặc DNAT.  |  
| Internal IP  | Lọc NAT rule theo IP nội bộ (Internal IP) của instance. Nhập IP private trong VPC. Hỗ trợ IPv4. Ví dụ: nhập 10.10.5.21 để xem rule NAT của Instance này.  |  
| Destination IP  | Lọc NAT rule theo IP đích trong rule DNAT hoặc rule forward. Sử dụng nếu muốn tìm rule chuyển tiếp traffic đến 1 IP cụ thể. Hỗ trợ IP riêng hoặc IP public tùy loại rule. Ví dụ: nhập 172.16.100.50 để xem rule chuyển traffic đến địa chỉ đó.  |  
## **2. Tạo NAT Rule**
Người dùng có thể bấm nút Create NAT Rule để tạo mới 1 NAT Rule
[![file](/img/migrated/image-1754291008356-de8b3348.png)](/img/migrated/image-1754291008356-de8b3348.png)
Có 2 loại NAT:
  * Inbound NAT: Quản lý dữ liệu đi từ bên ngoài vào mạng nội bộ
  * Outbound NAT: Quản lý dữ liệu đi từ mạng nội bộ ra ngoài

## **3. Chỉnh sửa NAT Rule**
Ở cột Actions, người dùng có thể bấm nút Edit để chỉnh sửa thông tin của NAT Rule
  * Với gateway loại Basic sẽ không được chỉnh sửa NAT Rule, chỉ được chỉnh sửa khi Gateway loại Custom

## **4. Xoá NAT Rule**
Ở cột Actions, người dùng có thể bấm nút Delete để chỉnh sửa thông tin của Route
  * Với gateway loại Basic sẽ không được xoá NAT Rule, chỉ được xoá NAT Rule khi Gateway loại Custom

# **Hệ thống cho phép người dùng quản lý NO NAT rule trong từng Gateway**
## **1. Quản lý danh sách NO NAT Rule**
[![file](/img/migrated/image-1754291539835-89c7d41b.png)](/img/migrated/image-1754291539835-89c7d41b.png)
## **2. Tạo NO NAT Rule**
[![file](/img/migrated/image-1754291548065-9e866aa4.png)](/img/migrated/image-1754291548065-9e866aa4.png)
Có 2 loại NO NAT:
  * NO Inbound NAT
  * NO Outbound NAT

## **3. Chỉnh sửa NO NAT Rule**
Ở cột Actions, người dùng có thể bấm nút Edit để chỉnh sửa thông tin của NO NAT Rule
## **4. Xoá NO NAT Rule**
Ở cột Actions, người dùng có thể bấm nút Delete để chỉnh sửa thông tin của NO NAT Rule
# **Các tính năng khác liên quan đến Gateway**
## **1. Allocate IP Address**
  * Ở màn hình Floating IP, hệ thống cho phép người dùng chọn Gateway khi Allocate IP, hover vào tooltip ở thông tin của Gateway để biết được Gateway loại Basic hay Custom 
    * Nếu người dụng chọn Gateway loại Custom, hệ thống chỉ cho phép allocate IP mà gắn vào resource nào (hệ thống ẩn phần Resource, IP Port, Instance Port)

[![file](/img/migrated/image-1754291575833-5ea9341b.png)](/img/migrated/image-1754291575833-5ea9341b.png)
  * Nếu người dùng chọn Gateway loại Basic , hệ thống cho phép allocate IP và đồng thời gắn vào resource

[![file](/img/migrated/image-1754291610069-25711f9b.png)](/img/migrated/image-1754291610069-25711f9b.png)
  * Ở màn hình Floating IP (trên cột Actions), với IP thuộc Gateway loại Custom, người dùng sẽ không được gán vào 1 Instance
  * Ở màn hình Instance Detail, trường hợp Instance chưa được gán IP mà người dùng bấm allocate IP, nếu Instance thuộc Gateway lại custom, người dùng sẽ không được gán IP. Để gán được IP, người dùng cần tạo NAT Rule

## **2. Instance**
  * Khi tạo Instance, hệ thống auto fill thông tin Gateway dựa trên Subnet đã chọn trước đó (Gateway được gán vào Subnet). Nếu Gateway loại Custom, người dùng sẽ không được chọn Floating IP (hệ thống sẽ disable field này)

[![file](/img/migrated/image-1754291630097-1768f41d.png)](/img/migrated/image-1754291630097-1768f41d.png)
## **3. Subnet**
  * Ở màn hình tạo Subnet, hệ thống cho phép người dùng chọn Gateway. Nếu Gateway loại Custom, hệ thống sẽ thông báo người dùng tự tạo NAT rule

[![file](/img/migrated/image-1754291640291-8ba52a8b.png)](/img/migrated/image-1754291640291-8ba52a8b.png)
## **4. Security Group**
  * Ở màn hình tạo Security Group, hệ thống cho phép người dùng chọn Gateway, các Security Rule được tạo ra sẽ được quản lý bởi Gateway đã chọn

[![file](/img/migrated/image-1754291651290-309bd36f.png)](/img/migrated/image-1754291651290-309bd36f.png)
## **5. Load Balancer**
  * Hệ thống cho phép user xem thông tin gateway khi sử dụng Load Balancer Classic

[![file](/img/migrated/image-1754291661656-45935b91.png)](/img/migrated/image-1754291661656-45935b91.png)
## **6. VPN Site to Site**
  * Hệ thống cho phép user chọn Gateway khi tạo và sử dụng dịch vụ VPN Site to Site

[![file](/img/migrated/image-1754291672602-cfe24f87.png)](/img/migrated/image-1754291672602-cfe24f87.png)