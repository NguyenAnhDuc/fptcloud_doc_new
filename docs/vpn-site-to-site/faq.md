---
id: "faq"
title: "FAQ"
description: "VPN is a cost-effective, high-speed, and secure way to connect remote users to the office network."
sidebar_label: "FAQ"
sidebar_position: "39"
---

# FAQ

## Initial setup
### Q: **Why do organizations use VPN?**
VPN is a cost-effective, high-speed, and secure way to connect remote users to an office network. Because VPN connections run over the public Internet, the cost is lower than a direct connection while still ensuring security.

* * *

### Q: **How do I know if the VPN Site-to-Site connection was successful?**
On the management interface, check the following columns:
  * **Operation Status**: must be _Online_
  * **Provisioning Status**: must be _Active_

_Note:_ These statuses only reflect the **Phase 1** connection.
To verify **Phase 2**, run a ping between machines within the subnet ranges configured in the VPN connection.

* * *

### Q: **Do the IKE and IPSec policy parameters need to match on both ends of the connection?**
Yes. The **Phase 1 (IKE)** and **Phase 2 (IPSec)** parameters must be identical on both sides to establish the connection successfully.
See the configuration guides:
  * For IKE (Phase 1): [here](../vpn-site-to-site/index.md)
  * For IPSec (Phase 2): [here](../vpn-site-to-site/index.md)
  * For DPD (VPN connection): [here](../vpn-site-to-site/index.md)

* * *

### Q: **Is VPN Site-to-Site compatible with Fortigate, PfSense, CheckPoint, and similar devices?**
Yes. The service supports popular devices including **Fortigate**, **PfSense**, **CheckPoint**, and others.
Refer to the configuration guides:
  * For Fortigate: [here](../vpn-site-to-site/index.md)
  * For PfSense: [here](../vpn-site-to-site/index.md)
  * For CheckPoint: [here](../vpn-site-to-site/index.md)

## Operations and monitoring
### Q: **Can I pause the VPN connection when not in use and re-enable it later?**
Yes. You can set the connection status to _Inactive_ to suspend it.
Documentation: [link](https://www.google.com)

* * *

### Q: **How do I monitor and view logs for VPN activity?**
Go to the **Activity log** service, set type = "VPN", and enter the date you want to review. Documentation: [here](../vpn-site-to-site/index.md)

* * *

## Troubleshooting
### Q: **The VPN connection failed. What should I check first?**
  * IP address, PSK key, and IPSec configuration.
  * Firewall and routing configuration.
  * Check device logs to identify the root cause.
  * If you cannot resolve it yourself, contact our technical support team.

* * *

### Q: **The VPN reports a successful connection but I cannot ping between the two sides.**
  * Re-check the routing configuration, Security Group, and firewall settings.
  * Verify there is no NAT interference or IP overlap.

* * *

### Q: **The VPN connection keeps dropping. How do I fix it?**
  * Verify that the IKE/IPSec parameters match on both sides.
  * Check Internet connection quality.
  * If the parameters match and the connection is stable, contact the technical team for further assistance.

* * *

### Q: **VPN speed is slow. How can I improve it?**
  * Use a lighter encryption algorithm (if it meets your security requirements).
  * Upgrade the bandwidth at the main connection endpoints.
