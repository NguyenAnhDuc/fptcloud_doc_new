---
id: "SNI-load-balancer"
title: "Sni Load Balancer"
description: "The **SNI (Server Name Indication)** configuration feature on the Load Balancer allows a single Listener to serve multip"
sidebar_label: "Sni Load Balancer"
sidebar_position: 19
pagination_next: null
---

# Sni Load Balancer

The **SNI (Server Name Indication)** configuration feature on the Load Balancer allows a single Listener to serve multiple domain names (hostnames) by mapping each domain to a specific SSL/TLS certificate. This feature helps save resources, supports multi-domain deployment, and enhances security for HTTPS services.
### How It Works
  * When a client sends an HTTPS request to the Load Balancer, the browser or application includes the domain name (SNI hostname) during the SSL handshake.
  * The Load Balancer reads the hostname information from the SNI and selects the corresponding SSL certificate pre-configured for that hostname.
  * If the hostname matches a configured SNI, the connection is successfully established using the correct certificate.
  * If the hostname does not match, the Load Balancer will use the **Default certificate**.

### When to Configure SNI on the Load Balancer
  * **Host multiple domains on the same IP** : Support multiple HTTPS websites on a single Load Balancer.
  * **Save resources** : Avoid creating multiple Load Balancers just to serve different domains.
  * **Secure each domain** : Each domain can use a separate certificate, making it easier to manage and comply with security policies.

### Configuration Guide
**Step 1** : Log in to the Load Balancer management page on **FPT Cloud Portal**
**Step 2** : From the Load Balancer list, select the one you want to configure.
**Step 3** : Select the **Listener** tab, then choose a Listener using the TERMINATED_HTTPS protocol, or create a new Listener if none exists.
**Step 4** : Add SSL/TLS certificates to the two fields:
  * Default SSL/TLS certificate: Select the default certificate for the Listener
  * SNI SSL/TLS certificate: Select one or more SNI certificates  
If you don't have certificates available in the system, you can upload them following this guide: <https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer>

**Step 5** : Click “Update Listener” or “Create Listener” to save the changes.
**Step 6** : Point your domain names (hostnames) to the Load Balancer's public IP and access them.
Additionally, users can use L7 policies to route requests from each domain to the desired Pool. Configure as follows:
**Step 1** : Upload all necessary certificates and add them to the Listener as described above. Then select the **L7 policy** tab.
**Step 2** : Create L7 policies on the Listener:

```
CopyExample with 3 domains:
* example1.com needs to redirect to Pool1
* example2.com needs to redirect to Pool2
* example3.com needs to redirect to Pool3

Create 3 corresponding policies with actions pointing to 3 different Pools:
Policy1:
- Policy action: Redirect to pool
- Redirect to: Pool1
- Position: 1
Policy2:
- Policy action: Redirect to pool
- Redirect to: Pool2
- Position: 2
Policy3:
- Policy action: Redirect to pool
- Redirect to: Pool3
- Position: 3
Each policy should include 1 rule:
Policy1 - Rule:
- Type: Hostname
- Compare type: Equal to
- Value: example1.com
- Invert: No
Policy2 - Rule:
- Type: Hostname
- Compare type: Equal to
- Value: example2.com
- Invert: No
Policy3 - Rule:
- Type: Hostname
- Compare type: Equal to
- Value: example3.com
- Invert: No
```

**Step 3** : Save the changes and access the domains to verify whether the Load Balancer correctly redirects the requests.
### Notes
  * **Client must support SNI** : Most modern browsers and tools support SNI. Some older clients (e.g., outdated curl versions or IoT devices) may not.
  * **SSL certificates must be valid** and match the hostname.
  * **Hostnames must be unique** : Avoid mapping the same hostname to multiple certificates.
  * **Using wildcard certificates** : For subdomain usage, a single wildcard certificate (e.g., *.example.com) can be set as the default certificate instead of configuring separate certificates for each hostname.
  * **Using L7 policy** : If no matching policy is found, the request will be routed to the default Pool.