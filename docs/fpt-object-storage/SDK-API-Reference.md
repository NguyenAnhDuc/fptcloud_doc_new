---
id: "SDK-API-Reference"
title: "SDK API Reference"
description: "FPT Object Storage là một sản phẩm được phát triển dựa trên tiêu chuẩn AWS S3. Vì vậy bạn có thể sử dụng tất cả các công"
sidebar_label: "SDK API Reference"
sidebar_position: "13"
---

# SDK API Reference

FPT Object Storage là một sản phẩm được phát triển dựa trên tiêu chuẩn AWS S3. Vì vậy bạn có thể sử dụng tất cả các công cụ và thư viện đã được phát triển cho AWS S3 để tương tác với FPT Object Storage. Dưới đây là hướng dẫn cài đặt và config kết nối mẫu của một số ngôn ngữ thông dụng.

## Python
Với Python, bạn có thể sử dụng thư viện boto3. Đây là thư viện chính thức của Amazon cho Python.
**Cài đặt**

```
Copypip install boto3
```

**Khởi tạo kết nối**

```
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

Trong đó "ACCESS_KEY_ID", "SECRET_KEY_ID" và "ENDPOINT" được lấy từ FPT Unify Portal theo hướng dẫn tại [link này](../fpt-object-storage/index.md).
**Một số ví dụ cơ bản**

```
Copy# Create a new bucket
s3client.create_bucket(Bucket=bucket_name)
-------------------------------------------
# Delete the bucket
s3client.delete_bucket(Bucket=bucket_name)
-------------------------------------------
# Create a new object
s3client.put_object(Bucket=bucket_name, Key=object_key, Body=content)
-------------------------------------------
# Read the content of the object
response = s3client.get_object(Bucket=bucket_name, Key=object_key)
object_content = response['Body'].read().decode('utf-8')
print(object_content)
-------------------------------------------
# Delete the object
s3client.delete_object(Bucket=bucket_name, Key=object_key)
```

**Tài liệu đầy đủ**
Refer: <https://boto3.amazonaws.com/v1/documentation/api/latest/index.html>

## Java
Để sử dụng FPT Object Storage trong Java, bạn có thể sử dụng các thư viện hỗ trợ như AWS SDK for Java, MinIO hoặc s3proxy.
Dưới đây là một hướng dẫn sử dụng AWS SDK for Java, một trong những thư viện phổ biến nhất để kết nối và thao tác với FPT Object Storage:
**Cài đặt**

```
Copy//Tạo 1 project maven
//Thêm vào file pom.xml dependency sau :

<dependency>
    <groupId>software.amazon.awssdk</groupId>
    <artifactId>s3</artifactId>
    <version>2.17.42</version> <!-- Đảm bảo sử dụng phiên bản mới nhất -->
</dependency>
```

**Khởi tạo kết nối**

```
Copy// Thay đổi các giá trị này theo thông tin tài khoản S3-compatible của bạn
String accessKey = "ACCESS_KEY_ID";
String secretKey = "SECRET_KEY_ID";
String endpoint = "ENDPOINT";
String bucketName = "YOUR_BUCKET_NAME";
// Tạo client S3
S3Client s3Client = S3Client.builder()
    .endpointOverride(URI.create(endpoint))
    .credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create(accessKey, secretKey)))
    .build();
