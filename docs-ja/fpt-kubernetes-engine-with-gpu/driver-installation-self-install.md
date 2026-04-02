---
id: "driver-installation-self-install"
title: "KubernetesへのGPUドライバーインストールガイド"
sidebar_label: "KubernetesへのGPUドライバーインストールガイド"
sidebar_position: "10"
---

# KubernetesへのGPUドライバーインストールガイド

ユーザーは、GPU統合のFPT Kubernetes Engineクラスターに希望するGPUドライバーを自分でインストールすることができます。

手順は以下の通りです。

**ステップ1: Driver InstallationをUser-Installに設定してGPUクラスターを初期化する**

- クラスターを作成し、Driver Installationオプションとして「User-Install」を選択します。

**ステップ2: GPUを使用するために必要なソフトウェアをインストールする（ドライバー、ツールキット、デバイスプラグインなど）**

**GPUドライバーバージョンの参照:**
- **リリースノート:** https://docs.nvidia.com/datacenter/tesla/index.html および https://docs.nvidia.com/datacenter/tesla/drivers/releases.json
- **ドキュメント:** https://docs.nvidia.com/datacenter/tesla/drivers/index.html
- **インストーラー:** https://download.nvidia.com/XFree86/Linux-x86_64/

ドライバーインストール用の以下のDaemonSetを参考にすることができます。

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

環境変数パラメーター:
- **NVIDIA_DRIVER_VERSION:** インストールするドライバーのバージョン。
- **NVIDIA_TOOLKIT_INSTALL:** `"true"` または `"false"`、デフォルトは `"true"`。ツールキットを自動的にインストールするかどうかを制御します。

fptcloud DaemonSetをK8sクラスターに適用するには、以下のコマンドを実行します。

```bash
kubectl apply -f https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-driver-installer.yaml
```

DaemonSetのPodステータスを確認します。

```bash
kubectl get pod -n kube-system | grep "gpu-driver"
```

```
NAME                                                 READY   STATUS    RESTARTS        AGE
fptcloud-gpu-driver-installer-7tj55                  1/1     Running   0               2d17h
```

`fptcloud-gpu-driver-installer` DaemonSetは、Worker Group内のすべてのワーカー（ラベル `worker.fptcloud/type: gpu` を持つもの）にPodをスケジュールし、ドライバーとツールキットのインストールを実行します。

インストールが完了したかどうかを確認するには、Podのログを確認します。

```bash
kubectl logs fptcloud-gpu-driver-installer-7tj55 -n kube-system
```

```
Verifying Nvidia installation... DONE.
Clean Nvidia installation... DONE.
```

インストールが成功すると、上記のようなログ出力が表示されます。インストールプロセスは通常、数分で完了します。
