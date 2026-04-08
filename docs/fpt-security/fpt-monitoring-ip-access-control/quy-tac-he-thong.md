---
id: "quy-tac-he-thong"
title: "System rules"
sidebar_label: "System rules"
sidebar_position: 11
---

# System rules

- By default, when IP Access Control is **disabled**, all IP addresses can access the system.
- When IP Access Control is **enabled**, all access from outside FPT Cloud is blocked until an IP is added to the whitelist.
- Each endpoint (Grafana dashboard, Metric datasource, Log datasource, Trace datasource) has its own separate IP whitelist.
- If any IP in a table is in **Whitelisting** or **Blacklisting** status, all action buttons for that table are temporarily disabled until the process completes.

## IP/CIDR whitelist statuses

| Status | Description |
|---|---|
| Whitelisting | The system is processing the whitelist request for the IP/CIDR. |
| Whitelisted | The IP/CIDR has been whitelisted successfully and has access. |
| Whitelist Failed | The whitelist operation failed. The IP/CIDR does not yet have access. Use Retry to try again. |
| Blacklisting | The system is revoking access for the IP/CIDR. |
| Blacklist Failed | The blacklist operation failed. The IP/CIDR still has access. Use Retry to try again. |
