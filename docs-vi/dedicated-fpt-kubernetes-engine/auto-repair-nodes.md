---
id: "auto-repair-nodes"
title: "A. Tổng quan"
description: "**A. Tổng quan**"
sidebar_label: "A. Tổng quan"
sidebar_position: 27
---

# A. Tổng quan

**A. Tổng quan**
Bài viết này sẽ giới thiệu và giải thích về cách hoạt động của tính năng node auto-repair trong sản phẩm D-FKE của FPTCloud.
Node auto-repair hỗ trợ việc giữ trạng thái các node trong cụm ở trạng thái Ready, running. Khi tính năng này được kích hoạt, các sự kiện liên quan đến node được giám sát liên tục. Trong trường hợp một node nằm trong trạng thái NotReady, node auto-repair ssẽ giám sát node này, sau 3 phút nếu node vẫn trong trạng thái trên, node auto-repair sẽ thực hiện những hành động cần thiết để đưa node về trạng thái Ready.
**B. Cài đặt**
  1. Với các **cụm mới được khởi tạo** sau khi release tính năng: cụm mới được kích hoạt tính năng tự động.
  2. Với các **cụm cũ** : chạy lệnh sau

```
Copykubectl apply -f https://raw.githubusercontent.com/fci-xplat/fke-config/main/node-autorepair
```

**C. Cấu hình**
Tại configmap "auto-repair-configmap" trong namespace kubesystem, có hai trường bạn có thể chỉnh sửa:

```
Copyenable_rebooting_node (mặc định "true") 
```

```
Copyenable_replacing_node (mặc định "true")
```

· **enable_rebooting_node** : bạn cấp quyền cho node auto-repair reboot các node bị lỗi.
· **enable_replacing_node** : bạn cấp quyền cho node auto-repair xóa node bị lỗi.
Trong trường hợp bạn muốn các node trong cụm của bạn ổn định, hãy cài đặt trường enable_replacing node giá trị "false".
**D. Giải thích luồng hoạt động cơ bản**
  1. Node được phát hiện ở trạng thái NotReady quá 3p sẽ được reboot.
  2. Node được reboot trong 3 lần.
  3. Reboot không làm node ready => drain hết pod trên node.
  4. Nếu cluster không có đủ tài nguyên để chạy các pod trên node cũ, thêm node vào cụm (hoạt động của cluster-autoscaler).
  5. Node bị drain sẽ bị tự động xóa sau 15p (hoạt động của cluster-autoscaler).
  6. Trong trường hợp cluster Autoscaler không hoạt động, sau 60p node auto-repair sẽ thực hiện xóa node lỗi trên

**E. Một số điều cần chú ý**
  * Hệ thống backend của D-FKE có thể thêm/sửa/xóa các node trong cụm (vấn đề thường xảy ra với các cụm được cấu hình tường lửa).
  * Từ trong cụm, có thể đăng nhập được vào hạ tầng nơi các node của cụm chạy.
