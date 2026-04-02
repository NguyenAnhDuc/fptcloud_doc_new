---
id: "them-moi-mot-agent"
title: "Add a new agent"
sidebar_label: "Add a new agent"
sidebar_position: 7
---

# Add a new agent

**Step 1:** In the FPT Portal menu > **Jenkins CI** > **Detail Cluster** > **Agent Managements**.

[![](/img/migrated/Picture9-18241027.png)](/img/migrated/Picture9-18241027.png)

**Step 2:** Click **Add Agent** to enter the information for the new agent.

[![](/img/migrated/Picture10-003a6a70.png)](/img/migrated/Picture10-003a6a70.png)

- **Agent name:** Enter the agent name.
- **Resources:** Select the resources for the agent.
- **Descriptions:** Enter an optional description.

**Step 3:** Click **Add** to create the agent. The system creates the agent and displays the result on the Portal.

[![](/img/migrated/Picture11-47d0c513.png)](/img/migrated/Picture11-47d0c513.png)

Once created, the agent status changes to **Succeeded**.

[![](/img/migrated/Picture12-216368ab.png)](/img/migrated/Picture12-216368ab.png)

**Step 4:** Verify the agent was created in the Jenkins instance.

Log in to Jenkins > **Manage Jenkins** > **Cloud**.

[![](/img/migrated/Picture13-e6968122.png)](/img/migrated/Picture13-e6968122.png)

The Jenkins Agent created under Jenkins:

[![](/img/migrated/Picture14-c2b336f7.png)](/img/migrated/Picture14-c2b336f7.png)

You can view the detailed configuration of the agent:

[![](/img/migrated/Picture15-1ba3bbd5.png)](/img/migrated/Picture15-1ba3bbd5.png)

[![](/img/migrated/Picture16-c793efd3.png)](/img/migrated/Picture16-c793efd3.png)

:::note
When creating an agent, the system automatically creates labels for the agent and configures them with "Only build jobs with label expressions matching this node". Make sure to enter the correct labels in Jenkins jobs.

Additionally, during agent creation, the system automatically creates a secret for connecting to the Kubernetes cluster that manages the agent. If you delete this secret, the system will not be able to connect to the agent.
:::

[![](/img/migrated/Picture17-def5a338.png)](/img/migrated/Picture17-def5a338.png)
