---
id: "multi-nodes-example"
title: "Multi-node example: vLLM and multi-host serving"
description: "This guide explains how to deploy and serve the Gemma 3 large language model (LLM) across multiple nodes on FPT Kubernetes Engine (FKE GPU) using the vLLM framework."
sidebar_label: "Multi-node example: vLLM and multi-host serving"
sidebar_position: 23
---

# Multi-node example: vLLM and multi-host serving

This guide explains how to **deploy and serve the Gemma 3 large language model (LLM)** across multiple **nodes on FPT Kubernetes Engine (FKE GPU)** using the **vLLM framework** for inference serving.

The goal is to provide a foundation that helps you **understand and practice LLM deployment for inference** in a **managed Kubernetes environment**.

In this guide, you will:

- **Configure FKE** to **load the weights** of **Gemma 1B and 4B** versions from **Hugging Face**.
- Deploy the LLM model across multiple nodes.

This guide is intended for Machine Learning (ML) engineers, platform administrators and operators, and Data and AI professionals who are interested in using Kubernetes container orchestration to serve large language models (LLMs).

## Background

### GPUs

Graphics Processing Units (GPUs) let you accelerate specific workloads such as machine learning and data processing. FKE provides nodes equipped with powerful GPUs, allowing you to configure your cluster for optimal performance on machine learning and data processing tasks. FKE offers multiple machine type options for node configuration, including machine types using NVIDIA H100, A30, and A100 GPUs.

### LeaderWorkerSet (LWS)

LeaderWorkerSet (LWS) is an open-source Kubernetes project designed to address AI/ML deployment patterns across multiple nodes. Deploying AI workloads across multiple nodes uses multiple Pods, each of which can run on different nodes, handling distributed inference workloads. LWS allows you to view and manage multiple Pods as a group, simplifying the operation and management of distributed model serving.

### vLLM and multi-host serving

When deploying computationally intensive LLM models, we recommend using vLLM and running it across multiple GPUs.

vLLM is a highly optimized open-source LLM serving framework that improves GPU serving throughput with features such as:

- Optimized transformer implementation with PagedAttention.
- Continuous batching mechanism to improve overall serving throughput.
- Distributed serving across multiple GPUs.

For LLM models with especially high compute requirements that cannot fit on a single GPU node, you can use multiple GPU nodes to serve the model. vLLM supports running across multiple GPUs with two strategies:

- **Tensor parallelism** splits matrix multiplications in the transformer layers across multiple GPUs. However, this strategy requires high-speed networking due to frequent inter-GPU communication, making it less suitable for multi-node deployments.
- **Pipeline parallelism** splits the model layer by layer (vertically). This strategy does not require continuous inter-GPU communication, making it more suitable for running the model across multiple nodes.

You can combine both strategies in multi-node serving. For example, when using two nodes each with eight A30 GPUs, you can apply:

- Two-way pipeline parallelism to split the model across two nodes.
- Eight-way tensor parallelism to split the model across eight GPUs within each node.

## Prepare the environment

### Prepare an FKE GPU cluster

Make sure you have:

- A Kubernetes cluster with at least 2 GPU nodes.
- GPU Operator installed.
- NVIDIA driver and container toolkit.
- Sufficient storage quota to create a Persistent Volume.

Check that GPU nodes on K8s are ready with:

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
kubectl create secret generic hf-secret --from-literal=hf_api_token=${HF_TOKEN} --dry-run=client -o yaml | kubectl apply -f -
```

### Install LeaderWorkerSet

Install LeaderWorkerSet with the following command:

```bash
kubectl apply --server-side -f https://github.com/kubernetes-sigs/lws/releases/latest/download/manifests.yaml
```

Validate the LeaderWorkerSet installation:

```bash
kubectl get pod -n lws-system
```

## Deploy vLLM server for multi-node serving

In this section, you deploy the vLLM container to serve the Gemma model. This guide uses a Kubernetes Deployment. LeaderWorkerSet is used here — using LeaderWorkerSet with vLLM does not change the vLLM configuration compared to deploying the model with vLLM alone.

### Deploy vLLM using LeaderWorkerSet

```yaml
apiVersion: leaderworkerset.x-k8s.io/v1
kind: LeaderWorkerSet
metadata:
  name: vllm
spec:
  replicas: 1
  leaderWorkerTemplate:
    size: 2
    restartPolicy: RecreateGroupOnPodRestart
    leaderTemplate:
      metadata:
        labels:
          role: leader
      spec:
        containers:
          - name: vllm-leader
            image: vllm/vllm-openai:v0.8.5
            env:
              - name: HUGGING_FACE_HUB_TOKEN
                valueFrom:
                  secretKeyRef:
                    name: hf-secret
                    key: hf_api_token
            command:
              - sh
              - -c
              - |
                bash /vllm-workspace/examples/online_serving/multi-node-serving.sh leader --ray_cluster_size=$(LWS_GROUP_SIZE);
                python3 -m vllm.entrypoints.openai.api_server \
                  --port 8080 \
                  --model google/gemma-3-1b-it \
                  --tensor-parallel-size 1 \
                  --pipeline-parallel-size 2 \
                  --trust-remote-code \
                  --max-model-len 4096
            resources:
              limits:
                nvidia.com/gpu: "1"
            ports:
              - containerPort: 8080
            readinessProbe:
              tcpSocket:
                port: 8080
              initialDelaySeconds: 15
              periodSeconds: 10
            volumeMounts:
              - mountPath: /dev/shm
                name: dshm
        volumes:
          - name: dshm
            emptyDir:
              medium: Memory
              sizeLimit: 5Gi
    workerTemplate:
      spec:
        containers:
          - name: vllm-worker
            image: vllm/vllm-openai:v0.8.5
            command:
              - sh
              - -c
              - |
                bash /vllm-workspace/examples/online_serving/multi-node-serving.sh worker --ray_address=$(LWS_LEADER_ADDRESS)
            resources:
              limits:
                nvidia.com/gpu: "1"
            env:
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
              sizeLimit: 5Gi
```

Where:

- `nvidia.com/gpu: "1"` — each container uses 1 GPU on its node.
- `--pipeline-parallel-size=2` — uses pipeline parallelism to run the model across 2 nodes.
- `HUGGING_FACE_HUB_TOKEN` — the Hugging Face token you created.
- `dshm` volume — a shared memory volume, important for distributed inferencing/training use cases.

### Expose the model

To expose the model, create a Kubernetes Service. If the service type is LoadBalancer instead of ClusterIP, the model can be accessed from the internet:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: vllm-leader
spec:
  ports:
    - name: http
      port: 8080
      protocol: TCP
      targetPort: 8080
  selector:
    leaderworkerset.sigs.k8s.io/name: vllm
    role: leader
  type: ClusterIP
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
   spec:
     containers:
       ...
       volumeMounts:
       ...
         - mountPath: ~/.cache/huggingface/
           name: model
     volumes:
       ...
       - name: model
         persistentVolumeClaim:
           claimName: data-pvc
```

## Serve the model

### Set up networking to access the model from outside the cluster

If you used a LoadBalancer service type when exposing the model, use the public IP of that load balancer.

If you used ClusterIP, port-forward the service:

```bash
kubectl port-forward svc/vllm-leader 8080:8080
```

### Interact with the model

This section shows how to perform a **basic test** to verify the **Gemma 3 models**. For other models, replace `gemma-3-1b-it` with the corresponding model name.

This example demonstrates how to test the **Gemma 3 1B model** with **text-only input**.

In a new terminal session, use curl to chat with your model:

```bash
curl http://127.0.0.1:8080/v1/chat/completions \
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
