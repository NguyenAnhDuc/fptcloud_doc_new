---
id: "role-management"
title: "Role management"
description: "Role is a core component of the IAM module on FPT Cloud Portal."
sidebar_label: "Role management"
sidebar_position: 13
---

# Role management

Role is a core component of the IAM module on FPT Cloud Portal. The **Role management** feature allows system administrators to define and assign roles with specific access permissions for users of the FPT Database Engine service.

Using roles enhances security through detailed access control, applies the principle of least privilege, and supports separation of permissions according to different operational needs and models.

The steps below provide detailed guidance for creating a new Role and assigning corresponding access permissions to it.

### Step 1: Access the role management page

Log in to FPT Cloud Portal. After logging in successfully, from the main menu, select **IAM** > **Roles**. The **Role Management** interface will display the list of existing roles, along with options to create new, edit, or delete a role.

### Step 2: Create a new role

In the **Role Management** page, click **Create role**. The create new role screen appears as follows:

[![](/img/migrated/create-role-46051a0f.png)](/img/migrated/create-role-46051a0f.png)

Enter basic information:

- **Role name**: The name used to identify the role in the IAM system, up to 100 characters, including: letters, numbers, underscores (_), hyphens (-), spaces, and periods (.). Required.
- **Description**: A description of the purpose, permission scope, or user group to which it applies. This field makes administration and auditing clearer.
- **Permissions**: The list of permissions assigned to the Role.
  - **Permission 1**: Displays a permission already added to the role. Click **See more** to view permission details and edit the permission configuration.
  - **+ Permission**: Click this button to add a new permission to the role. You can select permissions by function.

For permission configuration details, see Step 3.

### Step 3: Configure permissions for the role

Click **See more** to display the information fields for a permission:

[![](/img/migrated/see-more-permission-faeb2c18.png)](/img/migrated/see-more-permission-faeb2c18.png)

- **Service Type**: Select the service type corresponding to the permissions or business functions you want to assign. The FPT Database Engine service uses 2 main service types: _"ManageDatabase"_ and _"FDE"_.
  - **ManageDatabase**: Provides permissions for standard database management activities, including viewing information, provisioning, operating databases, and managing add-on services.
  - **FDE**: Provides permissions for sensitive database-related operations, such as viewing or managing the admin account password.

After selecting a service type, the system automatically displays all corresponding actions in the **Action** section and updates the permission name according to the selected service type.

- **Action**: Specifies the actions the role is permitted to perform. Click **See more** to view and select the actions assigned to the role. Actions not selected will not be granted and will be blocked by the system.
- **Resource**: Specifies the resources the role is permitted to access. Click **See more** to view and select the resources assigned to the role. Resources not selected will not be granted and will be blocked by the system. There are 2 options:
  - **All**: Grants access to all resources. When this option is selected, the system defaults to granting the role access to all resources.
  - **Specific**: Grants access to specific selected resources. **Note**: With this option, when assigning the **permission to block viewing the admin password** (Service Type is "FDE" and action "FDE:hide_admin_password"), you need to select the databases to be restricted in the **Select resource** field. Only the selected databases will have their password viewing restricted; databases not selected will allow password viewing.

[![](/img/migrated/resource-specified-hide-pass-ad74aea0.webp)](/img/migrated/resource-specified-hide-pass-ad74aea0.webp)

After entering all the information, select **Create role** to complete the role creation process.

After successful creation, the new role will appear in the management list with **Active** status and be ready to grant permissions to users. For permission granting instructions, please refer to the [User Group management](../managed-fpt-database-engines-new/index.md) section.

When needed, you can perform the following operations on a created role:

- **Edit role**: This feature allows you to modify the name, description, and permissions of a role when access requirements or security policies change. To use this feature, on the **Role Management** page, select **Edit role** corresponding to the role to be edited. Make changes and click **Save** to save.
- **Delete role**: This feature allows you to remove roles that are no longer in use, keeping the access permission management system clean and accurate. On the **Role Management** page, select **Delete** corresponding to the role to be deleted. Confirm the action in the warning dialog to complete. **Warning**: **Deleting a role will affect the access permissions of users and user groups currently assigned that role**. After the role is deleted, the related permissions will be immediately revoked, potentially disrupting management and operation of cloud and DBaaS resources. Ensure the role is no longer assigned to any User Group or User before deleting.
