---
id: "frequently-asked-question"
title: "Frequently Asked Question"
description: "VPN is a cost-effective, high-speed, and secure way to connect remote users to the office network. VPN connections are t"
sidebar_label: "Frequently Asked Question"
sidebar_position: 30
pagination_next: null
---

# Frequently Asked Question

## Initial Setup
### Q: Why do businesses use a VPN?
VPN is a cost-effective, high-speed, and secure way to connect remote users to the office network. VPN connections are typically established over the public Internet, making the service cheaper than a direct-connect connection while still ensuring a secure connection.
### Q: How do I know if the Site-to-Site VPN connection is successful?
On the management interface, you need to check the following columns:
  * **Operation Status** : Online
  * **Provisioning Status** : Active

_Note:_ This status only reflects **Phase 1** connectivity. To check **Phase 2** , perform a ping command between machines belonging to the subnet ranges configured in the VPN connection.
### Q: Do the IKE and IPSec policies need to be identical on both ends of the connection?
Yes. The configuration parameters for Phase 1 (IKE) and Phase 2 (IPSec) must be consistent on both sides to ensure a successful connection establishment.
### Q: Is VPN Site-to-Site compatible with Fortigate, Pfsense, Checkpoint, etc.?
Yes. The service supports popular devices such as Fortigate, Pfsense, Checkpoint... You can refer to the configuration documentation here:
For Fortigate: here
For Pfsense: here
For Checkpoint: here
## Operations & Verification
### Q: Can I temporarily suspend the VPN connection when not in use and reactivate it when needed?
Yes. You can set the connection status to Inactive to temporarily pause it.
The instruction document is here: link
### Q: How can I monitor and view the logs of VPN activities?
## Troubleshooting
### Q: VPN connection failed — what should I check first?
  * IP address, PSK key, and IPsec configuration
  * Firewall and routing setup
  * Device logs for specific error messages
  * If the issue persists, contact our technical support team for assistance

### Q: VPN shows “connected” but ping fails between both sides
  * Verify routing configuration, security group, and firewall rules
  * Check for possible NAT or overlapping IP ranges

### Q: VPN connection drops frequently — how to fix it?
  * Confirm IKE/IPSec parameters are correctly matched
  * Check Internet connection quality
  * If parameters are correct and the connection is stable, contact our support team for further diagnostics

### Q: VPN speed is slow — how to improve performance?
  * Use lighter encryption algorithms (if acceptable for your security level)
  * Increase bandwidth at the main connection points
