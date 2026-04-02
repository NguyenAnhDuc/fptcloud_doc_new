---
id: "trien-khai-ung-dung-tren-worker-managed-gpu-cluster"
title: "Deploy an application on Managed GPU Cluster"
description: "This guide walks through deploying the DeepSeek-R1 model on FPT Managed GPU Cluster using Ollama and Open-WebUI."
sidebar_label: "Deploy an application on Managed GPU Cluster"
sidebar_position: 14
---

# Deploy an application on Managed GPU Cluster

Ollama is an open-source tool that lets you run, manage, and customize large language models (LLMs) on a personal computer or server, supporting many models such as Llama, DeepSeek, Mistral, and others. Open-WebUI is an open-source web interface designed specifically to interact with Ollama, providing a user-friendly and easy-to-use experience for managing and using LLM models.

This guide walks through the steps to deploy the DeepSeek-R1 model on FPT Managed GPU Cluster using Ollama and Open-WebUI so that users can interact with the model in a simple and intuitive way.

**Step 1:** Clone the Open-WebUI source code and scripts.

```bash
git clone https://github.com/open-webui/open-webui
cd open-webui/kubernetes
```

**Step 2:** Run the scripts to deploy Ollama and Open-WebUI. The directory already includes all necessary files for deployment: **namespace**, **ollama statefulSet**, **ollama service**, **open-webui deployment**, and **open-webui service**.

```bash
cd kubernetes
kubectl apply -f ./kubernetes/manifest
```

**Step 3:** Access Open-WebUI in a browser on the forwarded port, for example: _http://localhost:52433_. On the first installation and use of OpenWebUI, you will need to configure a name, email, and password.

[![](/img/migrated/36-bb032555.png)](/img/migrated/36-bb032555.png)

**Step 4:** After setup is complete, select a model to use. In this example, we will install the DeepSeek-R1 model, version **1.5b**.

[![](/img/migrated/37-51db1bb9.png)](/img/migrated/37-51db1bb9.png)

**Step 5:** Once the model has been downloaded and is running, users can interact with it in a simple and intuitive way through the interface.

[![](/img/migrated/38-b9243be2.png)](/img/migrated/38-b9243be2.png)
