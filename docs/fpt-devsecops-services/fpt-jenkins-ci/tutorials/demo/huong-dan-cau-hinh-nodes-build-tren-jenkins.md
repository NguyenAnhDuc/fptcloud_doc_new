---
id: "huong-dan-cau-hinh-nodes-build-tren-jenkins"
title: "Configure build nodes on Jenkins"
sidebar_label: "Configure build nodes on Jenkins"
sidebar_position: 4
---

# Configure build nodes on Jenkins

The FPT Cloud Portal currently only supports creating Cloud-type Jenkins agents. To add a self-managed agent (Node type), follow the steps below.

### Add a Node agent

**Step 1:** Prepare a VM to act as a Jenkins agent.

A Jenkins agent can run on the following operating systems: Windows, Linux (Ubuntu, CentOS, etc.).

Install Java on the VM to connect to Jenkins:

**For Linux (Ubuntu):**

```bash
sudo apt update
sudo apt install openjdk-11-jdk
```

Verify the installed Java version:

```bash
java -version
```

[![](/img/migrated/Picture118-27136265.png)](/img/migrated/Picture118-27136265.png)

**For Windows:** Download the appropriate Java version from [https://www.oracle.com/java/technologies/downloads/](https://www.oracle.com/java/technologies/downloads/), install it, configure `JAVA_PATH` in the environment variables, and verify the version.

[![](/img/migrated/Picture119-e4468e48.png)](/img/migrated/Picture119-e4468e48.png)

**Step 2:** Log in to the Jenkins instance using the username and password from the Portal.

[![](/img/migrated/Picture119-e4468e48.png)](/img/migrated/Picture119-e4468e48.png)

**Step 3:** Create a new Node as follows.

[![](/img/migrated/Picture120-0c00ad8a.png)](/img/migrated/Picture120-0c00ad8a.png)

[![](/img/migrated/Picture121-8e302013.png)](/img/migrated/Picture121-8e302013.png)

Continue configuring the node details:

[![](/img/migrated/Picture122-83cc3c7d.png)](/img/migrated/Picture122-83cc3c7d.png)

**Step 4:** After creating the node, retrieve the connection information.

[![](/img/migrated/Picture123-fbb1d582.png)](/img/migrated/Picture123-fbb1d582.png)

Agent connection details:

[![](/img/migrated/Picture124-91fc45b1.png)](/img/migrated/Picture124-91fc45b1.png)

**Step 5:** Modify the connection command.

FPT Cloud uses WebSocket to connect Jenkins agents. Add the **`-webSocket`** option to the connection command:

**Example:**
```bash
curl -sO https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/jnlpJars/agent.jar
java -jar agent.jar -url https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/ \
  -secret secretData -name "Jenkins VM customize" -webSocket -workDir "/root/jenkins-home"
```

**Step 6:** Verify the connection.

Agent connection logs:

[![](/img/migrated/Picture125-504e5577.png)](/img/migrated/Picture125-504e5577.png)

Result in Jenkins after connecting, and a job run using the agent:

[![](/img/migrated/Picture126-5f697d59.png)](/img/migrated/Picture126-5f697d59.png)
