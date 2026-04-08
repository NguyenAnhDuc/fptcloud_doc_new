---
id: "tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao"
title: "Tutorials Tra Cuu Thong Tin Thong So Ky Thuat Cua May Ao Da Tao"
sidebar_label: "仮想マシン情報の照会"
sidebar_position: 7
---

作成済み仮想マシンの技術仕様の照会


**ステップ1**: メニューから**Instance Management**を選択し、特定の仮想マシンをクリックします。

![Userguide FPT Cloud Server 2022 36](images/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao/img-001.png)

**ステップ2**: 仮想マシンの詳細情報を確認します。情報には**ホスト名**、構成（**RAM**、**CPU**、**Storage**）、**オペレーティングシステム**、**プライベートIP**アドレス、**パブリックIP**アドレス（ある場合）、動作ステータス（オフ/オン/サスペンド）が含まれます。

![Userguide FPT Cloud Server 2022 37](images/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao/img-002.png)

さらに、**Instance details**ページでは、次のサブメニューを通じて他の詳細情報を設定・確認できます：

  * **Allocate floating IP**：仮想マシンにPublic IPを割り当てて、インターネットへのアクセスを有効にします。
  * **Instance Monitoring**：仮想マシンのCPU使用率、RAM使用率、ディスクの読み取り/書き込み速度を時間/日/週単位で監視します。
  * **Instance storage**：**仮想マシン**に接続されている**ローカルストレージ**ディスクと外付け**ストレージディスク**を監視・管理します。
  * **Activity Log**：この仮想マシンに対するすべてのユーザーの操作履歴を追跡・監査します。


![Userguide FPT Cloud Server 2022 38](images/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao/img-003.png)

## 1\. アクティビティログの確認
**Activity Log**は仮想マシンの完全な操作履歴を表示します。表示される情報には、操作を実行したユーザー名、操作名、タイムスタンプが含まれます。

**ステップ1**: **Instance Management**ダッシュボードで仮想マシン名をクリックして、**Instance details**ページにアクセスします。

![Userguide FPT Cloud Server 2022 36](images/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao/img-004.png)

**ステップ2:** **Activity log**タブを選択します。

![Userguide FPT Cloud Server 2022 39](images/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao/img-005.png)

## 2\. インスタンスモニターへのアクセス
**Monitor**は仮想マシンの主要なステータスと技術パラメーターを表示します。

**ステップ1**: **Instance Management**ダッシュボードで仮想マシン名をクリックして、**Instance details**ページにアクセスします。

![Userguide FPT Cloud Server 2022 36](images/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao/img-006.png)

**ステップ2:** **Monitor**を選択します。ここでは**Instance vCPU Usage**、**Instance vCPU Contention**などのインスタンスのすべてのパラメーターのリアルタイムデータが表示されます。

![Userguide FPT Cloud Server 2022 40](images/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao/img-007.png)
