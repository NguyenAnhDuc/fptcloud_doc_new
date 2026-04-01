---
id: "workspace-scmasset"
title: "2. Xem thông tin tổng quan của Assets"
sidebar_label: "2. Xem thông tin tổng quan của Assets"
sidebar_position: "25"
---

# 2. View thông tin tổng quan of Assets

## Add Asset
**Org Admin** and **Users of team** có permission thêm mới asset
**Step 1** : Sau when chọn Team, nhấn **Add Asset**
[![anhfsec](/img/migrated/19-b5c086ac.png)](/img/migrated/19-b5c086ac.png)
**Step 2** : Chọn GitHub/GitLab/GitLab 
[![anhfsec](/img/migrated/20-565cbb9b.png)](/img/migrated/20-565cbb9b.png)
_Note: Pop-up add asset chỉ hiện lên when loại asset source (GitHub/GitLab/GitLab) is tích hợp tại màn**Integration**. Trường hợp ấn ando 1 souce chưa is tích hợp, màn hình will chuyển sang tab **Integration** of loại source that _.
**Step 3** : Select **project/repo** chứa source cần scan
[![anhfsec](/img/migrated/21-8f69016c.png)](/img/migrated/21-8f69016c.png)
Lúc this, màn hình will displayed **Repository group** gồm the "repository" and the **branch** thuộc repo that. Người dùng can search branch mong muốn theo tên of branch
**Step 4** : Chọn repo and bracnh you muốn and ấn **Add**
[![anhfsec](/img/migrated/23-0c6ab90e.png)](/img/migrated/23-0c6ab90e.png)
Sau when add successfully, hệ thống will tự động scan lần đầu, trả về kết quả ra màn Asset Management tab All Assets and xem lịch sử add asset in tab History
## View thông tin tổng quan of Assets
**Step 1** : Tại màn hình Asset Management > All , chọn 1 asset bất kỳ bằng theh click ando textlink Asset Name
[a0](https://fptcloud.com/wp-content/uploads/2025/05/a0.jpg)
**Step 2** : Tại màn hình Asset Overview, user can xem the thông tin tổng quan:
[![Alt text](/img/migrated/a1-29caace2.jpg)](/img/migrated/a1-29caace2.jpg)
  * Information chung (General Information):
    * Asset Status: Active/Inactive
    * Language: Hiển thị 1–2 ngôn ngữ chính, hover to xem tối đa 5 ngôn ngữ có tỉ lệ cao nhất and mục “Other”
    * Owner: Người sở hữu asset (User name + email or pipeline CICD)
    * Added By: Người thực hiện add asset (User name + email or pipeline CICD)
    * Added At: Thời gian thực hiện add asset
  * Information về mã nguồn (Language Spinner Chart):
    * Thanh tổng quan (horizontal bar) displayed tỷ lệ % the ngôn ngữ theo thứ tự giảm dần
    * List legend displayed tối đa 5 ngôn ngữ + “Other” (tỷ lệ còn lại)
  * Information scan gần nhất (Issue Overview):
    * Scan Type: Logo + tên scan, click to xem chi tiết theo fromng loại (Code Analysis, Secret Scanning, IaC Scanning)
    * Commit + Scan Time: Hiển thị commit_id and thời gian scan
    * Total Open Issues: Số lượng issues is mở
    * No. Severity: Số lượng issue phân theo mức độ (Critical, High, Medium, Low)
    * Biểu đồ Scanning Times By Day (7 ngày gần nhất)
  * Latest Request: List tối đa 3 request scan gần nhất (Scanned By, Scanned At, kết quả scan)

**Step 3**. Bên cạnh that, tại tab **History** , user can theo dõi lịch sử scan of asset and thực hiện filter theo **Scan type** and **Khoảng thời gian** thực hiện scan.
[![Alt text](/img/migrated/a2-74cfdb07.jpg)](/img/migrated/a2-74cfdb07.jpg)
## View thông tin of issues
### 3.1. Truy cập màn hình Issue List
  * Tại màn hình Asset List, chọn a Asset bất kỳ bằng theh click ando textlink CR Asset Name. System điều hướng to màn hình Asset Detail with tab mặc định là Overview.
  * Chọn tab Issue to xem danh sách issue.

[![Alt text](/img/migrated/a3-04b8efd8.jpg)](/img/migrated/a3-04b8efd8.jpg)
_Note:_ _List mặc định is sắp xếp theo Score giảm dần and mỗi trang displayed tối đa 10 issue._
### 3.2. View thông tin Issue
  * Tại màn hình Issue List, mỗi issue is displayed dưới dạng Issue Info Card with the thông tin:

[![Alt text](/img/migrated/a4-68d75c1d.jpg)](/img/migrated/a4-68d75c1d.jpg)
  * Severity: Critical, High, Medium, Low
  * Vulnerability Type
  * Issue ID + Link Copy: copy link to mở trực tiếp issue in tab mới
  * Vul References: danh sách CWE liên quan (<=3 CWE displayed đầy đủ, >3 displayed “+MORE”)
  * Score: điểm ưu tiên (0–10), làm tròn 1 chữ số thập phân
  * Issue Status: status hiện tại (Open, Ignored, False Positive, Acceptable Risk, …)
  * Note Status: nút thay đổi status (disable if không is phép, link hướng dẫn [here](../fpt-appsec/index.md))
  * Details: mở chi tiết issue
  * Code Block: đoạn code chứa lỗi, highlight dòng lỗi and ±4 dòng context
  * Issue Suggest Summary: gợi ý xử lý
  * Project Link: mở file chứa issue trên Git (tab mới)

### 3.3. Lọc, Tìm kiếm and Sắp xếp Issue
#### 3.3.1. Filter
  * Cho phép lọc theo: Severity, Status, Priority Score (0–10), Security Category, Vulnerability Type, OWASP Top 10, CWE. Người dùng can chọn nhiều điều kiện cùng lúc
  * Khi không chọn filter → displayed toàn bộ issue

[![Alt text](/img/migrated/a5-3147a913.jpg)](/img/migrated/a5-3147a913.jpg)
#### 3.3.2. Search
  * Enter from khóa tìm theo: Issue ID, Issue Name, Issue Suggest Summary
  * Nhấn Enter to tìm kiếm, Clear to xóa and reset danh sách

[![Alt text](/img/migrated/a6-f4cba640.jpg)](/img/migrated/a6-f4cba640.jpg)
#### 3.3.3. Sort
  * Sắp xếp theo: Severity (C→H→M→L), Score, Created Time 
  * Mặc định: Sort theo Score giảm dần

[![Alt text](/img/migrated/a6.1-67856fbc.jpg)](/img/migrated/a6.1-67856fbc.jpg)
### 3.4. View thông tin chi tiết of a issue
**Step 1** : Chọn Details tại a issue card bất kỳ (thuộc Code Analysis/Secret Scanning/IaC Scanning) to mở popup Issue Detail.
[![Alt text](/img/migrated/a7-1c9151c8.jpg)](/img/migrated/a7-1c9151c8.jpg)
**Step 2** : Tại màn hình Issue Detail, user can xem thông tin chi tiết of issue:
  * Information chung (Issue Detail):

[![Alt text](/img/migrated/a8-3bb4ae93.jpg)](/img/migrated/a8-3bb4ae93.jpg)
  * Severity: Mức độ nghiêm trọng of issue (Critical, High, Medium, Low).
  * Vulnerability Type: Loại lỗ hổng/vulnerability of issue.
  * Link (Copy icon): Copy đường dẫn of issue theo ID. Khi paste đường dẫn this lên tab mới, hệ thống mở màn hình Issue List and tự động gán giá trị issue_id ando search bar.
  * Issue Status: Trạng thái hiện tại of issue theo scan version (Opened, Ignored).

  * Information chi tiết:

[![Alt text](/img/migrated/a9-2e85bb93.jpg)](/img/migrated/a9-2e85bb93.jpg)
  * Issue Description: Mô tả chi tiết về issue.
  * Issue Remediation: Hướng dẫn fix issue.
  * References: List link tham chiếu liên quan, click to mở thông tin chi tiết.
  * Issue File: Đường dẫn file chứa issue in Git, click to mở file trực tiếp trên Git (tab mới).
  * Code Block: Hiển thị toàn bộ file code, highlight dòng chứa lỗi and from khóa gây ra lỗi. Dòng lỗi is giữ ở giữa code block when popup is mở.
  * Activity: Lịch sử thay đổi status issue

## Rescan asset
### 4.1. Rescan from màn hình Asset List
**Step 1** : Tại màn hình All Assets, chọn asset or scan type cần quét lại bằng theh ấn ando biểu tượng **⋮** ở góc phải of asset or scan type
[![Alt text](/img/migrated/a10.1-b7dd8b2b.jpg)](/img/migrated/a10.1-b7dd8b2b.jpg)
**Step 2** : Chọn action "Rescan", hệ thống will thực hiện scan lại asset or scan type corresponding and hiện notification _"Rescan requested successfully"_
[![Alt text](/img/migrated/a10-9384c219.jpg)](/img/migrated/a10-9384c219.jpg)
Trường hợp failed, hệ thống displayed notification _"Rescan request failed"_
*Note: Nút **Rescan** will bị vô hiệu hóa for to when quét xong.
### 4.2. Rescan from màn hình Asset Detail
**Step 1** : Tại màn hình Asset List, nhấp ando tên asset to ando chi tiết. 
**Step 2** : Chọn tab Issue → Chọn sub-tab corresponding (Code Analysis, Secret Scanning, IaC Scanning).
[![Alt text](/img/migrated/a11-cbb7ee44.png)](/img/migrated/a11-cbb7ee44.png)
**Step 3** : Nhấn Rescan now ở góc trên bên phải màn hình. Nếu successfully, hệ thống displayed notification: "Rescan requested successfully".
[![Alt text](/img/migrated/a12-beb19e36.jpg)](/img/migrated/a12-beb19e36.jpg)
Nếu failed, hệ thống notification: "Rescan request failed".
*Note: Nút **Rescan** will bị vô hiệu hóa for to when quét xong.
## Disable/Enable Asset
Tính năng **Enable/Disable Asset** for phép user tạm thời vô hiệu hóa or kích hoạt lại a asset in hệ thống.
### 5.1. Disable Asset
**Step 1** : Đi tới menu Workspace → Tab **All Assets** to xem danh sách asset.
**Step 2** : Chọn asset cần disable bằng theh nhấn biểu tượng menu **⋮** ở góc phải asset. Chọn Disable from danh sách action.
[![Alt text](/img/migrated/a13-f93bcda0.jpg)](/img/migrated/a13-f93bcda0.jpg)
**Step 3** : Enter chính xác from khóa **disable** ando ô xác nhận rồi nhấn Confirm. Nếu nhập sai, hệ thống displayed notification lỗi: _"Type correct phrase to confirm your action."_
[![Alt text](/img/migrated/a14-8be1bbf4.jpg)](/img/migrated/a14-8be1bbf4.jpg)
Khi nhập đúng and xác nhận successfully popup will thatng lại, asset tại màn hình Asset List is cập nhật with status asset mới (Disabled) and hệ thống displayed toast message: _"Disable asset successfully."_
### 5.2. Enable Asset
**Step 1** : Chọn Asset cần Enable bằng theh nhấn biểu tượng menu **⋮** ở góc phải asset is ở status **Disabled**. Select **Enable** from danh sách action.
[![Alt text](/img/migrated/a15-c6184f8c.jpg)](/img/migrated/a15-c6184f8c.jpg)
**Step 2** : Nếu you có permission, popup Enable Asset will displayed. Nhấn Confirm to kích hoạt lại asset.
[![Alt text](/img/migrated/a16-1a0df72c.jpg)](/img/migrated/a16-1a0df72c.jpg)
Khi xác nhận enable asset, popup thatng lại, màn hình Asset List is cập nhật with status asset mới (Enabled) and hệ thống displayed toast message: _"Enable asset successfully."_
*Note: Trường hợp không có permission Admin, Team Manager, Asset owner will không enable/disable is asset.
## Delete Asset
Tính năng **Delete Asset** for phép user xóa a asset khỏi tổ chức (org) or team trực tiếp chứa asset that.
**Step 1** : Đi tới menu Workspace → Tab All Assets to xem danh sách asset.
**Step 2** : Chọn Asset cần xóa bằng theh nhấn biểu tượng menu (⋮) ở góc phải asset. Select **Delete** from danh sách action. 
[![Alt text](/img/migrated/a17-62e36a0d.jpg)](/img/migrated/a17-62e36a0d.jpg)
_Note_ : Chỉ Org Admin có permission xóa asset
**Step 3** : Enter chính xác from khóa delete ando ô xác nhận. Nhấn Confirm to tiến hành xóa asset.
[![Alt text](/img/migrated/a18-4175bb2b.jpg)](/img/migrated/a18-4175bb2b.jpg)
Khi xác nhận successfully, popup will thatng lại, asset will bị xóa khỏi org/team hiện tại and displayed toast message: _"Deleted asset successfully."_
