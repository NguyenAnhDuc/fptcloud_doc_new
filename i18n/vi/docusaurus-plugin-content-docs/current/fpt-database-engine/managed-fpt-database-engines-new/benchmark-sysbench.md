---
id: "benchmark-sysbench"
title: "Kết quả Benchmark Sysbench"
description: "Mục này trình bày kết quả benchmark hiệu năng cơ sở dữ liệu được thực hiện bằng công cụ Sysbench, nhằm cung cấp thông ti"
sidebar_label: "Kết quả Benchmark Sysbench"
sidebar_position: 44
---

# Benchmark Sysbench

Mục này trình bày kết quả benchmark hiệu năng cơ sở dữ liệu được thực hiện bằng công cụ Sysbench, nhằm cung cấp thông tin tham khảo về khả năng xử lý của các database engine trên các cấu hình tài nguyên (flavor) khác nhau.
Kết quả benchmark chỉ mang tính tham khảo và không đảm bảo hiệu năng thực tế.

### 1. Giới thiệu Benchmark Sysbench
#### Mục đích:
Benchmark Sysbench được sử dụng để:
  * Đánh giá hiệu năng xử lý OLTP (Read/Write) của các database engine.
  * Quan sát mức độ cải thiện hiệu năng khi tăng tài nguyên CPU và RAM.
  * Cung cấp dữ liệu tham khảo để người dùng lựa chọn cấu hình phù hợp.

#### Database engine được benchmark:
Các database engine được benchmark trong tài liệu này bao gồm: PostgreSQL, MySQL và MariaDB.

#### Chỉ số đo lường:
Kết quả benchmark bao gồm các chỉ số chính:
  * **Sysbench Read** : Tổng số truy vấn đọc được thực hiện trong quá trình benchmark.
  * **Sysbench Write** : Tổng số truy vấn ghi được thực hiện trong quá trình benchmark.
  * **QPS (Queries Per Second)** : Số lượng truy vấn trung bình xử lý mỗi giây.
  * **TPS (Transactions Per Second)** : Số lượng transaction hoàn chỉnh trung bình mỗi giây.

Các chỉ số QPS và TPS được sử dụng làm cơ sở để đánh giá hiệu năng tổng thể của hệ thống. Giá trị QPS và TPS càng cao thể hiện throughput của hệ thống càng tốt.

### 2. Kết quả benchmark theo database engine
#### 2.1. PostgreSQL
**Môi trường kiểm thử:**  
| Thông số  | Giá trị  |  
| --- | --- |  
| Công cụ benchmark  | Sysbench (OLTP Read/Write)  |  
| Số lượng bảng  | 64  |  
| Số bản ghi trên mỗi bảng  | 1000000  |  
| Loại workload  | Read/Write  |  
| Số luồng (threads)  | Cấu hình tương ứng với từng flavor  |  
| Phiên bản PostgreSQL  | PostgreSQL 17  |  
**Kết quả:**  
| Flavor (vCPU/RAM)  | Số luồng (threads)  | Sysbench Read (Đơn vị: lần)  | Sysbench Write (Đơn vị: lần)  | QPS  | TPS  |  
| --- | --- | --- | --- | --- | --- |  
| 2C4G  | 64  | 2595600  | 741590  | 6177.66  | 308.88  |  
| 2C8G  | 64  | 2481276  | 708929  | 5905.53  | 295.27  |  
| 4C8G  | 64  | 3189018  | 911134  | 7589.71  | 379.48  |  
| 8C16G  | 64  | 4829286  | 1379738  | 11496.20  | 574.79  |  
| 8C32G  | 64  | 5679842  | 1622732  | 13519.46  | 675.94  |  
| 16C32G  | 64  | 6448036  | 1842199  | 15350.46  | 767.49  |  
| 16C64G  | 64  | 6926948  | 1979031  | 16489.02  | 824.41  |  

#### 2.2. MySQL
**Môi trường kiểm thử:**  
| Thông số  | Giá trị  |  
| --- | --- |  
| Công cụ benchmark  | Sysbench (OLTP Read/Write)  |  
| Số lượng bảng  | 64  |  
| Số bản ghi trên mỗi bảng  | 1000000  |  
| Loại workload  | Read/Write  |  
| Số luồng (threads)  | Cấu hình tương ứng với từng flavor  |  
| Phiên bản MySQL  | MySQL 8.0.42  |  
**Kết quả:**  
| Flavor (vCPU/RAM)  | Số luồng (threads)  | Sysbench Read (Đơn vị: lần)  | Sysbench Write (Đơn vị: lần)  | QPS  | TPS  |  
| --- | --- | --- | --- | --- | --- |  
| 4C8G  | 16  | 6814500  | 1947000  | 16224.39  | 811.22  |  
| 8C16G  | 32  | 9748144  | 2785184  | 23209.29  | 1160.46  |  
| 8C32G  | 32  | 9423834  | 2692524  | 22430.67  | 1121.53  |  
| 16C32G  | 64  | 9786238  | 2796068  | 23289.48  | 1164.47  |  

#### 2.3. MariaDB
**Môi trường kiểm thử:**  
| Thông số  | Giá trị  |  
| --- | --- |  
| Công cụ benchmark  | Sysbench (OLTP Read/Write)  |  
| Số lượng bảng  | 64  |  
| Số bản ghi trên mỗi bảng  | 1000000  |  
| Loại workload  | Read/Write  |  
| Số luồng (threads)  | Cấu hình tương ứng với từng flavor  |  
| Phiên bản MariaDB  | MariaDB 8.0.42  |  
**Kết quả:**  
| Flavor (vCPU/RAM)  | Số luồng (threads)  | Sysbench Read (Đơn vị: lần)  | Sysbench Write (Đơn vị: lần)  | QPS  | TPS  |  
| --- | --- | --- | --- | --- | --- |  
| 4C8G  | 16  | 10573514  | 2111341  | 25174.34  | 1258.72  |  
| 8C16G  | 32  | 8923236  | 2094628  | 21245.25  | 1062.26  |  
| 8C32G  | 32  | 8491182  | 2086388  | 20216.52  | 1010.83  |  
| 16C32G  | 64  | 10267208  | 2568032  | 24444.58  | 1222.23  |  
| 16C64G  | 64  | 10789884  | 2719241  | 25688.30  | 1284.42  |  

### 3. Nhận định & Khuyến nghị
  * Việc tăng CPU và RAM nhìn chung giúp cải thiện throughput.
  * Mỗi database engine có đặc điểm scale khác nhau.
  * Ở cấu hình cao, mức tăng hiệu năng có thể chậm lại tuỳ theo workload và giới hạn hệ thống.

**Lưu ý quan trọng:**
  * Kết quả benchmark phụ thuộc vào workload và chỉ mang tính tham khảo.
  * Hiệu năng thực tế có thể khác biệt tuỳ thuộc vào: 
    * Đặc điểm workload của ứng dụng.
    * Schema và index của cơ sở dữ liệu.
    * Tỷ lệ đọc/ghi.
    * Cấu hình storage và network.

Người dùng nên thực hiện benchmark với workload thực tế trước khi triển khai môi trường production.
**Khuyến nghị:**
Sử dụng kết quả benchmark như dữ liệu tham khảo khi lựa chọn database engine và cấu hình tài nguyên. Để đạt hiệu năng tối ưu, nên kiểm thử với workload thực tế của ứng dụng.
