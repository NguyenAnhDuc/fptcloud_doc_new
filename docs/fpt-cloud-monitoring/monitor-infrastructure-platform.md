---
id: "monitor-infrastructure-platform"
title: "Monitor Infrastructure Platform"
sidebar_label: "Monitor Infrastructure Platform"
sidebar_position: "12"
---

# Monitor Infrastructure Platform

**Step 1:** Log in to FPT portal cloud **<https://console.fptcloud.com>**
**Step 2:** Trên menu of FPT Cloud Portal, click **Monitoring**. 
**Step 3:** Click details ando a Workspace, sau that di chuyển tới **Add Data** tab.
**Step 4:** Trong tab **Infrastructure services** , displayed list the service infrastructure is sẵn có, click ando a service you muốn monitor.
[![Alt text](/img/migrated/Picture8-2-102fff27.png)](/img/migrated/Picture8-2-102fff27.png)
**Bước 5**. Click **Manual** and sau that làm theo guide.
[![Alt text](/img/migrated/Picture9-2-575519ed.png)](/img/migrated/Picture9-2-575519ed.png)
Ngoài ra, FPT Monitoring hỗ trợ **tích hợp tự động** **Kubernetes Dedicated** and **Kubernetes Managed**. 
Việc tích hợp this giúp user can cấu hình tích hợp theo dõi **metric and log** of fromng cụm cluster dễ dàng and chuyên nghiệp. 
Để sử dụng feature this, user thao tác as follows: 
**Step 1:** Trong tab **Infrastructure service** , click **Kubernetes**
[![Alt text](/img/migrated/Picture1-4-4251b3d0.png)](/img/migrated/Picture1-4-4251b3d0.png)
**Step 2:** Click **Auto**. Tại đây, displayed bảng list the cụm cluster **Dedicated** and **Managed**. 
[![Alt text](/img/migrated/Picture3-4-ab6aaf3f.png)](/img/migrated/Picture3-4-ab6aaf3f.png)
**Note:**
Trong trường hợp user chưa có cụm cluster nào displayed, user ando phần **Kubernetes** trên menu, click **Create a Kubernetes Engine** to create. 
Hướng dẫn details khởi tạo Kubernetes user can tham khảo tại link sau: 
Nếu tenant of you không có permission tạo, hãy liên hệ with đội ngũ admin of chúng tôi to hỗ trợ. 
  * Để tích hợp **Dedicated kubernetes** , you thao tác as follows: 

1, Click tab **Dedicated**
[![Alt text](/img/migrated/Picture4-4-8f2ee7aa.png)](/img/migrated/Picture4-4-8f2ee7aa.png)
2, Chọn cụm cluster and loại datasource you muốn tích hợp. Mỗi cụm cluster will có 2 loại datasource là metric and log. Chỉ những cụm cluster is hoạt động and datasource ở status active thì user mới can tích hợp. 
3, Click **Integrate**
[![Alt text](/img/migrated/Picture5-4-c8990333.png)](/img/migrated/Picture5-4-c8990333.png)
Xuất hiện hộp thoại xác nhận user có muốn tích hợp logs/metrics of cluster lên workspace corresponding hay không. 
Để xác nhận, user click button **Confirm**. 
[![Alt text](/img/migrated/Picture6-4-e64b483e.png)](/img/migrated/Picture6-4-e64b483e.png)
Sau when click, status tích hợp là **Integrating**. 
[![Alt text](/img/migrated/Picture7-4-aad01789.png)](/img/migrated/Picture7-4-aad01789.png)
Người dùng đợi 1-2 phút system will tự động cập nhật lại status cuối cùng (successfully or failed). 
[![Alt text](/img/migrated/Picture8-4-5a74c485.png)](/img/migrated/Picture8-4-5a74c485.png)
4, Tiếp đến, user đăng nhập ando trang Dashboard bằng theh chọn tab **Configuration** > Click ando link **Dashboard URL** and đăng nhập bằng username, password is displayed. 
[![Alt text](/img/migrated/Picture9-4-8516bd17.png)](/img/migrated/Picture9-4-8516bd17.png)
5, Sau when truy cập ando trang Dashboard, user click **Home** > chọn **Dashboard** > chọn Folder Fmon – Kubernetes and sử dụng. 
[![Alt text](/img/migrated/Picture10-4-a10f8a99.png)](/img/migrated/Picture10-4-a10f8a99.png)
  * Để tích hợp **Managed kubernetes** , user chọn tab **Managed** and thực hiện the bước **tương tự** như phần Dedicated Kubernetes. 

[![Alt text](/img/migrated/Picture11-4-db200ae1.png)](/img/migrated/Picture11-4-db200ae1.png)
