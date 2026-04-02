---
id: "driver-installation-self-install"
title: "GPU driver installation guide on Kubernetes"
sidebar_label: "GPU driver installation guide on Kubernetes"
sidebar_position: "10"
---

# GPU driver installation guide on Kubernetes

Users can self-install the desired GPU driver on an FPT Kubernetes Engine cluster with GPU integration.

The steps are as follows:

**Step 1: Initialize a GPU cluster with Driver Installation set to User-Install**

- Create the cluster and select "User-Install" as the Driver Installation option.

**Step 2: Install the software required to use the GPU (driver, toolkit, device plugin, etc.)**

**Reference GPU driver versions:**
- **Release Notes:** https://docs.nvidia.com/datacenter/tesla/index.html and https://docs.nvidia.com/datacenter/tesla/drivers/releases.json
- **Documentation:** https://docs.nvidia.com/datacenter/tesla/drivers/index.html
- **Installer:** https://download.nvidia.com/XFree86/Linux-x86_64/

You can reference the following DaemonSet to install the driver:

```yaml
# worker.fptcloud/type=gpu

apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fptcloud-gpu-driver-installer
  namespace: kube-system
  labels:
    k8s-app: gpu-driver
spec:
  selector:
    matchLabels:
      k8s-app: gpu-driver
  updateStrategy:
    type: RollingUpdate
  template:
    metadata:
      labels:
        name: nvidia-driver-installer
        k8s-app: gpu-driver
    spec:
      priorityClassName: system-node-critical
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: worker.fptcloud/type
                operator: In
                values: ["gpu"]
      tolerations:
      - operator: "Exists"
      containers:
        - image: docker.io/alpine:3.13
          name: nvidia-driver-installer
          command:
            - 'nsenter'
            - '-t'
            - '1'
            - '-m'
            - '-u'
            - '-i'
            - '-n'
            - '--'
            - 'bash'
            - '-l'
            - '-c'
            - 'curl -Ls https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-driver-installer.sh | bash -s -- -p admin'
          resources:
            requests:
              cpu: 150m
          env:
          - name: NVIDIA_DRIVER_VERSION
            value: "535.54.03"
          - name: NVIDIA_TOOLKIT_INSTALL
            value: "true"
          imagePullPolicy: IfNotPresent
          securityContext:
            privileged: true
            allowPrivilegeEscalation: true
      hostPID: true
      hostNetwork: true
      hostIPC: true
```

Environment variable parameters:
- **NVIDIA_DRIVER_VERSION:** The version of the driver to install.
- **NVIDIA_TOOLKIT_INSTALL:** `"true"` or `"false"`, default is `"true"`. Controls whether the toolkit is installed automatically.

To apply the fptcloud DaemonSet to the K8s cluster, run:

```bash
kubectl apply -f https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-driver-installer.yaml
```

Check the pod status of the DaemonSet:

```bash
kubectl get pod -n kube-system | grep "gpu-driver"
```

```
NAME                                                 READY   STATUS    RESTARTS        AGE
fptcloud-gpu-driver-installer-7tj55                  1/1     Running   0               2d17h
```

The `fptcloud-gpu-driver-installer` DaemonSet schedules a pod on all workers in the Worker Group (those with the label `worker.fptcloud/type: gpu`) to install the driver and toolkit.

Check the logs of the pod to see whether installation has completed:

```bash
kubectl logs fptcloud-gpu-driver-installer-7tj55 -n kube-system
```

```
Verifying Nvidia installation... DONE.
Clean Nvidia installation... DONE.
```

If installation is successful, you will see the above log output. The installation process typically takes a few minutes.
