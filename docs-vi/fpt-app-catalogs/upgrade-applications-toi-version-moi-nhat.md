---
id: "upgrade-applications-toi-version-moi-nhat"
title: "Upgrade applications tới version mới nhất"
description: "Hướng dẫn nâng cấp application lên phiên bản mới nhất trong repository."
sidebar_label: "Upgrade applications tới version mới nhất"
sidebar_position: 14
---

# Upgrade applications tới version mới nhất

Hệ thống cho phép người dùng có thể upgrade version app tới version mới nhất trong repository. Tuy nhiên, người dùng cần đánh giá mức độ ảnh hưởng khi thực hiện upgrade version
**Bước 1** : Tại mục detail applications, chọn **Upgrade to** (button xuất hiện khi applications được cài đặt không phải version mới nhất)
[![](/img/migrated/Picture33-1-a6c06913.png)](/img/migrated/Picture33-1-a6c06913.png)
**Bước 2** : Thực hiện tuỳ chỉnh cấu hình mong muốn
[![](/img/migrated/Picture34-1-e7b42635.png)](/img/migrated/Picture34-1-e7b42635.png)
**Bước 3** : **Confirm** để thực hiện upgrade chart
_Lưu ý: Tuy nhiên tại bước upgrade chart có thể pass/fail tuỳ thuộc vào cluster install chart. Tuỳ versions của chart sẽ support các version k8s cluster khác nhau._
