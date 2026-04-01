---
id: "bucket-config"
title: "bucket の設定"
description: "FPT Object Storage での versioning、Static Website Hosting、Lifecycle、CORS の設定手順です。"
sidebar_label: "bucket の設定"
sidebar_position: 7
---

# bucket の設定

## Versioning

**Versioning** は **FPT Object Storage** の機能で、object の複数バージョンを保存・管理します。この機能が有効になると、object を更新または削除するたびに新しいバージョンが作成・保存されます。必要に応じて以前のバージョンに復元できます。

bucket の Versioning を有効にするには:

1. 設定する bucket の **Action** で **Config** を選択します。
2. **Versioning** タブを開きます。
3. **Enable** を選択して Versioning を有効にするか、**Disable** を選択して無効にし、**Save** をクリックして変更を保存します。

## Static Website Hosting

**Static Website Hosting** は、静的ウェブサイトのすべてのリソースを FPT Object Storage に保存できる機能です。通常のファイル保存だけでなく、HTML・CSS・JavaScript ファイルやその他の静的リソースを bucket に保存してウェブサイトとして公開できます。Static Website Hosting を有効にすると、FPT Object Storage がパブリック URL を提供します。

**Static Website Hosting** を設定するには:

1. ウェブサイトのソースコードをすべて FPT Object Storage の bucket にアップロードします。
2. 設定する bucket の **Action** で **Config** を選択します。
3. **Static Website Hosting** タブを開きます。
4. **Enable Website Hosting** を選択し、必要なパラメーターを入力します。
   - **Index Document:** ウェブサイトのトップページ名（例: `index.html`）。
   - **Error Document:** エラーページ（404）の名前。無効な URL をリクエストした場合に表示されます（例: `404.html`）。
5. Endpoints セクションに表示された URL でウェブサイトにアクセスします。

## Lifecycle Configurations

Lifecycle Configurations は FPT Object Storage の機能で、bucket 内の object のライフサイクルを自動管理できます。一定期間後に object を自動削除することで、ストレージコストの削減とデータ管理の効率化に役立ちます。

通常の **Lifecycle Rule** は以下のコンポーネントで構成されます。

- **Scope（スコープ）:** ルールを適用する object を定義します。bucket 全体に適用するか、プレフィックス（prefix）を指定して特定のグループに適用できます。
- **Delete current versions of objects:** スコープ内の object の現在のバージョンが削除されるタイミングを定義します。Versioning を使用しない場合、現在のバージョンの削除は object の永久削除に相当します。
- **Permanently delete noncurrent versions of objects:** スコープ内の object の非現在バージョンが削除されるタイミングを定義します。非現在バージョンは Versioning 使用時のみ作成されます。
- **Delete incomplete multipart uploads:** 未完了のマルチパートアップロードを削除するタイミングを定義します。不完全なアップロードをクリーンアップしてストレージ容量を解放します。
- **Delete expired object delete markers:** 有効期限切れの delete marker（バージョンが存在しないもの）を削除します。不要なマーカーを排除して bucket を整理します。

**Lifecycle Rule** は毎日 GMT 0 時（ベトナム時間 7:00）に bucket 内のすべての object をスキャンして自動実行されます。

### A. 新しい Lifecycle Rule の作成

1. **Object Storage Management** 管理パネルで Lifecycle Rule を設定する bucket の **Config** を選択します。
2. **Lifecycle Configurations** タブを開き、**Create Rule** を選択します。
3. **Lifecycle Rule** の情報を対応するフィールドに入力します。
   - **Rule Name:** 識別・管理しやすいルール名。
   - **Rule Scope:** ルールを適用する object のスコープ。bucket 全体（**Full**）を選択するか、プレフィックス（**Prefix**）を指定して特定のグループに適用できます。
   - **Delete current versions of objects:** object の現在のバージョンを削除する日数を選択します。
   - **Permanently delete noncurrent versions of objects:** object の非現在バージョンを削除する日数を選択します。
   - **Delete incomplete multipart uploads:** 未完了のマルチパートアップロードを削除する日数を選択します。
   - **Delete expired object delete markers:** 有効期限切れの delete marker を削除する日数を選択します。
4. **Save** をクリックして保存します。

### B. Lifecycle Rule の更新

1. 更新する **Lifecycle Rule** で **Edit** を選択します。
2. 対応するフィールドに更新情報を入力します。
3. 情報の入力が完了したら、変更を適用するために保存します。

### C. Lifecycle Rule の削除

1. 削除する **Lifecycle Rule** で **Delete** を選択します。
2. 警告ダイアログが表示され、ルール名と操作の確認を求めます。**Delete** を選択してルールを削除します。

## Bucket CORS の設定

**CORS（Cross-Origin Resource Sharing）** は、異なるオリジンのウェブサイトやアプリケーションが安全にデータを操作・共有できるようにします。

デフォルトでは、**FPT Object Storage** は異なるオリジンからの bucket へのすべてのリクエストをブロックします。**Bucket CORS** 機能により、特定のオリジンのウェブサイトが **Same-Origin Policy（SOP）** によるブロックなしに bucket のリソースをリクエストできるようになります。

bucket のデータを **GET** できるオリジン（ウェブサイトまたはサーバー）を許可するには、**Bucket CORS Config** で設定する必要があります。

### A. 新しい Bucket CORS Rule の作成

1. **Object Storage Management** 管理パネルで CORS を設定する bucket の **Config** を選択します。
2. **Bucket CORS** タブを開き、**Create Rule** を選択します。
3. **CORS Rule** の情報を対応するフィールドに入力します。
   - **Rule Name:** ルール名（例: `AllowAllOrigins`）。
   - **Allowed Origins:** CORS リクエストを許可するオリジン（ウェブサイトまたはサーバー）の一覧を入力します。すべてのオリジンを許可するには `*` を使用します。
   - **Allowed Methods:** オリジンに許可する HTTP メソッドを 1 つ以上選択します（例: `GET`、`POST`、`PUT`）。
   - **Max Age Seconds:** CORS ポリシーのキャッシュ時間を秒単位で入力します（例: `3600` で 1 時間キャッシュ）。
   - **Advanced Settings:**
     - **Expose Headers:** アプリケーションからアクセスできるレスポンスヘッダーを入力します（例: `x-amz-request-id`）。
     - **Allowed Headers:** `Access-Control-Request-Headers` で指定されるヘッダーを入力します（例: `Content-Type`、`Authorization`）。
4. すべての情報を入力したら、**Save** をクリックして新しい CORS 設定を bucket に適用します。

### B. Bucket CORS Rule の更新

1. 更新する **Bucket CORS Rule** で **Edit** を選択します。
2. **CORS Rule** の更新情報を対応するフィールドに入力します。
3. 変更を行った後、**Save** をクリックして CORS Rule の更新を適用します。

### C. Bucket CORS Rule の削除

1. 削除する **Bucket CORS Rule** で **Delete** を選択します。
2. 警告ダイアログが表示され、ルール名と操作の確認を求めます。**Delete** を選択してルールを削除します。

削除が確認されると、ルールは削除され、そのルールに関連する CORS リクエストは適用されなくなります。
