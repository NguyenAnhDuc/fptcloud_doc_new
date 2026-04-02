---
id: "frequently-asked-question"
title: "Frequently asked questions"
description: "Common questions and answers about VPN Site-to-Site on FPT Cloud"
sidebar_label: "FAQs"
sidebar_position: 30
pagination_next: null
---

# Frequently asked questions

## Initial setup

### Q: Why do businesses use a VPN?

VPN is a cost-effective, high-speed, and secure way to connect remote users to the office network. VPN connections are typically established over the public Internet, making the service cheaper than a direct-connect connection while still ensuring a secure connection.

### Q: How do I know if the Site-to-Site VPN connection is successful?

On the management interface, check the following columns:

- **Operation Status**: Online
- **Provisioning Status**: Active

:::note
This status only reflects **Phase 1** connectivity. To verify **Phase 2**, perform a ping between machines in the subnet ranges configured in the VPN connection.
:::

### Q: Do the IKE and IPSec policies need to be identical on both ends?

Yes. The configuration parameters for Phase 1 (IKE) and Phase 2 (IPSec) must be consistent on both sides to establish a successful connection.

### Q: Is VPN Site-to-Site compatible with Fortigate, pfSense, Checkpoint, etc.?

Yes. The service supports popular devices such as Fortigate, pfSense, Checkpoint, and others. Refer to the configuration documentation for each device.

## Operations and verification

### Q: Can I temporarily suspend the VPN connection and reactivate it later?

Yes. Set the connection status to **Inactive** to temporarily pause it.

### Q: How can I monitor and view VPN activity logs?

Use the **Logging** tab in the VPN details view to monitor activity and view log entries. See [Monitoring service through logging](./monitoring-service-through-logging-feature-guide.md) for details.

## Troubleshooting

### Q: VPN connection failed — what should I check first?

- IP address, PSK key, and IPsec configuration
- Firewall and routing setup
- Device logs for specific error messages
- If the issue persists, contact the technical support team

### Q: VPN shows "connected" but ping fails between both sides

- Verify routing configuration, security group, and firewall rules
- Check for possible NAT or overlapping IP ranges

### Q: VPN connection drops frequently — how do I fix it?

- Confirm IKE/IPSec parameters are correctly matched on both sides
- Check Internet connection quality
- If parameters are correct and the connection is stable, contact the support team for further diagnostics

### Q: VPN speed is slow — how can I improve performance?

- Use lighter encryption algorithms (if acceptable for your security requirements)
- Increase bandwidth at the main connection points
