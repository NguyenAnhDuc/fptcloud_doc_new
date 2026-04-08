---
id: "mysql-troubleshooting"
title: "Error catalog"
description: "The MySQL Troubleshooting page provides a quick reference guide to help you identify and resolve common errors when using the MySQL service on FPT Cloud."
sidebar_label: "Error catalog"
sidebar_position: 45
---

# Error catalog

## Introduction

The **MySQL Troubleshooting** page provides a quick reference guide to help you identify and resolve common errors when using the MySQL service on FPT Cloud. The content focuses on common issues such as connection errors, configuration errors, performance issues, backup/restore errors, and MySQL-specific situations.

Each section presents clear symptoms, causes, and resolution steps, making it easy to troubleshoot independently or coordinate with the technical support team.

The goal of this documentation is to help you operate MySQL more stably, securely, and efficiently, while reducing downtime when incidents occur.

## Error catalog

[1. Backup Error: "Please run OPTIMIZE TABLE on all listed tables…"](#1-backup-error-please-run-optimize-table-on-all-listed-tables)

[2. Server Crash: MySQL crash when using combo index on JSON column](#2-server-crash-mysql-crash-when-using-combo-index-on-json-column)

[3. Metadata Lock Storm error](#3-metadata-lock-storm-error)

### 1. Backup Error: "Please run OPTIMIZE TABLE on all listed tables…"

#### 1.1. Symptoms

During MySQL backup on the FPT Database Engine service, the backup task may fail and send an error notification via email as follows:

```
cluster_id : abcxyz11
cluster_name : clustername
vdc_name : ABCXYZ_VCD
org_name : ABCXYZ-ORG
start_time : 10/23/2055 00:30:02
backup_type : diff
backup_size : NoneG
backup_log : ERROR: Please run OPTIMIZE TABLE on all listed tables to fix this issue. Tables found: db/transactions...
backup_state : failed
created_at : 10/23/2055 00:31:01
```

This error occurs due to **a bug in Percona XtraBackup (the software used by FCI to perform backups on the FDE service)**.

#### 1.2. Cause

Starting from MySQL 8.0.29, InnoDB supports **INSTANT ADD/DROP COLUMN** for adding or dropping columns.

Characteristics of the INSTANT command:

- InnoDB does not copy the entire table.
- No table rebuild.
- Only writes special metadata in the InnoDB dictionary. This metadata appears as **TOTAL_ROW_VERSIONS > 0**.

However: **XtraBackup is not fully compatible with tables that have TOTAL_ROW_VERSIONS > 0 metadata**, resulting in XtraBackup being unable to process tables that have used INSTANT ADD/DROP COLUMN. As a result, the backup task stops and returns an error requesting OPTIMIZE TABLE.

#### 1.3. Impact

This error leads to the following impacts:

- Reduced query performance: Slower operations due to non-optimally organized data.
- Increased system load: Consumes system resources and memory.
- Slower data insertion or updates: INSERT, UPDATE operations may take longer.
- Difficulties in maintenance and backup: Fragmented tables may slow down backup or recovery processes.

#### 1.4. Resolution and recommendations

You need to **rebuild the table** to remove the INSTANT metadata using the command:

```sql
OPTIMIZE TABLE db.transactions;
```

After execution:

- The table will be completely rebuilt.
- The "INSTANT COLUMN VERSION" metadata is completely removed.
- TOTAL_ROW_VERSIONS returns to 0.
- Backup will run normally again.

**Note:**

- **OPTIMIZE TABLE will rebuild the entire table** → may cause a WRITE lock.
- For **large tables**, the rebuild time may be long → perform during off-peak hours.
- Ensure **sufficient temporary storage space** for the rebuild.

### 2. Server Crash: MySQL crash when using combo index on JSON column

#### 2.1. Symptoms

When using a combo index on a JSON column, the MySQL node may crash as follows:

```
22:20:45 UTC - mysqld got signal 11 ;
Most likely, you have hit a bug, but this error can also be caused by malfunctioning hardware.
...
Query (407ad76b1830): SELECT `fort_knox_funds_flows`.* FROM `fort_knox_funds_flows`
WHERE (25830440 MEMBER OF(`fort_knox_funds_flows`.`money_movements` ->> "$[*].to_user_id")
OR 25830440 MEMBER OF(`fort_knox_funds_flows`.`money_movements` ->> "$[*].from_user_id"))
ORDER BY `fort_knox_funds_flows`.`created_at` DESC LIMIT 20
```

This is a MySQL bug related to using a combo index on a JSON column, causing the MySQL node to crash. You can refer to additional details about this bug [here](https://bugs.mysql.com/bug.php?id=109542).

#### 2.2. Cause

From MySQL 8.0.2x onward, tables with INDEX definitions using fields in JSON columns may encounter crashes as described above. The root cause is that MySQL encounters issues when attempting to create and maintain indexes on JSON columns in combo indexes. Specifically:

- Index incompatibility with JSON columns: MySQL cannot properly handle JSON objects in combo indexes, leading to memory errors or asynchronous processing issues.
- Problems with JSON data storage and retrieval: MySQL cannot optimize the storage and retrieval of JSON data in combo indexes, causing crashes.
- Interaction with special storage features (such as Full Disk Encryption) may increase the severity of the error.

#### 2.3. Impact

When this error occurs, MySQL may crash or restart unexpectedly, and in some cases, the database may be unable to recover data after the crash. This seriously affects service availability and reliability, especially in production environments.

#### 2.4. Resolution and recommendations

- Use single indexes instead of combo indexes when working with JSON columns.
- Avoid creating indexes directly on JSON columns, or if needed, use generated columns (columns derived from JSON data) to index specific values within the JSON.
- Update MySQL to newer versions (e.g., 8.0.42), as this bug has been confirmed and fixed in some MySQL versions after being reported.

### 3. Metadata Lock Storm error

#### 3.1. Symptoms

When using MySQL in HA mode, you may encounter the following situation: the MySQL database cluster is still functioning normally (the Master node can read/write without issues), but on the 2 slave nodes, data lag can increase significantly (up to approximately 2 hours). At the same time, many threads appear in the state "**Waiting for table metadata lock**" on the slave nodes:

```
1073  admin  10.225.65.36:25680  fpt  Query  178  Waiting for table metadata lock  SELECT COUNT(1) AS `cnt` FROM `user_notifications` ...
1075  admin  10.225.65.36:25694  fpt  Query  178  Waiting for table metadata lock  SELECT COUNT(1) AS `cnt` FROM `user_notifications` ...
...
```

This error occurs after executing a DDL command on the user_notifications table, causing the database (2 slave nodes) to enter a Metadata Lock Storm state.

#### 3.2. Cause

MySQL uses the Metadata Lock (MDL) mechanism to protect table structure information (including schema-level and table-level) when executing DDL (Data Definition Language) and DML (Data Manipulation Language) commands.

In a MySQL InnoDB Cluster environment, replicated DDL transactions (such as ALTER TABLE, CREATE INDEX, DROP TABLE, etc.) are executed sequentially on slave nodes by the applier thread. Meanwhile, for some reason such as a long-running query or uncommitted DML, a user session may be holding an MDL lock. This causes the applier thread to wait too long for the lock.

When the applier thread cannot acquire the lock in time, other transactions in the GR queue (Global Replication Queue) are blocked in a chain reaction. As a result, the applier thread on the slave node is stuck, causing threads accessing the table to also be stuck, making access to the slave node difficult and causing errors in the application.

#### 3.3. Impact

When this error occurs, user queries and transactions are blocked, leading to disrupted data access and increased system latency. In a MySQL Cluster environment, this can block replication transactions, causing data lag and reducing overall system performance.

#### 3.4. Resolution and recommendations

To exit the Metadata Lock Storm in this case, perform the following steps:

- Step 1: Temporarily pause applications or services that are accessing the table related to the DDL task → Purpose: prevent new queries from acquiring or waiting for metadata locks.
- Step 2: Restart the slave nodes to release threads holding locks → Restarting terminates "stuck" sessions or threads, allowing the DDL process to be applied successfully.

**Recommendation**: When upgrading database clusters with DDL commands on tables with high QPS (Queries Per Second), disconnect applications from the objects (tables, indexes, etc.) affected by the DDL statement. This helps avoid Metadata Lock Storm, ensures the upgrade proceeds smoothly, and does not cause system disruptions.
