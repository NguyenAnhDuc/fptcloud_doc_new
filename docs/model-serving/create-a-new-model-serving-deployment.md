---
id: "create-a-new-model-serving-deployment"
title: "Create A New Model Serving Deployment"
description: "**Step 1** : Select **AI Platform** → **Model Serving** → **Deployment** → **New Deployment.**"
sidebar_label: "Create A New Model..."
sidebar_position: 6
---

# Create A New Model Serving Deployment

**Step 1** : Select **AI Platform** → **Model Serving** → **Deployment** → **New Deployment.**
**Step 2** : Enter the Model Settings information, then click Next
  * **Model Information** : AI deployment information. Select Model Type:
    * Model included in Image: AI Model included in Container Image
    * Model not included in Image: AI Model not included in Container Image
    * NVIDIA NGC Catalog: AI Model using NVIDIA NGC technology
  * If Model Type is **Model included in Image** , select Model Source:
    * **Model Source** : Model selection source. Select Model Source:
      * **Model Catalog** : Centralized repository of public models, shared for users to use.
        * Model Name: Name of the model selected on the Model Catalog.
        * Model Version: Version of the model selected on the Model Catalog.
        * Model Token: Token authenticated with the Model Catalog for deployment _(Create token by: on the home page interface, select**Token** → **Create**)_
      * **Private Model** : Private repository of users, can be used internally within the organization.
        * Model Name: Name of the model selected on Private.
        * Model Version: Version of the model selected on Private Model.
        * Model Token: Token authenticated with Private Model to deploy (Create token by: on the home page interface, select **Token** → **Create**)
      * **Custom Model** : Custom model on the Internet, currently only supporting Hugging Face models.
        * Model URL: Path to the custom model
        * Model Token: User authentication token on the platform of the selected Custom Model (e.g., Hugging Face)

If you select Model Type as **Model included in Image** or **Model not Included in Image** , select Image Information:
  * **Image Information** : Container Image deployment information. Enter Image information: 
    * Image Source: Select Image type **Public** (no need to enter user/password) or Private (need to enter user/password)
    * Image Registry: Link to the container image storage location.
    * Image Tag: Container image version

[![Alt text](/img/migrated/model-included-in-image-or-model-not-inc-077c1a4d.png)](/img/migrated/model-included-in-image-or-model-not-inc-077c1a4d.png)
If Model Type is **NVIDIA NIM – NGC Catalog** , select deployment information:
  * **NIM Model** : Select the NIM Model to deploy. Refer to the [Support matrix](https://docs.nvidia.com/nim/large-language-models/latest/support-matrix.html) to select the correct Model compatible with the deployment infrastructure.
  * **NIM Helm Chart** : Select the appropriate Helm Chart to deploy the Model.
  * **NCG Personal Key** : The personal key to authenticate the user with NGC Catalog.  
_(Refer to the[NGC Catalog User Guide](https://docs.nvidia.com/ngc/gpu-cloud/ngc-catalog-user-guide/index.html#generating-personal-api-key) to generate the personal key.)_

[![Alt text](/img/migrated/Nim-1e0eaace.png)](/img/migrated/Nim-1e0eaace.png)
**Step 3:** Enter the Deployment Settings information, then click Next.
  * **Deployment Information:** Information about the Deployment 
    * Serving Name: The name of the deployment to be served.
    * Choose Cluster : Select the K8S cluster to serve from the list of K8S clusters in this VPC.
    * Instance Replica: The number of processing units in this deployment.
    * Resource Type: Information about resource configuration. There are two types of resources: 
      * Flavor: Pre-configured selection for CPU/RAM/DISK/GPU
      * Custom: Custom configuration for CPU/RAM/DISK/GPU according to needs.

[![](/img/migrated/6-7fbcb74f.png)](/img/migrated/6-7fbcb74f.png)
  * **_Advance Settings:_** Enter advanced configurations for Deployment. Click See More to configure.
    * **_Deployment Strategy_ :** Choose a deployment strategy for K8S. Available strategies include:
      * **_Recreate:_** Recreate instances when changes are made (downtime will occur)
      * **_Rolling:_** Gradually replace instances during updates (no downtime), but requires additional resources equivalent to one instance.
    * **_Startup Command:_** Configure the startup command for instances
      * **_Startup Command:_** The command executed when the instance starts
      * **_Arguments:_** Parameters passed to the startup command
    * **_Environment Variable:_** Define environment variables for the instance
      * **_Key:_** The name of the environment variable
      * **_Value:_** The value assigned to the environment variable
    * **_Nodes Selector:_** Select specific worker nodes/worker groups for deployment
      * **_Key:_** The label key assigned to the node
      * **_Value:_** The label value assigned to the node
    * **_Tags:_** Assign tags to the Deployment
      * **_Key:_** The label key assigned to the Deployment
      * **_Value:_** The label value assigned to the Deployment

[![](/img/migrated/7-2b6d1e21.png)](/img/migrated/7-2b6d1e21.png)
**Step 4** : Enter configuration details for **Traffic Settings** , then click 
  * **Traffic Information** : Configure settings for the Deployment's external connection 
    * **_Services Type_** : The type of service for the external connection 
      * Load Balancer: Use load balancing
      * Cluster IP: Use internal communication within the Kubernetes Cluster
      * Ingress: Use the Ingress application to manage connection flows
    * **_Traffic Type_** : Specify the connection type: public or private
    * **_Port:_** The external connection port

[![](/img/migrated/8-c8ac7bd7.png)](/img/migrated/8-c8ac7bd7.png)
**Step 5: Review the entered information and click Confirm to create the Deployment cluster**
[![Alt text](/img/migrated/9-81fe7bb0.png)](/img/migrated/9-81fe7bb0.png)