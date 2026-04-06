---
id: "huong-dan-secert-backends"
title: "Secret Backends Guide"
sidebar_label: "Secret Backends Guide"
description: "Secret Backends Guide"
---

# Secret Backends Guide

**Step 1:** In the `dags` directory at the S3 mount path, place the file read_vault_be.py

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

**Step 2.** Log in to the Airflow UI

  * Open a browser and navigate to the Airflow URL provided.

  * Log in with your username and password (if authentication is required).

**Step 3:** Find the DAG to run

  * On the main interface, use the search bar or scroll to find the DAG named:
test_vault_secret_backend.

**Step 4:** Enable the DAG

  * Toggle the switch next to the DAG name to switch it to "Enabled" if the DAG is currently disabled.

**Step 5.** Trigger the DAG

  * Click the **Trigger DAG** button to run the DAG manually.

**Step 6.** Access the task

  * After the DAG finishes running (or while it is running), click on the DAG name to view the details.

**Step 7:** Open Logs

  * In the task instance interface, select the **Logs** tab to view the execution progress.

**Step 8:** Check the results

  * Review the logs to confirm that the data (variable/secret) was successfully read from Vault or Variable.
