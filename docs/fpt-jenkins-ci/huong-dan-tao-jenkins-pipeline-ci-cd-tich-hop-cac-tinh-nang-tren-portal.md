---
id: "huong-dan-tao-jenkins-pipeline-ci-cd-tich-hop-cac-tinh-nang-tren-portal"
title: "Create a Jenkins CI/CD pipeline with Portal integrations"
sidebar_label: "Create a Jenkins CI/CD pipeline"
sidebar_position: 25
pagination_next: null
---

# Create a Jenkins CI/CD pipeline with Portal integrations

This guide walks you through creating a basic CI/CD flow as illustrated below.

[![](/img/migrated/Picture127-aecf39ae.png)](/img/migrated/Picture127-aecf39ae.png)

The CI/CD pipeline performs the following steps:

**Step 1:** Trigger event — a developer triggers the CI/CD pipeline with a **push commit** or **merge request** event.

**Step 2:** The source control management system sends a trigger message to the CI/CD system via webhook to start a build job on Jenkins.

**Step 3:** The CI/CD system using FPT Jenkins CI and FPT Cloud Agent performs: code scanning with SonarQube, unit tests, and image builds.

**Step 4:** If all tests pass and the image build succeeds, the image is pushed to FPT Container Registry (FCR) for storage.

**Step 5:** After the image is pushed to FCR, the system updates the new image tag in the config source code managed by FPT Argo CD.

**Step 6:** FPT Argo CD deploys the application to the dev/test/staging environment.

**Step 7:** After deployment, the CI/CD system runs automated tests on the staging environment.

**Step 8:** After the pipeline completes, the CI/CD system returns the build result to the developer.

The CI/CD system components are:

| # | System | Tool |
|---|--------|------|
| 1 | Source code management | GitLab |
| 2 | CI server | FPT Jenkins CI |
| 3 | CD | FPT ArgoCD |

### Setup steps

1. Log in to Jenkins using the username and password from the Portal.

2. On the FPT Cloud Portal, create the credentials needed in the pipeline:

   - A **Username with password** credential to authenticate with GitLab and Container Registry:

   [![](/img/migrated/Picture128-ceb629a5.png)](/img/migrated/Picture128-ceb629a5.png)

   [![](/img/migrated/Picture129-78a57dc5.png)](/img/migrated/Picture129-78a57dc5.png)

   - A **Secret Text** credential to authenticate with SonarQube:

   [![](/img/migrated/Picture130-62a27646.png)](/img/migrated/Picture130-62a27646.png)

3. Configure the SonarQube server for code scanning in the pipeline.

   [![](/img/migrated/Picture131-81a306f2.png)](/img/migrated/Picture131-81a306f2.png)

4. Configure email notifications on the FPT Cloud Portal for pipeline integration.

   [![](/img/migrated/Picture132-77753ca6.png)](/img/migrated/Picture132-77753ca6.png)

5. Create a **Pipeline** job to set up the CI/CD flow. Click **New Item** or **Create a job**:

   [![](/img/migrated/Picture133-102cb0ac.png)](/img/migrated/Picture133-102cb0ac.png)

   Enter the job details:

   [![](/img/migrated/Picture134-2b34d23c.png)](/img/migrated/Picture134-2b34d23c.png)

   Configure the pipeline job with a pipeline script. There are two options:

   **Option 1:** Enter the pipeline script directly in the Jenkins interface:

   [![](/img/migrated/Picture135-40b308ac.png)](/img/migrated/Picture135-40b308ac.png)

   **Option 2:** Use a Jenkinsfile from the source code repository:

   [![](/img/migrated/Picture136-4cae1695.png)](/img/migrated/Picture136-4cae1695.png)

   [![](/img/migrated/Picture137-0425bb84.png)](/img/migrated/Picture137-0425bb84.png)

   Pipeline running the job:

   [![](/img/migrated/Picture138-384988ca.png)](/img/migrated/Picture138-384988ca.png)
