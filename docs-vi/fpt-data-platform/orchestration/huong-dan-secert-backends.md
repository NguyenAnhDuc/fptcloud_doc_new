---
id: "huong-dan-secert-backends"
title: "Hướng dẫn Secret backends"
sidebar_label: "Hướng dẫn Secret backends"
description: "Hướng dẫn Secret backends"
sidebar_position: 8
---

# Hướng dẫn Secret backends

**Bước 1:** Trong thư mục `dags` theo mount S3 path có file read_vault_be.py

```
from airflow import DAG
 from airflow.operators.python import PythonOperator
 from airflow.models import Variable
 from datetime import datetime
 from pprint import pprint

 def read_secret():
 secret = Variable.get("myvar")
 pprint(Variable)
 print(f"Secret from Vault: {secret}")

 with DAG(
 dag_id="test_vault_secret_backend",
 start_date=datetime(2023, 1, 1),
 schedule_interval=None,
 catchup=False
 ) as dag:

 read_secret_task = PythonOperator(
 task_id="read_secret",
 python_callable=read_secret
 )
```

**Bước 2.** Đăng nhập vào Airflow UI

 * Mở trình duyệt và truy cập URL Airflow đã được cung cấp.

 * Đăng nhập bằng username và password (nếu có yêu cầu xác thực).

**Bước 3:** Tìm DAG cần chạy

 * Tại giao diện chính, sử dụng thanh tìm kiếm hoặc cuộn để tìm DAG có tên:
test_vault_secret_backend.

**Bước 4:** Bật DAG

 * Bật công tắc (toggle) bên cạnh tên DAG để chuyển sang trạng thái "Enabled" nếu DAG đang bị tắt.

**Bước 5.** Khởi chạy DAG

 * Nhấn nút Trigger DAG để chạy DAG thủ công.

**Bước 6.** Truy cập task

 * Sau khi DAG chạy xong (hoặc đang chạy), click vào tên DAG để vào chi tiết.

**Bước 7:** Mở Logs

 * Trong giao diện task instance, chọn tab Logs để xem quá trình thực thi.

**Bước 8:** Kiểm tra kết quả

 * Kiểm tra log để xác nhận dữ liệu (biến/secret) đã được đọc thành công từ Vault hoặc Variable.
