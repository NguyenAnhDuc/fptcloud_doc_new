---
id: "quan-ly-mountpoint"
title: "Quản lý MountPoint"
description: "Trong hệ thống FPT File Storage – High Performance, Mount Point là một điểm truy cập logic cho phép người dùng kết nối đ"
sidebar_label: "Quản lý MountPoint"
sidebar_position: 4
---

# Quản lý Mount Point

## **1. Tổng quan Mount Point**
### **Mount Point là gì?**
Trong hệ thống FPT File Storage – High Performance, Mount Point là một điểm truy cập logic cho phép người dùng kết nối đến một thư mục cụ thể (path) trong pool lưu trữ.
Để mount dữ liệu từ server Bare Metal, bạn cần tạo một Mount Point với các thông tin cấu hình gồm:
  * **Path** : Đường dẫn thư mục cụ thể trên hệ thống lưu trữ mà bạn muốn truy cập.
  * **Giao thức truy cập** : Ví dụ như NFSv3 hoặc NFSv4.
  * **Subnet truy cập** : Chỉ các máy chủ thuộc subnet được chỉ định mới được phép mount. Nếu máy chủ không nằm trong danh sách subnet này, yêu cầu mount sẽ bị từ chối.

### **Vai trò của Mount Point**  
| Thành phần  | Vai trò  |  
| --- | --- |  
| Mount Point  | Điểm truy cập từ mạng nội bộ vào file storage thông qua NFSv3/NFSv4/S3.  |  
| Client (máy chủ)  | Mount dữ liệu từ file storage, hiển thị như ổ đĩa nội bộ.  |  
| Storage Backend (VAST)  | Hạ tầng lưu trữ.  |  
| QoS Policy  | Gắn với mount point để giới hạn IOPS, throughput…  |  

### **Cấu trúc Mount Point**  
| **Trường**  | **Mô tả**  |  
| --- | --- |  
| Name  | Tên hiển thị trong portal  |  
| Path  | Đường dẫn thực tế, ví dụ: /ml-data  |  
| Protocol  | Giao thức: NFSv3 hoặc NFSv4  |  
| Subnet  | Dải mạng CIDR được phép truy cập  |  
| Endpoint Range  | Endpoint kết nối  |  
| QoS Policy  | Chính sách kiểm soát hiệu năng  |  
| NFS Alias  | Path Alias sẽ hiển thị trong OS  |  
**Mối quan hệ với các thành phần khác**
  * **VPC & Subnet**: Mount Point có thể gán với nhiều subnet khác nhau trong cùng/khác VPC. Chỉ máy chủ trong subnet được gán mới truy cập được.
  * **QoS Policy** : Giới hạn hiệu năng thông qua: 
    * Max Throughput (MB/s)
    * Max IOPS
    * Burst Limit
  * **NFS Protocol** : Hỗ trợ TCP và RDMA. Đặc biệt: 
    * **TCP** : Phổ biến, dễ dùng.
    * **RDMA** : Hiệu năng cao, latency thấp.
    * **Multi-Path RDMA** : Cho workload lớn, kết nối song song.

* * *

## **2. Tạo Mount Point**
### **Nguyên tắc quan trọng**
  * **Gắn với subnet cụ thể** : Chỉ máy chủ thuộc subnet được gán mới có thể mount.
  * **Không tạo tại root path ("/")** : Chỉ tạo tại các thư mục con, ví dụ: `/project-a`, `/team1/data`.
  * **Một path – một mount point** : Không được trùng lặp.
  * **Không giới hạn số lượng mount point** : Miễn là path không trùng nhau.
  * **NFSv4 yêu cầu full path export** : Mọi thư mục cha trong path cũng phải được export.

> Ví dụ: mount /project-a/team1/data bằng NFSv4 thì /project-a và /project-a/team1 cũng cần export.

### **Các bước tạo Mount Point trên Unify Portal**
  1. Truy cập tab **MountPoint** , nhấn **Create MountPoint**.
  2. Điền thông tin: 
     * **Region** : Chọn khu vực sử dụng.
     * **VPC / Subnet** : Chọn subnet chứa server GPU.
     * **Tên Mount Point** : 3–63 ký tự, chữ/số/"_", không bắt đầu/kết thúc bằng dấu đặc biệt.
     * **Protocol** : NFSv3 hoặc NFSv4. 
       * Nếu NFSv3: Có thể thêm NFS Alias.
       * Nếu NFSv4: Đảm bảo **tất cả thư mục cha trong path cũng dùng NFSv4**.
     * **Path** : Bắt đầu bằng "/", không kết thúc bằng "/" hoặc khoảng trắng, không trùng path khác.
     * **Tùy chọn** : Tick "Tạo thư mục mới" nếu path chưa tồn tại.
     * **QoS Policy** : Chọn sẵn hoặc tạo mới.
  3. Nhấn **Create** để hoàn tất.

### **Kết quả**
  * **Thành công** : Mount Point hiển thị trên portal, có thể mount từ các máy chủ thuộc subnet.
  * **Thất bại** : Hiển thị lỗi – cần kiểm tra lại thông tin đã khai báo.

* * *

## **3. Xóa Mount Point**
Bạn có thể xoá Mount Point khi không còn sử dụng, nhằm:
  * Thu hồi quyền truy cập.
  * Ngắt kết nối an toàn giữa máy chủ và hệ thống lưu trữ.
  * Phục vụ tái cấu hình hoặc thay đổi hạ tầng mạng.

### **Cách thực hiện**
  1. Truy cập tab **Resource** trên Unify Portal.
  2. Tại Mount Point muốn xoá, chọn **Action > Delete**.
  3. Xác nhận thao tác khi được hỏi.

> ⚠️ Lưu ý:
>   * Đảm bảo các ứng dụng đã unmount trước khi xoá.
>   * **Xóa Mount Point không xoá dữ liệu** trong thư mục được gán path.
>
