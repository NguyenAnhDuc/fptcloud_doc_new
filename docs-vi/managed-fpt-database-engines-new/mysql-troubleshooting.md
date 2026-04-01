---
id: "mysql-troubleshooting"
title: "Danh mục lỗi"
description: "Trang **MySQL Troubleshooting** cung cấp hướng dẫn nhanh giúp bạn xác định và xử lý các lỗi thường gặp khi sử dụng dịch "
sidebar_label: "Danh mục lỗi"
sidebar_position: 45
---

# Mysql Troubleshooting

## Giới thiệu
Trang **MySQL Troubleshooting** cung cấp hướng dẫn nhanh giúp bạn xác định và xử lý các lỗi thường gặp khi sử dụng dịch vụ MySQL trên FPT Cloud. Nội dung tập trung vào những vấn đề phổ biến như lỗi kết nối, lỗi cấu hình, sự cố hiệu năng, lỗi backup/restore và các tình huống đặc thù của MySQL.
Mỗi mục đều trình bày dấu hiệu nhận biết, nguyên nhân và cách khắc phục rõ ràng, giúp bạn dễ dàng tự kiểm tra hoặc phối hợp với đội ngũ hỗ trợ kỹ thuật.
Mục tiêu của tài liệu là giúp bạn vận hành MySQL ổn định, an toàn và hiệu quả hơn, đồng thời giảm thời gian gián đoạn khi xảy ra sự cố.
## Danh mục lỗi
[1. Backup Error: “Please run OPTIMIZE TABLE on all listed tables…](../managed-fpt-database-engines-new/index.md)
[2. Server Crash: Lỗi crash MySQL khi sử dụng combo index trên cột JSON](../managed-fpt-database-engines-new/index.md)
### 1. Backup Error: “Please run OPTIMIZE TABLE on all listed tables…”
#### 1.1. Dấu hiệu nhận biết
Trong quá trình thực hiện sao lưu MySQL trên dịch vụ FPT Database Engine của FCI, tác vụ backup có thể thất bại và gửi thông báo lỗi qua email như sau:
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
Lỗi này xảy ra do một **bug trong Percona XtraBackup (phần mềm được FCI sử dụng để thực hiện backup trên dịch vụ FDE).**
#### 1.2. Nguyên nhân
Kể từ MySQL 8.0.29 trở đi, InnoDB hỗ trợ **INSTANT ADD/DROP COLUMN** để thêm hoặc xoá cột.
Đặc điểm của lệnh INSTANT:
  * InnoDB không sao chép lại toàn bộ bảng
  * Không rebuild table
  * Chỉ ghi thêm metadata đặc biệt trong InnoDB dictionary. Metadata này xuất hiện dưới dạng **TOTAL_ROW_VERSIONS > 0**

Tuy nhiên: **XtraBackup không tương thích hoàn toàn với bảng có metadata TOTAL_ROW_VERSIONS > 0** dẫn đến XtraBackup không thể xử lý bảng đã từng sử dụng INSTANT ADD/DROP COLUMN. Kết quả là tác vụ backup sẽ dừng lại và trả về lỗi yêu cầu OPTIMIZE TABLE.
#### 1.3. Ảnh hưởng
Lỗi này dẫn đến các ảnh hưởng sau:
  * Hiệu suất truy vấn giảm: Thao tác chậm hơn do dữ liệu không được sắp xếp tối ưu.
  * Tăng tải hệ thống: Tiêu tốn tài nguyên hệ thống và bộ nhớ.
  * Chậm khi chèn hoặc cập nhật dữ liệu: Các thao tác INSERT, UPDATE có thể mất thời gian.
  * Khó khăn trong bảo trì và sao lưu: Các bảng phân mảnh có thể làm chậm quá trình sao lưu hoặc phục hồi.

#### 1.4. Giải pháp khắc phục và khuyến nghị
Cần **rebuild lại bảng** để loại bỏ metadata INSTANT bằng lệnh:

```
CopyOPTIMIZE TABLE db.transactions;
```

