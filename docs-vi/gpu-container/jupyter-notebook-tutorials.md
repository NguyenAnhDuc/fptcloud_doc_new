---
id: "jupyter-notebook-tutorials"
title: "Jupyter Notebook Tutorials"
description: "Hướng dẫn này giúp bạn chạy mô hình nhận diện đối tượng bằng YOLOv8 trên Jupyter Notebook, từ cài đặt đến suy luận."
sidebar_label: "Jupyter Notebook Tutorials"
sidebar_position: 17
---

# Jupyter Notebook Tutorials

Hướng dẫn này giúp bạn chạy mô hình nhận diện đối tượng bằng YOLOv8 trên Jupyter Notebook, từ cài đặt đến suy luận.
  2. Sau khi tạo container thành công, mở container qua HTTPs
  3. Kéo mô hình YOLOv8 bằng terminal trong container Jupyter Notebook vừa tạo

  * Bước 1: Cài đặt môi trường để chạy mô hình YOLO, trong bài lab này chúng ta sẽ dùng YOLOv8 để phát hiện loại động vật

```
pip install ultralytics 
apt update && apt install -y libglib2.0-0 libgl1
```

  * Bước 2: Cài đặt YOLOv8

```
from ultralytics import YOLO  
import cv2  
import matplotlib.pyplot as plt  
import torch  
model = YOLO("yolov8l.pt") 
```

  * Bước 3: Tải mô hình lên NVIDIA GPU H100 và kiểm tra xem mô hình có đang sử dụng đúng GPU không

```
model.to("cuda") 
print("Model device:", model.device)  
print("GPU available:", torch.cuda.is_available())  
print("GPU name:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "No GPU")  
print("Current device:", torch.cuda.current_device() if torch.cuda.is_available() else "None") 
```

  * Bước 4: Nhận diện đối tượng bằng YOLOv8: tải ảnh một số động vật vào workspace hiện tại, chạy lệnh bên dưới để phát hiện loại động vật trong ảnh

[!(/img/migrated/information-fill-1-30ad0c7d.png)](/img/migrated/information-fill-1-30ad0c7d.png)
**Lưu ý:** Hình ảnh "640px-MountainLion.jpg" trong demo này được đẩy lên từ máy local, hãy tải ảnh của bạn lên và thay thế vào img_path trước khi chạy.

```
img_path = "640px-MountainLion.jpg"  
results = model(img_path) 
allocated = torch.cuda.memory_allocated() / 10242 
reserved = torch.cuda.memory_reserved() / 10242 
print(f"Memory allocated: {allocated:.2f} MB")  
print(f"Memory reserved: {reserved:.2f} MB") 
results[0].show() 
```
