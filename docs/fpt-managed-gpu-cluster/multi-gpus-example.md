---
id: "multi-gpus-example"
title: "Multi-GPU example: serving an LLM with vLLM"
description: "This guide explains how to deploy and serve the Gemma 3 large language model (LLM) using multiple GPUs on FPT Kubernetes Engine (FKE GPU) with the vLLM framework."
sidebar_label: "Multi-GPU example: serving an LLM with vLLM"
sidebar_position: 22
---

# Multi-GPU example: serving an LLM with vLLM

This guide explains how to **deploy and serve the Gemma 3 large language model (LLM)** using multiple **GPUs on FPT Kubernetes Engine (FKE GPU)** with the **vLLM framework**.

In this guide, you will:

- **Configure FKE** to load Gemma weights from Hugging Face.
- Deploy the LLM model across multiple GPUs.

This guide is intended for Machine Learning (ML) engineers, platform administrators and operators, and Data and AI professionals who are interested in using Kubernetes container orchestration to serve large language models (LLMs).

## Prepare the environment

### Prepare an FKE GPU cluster

- A Kubernetes cluster with GPU.
- GPU Operator installed.
- NVIDIA driver and container toolkit.
- Sufficient storage quota.

Check the GPU node:

```bash
kubectl describe node
```

The node is ready if GPU resources are available:

```
Capacity:
  ...
  nvidia.com/gpu: 8
  ...
Allocatable:
  ...
  nvidia.com/gpu: 8
  ...
```

### Prepare a Hugging Face token (optional)

Go to the Hugging Face website, create a token, and create a Kubernetes Secret containing it:

```bash
kubectl create secret generic hf-secret \
  --from-literal=hf_api_token=${HF_TOKEN} \
  --dry-run=client -o yaml | kubectl apply -f -
```

## Deploy vLLM

In this section, you deploy the vLLM container to serve the Gemma model. This guide uses a Kubernetes Deployment, which allows you to run multiple Pod replicas distributed across nodes in the cluster.

### Deploy vLLM using a Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: vllm-gemma-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: gemma-server
  template:
    metadata:
      labels:
        app: gemma-server
    spec:
      containers:
      - name: inference-server
        image: docker.io/vllm/vllm-openai:v0.10.0
        resources:
          requests:
            cpu: "2"
            memory: "10Gi"
            ephemeral-storage: "10Gi"
            nvidia.com/gpu: "2"
          limits:
            cpu: "2"
            memory: "10Gi"
            ephemeral-storage: "10Gi"
            nvidia.com/gpu: "2"
        command: ["python3", "-m", "vllm.entrypoints.openai.api_server"]
        args:
          - --model=$(MODEL_ID)
          - --tensor-parallel-size=2
          - --host=0.0.0.0
          - --port=8000
        env:
          - name: MODEL_ID
            value: google/gemma-3-1b-it
          - name: HUGGING_FACE_HUB_TOKEN
            valueFrom:
              secretKeyRef:
                name: hf-secret
                key: hf_api_token
        volumeMounts:
          - mountPath: /dev/shm
            name: dshm
      volumes:
        - name: dshm
          emptyDir:
            medium: Memory
```

Where:

- `nvidia.com/gpu: "2"` — your container will use 2 GPUs on the node.
- `--tensor-parallel-size=2` — uses tensor parallelism to run the model across 2 GPUs.
- `MODEL_ID` — the model name on Hugging Face.
- `HUGGING_FACE_HUB_TOKEN` — the Hugging Face token you created.
- `dshm` volume — a shared memory volume, important for distributed inferencing/training use cases.

### Expose the model

To expose the model, create a Kubernetes Service. If the service type is LoadBalancer instead of ClusterIP, the model can be accessed from the internet:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: llm-service
spec:
  selector:
    app: gemma-server
  type: ClusterIP
  ports:
    - protocol: TCP
      port: 8000
      targetPort: 8000
```

### Set up persistent storage (optional)

With the configuration above, model weights are stored in the container's file system. When the container restarts, the weights need to be downloaded again.

To avoid this, you can pre-store the model in a volume so that model weights persist across container restarts.

Create a PersistentVolumeClaim:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: data-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
```

## Serve the model

### Set up networking to access the model from outside the cluster

If you used a LoadBalancer service type when exposing the model, use the public IP of that load balancer.

If you used ClusterIP, port-forward the service:

```bash
kubectl port-forward service/llm-service 8000:8000
```

### Interact with the model

This section shows how to perform a **basic test** to verify the **Gemma 3 models**. For other models, replace `gemma-3-1b-it` with the corresponding model name.

This example demonstrates how to test the **Gemma 3 1B model** with **text-only input**.

In a new terminal session, use curl to chat with your model:

```bash
curl http://127.0.0.1:8000/v1/chat/completions \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "model": "google/gemma-3-1b-it",
    "messages": [
      {
        "role": "user",
        "content": "Hello, how are you?"
      }
    ]
  }'
```
