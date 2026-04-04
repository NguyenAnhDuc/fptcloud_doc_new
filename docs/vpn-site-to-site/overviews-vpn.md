---
id: "overviews-vpn"
title: "VPN Site-to-Site overview"
description: "Introduction to the VPN Site-to-Site service and prerequisites for deployment."
sidebar_label: "VPN Site-to-Site overview"
sidebar_position: "2"
---

# VPN Site-to-Site overview

VPN Site-to-Site lets organizations build a complete virtual private network across multiple locations. The service connects internal networks continuously and securely, enabling staff to share resources safely between sites.

FPT Cloud Site-to-Site VPN is a fully managed VPN service that creates a secure connection between your office network and FPT Cloud resources. Using IPSec tunnels, it links enterprise data centers with branch offices.

## Prerequisites for creating a VPN Site-to-Site connection

- **Network architecture**: ensure your on-premises network architecture is compatible with VPN S2S deployment — identify IP addresses, network segments, and appropriate network devices.
- **Floating IP**: the FPT Cloud system requires one public IP for the VPN S2S connection. This public IP must not already be assigned to any other service.
- **IP addressing**: ensure IP addresses used in the VPN S2S do not conflict with other networks in your organization or with public networks.
- **Protocols and encryption**: choose appropriate protocols and encryption settings. The most common combination is IPSec with AES or 3DES encryption, paired with IKEv1 or IKEv2 authentication.
