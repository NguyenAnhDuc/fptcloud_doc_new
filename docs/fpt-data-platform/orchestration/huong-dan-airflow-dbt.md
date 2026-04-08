---
id: "huong-dan-airflow-dbt"
title: "Airflow & dbt Guide"
sidebar_label: "Airflow & dbt Guide"
description: "Airflow & dbt Guide"
sidebar_position: 5
---

# Airflow & dbt Guide

**Step 1.** Upload the dbt project to the mount path directory configured for the Orchestration service

![Image](images/huong-dan-airflow-dbt/img-001.png)

![Image](images/huong-dan-airflow-dbt/img-002.png)

**Step 2.** Create a DAG from the template to execute the dbt job

dbt_clickhouse_example.py

Change the path to point to the directory containing the dbt project:

```
DBT_PROJECT_DIR = "/mnt/<WORKSPACE-STORAGE-NAME>/<DBT-PROJECT-DIRECTORY>"  |
```

**Step 3.** Upload the DAG file for the dbt job to the dags directory of the Orchestration service

![Image](images/huong-dan-airflow-dbt/img-003.png)

**Step 4.** Access and log in via the Airflow URL of the Orchestration service to run the DAG

![Image](images/huong-dan-airflow-dbt/img-004.png)

![Image](images/huong-dan-airflow-dbt/img-005.png)
