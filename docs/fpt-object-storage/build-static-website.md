---
id: "build-static-website"
title: "Build a Static Website with FPT Object Storage"
description: "How to configure an FPT Object Storage bucket as static website hosting and publish a website."
sidebar_label: "Build Static Website"
sidebar_position: 16
---

# Build a Static Website with FPT Object Storage

## Overview

In addition to its core data storage function, **FPT Object Storage** also supports configuring a bucket as web hosting.

With high stability, very low cost, and simple configuration, this web hosting solution can serve many purposes:

- Hosting static websites such as landing pages, resume websites, portfolio websites, and brochure websites.
- Hosting an error notification website when the main website experiences downtime.

## Prerequisites

You are using the **FPT Object Storage** service and have a public bucket.

## Background

A static website is a web page that has no server-side interactive features. It typically consists only of HTML, CSS, JavaScript files and resources such as images and videos. By using FPT Object Storage, you can store these files in your bucket and configure it to function as a website.

Once configured, FPT will provide you with a domain. You can use this domain directly or purchase a different domain and point a CNAME record to it for a custom domain.

## Steps

The following are the basic steps to build a static website using FPT Object Storage:

1. **Prepare the website pages:** Create all the HTML, CSS, JavaScript files and other resources required for your website.

2. **Create a public bucket:** Ensure that the bucket you want to use for the website is public. This allows all users to access content in the bucket.

3. **Upload files to the bucket:** Use the FPT Portal interface or a client to upload your prepared files to the bucket.

4. **Configure web hosting:** In the bucket settings, you will see the web hosting configuration section. Set options such as the index file name (typically `index.html`) and the 404 file name (page not found).

5. **Access the website:** After configuration is complete, you can access your static website using the path shown in the bucket's web hosting settings.

## Summary

Using FPT Object Storage to build a static website is a simple and cost-effective solution. Configuring the bucket to function as web hosting lets you easily share content online without managing your own server.
