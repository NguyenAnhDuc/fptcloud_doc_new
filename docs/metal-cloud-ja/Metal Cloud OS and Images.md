---
id: "Metal Cloud OS and Images"
title: "Custom image"
description: "FPT Images are custom images built by FPT"
sidebar_label: "Custom image"
sidebar_position: 5
---

# Custom image

## FPT Images

FPT Image is a custom image built by FPT that lets you get started immediately with any available GPU server. The image comes with several components required for AI workloads, with Ubuntu/CentOS chosen as the operating system (OS).

The versions of installed dependencies* are optimized for compatibility and may not be the latest versions available.

| Operating system | Version |
| --- | --- |
| Ubuntu | 22.04 |

- OS-independent.

| Dependency | Version | Ubuntu 22.04 GPU | AI/ML Ready |
| --- | --- | --- | --- |
| NVIDIA Driver | 560.35.03 | ✔️ | ✔️ |
| NVIDIA CUDA Toolkit | 12.6.85 | ✔️ | ✔️ |
| NVIDIA Fabric Manager (NVSwitch Driver) | 560.35 | ✔️ | ✔️ |
| MLNX_OFED (InfiniBand Driver) | 24.10 | ✔️ | ✔️ |
| NVIDIA Datacenter GPU Manager | 3.3.9 | ✔️ | ✔️ |
| VAST Data Client | 4.0.32 | ✔️ | ✔️ |
| Python | 3.10.12 | ✔️ | ✔️ |
| NVIDIA Container Toolkit | 1.17.4 | ❌ | ✔️ |
| NVIDIA cuDNN | 9.7.1.26 | ❌ | ✔️ |
| Docker | 28.0.1 | ❌ | ✔️ |
| PyTorch | 2.6.0+cu12.6 | ❌ | ✔️ |

Custom image templates let you capture an image of the Bare Metal GPU Server and replicate the configuration with minimal changes to the ordering process. Image templates provide an imaging option for all Bare Metal GPU Servers regardless of operating system. Once the image template is complete, you can use it to create another Bare Metal GPU Server.

## Upload an image

1. Sign in to your FPTCloud account and select the tenant, region, and **VPC** (if you have multiple).
2. Go to **AI Infrastructure** and **Custom images** in the sidebar, then click **Upload image**.
3. To upload the file, either **select a file from your computer** or **drag and drop the file** in the browser.
4. Enter the **image name**.
5. Click **Upload image**.

_You cannot use this image to create a new server until the image creation process is complete. The processing time for the image template depends on the resources available on the physical host and the amount of data captured in the image template._

## Resume processing

You can resume file processing if it fails.

1. In the custom image list, click **Action** for the custom image with a **Failed** status.
2. Select **Resume**.

## Delete an image

1. In the custom image list, click **Action** for the custom image you want to delete and select **Delete**.
2. A confirmation window titled **"Delete custom image"** will open. Click **Delete image** to confirm the deletion.

_Deleting an image from your account does not delete the servers created from that custom image. Bare Metal GPU Servers can be destroyed separately from the FPT Customer Portal._
