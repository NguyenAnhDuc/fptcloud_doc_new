---
id: "benchmark-sysbench"
title: "Benchmark with Sysbench"
description: "This section presents database performance benchmark results performed using the Sysbench tool, aiming to provide a refe"
sidebar_label: "Benchmark with Sysbench"
sidebar_position: "44"
---

# Benchmark with Sysbench

This section presents database performance benchmark results performed using the Sysbench tool, aiming to provide a reference for the processing capabilities of database engines across different compute configurations (flavors).
The results are provided for reference purposes only and do not represent guaranteed performance.

### 1. Benchmark Sysbench Overview
**Purpose:**
  * Evaluate OLTP (Read/Write) performance of supported database engines.
  * Observe performance scaling behavior when increasing CPU and memory resources.
  * Provide reference data to assist customers in selecting appropriate instance sizes.

**Benchmarked database engines:**
The database engines are included in this benchmark: PostgreSQL, MySQL, and MariaDB.
**Metrics:**
  * **Sysbench Read** : Total number of read queries executed during the test.
  * **Sysbench Write** : Total number of write queries executed during the test.
  * **QPS (Queries Per Second)** : Average number of queries processed per second.
  * **TPS (Transactions Per Second)** : Average number of completed transactions per second.

Higher QPS and TPS values indicate higher throughput under the tested workload.

### 2. Benchmark Results by Database Engine
#### 2.1. PostgreSQL
**Test environment:**  
| Parameter  | Value  |  
| --- | --- |  
| Benchmark tool  | Sysbench (OLTP Read/Write)  |  
| Number of tables  | 64  |  
| Rows per table  | 1000000  |  
| Workload type  | Read/Write  |  
| Thread count  | Configured per instance size  |  
| PostgreSQL version  | PostgreSQL 17  |  
**Result:**  
| Flavor (vCPU/RAM)  | Thread count  | Sysbench Read  | Sysbench Write  | QPS  | TPS  |  
| --- | --- | --- | --- | --- | --- |  
| 2C4G  | 64  | 2595600  | 741590  | 6177.66  | 308.88  |  
| 2C8G  | 64  | 2481276  | 708929  | 5905.53  | 295.27  |  
| 4C8G  | 64  | 3189018  | 911134  | 7589.71  | 379.48  |  
| 8C16G  | 64  | 4829286  | 1379738  | 11496.20  | 574.79  |  
| 8C32G  | 64  | 5679842  | 1622732  | 13519.46  | 675.94  |  
| 16C32G  | 64  | 6448036  | 1842199  | 15350.46  | 767.49  |  
| 16C64G  | 64  | 6926948  | 1979031  | 16489.02  | 824.41  |  

#### 2.2. MySQL
**Test environment:**  
| Parameter  | Value  |  
| --- | --- |  
| Benchmark tool  | Sysbench (OLTP Read/Write)  |  
| Number of tables  | 64  |  
| Rows per table  | 1000000  |  
| Workload type  | Read/Write  |  
| Thread count  | Configured per instance size  |  
| MySQL version  | MySQL 8.0.42  |  
**Result:**  
| Flavor (vCPU/RAM)  | Thread count  | Sysbench Read  | Sysbench Write  | QPS  | TPS  |  
| --- | --- | --- | --- | --- | --- |  
| 4C8G  | 16  | 6814500  | 1947000  | 16224.39  | 811.22  |  
| 8C16G  | 32  | 9748144  | 2785184  | 23209.29  | 1160.46  |  
| 8C32G  | 32  | 9423834  | 2692524  | 22430.67  | 1121.53  |  
| 16C32G  | 64  | 9786238  | 2796068  | 23289.48  | 1164.47  |  

#### 2.3. MariaDB
**Test environment:**  
| Parameter  | Value  |  
| --- | --- |  
| Benchmark tool  | Sysbench (OLTP Read/Write)  |  
| Number of tables  | 64  |  
| Rows per table  | 1000000  |  
| Workload type  | Read/Write  |  
| Thread count  | Configured per instance size  |  
| MySQL version  | MariaDB 10.6  |  
**Result:**  
| Flavor (vCPU/RAM)  | Thread count  | Sysbench Read  | Sysbench Write  | QPS  | TPS  |  
| --- | --- | --- | --- | --- | --- |  
| 4C8G  | 16  | 10573514  | 2111341  | 25174.34  | 1258.72  |  
| 8C16G  | 32  | 8923236  | 2094628  | 21245.25  | 1062.26  |  
| 8C32G  | 32  | 8491182  | 2086388  | 20216.52  | 1010.83  |  
| 16C32G  | 64  | 10267208  | 2568032  | 24444.58  | 1222.23  |  
| 16C64G  | 64  | 10789884  | 2719241  | 25688.30  | 1284.42  |  

### 3. Analysis & Recommendations
  * Increasing CPU and memory generally improves throughput.
  * Each database engine exhibits different scaling characteristics.
  * Performance gains may diminish at higher configurations depending on workload and system limits.

**Important:**
  * Benchmark results are workload-specific and provided for reference only.
  * Actual performance may vary depending on: 
    * Application workload characteristics.
    * Database schema and indexing.
    * Read/write ratio.
    * Storage and network configuration.

Customers are strongly encouraged to test with their own workloads before deploying to production.
**Recommendations:**
Use these benchmark results as guidance when selecting database engines and instance sizes. For optimal performance, validate configuration choices through application-specific performance testing.
