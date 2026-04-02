---
id: "新-し-い- Managed-GPU -ク-ラ-ス-タ-ー-を-起-動"
title: "Khởi động Managed GPU Cluster mới"
description: "Hướng dẫn tạo và khởi động Managed GPU Cluster mới trên FPT Cloud"
sidebar_label: "Khởi động Managed GPU Cluster mới"
sidebar_position: 4
---

# Khởi động Managed GPU Cluster mới

**Lưu ý:** Để thực hiện thao tác này, bạn cần đáp ứng các điều kiện tiên quyết sau:
- Quota Metal Cloud (Bare Metal HPC) phải đủ để đáp ứng số lượng cluster cần thiết. Ít nhất cần có:
  - 1 mạng cho BM server
  - 1 mạng cho load balancer

**Bước 1:** Trong menu FPT Portal, chọn **[AI Infrastructure] > [Managed GPU Cluster] > "Tạo Managed GPU Cluster"**.

[![](/img/migrated/3-1-a6d7eef2.png)](/img/migrated/3-1-a6d7eef2.png)

**Bước 2:** Nhập thông tin vào tab [Thông tin chung] của cluster rồi nhấn nút **[Tiếp theo]**.

[![](/img/migrated/4-15b5adf9.png)](/img/migrated/4-15b5adf9.png)

- Thông tin chung:
  - **Tên:** Nhập tên cluster. Tên cluster phải khác nhau và tuân theo quy tắc đặt tên.
  - **Mạng:** Chọn từ dải subnet đã tạo cho Bare Metal GPU server.
  - **Phiên bản:** Chọn phiên bản Kubernetes phù hợp với ứng dụng của bạn.
  - **Subnet LB nội bộ:** Thiết lập dải IP riêng cho dịch vụ loại load balancer.
  - **SSH Public Key:** SSH key dùng để kết nối SSH vào worker node của cluster.

**Bước 3:** Nhập thông tin vào tab [Nodes Pool] của cluster rồi nhấn nút **[Tiếp theo]**. Lưu ý khi tạo Managed GPU Cluster:
- Managed GPU Cluster quản lý worker node thông qua worker group – nhóm các worker node có cùng cấu hình. Bạn có thể phân chia worker group cho các ứng dụng phù hợp. Hệ thống yêu cầu ít nhất 1 worker group (base) và bạn không thể xóa worker group này.
- Trong phần cài đặt worker group, bạn có thể gán label cho worker group mong muốn. Label này được áp dụng cho tất cả worker node trong worker group. Bạn có thể thêm, xóa label hoặc chỉnh sửa key/value của các label hiện có. Các label này giúp bạn dễ dàng triển khai ứng dụng vào các worker group khác nhau theo nhu cầu.

[![](/img/migrated/5-1-467b1d56.png)](/img/migrated/5-1-467b1d56.png)

**Worker Group 1 (Base):**
- **Tên nhóm:** Đặt tên để phân biệt worker group.
- **Runtime:** Chọn container runtime. Hiện tại hệ thống mới chỉ hỗ trợ Containerd runtime container.
- **Số lượng server:** Số lượng MetalCloud Server được tạo để chạy worker trong cluster.
- **Flavor:** Loại flavor của Metal Cloud GPU server, mặc định là H100.
- **Label:** Gán Kubernetes label cho tất cả worker trong worker group.

Bạn có thể thêm worker group bằng cách nhấn nút **[Thêm Worker Group]** khi khởi tạo k8s cluster.

[![](/img/migrated/Screenshot_2-708902f7.png)](/img/migrated/Screenshot_2-708902f7.png)

Ngoài ra, từ worker group thứ 2 trở đi, bạn có thể cấu hình taint cho worker group nhằm mục đích lên lịch ứng dụng trên worker node. Taint cũng có thể được thêm, xóa và chỉnh sửa dễ dàng.

[![](/img/migrated/Screenshot_1-c7d01a04.png)](/img/migrated/Screenshot_1-c7d01a04.png)

**Lưu ý:** Người dùng cài đặt label/taint cho worker group trên Unify Portal sẽ không thể xóa label/taint của node trong worker group đó bằng kubectl (hệ thống sẽ tự động thêm lại label/taint theo cài đặt trên Unify Portal), vì vậy bạn cần xóa cài đặt label/taint trên Unify Portal.

**Bước 4:** [Cài đặt nâng cao]

[![](/img/migrated/6-1-126a59ae.png)](/img/migrated/6-1-126a59ae.png)

- **Pod Network:** Mạng dùng cho các pod trong cluster.
- **Service Network:** Mạng dùng cho các service của cluster.
- **Network Node Prefix:** Số pod tối đa trên mỗi Managed GPU node.
- **Max Pod per Node:** Loại CNI được cấu hình cho cluster, chỉ hỗ trợ loại Calico.

**Bước 5:** Màn hình Review & Create hiển thị thông tin cluster đã cấu hình trước đó, hệ thống sẽ tự động kiểm tra xem quota Bare Metal GPU server có đủ để khởi tạo cluster hay không.

[![](/img/migrated/7-1-0c3879d8.png)](/img/migrated/7-1-0c3879d8.png)

Sau khi hệ thống kiểm tra tài nguyên thành công, nhấn nút **[Tạo Managed GPU Cluster]** để tiến hành tạo cluster.
