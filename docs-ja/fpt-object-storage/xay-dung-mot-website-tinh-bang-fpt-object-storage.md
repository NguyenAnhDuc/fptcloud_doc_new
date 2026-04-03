---
id: "xay-dung-mot-website-tinh-bang-fpt-object-storage"
title: "Xây dựng một website tĩnh bằng FPT Object Storage"
description: "Ngoài chức năng đơn thuần là lưu trữ dữ liệu, **FPT Object Storage** còn hỗ trợ cấu hình bucket thành một web hosting."
sidebar_label: "Xây dựng một website tĩnh bằng FPT Object Storage"
sidebar_position: "16"
---

# Xay Dung Mot Website Tinh Bang Fpt Object Storage

## Giới thiệu
Ngoài chức năng đơn thuần là lưu trữ dữ liệu, **FPT Object Storage** còn hỗ trợ cấu hình bucket thành một web hosting.
Với các đặc điểm như độ ổn định cao, giá cả rất rẻ, cấu hình đơn giản. Bạn có thể sử dụng web hosting này với nhiều mục đích khác nhau:
  * Lưu trữ các website tĩnh như Landing page, Resume websites, Portfolio websites, Brochure websites và các read-only sites khác.
  * Lưu trữ một website để thông báo lỗi khi website chính có gián đoạn.

## Điều kiện tiên quyết
Đang sử dụng dịch vụ **FPT Object Storage** và có một bucket public.

## Tổng quan
Static website là một trang web không có tính năng tương tác phía máy chủ. Nó thường chỉ bao gồm các tệp HTML, CSS, JavaScript và tài nguyên như hình ảnh, video. Bằng cách sử dụng FPT Object Storage, bạn có thể lưu trữ những tệp này trong bucket của mình và cấu hình nó để hoạt động như một trang web.
Sau khi cấu hình thành công, FPT sẽ cung cấp cho bạn một domain. Bạn có thể sử dụng trực tiếp domain này hoặc mua một domain khác và trỏ CNAME sang để dùng domain của riêng mình.

## Giải pháp
Dưới đây là các bước cơ bản để xây dựng một web tĩnh bằng FPT Object Storage:
**Chuẩn bị page website:** Tạo các tệp HTML, CSS, JavaScript và tất cả các tài nguyên khác cần thiết cho trang web của bạn.
**Tạo bucket public:** Đảm bảo rằng bucket bạn muốn sử dụng cho trang web là public. Điều này cho phép mọi người truy cập vào nội dung trong bucket.
**Upload tệp lên bucket:** Sử dụng giao diện FPT Portal hoặc client để upload các tệp bạn đã chuẩn bị lên bucket của mình.
**Cấu hình web hosting:** Trong cài đặt của bucket, bạn sẽ thấy một phần cấu hình web hosting. Bạn cần thiết lập các tùy chọn như tên tệp index (thường là index.html) và tên tệp 404 (trang không tìm thấy). Hướng dẫn chi tiết ở đây.
**Truy cập trang web:** Sau khi đã cấu hình xong, bạn có thể truy cập trang web tĩnh của mình bằng cách sử dụng đường dẫn được cung cấp trong cài đặt web hosting của bucket.

## Kết luận
Sử dụng FPT Object Storage để xây dựng một trang web tĩnh là một giải pháp đơn giản và tiết kiệm chi phí. Việc cấu hình bucket để hoạt động như một web hosting cho phép bạn dễ dàng chia sẻ nội dung trực tuyến mà không cần phải quản lý máy chủ riêng.
