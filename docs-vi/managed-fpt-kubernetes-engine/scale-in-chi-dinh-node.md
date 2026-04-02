---
id: "scale-in-chi-dinh-node"
title: "Tính năng scale in chỉ định node trong cluster"
description: "**I. Giới thiệu chung**"
sidebar_label: "Tính năng scale in chỉ định node trong cluster"
sidebar_position: 20
---

# Scale in chỉ định node

**I. Giới thiệu chung**
Tài liệu này hướng dẫn quy trình cấu hình để chỉ định thứ tự ưu tiên của node khi manual scale in cluster. Các node trong cluster sẽ có thứ tự ưu tiên về độ quan trọng tăng dần từ 1 đến 3. Mặc định tất cả các node trong cluster có độ ưu tiên bằng nhau và bằng 3.
Trong quá trình giảm số lượng node (scale down), khi được kích hoạt qua MachineDeployment hoặc MachineSet, MCM (Machine Controller Manager) ưu tiên xóa các worker node có độ ưu tiên thấp nhất. Quản trị viên có thể giảm độ ưu tiên của các worker node cụ thể bằng cách thay đổi giá trị độ ưu tiên này xuống còn 1. Sau đó, khi tiến hành scale down trong các lần tiếp theo, MachineDeployment sẽ ưu tiên xóa các worker node có độ ưu tiên thấp nhất.
**II. Các bước thiết lập**
**Bước 1** : Thực hiện đánh annotation cho node muốn xóa như sau:

```
Copykubectl annotate no  worker.fptcloud.com/nodepriority=1
```

[![](/img/migrated/Screenshot_1-2-2a8d0ed1.png)](/img/migrated/Screenshot_1-2-2a8d0ed1.png)
**Bước 2** : Sau đó thực hiện manual scale down worker group trên portal bằng việc điều chỉnh min-max node trong worker group.
[![](/img/migrated/Screenshot_2-2-0bcd5774.png)](/img/migrated/Screenshot_2-2-0bcd5774.png)
[![](/img/migrated/Screenshot_3-1-27090c5d.png)](/img/migrated/Screenshot_3-1-27090c5d.png)
Sau khi điều chỉnh min-max node hệ thống sẽ thực hiện scale-in đúng node đã được chỉ định. Quá trình scale-in sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing**. Cluster vẫn hoạt động bình thường.
[![](/img/migrated/Screenshot_4-1-2b9a2dc4.png)](/img/migrated/Screenshot_4-1-2b9a2dc4.png)
[![](/img/migrated/Screenshot_5-1-4b366a9b.png)](/img/migrated/Screenshot_5-1-4b366a9b.png)
Có thể đánh annotation worker.fptcloud.com/nodepriority=1 cho nhiều node trong trường hợp cần scale down chỉ định nhiều node
Chú ý: Tính năng này không hỗ trợ trong trường hợp worker node được scale in bởi cluster auto scaler.
