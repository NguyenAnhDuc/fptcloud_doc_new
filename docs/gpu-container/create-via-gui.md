---
id: "create-via-gui"
title: "Create Via Gui"
description: "[!(/img/migrated/information-fill-1-30ad0c7d.png)](/img/migrated/information-fill-1-30ad0c7d.png)"
sidebar_label: "Create Via Gui"
sidebar_position: 5
---

# Create Via Gui

[!(/img/migrated/information-fill-1-30ad0c7d.png)](/img/migrated/information-fill-1-30ad0c7d.png)
**Notice:** Each tenant can only have a maximum of 10 containers. If you have reached this limit, please delete unused container to create a new one.
### 1. Select GPU Container in the Side menu and click button “Create New Container”
### 2. Give your container a name using Container Name field.
### 3. Select a GPU Instance (we currently support NVIDIA GPU H100 and H200)
### 4. Template:
Users can either choose to use built-in templates or use their own images. We highly recommend that our customers use built-in templates for faster deployment. 
#### a. Built-in templates: Click “Change Template” and choose the template.
[![Alt text](/img/migrated/Screenshot-2025-06-19-144905-bbf38c4a.png)](/img/migrated/Screenshot-2025-06-19-144905-bbf38c4a.png)
#### b. Custom template: Bring your own template by using the feature “Custom Template”.
[![Alt text](/img/migrated/Screenshot-2025-06-19-145912-f00bf337.png)](/img/migrated/Screenshot-2025-06-19-145912-f00bf337.png)
### 5. Access Container.
#### a. Ports
This feature significantly enhances the flexibility of your containerized applications, allowing a single container to serve diverse functionalities on different ports. 
Both HTTP and TCP ports are supported, with a maximum of 10 ports per type for each container. 
#### b. SSH
Add SSH keys to enable remote access to your container. Each container supports a maximum of 10 SSH keys. These keys will be injected into the container at runtime, allowing you to SSH into the container using any of the provided keys. 
[!(/img/migrated/information-fill-1-30ad0c7d.png)](/img/migrated/information-fill-1-30ad0c7d.png)
**Notice:** Currently, v1.1.2 GPU Container only Ubuntu template already includes SSH configuration. If you want to connect SSH in other templates, please install OpenSSH-server before using.
To add an SSH keys, please follow the instructions: 
  1. Ensure you have an SSH key pair generated on your local machine. If you haven’t done this, you can generate one using this command on your local terminal: 

```
Copyssh-keygen -t ed25519 -C YOUR_EMAIL@DOMAIN.COM
```

  2. To retrieve your public SSH key, run this command:

```
Copycat ~/.ssh/id_ed25519.pub
```

This will output something similar to this: 

```
Copyssh-ed25519 AAAAC4NzaC1lZDI1JTE5AAAAIGP+L8hnjIcBqUb8NRrDiC32FuJBvRA0m8jLShzgq6BQ YOUR_EMAIL@DOMAIN.COM
```

  3. Copy and paste the output into the SSH Public Keys field: [![Alt text](/img/migrated/Screenshot-2025-07-08-084117-1-f6d63798.png)](/img/migrated/Screenshot-2025-07-08-084117-1-f6d63798.png)

### 6. Advanced Settings (Optional)
This section includes: 
a. **Persistent Disk** : specify the amount of storage that users need to store training weights, models, etc. Read more about Storage [here](../gpu-container/index.md)
b. **Environment Variables** : key-value pairs injected into the container at runtime.
c. **Startup Command** : command and arguments to run at the start of container. 
### 7. Click **“Create New Container”** to create and start your container.
### 8. Add credit
In case your balance is not enough to create a new container (lower cost of using the container for 1 hour), please follow these instructions to add credit to your account: [Add Credits](./add-credit.md)