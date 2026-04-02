---
id: "huong-dan-cau-hinh-nodes-build-tren-jenkins"
title: "Jenkins ビルドノードの設定"
sidebar_label: "Jenkins ビルドノードの設定"
sidebar_position: 24
---

# Jenkins ビルドノードの設定

FPT Cloud Portal では現在、Cloud 種別の Jenkins エージェントのみ作成できます。自己管理型エージェント（Node 種別）を追加するには、以下の手順に従ってください。

### Node エージェントの追加

**ステップ 1:** Jenkins エージェントとして使用する VM を準備します。

Jenkins エージェントは以下の OS で動作できます：Windows、Linux（Ubuntu、CentOS など）。

Jenkins に接続するために VM に Java をインストールします：

**Linux（Ubuntu）の場合：**

```bash
sudo apt update
sudo apt install openjdk-11-jdk
```

インストールされた Java バージョンを確認します：

```bash
java -version
```

[![](/img/migrated/Picture118-27136265.png)](/img/migrated/Picture118-27136265.png)

**Windows の場合：** [https://www.oracle.com/java/technologies/downloads/](https://www.oracle.com/java/technologies/downloads/) から適切な Java バージョンをダウンロードし、インストール後に環境変数で `JAVA_PATH` を設定してバージョンを確認します。

[![](/img/migrated/Picture119-e4468e48.png)](/img/migrated/Picture119-e4468e48.png)

**ステップ 2:** Portal のユーザー名とパスワードを使用して Jenkins インスタンスにログインします。

[![](/img/migrated/Picture119-e4468e48.png)](/img/migrated/Picture119-e4468e48.png)

**ステップ 3:** 新しいノードを以下のように作成します。

[![](/img/migrated/Picture120-0c00ad8a.png)](/img/migrated/Picture120-0c00ad8a.png)

[![](/img/migrated/Picture121-8e302013.png)](/img/migrated/Picture121-8e302013.png)

ノードの詳細設定を続けます：

[![](/img/migrated/Picture122-83cc3c7d.png)](/img/migrated/Picture122-83cc3c7d.png)

**ステップ 4:** ノード作成後、接続情報を取得します。

[![](/img/migrated/Picture123-fbb1d582.png)](/img/migrated/Picture123-fbb1d582.png)

エージェント接続情報：

[![](/img/migrated/Picture124-91fc45b1.png)](/img/migrated/Picture124-91fc45b1.png)

**ステップ 5:** 接続コマンドを修正します。

FPT Cloud は WebSocket を使用して Jenkins エージェントを接続します。接続コマンドに **`-webSocket`** オプションを追加してください：

**例：**
```bash
curl -sO https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/jnlpJars/agent.jar
java -jar agent.jar -url https://jenkins-test.cd.fke.fptcloud.com/685z9vmh/ \
  -secret secretData -name "Jenkins VM customize" -webSocket -workDir "/root/jenkins-home"
```

**ステップ 6:** 接続結果を確認します。

エージェント接続ログ：

[![](/img/migrated/Picture125-504e5577.png)](/img/migrated/Picture125-504e5577.png)

Jenkins での接続結果、およびエージェントを使用したジョブ実行結果：

[![](/img/migrated/Picture126-5f697d59.png)](/img/migrated/Picture126-5f697d59.png)
