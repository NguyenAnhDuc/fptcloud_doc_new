---
id: "audit-log-vn"
title: "Giới thiệu chung tính năng Audit Logs Security"
description: "Giới thiệu chung tính năng Audit Logs Security"
sidebar_label: "Giới thiệu chung tính năng Audit Logs Security"
sidebar_position: 33
pagination_next: null
---

# Audit Log Vn

Giới thiệu chung tính năng Audit Logs Security
Audit Log nằm trong nhóm tính năng về Security được cung cấp self-service trên Unify portal thuộc sản phẩm MFKE hỗ trợ ghi lại toàn bộ hoạt động và yêu cầu API gửi đến kube-apiserver. Từ đó giúp truy xuất tác nhân nào, đã thực hiện hành động gì, vào thời điểm nào, các object bị tác động và kết quả của hành động đó. 
Lợi ích của Audit Log: 
  * Giúp giám sát hoạt động của các thành phần tương tác với API server của cụm Kubernetes. 
  * Cung cấp khả năng phân tích bảo mật và phát hiện các hành vi bất thường. 
  * Hỗ trợ truy vết sự cố và tuân thủ quy định (compliance). 

✓ Cấu trúc của Audit Log bao gồm các thông tin sau: 
[![](/img/migrated/Picture1-11-84596edd.png)](/img/migrated/Picture1-11-84596edd.png)
Request URL: Đường dẫn của API được gọi tới kube-apiserver. 
- Audit ID: ID duy nhất cho từng sự kiện audit, dùng để truy vết log. 
- Object Reference: Thông tin về tài nguyên Kubernetes được thao tác: 
ApiGroup 
apiVersion: Phiên bản API (v1)
name: Tên của node
Namespace
resource: Loại tài nguyên (nodes)
Action: Thao tác được thực hiện trên tài nguyên Kubernetes. Ví dụ: patch/create/delete/update 
Username: Tên của tài khoản hoặc dịch vụ thực hiện hành động. 
Request Received: Thời gian mà yêu cầu được ghi nhận bởi kube-apiserver (theo định dạng dd-MM-yyyy HH:mm:ss). 
Logging Time: Thời gian khi sự kiện được ghi nhận trong hệ thống log của dịch vụ MFKE. Thường thì Logging Time sẽ trễ hơn so với Request Received do thời gian xử lý đẩy log từ kube-apiserver của cluster lên trên hệ thống log tập trung.
Hướng dẫn sử dụng tính năng trên Unify Portal
Lưu ý: Bộ tính năng tăng cường khả năng bảo mật cho Managed Kubernetes Cluster được tích hợp sau khi cluster được khởi tạo thành công (Trạng thái Succeeded (Running))
**1. Kích hoạt tính năng Audit Log Security:**
Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần audit sau đó vào tab Security, chọn tab Audit Log. 
[![](/img/migrated/Picture2-9-37c26cb2.png)](/img/migrated/Picture2-9-37c26cb2.png)
Sau khi bấm vào tab Audit Log, màn hình sẽ tự động query và hiển thị toàn bộ log ghi được trong 1 giờ gần nhất. Thông tin audit log được hiển thị với các trường đã được mô tả ở mục 2 bên trên. 
[![](/img/migrated/Picture3-9-0344c4e2.png)](/img/migrated/Picture3-9-0344c4e2.png)
**2. Nếu muốn tìm logs trong một khoảng thời gian khác, khách hàng có thể thao tác như sau:**
  * Bước 1: Click vào mục time picker ở góc trên bên phải màn hình. 

[![](/img/migrated/Picture4-8-91bc2516.png)](/img/migrated/Picture4-8-91bc2516.png)
  * Bước 2: Nhập khoảng thời gian muốn hiển thị log và click **Apply Filter**. 

[![](/img/migrated/Picture5-8-a1a7d359.png)](/img/migrated/Picture5-8-a1a7d359.png)
Hệ thống sẽ hiển thị toàn bộ logs đã ghi được trong khoảng thời gian đã chọn, log sẽ được sắp xếp theo thời gian giảm dần. 
[![](/img/migrated/Picture6-8-5d8f452b.png)](/img/migrated/Picture6-8-5d8f452b.png)
Lưu ý: 
  * Khách hàng chỉ có thể filter log trong khoảng thời gian (From – To) tối đa là 3 ngày. 
  * Logs sẽ được lưu trữ trong vòng 7 ngày gần nhất.