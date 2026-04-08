---
id: "create-an-interactive-session"
title: "Create an interactive session"
description: "Guide to creating an interactive session in the model testing service"
sidebar_label: "Create an interactive session"
sidebar_position: 4
---

# Create an interactive session

Go to the model testing service, select "Interactive Session", and click "Create new session".

[![file](/img/migrated/image-1746688925988.21.46-ae14f354.png)](/img/migrated/image-1746688925988.21.46-ae14f354.png)

### Creating an interactive session

[![file](/img/migrated/image-1746689212265.22.57-0fa0e464.png)](/img/migrated/image-1746689212265.22.57-0fa0e464.png)

- Enter the session name
  - Default format: [int.session]_[timestamp]
  - Editable, **maximum 100 characters**
- Enter the session description (maximum **200 characters**)
- Model source options

When setting up the configuration, you can choose from the following two model sources:

- **Catalog**
  - When you select **Catalog** as the source, a list of all available models in the **Model Catalog** is displayed. Make sure you select an instruction model.
  **Example:** Llama-3.1-8B-Instruct
  - This option is suitable when you want to reference or select predefined public models.
- **Private Model**
  - When you select **Private Model**, only your organization's custom models or privately deployed models are displayed.
  - Select the version of the model you want to test. **Make sure the model has browser files and tags.**
  - Use this option when you are working with a model that has not been published to the catalog.

Once complete, the list of created interactive sessions is displayed.
