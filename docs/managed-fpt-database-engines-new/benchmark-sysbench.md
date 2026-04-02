---
id: "benchmark-sysbench"
title: "Sysbench benchmark results"
description: "This section presents database performance benchmark results conducted using the Sysbench tool, providing reference information about the processing capabilities of database engines across different resource configurations (flavors)."
sidebar_label: "Sysbench benchmark results"
sidebar_position: 44
---

# Sysbench benchmark results

This section presents database performance benchmark results conducted using the Sysbench tool, providing reference information about the processing capabilities of database engines across different resource configurations (flavors).

Benchmark results are for reference only and do not guarantee actual performance.

### 1. Introduction to Sysbench benchmark

#### Purpose

Sysbench benchmark is used to:

- Evaluate the OLTP (Read/Write) processing performance of database engines.
- Observe the degree of performance improvement when increasing CPU and RAM resources.
- Provide reference data for users to select appropriate configurations.

#### Database engines benchmarked

The database engines benchmarked in this document include: PostgreSQL, MySQL, and MariaDB.

#### Measurement metrics

Benchmark results include the following key metrics:

- **Sysbench Read**: Total number of read queries executed during the benchmark.
- **Sysbench Write**: Total number of write queries executed during the benchmark.
- **QPS (Queries Per Second)**: Average number of queries processed per second.
- **TPS (Transactions Per Second)**: Average number of complete transactions per second.

QPS and TPS metrics are used as the basis for evaluating overall system performance. Higher QPS and TPS values indicate better system throughput.

### 2. Benchmark results by database engine

#### 2.1. PostgreSQL

**Test environment:**

| Parameter | Value |
| --- | --- |
| Benchmark tool | Sysbench (OLTP Read/Write) |
| Number of tables | 64 |
| Records per table | 1,000,000 |
| Workload type | Read/Write |
| Number of threads | Configured per flavor |
| PostgreSQL version | PostgreSQL 17 |

**Results:**

| Flavor (vCPU/RAM) | Threads | Sysbench Read | Sysbench Write | QPS | TPS |
| --- | --- | --- | --- | --- | --- |
| 2C4G | 64 | 2,595,600 | 741,590 | 6,177.66 | 308.88 |
| 2C8G | 64 | 2,481,276 | 708,929 | 5,905.53 | 295.27 |
| 4C8G | 64 | 3,189,018 | 911,134 | 7,589.71 | 379.48 |
| 8C16G | 64 | 4,829,286 | 1,379,738 | 11,496.20 | 574.79 |
| 8C32G | 64 | 5,679,842 | 1,622,732 | 13,519.46 | 675.94 |
| 16C32G | 64 | 6,448,036 | 1,842,199 | 15,350.46 | 767.49 |
| 16C64G | 64 | 6,926,948 | 1,979,031 | 16,489.02 | 824.41 |

#### 2.2. MySQL

**Test environment:**

| Parameter | Value |
| --- | --- |
| Benchmark tool | Sysbench (OLTP Read/Write) |
| Number of tables | 64 |
| Records per table | 1,000,000 |
| Workload type | Read/Write |
| Number of threads | Configured per flavor |
| MySQL version | MySQL 8.0.42 |

**Results:**

| Flavor (vCPU/RAM) | Threads | Sysbench Read | Sysbench Write | QPS | TPS |
| --- | --- | --- | --- | --- | --- |
| 4C8G | 16 | 6,814,500 | 1,947,000 | 16,224.39 | 811.22 |
| 8C16G | 32 | 9,748,144 | 2,785,184 | 23,209.29 | 1,160.46 |
| 8C32G | 32 | 9,423,834 | 2,692,524 | 22,430.67 | 1,121.53 |
| 16C32G | 64 | 9,786,238 | 2,796,068 | 23,289.48 | 1,164.47 |

#### 2.3. MariaDB

**Test environment:**

| Parameter | Value |
| --- | --- |
| Benchmark tool | Sysbench (OLTP Read/Write) |
| Number of tables | 64 |
| Records per table | 1,000,000 |
| Workload type | Read/Write |
| Number of threads | Configured per flavor |
| MariaDB version | MariaDB 8.0.42 |

**Results:**

| Flavor (vCPU/RAM) | Threads | Sysbench Read | Sysbench Write | QPS | TPS |
| --- | --- | --- | --- | --- | --- |
| 4C8G | 16 | 10,573,514 | 2,111,341 | 25,174.34 | 1,258.72 |
| 8C16G | 32 | 8,923,236 | 2,094,628 | 21,245.25 | 1,062.26 |
| 8C32G | 32 | 8,491,182 | 2,086,388 | 20,216.52 | 1,010.83 |
| 16C32G | 64 | 10,267,208 | 2,568,032 | 24,444.58 | 1,222.23 |
| 16C64G | 64 | 10,789,884 | 2,719,241 | 25,688.30 | 1,284.42 |

### 3. Observations & recommendations

- Increasing CPU and RAM generally improves throughput.
- Each database engine has different scaling characteristics.
- At higher configurations, performance gains may slow down depending on workload and system limits.

**Important notes:**

- Benchmark results depend on workload and are for reference only.
- Actual performance may vary depending on:
  - Application workload characteristics.
  - Database schema and indexes.
  - Read/write ratio.
  - Storage and network configuration.

Users should perform benchmarks with actual workloads before deploying production environments.

**Recommendation:**

Use benchmark results as reference data when selecting a database engine and resource configuration. To achieve optimal performance, test with your application's actual workload.
