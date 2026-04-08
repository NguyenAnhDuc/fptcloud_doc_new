---
id: "cau-hinh-o-dia-cho-may-ao-chay-windows"
title: "Cấu hình ổ đĩa cho máy ảo Windows"
sidebar_label: "Cấu hình ổ đĩa cho máy ảo Windows"
sidebar_position: 4
---

# Cấu hình ổ đĩa cho máy ảo Windows


Sau khi gắn **Storage Disk** vào máy ảo trên **FPT Portal**, với các máy chạy Linux, hệ thống sẽ tự nhận ổ đĩa mới. Với các máy chạy Windows, người dùng cần remote vào máy ảo để tiếp tục cấu hình tạo ổ đĩa.

**Bước 1:** Truy cập vào máy ảo.

**Bước 2:** Mở **Disk Management** trên **Windows** bằng một trong 2 cách:

  * Bấm tổ hợp phím **Windows + R**, nhập **msc** và **Enter.**

  * Bấm nút **Start**, nhập **msc** vào ô tìm kiếm, chọn **Disk Management.**


![Userguide FPT Cloud Server 2022 62](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-001.png)

**Bước 3:** **Disk Management** sẽ hiển thị toàn bộ ổ cứng trên máy ảo, bao gồm cả ổ cứng vừa được gắn với trạng thái **Offline.**

![Userguide FPT Cloud Server 2022 63](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-002.png)

**Bước 4:** Chọn **Online** trên menu **Disk** bằng cách di chuột phải lên biểu tượng đĩa.

![Userguide FPT Cloud Server 2022 64](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-003.png)

**Bước 5:** Ổ cứng sẽ chuyển sang trạng thái **Online** và **Not Initialize**, người dùng chuột phải lên biểu tượng đĩa và chọn **Initialize Disk**.

![Userguide FPT Cloud Server 2022 65](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-004.png)

**Bước 6**: Chọn **Partition style** phù hợp và chọn **OK.**

![Userguide FPT Cloud Server 2022 66](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-005.png)

**Bước 7:** Chuột phải lên khi vực trống của ổ cứng và chọn **New Simple Volume.**

![Userguide FPT Cloud Server 2022 67](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-006.png)

**Bước 8:** Chọn **Next** trong **New Simple Volume Wizard** vừa hiện lên.

![Userguide FPT Cloud Server 2022 68](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-007.png)

**Bước 9:** Nhập dung lượng ổ đĩa cần tạo vào ô **Simple volume size in MB** và chọn **Next.**

![Userguide FPT Cloud Server 2022 69](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-008.png)

**Bước 10:** Chọn Ký tự ổ đĩa trong phần **Assign the following drive letter** và chọn **Next.**

![Userguide FPT Cloud Server 2022 70](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-009.png)

**Bước 11:** Chọn **Fomat this volume with the following settings** và điền các thông tin sau:

  * **File System:** Chọn định dạng NTFS để quá trình định dạng được nhanh nhất, bạn cũng có thể chọn type khác nếu muốn.
  * **Allocation unit size:** Chọn Default
  * **Volume label:** Tên cho ổ đĩa.


Chọn **Next** để sang bước tiếp theo.

![Userguide FPT Cloud Server 2022 71](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-010.png)

**Bước 12:** Chọn **Finish** để kết thúc.

![Userguide FPT Cloud Server 2022 72](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-011.png)

Kết quả đã cấu hình tạo thành công ổ đĩa mới cho máy ảo chạy Windows từ ổ cứng gắn thêm.

![Userguide FPT Cloud Server 2022 73](images/cau-hinh-o-dia-cho-may-ao-chay-windows/img-012.png)

Từ Bước 1 đến Bước 6 người dùng có thể thay thế bằng các lệnh CMD sau nếu không thể thao tác bằng cách thông thường:
Vào Start > cmd (Run as administrator)

---
Diskpart list disk select disk online disk attributes disk clear readonly Exit

Sau đó tiếp tục từ Bước 7 theo hướng dẫn bên trên.
