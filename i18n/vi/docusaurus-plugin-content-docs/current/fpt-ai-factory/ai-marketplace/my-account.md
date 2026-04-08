---
id: "my-account"
title: "Tài khoản của tôi"
description: "Quản lý API key và xem thống kê sử dụng trong AI Marketplace."
sidebar_label: "Tài khoản của tôi"
sidebar_position: 9
---

# Tài khoản của tôi

## Cách xem các API key của bạn?

Để kiểm tra các API key của bạn, làm theo hướng dẫn bên dưới.

:::note
Đảm bảo tài khoản của bạn đã đăng ký gói trả phí. Nếu chưa có, vui lòng [liên hệ chúng tôi](/vi/docs/fpt-ai-factory/ai-marketplace/contact-us).
:::

1. Nhấp vào biểu tượng tài khoản trong header.

[![Biểu tượng tài khoản trong thanh điều hướng header](/img/migrated/0-fb82a997.png)](/img/migrated/0-fb82a997.png)

2. Chọn **My Account**.

Danh sách API key của bạn sẽ hiển thị trên trang **My API Keys**.

[![Trang My API Keys liệt kê tất cả API key cùng trạng thái](/img/migrated/my-api-key-02299856.png)](/img/migrated/my-api-key-02299856.png)

---

## Cách tạo API key mới?

1. Vào trang **My API Keys** và nhấp nút **Create New API Key**.
2. Nhập **Tên** cho key.
3. Chọn các mô hình bạn muốn truy cập.
4. Nhấp nút **Create** để tạo API key mới.

[![Pop-up tạo API key hiển thị ô nhập tên và lựa chọn mô hình](/img/migrated/create-my-api-key-ac675818.png)](/img/migrated/create-my-api-key-ac675818.png)

Sau khi API key mới được tạo, sao chép hoặc lưu key của bạn.

:::warning
API key chỉ hiển thị và có thể sao chép một lần duy nhất khi tạo. Hãy lưu key ở nơi an toàn và không chia sẻ với người khác hoặc để lộ trong trình duyệt hay code phía client. Bất kỳ ai có API key của bạn đều có thể gửi yêu cầu thay mặt bạn. AI Marketplace có thể tự động vô hiệu hóa bất kỳ API key nào bị phát hiện rò rỉ công khai.
:::

Nhấp nút **Done** để hoàn tất.

[![Nút Done xác nhận việc tạo API key](/img/migrated/done-7329bd74.png)](/img/migrated/done-7329bd74.png)

---

## Cách chỉnh sửa API key hiện có?

Bạn có thể chỉnh sửa **Tên** và **Quyền** của một API key.

1. Vào trang **My API Keys** và nhấp **Action** bên cạnh API key bạn muốn chỉnh sửa.
2. Chọn **Edit** từ menu dropdown.
3. Chỉnh sửa thông tin của bạn.
4. Nhấp **Save** để lưu các thay đổi.

---

## Cách thu hồi API key?

:::warning
Sau khi thu hồi, API key sẽ bị vô hiệu hóa ngay lập tức. Các yêu cầu API sử dụng key này sẽ bị từ chối, có thể khiến các hệ thống vẫn đang phụ thuộc vào key đó bị gián đoạn.
:::

1. Vào trang **My API Keys** và nhấp **Action** bên cạnh API key bạn muốn thu hồi.
2. Chọn **Revoke** từ menu dropdown.
3. Nhấp **Revoke key** để xác nhận và xóa API key.

[![Hộp thoại xác nhận thu hồi API key](/img/migrated/revoke-55f19ebc.png)](/img/migrated/revoke-55f19ebc.png)

---

## Cách kiểm tra mức sử dụng của bạn?

Để kiểm tra mức sử dụng bao gồm input token, output token và tổng mức sử dụng cho từng mô hình và API key, vào **My Account > My Usage**.

[![Trang My Usage hiển thị mức tiêu thụ token theo từng mô hình và API key](/img/migrated/my-usage-9f9ef039.png)](/img/migrated/my-usage-9f9ef039.png)
