---
id: "sdk-api-reference"
title: "SDK・API リファレンス"
description: "FPT Object Storage を各種プログラミング言語の SDK から利用するための接続設定ガイドです。"
sidebar_label: "SDK・API リファレンス"
sidebar_position: "13"
---

# SDK・API リファレンス

FPT Object Storage は AWS S3 標準をベースに開発されています。そのため、AWS S3 向けに開発されたすべてのツールとライブラリを使用して FPT Object Storage と連携できます。以下は代表的なプログラミング言語の接続設定サンプルガイドです。

## Python

Python では **boto3** ライブラリを使用できます。これは Amazon の Python 向け公式ライブラリです。

**インストール**

```bash
pip install boto3
```

**接続の初期化**

```python
import boto3

s3_endpoint = "ENDPOINT"
s3_access_key_id = "ACCESS_KEY_ID"
s3_secret_access_key = "SECRET_KEY_ID"

s3 = boto3.resource(
    "s3",
    endpoint_url=s3_endpoint,
    aws_access_key_id=s3_access_key_id,
    aws_secret_access_key=s3_secret_access_key,
)

s3client = boto3.client(
    "s3",
    endpoint_url=s3_endpoint,
    aws_access_key_id=s3_access_key_id,
    aws_secret_access_key=s3_secret_access_key,
)
```

`"ACCESS_KEY_ID"`、`"SECRET_KEY_ID"`、`"ENDPOINT"` は FPT Unify Portal の[こちらのガイド](../fpt-object-storage/index.md)に従って取得してください。

**基本的な使用例**

```python
# 新しい bucket を作成
s3client.create_bucket(Bucket=bucket_name)

# bucket を削除
s3client.delete_bucket(Bucket=bucket_name)

# 新しい object を作成
s3client.put_object(Bucket=bucket_name, Key=object_key, Body=content)

# object の内容を読み取る
response = s3client.get_object(Bucket=bucket_name, Key=object_key)
object_content = response['Body'].read().decode('utf-8')
print(object_content)

# object を削除
s3client.delete_object(Bucket=bucket_name, Key=object_key)
```

**完全なドキュメント**

参照: <https://boto3.amazonaws.com/v1/documentation/api/latest/index.html>

## Java

Java で FPT Object Storage を使用するには、AWS SDK for Java、MinIO、s3proxy などのサポートライブラリを使用できます。

以下は最も広く使われるライブラリの一つである AWS SDK for Java の使用ガイドです。

**インストール**

```xml
<!-- Maven プロジェクトを作成し、pom.xml に以下の dependency を追加します -->
<dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>s3</artifactId>
    <version>2.17.42</version> <!-- 最新バージョンを使用してください -->
</dependency>
```

**接続の初期化**

```java
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import java.net.URI;

String endpoint = "https://YOUR_ENDPOINT";
String accessKey = "YOUR_ACCESS_KEY";
String secretKey = "YOUR_SECRET_KEY";

S3Client s3 = S3Client.builder()
    .endpointOverride(URI.create(endpoint))
    .credentialsProvider(StaticCredentialsProvider.create(
        AwsBasicCredentials.create(accessKey, secretKey)))
    .region(Region.of("us-east-1"))
    .build();
```

**完全なドキュメント**

参照: <https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/home.html>
