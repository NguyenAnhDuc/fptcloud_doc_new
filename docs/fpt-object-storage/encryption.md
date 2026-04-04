---
id: "encryption"
title: "Encryption"
description: "Guide to using Server-Side Encryption with Customer-Provided Keys (SSE-C) in FPT Object Storage."
sidebar_label: "Encryption"
sidebar_position: 8
---

# Encryption (SSE-C)

## Server-Side Encryption with Customer-Provided Keys (SSE-C)

**Server-Side Encryption with Customer-Provided Keys (SSE-C)** is a feature in **FPT Object Storage** that enhances data security using encryption keys provided by the customer.

### How SSE-C works

1. **Uploading data:**
   - When you upload an object, you must provide an encryption key along with the data.
   - FPT Object Storage uses this encryption key to encrypt the data before storing it.
   - Once encryption is complete, the encryption key is discarded and not stored on the system.

2. **Downloading data:**
   - When you download data, you must provide the same encryption key that was used to encrypt the data originally.
   - FPT Object Storage uses this key to decrypt the data and return it to you.

### Key points

- **Key management:**
  - You are fully responsible for managing your encryption keys.
  - FPT Object Storage does not store your encryption keys. If you lose your encryption key, you will not be able to access data encrypted with that key.

- **Security:**
  - SSE-C provides an additional layer of data protection, particularly useful for organizations that must comply with strict security regulations.
  - Customers have full control over access to important objects through encryption key management.

- **Usage:**
  - When using SSE-C, you must create, store, and protect your encryption keys yourself.
  - Ensure you have appropriate security processes in place to manage and protect these encryption keys.

SSE-C is an effective method for protecting sensitive data in **FPT Object Storage**, giving customers maximum control over data access and security.
