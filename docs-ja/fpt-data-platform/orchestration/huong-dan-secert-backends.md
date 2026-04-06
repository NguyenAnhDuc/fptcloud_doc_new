---
id: "huong-dan-secert-backends"
title: "Secret Backends ガイド"
sidebar_label: "Secret Backends ガイド"
description: "Secret Backends ガイド"
---

# Secret Backends ガイド

**ステップ 1:** S3 マウントパスの `dags` ディレクトリに read_vault_be.py ファイルを配置します。

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

**ステップ 2.** Airflow UI にログインします。

  * ブラウザを開き、提供された Airflow URL にアクセスします。

  * 認証が必要な場合は、ユーザー名とパスワードでログインします。

**ステップ 3:** 実行する DAG を検索します。

  * メイン画面で検索バーを使用するか、スクロールして次の名前の DAG を見つけます:
test_vault_secret_backend。

**ステップ 4:** DAG を有効化します。

  * DAG が無効になっている場合は、DAG 名の横のトグルスイッチを切り替えて「Enabled」状態にします。

**ステップ 5.** DAG を起動します。

  * **Trigger DAG** ボタンをクリックして、DAG を手動で実行します。

**ステップ 6.** タスクにアクセスします。

  * DAG の実行が完了した後（または実行中に）、DAG 名をクリックして詳細を表示します。

**ステップ 7:** ログを開きます。

  * タスクインスタンス画面で **Logs** タブを選択して、実行の進行状況を確認します。

**ステップ 8:** 結果を確認します。

  * ログを確認して、データ（変数/シークレット）が Vault または Variable から正常に読み取られたことを確認します。
