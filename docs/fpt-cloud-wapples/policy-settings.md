---
id: "policy-settings"
title: "Policy Settings"
sidebar_label: "Policy Settings"
sidebar_position: "18"
---

# Policy Settings

Sử dụng to thiết lập the policy and rule nhằm lựa chọn the event to chặn or ghi lại ando in log tại phần View Logs – Detection Logs [![file](/img/migrated/image-1714115314016-153567a2.png)](/img/migrated/image-1714115314016-153567a2.png)
Các thành phần chính includes
Policy List: Thực hiện chặn or ghi lại the event dựa trên policy. Wapples có 7 policies cơ bản includes:
  1. **Bypass Without Detection** : không ghi lại the sự kiện
  2. **Detect Without Blocking** : ghi lại mà không có the biện pháp ngăn chặn
     * Basic Security Policy: Sau when detect, thực hiện ngăn chặn the sự kiện theo the rule
     * Directory Listing
     * Invalid HTTP
     * SQL Injection
  3. **Standard Security Policy** : Sau when detect, thực hiện ngăn chặn the sự kiện theo the rule
     * Cross Site Scripting
     * Directory Listing
     * Directory Traversal
     * Error Handling
     * File Inclusion
     * File Upload
     * Invalid HTTP
     * Invalid URL
     * Request Method Filtering
     * SQL Injection
  4. **Advanced & PCI-DSS Security Policy:**
     * Thực hiện hành động ứng phó dựa trên thiết lập
     * Cho phép kiểm tra a rule cụ thể bằng theh nhấp ando policy corresponding
     * Phản hồi lại dựa trên counter measure is thiết lập
  5. **Block All Traffic**
     * Block phản hồi is yêu cầu to website
     * Không ghi lại log vì the request has been bị block before is detect

Rule list: Hiển thị the rule and countermeasure is có sẵn in Policy is chọn [![file](/img/migrated/image-1714115324089-7946dbab.png)](/img/migrated/image-1714115324089-7946dbab.png)
  * **Add Policy/Website** : Create policy tự custom or thêm the website ando policy nhằm áp dụng riêng for fromng website bằng theh chọn ando dấu 
[![file](/img/migrated/image-1714115330781-fdfd7e91.png)](/img/migrated/image-1714115330781-fdfd7e91.png)
  * Create policy dựa trên 1 policy có sẵn
  * Add policy for 1 website (Có thể chỉ định subdirectory cụ thể)
  * Add rule for policy [![file](/img/migrated/image-1714116584852-121d4fcb.png)](/img/migrated/image-1714116584852-121d4fcb.png)
  * **Snort** [![file](/img/migrated/image-1714116637131-1a780634.png)](/img/migrated/image-1714116637131-1a780634.png)
  * Chọn User-defined
  * Add Rule Name
  * Chọn Countermeasure
  * Chọn Risk Level (Nếu chọn Disconnect/Error Code/Page Redirection)
  * Upload rule has been is thiết lập in [Security Settings] - [Pattern Storage] - [Snort].
  * Chọn Apply and chọn Save [![file](/img/migrated/image-1714116644103-e6d7de68.png)](/img/migrated/image-1714116644103-e6d7de68.png)
  * **Threat Protection Profile** [![file](/img/migrated/image-1714116657982-729ff395.png)](/img/migrated/image-1714116657982-729ff395.png)
  * Chọn Detection or Do Not Detection
  * Chọn Countermeasure (Nếu chọn Detection)
  * Chọn Risk Level (Nếu chọn Detection/Disconnect/Error Code/Page Redirection)
  * Upload rule has been is thiết lập in [Security Settings] - [Security Patch] - [Threat Protection Profile].
  * Chọn Apply and chọn Save
  * **Manually Input** [![file](/img/migrated/image-1714116666121-7012fe2f.png)](/img/migrated/image-1714116666121-7012fe2f.png)
  * Chọn User-defined
  * Add Rule Name
  * Chọn Countermeasure
  * Chọn Risk Level (Nếu chọn Disconnect/Error Code/Page Redirection)
  * Set up Pattern thủ công rồi chọn Apply and chọn Save
