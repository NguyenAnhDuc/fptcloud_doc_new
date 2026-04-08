---
id: "ubuntu-use-cases"
title: "Ubuntu Use Cases"
description: "This use case involves creating a remote environment from Ubuntu template, then connecting via SSH to install the necess"
sidebar_label: "Ubuntu Use Cases"
sidebar_position: 23
---

# Ubuntu Use Cases

## Create a Remote Environment using Ubuntu
This use case involves creating a remote environment from Ubuntu template, then connecting via SSH to install the necessary PyTorch library to prepare it for your AI workload.

### Step 1: Create a GPU Container using Ubuntu template
  * Choose Ubuntu template 
  * Select SSH Terminal Access and add your public keys [![Alt text](/img/migrated/Screenshot-2025-07-04-173921-e1a92ec9.png)](/img/migrated/Screenshot-2025-07-04-173921-e1a92ec9.png)

### Step 2: Connect your container via SSH

To connect via SSH, copy the command and paste it into your terminal. You can use any terminal application, such as Command Prompt, PowerShell, or the integrated terminal in VS Code. This use case will use VSCode. [![Alt text](/img/migrated/Screenshot-2025-07-04-174741-230551f8.png)](/img/migrated/Screenshot-2025-07-04-174741-230551f8.png)
See our detailed guide [here ](/docs/en/gpu-container/)/for a full walkthrough. 

### Step 3: Setting Up Your Environment
  1. Install python3 

```
Copyapt update && apt install -y wget gnupg2 curl software-properties-common 
```

```
Copyapt install -y python3 python3-pip python3-venv 
```

  2. Install Pytorch 

```
Copypip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124   
```

Check if pytorch is installed successfully 

```
Copypython 3 
```

```
Copyimport torch 
```

  3. Run a matrix algorithm 

```
Copyapt install vim 
```

```
Copyvim matrix_mulplication.py 
```

```
Copypython3 matrix_mulplication.py 
```