```

Trong đó "ACCESS_KEY_ID", "SECRET_KEY_ID" và "ENDPOINT" được lấy từ FPT Unify Portal theo hướng dẫn tại [link này](../fpt-object-storage/index.md).
**Một số ví dụ cơ bản**

```
Copyimport java.net.URI;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.ListObjectsRequest;
import software.amazon.awssdk.services.s3.model.ListObjectsResponse;
import software.amazon.awssdk.services.s3.model.S3Object;
public class S3Example {
    public static void main(String[] args) {
        // Thay đổi các giá trị này theo thông tin tài khoản S3-compatible của bạn
        String accessKey = "ACCESS_KEY_ID";
        String secretKey = "SECRET_KEY_ID";
        String endpoint = "ENDPOINT";
        String bucketName = "<YOUR_BUCKET_NAME>";
        // Tạo client S3
        S3Client s3Client = S3Client.builder()
            .endpointOverride(URI.create(endpoint))
            .credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create(accessKey, secretKey)))
            .build();
        // Thực hiện các thao tác S3 tại đây, ví dụ: list objects
        ListObjectsRequest listObjectsRequest = ListObjectsRequest.builder()
            .bucket(bucketName)
            .build();
        ListObjectsResponse listObjectsResponse = s3Client.listObjects(listObjectsRequest);
        for (S3Object content: listObjectsResponse.contents()) {
            System.out.println("Object Key: " + content.key());
        }
        // Đóng client khi đã sử dụng xong
        s3Client.close();
    }
}
```

**Tài liệu đầy đủ**
Refer: <https://docs.aws.amazon.com/sdk-for-java/>

## C-Sharp
FPT Object Storage được thiết kế tương thích với Amazon S3, vì vậy bạn có thể sử dụng S3 SDK for C# được cung cấp bới AWS để tương tác với FPT Object Storage. Dưới đây là một số hướng dẫn cơ bản:
**Cài đặt**

```
Copy// Cài đặt bằng NuGet Package Manager
Install-Package AWSSDK -Version 2.3.55.2
```

**Khởi tạo kết nối**

```
Copystring accessKey = "ACCESS_KEY_ID";
string secretKey = "SECRET_KEY_ID";
AmazonS3Config config = new AmazonS3Config();
config.ServiceURL = "<ENDPOINT>";
config.ForcePathStyle = true;
AmazonS3Client client = new AmazonS3Client(
  accessKey,
  secretKey,
  config
);
```

Trong đó "ACCESS_KEY_ID", "SECRET_KEY_ID" và "ENDPOINT" được lấy từ FPT Unify Portal theo hướng dẫn tại [link này](../fpt-object-storage/index.md).
**Một số ví dụ cơ bản**

```
Copy// Cài đặt bằng NuGet Package Manager
// Install-Package AWSSDK -Version 3.7.0
using Amazon.S3;
using Amazon.S3.Model;
class Program {
  static void Main() {
    // Khởi tạo kết nối
    string accessKey = "ACCESS_KEY_ID";
    string secretKey = "SECRET_KEY_ID";
    AmazonS3Config config = new AmazonS3Config {
      ServiceURL = "ENDPOINT",
        ForcePathStyle = true
    };
    using(AmazonS3Client client = new AmazonS3Client(accessKey, secretKey, config)) {
      // Một số ví dụ cơ bản
      // Tạo một bucket mới
      string bucketName = "my-unique-bucket-name";
      client.PutBucket(new PutBucketRequest {
        BucketName = bucketName
      });
      // Xóa bucket
      client.DeleteBucket(new DeleteBucketRequest {
        BucketName = bucketName
      });
      // Tạo một object mới
      string objectKey = "my-object-key";
      string content = "Hello, world!";
      client.PutObject(new PutObjectRequest {
        BucketName = bucketName,
          Key = objectKey,
          ContentBody = content
      });
      // Đọc nội dung của object
      GetObjectResponse response = client.GetObject(new GetObjectRequest {
        BucketName = bucketName,
          Key = objectKey
      });
      using(var reader = new System.IO.StreamReader(response.ResponseStream)) {
        string objectContent = reader.ReadToEnd();
        Console.WriteLine(objectContent);
      }
      // Xóa object
      client.DeleteObject(new DeleteObjectRequest {
        BucketName = bucketName,
          Key = objectKey
      });
    }
  }
}
```

**Tài liệu đầy đủ**
Refer: <https://aws.amazon.com/sdk-for-net/>

## PHP
**Cài đặt**

```
Copy// Có nhiều cách để cài đặt PHP SDK
// 1. Sử dụng Composer
php -d memory_limit=-1 composer.phar require aws/aws-sdk-php

// require composer autoload
<?php
require '/path/to/vendor/autoload.php';
?>

// 2. Sử dụng Packaged Phar
// Download tại http://docs.aws.amazon.com/aws-sdk-php/v3/download/aws.phar và require vào script
<?php
require '/path/to/aws.phar';
?>

// 3. Sử dụng gói zip
// Download tại http://docs.aws.amazon.com/aws-sdk-php/v3/download/aws.zip và require vào script
<?php
require '/path/to/aws-autoloader.php';
?>

```

**Khởi tạo kết nối**

```
Copy<?php
$accessKey = "ACCESS_KEY_ID";
$secretKey = "SECRET_KEY_ID";
$credentials = new Aws\Credentials\Credentials($accessKey, $secretKey);

$options = [
    "version" => "latest",
    "region" => "<REGION>",
    "signature_version" => "v4",
    "credentials" => $credentials,
    "endpoint" => "<ENDPOINT>",
];

$s3Client = new Aws\S3\S3Client($options);
```

Trong đó "ACCESS_KEY_ID", "SECRET_KEY_ID" và "ENDPOINT" được lấy từ FPT Unify Portal theo hướng dẫn tại [link này](../fpt-object-storage/index.md).
**Một số ví dụ cơ bản**

```
Copy// Cài đặt bằng Composer
// php -d memory_limit=-1 composer.phar require aws/aws-sdk-php
// Require composer autoload*
<?php require "/path/to/vendor/autoload.php"; ?>
<?php // Khởi tạo kết nối

