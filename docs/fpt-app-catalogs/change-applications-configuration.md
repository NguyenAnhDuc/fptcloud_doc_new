---
id: "change-applications-configuration"
title: "Change Applications Configuration"
description: "From the application details page, you make changes to the configuration of applications by changing the value of **User"
sidebar_label: "Change Applications Configuration"
sidebar_position: 12
---

# Change Applications Configuration

From the application details page, you make changes to the configuration of applications by changing the value of **User Define Values** as follows:
**Step 1** : View the application's detail as per section 5.5.2.
**Step 2** : From the detail screen > click **Reconfig**
[![](/img/migrated/Picture25-1-da64c670.png)](/img/migrated/Picture25-1-da64c670.png)
**Step 3** : Change the value of **User Define Values** :
[![](/img/migrated/Picture27-1-2f7ff506.png)](/img/migrated/Picture27-1-2f7ff506.png)
**Step 4** : Click **Confirm** to apply the new config and view the deployment results of the config
[![](/img/migrated/Picture26-1-464bd36a.png)](/img/migrated/Picture26-1-464bd36a.png)
**Step 5** : View the configuration detail deployed to the cluster by running this command:

```
Copyhelm -n ||NAMESPACE|| get values ||CHART-NAME||
```

[![](/img/migrated/Picture28-1-e0ab09a2.png)](/img/migrated/Picture28-1-e0ab09a2.png)

```
Copykubectl -n ||NAMESPACE|| get pods
```

[![](/img/migrated/Picture29-1-431076fb.png)](/img/migrated/Picture29-1-431076fb.png)
The number of replicas changes according to the number that has been configured.