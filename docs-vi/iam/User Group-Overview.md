---
id: "overview-user-group"
title: "User Group overview"
description: "User Group là nhóm người dùng có vai trò giống nhau, được gán chung Roles và Permission."
sidebar_label: "User Group overview"
sidebar_position: 11
---

# User Group overview

User Group là đối tượng đại diện cho một nhóm người dùng có vai trò giống nhau. Tất cả IAM user trong cùng User Group sẽ được gán chung Roles & Permission của User Group đó.

- Việc này giúp tiết kiệm thời gian quản lý quyền: thay vì cấp hoặc cập nhật quyền lần lượt cho từng IAM user, bạn chỉ cần cập nhật một lần vào User Group.
- Một User Group có thể chứa nhiều IAM user và một IAM user có thể nằm trong nhiều User Group.
