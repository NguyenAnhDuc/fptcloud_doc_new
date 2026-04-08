---
id: "service-type-load-balancer"
title: "Service Type Load Balancer"
description: "D-FKE supports creating a Service type Load Balancer so you can easily expose applications outside the cluster. Both public and private LB are supported."
sidebar_label: "Service Type Load Balancer"
sidebar_position: "23"
---

# Service type Load Balancer

D-FKE supports creating a **Service type Load Balancer** so you can easily expose applications outside the cluster. Both public and private LB are supported.
  * **Public LB:** By default, a Service type LB is created as public. The service is assigned a Public IP so it can be accessed from the internet.
  * **Private LB:** The service is assigned a Private IP so it can be accessed from internal tenant systems. It is not assigned a Public IP and cannot be accessed from the internet.

## A. Public LB
A public Service type LoadBalancer allows access from the internet. This type requires a free Public IP.

Example YAML file:

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
A private Service type LoadBalancer is intended for internal access only and cannot be accessed from the internet. This type does not require a free Public IP.

Example YAML file:

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

Verify that the service was created successfully:

```bash
kubectl get svc 
```

Edit the **Internal IP** range for the Load Balancer. Enter the IP range you want the system to automatically assign to the **LB Virtual IP**:
  * startIP: Start IP of the subnet, e.g. 10.100.1.2
  * endIP: End IP of the subnet, e.g. 10.100.1.253

Note: This IP range must not overlap with any subnets already created in the system.

```bash
kubectl edit cm fptcloud-ccm-configmap -n kube-system 
```

```yaml
loadbalancer:
      oneArm:
        startIP: "169.254.64.1"
        endIP: "169.254.127.254" 
```

Update startIP and endIP to your desired range and save the changes. Then perform a rollout to apply the new configuration:

```bash
kubectl rollout restart deployment fptcloud-ccm -n kube-system 
```
