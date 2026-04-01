---
id: "scale-tu-dong-theo-lich-trinh"
title: "Scale tự động theo lịch trình"
sidebar_label: "Scale tự động theo lịch trình"
sidebar_position: "11"
---

# Scale tự động theo lịch trình

## Create Autoscale Schedule
###  **Bước 1:** Truy cập trang **Autoscaling > Autoscale Group**. Click ando tên group cần lập lịch.
[![open group details](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)
###  **Bước 2:** Chuyển to tab **Schedule** , foṛn **Create schedule.**
[![create schedule](/img/migrated/Screenshot-2024-10-02-042548-98d1b215.png)](/img/migrated/Screenshot-2024-10-02-042548-98d1b215.png)
###  **Bước 3:** Một hộp thoại sẽ xuất hiện, thực hiện cấu hình the thông tin.
**Schedule name** : Nhập tên Schedule. Tên phải có 6 to 20 kí tự và chỉ chứa kí tự chữ cái latin, số and dấu gạch dưới.
**Frequency** : Tần suất thực hiện resize group.
**Desired capacity** : Số node mong muốn của group tại thời điểm lịch is thực thi.
**Min size** and **Max size** : Thông số chặn dưới and chặn trên of group.
#### Trường hợp 1: Daily
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
**From time:** Thời điểm in ngày thực hiện resize theo thông số đã đưa ra in lịch.
**To time:** Thời điểm in ngày kết thúc chu kỳ and resize về thông số ban đầu.
**Start date:** Ngày lịch bắt đầu có hiệu lực.
**End date:** Ngày lịch hết hiệu lực.
**Note:**
  * Nếu Start Date là ngày hiện tại, From Time phải lớn hơn thời điểm hiện tại.
  * To Time phải lớn hơn From Time ít nhất 30 phút.

#### Trường hợp 2: Weekly
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
Tương tự như **Daily**. Ngoài ra, còn có thêm 2 thông số:
**From weekday:** Ngày in tuần thực hiện resize theo thông số đã đưa ra in lịch.
**To weekday:** Ngày in tuần kết thúc chu kỳ and resize về thông số ban đầu.
#### Trường hợp 3: Monthly
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
Tương tự như **Daily**. Ngoài ra, còn có thêm 2 thông số:
**From date:** Ngày in tháng thực hiện resize theo thông số đã đưa ra in lịch.
**To date:** Ngày in tháng kết thúc chu kỳ and resize về thông số ban đầu.
**Save ý:**
  * Với ngày 31, sẽ chỉ xảy ra ở một số tháng.
  * Với tháng 2, sẽ chỉ có 28 or 29 ngày.

###  **Bước 4:** Chọn **Create**.
Hệ thống sẽ thực hiện kiểm tra lại thông tin và thực hiện tạo lịch for Autoscale Group.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
**Name** : Tên lịch trình.
**Size** : Thông số resize group when lịch is thực thi.
**Frequency** : Tần suất thực thi của lịch.
**Start time** : Thời gian lịch bắt đầu có hiệu lực.
**Stop time** : Thời gian lịch hết hiệu lực.
**First Execution** : Thời điểm lịch is thực thi lần đầu.
**Next Execution** : Thời điểm lịch is thực thi lần tiếp theo.
**Remaining Executions** : Số lần thực thi còn lại.
## Delete Autoscale Schedule
###  **Bước 1:** Truy cập trang **Autoscaling > Autoscale Group**. Click ando tên group cần xóa lịch.
[![open group details](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)](/img/migrated/Screenshot-2024-10-02-042416-72202578.png)
###  **Bước 2:** Chuyển to tab **Schedule**. Trên dòng chứa lịch trình cần xóa, click biểu tượng **Action menu**.
[![schedule menu action](/img/migrated/Screenshot-2024-10-02-043704-64359511.png)](/img/migrated/Screenshot-2024-10-02-043704-64359511.png)
###  **Bước 3:** Trong menu, chọn **Delete**.
[![delete schedule](/img/migrated/Screenshot-2024-10-02-043812-ac1fa26e.png)](/img/migrated/Screenshot-2024-10-02-043812-ac1fa26e.png)
###  **Bước 4:** Một hộp thoại sẽ xuất hiện. Nếu tên lịch cần xóa là chính xác, foṛn **Delete** to xác nhận.
[![delete schedule confirmation dialog](/img/migrated/Screenshot-2024-10-02-044127-0919459f.png)](/img/migrated/Screenshot-2024-10-02-044127-0919459f.png)
## Save ý
Không đặt the lịch trùng with thời điểm bắt đầu and kết thúc thực thi in cùng a group to tránh the xung đột không mong muốn.**
