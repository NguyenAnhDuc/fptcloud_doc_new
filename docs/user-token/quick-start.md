---
id: "quick-start"
title: "Quick Start"
description: "1. **User Authentication**"
sidebar_label: "Quick Start"
sidebar_position: 3
---

# Quick Start

### **How It Works (Typical Flow)**
  1. **User Authentication**
→ The user create a token in User Token Service.
  2. **Token Issuance**
→ If valid, the service issues an **access token** (and optionally a **refresh token**).
  3. **API Request**
→ The client calls the target API, including the access token in the header.
  4. **Token Validation**
→ The API verifies the token (via signature or introspection endpoint).
  5. **Access Granted or Denied**
→ If the token is valid and authorized for that resource, access is granted.