Sau khi thực hiện:
  * Bảng sẽ được rebuild hoàn toàn
  * Metadata “INSTANT COLUMN VERSION” được loại bỏ hoàn toàn
  * TOTAL_ROW_VERSIONS trở về 0
  * Backup sẽ chạy bình thường trở lại

**Chú ý:**
  * **OPTIMIZE TABLE sẽ rebuild toàn bộ bảng** → có thể gây WRITE lock (khoá ghi)
  * Với **bảng lớn** , thời gian rebuild có thể dài → nên thực hiện ngoài giờ cao điểm.
  * Cần đảm bảo **đủ không gian lưu trữ tạm thời** để thực hiện rebuild.

### 2. Server Crash: Lỗi crash MySQL khi sử dụng combo index trên cột JSON
#### 2.1. Dấu hiệu nhận biết
Khi bạn sử dụng combo index trên cột JSON, có thể dẫn đến việc node MySQL bị crash như sau:
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
Đây là một lỗi của MySQL liên quan đến việc sử dụng chỉ mục kết hợp trên cột JSON, gây ra sự cố crash node MySQL. Bạn có thể tham khảo thêm chi tiết về lỗi này [tại đây](https://bugs.mysql.com/bug.php?id=109542)
#### 2.2. Nguyên nhân
Từ MySQL 8.0.2x trở đi, các bảng có định nghĩa INDEX sử dụng các trường trong cột JSON có thể gặp phải lỗi crash như đã mô tả ở trên. Nguyên nhân chính của lỗi này là do MySQL gặp sự cố khi cố gắng tạo và duy trì chỉ mục trên cột JSON trong các combo index. Cụ thể:
  * Index không tương thích với cột JSON: MySQL không thể xử lý đúng cách các đối tượng JSON trong combo index, dẫn đến lỗi bộ nhớ hoặc xử lý bất đồng bộ.
  * Vấn đề với lưu trữ và truy xuất dữ liệu JSON: MySQL không tối ưu được việc lưu trữ và truy xuất dữ liệu JSON trong các combo index dẫn đến crash.
  * Tương tác với các tính năng lưu trữ đặc biệt (như Full Disk Encryption) có thể làm tăng mức độ nghiêm trọng của lỗi.

#### 2.3. Ảnh hưởng
Khi lỗi này xảy ra, MySQL có thể bị crash hoặc khởi động lại không mong muốn và trong một số trường hợp, cơ sở dữ liệu có thể không thể phục hồi được dữ liệu sau khi crash. Điều này sẽ ảnh hưởng nghiêm trọng đến tính sẵn sàng và độ tin cậy của dịch vụ, đặc biệt là trong môi trường sản xuất.
#### 2.4. Giải pháp khắc phục và khuyến nghị
  * Sử dụng các index đơn thay vì combo index khi làm việc với cột JSON.
  * Tránh tạo index trực tiếp trên cột JSON hoặc nếu cần, hãy sử dụng generated columns (các cột sinh ra từ dữ liệu JSON) để index những giá trị cụ thể trong JSON.
  * Cập nhật MySQL lên các version mới hơn (ví dụ 8.0.42), vì lỗi này đã được xác nhận và sửa trong một số phiên bản MySQL sau khi báo cáo.

### 3. Lỗi Metadata Lock Storm
#### 3.1. Dấu hiệu nhận biết
Khi sử dụng MySQL trong mô hình HA, có thể gặp phải tình trạng sau: database cluster MySQL vẫn hoạt động bình thường (node Master có thể đọc/ghi mà không gặp vấn đề), nhưng trên 2 node slave, lag dữ liệu có thể tăng cao (lên tới khoảng 2 giờ). Đồng thời, trên các node slave xuất hiện hiện tượng nhiều thread trong trạng thái "**Waiting for table metadata lock** ", như sau:
`     1073    admin   10.225.65.36:25680      fpt     Query   178     Waiting for table metadata lock SELECT COUNT(1) AS `cnt` FROM `user_notifications` `UserNotificationEntity` WHERE ( ((`UserNotificat  
     1075    admin   10.225.65.36:25694      fpt     Query   178     Waiting for table metadata lock SELECT COUNT(1) AS `cnt` FROM `user_notifications` `UserNotificationEntity` WHERE ( ((`UserNotificat  
     1077    admin   10.225.65.36:34558      fpt     Query   176     Waiting for table metadata lock SELECT COUNT(1) AS `cnt` FROM `user_notifications` `UserNotificationEntity` WHERE ( ((`UserNotificat  
     1078    admin   10.225.65.36:34570      fpt     Query   174     Waiting for table metadata lock SELECT COUNT(1) AS `cnt` FROM `user_notifications` `UserNotificationEntity` WHERE ( ((`UserNotificat  
     1083    agent   10.225.65.46:36868      NULL    Query   167     Waiting for table metadata lock SELECT table_schema, table_name, column_name, auto_increment,\n          CAST(pow(2, case data_type\n  
     1116    admin   10.225.65.36:49646      fpt     Query   125     Waiting for table metadata lock SELECT COUNT(1) AS `cnt` FROM `user_notifications` `UserNotificationEntity` WHERE ( ((`UserNotificat  
     1118    admin   10.225.65.36:49652      fpt     Query   124     Waiting for table metadata lock SELECT COUNT(1) AS `cnt` FROM `user_notifications` `UserNotificationEntity` WHERE ( ((`UserNotificat  
     `
Lỗi này xảy ra sau khi bạn thực hiện lệnh DDL trên bảng user_notifications, khiến database (2 node slave) rơi vào trạng thái Metadata Lock Storm.
#### 3.2. Nguyên nhân
MySQL sử dụng cơ chế Metadata Lock (MDL) để bảo vệ các thông tin cấu trúc của bảng (bao gồm schema-level và table-level) khi thực thi các lệnh DDL (Data Definition Language) và DML (Data Manipulation Language).
Trong môi trường MySQL InnoDB Cluster, các giao dịch replicated DDL (như ALTER TABLE, CREATE INDEX, DROP TABLE, ...) được thực hiện tuần tự trên các node slave bởi applier thread. Trong khi đó, vì một lý do nào đó như một truy vấn dài hoặc DML chưa commit mà session người dùng có thể đang giữ MDL lock. Khi đó sẽ dẫn đến tình trạng applier thread phải chờ lock quá lâu.
Khi applier thread không thể lấy được lock kịp thời, các transaction khác trong GR queue (Global Replication Queue) bị nghẽn theo dây chuyền (điều này có thể thấy trên bảng user_notifications của ví dụ nói trên). Kết quả là, applier thread trên node slave bị treo, dẫn đến các thread truy nhập vào bảng cũng bị treo và việc truy cập vào node slave khó có thể thực hiện được và gây lỗi trên ứng dụng.
#### 3.3. Ảnh hưởng
Khi lỗi này xảy ra, các truy vấn người dùng và giao dịch sẽ bị block, dẫn đến gián đoạn truy cập dữ liệu và tăng độ trễ hệ thống. Trong môi trường MySQL Cluster, việc này có thể làm nghẽn các giao dịch replication, gây ra lag dữ liệu và giảm hiệu suất chung của hệ thống.
#### 3.4. Giải pháp khắc phục và khuyến nghị
Để thoát khỏi tình trạng Metadata Lock Storm trong trường hợp này, cần thực hiện các thao tác sau:
  * Bước 1: Tạm dừng các ứng dụng hoặc dịch vụ đang truy cập vào bảng liên quan đến tác vụ DDL → Mục đích: ngăn phát sinh thêm các truy vấn mới giữ metadata lock hoặc chờ lock.
  * Bước 2: Restart các node slave nhằm giải phóng các thread đang giữ khóa → Việc khởi động lại giúp kết thúc các session hoặc thread “mắc kẹt”, từ đó cho phép quá trình DDL được apply thành công.

**Khuyến nghị** : Khi thực hiện nâng cấp các cụm cơ sở dữ liệu với các lệnh DDL trên các bảng có QPS (Queries Per Second) cao, nên ngắt kết nối các ứng dụng khỏi đối tượng (bảng, chỉ mục, v.v.) mà câu lệnh DDL tác động. Điều này giúp tránh tình trạng Metadata Lock Storm, bảo đảm quá trình nâng cấp diễn ra suôn sẻ và không gây gián đoạn hệ thống.
