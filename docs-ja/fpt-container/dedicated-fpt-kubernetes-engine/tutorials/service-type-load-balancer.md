---
id: "service-type-load-balancer"
title: "Service Type Load Balancer"
description: "D-FKEはService type Load Balancerの作成をサポートしており、clusterの外部にアプリケーションを簡単に公開できます。パブリックとプライベートLBの両方をサポートしています。"
sidebar_label: "Service Type Load Balancer"
sidebar_position: "23"
---

# Service type Load Balancer

D-FKEは**Service type Load Balancer**の作成をサポートしており、clusterの外部にアプリケーションを簡単に公開できます。パブリックとプライベートLBの両方をサポートしています。
  * **Public LB:** デフォルトでは、svc type LBはpublicとして作成されます。serviceにはPublic IPが割り当てられ、インターネットからアクセスできます。
  * **Private LB:** serviceにはPrivate IPが割り当てられ、テナント内部システムからのみアクセスできます。Public IPは割り当てられないため、インターネットからはアクセスできません。

## A. Public LB
インターネットからアクセスできるPublicタイプのService LoadBalancerです。このタイプには空きのPublic IPが必要です。

YAMLファイルの例：

```yaml
apiVersion: v1
kind: Service
metadata:  
  name: web  
  namespace: default
spec:  
  selector:    
    app: web  
  ports:    
    - protocol: TCP      
      name: http      
      port: 80      
      targetPort: 80    
    - protocol: TCP      
      name: https      
      port: 443      
      targetPort: 443  
  type: LoadBalancer 
```

## B. Private LB
内部アクセス専用で、インターネットからはアクセスできないPrivateタイプのService LoadBalancerです。このタイプには空きのPublic IPは不要です。

YAMLファイルの例：

```yaml
apiVersion: v1
kind: Service
metadata:  
  annotations:
    service.beta.kubernetes.io/fpt-load-balancer-internal: "true"
  name: web  
  namespace: default
spec:  
  selector:    
    app: web  
  ports:    
    - protocol: TCP      
      name: http      
      port: 80      
      targetPort: 80    
    - protocol: TCP      
      name: https      
      port: 443      
      targetPort: 443  
  type: LoadBalancer 
```

serviceが正常に作成されたことを確認します：

```bash
kubectl get svc 
```

Load BalancerのInternal IPを編集します。**LB Virtual IP**にシステムが自動割り当てするIPレンジを入力します：
  * startIP: サブネットの開始IP（例: 10.100.1.2）
  * endIP: サブネットの終了IP（例: 10.100.1.253）

注意: このIPレンジはシステム上に作成済みのサブネットと重複してはいけません。

```bash
kubectl edit cm fptcloud-ccm-configmap -n kube-system 
```

```yaml
loadbalancer:
      oneArm:
        startIP: "169.254.64.1"
        endIP: "169.254.127.254" 
```

startIPとendIPを希望のIPレンジに更新して保存します。その後、新しい設定を適用するためにrolloutを実行します：

```bash
kubectl rollout restart deployment fptcloud-ccm -n kube-system 
```
