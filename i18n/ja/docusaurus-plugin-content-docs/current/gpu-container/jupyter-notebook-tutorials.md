---
id: "jupyter-notebook-tutorials"
title: "Jupyter Notebook Tutorials"
description: "このガイドでは、Jupyter Notebook上でYOLOv8を使用した物体検出モデルをセットアップから推論まで実行する方法を説明します。"
sidebar_label: "Jupyter Notebook Tutorials"
sidebar_position: 17
---

# Jupyter Notebook Tutorials

このガイドでは、Jupyter Notebook上でYOLOv8を使用した物体検出モデルをセットアップから推論まで実行する方法を説明します。
  2. コンテナの作成に成功したら、HTTPs経由でコンテナを開きます
  3. 作成したばかりのJupyter NotebookコンテナのターミナルでYOLOv8モデルをプルします

  * ステップ1：YOLOモデルを実行するための環境を設定します。このラボでは、動物の種類を検出するためにYOLOv8を使用します

```
pip install ultralytics 
apt update && apt install -y libglib2.0-0 libgl1
```

  * ステップ2：YOLOv8をインストールする

```
from ultralytics import YOLO  
import cv2  
import matplotlib.pyplot as plt  
import torch  
model = YOLO("yolov8l.pt") 
```

  * ステップ3：モデルをNVIDIA GPU H100にロードし、正しいGPUを使用しているか確認する

```
model.to("cuda") 
print("Model device:", model.device)  
print("GPU available:", torch.cuda.is_available())  
print("GPU name:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "No GPU")  
print("Current device:", torch.cuda.current_device() if torch.cuda.is_available() else "None") 
```

  * ステップ4：YOLOv8を使用した物体検出：現在のワークスペースに動物の画像をロードし、以下のコマンドを実行して画像内の動物の種類を検出します

[!(/img/migrated/information-fill-1-30ad0c7d.png)](/img/migrated/information-fill-1-30ad0c7d.png)
**注意：** このデモの画像「640px-MountainLion.jpg」はローカルからプッシュされています。独自の画像をアップロードし、実行前にimg_pathに置き換えてください。

```
img_path = "640px-MountainLion.jpg"  
results = model(img_path) 
allocated = torch.cuda.memory_allocated() / 10242 
reserved = torch.cuda.memory_reserved() / 10242 
print(f"Memory allocated: {allocated:.2f} MB")  
print(f"Memory reserved: {reserved:.2f} MB") 
results[0].show() 
```
