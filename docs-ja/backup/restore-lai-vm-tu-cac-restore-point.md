---
id: "restore-lai-vm-tu-cac-restore-point"
title: "Restore lại VM từ các Restore Point"
sidebar_label: "Restore lại VM từ các Restore Point"
sidebar_position: "4"
---

# Restore lại VM từ các Restore Point

Các VM được bảo vệ bởi **Backup Job** bằng cách tạo định kỳ các Restore Point ở thời điểm hệ thống chạy ổn định. Trong trường hợp hệ thống có vấn đề, bạn chỉ cần restore lại VM về thời điểm chạy ổn định gần nhất. Để restore lại VM từ các Restore Point, bạn hãy thao tác như sau:
**ステップ1:** Ở menu chọn **Backup & Recovery** > **Backup & Recovery Management**. Mở tab **Restore**. Ở đây sẽ hiển thị các VM đang được bảo vệ và số lượng Restore Point đã được tạo thành công trước đấy.
**ステップ2:** Ở phần **Action** của VM cần restore, chọn **Restore**.
**ステップ3:** Popup **Instance restore** sẽ hiển thị các thông tin quan trọng như **Instance name** và list **Restore Point** của VM đấy. Bạn chọn **Restore Point** cần restore về và chọn **Restore Instance**.
**ステップ4:** Một hộp thoại cảnh báo sẽ hiện lên, yêu cầu người dùng xác nhận. Chọn **Restore Instance** để tiến hành khôi phục lại VM.
