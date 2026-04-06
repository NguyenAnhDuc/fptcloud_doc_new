---
id: "tinh-nang-workload-scan"
title: "Tính năng Workload Managed Kubernetes Cluster"
description: "**1. Giới thiệu chung tính năng Workload Security**"
sidebar_label: "Tính năng Workload Managed Kubernetes Cluster"
sidebar_position: 32
---

# Tính năng Workload Managed Kubernetes Cluster

**1. Giới thiệu chung tính năng Workload Security**
**1.1. Configuration Auditing Overview**
Với việc tổ chức deploy các containerized workloads bên trong môi trường Kubernetes, bạn sẽ đối mặt với nhiều lựa chọn cấu hình liên quan tới images, containers, control plane và data plane. Việc cài đặt các cấu hình không phù hợp sẽ tạo nên những mối nguy tiềm tàng về bảo mật. Devops và Platform owners cần có khả năng liên tục đánh giá các công cụ, workloads và cơ sở hạ tầng theo các tiêu chuẩn cứng hóa cấu hình để khắc phục bất kỳ vi phạm nào.
**1.2. Vulnerability Report**
Vulnerability Report cung cấp những lỗ hổng gần nhất được tìm thấy trong container image của một Kubernetes workload cho trước. Nó bao gồm list của OS package và lỗ hổng ứng dụng, kèm theo đó là bản summary được nhóm theo Severity (độ quan trọng).
Vulnerability Report cung cấp những lỗ hổng gần nhất được tìm thấy trong container image của một Kubernetes workload cho trước. Nó bao gồm list của OS package và lỗ hổng ứng dụng, kèm theo đó là bản summary được nhóm theo Severity (độ quan trọng). 
Đối với từng namespace, sẽ có một Vulnerability Report tương ứng, lưu kết quả scan images workload bên trong namespace đó. 
Trong report, sẽ có các trường tương ứng sau: 
  * **namespace** : namespace đang được sử dụng để scan các container images trong K8s workload. 
  * **summary** : Tóm tắt kết quả của scan report 
criticalCount: số lượng lỗ hổng nguy hiểm mức độ nghiêm trọng
highCount: số lượng lỗ hổng nguy hiểm mức độ cao
lowCount: số lượng lỗ hổng nguy hiểm mức độ thấp
unkownCount: số lượng lỗ hổng nguy hiểm không đánh giá được mức độ
  * **vulnerabilities** : chi tiết của từng lỗ hổng 
ID
Severity: độ khẩn thiết của lỗ hổng (Critical, High, Low, Unkown)
Title: tên của lỗ hổng
PrimaryLink : Link liên kết tới mô tả chi tiết của lỗ hổng
Score: là điểm số CVE (Common Vulnerabilities and Exposure), từ đó để xác định Severity
+) 0 -> Unkown
+) 0.1 - 3.9 -> Low -> Unkown
+) 4.0 - 6.9 -> Medium
+) 7.0 - 8.9 -> High
+) 9.0 - 10.0 -> Critical
Namespace

**1.3. RBAC Assessment Report**
RbacAssessmentReport đại diện cho các kiểm tra được thực hiện bởi các công cụ kiểm toán cấu hình, chẳng hạn như Trivy, đối với một đánh giá RBAC của Kubernetes. 
Ví dụ, kiểm tra rằng một Role nhất định không cấp quyền truy cập vào secrets cho tất cả các nhóm. 
Mỗi báo cáo được sở hữu bởi đối tượng Kubernetes cơ sở và được lưu trữ trong cùng namespace. 
Trong report, sẽ có các trường tương ứng sau: 
  * **namespace** : namespace đang được sử dụng để scan các role trong K8s workload 
  * **summary** : Tóm tắt kết quả của scan report 
criticalCount: số lượng lỗ hổng nguy hiểm mức độ nghiêm trọng
highCount: số lượng lỗ hổng nguy hiểm mức độ cao
mediumCount: số lượng lỗ hổng nguy hiểm mức độ vừa
lowCount: số lượng lỗ hổng nguy hiểm mức độ thấp

**1.4. Cluster RBAC Assessment Report**
Nếu với RBAC Assessment Report là kiểm tra quyền của các Role nằm trong cùng một namespace, thì Cluster RBAC Assessment Report là tổng hợp của mọi Role nằm trong các namespace
**1.5. Config Audit Report**
ConfigAuditReport đại diện cho các kiểm tra được thực hiện bởi Trivy, đối với cấu hình của từng đối tượng Kubernetes. Ví dụ, kiểm tra xem liệu một container image đã được chạy dưới quyền non-root user hay chưa, hoặc là liệu container đó đã được cấu hình resource request hay limits hay chưa. Các việc checks có thể liên quán tới K8s workloads và các resource khác trong namespace, như là services, configmaps, roles và rolebindings. 
Trong report, sẽ có các trường tương ứng sau: 
  * **Namespace** : namespace được quét 
  * **Summary** : 

