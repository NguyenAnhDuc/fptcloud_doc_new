---
id: "mfke-faqs"
title: "よくある質問"
description: "Managed FPT Kubernetes Engine（M-FKE）に関するよくある質問と回答をまとめています。"
sidebar_label: "よくある質問"
sidebar_position: 4
---

# よくある質問

**1. M-FKE はどのリージョンで利用できますか？**

現在 FPTCloud は以下の 4 つのリージョンをサポートしています。
- HAN（ハノイ）
- SGN（サイゴン/ホーチミン）
- HAN2（ホアラック）
- JPN01（日本）

M-FKE はこれら 4 つのリージョンすべてで利用できます。

**2. 1 つの M-FKE クラスターを複数のリージョンにまたがって構成できますか？**

M-FKE は複数のリージョンにまたがるクラスターをサポートしていません。BC&DR のために、同じアプリケーションに対して各リージョンにクラスターを作成することができます。

**3. M-FKE は 1 つのクラスターで複数の VM 構成をサポートしていますか？**

M-FKE は worker group を使用することで、1 つのクラスターで複数の VM 構成をサポートしています。各 worker group は異なる構成を持つことができます。同じ worker group 内の Worker Node は同じ構成（CPU、RAM、DISK）を持ちます。

**4. M-FKE は 1 つのクラスターで何台の Worker Node をサポートしていますか？**

M-FKE はデフォルトで最大 100 Worker Node / Worker Group、および 100 Worker Group / Cluster に制限されています。Worker Node の制限を増やす必要がある場合は FPT Cloud にお問い合わせください。

**5. M-FKE は既存の Kubernetes アプリケーションと互換性がありますか？**

M-FKE はネイティブ Kubernetes を使用しているため、AWS、Azure、GCP、DO などの他のクラウドの Kubernetes プラットフォームや、ユーザーが自身のインフラストラクチャにインストールした Kubernetes クラスターと完全に互換性があります。これにより、FPT Cloud と自社 DC や他のクラウドの間でアプリケーションを簡単に移行できます。

**6. クラスター外にアプリケーションを公開するにはどうすればよいですか？**

クラスター外にアプリケーションを公開してユーザーが使用できるようにする方法はいくつかあります。最も簡単な方法の 1 つは、Service Type LoadBalancer を使用することです。詳細は[service-type-load-balancer](/ja/docs/fpt-container/managed-fpt-kubernetes-engine/tutorials/service-type-load-balancer)を参照してください。

**7. クラスターのパフォーマンスを監視してアラートを設定するにはどうすればよいですか？**

FPTCloud は FMON 製品を提供しており、Kubernetes クラスターのパフォーマンスを監視してアラートを設定できます。また、FMON は FKE と簡単に統合できる logging & tracing も提供しています。

**8. base worker group とは何ですか？base worker group を削除できますか？**

M-FKE クラスターには常に、kube-system namespace 内の coredns、cni-controller、metrics-server などのシステムコンポーネントを含む base worker group が存在します。base worker group はクラスターから削除できません。

**9. 現在の worker group の flavor や disk 構成を変更するにはどうすればよいですか？**

M-FKE は既存の worker group の flavor や disk サイズを直接変更することをサポートしていません。flavor や disk 構成を変更するには、希望する構成で新しい worker group を作成し、古い worker group から新しい worker group にアプリケーションを移行した後、使用しなくなった古い worker group を削除します。

**10. worker group 内の node の CPU・メモリリソースが逼迫しているのに、クラスターが新しい node をスケールアウトしないのはなぜですか？**

Cluster Autoscale（CA）は node の実際の使用リソースではなく、node に配置された pod のリソースリクエスト量（CPU と Memory）に基づいてスケールイン/アウトを行います。Cluster Autoscaler は、リソースリクエストを満たす node がないために pod が Pending 状態になった場合に新しい node をスケールアウトします。この時、CA が新しい node を追加し、以前 Pending だった pod がその新しい node に配置されます。

**11. worker group 内の node の CPU・メモリリソースがほとんど使用されていないのに、クラスターが worker node を削減しないのはなぜですか？**

Cluster Autoscale（CA）は node の実際の使用リソースではなく、node に配置された pod のリソースリクエスト量（CPU と Memory）に基づいてスケールイン/アウトを行います。Cluster Autoscaler は、利用率（リソースリクエスト / 割り当てリソース）が 30 分間 50% を超えない node を削減します。

**12. クラスターのアップグレードは完全に自動で 100% 成功しますか？サービスのダウンタイムが発生する可能性はありますか？**

M-FKE は worker node のローリングアップデートメカニズムによってクラスターをアップグレードします。新しい K8s バージョンの worker node が作成されてクラスターに参加します。その後、古い K8s バージョンの worker node の pod が新しい K8s バージョンの worker node に移行されます。ほとんどのクラスターアップグレードは自動的かつ成功裏に完了します。ただし、M-FKE が古い K8s バージョンの worker node の pod を自動的に evict できない場合（PDB に違反している pod など）に注意が必要です。クラスターのアップグレードでは、古い K8s バージョンの worker node の pod が削除されてから新しい K8s バージョンの worker node に新しい pod がデプロイされるまでの間にサービスのダウンタイムが発生する可能性があります。Persistent Volume を使用している pod の場合、古い pod が evict されて新しい pod が running 状態になるまでのプロセスが長引く可能性があります。そのため、システムの安定性を確保するためにアップグレードプロセスを積極的に監視する必要があります。

**13. base worker group に taint を設定できますか？**

base worker group はラベルの設定のみサポートしており、taint の設定はサポートしていません。base worker group に taint を設定すると、base worker group 内の worker node にシステム pod をデプロイするための toleration がなくなり、クラスターの動作に問題が発生するためです。MFKE では、システムの動作への影響を避けるために、アプリケーションを他の worker group にデプロイすることを推奨しています。
