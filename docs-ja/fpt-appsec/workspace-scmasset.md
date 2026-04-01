---
id: "workspace-scmasset"
title: "2. Xem thông tin tổng quan của Assets"
sidebar_label: "2. Xem thông tin tổng quan của Assets"
sidebar_position: "25"
---

# 2. Xem thông tin tổng quan của Assets

## Add Asset
**Org Admin** và **Users của team** có quyền thêm mới asset
**ステップ1:** Sau khi chọn Team, nhấn **Add Asset**
[![anhfsec](/img/migrated/19-b5c086ac.png)](/img/migrated/19-b5c086ac.png)
**ステップ2:** Chọn GitHub/GitLab/GitLab 
[![anhfsec](/img/migrated/20-565cbb9b.png)](/img/migrated/20-565cbb9b.png)
_注意: Pop-up add asset chỉ hiện lên khi loại asset source (GitHub/GitLab/GitLab) được tích hợp tại màn**Integration**. Trường hợp ấn vào 1 souce chưa được tích hợp, màn hình sẽ chuyển sang tab **Integration** của loại source đó _.
**ステップ3:** **project/repo** chứa source cần scan
[![anhfsec](/img/migrated/21-8f69016c.png)](/img/migrated/21-8f69016c.png)
Lúc này, màn hình sẽ hiển thị **Repository group** gồm các "repository" và các **branch** thuộc repo đó. Người dùng có thể search branch mong muốn theo tên của branch
**ステップ4:** Chọn repo và bracnh bạn muốn và ấn **Add**
[![anhfsec](/img/migrated/23-0c6ab90e.png)](/img/migrated/23-0c6ab90e.png)
Sau khi add thành công, hệ thống sẽ tự động scan lần đầu, trả về kết quả ra màn Asset Management tab All Assets và xem lịch sử add asset trong tab History
## Xem thông tin tổng quan của Assets
**ステップ1:** Tại màn hình Asset Management > All , chọn 1 asset bất kỳ bằng cách click vào textlink Asset Name
[a0](https://fptcloud.com/wp-content/uploads/2025/05/a0.jpg)
**ステップ2:** Tại màn hình Asset Overview, người dùng có thể xem các thông tin tổng quan:
[![Alt text](/img/migrated/a1-29caace2.jpg)](/img/migrated/a1-29caace2.jpg)
  * Thông tin chung (General Information):
    * Asset Status: Active/Inactive
    * Language: Hiển thị 1–2 ngôn ngữ chính, hover để xem tối đa 5 ngôn ngữ có tỉ lệ cao nhất và mục “Other”
    * Owner: Người sở hữu asset (User name + email hoặc pipeline CICD)
    * Added By: Người thực hiện add asset (User name + email hoặc pipeline CICD)
    * Added At: Thời gian thực hiện add asset
  * Thông tin về mã nguồn (Language Spinner Chart):
    * Thanh tổng quan (horizontal bar) hiển thị tỷ lệ % các ngôn ngữ theo thứ tự giảm dần
    * Danh sách legend hiển thị tối đa 5 ngôn ngữ + “Other” (tỷ lệ còn lại)
  * Thông tin scan gần nhất (Issue Overview):
    * Scan Type: Logo + tên scan, click để xem chi tiết theo từng loại (Code Analysis, Secret Scanning, IaC Scanning)
    * Commit + Scan Time: Hiển thị commit_id và thời gian scan
    * Total Open Issues: Số lượng issues đang mở
    * No. Severity: Số lượng issue phân theo mức độ (Critical, High, Medium, Low)
    * Biểu đồ Scanning Times By Day (7 ngày gần nhất)
  * Latest Request: Danh sách tối đa 3 request scan gần nhất (Scanned By, Scanned At, kết quả scan)

**Bước 3**. Bên cạnh đó, tại tab **History** , người dùng có thể theo dõi lịch sử scan của asset và thực hiện filter theo **Scan type** và **Khoảng thời gian** thực hiện scan.
[![Alt text](/img/migrated/a2-74cfdb07.jpg)](/img/migrated/a2-74cfdb07.jpg)
## Xem thông tin của issues
### 3.1. Truy cập màn hình Issue List
  * Tại màn hình Asset List, chọn một Asset bất kỳ bằng cách click vào textlink CR Asset Name. Hệ thống điều hướng đến màn hình Asset Detail với tab mặc định là Overview.
  * Chọn tab Issue để xem danh sách issue.

[![Alt text](/img/migrated/a3-04b8efd8.jpg)](/img/migrated/a3-04b8efd8.jpg)
_注意:_ _Danh sách mặc định được sắp xếp theo Score giảm dần và mỗi trang hiển thị tối đa 10 issue._
### 3.2. Xem thông tin Issue
  * Tại màn hình Issue List, mỗi issue được hiển thị dưới dạng Issue Info Card với các thông tin:

[![Alt text](/img/migrated/a4-68d75c1d.jpg)](/img/migrated/a4-68d75c1d.jpg)
  * Severity: Critical, High, Medium, Low
  * Vulnerability Type
  * Issue ID + Link Copy: copy link để mở trực tiếp issue trong tab mới
  * Vul References: danh sách CWE liên quan (<=3 CWE hiển thị đầy đủ, >3 hiển thị “+MORE”)
  * Score: điểm ưu tiên (0–10), làm tròn 1 chữ số thập phân
  * Issue Status: trạng thái hiện tại (Open, Ignored, False Positive, Acceptable Risk, …)
  * Note Status: nút thay đổi trạng thái (disable nếu không được phép, link hướng dẫn [tại đây](../fpt-appsec/index.md))
  * Details: mở chi tiết issue
  * Code Block: đoạn code chứa lỗi, highlight dòng lỗi và ±4 dòng context
  * Issue Suggest Summary: gợi ý xử lý
  * Project Link: mở file chứa issue trên Git (tab mới)

### 3.3. Lọc, Tìm kiếm và Sắp xếp Issue
#### 3.3.1. Filter
  * Cho phép lọc theo: Severity, Status, Priority Score (0–10), Security Category, Vulnerability Type, OWASP Top 10, CWE. Người dùng có thể chọn nhiều điều kiện cùng lúc
  * Khi không chọn filter → hiển thị toàn bộ issue

[![Alt text](/img/migrated/a5-3147a913.jpg)](/img/migrated/a5-3147a913.jpg)
#### 3.3.2. Search
  * Nhập từ khóa tìm theo: Issue ID, Issue Name, Issue Suggest Summary
  * Nhấn Enter để tìm kiếm, Clear để xóa và reset danh sách

[![Alt text](/img/migrated/a6-f4cba640.jpg)](/img/migrated/a6-f4cba640.jpg)
#### 3.3.3. Sort
  * Sắp xếp theo: Severity (C→H→M→L), Score, Created Time 
  * Mặc định: Sort theo Score giảm dần

[![Alt text](/img/migrated/a6.1-67856fbc.jpg)](/img/migrated/a6.1-67856fbc.jpg)
### 3.4. Xem thông tin chi tiết của một issue
**ステップ1:** Chọn Details tại một issue card bất kỳ (thuộc Code Analysis/Secret Scanning/IaC Scanning) để mở popup Issue Detail.
[![Alt text](/img/migrated/a7-1c9151c8.jpg)](/img/migrated/a7-1c9151c8.jpg)
**ステップ2:** Tại màn hình Issue Detail, người dùng có thể xem thông tin chi tiết của issue:
  * Thông tin chung (Issue Detail):

[![Alt text](/img/migrated/a8-3bb4ae93.jpg)](/img/migrated/a8-3bb4ae93.jpg)
  * Severity: Mức độ nghiêm trọng của issue (Critical, High, Medium, Low).
  * Vulnerability Type: Loại lỗ hổng/vulnerability của issue.
  * Link (Copy icon): Copy đường dẫn của issue theo ID. Khi paste đường dẫn này lên tab mới, hệ thống mở màn hình Issue List và tự động gán giá trị issue_id vào search bar.
  * Issue Status: Trạng thái hiện tại của issue theo scan version (Opened, Ignored).

  * Thông tin chi tiết:

[![Alt text](/img/migrated/a9-2e85bb93.jpg)](/img/migrated/a9-2e85bb93.jpg)
  * Issue Description: Mô tả chi tiết về issue.
  * Issue Remediation: Hướng dẫn fix issue.
  * References: Danh sách link tham chiếu liên quan, click để mở thông tin chi tiết.
  * Issue File: Đường dẫn file chứa issue trong Git, click để mở file trực tiếp trên Git (tab mới).
  * Code Block: Hiển thị toàn bộ file code, highlight dòng chứa lỗi và từ khóa gây ra lỗi. Dòng lỗi được giữ ở giữa code block khi popup được mở.
  * Activity: Lịch sử thay đổi trạng thái issue

## Rescan asset
### 4.1. Rescan từ màn hình Asset List
**ステップ1:** Tại màn hình All Assets, chọn asset hoặc scan type cần quét lại bằng cách ấn vào biểu tượng **⋮** ở góc phải của asset hoặc scan type
[![Alt text](/img/migrated/a10.1-b7dd8b2b.jpg)](/img/migrated/a10.1-b7dd8b2b.jpg)
**ステップ2:** Chọn action "Rescan", hệ thống sẽ thực hiện scan lại asset hoặc scan type tương ứng và hiện thông báo _"Rescan requested successfully"_
[![Alt text](/img/migrated/a10-9384c219.jpg)](/img/migrated/a10-9384c219.jpg)
Trường hợp thất bại, hệ thống hiển thị thông báo _"Rescan request failed"_
*Note: Nút **Rescan** sẽ bị vô hiệu hóa cho đến khi quét xong.
### 4.2. Rescan từ màn hình Asset Detail
**ステップ1:** Tại màn hình Asset List, nhấp vào tên asset để vào chi tiết. 
**ステップ2:** Chọn tab Issue → Chọn sub-tab tương ứng (Code Analysis, Secret Scanning, IaC Scanning).
[![Alt text](/img/migrated/a11-cbb7ee44.png)](/img/migrated/a11-cbb7ee44.png)
**ステップ3:** Nhấn Rescan now ở góc trên bên phải màn hình. Nếu thành công, hệ thống hiển thị thông báo: "Rescan requested successfully".
[![Alt text](/img/migrated/a12-beb19e36.jpg)](/img/migrated/a12-beb19e36.jpg)
Nếu thất bại, hệ thống thông báo: "Rescan request failed".
*Note: Nút **Rescan** sẽ bị vô hiệu hóa cho đến khi quét xong.
## Disable/Enable Asset
Tính năng **Enable/Disable Asset** cho phép người dùng tạm thời vô hiệu hóa hoặc kích hoạt lại một asset trong hệ thống.
### 5.1. Disable Asset
**ステップ1:** Đi tới menu Workspace → Tab **All Assets** để xem danh sách asset.
**ステップ2:** Chọn asset cần disable bằng cách nhấn biểu tượng menu **⋮** ở góc phải asset. Chọn Disable từ danh sách action.
[![Alt text](/img/migrated/a13-f93bcda0.jpg)](/img/migrated/a13-f93bcda0.jpg)
**ステップ3:** Nhập chính xác từ khóa **disable** vào ô xác nhận rồi nhấn Confirm. Nếu nhập sai, hệ thống hiển thị thông báo lỗi: _"Type correct phrase to confirm your action."_
[![Alt text](/img/migrated/a14-8be1bbf4.jpg)](/img/migrated/a14-8be1bbf4.jpg)
Khi nhập đúng và xác nhận thành công popup sẽ đóng lại, asset tại màn hình Asset List được cập nhật với trạng thái asset mới (Disabled) và hệ thống hiển thị toast message: _"Disable asset successfully."_
### 5.2. Enable Asset
**ステップ1:** Chọn Asset cần Enable bằng cách nhấn biểu tượng menu **⋮** ở góc phải asset đang ở trạng thái **Disabled**. **Enable** từ danh sách action.
[![Alt text](/img/migrated/a15-c6184f8c.jpg)](/img/migrated/a15-c6184f8c.jpg)
**ステップ2:** Nếu bạn có quyền, popup Enable Asset sẽ hiển thị. Nhấn Confirm để kích hoạt lại asset.
[![Alt text](/img/migrated/a16-1a0df72c.jpg)](/img/migrated/a16-1a0df72c.jpg)
Khi xác nhận enable asset, popup đóng lại, màn hình Asset List được cập nhật với trạng thái asset mới (Enabled) và hệ thống hiển thị toast message: _"Enable asset successfully."_
*Note: Trường hợp không có quyền Admin, Team Manager, Asset owner sẽ không enable/disable được asset.
## Delete Asset
Tính năng **Delete Asset** cho phép người dùng xóa một asset khỏi tổ chức (org) hoặc team trực tiếp chứa asset đó.
**ステップ1:** Đi tới menu Workspace → Tab All Assets để xem danh sách asset.
**ステップ2:** Chọn Asset cần xóa bằng cách nhấn biểu tượng menu (⋮) ở góc phải asset. **Delete** từ danh sách action. 
[![Alt text](/img/migrated/a17-62e36a0d.jpg)](/img/migrated/a17-62e36a0d.jpg)
_Note_ : Chỉ Org Admin có quyền xóa asset
**ステップ3:** Nhập chính xác từ khóa delete vào ô xác nhận. Nhấn Confirm để tiến hành xóa asset.
[![Alt text](/img/migrated/a18-4175bb2b.jpg)](/img/migrated/a18-4175bb2b.jpg)
Khi xác nhận thành công, popup sẽ đóng lại, asset sẽ bị xóa khỏi org/team hiện tại và hiển thị toast message: _"Deleted asset successfully."_
