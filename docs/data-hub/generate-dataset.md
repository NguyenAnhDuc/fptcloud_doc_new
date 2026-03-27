---
id: "generate-dataset"
title: "Generate Dataset"
description: "Access the Data Hub service, navigate to Dataset Management menu and click the 'Generate Dataset' button [![file](/img/m"
sidebar_label: "Generate Dataset"
sidebar_position: 4
---

# Generate Dataset

Access the Data Hub service, navigate to Dataset Management menu and click the "Generate Dataset" button [![file](/img/migrated/image-1751971103513.32.30-aa1276e2.png)](/img/migrated/image-1751971103513.32.30-aa1276e2.png)
### **Overview:**
**Generate Dataset** feature allows you to create a new dataset using a pre-trained model (teacher model) to label or generate outputs from your input data. You’ll need to provide model configuration, input data, and generation parameters.
### Steps to Generate a Dataset
  1. **Select or Create a New Model Configuration** [![file](/img/migrated/image-1751971150903.38.58-4c949f4a.png)](/img/migrated/image-1751971150903.38.58-4c949f4a.png)
     * You can select a model configuration that you have created or create a new one by click drop-down list
     * **Model Provider** : A model provider is a service that offers AI models for tasks like text generation, ranking, and classification, currently support **FPT AI Marketplace** & **OpenAI**
     * **API Key** : An API key is a unique code that authenticates your access to a service
     * **Base URL** : The base endpoint URL for the model. Example: `https://mkp-api.fptcloud.com/`
     * **Model Type** : Select the type of model, which defines the AI model’s function. Currently only support LLM - Large Language Model
     * **Base Model** : Choose the foundation model (e.g., DeepSeek-R1).
     * **Model Name** : Specify the name of the model you want to set
  2. **Set Parameters** [![file](/img/migrated/image-1751971239430.40.21-c5e4714a.png)](/img/migrated/image-1751971239430.40.21-c5e4714a.png)
     * **Max Output Length** : Maximum number of tokens the model is allowed to generate. Default: `8192`.
     * **Top-P** : Controls the cumulative probability for token sampling. A higher value increases diversity. Default: `0.95`.
     * **Temperature** : Controls randomness in the output. Higher values result in more creative responses. Default: `1.00`.
  3. **Configure Dataset** [![file](/img/migrated/image-1751971272483.41.01-b5fc94cc.png)](/img/migrated/image-1751971272483.41.01-b5fc94cc.png)
     * **Name** _(required)_ : Enter a name for the dataset to be generated.
     * **Trainer** : Select the trainer type (e.g., SFT - Supervised Fine-Tuning).
     * **Data Format** : Choose the format of the input data, such as Alpaca
     * **Input Method** : Choose how to provide input data. Currently supports **File Upload & Data Connection**
       * **Upload File:** Click **Upload File** to upload a `.csv` or `.json` file.
> Note: Max file size is 100MB.
>        * **Data Connection:** Choose a data connection that you want and enter a valid path
     * **System Message** _(optional)_ : A background prompt for the model, e.g., `"You are a helpful assistant."`

After completing required fields, click “Save” button. Depending on file size and model response time, generation may take a few minutes.