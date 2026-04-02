---
id: "Version-policy"
title: "Chính sách version"
description: "FPT Database Engine áp dụng chính sách phiên bản database engine linh hoạt cho các loại cơ sở dữ liệu được cung cấp, nhằ"
sidebar_label: "Chính sách version"
sidebar_position: 4
---

# Version Policy

FPT Database Engine áp dụng chính sách phiên bản database engine linh hoạt cho các loại cơ sở dữ liệu được cung cấp, nhằm đảm bảo:
  * Hệ thống luôn vận hành trên các phiên bản ổn định và được hỗ trợ.
  * Người dùng được thông báo về lịch trình phát hành và thời gian kết thúc Hỗ trợ (EOS) của từng phiên bản để có phương án sử dụng phù hợp

### Nguyên tắc chung
FPT Database Engine áp dụng các nguyên tắc chính sau trong quản lý phiên bản database engine: 
  * Hỗ trợ đồng thời nhiều phiên bản cho mỗi loại database engine, giúp người dùng lựa chọn phiên bản phù hợp với nhu cầu vận hành của mình.
  * Liên tục cập nhật và bổ sung các phiên bản mới phát hành từ cộng đồng phát triển để cải thiện tính năng, hiệu năng và bảo mật. 
  * Không hỗ trợ nâng cấp tự động giữa các major version. Người dùng cần thực hiện migrate dữ liệu thủ công để đảm bảo tính toàn vẹn.

### Cấu trúc phiên bản
FPT Database Engine tuân theo quy ước đánh số phiên bản được cộng đồng phát triển của từng database engine quy định. Cấu trúc phiên bản thường bao gồm hai thành phần chính: Phiên bản chính (Major Version) và Phiên bản phụ (Minor Version):  
| Thành phần  | Mô tả  |  
| --- | --- |  
| Major version  | Thay đổi lớn về kiến trúc hoặc tính năng, có thể không tương thích với các phiên bản trước. Ví dụ: PostgreSQL 14 hoặc MySQL 8.0  |  
| Minor version  | Cập nhật nhỏ, sửa lỗi hoặc vá bảo mật, tương thích ngược. Ví dụ: MySQL 8.0.25  |  
Người dùng có thể xem chính xác phiên bản đang sử dụng cho database của mình trực tiếp trên Console Portal khi kiểm tra thông tin chi tiết của database.
### Vòng đời version (Version Lifecycle):
Mỗi phiên bản database engine tuân theo vòng đời gồm các giai đoạn sau:  
| Giai đoạn  | Mô tả  |  
| --- | --- |  
| **1. Preview (Beta)**  | Phiên bản đang trong giai đoạn thử nghiệm, chưa cam kết SLA, tính năng có thể thay đổi hoặc ngừng cung cấp bất kỳ lúc nào. Người dùng có thể trải nghiệm, thử nghiệm hoặc sử dụng cho môi trường non-production. Không khuyến nghị triển khai trên môi trường production.   
Trên Console Portal, phiên bản Beta được hiển thị kèm tag "Beta".  |  
| **2. General Availability (GA)**  | Phiên bản đã ổn định, sẵn sàng cho môi trường production, hỗ trợ SLA chính thức.  |  
| **3. Deprecated (Dep.)**  | Phiên bản không được khuyến nghị sử dụng cho triển khai mới, chuẩn bị ngừng hỗ trợ trong tương lai gần, nhưng vẫn hoạt động cho các hệ thống hiện tại. Đây là giai đoạn **báo trước** việc ngừng hỗ trợ.   
Trên Console Portal, phiên bản deprecated được hiển thị kèm tag "Deprecated" hoặc "Dep.".  |  
| **4. End of Support (EoS)**  | Phiên bản ngừng hỗ trợ hoàn toàn.   
Trên Console Portal, phiên bản end of support được hiển thị kèm tag "EoS".  |  
**Lưu ý:** Người dùng nên chủ động nâng cấp trước khi phiên bản hiện tại chuyển sang giai đoạn Deprecated hoặc EoS để đảm bảo an toàn và ổn định cho hệ thống. 
### Khuyến nghị sử dụng  
| Tình huống  | Hành động khuyến nghị  |  
| --- | --- |  
| **Database đang chạy phiên bản GA**  | Tiếp tục sử dụng bình thường.  |  
| **Database đang chạy phiên bản Beta**  | Theo dõi thông báo cập nhật thường xuyên, vì phiên bản có thể thay đổi hoặc bị gỡ bỏ mà không có thông báo trước.  |  
| **Database đang chạy phiên bản Deprecated**  | Hạn chế triển khai mới và nên lên kế hoạch nâng cấp lên phiên bản mới hơn vì phiên bản này chuẩn bị ngừng hỗ trợ.  |  
| **Database đang chạy phiên bản EoS**  | Theo dõi và lên kế hoạch nâng cấp sớm để đảm bảo hệ thống được hỗ trợ và ổn định.  |
