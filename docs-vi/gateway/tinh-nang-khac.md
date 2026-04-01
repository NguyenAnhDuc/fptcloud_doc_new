---
id: "tinh-nang-khac"
title: "Tinh Nang Khac"
description: "* Ở màn hình Floating IP, hệ thống cho phép người dùng chọn Gateway khi Allocate IP, hover vào tooltip ở thông tin của G"
sidebar_label: "Tinh Nang Khac"
sidebar_position: 7
pagination_next: null
---

# Tinh Nang Khac

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
