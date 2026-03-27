---
id: "faq"
title: "Faq"
description: "Model Testing - Interactive Sessions is a service in the FPT AI Factory Portal that allows users to **test and validate "
sidebar_label: "Faq"
sidebar_position: 17
---

# Faq

### 1. What is Model Testing - Interactive Sessions?
Model Testing - Interactive Sessions is a service in the FPT AI Factory Portal that allows users to **test and validate fine-tuned AI models** in real-world scenarios through a chat-like interface.
### 2. When should I use Model Testing - Interactive Sessions?
Use them when you want to:
  * Simulate real user interactions
  * Evaluate tone, style, and contextual relevance
  * Identify edge cases or unexpected behaviors before deployment.

### 3. What model can be used in Model Testing - Interactive Sessions?
Only model that meet these criteria:
  * **Model type:** LLM (text-only) or VLM (text + image)
  * **Model size:** greater than 0
  * **Learning stage** : Must be Instruction-tuned

### 4. How do I create a session?
  1. Go to **Model Testing -- > Interactive Sessions**
  2. Click **Create New Session**
  3. Fill in session name, description, select model, and set session stop.
  4. Submit the session

### 5. Can I restart a stopped session?
No. Once stopped, a session cannot be restarted. You must create a new one.
### 6. What is the Playground?
The Playground is where you:
  * Chat with the model
  * Adjust parameters (temperature, top-p, output length, add stop sequence)
  * Refine messages and evaluate responses.

### 7. How do I integrate the model via API?
  1. Click **Get API Endpoint** in the Playground.
  2. Copy sample code to send requests.