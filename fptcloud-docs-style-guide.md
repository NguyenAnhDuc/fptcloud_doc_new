# FPT Cloud Documentation Style Guide

> Rule file cho AI convert/viết lại tài liệu FPT Cloud.
> Source: FPT Cloud Voice Chart + UX Text Patterns + Content Scorecard
> Based on DocSmith PRC-010A UX Content Standards

---

## 1. Product Information

- **Product Name:** FPT Smart Cloud Documentation
- **Target Audience:** Cloud Admin, DevOps Engineer, IT Manager, Finance/Billing team
- **Language:** Tiếng Việt (primary), English, Japanese

---

## 2. Product Principles (3 nguyên tắc cốt lõi)

| Nguyên tắc | Định nghĩa |
|---|---|
| **Rõ ràng** | Hướng dẫn rõ ràng để người đọc tự thực hiện được mà không cần gọi support |
| **Thực dụng** | Tập trung vào giá trị thực tế — giải thích WHY trước HOW, liên hệ lợi ích kinh doanh |
| **Nhất quán** | Cùng style, cùng pattern xuyên suốt toàn bộ docs — thuật ngữ, cấu trúc, tone đồng nhất |

---

## 3. Voice Chart Matrix

### Concepts
- **Rõ ràng:** Self-service, tự thực hiện, giảm dependency vào support
- **Thực dụng:** ROI, tiết kiệm chi phí, tăng bảo mật, giảm rủi ro
- **Nhất quán:** Cùng mental model cho tất cả modules, familiar experience

### Vocabulary
- **Rõ ràng:** Dùng từ cụ thể, ngắn gọn. `Chọn [Action]` thay `Thực hiện thao tác [Action]`
- **Thực dụng:** Gắn business value: `giảm chi phí X%` thay `tối ưu hóa tài nguyên`
- **Nhất quán:** Thuật ngữ kỹ thuật EN giữ nguyên, không dịch

### Verbosity
- **Rõ ràng:** Terse — mỗi step 1 câu, tối đa 2 dòng
- **Thực dụng:** Moderate — intro 2-3 câu giải thích WHY, không dài hơn
- **Nhất quán:** Prerequisites thorough, steps terse, callouts 1-2 câu

### Grammar
- **Rõ ràng:** Active voice, mệnh lệnh: `Nhấn [Button]` không `Nút [Button] được nhấn`
- **Thực dụng:** Ngôi thứ 2: `bạn chọn`, `bạn có thể`. Thì hiện tại
- **Nhất quán:** Cùng cấu trúc câu cho tất cả procedure steps trong toàn bộ docs

### Punctuation
- **Rõ ràng:** Dấu chấm cuối mỗi step. Không dấu chấm than
- **Thực dụng:** Dấu gạch ngang (—) cho giải thích inline ngắn
- **Nhất quán:** Bullet lists không dấu chấm phẩy cuối. Heading sentence case

### Capitalization
- **Rõ ràng:** Tên tính năng/sản phẩm viết hoa theo UI: `Cloud Advisor`, `Security Group`
- **Thực dụng:** Heading sentence case: `Gắn tag khi tạo resource`
- **Nhất quán:** Không ALL CAPS. Không viết thường tên sản phẩm

---

## 4. Vocabulary Guide

### Thuật ngữ kỹ thuật — GIỮ NGUYÊN TIẾNG ANH (không dịch)

| Từ |
|---|
| tag |
| tenant |
| Instance |
| VPC |
| Subnet |
| Floating IP |
| Snapshot |
| Load Balancer |
| Security Group |
| API |
| SDK |
| CLI |
| Dashboard |
| Webhook |
| Token |
| Organization Code |
| Soft Affinity |
| Soft Anti-Affinity |
| SSO |
| RAM |
| CPU |
| GPU |
| bucket |

### Hành động — DÙNG TIẾNG VIỆT

```
Tạo (Create), Xóa (Delete), Chỉnh sửa (Edit), Lưu (Save)
```

