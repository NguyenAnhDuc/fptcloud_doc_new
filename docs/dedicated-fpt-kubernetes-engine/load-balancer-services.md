---
id: "load-balancer-services"
title: "Load Balancer services"
description: "D-FKE supports creating Load Balancer Service to help users expose their applications outside the cluster. The system su"
sidebar_label: "Load Balancer services"
sidebar_position: 21
---

# Load Balancer services

D-FKE supports creating Load Balancer Service to help users expose their applications outside the cluster. The system supports both public and private LB.
  * **Public LB** : By default, LB svc is created as public, meaning the service is assigned a Public IP so it can be accessed from the internet.
  * **Private LB** : The service is assigned a Private IP so it can only be accessed internally. Public IP is not assigned so it cannot be accessed from the internet.

### A. Public LB
Load Balancer Service expose the application to the internet. This service type requires an available Public IP to allocate.
_Example manifest file:_

```
apiVersion: v1
kind: Service
metadata:  
  name: web  
  namespace: default
spec:  
  selector:    
    app: web  
  ports:    
    – protocol: TCP      
      name: http      
      port: 80      
      targetPort: 80    
    – protocol: TCP      
      name: https      
      port: 443      
      targetPort: 443  
  type: LoadBalancer 
```

### B. Private LB
Load Balancer Service is only expose privately, with the purpose of using for internal access, not publicly from the internet. This service type does not require an available Public IP to allocate.
_Example manifest file:_

```
CopyapiVersion: v1
kind: Service
metadata:  
  annotations:
    service.beta.kubernetes.io/fpt-load-balancer-internal: “true”
  name: web  
  namespace: default
spec:  
  selector:    
    app: web  
  ports:    
    – protocol: TCP      
      name: http      
      port: 80      
      targetPort: 80    
    – protocol: TCP      
      name: https      
      port: 443      
      targetPort: 443  
  type: LoadBalancer 
```

  * To list created services:

```
Copykubectl get svc 
```

  * To edit the Load Balancer's Internal IP:

```
Copykubectl edit cm fptcloud-ccm-configmap -n kube-system
```

```
Copyloadbalancer:
      oneArm:
        startIP: “169.254.64.1”
        endIP: “169.254.127.254” 
```

Enter the IP range you want the system to automatically allocate to the LB's Virtual IP:
  * **startIP** : starting IP of Subnet.
_Example: startIP: "10.100.1.2"_
  * **endIP** : Ending IP of Subnet.
_Example: endIP: "10.100.1.253"_

_**Note** : This IP range must not overlap with subnets created on the system._
Then, do a rollout to apply the new configuration:

```
Copykubectl rollout restart deployment fptcloud-ccm -n kube-system 
```