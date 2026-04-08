---
id: "ubuntu-use-cases"
title: "Ubuntu Use Cases"
description: "Use case này liên quan đến việc tạo môi trường từ xa từ template Ubuntu, sau đó kết nối qua SSH để cài đặt thư viện PyTorch cần thiết."
sidebar_label: "Ubuntu Use Cases"
sidebar_position: 23
---

# Ubuntu Use Cases

## Tạo môi trường từ xa sử dụng Ubuntu
Use case này liên quan đến việc tạo môi trường từ xa từ template Ubuntu, sau đó kết nối qua SSH để cài đặt thư viện PyTorch cần thiết nhằm chuẩn bị cho workload AI.

### Bước 1: Tạo GPU Container sử dụng template Ubuntu
  * Chọn template Ubuntu
  * Chọn SSH Terminal Access và thêm public key của bạn [![Alt text](/img/migrated/Screenshot-2025-07-04-173921-e1a92ec9.png)](/img/migrated/Screenshot-2025-07-04-173921-e1a92ec9.png)

### Bước 2: Kết nối container qua SSH

Để kết nối qua SSH, sao chép lệnh và dán vào terminal của bạn. Bạn có thể sử dụng bất kỳ ứng dụng terminal nào như Command Prompt, PowerShell, hoặc terminal tích hợp trong VS Code. Use case này sẽ dùng VSCode. [![Alt text](/img/migrated/Screenshot-2025-07-04-174741-230551f8.png)](/img/migrated/Screenshot-2025-07-04-174741-230551f8.png)
Xem hướng dẫn chi tiết [tại đây](/vi/docs/gpu-container/)/ để có hướng dẫn đầy đủ.

### Bước 3: Thiết lập môi trường
  1. Cài đặt python3

```
apt update && apt install -y wget gnupg2 curl software-properties-common 
```

```
apt install -y python3 python3-pip python3-venv 
```

  2. Cài đặt Pytorch

```
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124   
```

Kiểm tra xem pytorch đã được cài đặt thành công chưa

```
python 3 
```

```
import torch 
```

  3. Chạy thuật toán ma trận

```
apt install vim 
```

```
vim matrix_mulplication.py 
```

```
python3 matrix_mulplication.py 
```
