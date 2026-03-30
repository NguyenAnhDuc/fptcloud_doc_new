---
id: "deploy-app-catalogs-to-cluster"
title: "Deploy App Catalogs To Cluster"
description: "After searching for the desired chart, to deploy the app to the K8s cluster, follow these steps:"
sidebar_label: "Deploy App Catalogs To..."
sidebar_position: 8
pagination_next: null
---

# Deploy App Catalogs To Cluster

After searching for the desired chart, to deploy the app to the K8s cluster, follow these steps:
**Step 1** : Click **Deploy** to start deploying the app catalog
[![](/img/migrated/Picture13-1-c7b08d31.png)](/img/migrated/Picture13-1-c7b08d31.png)
**Step 2** : Enter the required information to deploy the app:
  * **Release name** : The name used to deploy the chart
_**Note** : The release name must be unique for each chart in each namespace._
  * **Versions** : The version of the chart used to deploy
_**Note** : You need to check the compatibility of the app version and the Kubernetes version_
  * **Clusters** : Select the cluster from the Management Clusters list
  * **Namespace** : Enter the K8s namespace to deploy the app. If the namespace does not exist on the Kubernetes cluster, the namespace will be created automatically during the chart installation process.
  * **User Defined Values** : Enter the values you need to change during the deployment process. If this value is blank, the app will be installed with the default values

[![](/img/migrated/Picture14-1-42e55883.png)](/img/migrated/Picture14-1-42e55883.png)
**Step 3** : Click **Install App** to proceed deploying the chart.
After the chart is deployed, it can be managed in the **Deployed Apps** section.
[![](/img/migrated/Picture19-1-fa364f8b.png)](/img/migrated/Picture19-1-fa364f8b.png)
[![](/img/migrated/Picture15-1-0f840ff4.png)](/img/migrated/Picture15-1-0f840ff4.png)
**Step 4** : View the deployed app in the cluster
  * To view the deployed chart in the namespace, run this command:

[![](/img/migrated/Picture16-1-038b9b9f.png)](/img/migrated/Picture16-1-038b9b9f.png)

```
Copyhelm -n ||NAMESPACE|| list
```

  * To view the user values that was used to deploy, run this command:

```
Copyhelm -n ||NAMESPACE|| get values cert-manager
```

[![](/img/migrated/Picture17-1-39cc0cef.png)](/img/migrated/Picture17-1-39cc0cef.png)
  * To view the status of the pods and services that have been deployed, run this command:

```
Copyhelm -n ||NAMESPACE|| get all
```

[![](/img/migrated/Picture18-1-1a158bc4.png)](/img/migrated/Picture18-1-1a158bc4.png)