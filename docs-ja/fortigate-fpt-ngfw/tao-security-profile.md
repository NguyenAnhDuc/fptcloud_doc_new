---
id: "tao-security-profile"
title: "Tạo Security Profile"
sidebar_label: "Tạo Security Profile"
sidebar_position: "7"
---

# Tạo Security Profile

## AntiVirus
**ステップ 1:** **Security Profiles** > **AntiVirus.**
![Userguide Fortigate FPT NGFW 2022 13](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-13-102-881981db.png)  
**ステップ 2:** Tạo mới một Profile hoặc có thể dùng Profile có sẵn của **Fortigate**.  
![Userguide Fortigate FPT NGFW 2022 14](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-14-102-d5b64418.png)  
Tùy chọn các **Giao Thức Inspected** , **Feature** và **Action**.
## Web Filter
**ステップ 1:** **Security Profiles** > **Web Filter**.
![Userguide Fortigate FPT NGFW 2022 15](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-15-102-5d2b8463.png)
**ステップ 2:** Tạo mới một Profile hoặc có thể dùng Profile có sẵn của **Fortigate.**
![Userguide Fortigate FPT NGFW 2022 16](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-16-102-7d7928a3.png)  
**ステップ 3:**
Bật **URL Filter** > **Create New.**
  * Tạo profile chỉ cho phép truy cập đến trang web cụ thể, ví dụ fptsmartcloud.com.

  * ![Userguide Fortigate FPT NGFW 2022 17](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-17-102-064d7203.png)**Tạo profile chặn tất cả các truy cập còn lại:** Sử dụng dạng Regex: [^.] để chặn các trang còn lại.

![Userguide Fortigate FPT NGFW 2022 18](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-18-102-0730e9d9.png)
![Userguide Fortigate FPT NGFW 2022 19](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-19-17350cd9.png)
## Application Control
**ステップ 1:** **Security Profiles** > **Application Control.**
![Userguide Fortigate FPT NGFW 2022 20](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-20-102-4e4f0eba.png)
**ステップ 2:** Tạo mới một Profile hoặc có thể dùng Profile có sẵn của Fortigate để chặn truy cập các trang mạng xã hội.
![Userguide Fortigate FPT NGFW 2022 21](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-21-102-f6520a67.png)
![Userguide Fortigate FPT NGFW 2022 22](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-22-102-568d50f4.png)
**ステップ 3:** Sử dụng các signature có sẵn hoặc tạo mới **Create New** > **Custom Application Signature**.
![Userguide Fortigate FPT NGFW 2022 23](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-23-102-8c16436a.png)
## Intrusion Prevention – IPS
**ステップ 1:** **Security Profiles** > **Intrusion Prevention**.
![Userguide Fortigate FPT NGFW 2022 24](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-24-102-a9517010.png)
**ステップ 2:** Tạo mới một Profile hoặc có thể dùng Profile có sẵn của Fortigate để chặn truy cập đến các C&C server (Botnet).
![Userguide Fortigate FPT NGFW 2022 25](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-25-102-d20e176d.png)
![Userguide Fortigate FPT NGFW 2022 26](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-26-102-c379afe0.png)
**ステップ 3:** Sử dụng các IPS signature có sẵn hoặc tạo mới **IPS Signature and Filter** > **Create New.**
![Userguide Fortigate FPT NGFW 2022 27](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-27-102-ccc83cc5.png)
## WebApplication FireWall – WAF
**ステップ 1:** **Security Profiles** > **Web Application FireWall**  
![Userguide Fortigate FPT NGFW 2022 28](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-28-102-3da9bc27.png)  
**ステップ 2:** Tạo mới một Profile hoặc có thể dùng Profile có sẵn của Fortigate để chặn các cuộc tấn công đến webserver (Sql Injection, Cross Site Scripting)
![Userguide Fortigate FPT NGFW 2022 29](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-29-102-2ec3dddd.png)
**ステップ 3:** Bật các signatures **Edit** > **Sql Injection** (Extended), **Cross Site** (Extended)  
![Userguide Fortigate FPT NGFW 2022 30](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-30-102-dd9edd12.png)
