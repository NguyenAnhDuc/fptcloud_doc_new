---
id: "su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application"
title: "Sử dụng FPT Object Storage làm media server"
description: "**FPT Object Storage** là dịch vụ lưu trữ dữ liệu đối tượng được cung cấp bởi **FPT Smart Cloud** , hỗ trợ giao thức tươ"
sidebar_label: "Sử dụng FPT Object Storage làm media server"
sidebar_position: 15
---

# Su Dung Fpt Object Storage Lam Media Server Luu Tru Va Phan Phoi Media File Cho Websiteweb Application

## Giới thiệu
**FPT Object Storage** là dịch vụ lưu trữ dữ liệu đối tượng được cung cấp bởi **FPT Smart Cloud** , hỗ trợ giao thức tương đương với AWS S3 (Simple Storage Service). Với một số đặc điểm nổi bật như lưu trữ không giới hạn, bảo mật và tính sẵn sàng cao mà giá cả lại phải chăng. **FPT Object Storage** là một lựa chọn cực kỳ phù hợp để làm kho lưu trữ media cho các trang website/web application có nhu cầu truy suất dữ liệu cao và liên tục.
Một số lợi ích có thể được kể ra:
  * **Tăng hiệu suất máy chủ web:** Nếu sử dụng FPT Object Storage để lưu trữ file media, Web Server sẽ không còn phải chịu trách nhiệm lưu trữ và phân phối các file này nữa. Tài nguyên sẽ được dành toàn bộ để xử lý các công việc khác quan trọng hơn.
  * **Tiết kiệm chi phí:** Nếu bạn sử dụng chính storage của Web Server để lưu trữ media thì Web Server lúc này sẽ cần dung lượng rất lớn. Đơn giá storage của các Web Server thường cao hơn rất nhiều so với FPT Object Storage. Ngoài ra còn tiết kiệm được băng thông của Web Server do trình duyệt sẽ load file trực tiếp từ FPT Object Storage mà không thông qua Web Server. Hiện tại FPT Object Storage đã hỗ trợ cơ chế Pay as you go, đảm bảo bạn chỉ phải trả tiền cho dung lượng thực tế đã sử dụng.
  * **Lưu trữ độc lập:** Tách biệt ứng dụng khỏi dữ liệu. Bạn có thể đặt ứng dụng ở bất kỳ đâu, di chuyển ứng dụng sang bất kỳ môi trường nào mà không cần lo lắng về gián đoạn về dữ liệu. Ví dụ trong trường hợp bạn cần di chuyển một website sang Server khác, chỉ cần chuyển source code website sang server mới là xong. Không cần di chuyển media hoặc mất thời gian để tìm và thay đổi các link media được nhúng trong trang web.
  * **Tăng tốc website:** Các file media sẽ được trình duyệt của enduser load trực tiếp từ DataCenter tốc độ cao của FPT Object Storage. Giảm thời gian tải trang xuống mức tối đa. Các DataCenter của FPT Object Storage được đặt ở TP.Hà Nội và TP.Hồ Chí Minh, đảm bảo tốc độ trong nước luôn được ổn định trong trường hợp internet ra quốc tế bị trục trặc. Tuân thủ các quy định về nội địa hóa dữ liệu theo Nghị Định 53/2022 của Chính Phủ.

Trong phạm vi bài viết này, chúng tôi sẽ giới thiệu tổng quan và hướng dẫn giải pháp Sử dụng FPT Object Storage làm media server dựa trên ví dụ tích hợp FPT S3 vào một website chạy WordPress.
## Điều kiện tiên quyết
  * Website được build trên nền tảng WordPress.
  * Đang sử dụng dịch vụ FPT Object Storage. 
    * Đã tạo một bucket public dùng để chứa media.
    * Đã tổng hợp đầy đủ các thông tin Endpoint, Access Key của Object Storage service.

## Tổng quan
Mặc định WordPress sẽ không hỗ trợ việc dùng trực tiếp S3 Storage để lưu trữ tệp. Tuy nhiên một số plugin có thể giúp bạn làm việc này. Về cơ bản các plugin này vẫn sẽ hoạt động dựa trên trình upload mặc định của WordPress. Sau khi WordPress upload file thành công, plugin sẽ tạo một bản copy sang **FPT Object Storage** và tự động xóa file gốc + thay thế toàn bộ link trên wordpress bằng link trên **FPT Object Storage**. Trên thị trường có một số plugin phổ biến như **WP Offload Media Lite** , **MediaCloud** , **Media Library Folders Pro S3** , **W3 Total Cache** … Trong bài viết này chúng tôi sẽ hướng dẫn dựa trên plugin **MediaCloud** , với các plugin khác luồng thao tác tương tự.  
Các bước cơ bản:
  * Tạo bucket mới.
  * Tạo một tài khoản SubUser và phân quyền sử dụng Bucket cho SubUser này.
  * Cài đặt và cấu hình plugin trên website WordPress.

