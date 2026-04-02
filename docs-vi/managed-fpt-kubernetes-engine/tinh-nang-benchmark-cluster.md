---
id: "tinh-nang-benchmark-cluster"
title: "Tính năng Benchmark Managed Kubernetes Cluster"
description: "**1. Giới thiệu chung tính năng Benchmark Security**"
sidebar_label: "Tính năng Benchmark Managed Kubernetes Cluster"
sidebar_position: 30
---

# Tính năng Benchmark cluster

**1. Giới thiệu chung tính năng Benchmark Security**
Để đảm bảo bảo về an toàn bảo mật thông tin cho FPT Cloud Managed Kubernetes cluster, FPT Cloud cung cấp tính năng cho phép người quản trị thực hiện benchmark các cấu hình, thiết lập của kubelet trong worker node theo tiêu chuẩn chung do Center for Internet Security – CIS đề xuất. 
CIS Benchmarks là một tập hợp các hướng dẫn cấu hình bảo mật toàn diện được phát triển bởi Trung tâm Bảo mật Internet (Center for Internet Security - CIS). Các hướng dẫn này cung cấp các thực tiễn tốt nhất để bảo mật hệ thống, dịch vụ và phần mềm. 
Các test case được áp dụng cho từng Kubernetes version và đã được điều chỉnh với cấu hình kubelet của FPT Cloud. 
Kết quả với mỗi test case có 3 loại là Pass, Fail và Warning. Kết quả Pass thể hiện cấu hình đã thỏa mãn với test case do CIS đề ra, Fail thể hiện kết quả không đạt với test case có mức độ quan trọng cao, Warning thể hiện cấu hình không đạt với test case nhưng độ quan trọng thấp (có thể cấu hình hoặc không cấu hình). 
**2. Hướng dẫn sử dụng tính năng trên Unify Portal**
_Lưu ý: Bộ tính năng tăng cường khả năng bảo mật cho Managed Kubernetes Cluster được tích hợp sau khi cluster được khởi tạo thành công (Trạng thái Succeeded (Running))_
**A**. Kích hoạt tính năng Benchmark Security: 
Truy cập portal FPT Cloud console.fptcloud.com, chọn mục **Kubernetes** , bấm vào cluster cần benchmark sau đó vào tab **Security** , chọn tab **Benchmark Security** rồi thực hiện enable: 
[![](/img/migrated/Picture1-7-dcd8247e.png)](/img/migrated/Picture1-7-dcd8247e.png)
Sau khi job benchmark được chạy thành công, kết quả chi tiết sẽ được hiển thị, người dùng có thể chạy lại benchmark để cập nhật kết quả mới nhất hoặc download kết quả về máy.
[![](/img/migrated/Picture2-5-7bec9f13.png)](/img/migrated/Picture2-5-7bec9f13.png)
**B**. Tắt tính năng Benchmark Security 
Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần benchmark sau đó vào tab Security, chọn tab Benchmark Security rồi thực hiện xác nhận để disable:
[![](/img/migrated/Picture3-5-f60fafac.png)](/img/migrated/Picture3-5-f60fafac.png)
