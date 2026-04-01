---
id: "restore-window-vm-from-cloud-repository"
title: "Restore Window vm From Cloud Repository"
sidebar_label: "Restore Window vm From Cloud Repository"
sidebar_position: "7"
---

# Restore Window vm From Cloud Repository

**Step 1:** Attach File ISO Veeam recovery media sau đó khởi đội VM từ File ISO (lưu ý VM cần có cùng số lượng disk và dung lượng disk). Giao diện console sau khi VM boot thành công.
Chọn Bare Metal Recovery
**Step 2:** Chọn Network storage sau đó chọn Next.
Chọn Veeam Cloud Connect repository
**Step 3:** Nhập URL của BaaS: baas-sgn-gw.fptcloud.com đối với site Hồ Chí Minh và baas-han-gw.fptcloud.com đối với site Hà Nội
**Step 4:** Nhập Username/password của bạn. Sau đó ấn Enter để tiếp tục.
**Step 5:** Lựa chọn VM cần restore và restore point mong muốn.
**Step 6:** Chọn Manual restore để Map các ổ đĩa tương ứng.
Restore các ổ đĩa tương ứng.
**Step 7:** Check lại thông tin và chọn Restore để tiến hành khôi phục lại VM của bạn
