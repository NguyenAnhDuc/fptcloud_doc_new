# FPT Cloud Documentation Project

## Module Review & Sync Workflow

Khi được yêu cầu review/sync module, thực hiện theo quy trình sau:

### Modules đã xử lý (skip):
- `tagging`
- `cloud-server`

### Quy trình 6 bước:

**Bước 1 — Khảo sát (KHÔNG chỉnh sửa)**
- Tìm tất cả module chưa xử lý trong docs-vi/, docs/, docs-ja/
- Map từng page vi <-> en <-> ja
- Báo cáo: page nào thiếu bản dịch, page nào đủ
- Báo cáo xong mới tiếp tục

**Bước 2 — Cleanup content (tất cả ngôn ngữ)**
- Xóa emoji icon (thay bằng Docusaurus admonition nếu mang ý nghĩa, xóa nếu trang trí)
- Fix lỗi ảnh: broken link (báo cáo), thiếu alt text (thêm), duplicate path (chuẩn hóa)

**Bước 3 — Chuẩn hóa bản vi theo style guide**
- Sửa title, sidebar_label theo convention
- Sửa chính tả, thuật ngữ, format theo `fptcloud-docs-style-guide.md`
- Giữ nguyên ý nghĩa, không thêm bớt thông tin
- Giữ nguyên đường dẫn ảnh

**Bước 4 — Đồng bộ en và ja với vi đã chuẩn hóa**
- So sánh toàn bộ nội dung với bản vi
- Sửa title, frontmatter, dịch sai/thiếu/thừa, chính tả, grammar, format

**Bước 5 — Tạo bản dịch còn thiếu**
- Dịch từ bản vi đã chuẩn hóa
- Áp dụng style guide ngay khi tạo
- Đúng cấu trúc Docusaurus

**Bước 6 — Hình ảnh**
- KHÔNG di chuyển, đổi tên, duplicate, xóa file ảnh
- Tất cả bản dịch dùng chung đường dẫn ảnh gốc
- Chỉ thêm/sửa alt text hoặc caption

### Constraints:
- Không xóa, rename, move file
- Bám sát ý nghĩa gốc — không tự ý thêm thông tin
- Thuật ngữ kỹ thuật giữ nguyên theo style guide
- Xử lý từng module, báo cáo xong module này mới sang tiếp

### Báo cáo sau mỗi module:
- Danh sách file đã sửa (kèm tóm tắt thay đổi)
- Danh sách file mới tạo
- Danh sách ảnh broken link (chỉ báo cáo)
- Điểm cần confirm

### Style Guide:
- Đọc `fptcloud-docs-style-guide.md` tại root repo TRƯỚC KHI làm bất cứ điều gì
- Docs structure: `docs-vi/` (Vietnamese), `docs/` (English), `docs-ja/` (Japanese)