$accessKey = "ACCESS_KEY_ID";
$secretKey = "SECRET_KEY_ID";
$credentials = new Aws\Credentials\Credentials($accessKey, $secretKey);
$options = [
    "version" => "latest",
    "region" => "<REGION>",
    "signature_version" => "v4",
    "credentials" => $credentials,
    "endpoint" => '"ENDPOINT"',
];
$s3Client = new Aws\S3\S3Client($options); // Một số ví dụ cơ bản // Tạo một bucket mới
$bucketName = "my-unique-bucket-name";
$s3Client->createBucket(["Bucket" => $bucketName]); // Xóa bucket
$s3Client->deleteBucket(["Bucket" => $bucketName]); // Tạo một object mới
$objectKey = "my-object-key";
$content = "Hello, world!";
$s3Client->putObject([
    "Bucket" => $bucketName,
    "Key" => $objectKey,
    "Body" => $content,
]);
// Đọc nội dung của object
$result = $s3Client->getObject(["Bucket" => $bucketName, "Key" => $objectKey]);
$objectContent = $result["Body"]->getContents();
echo $objectContent; // Xóa object
$s3Client->deleteObject(["Bucket" => $bucketName, "Key" => $objectKey]);
 ?>

```

**Tài liệu đầy đủ**
Refer: <https://docs.aws.amazon.com/sdk-for-php/>

## Javascript
**Cài đặt**

```
Copy// Để cài đặt Javascript SDK
// 1. Tải bản sdk cho releases tại địa chỉ: https://github.com/aws/aws-sdk-js/releases
// 2. Giải nén thư mục dist/ của bản sdk
// 3. Sử dụng file sdk cho trình duyệt băng cách nhúng vào file html sử dụng

```

**Khởi tạo kết nối**

```
CopyaccessKey = "ACCESS_KEY_ID";
secretKey = "SECRET_KEY_ID";
AWS.config.update({
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
    region: '<REGION>',
    endpoint: '<ENDPOINT>',
    apiVersions: {
        s3: '2006-03-01'
    }
})
const s3 = new AWS.S3()

```

Trong đó "ACCESS_KEY_ID", "SECRET_KEY_ID" và "ENDPOINT" được lấy từ FPT Unify Portal theo hướng dẫn tại [link này](../fpt-object-storage/index.md).
**Một số ví dụ cơ bản**

```
Copy<!-- Cài đặt Javascript SDK -->
<!-- 1. Tải bản sdk cho releases tại địa chỉ: https://github.com/aws/aws-sdk-js/releases -->
<!-- 2. Giải nén thư mục dist/ của bản sdk -->
<!-- 3. Sử dụng file sdk cho trình duyệt bằng cách nhúng vào file HTML sử dụng -->
<
script >
    // Khởi tạo kết nối
    var accessKey = "<ACCESS_KEY_ID>";
var secretKey = "<SECRET_KEY_ID>";

AWS.config.update({
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
    region: '<REGION>',
    endpoint: '<ENDPOINT>',
    apiVersions: {
        s3: '2006-03-01'
    }
});

var s3 = new AWS.S3();

// Một số ví dụ cơ bản

// Tạo một bucket mới
var bucketName = "my-unique-bucket-name";
s3.createBucket({
    Bucket: bucketName
}, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log("Bucket created:", data);
});

// Xóa bucket
s3.deleteBucket({
    Bucket: bucketName
}, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log("Bucket deleted:", data);
});

// Tạo một object mới
var objectKey = "my-object-key";
var content = "Hello, world!";
s3.putObject({
    Bucket: bucketName,
    Key: objectKey,
    Body: content
}, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log("Object created:", data);
});

// Đọc nội dung của object
s3.getObject({
    Bucket: bucketName,
    Key: objectKey
}, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log("Object content:", data.Body.toString('utf-8'));
});

// Xóa object
s3.deleteObject({
    Bucket: bucketName,
    Key: objectKey
}, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log("Object deleted:", data);
}); <
/script>
```

**Tài liệu đầy đủ**
Refer: <https://docs.aws.amazon.com/sdk-for-javascript/>

## NodeJS
**Cài đặt**

```
Copynpm install aws-sdk@2.x
```

**Khởi tạo kết nối**

```
Copyconst AWS = require('aws-sdk')
AWS.config.update({
    accessKeyId: `"ACCESS_KEY_ID" `,
    secretAccessKey: `"SECRET_KEY_ID"`,
    region: '<REGION>', 
    endpoint: '"ENDPOINT"',
    apiVersions: {
      s3: '2006-03-01'
    },
    logger: process.stdout
})
```

Trong đó "ACCESS_KEY_ID", "SECRET_KEY_ID" và "ENDPOINT" được lấy từ FPT Unify Portal theo hướng dẫn tại [link này](../fpt-object-storage/index.md).
**Một số ví dụ cơ bản**

```
Copy// Cài đặt
// npm install aws-sdk@2.x

const AWS = require('aws-sdk');

