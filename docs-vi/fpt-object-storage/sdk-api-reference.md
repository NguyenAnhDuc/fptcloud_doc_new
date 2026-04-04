---
id: "sdk-api-reference"
title: "SDK & API Reference"
description: "Hướng dẫn kết nối FPT Object Storage bằng các SDK ngôn ngữ lập trình phổ biến."
sidebar_label: "SDK & API Reference"
sidebar_position: 13
---

# SDK & API Reference

FPT Object Storage được phát triển dựa trên chuẩn AWS S3. Do đó, bạn có thể sử dụng tất cả các công cụ và thư viện được phát triển cho AWS S3 để tích hợp với FPT Object Storage. Dưới đây là hướng dẫn cấu hình kết nối cho một số ngôn ngữ lập trình phổ biến.

## Python

Với Python, bạn có thể sử dụng thư viện **boto3** — thư viện Python chính thức của Amazon.

**Cài đặt**

```bash
pip install boto3
```

**Khởi tạo kết nối**

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

Tham khảo hướng dẫn lấy `"ACCESS_KEY_ID"`, `"SECRET_KEY_ID"` và `"ENDPOINT"` trên FPT Unify Portal tại [đây](../fpt-object-storage/index.md).

**Ví dụ sử dụng cơ bản**

```python
# Tạo bucket mới
s3client.create_bucket(Bucket=bucket_name)

# Xóa bucket
s3client.delete_bucket(Bucket=bucket_name)

# Tạo object mới
s3client.put_object(Bucket=bucket_name, Key=object_key, Body=content)

# Đọc nội dung object
response = s3client.get_object(Bucket=bucket_name, Key=object_key)
object_content = response['Body'].read().decode('utf-8')
print(object_content)

# Xóa object
s3client.delete_object(Bucket=bucket_name, Key=object_key)
```

**Tài liệu đầy đủ**

Tham khảo: <https://boto3.amazonaws.com/v1/documentation/api/latest/index.html>

## Java

Để sử dụng FPT Object Storage với Java, bạn có thể dùng các thư viện hỗ trợ như AWS SDK for Java, MinIO, s3proxy.

Dưới đây là hướng dẫn sử dụng AWS SDK for Java — một trong những thư viện được dùng phổ biến nhất.

**Cài đặt**

```xml
<!-- Tạo Maven project và thêm dependency sau vào pom.xml -->
<dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>s3</artifactId>
    <version>2.17.42</version> <!-- Sử dụng phiên bản mới nhất -->
</dependency>
```

**Khởi tạo kết nối**

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

**Tài liệu đầy đủ**

Tham khảo: <https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/home.html>
