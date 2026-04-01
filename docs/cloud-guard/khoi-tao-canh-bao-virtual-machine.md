---
id: "khoi-tao-canh-bao-virtual-machine"
title: "Khởi tạo cảnh báo cho Virtual Machine (VM)"
sidebar_label: "Khởi tạo cảnh báo cho Virtual Machine (VM)"
sidebar_position: "4"
---

# Khởi tạo alert for Virtual Machine (VM)

**Step 1:** Ở menu chọn **Security** > **Cloud Guard** , mở tab **Resource** **Alerts** and foṛn **Create Alert**.
Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng các bước tiếp theo.
**Step 2:** Cấu hình alert theo nhu cầu bằng theh nhập information ando trường dữ liệu corresponding:  
| **Field**  | **Description**  |  
| --- | --- |  
| **Name**  | Enter tên of Alert  |  
| **Type**  | Select **Loại tài nguyên** will alert.  |  
| **Apply to**  | Chọn tài nguyên sẽ áp dụng cảnh báo này  |  
| **Configure metrics**  | Tùy chỉnh ngưỡng alert:  |  
  * **Type** (Metric Type): Chọn loại dữ liệu muốn sử dụng để theo dõi and đặt ngưỡng cảnh báo, các loại dữ liệu được hỗ trợ
  * **Operator:** Chọn loại so sánh giá trị thực với ngưỡng, bao gồm các toán tử <, <=, >=, >.
  * **Value:** Nhập ngưỡng cảnh báo, giá trị sẽ được validate tùy theo đơn vị của các **Metric Types**.
  * **Alert Interval:** Chọn chu kỳ tính toán của hệ thống, bao gồm các giá trị (3 minutes, 5 minutes, 30 minutes, 1 hour, 6 hours, 1 day) | | **Severity** | Chọn mức độ nghiêm trọng của cảnh báo | | **Notify to** | Chọn người nhận cảnh báo |

**Step 3:** Chọn **Create** to thực hiện khởi tạo Alert. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên and tiến hành quá trình khởi tạo dựa ando the information has been chọn.
Sau when khởi tạo successfully, người dùng can thấy Alert mới tạo and kiểm tra information trên bảng quản trị. Mỗi Alert will được displayed đầy đủ information như Name, State, Type, Metric, Severity, Applied to, Notify to, Status.
