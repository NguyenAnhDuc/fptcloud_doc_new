---
id: "SNI-load-balancer"
title: "Configure SNI on Load Balancer"
description: "How to configure SNI (Server Name Indication) on a Load Balancer so that one Listener can serve multiple domains."
sidebar_label: "Configure SNI"
sidebar_position: "19"
---

# Configure SNI on Load Balancer

**SNI (Server Name Indication)** allows a single Listener to serve multiple hostnames by mapping each hostname to a specific SSL/TLS certificate. This saves resources, supports multi-domain deployments, and improves security for HTTPS services.

## How it works

- When a client sends an HTTPS request, the browser or application includes the hostname (SNI hostname) during the SSL handshake.
- The Load Balancer reads the hostname from SNI and selects the corresponding SSL certificate configured for that hostname.
- If the hostname matches a configured SNI, the connection is established with the correct certificate.
- If there is no matching SNI, the Load Balancer uses the **Default certificate**.

## When to configure SNI on Load Balancer

- **Host multiple domains on the same IP**: Support multiple HTTPS websites running on a single Load Balancer.
- **Save resources**: No need to create multiple Load Balancers just to serve different domains.
- **Domain security**: Each domain can use its own certificate, making management and security policy compliance easier.

## Configuration steps

**Step 1:** Go to the Load Balancer management page on **FPT Cloud Portal**.

**Step 2:** In the Load Balancer list, select the Load Balancer you want to configure.

**Step 3:** Select the **Listener** tab, then select the Listener using the TERMINATED_HTTPS protocol, or create a new Listener if one does not exist.

**Step 4:** Configure the SSL/TLS certificates in two fields:

- **Default SSL/TLS certificate**: Select the default certificate for the Listener.
- **SNI SSL/TLS certificate**: Add one or more SNI certificates.

**Step 5:** Click **Update Listener** or **Create Listener** to save changes.

**Step 6:** Point your domain names (hostnames) to the Load Balancer's public IP and test access.

You can also combine SNI with L7 policies to route each domain to a different pool:

**Step 1:** After uploading certificates and configuring the Listener, select the **L7 Policy** tab.

**Step 2:** Create L7 policies for each domain. Example with 3 domains:

```
Policy1:
- Policy action: Redirect to pool
- Redirect to: Pool1
- Position: 1
- Rule: Type=Hostname, Compare type=Equal to, Value=example1.com, Invert=No

Policy2:
- Policy action: Redirect to pool
- Redirect to: Pool2
- Position: 2
- Rule: Type=Hostname, Compare type=Equal to, Value=example2.com, Invert=No

Policy3:
- Policy action: Redirect to pool
- Redirect to: Pool3
- Position: 3
- Rule: Type=Hostname, Compare type=Equal to, Value=example3.com, Invert=No
```

**Step 3:** Save the changes and access each domain to verify the Load Balancer routes requests correctly.

:::note
- **Clients must support SNI**: Most modern browsers and tools support SNI. Some older clients may not.
- **SSL certificates must be valid** and match the hostname.
- **Hostnames must be unique**: Do not configure the same hostname with multiple certificates.
- **Wildcard certificates**: For subdomains, you can use a single wildcard certificate (e.g. `*.example.com`) as the default certificate instead of configuring individual certificates per hostname.
- **L7 policy fallback**: If no matching policy exists, the request is routed to the default pool.
:::
