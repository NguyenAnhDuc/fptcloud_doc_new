---
id: "mo-remote-registry-window"
title: "Enable Remote Registry on Windows for SMB"
description: "Steps to enable Remote Registry on a Windows machine so FPT Cloud VA can use SMB authentication."
sidebar_label: "Enable Remote Registry on Windows"
sidebar_position: 9
pagination_next: null
---

# Enable Remote Registry on Windows for SMB

To allow FPT Cloud VA to use SMB login for authenticated scanning, you need to enable the Remote Registry service on the target Windows machine.

For machines that are not domain-joined (e.g., personal computers), or machines that are domain-joined but use a Local Admin account for scanning, configure the registry as follows:

1. Open **Registry Editor** and navigate to:
   `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System`

   - If the value `LocalAccountTokenFilterPolicy` does not exist, create it: right-click, select **New > DWORD (32-bit) Value**, and name it `LocalAccountTokenFilterPolicy` (avoid extra spaces when copying).
   - If the value exists and is set to `0`, change it to `1`.

2. Close Registry Editor (no restart required).

3. Open **Task Manager > Services** and start the **Remote Registry** service.
