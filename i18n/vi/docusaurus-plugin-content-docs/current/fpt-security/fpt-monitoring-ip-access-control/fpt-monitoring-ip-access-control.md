---
id: "fpt-monitoring-ip-access-control"
title: "FPT Monitoring – IP Access Control"
description: "Quản lý truy cập IP cho các endpoint FPT Monitoring của bạn."
sidebar_label: "FPT Monitoring – IP Access Control"
sidebar_position: 1
---

# FPT Monitoring – IP Access Control

IP Access Control cho phép bạn kiểm soát các địa chỉ IP được phép truy cập vào các endpoint FPT Monitoring, bao gồm Grafana Dashboard, Metric datasource, Log datasource và Trace datasource.

Mặc định, khi IP Access Control **chưa được bật**, tất cả địa chỉ IP đều có thể truy cập hệ thống. Khi tính năng được **bật**, mọi truy cập từ bên ngoài FPT Cloud sẽ bị chặn cho đến khi IP được thêm vào danh sách whitelist.
