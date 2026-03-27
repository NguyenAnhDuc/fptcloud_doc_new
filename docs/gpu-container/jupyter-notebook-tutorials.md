---
id: "jupyter-notebook-tutorials"
title: "Jupyter Notebook Tutorials"
description: "This guide walks you through running an object detection model using YOLOv8 on Jupyter Notebook, from setup to inference"
sidebar_label: "Jupyter Notebook Tutorials"
sidebar_position: 17
---

# Jupyter Notebook Tutorials

This guide walks you through running an object detection model using YOLOv8 on Jupyter Notebook, from setup to inference 
  1. Create a new container using **Jupyter Notebook** [follow this guide here](https://fptcloud.com/en/documents/fpt-gpu-container/?doc=manage-containers#contentify_0). [![Alt text](/img/migrated/object-detect-28f574ef.png)](/img/migrated/object-detect-28f574ef.png)
  2. After creating container successfully, open the container via HTTPs 
  3. Now, pulling YOLOv8 model using terminal in the Jupyter Notebook container that we have just created

  * Step 1: Setup environment to run YOLO models, in this lab, we will use YOLOv8 to detect type of animals 

```
Copypip install ultralytics 
apt update && apt install -y libglib2.0-0 libgl1
```

  * Step 2: Install YOLOv8

```
Copyfrom ultralytics import YOLO  
import cv2  
import matplotlib.pyplot as plt  
import torch  
model = YOLO("yolov8l.pt") 
```

  * Step 3: Load model into NVIDIA GPU H100 then check whether the model is using correct GPU 

```
Copymodel.to("cuda") 
print("Model device:", model.device)  
print("GPU available:", torch.cuda.is_available())  
print("GPU name:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "No GPU")  
print("Current device:", torch.cuda.current_device() if torch.cuda.is_available() else "None") 
```

  * Step 4: Object detecting using YOLOv8: load an image of some animals into the current workspace, run command below to detect the type of animals in the picture 

[!(/img/migrated/information-fill-1-30ad0c7d.png)](/img/migrated/information-fill-1-30ad0c7d.png)
**Notice:** The picture "640px-MountainLion.jpg" in this demo is pushed from local, please upload your own image and replace into the img_path before running .

```
Copyimg_path = "640px-MountainLion.jpg"  
results = model(img_path) 
allocated = torch.cuda.memory_allocated() / 10242 
reserved = torch.cuda.memory_reserved() / 10242 
print(f"Memory allocated: {allocated:.2f} MB")  
print(f"Memory reserved: {reserved:.2f} MB") 
results[0].show() 
```