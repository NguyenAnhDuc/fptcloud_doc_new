---
id: "configure-sni"
title: "Configure SNI on a Load Balancer"
description: "How to configure Server Name Indication (SNI) to serve multiple domains on a single HTTPS Listener in FPT Cloud."
sidebar_label: "Configure SNI"
sidebar_position: 13
---

# Configure SNI on a Load Balancer

**SNI (Server Name Indication)** allows a single Listener to serve multiple hostnames by mapping each hostname to a specific SSL/TLS certificate. This saves resources, supports multi-domain deployments, and improves security for HTTPS services.

**How it works:**

- When a client sends an HTTPS request, the browser or application includes the hostname (SNI hostname) during the SSL handshake.
- The Load Balancer reads the hostname from the SNI and selects the matching SSL certificate.
- If the hostname matches a configured SNI, the connection is established with the correct certificate.
- If the hostname does not match any configured SNI, the Load Balancer uses the **Default certificate**.

**When to use SNI:**

- **Host multiple domains on the same IP**: Run multiple HTTPS websites on a single Load Balancer.
- **Save resources**: No need to create separate Load Balancers for different domains.
- **Domain security**: Each domain can use its own certificate for easier management and policy compliance.

## Configuration steps

**Step 1:** Go to the Load Balancer management page on the **FPT Cloud Portal**.

**Step 2:** In the Load Balancer list, click the Load Balancer you want to configure.

**Step 3:** Select the **Listener** tab, then choose a Listener using the **TERMINATED_HTTPS** protocol, or create a new Listener if none exists.

**Step 4:** Assign SSL/TLS certificates to the two certificate fields:

- **Default SSL/TLS certificate**: The default certificate used by the Listener.
- **SNI SSL/TLS certificate**: One or more SNI certificates. If no certificates are available, import them using [Import SSL certificate](/docs/en/fpt-network/load-balancer/load-balancer-tutorials/manage-ssl-certificate/import-ssl-certificate).

**Step 5:** Click **Update Listener** or **Create Listener** to save.

**Step 6:** Point your domain names (hostnames) to the Load Balancer's public IP and test access.

## Route domains to different pools using L7 policy

You can combine SNI with L7 policies to route each domain to a different pool:

**Step 1:** Upload and attach all certificates to the Listener as described above, then go to the **L7 Policy** tab.

**Step 2:** Create L7 policies for each domain. Example with three domains:

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

**Step 3:** Save and test by accessing each domain to verify correct routing.

:::note
- **Client must support SNI**: Most modern browsers and tools support SNI. Some older clients may not.
- **SSL certificates must be valid** and match the hostname.
- **Hostnames must be unique**: Do not configure the same hostname with multiple certificates.
- **Wildcard certificates**: For subdomains, a single wildcard certificate (e.g. `*.example.com`) as the default certificate can replace individual per-hostname certificates.
- **L7 policy fallback**: If no policy matches a request, it is routed to the default pool.
:::
