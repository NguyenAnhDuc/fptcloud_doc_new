---
id: "security-group-filter"
title: "Giới thiệu"
sidebar_label: "Filter Security Group"
sidebar_position: 2
---

Filter Security Group


# Giới thiệu

Tính năng Filter Security Group giúp người dùng nhanh chóng tìm kiếm và thu hẹp danh sách Security Group theo nhiều tiêu chí khác nhau như tên, tag, địa chỉ IP, trạng thái, loại firewall, ngày tạo, v.v.

# Giải thích các thông tin hỗ trợ filter

Field | Ý nghĩa
---|---
Name | Nhập tên Security Group hoặc một phần tên. Hệ thống sẽ lọc theo chuỗi bạn nhập. Ví dụ: nhập sec để tìm “security-group-9609”, “security-group-6688”, v.v.
Tag level | Dropdown chọn mức độ tag. Dùng để lọc data tag theo level để filter theo tag. Chọn All nếu muốn hiển thị tất cả.
Tag | Chọn 1 tag cụ thể để lọc Security Group có gán tag đó. Dropdown hiển thị danh sách tag hiện có. Ví dụ: chọn tag tagging-prod để hiển thị các Security Group thuộc môi trường Production.
Apply to | Lọc theo tên Instance hoặc địa chỉ IP của Instance mà Security Group đang áp dụng. Ví dụ: nhập 10.10.5.21 để tìm Security Group áp dụng lên IP này.
Source/Destination | Lọc Security Group có rule liên quan đến source hoặc destination bạn nhập. Cho phép nhập: IP đơn (ví dụ: 192.168.10.5) hoặc Dải CIDR (ví dụ: 10.0.0.0/24)
Status | Lọc theo trạng thái Security Group. Các giá trị: Creating, Active, Deleting
Firewall type | Lọc theo loại firewal, bao gồm: Distributed Firewall (DFW) & Security Group
Create date from - Create date to | Lọc Security Group theo khoảng thời gian tạo.

# Hướng dẫn sử dụng

![](images/security-group-filter/img-001.png)

**Bước 1:** Mở cửa sổ Filter

  * Nhấn Filter trên màn hình Security Group.


**Bước 2:** Nhập điều kiện lọc

  * Bạn có thể nhập một hoặc nhiều điều kiện cùng lúc.

  * Ví dụ kết hợp:

    * Name: prod

    * Tag: tagging-prod

    * Status: Active

→ Hệ thống sẽ chỉ hiển thị các Security Group trạng thái active có tag tagging-prod và tên chứa "prod".


**Bước 3**: Áp dụng bộ lọc bằng cách nhấn nút Show result

**Bước 4:** Xóa bộ lọc

  * Nhấn Clear để xóa toàn bộ điều kiện lọc.

  * Nhấn X tại mỗi trường để xoá điều kiện tương ứng.


# Lưu ý quan trọng

Bộ lọc không làm thay đổi Security Group — chỉ hỗ trợ tìm kiếm.

Một số trường có thể không hiển thị nếu Security Group không có dữ liệu tương ứng (ví dụ: Tag trống).

Nếu danh sách không hiển thị kết quả, hãy kiểm tra xem có nhập quá nhiều điều kiện.
