---
id: "single-gpu-example"
title: "Single GPU example: serving an LLM with vLLM"
description: "This guide explains how to deploy and serve the Gemma 3 large language model (LLM) using a single GPU on FPT Kubernetes Engine (FKE GPU) with the vLLM framework."
sidebar_label: "Single GPU example: serving an LLM with vLLM"
sidebar_position: 21
---

# Single GPU example: serving an LLM with vLLM

This guide explains how to **deploy and serve the Gemma 3 large language model (LLM)** using a **GPU on FPT Kubernetes Engine (FKE GPU)** with the **vLLM framework** for inference serving.

The goal is to provide a foundation that helps you **understand and practice LLM deployment for inference** in a **managed Kubernetes environment**.

In this guide, you will:

- **Deploy a pre-built container** running **vLLM** on FKE.
- **Configure FKE** to **load the weights** of **Gemma 1B and 4B** versions from **Hugging Face**.

## Prepare the environment

### Prepare an FKE GPU cluster

Make sure you have:

- A Kubernetes cluster with GPU.
- GPU Operator installed.
- NVIDIA driver and container toolkit.
- Sufficient storage quota to create a Persistent Volume.

Check that the GPU node on K8s is ready with:

```bash
kubectl describe node
```

The node is ready when the `nvidia.com/gpu` resource has a value greater than 1 in the capacity and allocatable sections:

```
Capacity:
  ...
  nvidia.com/gpu:     8
  ...
Allocatable:
  ...
  nvidia.com/gpu:     8
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
            nvidia.com/gpu: "1"
          limits:
            cpu: "2"
            memory: "10Gi"
            ephemeral-storage: "10Gi"
            nvidia.com/gpu: "1"
        command: ["python3", "-m", "vllm.entrypoints.openai.api_server"]
        args:
        - --model=$(MODEL_ID)
        - --tensor-parallel-size=1
        - --host=0.0.0.0
        - --port=8000
        env:
        - name: LD_LIBRARY_PATH
          value: ${LD_LIBRARY_PATH}:/usr/local/nvidia/lib64
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

- `nvidia.com/gpu: "1"` — your container will use 1 GPU on the node.
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

Edit the Deployment manifest:

```yaml
...
volumeMounts:
  - mountPath: ~/.cache/huggingface/
    name: model
...
volumes:
  - name: model
    persistentVolumeClaim:
      claimName: data-pvc
...
```

## Serve the model

### Set up networking to access the model from outside the cluster

If you used a LoadBalancer service type when exposing the model, use the public IP of that load balancer.

If you used ClusterIP, port-forward the service:

```bash
kubectl port-forward service/llm-service 8000:8000
```

### Test the model

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

### Output

```json
{
  "id": "chatcmpl-b8bb8754b6bb46dc9e7fd416c2fe0cd6",
  "object": "chat.completion",
  "model": "google/gemma-3-1b-it",
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Hello there! I'm doing well, thank you "
      }
    }
  ]
}
```
