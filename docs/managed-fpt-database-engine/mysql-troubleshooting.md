---
id: "mysql-troubleshooting"
title: "Mysql Troubleshooting"
description: "The MySQL Troubleshooting page provides quick guidance to help you identify and resolve common issues when using the MyS"
sidebar_label: "Mysql Troubleshooting"
sidebar_position: 45
---

# Mysql Troubleshooting

The MySQL Troubleshooting page provides quick guidance to help you identify and resolve common issues when using the MySQL service on FPT Cloud DBaaS. This section focuses on frequently encountered problems such as connection errors, configuration issues, performance degradation, backup/restore failures, and MySQL-specific scenarios.
Each topic includes clear descriptions of symptoms, root causes, and recommended resolutions, enabling you to perform initial troubleshooting or work effectively with the technical support team.
The goal of this document is to help you operate MySQL in a stable, secure, and efficient manner while minimizing service disruption during incidents.
### Error categories:
[1. Backup Error: “Please run OPTIMIZE TABLE on all listed tables…”](../managed-fpt-database-engine/index.md)
[2. Server Crash: MySQL crash when using composite indexes on JSON columns](../managed-fpt-database-engine/index.md)
[3. Metadata Lock Storm](../managed-fpt-database-engine/index.md)
### 1. Backup Error: “Please run OPTIMIZE TABLE on all listed tables…”
#### 1.1. Symptoms
During MySQL backup operations on the FPT Database Engine, the backup task may fail and send an error notification via email similar to the message above:
`     cluster_id : abcxyz11  
     cluster_name : clustername  
     vdc_name : ABCXYZ_VCD  
     org_name : ABCXYZ-ORG  
     start_time : 10/23/2055 00:30:02  
     backup_type : diff  
     backup_size : NoneG  
     backup_log : ERROR: Please run OPTIMIZE TABLE on all listed tables to fix this issue. Tables found: db/transactions...  
     backup_state : failed  
     created_at : 10/23/2055 00:31:01  
     `
This issue is caused by a **known bug in Percona XtraBackup** , the backup tool used by FCI for MySQL backups.
#### 1.2. Root Cause
Starting **from MySQL 8.0.29** , InnoDB supports **INSTANT ADD/DROP COLUMN** , allowing columns to be added or removed without rebuilding the table.
Characteristics of INSTANT command:
  * No full table copy.
  * No table rebuild.
  * Only additional metadata is written to the InnoDB dictionary (indicated by TOTAL_ROW_VERSIONS > 0).

However, **XtraBackup is not fully compatible** with tables that contain TOTAL_ROW_VERSIONS > 0. As a result, XtraBackup cannot process tables that have used INSTANT ADD/DROP COLUMN, causing the backup process to stop and return an error requesting OPTIMIZE TABLE.
#### 1.3. Impact
This error leads to the following effects:
  * Reduced query performance: Operations are slower due to data not being optimally sorted.
  * Increased system load: Consumes system resources and memory.
  * Slow data insertion or updating: INSERT and UPDATE operations may take longer.
  * Difficulty in maintenance and backup: Fragmented tables can slow down backup or recovery processes.

#### 1.4. Resolution and Recommendations
Rebuild the affected table to remove INSTANT metadata using the following command:

```
CopyOPTIMIZE TABLE db.transactions;
```

After execution:
  * The table is fully rebuilt.
  * INSTANT column metadata is removed.
  * TOTAL_ROW_VERSIONS returns to 0.
  * Backup operations resume normally.

**Note** :
  * OPTIMIZE TABLE rebuilds the entire table and may cause a WRITE lock.
  * For large tables, the rebuild process may take significant time. Perform this operation during off-peak hours.
  * Ensure sufficient temporary storage space before execution.

