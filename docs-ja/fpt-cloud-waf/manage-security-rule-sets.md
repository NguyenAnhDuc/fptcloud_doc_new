---
id: "manage-security-rule-sets"
title: "Security rule setの管理"
description: "WAF Dashboardでカスタムsecurity rule setを作成・管理する方法。"
sidebar_label: "Security rule setの管理"
sidebar_position: 22
---

# Security rule setの管理

**FPT Cloud WAF** のデフォルトrule setに加えて、保護するエンドポイントの特性に合わせたカスタムrule setを作成できます。

## Security rule setの作成

1. メニューから **Security Rule Sets** を選択して管理画面を開き、**Create Security Rule Set** をクリックします。

   [![Security rule set管理画面](/img/migrated/Userguide-FPT-WAF-2022-42-1024x578-3ae15c86.png)](/img/migrated/Userguide-FPT-WAF-2022-42-1024x578-3ae15c86.png)

2. 必要な情報を入力します。

   - **Name**: 新しいrule setの名前。
   - **Description**（任意）: 説明。
   - **Replicated From**: クローンして編集するrule setを選択します。

   [![Rule set情報の入力](/img/migrated/Userguide-FPT-WAF-2022-43-1024x578-ee9a0838.png)](/img/migrated/Userguide-FPT-WAF-2022-43-1024x578-ee9a0838.png)

3. **Create Security Rule Set** をクリックして保存します。

   [![Security rule set詳細（作成後）](/img/migrated/Userguide-FPT-WAF-2022-44-1024x578-9ec97a49.png)](/img/migrated/Userguide-FPT-WAF-2022-44-1024x578-9ec97a49.png)

## カスタムruleの追加

Rule set作成後、必要に応じてカスタムruleを追加できます。

1. **Rule Sets Detail** 画面で **Create Rule** をクリックします。

   [![新しいruleの追加](/img/migrated/Userguide-FPT-WAF-2022-45-1024x578-d2293080.png)](/img/migrated/Userguide-FPT-WAF-2022-45-1024x578-d2293080.png)

2. Ruleの情報を入力します。

   - **File**: Ruleの名前。
   - **Rule ID**: RuleのID（5,000,000〜5,999,999の範囲）。
   - **Status**: 動作状態（Enabled/Disabled）。
   - **Content**: Ruleの内容。
   - **Description**: Ruleの説明。

   [![Rule情報の入力](/img/migrated/Userguide-FPT-WAF-2022-46-1024x578-74173036.png)](/img/migrated/Userguide-FPT-WAF-2022-46-1024x578-74173036.png)

3. **Create Rule** をクリックして新しいruleを作成します。

   [![Rule一覧（作成後）](/img/migrated/Userguide-FPT-WAF-2022-47-1024x578-af74e7d2.png)](/img/migrated/Userguide-FPT-WAF-2022-47-1024x578-af74e7d2.png)
