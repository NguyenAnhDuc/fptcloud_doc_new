---
id: "manage-pool-members"
title: "Thêm và xóa member trong Server Pool"
description: "Hướng dẫn thêm và xóa member khỏi Server Pool của Load Balancer trên FPT Cloud."
sidebar_label: "Thêm và xóa pool member"
sidebar_position: 19
---

# Thêm và xóa member trong Server Pool

**Member** là máy chủ trong **Server Pool** chịu trách nhiệm xử lý các request được định tuyến qua Load Balancer.

Các member của Server Pool được tạo tự động khi bạn tạo Load Balancer.

## Thêm member

**Bước 1:** Trong danh sách Server Pool, nhấn vào Server Pool cần thêm member.

[![](/img/migrated/image-1710989399033-82cb406f.png)](/img/migrated/image-1710989399033-82cb406f.png)

**Bước 2:** Trong phần **Add server**, bảng **Select instance** hiển thị danh sách các instance có thể chọn. Chọn các instance cần thêm.

[![](/img/migrated/image-1710989438271-ca679a80.png)](/img/migrated/image-1710989438271-ca679a80.png)

Cấu hình từng member:

- **Port**: Cổng mà member lắng nghe để xử lý request.
- **Weight**: Trọng số ưu tiên phân phối request. Member có trọng số cao hơn nhận nhiều request hơn.

## Xóa member

Để xóa một member khỏi Server Pool, nhấn **Remove** trong menu **Action** của member đó.

[![](/img/migrated/image-1710989470976-16ee6e91.png)](/img/migrated/image-1710989470976-16ee6e91.png)
