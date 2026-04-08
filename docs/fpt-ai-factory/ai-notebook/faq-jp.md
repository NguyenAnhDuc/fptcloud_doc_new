---
id: "faq-jp"
title: "FAQ"
description: "Frequently asked questions about AI Notebooks on FPT AI Factory."
sidebar_label: "FAQ"
sidebar_position: "8"
---

# FAQ

## What are the idle rules in AI Notebook?

To help you save resources and avoid unexpected charges, AI Notebook automatically manages idle sessions. The following rules apply:

- **GPU kernel idle timeout:** A GPU kernel is considered idle after 30 minutes of no activity (no code execution). When this happens, the kernel will be automatically disconnected.
- **Lab idle timeout:** The lab environment is considered idle after 1 hour of no user interaction (no typing, clicking, or switching tabs). Once idle, the lab will be automatically deleted to free up resources.
- **Data safety:** If your lab is deleted due to idleness, all saved files remain securely stored in persistent storage and can be accessed later. Remember to **save your files** before closing the browser to ensure that no unsaved work is lost.

## How long does it take to start CPU and GPU flavors?

- **GPU flavor:** Startup typically takes **45 seconds to 1 minute**.
- **CPU flavor:** Startup typically takes **around 15 seconds**.

_Actual startup time may vary depending on system load and network conditions._