### 2. Server Crash: MySQL crash when using composite indexes on JSON columns
#### 2.1. Symptoms
When using composite (multi-column) indexes that include JSON columns, MySQL nodes may crash unexpectedly:
`     22:20:45 UTC - mysqld got signal 11 ;  
 Most likely, you have hit a bug, but this error can also be caused by malfunc-tioning hardware.  
 Thread pointer: 0x407b5f0a3000  
 Attempting backtrace. You can use the following information to find out  
 where mysqld died. If you see no messages after this, something went  
 terribly wrong...  
 stack_bottom = 407b6c43de60 thread_stack 0x40000  
 /rdsdbbin/mysql/bin/mysqld(my_print_stacktrace(unsigned char const*, unsigned long)+0x30) [0x1f7bb30]  
 /rdsdbbin/mysql/bin/mysqld(print_fatal_signal(int)+0x27c) [0xfaa93c]  
 /rdsdbbin/mysql/bin/mysqld(handle_fatal_signal+0xc4) [0xfaaa64]  
 linux-vdso.so.1(__kernel_rt_sigreturn+0) [0x400018f2a668]  
 /rdsdbbin/mysql/bin/mysqld(row_sel_field_store_in_mysql_format_func(unsigned char*, mysql_row_templ_t const*, dict_index_t const*, unsigned char const*, un-signed long)+0x164) [0x2225a64]  
 /rdsdbbin/mysql/bin/mysqld(row_sel_store_mysql_rec(unsigned char*, row_prebuilt_t*, unsigned char const*, dtuple_t const*, bool, dict_index_t const*, dict_index_t const*, unsigned long const*, bool, lob::undo_vers_t*, mem_block_info_t*&)+0x19c) [0x2228e3c]  
 /rdsdbbin/mysql/bin/mysqld(row_search_mvcc(unsigned char*, page_cur_mode_t, row_prebuilt_t*, unsigned long, unsigned long)+0x1a90) [0x222e410]  
 /rdsdbbin/mysql/bin/mysqld(ha_innobase::index_read(unsigned char*, unsigned char const*, unsigned int, ha_rkey_function)+0x378) [0x20de778]  
 /rdsdbbin/mysql/bin/mysqld(handler::ha_index_read_map(unsigned char*, unsigned char const*, unsigned long, ha_rkey_function)+0x3f8) [0x10aef98]  
 /rdsdbbin/mysql/bin/mysqld(handler::read_range_first(key_range const*, key_range const*, bool, bool)+0x60) [0x10afa20]  
 /rdsdbbin/mysql/bin/mysqld(ha_innobase::read_range_first(key_range const*, key_range const*, bool, bool)+0x1c) [0x20a955c]  
 /rdsdbbin/mysql/bin/mysqld(handler::multi_range_read_next(char**)+0x118) [0x10b02d8]  
 /rdsdbbin/mysql/bin/mysqld(handler::ha_multi_range_read_next(char**)+0x34) [0x10ac174]  
 /rdsdbbin/mysql/bin/mysqld(IndexRangeScanIterator::Read()+0x3c) [0x12b951c]  
 /rdsdbbin/mysql/bin/mysqld(IndexMergeIterator::Init()+0x130) [0x12b88f0]  
 /rdsdbbin/mysql/bin/mysqld(filesort(THD*, Filesort*, RowIterator*, unsigned long, unsigned long long, Filesort_info*, Sort_result*, unsigned long long*)+0x178) [0x1093e18]  
 /rdsdbbin/mysql/bin/mysqld(SortingIterator::DoSort()+0x54) [0x1200794]  
 /rdsdbbin/mysql/bin/mysqld(SortingIterator::Init()+0x1c) [0x120081c]  
 /rdsdbbin/mysql/bin/mysqld(LimitOffsetIterator::Init()+0x20) [0x135dd40]  
 /rdsdbbin/mysql/bin/mysqld(Query_expression::ExecuteIteratorQuery(THD*)+0x200) [0xf18160]  
 /rdsdbbin/mysql/bin/mysqld(Query_expression::execute(THD*)+0x30) [0xf185b0]  
 /rdsdbbin/mysql/bin/mysqld(Sql_cmd_dml::execute(THD*)+0x158) [0xea7458]  
 /rdsdbbin/mysql/bin/mysqld(mysql_execute_command(THD*, bool)+0xf2c) [0xe5504c]  
 /rdsdbbin/mysql/bin/mysqld(dispatch_sql_command(THD*, Parser_state*)+0x340) [0xe580c0]  
 /rdsdbbin/mysql/bin/mysqld(dispatch_command(THD*, COM_DATA const*, enum_server_command)+0x1560) [0xe59b40]  
 /rdsdbbin/mysql/bin/mysqld(do_command(THD*)+0x1e0) [0xe5ae40]  
 /rdsdbbin/mysql/bin/mysqld() [0xf9cc88]  
 /rdsdbbin/mysql/bin/mysqld() [0x2518490]  
 /lib64/libpthread.so.0(+0x722c) [0x400018fe622c]  
 /lib64/libc.so.6(+0xd46dc) [0x4000191da6dc]  
    
 Trying to get some variables.  
 Some pointers may be invalid and cause the dump to abort.  
 Query (407ad76b1830): SELECT `fort_knox_funds_flows`.* FROM `fort_knox_funds_flows` WHERE (25830440 MEMBER OF(`fort_knox_funds_flows`.`money_movements` ->> "$[*].to_user_id") OR 25830440 MEMBER OF(`fort_knox_funds_flows`.`money_movements` ->> "$[*].from_user_id")) ORDER BY `fort_knox_funds_flows`.`created_at` DESC LIMIT 20  
 Connection ID (thread ID): 624306  
 Status: NOT_KILLED  
 cluster_name : clustername  
     `
