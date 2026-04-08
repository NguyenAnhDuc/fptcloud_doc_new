---
id: "policy-settings"
title: "Policy Settings"
description: "Configure policies and rules to select events to block or record in the Detection Logs"
sidebar_label: "Policy Settings"
sidebar_position: 2
---

# Policy Settings

Used to configure policies and rules to select events to block or record in the View Logs — Detection Logs section.

[![file](/img/migrated/image-1714115314016-153567a2.png)](/img/migrated/image-1714115314016-153567a2.png)

The main components include:

**Policy List** — block or record events based on the policy. WAPPLES includes 7 default policies:

1. **Bypass Without Detection**: Does not record any events
2. **Detect Without Blocking**: Records events without blocking them
   - Basic Security Policy: After detection, blocks events according to the rules
     - Directory Listing
     - Invalid HTTP
     - SQL Injection
3. **Standard Security Policy**: After detection, blocks events according to the rules
   - Cross Site Scripting
   - Directory Listing
   - Directory Traversal
   - Error Handling
   - File Inclusion
   - File Upload
   - Invalid HTTP
   - Invalid URL
   - Request Method Filtering
   - SQL Injection
4. **Advanced & PCI-DSS Security Policy**:
   - Responds based on the configured countermeasures
   - Allows inspection of a specific rule by clicking the corresponding policy
   - Responds based on the configured countermeasure settings
5. **Block All Traffic**:
   - Blocks all responses to requests to the website
   - Does not record logs because requests are blocked before detection

**Rule List** — displays the rules and countermeasures available in the selected policy.

[![file](/img/migrated/image-1714115324089-7946dbab.png)](/img/migrated/image-1714115324089-7946dbab.png)

**Add Policy/Website** — create a custom policy or add websites to a policy to apply it individually per website by clicking the + icon.

[![file](/img/migrated/image-1714115330781-fdfd7e91.png)](/img/migrated/image-1714115330781-fdfd7e91.png)

- Create a policy based on an existing policy
- Add a policy for a website (a specific subdirectory can be specified)
- Add a rule to a policy

[![file](/img/migrated/image-1714116584852-121d4fcb.png)](/img/migrated/image-1714116584852-121d4fcb.png)

**Snort** [![file](/img/migrated/image-1714116637131-1a780634.png)](/img/migrated/image-1714116637131-1a780634.png)

- Select User-defined
- Add Rule Name
- Select Countermeasure
- Select Risk Level (if Disconnect / Error Code / Page Redirection is selected)
- Upload the rule configured in [Security Settings] - [Pattern Storage] - [Snort]
- Click Apply then Save

[![file](/img/migrated/image-1714116644103-e6d7de68.png)](/img/migrated/image-1714116644103-e6d7de68.png)

**Threat Protection Profile** [![file](/img/migrated/image-1714116657982-729ff395.png)](/img/migrated/image-1714116657982-729ff395.png)

- Select Detection or Do Not Detection
- Select Countermeasure (if Detection is selected)
- Select Risk Level (if Detection / Disconnect / Error Code / Page Redirection is selected)
- Upload the rule configured in [Security Settings] - [Security Patch] - [Threat Protection Profile]
- Click Apply then Save

**Manually Input** [![file](/img/migrated/image-1714116666121-7012fe2f.png)](/img/migrated/image-1714116666121-7012fe2f.png)

- Select User-defined
- Add Rule Name
- Select Countermeasure
- Select Risk Level (if Disconnect / Error Code / Page Redirection is selected)
- Manually configure the pattern, then click Apply and Save