### Tên sản phẩm FPT Cloud — GIỮ NGUYÊN CHÍNH XÁC

| Tên sản phẩm |
|---|
| FPT Cloud Server |
| FPT Cloud Desktop |
| FPT Cloud Portal |
| FPT Storage |
| FPT Object Storage |
| FPT Kubernetes Engine |
| FPT Container Registry |
| FPT Kubernetes Engine with GPU |
| FPT Monitoring |
| FPT Cloud Backup & DR |
| FPT DevSecOps Services |
| FPT Database Engine |
| FPT Data Platform |
| FPT Security Platform |
| FPT Cloud WAPPLES |
| FPT Cloud WAF |
| FPT Cloud VA |
| FPT Key Vault |
| FPT Jenkins CI |
| FPT ArgoCD |

---

## 5. Voice vs Tone

Voice nhất quán toàn bộ docs. Tone thay đổi theo ngữ cảnh:

| Ngữ cảnh | Tone | Ví dụ |
|---|---|---|
| Onboarding | Ấm, khuyến khích | `Hãy bắt đầu bằng việc [action] để [benefit].` |
| Error Messages | Bình tĩnh, hướng giải pháp | `Không thể [action]. Kiểm tra [cause] hoặc liên hệ Admin.` |
| Success | Ngắn gọn, tích cực | `[Object] đã được [action] thành công.` |
| Technical Reference | Chính xác, trung lập | `[Concept] gồm [component A] và [component B].` |
| Warnings | Trực tiếp, rõ hậu quả | `Khi [action], [consequence]. Hành động không thể hoàn tác.` |

> **Quick Reference:** FPT Cloud docs nói như một đồng nghiệp kỹ thuật giỏi — rõ ràng, thực tế, không vòng vo — giúp bạn tự vận hành cloud mà không cần gọi support.

---

## 6. UX Text Patterns

### 6.1 Page Titles
- Sentence case: `[Hành động] [Object]` — không ALL CAPS
- Max 60 ký tự
- Guide → mệnh lệnh: `Tạo [resource] mới` | Concept → noun phrase: `Tổng quan [feature]`
- Không dấu chấm, không dấu hai chấm cuối
- ✅ `Khởi tạo resource mới` | `Tổng quan về [feature]`
- ❌ `HƯỚNG DẪN KHỞI TẠO RESOURCE MỚI.` | `[Feature] là gì?`

### 6.2 Section Headings
- Sentence case, dùng H2-H3 (tránh H4+)
- Parallel structure: cùng cấp heading phải cùng dạng ngữ pháp
- Không đánh số trong heading — hierarchy đã thể hiện thứ tự
- ✅ `## Gắn [tag] khi tạo [resource]` + `## Quản lý [tag] sau khi tạo`
- ❌ `## 1. Tạo` + `## BƯỚC 2: MANAGE`

### 6.3 Introductions
- 2-3 câu: `[Feature] giúp bạn [benefit]. Khi [context], [feature] cho phép bạn [action].`
- Lead với user benefit, không phải mô tả hệ thống
- Ngôi thứ 2 (`bạn`)
- ✅ `[Feature] giúp bạn [benefit cụ thể] — đặc biệt khi [use case].`
- ❌ `[Feature] là tính năng cung cấp các gợi ý và khuyến nghị để...`

### 6.4 Prerequisites
- Luôn có section riêng nếu cần điều kiện trước
- Format checklist: `✅ Có tài khoản FPT Cloud` | `✅ Role Admin hoặc Editor`
- Link đến hướng dẫn setup nếu chưa đáp ứng

### 6.5 Procedures (Steps)
- Numbered list, 1 action / 1 step
- Mở đầu bằng động từ: `Chọn`, `Nhấn`, `Điền`, `Kiểm tra`
- Max 10 steps — nếu dài hơn, tách sub-procedure
- Verification step cuối: `[Object] xuất hiện trong danh sách.`
- Screenshot đặt ngay sau step liên quan, có alt text
- ✅
  ```
  1. Chọn **[Menu]** → **[Action]**.
  2. Điền [field A] và [field B].
  3. Nhấn **[Button]**.
  [Object] mới hiển thị trong danh sách.
  ```
