---
id: "huong-dan-airflow-dbt"
title: "Airflow と dbt ガイド"
sidebar_label: "Airflow と dbt ガイド"
description: "Airflow と dbt ガイド"
---

# Airflow と dbt ガイド

**ステップ 1.** dbt プロジェクトを、Orchestration service に設定したマウントパスのディレクトリにアップロードします。

![画像](images/huong-dan-airflow-dbt/img-001.png)

![画像](images/huong-dan-airflow-dbt/img-002.png)

**ステップ 2.** テンプレートに従って DAG を作成し、dbt ジョブを実行します。

dbt_clickhouse_example.py

dbt プロジェクトが含まれるディレクトリへのパスを変更します。

```
DBT_PROJECT_DIR = "/mnt/<WORKSPACE-STORAGE-NAME>/<DBT-PROJECT-DIRECTORY>"  |
```

**ステップ 3.** dbt ジョブを実行する DAG ファイルを、Orchestration サービスの dags ディレクトリにアップロードします。

![画像](images/huong-dan-airflow-dbt/img-003.png)

**ステップ 4.** Orchestration service の Airflow URL にアクセスしてログインし、DAG を実行します。

![画像](images/huong-dan-airflow-dbt/img-004.png)

![画像](images/huong-dan-airflow-dbt/img-005.png)
