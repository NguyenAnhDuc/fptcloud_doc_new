---
id: "sdk-api-reference"
title: "SDK & API Reference"
description: "Guide to connecting FPT Object Storage using popular programming language SDKs."
sidebar_label: "SDK & API Reference"
sidebar_position: 13
---

# SDK & API Reference

FPT Object Storage is built on the AWS S3 standard. As a result, you can use any tool or library developed for AWS S3 to integrate with FPT Object Storage. The following are sample connection configuration guides for common programming languages.

## Python

With Python, you can use the **boto3** library — Amazon's official Python library.

**Installation**

```bash
pip install boto3
```

**Initialize the connection**

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

Refer to the guide for obtaining `"ACCESS_KEY_ID"`, `"SECRET_KEY_ID"`, and `"ENDPOINT"` from the FPT Unify Portal [here](../fpt-object-storage/index.md).

**Basic usage examples**

```python
# Create a new bucket
s3client.create_bucket(Bucket=bucket_name)

# Delete a bucket
s3client.delete_bucket(Bucket=bucket_name)

# Create a new object
s3client.put_object(Bucket=bucket_name, Key=object_key, Body=content)

# Read object content
response = s3client.get_object(Bucket=bucket_name, Key=object_key)
object_content = response['Body'].read().decode('utf-8')
print(object_content)

# Delete an object
s3client.delete_object(Bucket=bucket_name, Key=object_key)
```

**Full documentation**

Reference: <https://boto3.amazonaws.com/v1/documentation/api/latest/index.html>

## Java

To use FPT Object Storage with Java, you can use support libraries such as AWS SDK for Java, MinIO, or s3proxy.

The following is a guide for using AWS SDK for Java — one of the most widely used libraries.

**Installation**

```xml
<!-- Create a Maven project and add the following dependency to pom.xml -->
<dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>s3</artifactId>
    <version>2.17.42</version> <!-- Use the latest version -->
</dependency>
```

**Initialize the connection**

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

**Full documentation**

Reference: <https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/home.html>
