---
id: "select-data-format"
title: "Select Data Format"
description: "Understand data formats supported for model fine-tuning."
sidebar_label: "Select Data Format"
sidebar_position: "9"
---

# Select Data Format

## 1. What is data?

In the fine-tuning process, data is a **curated set of sample inputs and outputs** used to retrain a **pre-trained AI model**. This data teaches the model to adapt its behavior for a specific **domain, task, or voice tone**.

## 2. Why is data important in training?

Data plays a **central role** in fine-tuning. It directly affects how well the model performs on the intended use case.

Good data allows the model to:
- Understand context such as corporate tone, medical terminology, or customer service scripts.
- Learn and specialize for your task (classification, question answering, summarization, etc.).
- Generate more accurate and relevant responses.
- Minimize the need for complex prompts — because the model has already learned the structure.

## 3. Selecting and structuring data correctly

Choosing and formatting the right data is a **key step** because it:
- Helps the model learn the right objectives.
- Integrates easily into the training pipeline (tokenizer, loss function, etc.).
- Improves training efficiency and reduces processing errors.
- Ensures scalability and maintainability of the fine-tuning process.

## 4. Supported data formats

We currently support the following data formats for fine-tuning.
![file](/img/migrated/image-1744846094591.46.53-3072b275.png)

### 1. Alpaca

**Alpaca** uses a simple structure to fine-tune a model in an **instruction-following format with input-output pairs** for supervised fine-tuning tasks. The basic structure includes:
- **Instruction**: A string containing the specific task or request the model must perform.
- **Input**: A string containing the information the model needs to process to carry out the task.
- **Output**: A string representing the result the model should return, generated from processing the instruction and input.

**Detailed structure:**
```
[ { "instruction": "string", "input": "string", "output": "string" } ]
```

**Example:**
```
[
    {
        "instruction": "In this task, you are given Wikipedia articles on a range of topics as passages and a question from the passage. We ask you to answer the question by classifying the answer as 0 (False) or 1 (True)\n\nNow complete the following instance -\nInput: Passage: Missouri River -- Tonnage of goods shipped by barges on the Missouri River has seen a serious decline from the 1960s to the present. In the 1960s, the USACE predicted an increase to 12 million short tons (11 Mt) per year by 2000, but instead the opposite has happened. The amount of goods plunged from 3.3 million short tons (3.0 Mt) in 1977 to just 1.3 million short tons (1.2 Mt) in 2000. One of the largest drops has been in agricultural products, especially wheat. Part of the reason is that irrigated land along the Missouri has only been developed to a fraction of its potential. In 2006, barges on the Missouri hauled only 200,000 short tons (180,000 t) of products which is equal to the amount of daily freight traffic on the Mississippi.\nQuestion: is there barge traffic on the missouri river\nOutput:",
        "input": "",
        "output": "1"
    }
]
```

**Samples**: <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/alpaca>

### 2. Corpus

**Corpus** is a collection of text used for training or fine-tuning language models. Each data point in the corpus includes a `"text"` field with a string of text. This format is used when you do not need to distinguish between **instruction** and **output** — you simply provide raw text data for the model to learn from.

**Detailed structure:**
```
[ { "text": "string" } ]
```

**Samples:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/corpus>

### 3. ShareGPT

#### a. Trainer = SFT

**ShareGPT** is designed to represent multi-turn conversations (back-and-forth chats) between a user and an AI assistant. It is commonly used when training or fine-tuning models for dialogue systems or chatbots that need to handle contextual conversation over multiple turns.

Each data sample consists of a `conversations` array, where each turn includes:
- **from**: Who is speaking — usually `"user"` or `"assistant"`.
- **value**: The actual message text from that speaker.

**Detailed structure:**
```
[ { "conversations": [ { "from": "string", "value": "string" } ] } ]
```

**Samples:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt>

#### b. Trainer = DPO

**ShareGPT_DPO** is a dataset consisting of conversations (prompt + response) collected from ShareGPT, along with pairs of responses ranked by humans based on which is better. It is used to:
- Train language models to respond in ways that align with human preferences.
- Optimize response quality using the DPO (Direct Preference Optimization) method.

**Detailed structure:**
```
[ { "conversations": [ { "from": "string", "value": "string" } ], "chosen": { "from": "string", "value": "string" }, "rejected": { "from": "string", "value": "string" } } ]
```

**Samples**: <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt-dpo>

### 4. ShareGPT_Image

**ShareGPT_Image** is an extension of the ShareGPT multi-turn chat format, designed specifically for multi-modal training — training models that handle both text and images in conversations. It is used for fine-tuning vision-language models (VLMs) that need to process images alongside natural language.

The structure includes:
- A list of chat turns under `"conversations"` (same as ShareGPT).
- A field called `"image"` or `"image_path"` pointing to the image used in the conversation (png, jpg, jpeg formats).

**Detailed structure:**
```
[ { "message": [ { "role": "string", "content": "string" } ], "images": [ "images/0.jpg" ] } ]
```

**Samples**: <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt-image>
