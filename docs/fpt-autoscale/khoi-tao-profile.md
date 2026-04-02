---
id: "khoi-tao-profile"
title: "Create Profile"
description: "Guide to creating an Autoscale Profile on FPT Autoscale."
sidebar_label: "Create Profile"
sidebar_position: 3
---

# Create Profile

## Step 1: Go to Autoscaling > Autoscale Profile. Click **Create profile**.

[![create profile button](/img/migrated/Screenshot-2024-09-30-141746-e33a4741.png)](/img/migrated/Screenshot-2024-09-30-141746-e33a4741.png)

## Step 2: Configure the technical parameters.

[![create profile page](/img/migrated/screencapture-console-fptcloud-000823-IN-44f85951.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-44f85951.png)

**General information**

Enter a profile name that is easy to manage. The name must not exceed 80 characters and may include Latin letters, numbers, underscores, hyphens, and periods.

**Image**

The available OS Families include: Ubuntu, Windows, CentOS, and Debian. Each OS group contains multiple distributions.

The Custom group is commonly preferred and contains images that have been customized and configured by users for their specific needs.

**Credentials**

Supported authentication methods:

- Password.
- None: Select _None_ if no authentication is required when accessing the instance.

If the image belongs to the Custom group, the authentication method is already configured within the image and does not need to be changed.

**Resource**

- CPU & RAM: Select appropriate specifications from the available options.
- Storage: Select the disk type and capacity. The default is Premium-SSD with a minimum of 40 GB.

:::note
The minimum recommended capacity is based on the selected image specifications. Reducing disk capacity below the image requirement may cause unexpected errors.
:::

**Network**

Select the appropriate subnet and security group within the VPC. The subnet and security group must be created before creating the profile.

**Advanced setting**

Enter a [cloud-init](https://cloudinit.readthedocs.io/en/latest/topics/examples.html) script if needed. When a node starts, cloud-init reads metadata from the cloud and initializes the system based on it. Cloud-init is commonly used to set up networking, storage, SSH public keys, and other system components.

Example: The sample script below installs the required packages, clones a static website from GitHub, and starts the nginx server. To view the result, assign a Floating IP to the node and access the website through that Floating IP.

```yaml
# Update apt database on first boot
package_update: true

packages:
  - nginx
  - git

runcmd:
  - systemctl enable nginx
  - systemctl start nginx
  - git clone https://github.com/cloudacademy/static-website-example.git
  - cp -r ./static-website-example/* /var/www/html/
  - rm -r ./static-website-example
```

:::warning
Avoid including sensitive information in scripts such as passwords, tokens, secret keys, or personal data.
:::

## Step 3: Click **Create profile** to confirm.

After successful creation, the profile appears in the list of existing profiles.

[![list profiles after create](/img/migrated/Screenshot-2024-09-30-172521-27261ff1.png)](/img/migrated/Screenshot-2024-09-30-172521-27261ff1.png)

View profile details by clicking the profile name in the list:

[![click to view profile details](/img/migrated/Screenshot-2024-10-01-164339-e3a959ae.png)](/img/migrated/Screenshot-2024-10-01-164339-e3a959ae.png)

[![profile detail page](/img/migrated/screencapture-console-fptcloud-000823-IN-5d746d0a.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-5d746d0a.png)

:::note
Modifying the technical specifications of a profile is not currently supported, in order to ensure configuration reference consistency. However, you can rename a profile at any time.
:::