This is a MySQL error related to the use of an associative index on a JSON column, causing a MySQL node crash. You can find more details about this error at this link: <https://bugs.mysql.com/bug.php?id=109542>.
#### 2.2. Root Cause
From MySQL 8.0.2x onwards, tables with INDEX definitions that use fields in JSON columns may experience the crash described above. The main cause of this error is that MySQL encounters problems trying to create and maintain indexes on JSON columns in combo indexes. Specifically:
  * Index incompatibility with JSON columns: MySQL cannot properly handle JSON objects in combo indexes, leading to memory errors or asynchronous processing.
  * Issues with storing and retrieving JSON data: MySQL is not optimal at storing and retrieving JSON data in combo indexes, leading to crashes.
  * Interaction with special storage features (such as Full Disk Encryption) can increase the severity of the error.

#### 2.3. Impact
When this error occurs, MySQL may crash or restart unexpectedly, and in some cases, the database may be unrecoverable after the crash. This will severely impact the availability and reliability of the service, especially in a production environment.
#### 2.5. Resolution and Recommendations
  * Use single indexes instead of combo indexes when working with JSON columns.
  * Avoid creating indexes directly on JSON columns, or if necessary, use generated columns to index specific values in JSON.
  * Update MySQL to newer versions (e.g., 8.0.42), as this bug has been confirmed and fixed in several MySQL versions after reporting.

### 3. Metadata Lock Storm
#### 3.1. Symptoms
When using MySQL in a HA model, the following situation may occur: the MySQL database cluster functions normally (the master node can read/write without problems), but on the two slave nodes, data lag can increase significantly (up to about 2 hours). At the same time, on the slave nodes, multiple threads appear in the "Waiting for table metadata lock" state, as follows:
`     1073    admin   10.225.65.36:25680      fpt     Query   178     Waiting for table metadata lock SELECT COUNT(1) AS `cnt` FROM `user_notifications` `UserNotificationEntity` WHERE ( ((`UserNotificat  
     1075    admin   10.225.65.36:25694      fpt     Query   178     Waiting for table metadata lock SELECT COUNT(1) AS `cnt` FROM `user_notifications` `UserNotificationEntity` WHERE ( ((`UserNotificat  
     1077    admin   10.225.65.36:34558      fpt     Query   176     Waiting for table metadata lock SELECT COUNT(1) AS `cnt` FROM `user_notifications` `UserNotificationEntity` WHERE ( ((`UserNotificat  
     1078    admin   10.225.65.36:34570      fpt     Query   174     Waiting for table metadata lock SELECT COUNT(1) AS `cnt` FROM `user_notifications` `UserNotificationEntity` WHERE ( ((`UserNotificat  
     1083    agent   10.225.65.46:36868      NULL    Query   167     Waiting for table metadata lock SELECT table_schema, table_name, column_name, auto_increment,\n          CAST(pow(2, case data_type\n  
     1116    admin   10.225.65.36:49646      fpt     Query   125     Waiting for table metadata lock SELECT COUNT(1) AS `cnt` FROM `user_notifications` `UserNotificationEntity` WHERE ( ((`UserNotificat  
     1118    admin   10.225.65.36:49652      fpt     Query   124     Waiting for table metadata lock SELECT COUNT(1) AS `cnt` FROM `user_notifications` `UserNotificationEntity` WHERE ( ((`UserNotificat  
     `
This error occurs after you execute a DDL command on the user_notifications table, causing the database (2 slave nodes) to enter a Metadata Lock Storm state.
#### 3.2. Root Cause
MySQL uses Metadata Lock (MDL) to protect the structural information of tables (including schema-level and table-level) when executing Data Definition Language (DDL) and Data Manipulation Language (DML) commands.
In a MySQL InnoDB Cluster environment, replicated DDL transactions (such as ALTER TABLE, CREATE INDEX, DROP TABLE, etc.) are executed sequentially on slave nodes by the applier thread. However, for some reason, such as a long query or uncommitted DML, the user session may be holding the MDL lock. This can lead to the applier thread having to wait too long for the lock.
When the applier thread cannot obtain the lock in time, other transactions in the GR queue (Global Replication Queue) become congested (as seen in the user_notifications table of the example above). As a result, the applier thread on the slave node hangs, causing threads accessing the table to also hang, making it difficult to access the slave node and resulting in application errors.
#### 3.3. Impact
When this error occurs, user queries and transactions are blocked, leading to data access disruptions and increased system latency. In a MySQL Cluster environment, this can clog replication transactions, causing data lag and reducing overall system performance.
#### 3.4. Resolution and Recommendations
To avoid a Metadata Lock Storm in this case, the following steps should be taken:
  * Step 1: Temporarily stop applications or services accessing the table related to the DDL task → Purpose: to prevent the generation of new queries that hold metadata locks or await locks.
  * Step 2: Restart slave nodes to release threads holding locks → Restarting helps end "stuck" sessions or threads, thereby allowing the DDL process to be successfully applied.

**Recommendation** : When upgrading database clusters with DDL commands on tables with high QPS (Queries Per Second), disconnect applications from the objects (tables, indexes, etc.) that the DDL statement affects. This helps avoid Metadata Lock Storms, ensuring a smooth upgrade process without system disruption.