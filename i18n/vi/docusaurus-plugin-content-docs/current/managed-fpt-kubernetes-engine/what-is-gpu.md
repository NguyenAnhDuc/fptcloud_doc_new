---
id: "what-is-gpu"
title: "GPU là gì?"
description: "Giới thiệu về GPU và nhu cầu sử dụng GPU trên Kubernetes."
sidebar_label: "GPU là gì?"
sidebar_position: "31"
draft: true
---

# GPU là gì?

## Định nghĩa
**Graphics Processing Units** — GPU là bộ xử lý sử dụng xử lý song song và băng thông bộ nhớ cao để thực hiện các tác vụ chuyên biệt như tăng tốc kết xuất đồ họa, tính toán đồng thời và xử lý dữ liệu. GPU đã trở nên thiết yếu cho các ứng dụng như trò chơi điện tử, xử lý hình ảnh 3D, chỉnh sửa video, đào tiền mã hóa và machine learning. GPU nhanh hơn và hiệu quả hơn CPU rất nhiều trong việc xử lý các tác vụ tính toán quy mô lớn.

## Vấn đề hiện tại: Nhu cầu sử dụng GPU trên Kubernetes
Với sự phát triển của công nghệ, đặc biệt là các mô hình deep learning, nhu cầu sử dụng GPU đang tăng nhanh khi các công ty công nghệ đầu tư mạnh vào AI. Với sự xuất hiện của các công cụ như ChatGPT và các công cụ xử lý ngôn ngữ/hình ảnh/video chủ yếu dựa vào khả năng AI, GPU thể hiện sức mạnh của mình. Đây cũng là lý do các công ty công nghệ lớn muốn sử dụng GPU để đáp ứng các yêu cầu AI ngày càng phát triển.
GPU vượt trội hơn CPU đáng kể trong deep learning, đặc biệt trong giai đoạn huấn luyện vốn tiêu tốn nhiều tài nguyên. Trong kiến trúc GPU, quá trình xử lý liên quan đến nhiều core và băng thông bộ nhớ cao, khiến quá trình deep learning hiệu quả hơn nhiều so với CPU.
Kết hợp với GPU, Kubernetes là giải pháp phù hợp cho AI. Ngày càng nhiều nhà khoa học dữ liệu chọn Kubernetes để tối ưu hóa huấn luyện và triển khai mô hình AI vì nhiều lý do: tự động triển khai, dễ mở rộng, cộng đồng phát triển đa dạng và hỗ trợ nhiều tính năng.