## Giải pháp
### A. Tạo bucket mới.
Bucket là một đơn vị lưu trữ mang tính logical trên S3. Một bucket sẽ có nhiệm vụ chứa các file/folder mà người dùng upload lên. Bạn cần tạo một bucket để chứa dữ liệu media của toàn bộ website.
**Bước 1:** Di chuyển đến Object Storage Management trên FPT Portal hoặc mở S3 Client đang sử dụng.
**Bước 2:** Chọn Create Bucket và nhập tên Bucket cần tạo. [**Hướng dẫn thao tác trên FPT Portal.**](../fpt-object-storage/index.md)  
[**Hướng dẫn thao tác trên S3 Client.**](../fpt-object-storage/index.md)
**Bước 3:** Cấu hình bảo mật cho Bucket. Mặc định tất cả những ai có cặp key và Endpoint đều có thể Sửa hoặc Xóa các object bên trong bucket. Trang web wordpress cần được bảo mật cẩn thận, tránh hacker chiếm đoạt key dẫn đến mất dữ liệu trong bucket. Hãy sử dụng các tính năng nâng cao được FPT Cloud cung cấp sẵn để tăng thêm bảo mật cho bucket:
  * **Versioning:** Tự động lưu trữ lại các phiên bản thay đổi của đối tượng.
  * **Bucket Policy:** Tạo một Policy để giới hạn IP có thể truy cập dữ liệu trong bucket hoặc giới hạn đuôi file có thể tải lên.
  * **Backup and Replicate Bucket:** Tự động backup toàn bộ Bucket sang Bucket khác.

### B. Tạo tài khoản SubUser và phân quyền sử dụng Bucket cho SubUser này.
Trong quá trình test hoặc demo, bạn có thể sử dụng cặp key của admin để thực hiện kết nối. Tuy nhiên về lâu dài FPT Cloud không khuyến nghị bạn thực hiện hành động này, sẽ có rất nhiều rủi ro nếu cặp key này bị lộ lọt ra ngoài. Hacker có thể xóa toàn bộ dữ liệu của các bucket trong Object Storage của bạn mà không thể phục hồi lại được. Hãy tạo một SubUser với quyền hạn chế, chỉ có thể tác động đến bucket được chỉ định. Sau đó sử dụng key của SubUser này để cấu hình ở website WordPress.
### C. Cài đặt và cấu hình Plugin trên website WordPress
Truy cập vào trang quản trị của website WordPress, sau đó vào mục **Plugin**. Tìm plugin **Media Cloud** và tải về.
[![file](/img/migrated/image-1692777159058-5ed07e14.png)](/img/migrated/image-1692777159058-5ed07e14.png)
Sau khi kích hoạt bạn sẽ được yêu cầu nhập các thông tin Endpoint, Key, Bucket Name. Các thông tin này bạn có thể lấy từ FPT Portal theo hướng dẫn sau:
Sau khi kết nối thành công, hãy chỉnh sửa lại một số cấu hình cơ bản để thuận tiện hơn cho quá trình sử dụng. [![file](/img/migrated/image-1692777474055-b9da49d5.png)](/img/migrated/image-1692777474055-b9da49d5.png) [![file](/img/migrated/image-1692777480835-22740b1c.png)](/img/migrated/image-1692777480835-22740b1c.png) Chọn các loại file sẽ được đồng bộ sang ở phần **UPLOAD HANDLING** [![file](/img/migrated/image-1692777502204-8f725818.png)](/img/migrated/image-1692777502204-8f725818.png) Cấu hình cơ chế xóa file, nên bật chế độ **Delete From Storage** để tối ưu dung lượng cho bucket. [![file](/img/migrated/image-1692777521974-1c3a846e.png)](/img/migrated/image-1692777521974-1c3a846e.png)
Sau khi cấu hình thành công các file media được upload lên sau này đều sẽ được lưu trữ vào Bucket của **FPT Smart Cloud**. Bạn có thể kiểm tra bằng cách upload thử một ảnh lên và kiểm tra bên **FPT Object Storage**. [![file](/img/migrated/image-1692777559714-bd798ada.png)](/img/migrated/image-1692777559714-bd798ada.png) [![file](/img/migrated/image-1692777569143-a5082faf.png)](/img/migrated/image-1692777569143-a5082faf.png)

```
CopyVới bản Free các file đã upload lên trước thời điểm cài plugin sẽ không được đồng bộ vào bucket, cần mua Premium để nâng cấp tính năng.
```

## Kết luận
Trên đây là bài viết giới thiệu và hướng dẫn sử dụng **FPT Object Storage** làm media server lưu trữ và phân phối hình ảnh/video cho web application. Trong quá trình thao tác nếu có vấn đề cần hỗ trợ, hãy liên hệ với chúng tôi theo mục Support để được hỗ trợ tốt nhất.
