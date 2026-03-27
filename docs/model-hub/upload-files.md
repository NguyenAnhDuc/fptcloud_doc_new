---
id: "upload-files"
title: "Upload Files"
description: "Choose your model version"
sidebar_label: "Upload Files"
sidebar_position: 22
---

# Upload Files

Choose your model version
**Step 1: Install the SDK CLI**

```
Copypip install https://s3-han02.fptcloud.com/aifactory-public/SDK/model_space-0.3.3-py3-none-any.whl
```

**Step 2: Set up environment variables**

```
Copyexport FPT_SPACE_URL=https://ai-api.fptcloud.com/
export FPT_TENANT_ID=
export FPT_SPACE_TOKEN=
```

**_Note_ :**
_Please visit<https://ai.fptcloud.com/{{tenant_name}}/user-token> to generate your access token and paste it after FPT_SPACE_TOKEN= above_
_To use the SDK through a proxy (e.g., internal environments), make sure to configure**one of** the proxy environment variables (HTTP_PROXY or HTTPS_PROXY) in addition to the variables above._

```
Copyexport HTTP_PROXY=
export HTTPS_PROXY=
```

**Step 3: Upload model version**

```
model_space model upload --model-id {{model_id}} --version-id {{version_id}}  --path 
```

**Optional parameters**
  * -include:

Include only files that match the given regex patterns. Commas should separate multiple patterns ,.
  * -exclude:

Exclude files that match the given regex patterns. You can also use commas , to separate multiple patterns.