- ❌ `1. Vào menu bên trái, tìm mục X, click vào, sau đó tìm nút Y và click.`

### 6.6 Callouts / Admonitions
- 💡 **Tip:** Mẹo tối ưu, best practice — dùng khi có cách làm tốt hơn
- 📝 **Note:** Thông tin bổ sung, không bắt buộc — dùng khi cần làm rõ
- ⚠️ **Warning:** Hành động có rủi ro — dùng khi có hậu quả tiềm ẩn
- 🚨 **Danger:** Không thể hoàn tác — dùng cho xóa, format, thay đổi vĩnh viễn
- Max 1-2 callout / section. Mỗi callout 1-2 câu

### 6.7 Button / Action Labels
- Động từ mệnh lệnh ngắn: `Create`, `Delete`, `Save`, `Apply`, `Refresh`
- Kết hợp object nếu cần: `Create [Object]`, `Delete [Object]`
- ❌ `Click here`, `Press this button`, `Nhấn vào đây`

### 6.8 Status Messages
- **Success:** `[Object] đã được [action] thành công.`
- **Error:** `Không thể [action]. Kiểm tra [nguyên nhân] hoặc liên hệ Admin.`
- **Loading:** `Đang xử lý...` — không `Vui lòng chờ`
- Luôn hướng giải pháp trong error message

### 6.9 Empty States
- Template: `Chưa có [object] nào. Chọn [Action] để bắt đầu [benefit].`
- ❌ `No data`, `Empty`, `Không có dữ liệu`

### 6.10 Cross-References
- Link text mô tả: `Xem [Hướng dẫn action]` — không `Click here`
- Inline khi relevant + section `Bước tiếp theo` ở cuối page
- Tránh circular reference, không link cùng page 2 lần/section

### 6.11 Screenshots
- Đặt ngay sau step minh họa
- Alt text mô tả nội dung: `![Hộp thoại [Action] với trường [Field A] và [Field B]]`
- Format: PNG cho static, GIF cho multi-step flow
- Filename mô tả: `[action]-[object]-form.png` — không `screenshot1.png`

### 6.12 UI References
- Bold cho button/menu: `chọn **[Button Name]**`
- Match UI chính xác — không paraphrase label trên giao diện
- Navigation path dùng →: `**[Menu] → [Sub-menu] → [Action]**`

### 6.13 Code Examples
- Luôn có language tag (`bash`, `json`, `python`)
- Copy-paste được (runnable), không pseudocode
- Placeholder SCREAMING_SNAKE_CASE: `YOUR_API_KEY`, `YOUR_TOKEN`
- Không bao giờ dùng token/key thật
- Max 20 dòng/block — tách nếu dài hơn

### 6.14 Breadcrumb / Navigation
- Format: `[Menu] → [Sub-menu] → [Action]`
- Dùng bold cho tên menu/button

---

## 7. Content Scorecard (10 tiêu chí)

Dùng để kiểm tra chất lượng cuối cùng trước khi publish.

**Thang đánh giá:** Mỗi tiêu chí 0–2 điểm. Tổng tối đa 20.
- 0–8: **Poor** — cần viết lại
- 9–13: **Fair** — cần chỉnh sửa lớn
- 14–17: **Good** — publish được nhưng nên tối ưu
- 18–20: **Excellent** — sẵn sàng phát hành

### Rõ ràng

**1. Đặt ngữ cảnh nhanh**
- ✅ Có câu mở đầu trả lời "tính năng giúp gì" trước khi vào bước
- ❌ Nhảy ngay vào bước, không nêu bối cảnh hoặc chỉ copy mô tả hệ thống
- Fix: Viết lại intro: `[Tính năng] giúp bạn [kết quả]` + ví dụ ngắn về tác động

