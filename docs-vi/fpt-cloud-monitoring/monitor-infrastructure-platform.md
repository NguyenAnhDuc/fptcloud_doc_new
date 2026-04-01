---
id: "monitor-infrastructure-platform"
title: "Monitor Infrastructure Platform"
description: "Monitor Infrastructure Platform"
sidebar_label: "Monitor Infrastructure Platform"
sidebar_position: 12
---

# Monitor Infrastructure Platform

**Bước 1** : Đăng nhập vào FPT portal cloud **<https://console.fptcloud.com>**
**Bước 2** : Trên menu của FPT Cloud Portal, click **Monitoring**. 
**Bước 3** : Click chi tiết vào một Workspace, sau đó di chuyển tới **Add Data** tab.
**Bước 4** : Trong tab **Infrastructure services** , hiển thị danh sách các dịch vụ infrastructure đang sẵn có, click vào một dịch vụ bạn muốn monitor.
[![Alt text](/img/migrated/Picture8-2-102fff27.png)](/img/migrated/Picture8-2-102fff27.png)
**Bước 5**. Click **Manual** và sau đó làm theo hướng dẫn.
[![Alt text](/img/migrated/Picture9-2-575519ed.png)](/img/migrated/Picture9-2-575519ed.png)
Ngoài ra, FPT Monitoring hỗ trợ **tích hợp tự động** **Kubernetes Dedicated** và **Kubernetes Managed**. 
Việc tích hợp này giúp người dùng có thể cấu hình tích hợp theo dõi **metric và log** của từng cụm cluster dễ dàng và chuyên nghiệp. 
Để sử dụng tính năng này, người dùng thao tác như sau: 
**Bước 1** : Trong tab **Infrastructure service** , click **Kubernetes**
[![Alt text](/img/migrated/Picture1-4-4251b3d0.png)](/img/migrated/Picture1-4-4251b3d0.png)
**Bước 2** : Click **Auto**. Tại đây, hiển thị bảng danh sách các cụm cluster **Dedicated** và **Managed**. 
[![Alt text](/img/migrated/Picture3-4-ab6aaf3f.png)](/img/migrated/Picture3-4-ab6aaf3f.png)
**Lưu ý:**
Trong trường hợp người dùng chưa có cụm cluster nào hiển thị, người dùng vào phần **Kubernetes** trên menu, click **Create a Kubernetes Engine** để tạo. 
Hướng dẫn chi tiết khởi tạo Kubernetes người dùng có thể tham khảo tại link sau: 
Nếu tenant của bạn không có quyền tạo, hãy liên hệ với đội ngũ admin của chúng tôi để hỗ trợ. 
  * Để tích hợp **Dedicated kubernetes** , bạn thao tác như sau: 

1, Click tab **Dedicated**
[![Alt text](/img/migrated/Picture4-4-8f2ee7aa.png)](/img/migrated/Picture4-4-8f2ee7aa.png)
2, Chọn cụm cluster và loại datasource bạn muốn tích hợp. Mỗi cụm cluster sẽ có 2 loại datasource là metric và log. Chỉ những cụm cluster đang hoạt động và datasource ở trạng thái active thì người dùng mới có thể tích hợp. 
3, Click **Integrate**
[![Alt text](/img/migrated/Picture5-4-c8990333.png)](/img/migrated/Picture5-4-c8990333.png)
Xuất hiện hộp thoại xác nhận người dùng có muốn tích hợp logs/metrics của cluster lên workspace tương ứng hay không. 
Để xác nhận, người dùng click button **Confirm**. 
[![Alt text](/img/migrated/Picture6-4-e64b483e.png)](/img/migrated/Picture6-4-e64b483e.png)
Sau khi click, trạng thái tích hợp là **Integrating**. 
[![Alt text](/img/migrated/Picture7-4-aad01789.png)](/img/migrated/Picture7-4-aad01789.png)
Người dùng đợi 1-2 phút hệ thống sẽ tự động cập nhật lại trạng thái cuối cùng (thành công hoặc thất bại). 
[![Alt text](/img/migrated/Picture8-4-5a74c485.png)](/img/migrated/Picture8-4-5a74c485.png)
4, Tiếp đến, người dùng đăng nhập vào trang Dashboard bằng cách chọn tab **Configuration** > Click vào link **Dashboard URL** và đăng nhập bằng username, password được hiển thị. 
[![Alt text](/img/migrated/Picture9-4-8516bd17.png)](/img/migrated/Picture9-4-8516bd17.png)
5, Sau khi truy cập vào trang Dashboard, người dùng click **Home** > chọn **Dashboard** > chọn Folder Fmon – Kubernetes và sử dụng. 
[![Alt text](/img/migrated/Picture10-4-a10f8a99.png)](/img/migrated/Picture10-4-a10f8a99.png)
  * Để tích hợp **Managed kubernetes** , người dùng chọn tab **Managed** và thực hiện các bước **tương tự** như phần Dedicated Kubernetes. 

[![Alt text](/img/migrated/Picture11-4-db200ae1.png)](/img/migrated/Picture11-4-db200ae1.png)
