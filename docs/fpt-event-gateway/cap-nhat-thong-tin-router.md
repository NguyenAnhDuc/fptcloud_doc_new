---
id: "cap-nhat-thong-tin-router"
title: "Update Router Information"
description: "To update Router information, follow the steps below."
sidebar_label: "Update Router Information"
sidebar_position: 18
---

# Update Router Information

To update **Router** information, follow the steps below:

**Step 1:** In the menu bar, select **Integration** > **Event Gateway**.

**Step 2:** In the **Event Gateway** list, select an **Event Gateway** > select the **Router** tab.

**Step 3:** In the **Router** list, click the **Edit** button.

**Step 4:** Modify the following information:

- **Name (required):** Router name.
  - May contain a–z, A–Z, hyphens (-), underscores (_), and digits; must start with a letter; maximum 30 characters.
- **Mode (required):** Router type. Select from:
  - Oneway
  - Sync
  - Async
  - The interface displays 3 default router templates corresponding to the 3 modes.
- **Authentication (required):** Whether the Router uses authentication.
  - Default: None.
  - Select from:
    - None: no authentication.
    - JWT auth (if JWT auth configuration is enabled).
- **Path (required):** Path for sending (POST) or retrieving (FETCH) data.
  - Must start with `/`; may contain a–z, A–Z, 0–9, hyphen (-), underscore (_), `/`, `{`, `}`, `=`; maximum 100 characters.
- **Scope (required):** Defines the value of the "scope" claim in the JWT token for API request authentication.
  - Maximum 50 characters.
- **Topic (required):** Kafka topic name that receives data in Oneway mode.
- **Request topic (required):** Kafka topic name that receives data in Sync or Async mode.
  - May contain a–z, A–Z, 0–9, hyphen (-), underscore (_), dot (.).
  - Must start with a letter; maximum 249 characters.
- **Response topic (required):** Kafka topic name that retrieves data in Sync or Async mode.
  - May contain a–z, A–Z, 0–9, hyphen (-), underscore (_), dot (.).
  - Must start with a letter; maximum 249 characters.

Click **Add router** to add a router template for each Router Mode type.
Click **Remove router** to delete a Router.

**Step 5:** Click **Save** to save the new configuration.
