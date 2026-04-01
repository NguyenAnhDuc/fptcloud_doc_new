---
id: "khoi-tao-canh-bao-virtual-machine"
title: "Khởi tạo cảnh báo cho Virtual Machine (VM)"
sidebar_label: "Khởi tạo cảnh báo cho Virtual Machine (VM)"
sidebar_position: "4"
---

# Khởi tạo cảnh báo cho Virtual Machine (VM)

**Bước 1** : Ở menu chọn **Security** > **Cloud Guard** , mở tab **Resource** **Alerts** và chọn **Create Alert**.
Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng các bước tiếp theo.
**Bước 2** : Cấu hình cảnh báo theo nhu cầu bằng cách nhập thông tin vào trường dữ liệu tương ứng:  
| **Field**  | **Description**  |  
| --- | --- |  
| **Name**  | Nhập tên của Alert  |  
| **Type**  | Chọn **Loại tài nguyên** sẽ cảnh báo.  |  
| **Apply to**  | Chọn tài nguyên sẽ áp dụng cảnh báo này  |  
| **Configure metrics**  | Tùy chỉnh ngưỡng alert:  |  
  * **Type** (Metric Type): Chọn loại dữ liệu muốn sử dụng để theo dõi và đặt ngưỡng cảnh báo, các loại dữ liệu được hỗ trợ
  * **Operator:** Chọn loại so sánh giá trị thực với ngưỡng, bao gồm các toán tử <, <=, >=, >.
  * **Value:** Nhập ngưỡng cảnh báo, giá trị sẽ được validate tùy theo đơn vị của các **Metric Types**.
  * **Alert Interval:** Chọn chu kỳ tính toán của hệ thống, bao gồm các giá trị (3 minutes, 5 minutes, 30 minutes, 1 hour, 6 hours, 1 day) | | **Severity** | Chọn mức độ nghiêm trọng của cảnh báo | | **Notify to** | Chọn người nhận cảnh báo |

**Bước 3** : Chọn **Create** để thực hiện khởi tạo Alert. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo dựa vào các thông tin đã chọn.
Sau khi khởi tạo thành công, người dùng có thể thấy Alert mới tạo và kiểm tra thông tin trên bảng quản trị. Mỗi Alert sẽ được hiển thị đầy đủ thông tin như Name, State, Type, Metric, Severity, Applied to, Notify to, Status.
