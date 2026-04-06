---
id: "dbt"
title: "Chạy dbt project trên JupyterHub"
sidebar_label: "DBT"
description: "DBT"
---

# Chạy dbt project trên JupyterHub

Để chạy dbt project trên môi trường notebooks, thực hiện theo các bước sau:

**Bước 1.** Khởi tạo project dbt GIT với thư mục thuộc Workspace của người dùng trên Jupyterhub (Tham khảo tài liệu Orchestration service mục 5.3.3)

Để chạy với Spark session, tệp profiles.yml trong dbt project cấu hình như sau:

```
<​PROJECT-NAME>:

 target: dev

 outputs:

 dev:

 type: spark

 method: session

 schema: <​SCHEMA-NAME>

 database: <​DATABASE-NAME>

 catalog: iceberg

 host: NA

 server_side_parameters:

 spark.jars: /opt/spark/jars/iceberg-spark-runtime-3.5_2.12-1.5.0.jar,/opt/spark/jars/iceberg-aws-bundle-1.5.0.jar,/opt/spark/jars/hadoop-auth-3.3.4.jar,/opt/spark/jars/hadoop-aws-3.3.4.jar,/opt/spark/jars/nessie-spark-extensions-3.5_2.12-0.104.2.jar,/opt/spark/jars/hadoop-common-3.3.4.jar,/opt/spark/jars/aws-java-sdk-bundle-1.12.787.jar,/opt/spark/jars/openmetadata-spark-agent-1.0-beta.jar
```

Bước 2: Trong giao diện làm việc với Jupyter Notebooks, chọn **Other** /**Terminal**

![Hình ảnh](images/dbt/img-001.png)

Bước 3: Tại giao diện Terminal, truy cập đến thư mục chứa nội dung dbt project và sử dụng dbt command để thực thi

![Hình ảnh](images/dbt/img-002.png)
