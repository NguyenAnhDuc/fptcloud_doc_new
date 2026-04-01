---
id: "create-schedule"
title: "Hướng dẫn tạo schedule"
sidebar_label: "Hướng dẫn tạo schedule"
sidebar_position: "29"
---

# Hướng dẫn tạo schedule

**Step 1:** Mở màn hình tạo 
Vào menu **Schedule** , hệ thống điều hướng sang màn hình **Schedule Management**. Click **Create Schedule** : 
[![Alt text](/img/migrated/1-1-461969c3.png)](/img/migrated/1-1-461969c3.png)
System displayed màn hình tạo schedule gồm the trường cần điền về General information and Scope configuration:
[![Alt text](/img/migrated/Screenshot-2025-11-14-141143-6b45dd3e.png)](/img/migrated/Screenshot-2025-11-14-141143-6b45dd3e.png)
**Step 2:** Enter the trường thông tin chung
**1. Name (_bắt buộc_):** Enter tên for schedule to dễ nhận diện in danh sách, tên không is trùng with schedule has been tồn tại. 
[![Alt text](/img/migrated/Picture3-35523042.png)](/img/migrated/Picture3-35523042.png)
**2. Description (_không bắt buộc_):** Enter mô tả ngắn (tối đa 255 ký tự). 
[![Alt text](/img/migrated/Picture4-0eb15724.png)](/img/migrated/Picture4-0eb15724.png)
**3. Frequency (_bắt buộc_):** Chọn tần suất chạy schedule: 
[![Alt text](/img/migrated/Picture5-2f370489.png)](/img/migrated/Picture5-2f370489.png)
  * **On-demand** : Chạy thủ công when user kích hoạt. Người dùng cần chọn ngày and giờ cụ thể (sau ngày hôm nay) and thời gian chạy mong muốn. System will kích hoạt chạy schedule ando đúng thời gian user has been chọn (1 lần): 

[![Alt text](/img/migrated/Screenshot-2025-11-14-141242-1e0f1e55.png)](/img/migrated/Screenshot-2025-11-14-141242-1e0f1e55.png)
  * **Weekly** : Khi chọn đặt lịch chạy hàng tuần, user cần chọn ngày in tuần (Monday – Sunday) & giờ cần chạy.

[![Alt text](/img/migrated/Picture7-2f26c4c8.png)](/img/migrated/Picture7-2f26c4c8.png)
  * **Monthly** : Chạy định kỳ hàng tháng. Người dùng cần chọn ngày and giờ cần chạy in tháng in tháng (1 → 31) or chọn **Last** to lập lịch scan ando ngày cuối cùng of tháng: 

[![Alt text](/img/migrated/Picture8-1e00c9a0.png)](/img/migrated/Picture8-1e00c9a0.png)
**Step 3:** Enter thông tin về phạm vi (scope) chạy schedule 
**1. Chọn Team:** Ở phần Team (bắt buộc), chọn team áp dụng schedule. 
[![Alt text](/img/migrated/Picture9-2174c7e0.png)](/img/migrated/Picture9-2174c7e0.png)
**2. Configure Rule (Scope)**
  * **Asset Type:** Ở version hiện tại, rule chỉ áp dụng for the asset thuộc loại **Repository**. Không thể chỉnh sửa. 
  * **Branch:** Version hiện tại chỉ áp dụng for main/master branch 
  * **Source:** Xác định nguồn of repository (GitHub/GitLab/GitLab Server). Nếu user không chọn, hệ thống will mặc định quét tất cả repo from mọi nguồn

[![Alt text](/img/migrated/Screenshot-2025-11-14-141405-ac960aef.png)](/img/migrated/Screenshot-2025-11-14-141405-ac960aef.png)
  * **Last Scan:** Xác định khoảng thời gian repo chưa is quét gần đây. Nếu không chọn, hệ thống will mặc định quét toàn bộ repo hợp lệ, if chọn, hệ thống will chỉ quét repo chưa is quét in X ngày gần nhất (theo loại scan chọn ở phần Action)

[![Alt text](/img/migrated/Picture11-dab921d9.png)](/img/migrated/Picture11-dab921d9.png)
  * **Add rule:** Nhấn to thêm loại rule mới mới (Source, Last Scan). Khi tất cả the loại rule has been is thêm, nút this bị vô hiệu hóa. 

[![Alt text](/img/migrated/Screenshot-2025-11-14-141528-97f4ebca.png)](/img/migrated/Screenshot-2025-11-14-141528-97f4ebca.png)
**Step 4:** Chọn loại scan (Action) 
Trong phần Action, user can chọn the loại scan: Code Analysis, Secret Scan, IaC Scan. Người dùng cần chọn ít nhất 1 loại scan. Nếu user không chỉnh sửa, mặc định cả 3 is chọn. 
[![Alt text](/img/migrated/Picture15-4a5f2bd8.png)](/img/migrated/Picture15-4a5f2bd8.png)
**Step 5:** Check lại tất cả trường bắt buộc has been điền. Click **Create** to lưu schedule. 
[![Alt text](/img/migrated/Picture13-d4757f19.png)](/img/migrated/Picture13-d4757f19.png)
Khi ấn tạo schedule successfully, hệ thống will chuyển về màn hình danh sách schedule and displayed notification _“Created schedule successfully”_.
