---
id: "faq"
title: "Frequently Asked Questions"
sidebar_label: "FAQ"
sidebar_position: 39
---

Frequently Asked Questions (FAQs)


## I. Initial Setup

### Q: **Why do businesses use VPN?**

VPN is a cost-effective, high-speed, and secure way to connect remote users to the office network. VPN connections are typically established over the public Internet, making this service more affordable than a direct connection while still ensuring secure connectivity.


### Q: **How do I know if the VPN Site-to-Site connection is successful?**

On the management interface, check the following columns:

  * **Operation Status**: must be _Online_
  * **Provisioning Status**: must be _Active_


_Note:_ This status only reflects the **Phase 1** connection.
To verify **Phase 2**, perform a ping between machines within the subnet ranges configured in the VPN connection.


### Q: **Do the IKE and IPSec policy parameters need to match on both ends of the connection?**

Yes. The configuration parameters for **Phase 1 (IKE)** and **Phase 2 (IPSec)** must be identical on both sides to ensure a successful connection.

See configuration guides:

  * For IKE (phase 1): [here](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=create-ike-policy>)
  * For IPSec (phase 2): [here](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=create-ipsec-policy>)
  * For DPD (VPN connection): [here](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=create-vpn-connection>)


### Q: **Is VPN Site-to-Site compatible with Fortigate, Pfsense, Checkpoint, etc.?**

Yes. The service supports popular devices such as **Fortigate**, **Pfsense**, **Checkpoint**, and others.
You can refer to configuration documentation at:

  * For Fortigate: [here](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-fortigate>)
  * For Pfsense: [here](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-pfsense>)
  * For Checkpoint: [here](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-checkpoint-r8120>)


## II. Operations & Verification

### Q: **Can I temporarily suspend the VPN connection when not in use and re-enable it when needed?**

Yes. You can set the connection status to _Inactive_ to pause it.

Documentation guide: [link](<https://www.google.com>)


### Q: **How do I monitor and view logs of VPN activities?**

You need to access the **Activity log** service, select type = "VPN", and enter the date you want to check. Documentation guide: [here](<https://fptcloud.com/documents/vpn-site-to-site-0/?doc=VPN-S2S-check-activity-logs>)


## III. Troubleshooting

### Q: **The VPN connection failed. What should I check first?**

  * IP address, PSK key, IPsec configuration
  * Firewall and routing configuration
  * Check device logs to identify the cause
  * If you cannot resolve it yourself, please contact our technical support team.


### Q: **VPN reports a successful connection but I cannot ping between the two sides?**

  * Check the routing configuration, security group, and firewall settings again.
  * Verify whether there is NAT or IP conflict.


### Q: **VPN connection drops. How do I resolve it?**

  * Check that the IKE/IPSec information matches on both sides.
  * Check the quality of the Internet connection.
  * If the information matches and the connection is stable, contact the technical support team for further investigation.


### Q: **VPN speed is slow. How do I improve it?**

  * Use a lighter encryption algorithm (if it meets security requirements).
  * Upgrade the bandwidth at the main connection points.
