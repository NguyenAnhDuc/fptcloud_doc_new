---
id: "User Group-Overview"
title: "User Group Overview"
description: "* User group là đối tượng tượng trưng cho một nhóm người dùng có vai trò giống nhau."
sidebar_label: "User Group Overview"
sidebar_position: 11
---

# User Group Overview

* User group là đối tượng tượng trưng cho một nhóm người dùng có vai trò giống nhau. 

Tất cả IAM user trong cùng user group sẽ được gán chung Roles & Permission của User group.
  * Việc này sẽ giúp bạn tiết kiệm rất nhiều thời gian cho việc quản lý quyền cho các nhóm người dùng giống nhau. Thay vì phải cấp/cập nhật quyền lần lượt cho từng IAM User thì bạn chỉ cần update một lần duy nhất vào User Group.
  * User Group có thể chứa nhiều IAM User và một IAM User có thể nằm trong nhiều User Group.