**2. Cấu trúc hướng dẫn chuẩn**
- ✅ Có subsections rõ (Overview, Prerequisites, Steps) đúng template UX patterns
- ❌ Dồn nhiều hành động vào 1 step hoặc thiếu numbering
- Fix: Tách bước, thêm heading theo template, chuyển danh sách dài thành numbered list

**3. Ngôn ngữ chủ động, dùng "bạn"**
- ✅ `Bạn chọn`, `Nhấn`, `Bật`; tránh `được thực hiện`
- ❌ Dùng bị động hoặc ngôi thứ ba, câu cầu khiến lịch sự quá mức
- Fix: Chuyển động từ về chủ động, thay `vui lòng` bằng mệnh lệnh trực tiếp

**4. Visual hỗ trợ nội dung**
- ✅ Ảnh minh họa Dashboard, callout cho tips/cảnh báo
- ❌ Ảnh không liên quan, alt text thiếu hoặc không có callout cho thông tin quan trọng
- Fix: Thay ảnh sát với UI hiện tại, bổ sung alt text/callout

### Thực dụng

**5. Giải thích WHY trước HOW**
- ✅ Câu dẫn nêu lợi ích (giảm chi phí, tăng bảo mật) trước danh sách bước
- ❌ Chỉ mô tả thao tác mà không nêu lý do
- Fix: Thêm câu `Điều này giúp bạn...` hoặc gọi thẳng tác động tới SLA/chi phí

**6. Gợi ý hành động tiếp theo**
- ✅ Có `Tiếp theo`/`Xem thêm` tới tác vụ liên quan
- ❌ Kết thúc đột ngột, không hướng dẫn follow-up
- Fix: Thêm liên kết docs liên quan hoặc checklist sau khi hoàn thành

**7. Callout giá trị hoặc rủi ro**
- ✅ Ít nhất một callout khi có thông tin đáng chú ý
- ❌ Nhắc lợi ích/rủi ro bằng text thường khiến người đọc bỏ qua
- Fix: Chuyển nội dung quan trọng vào callout với emoji chuẩn

### Nhất quán

**8. Thuật ngữ & Capitalization chuẩn**
- ✅ `Cloud Advisor`, `Security Group` được viết đúng
- ❌ Dịch hết sang tiếng Việt hoặc viết thường/hoa tùy hứng
- Fix: Tra Vocabulary Guide, cập nhật toàn bài bằng find/replace

**9. Punctuation & định dạng đồng bộ**
- ✅ Steps kết thúc bằng dấu chấm, bullet đồng dạng
- ❌ Trộn bullet với paragraph, thiếu dấu chấm, heading ALL CAPS
- Fix: Rà soát Markdown, dùng linter hoặc preview để sửa

**10. Liên kết & reference chính xác**
- ✅ Liên kết relative hoạt động và có breadcrumb nhỏ
- ❌ URL tuyệt đối sai, anchor dẫn tới trang 404
- Fix: Test link trong dev server, dùng relative path chuẩn Docusaurus

---

## 8. Document Template Structure

Cấu trúc chuẩn cho mỗi bài hướng dẫn:

```markdown
# [Hành động] [Object]

[2-3 câu intro: benefit → context → action. Ngôi thứ 2, active voice.]

## Điều kiện tiên quyết

- ✅ [Điều kiện 1]
- ✅ [Điều kiện 2]

## [Tên tác vụ chính]

[1 câu WHY — lý do thực hiện tác vụ này.]

1. Chọn **[Menu] → [Sub-menu]**.
2. Nhấn **[Button]**.
3. Điền [field A] và [field B].
4. Nhấn **Save**.

[Object] mới hiển thị trong danh sách.

> 💡 **Tip:** [Mẹo tối ưu ngắn gọn.]

## Bước tiếp theo

- [Xem hướng dẫn liên quan 1](../link)
- [Xem hướng dẫn liên quan 2](../link)
```
