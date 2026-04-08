---
id: "standard-test-criteria"
title: "Standard - Tiêu chí Kiểm thử"
description: "[![Alt text](/img/migrated/Test-criteria-3e870caf.png)](/img/migrated/Test-criteria-3e870caf.png)"
sidebar_label: "Standard - Tiêu chí Kiểm thử"
sidebar_position: 13
---

# Standard - Tiêu chí Kiểm thử

[![Alt text](/img/migrated/Test-criteria-3e870caf.png)](/img/migrated/Test-criteria-3e870caf.png)
  1. Nhấp nút **Add & update**
  2. Cửa sổ **Tasks** xuất hiện. Chọn loại task:
     * Text similarity: Đo các chỉ số độ tương đồng giữa đầu ra của mô hình và văn bản tham chiếu.
  3. Nhấp
  4. Chọn một hoặc nhiều metrics
  5. Nhấp **Update** để áp dụng thay đổi

Các metrics sau của **Text similarity** có sẵn:  
| Tiêu chí kiểm thử / Metric  | Cách kiểm thử  | Phù hợp nhất cho  |  
| --- | --- | --- |  
| BLEU  | Đo mức độ chính xác đầu ra của mô hình khớp với văn bản tham chiếu bằng cách sử dụng n-gram overlap.  | Đánh giá dịch thuật và độ tương đồng văn bản ngắn.  |  
| Fuzzy Match  | Đo mức độ đầu ra của mô hình giống với văn bản tham chiếu, cho phép có sự khác biệt nhỏ về từ ngữ hoặc thứ tự.  | Kiểm tra độ chính xác gần đúng.  |  
| ROUGE-1  | Đo mức độ trùng lặp unigram (từ đơn) giữa đầu ra của mô hình và văn bản tham chiếu.  | Các nhiệm vụ tóm tắt ngắn và tạo văn bản.  |  
| ROUGE-2  | Đo mức độ trùng lặp bigram (chuỗi hai từ) giữa đầu ra của mô hình và văn bản tham chiếu.  | Đánh giá độ chính xác ngữ cảnh.  |  
| ROUGE-L  | Đo chuỗi con chung dài nhất (LCS) giữa đầu ra của mô hình và văn bản tham chiếu để nắm bắt độ trôi chảy và độ tương đồng về thứ tự từ.  | Đánh giá văn bản dài khi cấu trúc quan trọng.  |  
| ROUGE-LSUM  | Đo độ tương đồng dựa trên LCS trên nhiều câu, phù hợp để đánh giá các bản tóm tắt dài hơn.  | Các nhiệm vụ tóm tắt.  |
