---
id: "huong-dan-airflow-dbt"
title: "Hướng dẫn Airflow & dbt"
sidebar_label: "Hướng dẫn Airflow & dbt"
description: "Hướng dẫn Airflow & dbt"
---

# Hướng dẫn Airflow & dbt

**Bước 1.** Upload project dbt vào thư mục mount path đã cấu hình cho Orchestration service

![Hình ảnh, Hình ảnh](images/huong-dan-airflow-dbt/img-001.png)

![Hình ảnh, Hình ảnh](images/huong-dan-airflow-dbt/img-002.png)

**Bước 2.** Tạo DAG theo mẫu để thực hiện job dbt

dbt_clickhouse_example.py

Thay đổi đường dẫn trỏ đến thư mục chứa project dbt:

```
DBT_PROJECT_DIR = "/mnt/<WORKSPACE-STORAGE-NAME>/<DBT-PROJECT-DIRECTORY>" |
```

**Bước 3.** Upload file DAG chạy job dbt vào thư mục dags tại dịch vụ Orchestration

![Hình ảnh, Hình ảnh](images/huong-dan-airflow-dbt/img-003.png)

**Bước 4.** Truy cập, đăng nhập theo đường dẫn Airflow của dịch vụ Orchestration Service để tiến hành chạy DAG

![Hình ảnh, Hình ảnh](images/huong-dan-airflow-dbt/img-004.png)

![Hình ảnh, Hình ảnh](images/huong-dan-airflow-dbt/img-005.png)
