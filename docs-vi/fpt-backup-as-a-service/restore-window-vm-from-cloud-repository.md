---
id: "restore-window-vm-from-cloud-repository"
title: "Restore Window vm From Cloud Repository"
description: "**Bước 1:** Attach File ISO Veeam recovery media sau đó khởi đội VM từ File ISO (lưu ý VM cần có cùng số lượng disk và d"
sidebar_label: "Restore Window vm From Cloud Repository"
sidebar_position: 7
---

# Restore Window vm From Cloud Repository

**Bước 1:** Attach File ISO Veeam recovery media sau đó khởi đội VM từ File ISO (lưu ý VM cần có cùng số lượng disk và dung lượng disk). Giao diện console sau khi VM boot thành công.
Chọn Bare Metal Recovery
**Bước 2:** Chọn Network storage sau đó chọn Next.
Chọn Veeam Cloud Connect repository
**Bước 3:** Nhập URL của BaaS: baas-sgn-gw.fptcloud.com đối với site Hồ Chí Minh và baas-han-gw.fptcloud.com đối với site Hà Nội
**Bước 4:** Nhập Username/password của bạn. Sau đó ấn Enter để tiếp tục.
**Bước 5:** Lựa chọn VM cần restore và restore point mong muốn.
**Bước 6:** Chọn Manual restore để Map các ổ đĩa tương ứng.
Restore các ổ đĩa tương ứng.
**Bước 7:** Kiểm tra lại thông tin và chọn Restore để tiến hành khôi phục lại VM của bạn