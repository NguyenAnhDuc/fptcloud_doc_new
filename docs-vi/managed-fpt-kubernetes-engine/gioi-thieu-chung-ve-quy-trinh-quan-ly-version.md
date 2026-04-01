---
id: "gioi-thieu-chung-ve-quy-trinh-quan-ly-version"
title: "Giới thiệu chung về quy trình quản lý version Kubernetes trên FPTCloud"
description: "* FPTCloud release và update các kubernetes version theo tiêu chuẩn của cộng đồng Kubernetes Open Source Software (OSS)."
sidebar_label: "Giới thiệu chung về quy trình quản lý version Kubernetes trên FPTCloud"
sidebar_position: 26
---

# Giới thiệu chung về quy trình quản lý version

* FPTCloud release và update các kubernetes version theo tiêu chuẩn của cộng đồng Kubernetes Open Source Software (OSS). 
  * Định dạng phiên bản của kubernetes là x.y.z trong đó x là major version, major version được tăng từ (x.y) lên (x+1.y), y là minor version, các Deprecated APIs sẽ được xóa bỏ với minor version mới, minor version được tăng từ 1.y lên (1.y+1), ví dụ version 1.25 là minor release theo sau của 1.25. z là patch release, các bản vá, cập nhật với mục đích fix bug hay vá các lỗ hổng bảo mật của minor version sẽ được cập nhật qua patch release. 
  * FPTCloud hỗ trợ quản lý 4 Kubernetes minor version ổn định nhất cùng một thời điểm, trong đó version cao nhất trong 4 version này sẽ được chọn làm version mặc định (default). Các version ổn định này đã kiểm thử kĩ càng và sẵn sàng cho việc chạy production. Các version cũ sẽ được đánh nhãn deprecated cho đến ngày end of life được quy định bởi FPTCloud trong bảng release note. 
  * Bên cạnh đó FPTCloud cũng hỗ trợ các version Kubernetes mới được hỗ trợ bởi cộng đồng theo Kubernetes OSS. Các version mới này được để tag Beta, đang trong quá trình hoàn thiện từ những bài kiểm thử nội bộ và ý kiến phản hồi của trải nghiệm người dùng. Khi đủ điều kiện sẵn sàng cho production, các version này sẽ bỏ tag Beta và trở thành version Stable hoặc GA (Generic Available). 
  * Các version cũ (end of standard support bởi cộng đồng Kubernetes và FPT Cloud) sẽ không còn được hỗ trợ về kỹ thuật. Các tính năng mới liên quan đến các bản fix của Kubernetes hay các tính năng mới của cloud provider sẽ không được cập nhật ở version end-of-life. Các lỗ hổng và rủi ro về security cũng sẽ không được cập nhật hay khắc phục ở các version này. Lưu ý: các version cũ sẽ không còn được FPT Cloud hỗ trợ và đảm bảo SLA 
  * Các version Kubernetes đối với cluster thông thường sẽ có sự khác biệt với version Kubernetes cho cluster sử dụng GPU (thông thường version default của cluster GPU sẽ thấp hơn cluster thông thường 1 minor version). 
  * Image version cho worker OS sẽ được patch liên tục để giải quyết ngăn chặn các lỗ hổng về Security, hiện tại FPTCloud đang sử dụng image OS ubuntu 22.04 cho worker node trong Kubernetes cluster. 
  * Mỗi version trước thời điểm end of standard support 2 tháng sẽ được đưa vào trạng thái maintenance và hiển thị thông qua giao diện portal. Các cluster đang chạy với version sắp end-of-life sẽ được thông báo trước một tháng qua phương thức gửi Email cho user VPC owner 1 lần/ngày để người dùng chủ động nâng cấp version hoặc cấu hình cho tính năng auto upgrade version để cluster được tự động upgrade khi version tới thời điểm end of standard support. Trong khoảng thời gian này nếu người dùng chủ động nâng cấp version, dịch vụ kubernetes sẽ không gửi mail cho user VPC owner nữa. 
  * Đối với các cluster được cấu hình auto upgrade version sẽ được gửi email thông báo thời gian nâng cấp cụ thể cho user VPC owner trước 3 ngày so với ngày sẽ tự động nâng cấp.
