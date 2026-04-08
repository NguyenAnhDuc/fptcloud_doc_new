---
id: "set-up"
title: "Setup guide"
description: "How to install Terraform and configure the FPT Cloud provider."
sidebar_label: "Setup guide"
sidebar_position: 3
---

# Setup guide

## 1. System requirements

- **Operating system**: Terraform supports Linux, macOS, and Windows.
- **Version**: Use the latest version of Terraform to ensure compatibility with your cloud providers.
- **Internet access**: Required for downloading Terraform and plugins.

## 2. Install Terraform

**On macOS** (using Homebrew):

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

**On Ubuntu**:

```bash
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install terraform
```

**On Windows**:

1. Download the installer from the [Terraform Downloads page](https://www.terraform.io/downloads).
2. Extract the archive and add the Terraform path to your `PATH` environment variable.

## 3. Verify installation

```bash
terraform -v
```

## 4. Get an FPT Cloud token

Go to **Sidebar** and select **Token**.

[![Token section in the FPT Cloud sidebar](/img/migrated/image-1723437528179-91f0c476.png)](/img/migrated/image-1723437528179-91f0c476.png)

## 5. Initialize the FPT Cloud provider

- Check the provider version and installation instructions on the Terraform registry page.

  [![FPT Cloud provider on Terraform registry](/img/migrated/image-1723437534957-3c8ce6d5.png)](/img/migrated/image-1723437534957-3c8ce6d5.png)

- Run `terraform init` to install the FPT Cloud provider:

  [![terraform init command output](/img/migrated/image-1723437542169-e0e540d0.png)](/img/migrated/image-1723437542169-e0e540d0.png)

- Use the FPT Cloud connection script:

  [![FPT Cloud connection script](/img/migrated/image-1723437548914-a137448d.png)](/img/migrated/image-1723437548914-a137448d.png)

- Create an access token to connect to FPT Cloud:

  [![Creating an access token](/img/migrated/image-1723437556421-20c74723.png)](/img/migrated/image-1723437556421-20c74723.png)

- Use the access token to connect to FPT Cloud:

  [![Using the access token](/img/migrated/image-1723437566706-348f066d.png)](/img/migrated/image-1723437566706-348f066d.png)
