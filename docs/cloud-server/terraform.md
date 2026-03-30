---
id: "terraform"
title: "IaC (Terraform)"
description: "Use Terraform to automate the deployment and management of infrastructure on FPT Cloud as an advanced infrastructure management solution."
sidebar_label: "IaC (Terraform)"
sidebar_position: 75
---

# IaC (Terraform)

FPT Smart Cloud introduces Terraform as an advanced infrastructure management solution, enabling users to automate the deployment and management of cloud infrastructure efficiently. With Terraform, users can define infrastructure as code (Infrastructure as Code), making deployments consistent, easily scalable, and manageable across multiple cloud platforms such as AWS, Azure, and Google Cloud. This solution not only minimizes risk but also enhances control and resource optimization, helping businesses achieve their technology goals quickly and sustainably.

# **Set up**

## **1. System Requirements**

  * Operating system: Terraform supports multiple operating systems including Linux, macOS, and Windows.
  * Version: Use the latest version of Terraform to ensure compatibility with your cloud service providers.
  * Internet access: Required to download Terraform and its plugins.

## **2. Installing Terraform**

**On macOS:**
  * Using Homebrew:

```
Copybrew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

**On Ubuntu:**

```
Copysudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl

curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -

sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"

sudo apt-get update && sudo apt-get install terraform
```

**On Windows:**
  * Download from the Terraform Download Page.
  * Extract the file and add the Terraform path to the PATH environment variable.

## **3. Verify the Installation**

```
Copyterraform -v
```

## **4. How to obtain a token for FPT Cloud Terraform**

Go to **Sidebar** -> select **Token**

[![file](/img/migrated/image-1723437528179-91f0c476.png)](/img/migrated/image-1723437528179-91f0c476.png)

## **5. Initialize the FPT Cloud Provider**

  * Check the version and installation instructions for the FPT Cloud Provider on the Terraform registry

[![file](/img/migrated/image-1723437534957-3c8ce6d5.png)](/img/migrated/image-1723437534957-3c8ce6d5.png)

  * Use the `terraform init` command to install the FPT Cloud Provider:

[![file](/img/migrated/image-1723437542169-e0e540d0.png)](/img/migrated/image-1723437542169-e0e540d0.png)

  * FPT Cloud connection script:

[![file](/img/migrated/image-1723437548914-a137448d.png)](/img/migrated/image-1723437548914-a137448d.png)

  * Create an access token to connect to FPT Cloud:

[![file](/img/migrated/image-1723437556421-20c74723.png)](/img/migrated/image-1723437556421-20c74723.png)

  * Use the access token to connect to FPT Cloud:

[![file](/img/migrated/image-1723437566706-348f066d.png)](/img/migrated/image-1723437566706-348f066d.png)

# **Documentation**

  * Terraform Provider Docs:
    * <https://registry.terraform.io/providers/fpt-corp/fptcloud/latest/docs/>
  * FPT Cloud Terraform Source:
    * <https://github.com/fpt-corp/terraform-provider-fptcloud>

# **Basic Commands**

## **1. Instance**

  * Script to create an instance:

[![file](/img/migrated/image-1723437678446-b7530cf5.png)](/img/migrated/image-1723437678446-b7530cf5.png)

  * Result after successfully running the instance creation script:

[![file](/img/migrated/image-1723437688217-2eb8bf11.png)](/img/migrated/image-1723437688217-2eb8bf11.png)

  * Destroy the created instance:

[![file](/img/migrated/image-1723437700286-b35fddad.png)](/img/migrated/image-1723437700286-b35fddad.png)

## **2. Floating IP**

  * Script to create a Floating IP:

[![file](/img/migrated/image-1723437714387-6c0be5da.png)](/img/migrated/image-1723437714387-6c0be5da.png)

  * Result after successfully running the Floating IP creation script:

[![file](/img/migrated/image-1723437730547-f78e85ae.png)](/img/migrated/image-1723437730547-f78e85ae.png)

  * Destroy the created Floating IP:

[![file](/img/migrated/image-1723437746142-363beff3.png)](/img/migrated/image-1723437746142-363beff3.png)

## **3. Security group**

  * Script to create a Security Group:

[![file](/img/migrated/image-1723437759616-a8b23b4a.png)](/img/migrated/image-1723437759616-a8b23b4a.png)

  * Result after successfully running the Security Group creation script:

[![file](/img/migrated/image-1723437770927-7e2c545b.png)](/img/migrated/image-1723437770927-7e2c545b.png)

  * Destroy the created Security Group:

[![file](/img/migrated/image-1723437790818-b15cbbf6.png)](/img/migrated/image-1723437790818-b15cbbf6.png)

## **4. Storage disk**

  * Script to create storage:

[![file](/img/migrated/image-1723437806000-91108bc0.png)](/img/migrated/image-1723437806000-91108bc0.png)

  * Result after successfully running the storage creation script:

[![file](/img/migrated/image-1723437818502-769b79b9.png)](/img/migrated/image-1723437818502-769b79b9.png)

  * Destroy the created storage:

[![file](/img/migrated/image-1723437832407-dc6858ee.png)](/img/migrated/image-1723437832407-dc6858ee.png)

## **5. Database**

  * Script to create a database:

[![file](/img/migrated/image-1728455233157-737c6b5f.png)](/img/migrated/image-1728455233157-737c6b5f.png)

  * Result after successful creation:

[![file](/img/migrated/image-1728455257294-ab53f375.png)](/img/migrated/image-1728455257294-ab53f375.png)

  * Script to manage the run/stop state of the database:

[![file](/img/migrated/image-1728455276595-5698c246.png)](/img/migrated/image-1728455276595-5698c246.png)

## **6. Dedicated FKE**

  * Script to create a Dedicated FKE cluster:

[![file](/img/migrated/image-1728875321308-2f0d39fe.png)](/img/migrated/image-1728875321308-2f0d39fe.png)

  * Result after successful creation:

[![file](/img/migrated/image-1728875338930-4c7925af.png)](/img/migrated/image-1728875338930-4c7925af.png)

## **7. Managed FKE**

  * Script to create a Managed FKE cluster:

[![file](/img/migrated/image-1728875363303-1b9ead1e.png)](/img/migrated/image-1728875363303-1b9ead1e.png)

  * Result after successful creation:

[![file](/img/migrated/image-1728875375510-c368341c.png)](/img/migrated/image-1728875375510-c368341c.png)
