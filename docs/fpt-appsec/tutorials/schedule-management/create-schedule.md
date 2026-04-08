---
id: "create-schedule"
title: "Create a schedule"
description: "How to create a scan schedule in FPT AppSec"
sidebar_label: "Create a schedule"
sidebar_position: 1
---

# Create a schedule

**Step 1:** Open the creation screen.

Go to the **Schedule** menu — the system navigates to the **Schedule Management** screen. Click **Create Schedule**.

[![Alt text](/img/migrated/1-1-461969c3.png)](/img/migrated/1-1-461969c3.png)

The creation screen appears with fields for General information and Scope configuration.

[![Alt text](/img/migrated/Screenshot-2025-11-14-141143-6b45dd3e.png)](/img/migrated/Screenshot-2025-11-14-141143-6b45dd3e.png)

**Step 2:** Fill in the general information fields.

**1. Name (required):** Enter a name for the schedule for easy identification. The name must be unique.

[![Alt text](/img/migrated/Picture3-35523042.png)](/img/migrated/Picture3-35523042.png)

**2. Description (optional):** Enter a short description (maximum 255 characters).

[![Alt text](/img/migrated/Picture4-0eb15724.png)](/img/migrated/Picture4-0eb15724.png)

**3. Frequency (required):** Select the schedule run frequency.

[![Alt text](/img/migrated/Picture5-2f370489.png)](/img/migrated/Picture5-2f370489.png)

- **On-demand:** Runs manually when triggered. Select a specific date and time (after today). The system runs the schedule once at the selected time.

  [![Alt text](/img/migrated/Screenshot-2025-11-14-141242-1e0f1e55.png)](/img/migrated/Screenshot-2025-11-14-141242-1e0f1e55.png)

- **Weekly:** Select the day of the week (Monday – Sunday) and the time to run.

  [![Alt text](/img/migrated/Picture7-2f26c4c8.png)](/img/migrated/Picture7-2f26c4c8.png)

- **Monthly:** Select the day (1–31) and the time to run each month, or choose **Last** to schedule on the last day of the month.

  [![Alt text](/img/migrated/Picture8-1e00c9a0.png)](/img/migrated/Picture8-1e00c9a0.png)

**Step 3:** Configure the scope.

**1. Select Team (required):** Choose the team to apply the schedule to.

[![Alt text](/img/migrated/Picture9-2174c7e0.png)](/img/migrated/Picture9-2174c7e0.png)

**2. Configure rules (Scope):**

- **Asset Type:** In the current version, rules apply only to **Repository** assets. Not editable.
- **Branch:** The current version applies to main/master branches only.
- **Source:** Select the repository source (GitHub/GitLab/GitLab Server). If not selected, the system scans all repos from all sources by default.

  [![Alt text](/img/migrated/Screenshot-2025-11-14-141405-ac960aef.png)](/img/migrated/Screenshot-2025-11-14-141405-ac960aef.png)

- **Last Scan:** Define a time window for repos not recently scanned. If not selected, all eligible repos are scanned. If selected, only repos not scanned within the last X days are scanned (based on the scan types selected in Action).

  [![Alt text](/img/migrated/Picture11-dab921d9.png)](/img/migrated/Picture11-dab921d9.png)

- **Add rule:** Click to add a new rule type (Source, Last Scan). Disabled when all rule types have been added.

  [![Alt text](/img/migrated/Screenshot-2025-11-14-141528-97f4ebca.png)](/img/migrated/Screenshot-2025-11-14-141528-97f4ebca.png)

**Step 4:** Select scan types (Action).

In the Action section, choose scan types: Code Analysis, Secret Scan, IaC Scan. At least one must be selected. By default, all three are selected.

[![Alt text](/img/migrated/Picture15-4a5f2bd8.png)](/img/migrated/Picture15-4a5f2bd8.png)

**Step 5:** Verify all required fields are filled in. Click **Create** to save the schedule.

[![Alt text](/img/migrated/Picture13-d4757f19.png)](/img/migrated/Picture13-d4757f19.png)

On successful creation, the system returns to the schedule list and displays _"Created schedule successfully"_.