// Khởi tạo kết nối
AWS.config.update({
    accessKeyId: '"ACCESS_KEY_ID"',
    secretAccessKey: '"SECRET_KEY_ID"',
    region: '<REGION>',
    endpoint: '"ENDPOINT"',
    apiVersions: {
        s3: '2006-03-01',
    },
    logger: process.stdout,
});

const s3 = new AWS.S3();

// Một số ví dụ cơ bản

// Tạo một bucket mới
const bucketName = 'my-unique-bucket-name';
s3.createBucket({ Bucket: bucketName }, (err, data) => {
    if (err) console.error(err, err.stack);
    else console.log('Bucket created:', data);
});

// Xóa bucket
s3.deleteBucket({ Bucket: bucketName }, (err, data) => {
    if (err) console.error(err, err.stack);
    else console.log('Bucket deleted:', data);
});

// Tạo một object mới
const objectKey = 'my-object-key';
const content = 'Hello, world!';
s3.putObject({ Bucket: bucketName, Key: objectKey, Body: content }, (err, data) => {
    if (err) console.error(err, err.stack);
    else console.log('Object created:', data);
});

// Đọc nội dung của object
s3.getObject({ Bucket: bucketName, Key: objectKey }, (err, data) => {
    if (err) console.error(err, err.stack);
    else console.log('Object content:', data.Body.toString('utf-8'));
});

// Xóa object
s3.deleteObject({ Bucket: bucketName, Key: objectKey }, (err, data) => {
    if (err) console.error(err, err.stack);
    else console.log('Object deleted:', data);
});
```

**Tài liệu đầy đủ**
Refer: <https://github.com/aws/aws-sdk-js/>

## Go
**Cài đặt**

```
Copygo get "github.com/aws/aws-sdk-go/aws"
```

**Khởi tạo kết nối**

```
Copys3Config := &aws.Config{
    Credentials: credentials.NewStaticCredentials("ACCESS_KEY_ID", "SECRET_KEY_ID", ""),
    Endpoint:    aws.String("ENDPOINT"),
    Region:      aws.String("REGION"),
}
newSession := session.New(s3Config)
Client = s3.New(newSession)
```

Trong đó "ACCESS_KEY_ID", "SECRET_KEY_ID" và "ENDPOINT" được lấy từ FPT Unify Portal theo hướng dẫn tại [link này](../fpt-object-storage/index.md).
**Một số ví dụ cơ bản**

```
Copypackage main

import (
    "github.com/aws/aws-sdk-go/aws"
    "github.com/aws/aws-sdk-go/aws/credentials"
    "github.com/aws/aws-sdk-go/aws/session"
    "github.com/aws/aws-sdk-go/service/s3"
    "log"
)

var Client *s3.S3

func main() {
    // Khởi tạo kết nối
    s3Config := &aws.Config{
        Credentials: credentials.NewStaticCredentials("ACCESS_KEY_ID", "SECRET_KEY_ID", ""),
        Endpoint:    aws.String("ENDPOINT"),
        Region:      aws.String("REGION"),
    }
    newSession := session.New(s3Config)
    Client = s3.New(newSession)

    // Một số ví dụ cơ bản

    // Tạo một bucket mới
    bucketName := "my-unique-bucket-name"
    _, err := Client.CreateBucket(&s3.CreateBucketInput{
        Bucket: aws.String(bucketName),
    })
    if err != nil {
        log.Fatal(err)
    }
    log.Println("Bucket created:", bucketName)

    // Xóa bucket
    _, err = Client.DeleteBucket(&s3.DeleteBucketInput{
        Bucket: aws.String(bucketName),
    })
    if err != nil {
        log.Fatal(err)
    }
    log.Println("Bucket deleted:", bucketName)

    // Tạo một object mới
    objectKey := "my-object-key"
    content := "Hello, world!"
    _, err = Client.PutObject(&s3.PutObjectInput{
        Bucket: aws.String(bucketName),
        Key:    aws.String(objectKey),
        Body:   aws.String(content),
    })
    if err != nil {
        log.Fatal(err)
    }
    log.Println("Object created:", objectKey)

    // Đọc nội dung của object
    result, err := Client.GetObject(&s3.GetObjectInput{
        Bucket: aws.String(bucketName),
        Key:    aws.String(objectKey),
    })
    if err != nil {
        log.Fatal(err)
    }
    log.Println("Object content:", result.Body)

    // Xóa object
    _, err = Client.DeleteObject(&s3.DeleteObjectInput{
        Bucket: aws.String(bucketName),
        Key:    aws.String(objectKey),
    })
    if err != nil {
        log.Fatal(err)
    }
    log.Println("Object deleted:", objectKey)
}
```

**Tài liệu đầy đủ**
Refer: <https://docs.aws.amazon.com/sdk-for-go/>
