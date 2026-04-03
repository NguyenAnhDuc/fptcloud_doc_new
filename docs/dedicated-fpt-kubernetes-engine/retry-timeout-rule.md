---
id: "retry-timeout-rule"
title: "Retry Timeout Rule"
description: "Trong quá trình sử dụng **Kubernetes Engine** , hệ thống có thể bị timeout trong 2 process sau:"
sidebar_label: "Retry Timeout Rule"
sidebar_position: "28"
---

# Retry timeout rule

Trong quá trình sử dụng **Kubernetes Engine** , hệ thống có thể bị timeout trong 2 process sau: 
➤ Provision 
➤ Scaling 
① **Timeout Provision**
Trong quá trình provision 1 cụm Kubernetes Engine, hệ thống có thể phát sinh vấn đề dẫn tới timeout, được tính toán theo bảng:   
| First Header  | Condition  |  
| --- | --- |  
| Provisioning => Slowing  | 20 Min  |  
| Slowing => Pending  | 20 Min  |  
| Pending => Error (timeout)  | 40 Min  |  
  * Khi provision sẽ xảy ra 2 trường hợp 

▪ Provision thành công 
▪ Provision không thành công 
  * Khi Provision không thành công, sẽ có 2 tình huống: 

▪ Provision thành công nhưng mất đồng bộ status: 
◦ Lúc này, cụm K8s thực chất đã được tạo thành công 
◦ Khi chọn retry, hệ thống sẽ đồng bộ lại dữ liệu và không chạy lại provision process 
▪ Khi provision không thành công do lỗi processing: 
◦ Nếu status = failed thì hiển thị retry cho phép người dùng thử lại. 
◦ Nếu status = provisioning, hệ thống sẽ bắt đầu đếm thời gian từ lúc submit request. 
▫ Nếu status = provisioning, hệ thống sẽ bắt đầu đếm thời gian từ lúc submit request. 
▫ Sau 20 phút từ khi chuyển status = slowing mà chưa có thay đổi trạng thái, hệ thống sẽ chuyển status => pending 
▫ Sau 40 phút từ khi chuyển status = pending mà chưa có thay đổi trạng thái, hệ thống sẽ chuyển status => error 
▫ Khi status = error, cho phép user có action retry. Hệ thống sẽ reset bộ counting và bắt đầu quá trình scale lại từ đầu 
▫ Tổng thời gian từ lúc bắt đầu provision cho tới khi timeout hoàn toàn là 1 tiếng 20 phút 
◦ Khi status = error, cho phép user retry 
[![](/img/migrated/Picture6-2-22819bd9.png)](/img/migrated/Picture6-2-22819bd9.png)
② **Timeout Scaling**
Khi tạo Kubernetes Cluster thành công và trong quá trình sử dụng hệ thống tự động autoscale hoặc user tiến hành manual scale, core xử lý sẽ tiến hành scale up/down các node:   
| Status change  | 1 <= worker add < 5  | 5 < worker add  |  
| --- | --- | --- |  
| Running => Slowing  | 10 Min  | 10 min + (worker add num - 5) x 3 min  |  
| Slowing => Pending  | 20 Min  | 20 min + (worker add num - 5) x 3 min  |  
| Pending => Error (timeout)  | 30 Min  | 30 min + (worker add num - 5) x 3 min  |  
  * Khi scaling sẽ xảy ra 2 trường hợp:

▪ Scaling thành công 
▪ Scaling không thành công 
  * Khi scaling không thành công, sẽ có 2 tình huống: 

▪ Scaling thành công nhưng mất đồng bộ status 
◦ Lúc này, cụm K8s thực chất đã có thêm số worker như điều kiện scale 
◦ Khi chọn retry, hệ thống sẽ đồng bộ lại dữ liệu và không chạy lại scaling process 
▪ Khi scaling không thành công do lỗi processing: 
◦ Nếu status = failed thì hiển thị retry cho phép người dùng thử lại. 
◦ Nếu status = processing, hệ thống sẽ bắt đầu đếm thời gian từ lúc submit request 
▫ Sau 10 phút (tăng thêm theo số lượng worker add thêm) mà vẫn chưa có thay đổi trạng thái (failed/success), hệ thống sẽ chuyển status hiển thị thành slowing 
▫ Sau 20 phút từ khi chuyển status = slowing mà chưa có thay đổi trạng thái, hệ thống sẽ chuyển status => pending 
▫ Sau 30 phút từ khi chuyển status = pending mà chưa có thay đổi trạng thái, hệ thống sẽ chuyển status => error 
▫ Khi status = error, cho phép user có action retry. Hệ thống sẽ reset bộ counting và bắt đầu quá trình scale lại từ đầu 
▫ Tổng thời gian từ lúc bắt đầu scale cho tới khi timeout hoàn toàn là 1 tiếng (tăng thêm với trên 5 worker thêm mới) 
  * Khi cụm về trạng thái error, user có thể chọn **Retry**

[![](/img/migrated/Picture5-2-3cb10329.png)](/img/migrated/Picture5-2-3cb10329.png)