CriticalCount: số lượng lỗ hổng nguy hiểm mức độ nghiêm trọng
HighCount: số lượng lỗ hổng nguy hiểm mức độ cao
LowCount: số lượng lỗ hổng nguy hiểm mức độ thấp
MediumCount: số lượng lỗ hổng nguy hiểm mức độ vừa
**1.6. Cluster Config Audit Report**
Nếu với Config Audit Report là kiểm tra các cấu hình nằm trong cùng một namespace, thì Cluster Config Audit Report là tổng hợp của cấu hình nằm trong các namespace
**1.7. Cluster Infra Assessment Report**
Cluster Infra Assessment Report là kiểm tra các cấu hình quan trọng ở phần quản trị của cụm K8s, ví dụ như: etcd, apiserver, scheduler, controller-manager, v.v...
**2. Hướng dẫn sử dụng tính năng trên Unify Portal**
_Lưu ý: Bộ tính năng tăng cường khả năng bảo mật cho Managed Kubernetes Cluster được tích hợp sau khi cluster được khởi tạo thành công (Trạng thái Succeeded (Running))_
**2.1. Kích hoạt tính năng Workload Security:**
Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần benchmark sau đó vào tab Security, chọn tab Workload Security rồi thực hiện enable: 
[![](/img/migrated/Picture1-9-6a8d3837.png)](/img/migrated/Picture1-9-6a8d3837.png)
Hình 1. Kích hoạt dịch vụ Workload Scan 
  
Sau khi bấm nút kích hoạt, màn hình sẽ hiển thị một biểu mẫu cho người dùng lựa chọn: các namespace để quét, TTL (Time-to-live) của các báo cáo, và các loại quét để xuất thành báo cáo hiển thị trên portal. 
[![](/img/migrated/Picture2-7-daa01862.png)](/img/migrated/Picture2-7-daa01862.png)
Hình 2. Biểu mẫu để lựa chọn cấu hình sau khi kích hoạt tính năng
  
[![](/img/migrated/Picture3-7-19c4f9df.png)](/img/migrated/Picture3-7-19c4f9df.png)
Hình 3. Lựa chọn các namespaces
[![](/img/migrated/Picture4-6-e8ea8ab0.png)](/img/migrated/Picture4-6-e8ea8ab0.png)
Hình 4. Lựa chọn các loại báo cáo để thực hiện quét và hiển thị trên Portal
[![](/img/migrated/Picture5-6-f73e06e2.png)](/img/migrated/Picture5-6-f73e06e2.png)
Hình 5. Lựa chọn thời gian TTL (mặc định 30 phút)
  
Sau khi job Workload được chạy thành công, kết quả chi tiết sẽ được hiển thị, người dùng có thể chạy lại workload để cập nhật kết quả mới nhất. 
Thông tin hiển thị của các Reports được hiển thị và biểu diễn như dưới, với các trường hiển thị đã được diễn tả ở mục trên. 
[![](/img/migrated/Picture6-6-299846cc.png)](/img/migrated/Picture6-6-299846cc.png)
Hình 6. Màn hiển thị của Cluster RBAC Assessment Report
[![](/img/migrated/Picture7-6-fb4792ac.png)](/img/migrated/Picture7-6-fb4792ac.png)
Hình 7. Màn hiển thị của Config Audit Report
[![](/img/migrated/Picture8-5-c87e6156.png)](/img/migrated/Picture8-5-c87e6156.png)
Hình 8. Màn hiển thị của Rbac Assessment Report
[![](/img/migrated/Picture9-4-97d3126a.png)](/img/migrated/Picture9-4-97d3126a.png)
Hình 9. Màn hiển thị của Vulnerability Report
[![](/img/migrated/Picture10-4-d3703386.png)](/img/migrated/Picture10-4-d3703386.png)
Hình 10. Màn hiển thị của Cluster Infra Assessment Report
  
**2.2. Tắt tính năng Workload Security**
Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần benchmark sau đó vào tab Security, chọn tab Workload Security rồi thực hiện xác nhận để tắt dịch vụ. 
[![](/img/migrated/Picture11-3-44b70f69.png)](/img/migrated/Picture11-3-44b70f69.png)
