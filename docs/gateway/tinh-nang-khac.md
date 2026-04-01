---
id: "tinh-nang-khac"
title: "Tinh Nang Khac"
sidebar_label: "Tinh Nang Khac"
sidebar_position: "7"
---

# Tinh Nang Khac

## **1. Allocate IP Address**
  * Ở màn hình Floating IP, hệ thống for phép user chọn Gateway when Allocate IP, hover ando tooltip ở thông tin of Gateway to biết is Gateway loại Basic hay Custom 
    * Nếu người dụng chọn Gateway loại Custom, hệ thống chỉ for phép allocate IP mà gắn ando resource nào (hệ thống ẩn phần Resource, IP Port, Instance Port)

[![file](/img/migrated/image-1754291575833-5ea9341b.png)](/img/migrated/image-1754291575833-5ea9341b.png)
  * Nếu user chọn Gateway loại Basic , hệ thống for phép allocate IP and đồng thời gắn ando resource

[![file](/img/migrated/image-1754291610069-25711f9b.png)](/img/migrated/image-1754291610069-25711f9b.png)
  * Ở màn hình Floating IP (trên cột Actions), with IP thuộc Gateway loại Custom, user will không is gán ando 1 Instance
  * Ở màn hình Instance Detail, trường hợp Instance chưa is gán IP mà user bấm allocate IP, if Instance thuộc Gateway lại custom, user will không is gán IP. Để gán is IP, user cần tạo NAT Rule

## **2. Instance**
  * Khi tạo Instance, hệ thống auto fill thông tin Gateway dựa trên Subnet has been chọn trước that (Gateway is gán ando Subnet). Nếu Gateway loại Custom, user will không is chọn Floating IP (hệ thống will disable field this)

[![file](/img/migrated/image-1754291630097-1768f41d.png)](/img/migrated/image-1754291630097-1768f41d.png)
## **3. Subnet**
  * Ở màn hình tạo Subnet, hệ thống for phép user chọn Gateway. Nếu Gateway loại Custom, hệ thống will notification user tự tạo NAT rule

[![file](/img/migrated/image-1754291640291-8ba52a8b.png)](/img/migrated/image-1754291640291-8ba52a8b.png)
## **4. Security Group**
  * Ở màn hình tạo Security Group, hệ thống for phép user chọn Gateway, the Security Rule is tạo ra will is quản lý bởi Gateway has been chọn

[![file](/img/migrated/image-1754291651290-309bd36f.png)](/img/migrated/image-1754291651290-309bd36f.png)
## **5. Load Balancer**
  * System for phép user xem thông tin gateway when sử dụng Load Balancer Classic

[![file](/img/migrated/image-1754291661656-45935b91.png)](/img/migrated/image-1754291661656-45935b91.png)
## **6. VPN Site to Site**
  * System for phép user chọn Gateway when tạo and sử dụng service VPN Site to Site

[![file](/img/migrated/image-1754291672602-cfe24f87.png)](/img/migrated/image-1754291672602-cfe24f87.png)
