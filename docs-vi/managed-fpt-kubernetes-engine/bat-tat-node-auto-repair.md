---
id: "bat-tat-node-auto-repair"
title: "Bật/Tắt Node Auto-repair"
description: "_Bên cạnh tính năng Cluster Autoscale, FPTCloud cung cấp tính năng Node Auto-repair hỗ trợ người dùng tự động reboot wor"
sidebar_label: "Bật/Tắt Node Auto-repair"
sidebar_position: 15
---

# Bật/tắt Node Auto Repair

_Bên cạnh tính năng Cluster Autoscale, FPTCloud cung cấp tính năng Node Auto-repair hỗ trợ người dùng tự động reboot worker nodes bị NotReady quá 3 phút. Tính năng này mang đến hiệu quả trong trường hợp các worker nodes bị quá tải hoặc gặp vấn đề liên quan đến container runtime, kubelet dẫn đến tình trạng node NotReady. Nếu sau quá trình auto repair mà node không thể trở lại trạng thái Ready thì sau 10 phút hệ thống sẽ thay thế node notReady đó bằng một node mới có cấu hình tương tự. Tính năng này mặc định enable cho worker group base (là worker group chứa các thành phần system của cluster). Người dùng có thể lựa chọn enable hoặc disable tính năng này cho các worker group khác trong cluster._
**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn **Cluster** muốn bật/tắt Node Auto-repair. 
[![](/img/migrated/Picture31-fa3d5722.png)](/img/migrated/Picture31-fa3d5722.png)
**Bước 2** : Chọn **Node Pools** > **Edit Workers**
[![](/img/migrated/Picture4-3-1c81009b.png)](/img/migrated/Picture4-3-1c81009b.png)
**Bước 3** : Tại woker pool, thực hiện bật/tắt tính năng Node auto repair. 
[![](/img/migrated/Picture33-8691df0e.png)](/img/migrated/Picture33-8691df0e.png)
**Lưu ý:** Chỉ có thể nâng cấp version, không thực hiện được việc hạ version.
**Bước 4** : Click button **Save**. 
[![](/img/migrated/Picture34-0822dd51.png)](/img/migrated/Picture34-0822dd51.png)
[![](/img/migrated/Picture35-b4d39044.png)](/img/migrated/Picture35-b4d39044.png)
Quá trình chỉnh sửa Bật/Tắt Node auto repair sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing** , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất.