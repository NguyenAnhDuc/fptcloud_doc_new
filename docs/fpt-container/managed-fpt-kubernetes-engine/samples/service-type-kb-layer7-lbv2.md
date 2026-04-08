---
id: "service-type-kb-layer7-lbv2"
title: "Service Type Layer 7 Load Balancer"
description: "FPT Cloud provides a Layer 7 Load Balancer solution using customer-supplied SSL certificates."
sidebar_label: "Service Type Layer 7 Load Balancer"
sidebar_position: "53"
---

# Service Type Layer 7 Load Balancer

FPT Cloud provides a Layer 7 Load Balancer solution using SSL certificates supplied by the customer.

## 1. Create a certificate

**Step 1:** Go to the **Load Balancer** tab and click **Import SSL Certificate** to create a new certificate.
[![](/img/migrated/1.-tao-cert-e00d2892.png)](/img/migrated/1.-tao-cert-e00d2892.png)

**Step 2:** Enter the required information (certificate must be in standard **PEM** format).
[![](/img/migrated/2.-tao-cert-4824eb43.png)](/img/migrated/2.-tao-cert-4824eb43.png)

**Step 3:** Verify that the certificate was created successfully.
[![](/img/migrated/3.-kiem-tra-lai-cert-a241b1e6.png)](/img/migrated/3.-kiem-tra-lai-cert-a241b1e6.png)

## 2. Create a Load Balancer service using the HTTPS method

In the Service configuration, add an annotation to use the SSL certificate you just created:

```yaml
loadbalancer.fptcloud.com/load-balancer-version: v2

loadbalancer.fptcloud.com/default-tls-secret-ref-name: "name_of_ssl_cert" # the certificate name must match the name created on the portal
```

The Listener will then use the **TERMINATED_HTTPS** method.

**Notes:**
  * The annotation above must be added at the time of Load Balancer creation.
  * Certificate renewal and update via the Portal are not currently supported. If you want to change the certificate, add a new one on the portal with a different name and update the annotation value to the new name (there will be approximately 20 seconds of downtime).
