---
id: "tinh-nang-khac"
title: "Tính năng khác liên quan đến Gateway"
description: "Hướng dẫn sử dụng Gateway trong các tính năng Floating IP, Instance, Subnet, Security Group, Load Balancer và VPN"
sidebar_label: "Tính năng khác"
sidebar_position: 7
pagination_next: null
---

# Tính năng khác liên quan đến Gateway

## Cấp phát Floating IP (Allocate IP Address)

Ở màn hình **Floating IP**, hệ thống cho phép bạn chọn Gateway khi cấp phát IP. Hover vào tooltip ở thông tin của Gateway để biết loại Basic hay Custom.

- Nếu bạn chọn Gateway loại **Custom**, hệ thống chỉ cho phép cấp phát IP mà không gắn vào resource nào (hệ thống ẩn phần Resource, IP Port, Instance Port).

[![Allocate IP với Gateway Custom](/img/migrated/image-1754291575833-5ea9341b.png)](/img/migrated/image-1754291575833-5ea9341b.png)

- Nếu bạn chọn Gateway loại **Basic**, hệ thống cho phép cấp phát IP và đồng thời gắn vào resource.

[![Allocate IP với Gateway Basic](/img/migrated/image-1754291610069-25711f9b.png)](/img/migrated/image-1754291610069-25711f9b.png)

:::note
- Ở màn hình **Floating IP** (cột Actions), với IP thuộc Gateway loại **Custom**, bạn sẽ không thể gán IP vào một Instance.
- Ở màn hình **Instance Detail**, nếu Instance chưa được gán IP và bạn nhấn Allocate IP, nhưng Instance thuộc Gateway loại **Custom**, bạn sẽ không thể gán IP trực tiếp. Để gán được IP, bạn cần tạo NAT Rule.
:::

## Instance

Khi tạo Instance, hệ thống tự động điền thông tin Gateway dựa trên Subnet đã chọn (Gateway được gán vào Subnet). Nếu Gateway loại **Custom**, bạn sẽ không thể chọn Floating IP (hệ thống sẽ vô hiệu hóa trường này).

[![Tạo Instance với Gateway Custom](/img/migrated/image-1754291630097-1768f41d.png)](/img/migrated/image-1754291630097-1768f41d.png)

## Subnet

Ở màn hình tạo **Subnet**, hệ thống cho phép bạn chọn Gateway. Nếu Gateway loại **Custom**, hệ thống sẽ thông báo bạn cần tự tạo NAT Rule.

[![Tạo Subnet với Gateway Custom](/img/migrated/image-1754291640291-8ba52a8b.png)](/img/migrated/image-1754291640291-8ba52a8b.png)

## Security Group

Ở màn hình tạo **Security Group**, hệ thống cho phép bạn chọn Gateway. Các Security Rule được tạo ra sẽ được quản lý bởi Gateway đã chọn.

[![Tạo Security Group với Gateway](/img/migrated/image-1754291651290-309bd36f.png)](/img/migrated/image-1754291651290-309bd36f.png)

## Load Balancer

Hệ thống cho phép bạn xem thông tin Gateway khi sử dụng **Load Balancer Classic**.

[![Load Balancer Classic với Gateway](/img/migrated/image-1754291661656-45935b91.png)](/img/migrated/image-1754291661656-45935b91.png)

## VPN Site to Site

Hệ thống cho phép bạn chọn Gateway khi tạo và sử dụng dịch vụ **VPN Site to Site**.

[![VPN Site to Site với Gateway](/img/migrated/image-1754291672602-cfe24f87.png)](/img/migrated/image-1754291672602-cfe24f87.png)
