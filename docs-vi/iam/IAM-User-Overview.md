---
id: "IAM-User-Overview"
title: "IAM User - Overview"
description: "IAM User là người dùng được mời thêm vào Tenant, có thể là KH đã có tài khoản FPT Cloud/ SSO hoặc chưa có."
sidebar_label: "IAM User - Overview"
sidebar_position: 18
---

# Iam User Overview

IAM User là người dùng được mời thêm vào Tenant, có thể là KH đã có tài khoản FPT Cloud/ SSO hoặc chưa có.
  * Trường hợp user được mời đã có tài khoản, sau khi xác nhận họ có thể truy cập ngay vào VPC được cấp quyền. Nếu chưa có sẽ được hướng dẫn khởi tạo tài khoản FPT Cloud mới.
  * Trong quá trình sử dụng nếu IAM User có nhu cầu sử dụng riêng một Tenant mới, chỉ cần liên hệ với bộ phận hỗ trợ để được cấp quota Tenant. 
  * Trong quá trình sử dụng nếu Tenant Owner muốn thay đổi role hoặc ngắt quyền truy cập vào tenant của một IAM User bất kỳ, hãy chỉnh sửa User Group theo hướng dẫn tại [đây](https://fptcloud.com/documents/iam/?doc=khoi%20tao%20user%20group%20moi). 
    * Ví dụ User A nằm trong User Group đang được gán role Reviewer, có quyền truy cập vào Tenant B.
    * Nếu muốn ngắt quyền truy cập của User A khỏi Tenant B. Hãy xóa User A khỏi User Group. Lúc này User A sẽ không còn bất kỳ quyền truy cập nào vào Tenant B nữa. Tương tự nếu muốn thay đổi quyền truy cập sang một role khác, hãy gán role mới cho User Group.

**Lưu ý: Việc thay đổi role cho một User Group có thể ảnh hưởng đến các User khác trong User Group đó, nếu bạn chỉ muốn đổi role của một User cụ thể, hãy tạo một User Group mới theo hướng dẫn tại[đây](https://fptcloud.com/documents/iam/?doc=khoi%20tao%20user%20group%20moi).**