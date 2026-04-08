---
id: "finetune-llm-models"
title: "Fine-tuning an LLM model with Unsloth on Kubernetes"
description: "This guide explains how to fine-tune an LLM model on Kubernetes using Unsloth and GPU."
sidebar_label: "Fine-tuning an LLM model with Unsloth on Kubernetes"
sidebar_position: 5
pagination_next: null
---

# Fine-tuning an LLM model with Unsloth on Kubernetes

This guide explains how to fine-tune an LLM model on Kubernetes using Unsloth and GPU.

The goal is to provide a foundation that helps you **understand and practice fine-tuning an LLM model** in a **managed Kubernetes environment**.

In this guide, you will:

- Deploy a container on Kubernetes.
- Use Unsloth to fine-tune an LLM model.

This guide is intended for Machine Learning (ML) engineers, platform administrators and operators, and Data and AI professionals who are interested in using Kubernetes container orchestration to serve large language models (LLMs).

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
kubectl create secret generic hf-secret --from-literal=hf_api_token=${HF_TOKEN} --dry-run=client -o yaml | kubectl apply -f -
```

## Deploy Unsloth

In this section, you deploy the Unsloth container to train the model. This guide uses a Kubernetes Deployment, which allows you to run one or more Pods for the training process. Kubernetes ensures Pods are restarted when errors occur and scheduled on GPU nodes in the cluster.

Each Pod runs the Unsloth container, using GPU resources to fine-tune the large language model. Using a Deployment makes it easy to manage the training job lifecycle, update configuration (e.g. image, environment variables, number of GPUs), and scale up when parallel training is needed across multiple GPUs or nodes.

### Deploy Unsloth using a Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: unsloth-gpu
spec:
  replicas: 1
  selector:
    matchLabels:
      app: unsloth
  template:
    metadata:
      labels:
        app: unsloth
    spec:
      containers:
        - name: unsloth
          image: unsloth/unsloth
          imagePullPolicy: IfNotPresent
          env:
            - name: JUPYTER_PASSWORD
              value: "mypassword"
          ports:
            - containerPort: 8888
              name: jupyter
            - containerPort: 22
              name: ssh
          resources:
            limits:
              nvidia.com/gpu: 1
```

Where:

- `nvidia.com/gpu: 1` — your container will use 1 GPU on the node.
- `JUPYTER_PASSWORD` — the password to access Jupyter Notebook.

### Expose the Unsloth container

To expose the service, create a Kubernetes Service. If the service type is LoadBalancer instead of ClusterIP, it can be accessed from the internet:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: unsloth-service
spec:
  type: ClusterIP
  selector:
    app: unsloth
  ports:
    - name: jupyter
      protocol: TCP
      port: 8888
      targetPort: 8888
    - name: ssh
      protocol: TCP
      port: 22
      targetPort: 22
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
apiVersion: apps/v1
kind: Deployment
metadata:
  name: unsloth-gpu
spec:
  ...
  template:
    ...
    spec:
      containers:
        ...
        volumeMounts:
        ...
        - mountPath: /workspace/work
          name: workdir
      volumes:
      ...
        - name: workdir
          persistentVolumeClaim:
            claimName: data-pvc
```

## Access the Unsloth service

### Set up networking to access Unsloth from outside the cluster

If you used a LoadBalancer service type when exposing the service, use the public IP of that load balancer.

If you used ClusterIP, port-forward the service:

```bash
kubectl port-forward service/unsloth-service 8888:8888
```

If you prefer SSH over Jupyter Notebook (create an SSH key pair inside the Unsloth container first if you do not have one):

```bash
kubectl port-forward service/unsloth-service 2222:22
```

Access Jupyter Notebook at http://localhost:8888 and navigate to the `unsloth-notebooks` section to view the available Unsloth notebooks.

### Run sample training tasks

Find `Granite4.0_350M.ipynb` and run that notebook.

Output:

```
154.2162 seconds used for training.
2.57 minutes used for training.
Peak reserved memory = 4.004 GB.
Peak reserved memory for training = 3.281 GB.
Peak reserved memory % of max memory = 17.04 %.
Peak reserved memory for training % of max memory = 13.963 %.
```
