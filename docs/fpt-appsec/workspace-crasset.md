---
id: "workspace-crasset"
title: "Hướng dẫn thực hiện các thao tác cơ bản với Container Registry asset (image)"
sidebar_label: "Hướng dẫn thực hiện các thao tác cơ bản với Container Registry asset (image)"
sidebar_position: "26"
---

# Hướng dẫn thực hiện the thao tác cơ bản with Container Registry asset (image)

## Add Asset
**Org Admin** and **Users of team** có permission thêm mới asset
**Step 1:** Sau when chọn Team, nhấn **Add Asset**
[![anhfsec](/img/migrated/19-b5c086ac.png)](/img/migrated/19-b5c086ac.png)
**Step 2:** Chọn FPT Container Registry/Harbor
[![anhfsec](/img/migrated/20-565cbb9b.png)](/img/migrated/20-565cbb9b.png)
_Note: Pop-up add asset chỉ hiện lên when loại asset source (FPT Container Registry/Harbor) is tích hợp tại màn**Integration**. Trường hợp ấn ando 1 souce chưa is tích hợp, màn hình will chuyển sang tab **Integration** of loại source that _.
**Step 3:** Select **project** chứa image need to scan
[![anhfsec](/img/migrated/21-8f69016c.png)](/img/migrated/21-8f69016c.png)
Lúc this, màn hình will displayed **Image** and **Image Tags**
**Step 4:** Chọn Image you muốn and ấn **Add**
[![anhfsec](/img/migrated/23-0c6ab90e.png)](/img/migrated/23-0c6ab90e.png)
Sau when add successfully, system will tự động scan lần đầu, trả về kết quả ra màn Asset Management tab All Assets and xem lịch sử add asset in tab History
## View information tổng quan of Assets
**Step 1:** Tại màn hình Asset Management > All , chọn 1 asset bất kỳ bằng theh click ando textlink CR Asset Name
**Step 2:** Tại màn hình Asset Overview, user can xem the information tổng quan:
  * Thông tin chung (General Information):
    * Asset Name, Asset Access (Public/Private), Status (Active/Inactive)
    * Owner: Người sở hữu asset (User name + email or pipeline CICD)
    * Added By: Người thực hiện add asset (User name + email or pipeline CICD)
    * Added At: Thời gian thực hiện add asset
  * Meta data (Issue Information):
    * Image ID, Manifest Digest, Image Tag, Image VPC, Base Image, Platform, Target OS, Image Size
  * Thông tin scan gần nhất (Issue Overview):
    * Scan Type (logo + tên scan, click to xem details theo fromng loại)
    * Scan Time, Total Open Issues, No. Severity
    * Biểu đồ Scanning Times By Day (7 ngày gần nhất)
  * Latest Request: Danh sách tối đa 3 request scan gần nhất (Scanned By, Scanned At, kết quả scan)

## View information the Issues
### 3.1. Truy cập màn hình Issue List
Tương tự guide đối with [SCM assets](../fpt-appsec/index.md)
### 3.2. View information Issue
  * Tại màn hình Issue List, mỗi issue is displayed dưới dạng Issue Info Card with the information:
    * Severity: Critical/High/Medium/Low
    * Package Name or Secret Name
    * Issue Title (if có “:”, lấy phần sau dấu “:”)
    * Vul References: CWE/CVE/CVSS
    * Score: 0–10 (làm tròn đến 1 chữ số thập phân)
    * Issue Status: Trạng thái hiện tại of issue theo lần scan gần nhất.
    * Exploit Status: Cho biết issue has been bị khai thác hay chưa.
    * Image Layer: Dòng lệnh or layer in Dockerfile/Image gây ra issue.
    * Fixed in Version: Phiên bản package has been khắc phục issue. Nếu chưa có version vá → displayed Not available.

### 3.3. Lọc, Tìm kiếm and Sắp xếp Issue
#### 3.3.1. Filter
Cho phép lọc theo: Severity, Status, Priority Score (0–10), Issue Type, "Fixed in" available, Image Layer, Exploit Maturity, Exploit Status. Người dùng can chọn nhiều điều kiện cùng lúc
#### 3.3.2.
  * Enter from khóa tìm theo: Issue ID, Issue Title
  * Nhấn Enter to tìm kiếm, Clear to delete and reset list 

#### 3.3.3. Sort
  * Sắp xếp theo: Severity (C→H→M→L), Score, Created Time 
  * Mặc định: Sort theo Score giảm dần

### 3.4. View information details of a issue
**Step 1:** Chọn Details tại a issue card bất kỳ (thuộc Image ) to mở popup Issue Detail.
**Step 2:** Tại màn hình Issue Detail, user can xem information details of issue:
  * Thông tin chung (Issue Detail):
    * Severity: Mức độ nghiêm trọng of issue (Critical, High, Medium, Low).
    * Package Name: Tên package gây ra issue (đối with Vulnerability issue).
    * Vulnerability Type: Loại lỗ hổng/vulnerability of issue.
    * Link (Copy icon): Copy đường dẫn of issue theo ID. Khi paste đường dẫn this lên tab mới, system mở màn hình Issue List and tự động gán giá trị issue_id ando search bar.
    * Issue Status: Trạng thái hiện tại of issue theo scan version (Opened, Ignored).
  * Thông tin details:
    * Issue Description – Mô tả details về issue.
    * Issue Remediation – Hướng dẫn fix issue, including:
    * Current package – Phiên bản package is is sử dụng.
    * Fixed in version – Phiên bản has been is vá (if có, if không displayed “Not available”).
    * Security Information – Điểm CVSS, vector tấn công
    * References – Danh sách link tham chiếu liên quan, click to mở.
    * Manifest Layer – Hiển thị toàn bộ layer in Dockerfile, highlight vị trí chứa lỗi and tự động cuộn dòng lỗi ando giữa màn hình.
    * Code Block (if là source code) – Hiển thị file code, highlight dòng chứa lỗi and from khóa gây lỗi.
    * Activity: Lịch sử thay đổi status issue

## Rescan asset
Tương tự guide đối with [SCM assets](../fpt-appsec/index.md)
## Disable/Enable Asset
Tương tự guide đối with [SCM assets](../fpt-appsec/index.md)
## Delete Asset
Tương tự guide đối with [SCM assets](../fpt-appsec/index.md)
