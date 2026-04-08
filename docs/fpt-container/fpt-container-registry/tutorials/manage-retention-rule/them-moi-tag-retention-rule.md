---
id: "them-moi-tag-retention-rule"
title: "Add a tag retention rule"
description: "Create a tag retention rule to automatically manage images in a repository."
sidebar_label: "Add a tag retention rule"
sidebar_position: "14"
---

# Add a tag retention rule

Tag retention rules let you define criteria to automatically retain or delete tags in a repository, giving you control over storage usage without manual intervention.

1. On the **FPT Portal** menu, select **Container Registry** > **Policy** tab.

   [![Policy tab on Container Registry](/img/migrated/Picture27-62a35e57.png)](/img/migrated/Picture27-62a35e57.png)

2. Click **ADD RULES** and enter the information to create a tag retention rule.

   [![Tag retention rule creation form](/img/migrated/Picture28-1-01eeb19b.png)](/img/migrated/Picture28-1-01eeb19b.png)

3. In the **Repositories** menu, select **matching** or **excluding**.

   [![matching/excluding option for repositories](/img/migrated/Picture29-1-2c469e51.png)](/img/migrated/Picture29-1-2c469e51.png)

4. In the **Repositories** field, enter the information to identify the repositories the rule applies to:
   - A single repository name, e.g. `my_repo_1`
   - A comma-separated list of repositories, e.g. `my_repo_1, my_repo_2`
   - Repository names with wildcard characters

   [![Repository configuration example](/img/migrated/Screenshot_6-4a6d1e32.png)](/img/migrated/Screenshot_6-4a6d1e32.png)

   Use `**` to apply to all repositories. If you select **matching**, the rule applies to the repositories you specify. If you select **excluding**, the rule applies to all except the repositories you specify.

5. In the **By image count or number of days** menu, specify the number of tags to retain or the retention period.

   [![Count or period retention options](/img/migrated/Picture30-1-78d8e53a.png)](/img/migrated/Picture30-1-78d8e53a.png)

   | Option | Description |
   |---|---|
   | retain the most recently pushed # images | Keep the specified number of most recently pushed images |
   | retain the most recently pulled # images | Keep the specified number of most recently pulled images |
   | retain the images pushed within the last # days | Keep images pushed within the specified number of days |
   | retain the images pulled within the last # days | Keep images pulled within the specified number of days |
   | retain always | Always retain images under this rule |

6. In the **Tag** menu, select **matching** or **excluding**.

   [![matching/excluding option for tags](/img/migrated/Picture31-1-82b19f69.png)](/img/migrated/Picture31-1-82b19f69.png)

7. In the **Tag** field, enter the information to identify the tags the rule applies to:
   - A single tag name, e.g. `my_tag_1`
   - A comma-separated list of tags
   - Tag names with wildcard characters

   [![Tag configuration example](/img/migrated/Screenshot_7-6f3add0a.png)](/img/migrated/Screenshot_7-6f3add0a.png)

   Use `**` to apply to all tags.

8. Click **Add** to save the rule.

   [![Add button to save the retention rule](/img/migrated/Picture32-1-7c5cce38.png)](/img/migrated/Picture32-1-7c5cce38.png)

9. Verify the newly created tag retention rule.

   [![Tag retention rule creation result](/img/migrated/Picture33-1-37c6a3a0.png)](/img/migrated/Picture33-1-37c6a3a0.png)

   Example: a rule that retains the 20 most recently pushed artifacts across all tags in all repositories.
