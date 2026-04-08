---
id: "dfke-faqs"
title: "よくある質問（FAQ）"
description: "Dedicated FPT Kubernetes Engineサービスに関するよくある質問。"
sidebar_label: "よくある質問（FAQ）"
sidebar_position: "30"
---

# よくある質問（FAQ）

**D-FKEはどのregionをサポートしていますか？**
現在FPT CloudはHAN（Hanoi）とSGN（Saigon/HCM）の2つのRegionをサポートしています。D-FKEは両方のRegionで利用可能です。

**D-FKE clusterは複数のregionにまたがることができますか？**
D-FKEは1つのclusterを複数のregionにまたがって実行することをサポートしていません。BC&DRを実施するために、同じアプリケーションに対して各regionにclusterを作成することができます。

**D-FKEは1つのcluster内で複数のVM構成をサポートしていますか？**
D-FKEは現在、1つのcluster内で複数のVM構成をサポートしていません。すべてのWorker nodeは同じ構成（CPU、RAM、Disk）を持ち、すべてのMaster nodeも同じ構成（CPU、RAM、Disk）を持ちます。利用中にnodeの構成を増やすことができます。

**D-FKEは1つのclusterで何台のWorker nodeをサポートしていますか？**
D-FKEはデフォルトでclusterあたり最大100台のWorker nodeに制限されています。必要に応じてWorker nodeの上限を増やすには、FPT Cloudにお問い合わせください。

**D-FKEは私の既存のKubernetesアプリケーションと互換性がありますか？**
D-FKEはネイティブKubernetesを使用しているため、AWS、Azure、GCP、DigitalOceanなど他のCloudのKubernetesプラットフォームや、お客様自身のインフラにインストールしたKubernetes clusterと完全に互換性があります。これにより、FPT Cloudとデータセンター、および他のCloud間でアプリケーションを簡単に移行できます。

**アプリケーションをcluster外に公開するにはどうすればよいですか？**
Service type Load Balancerを使用してアプリケーションをパブリックまたはプライベートに公開できます。詳細はService type Load Balancerガイドを参照してください。

**clusterのパフォーマンス監視とアラート設定はどのようにすればよいですか？**
FPT CloudはFMON製品を提供しており、Kubernetes clusterのパフォーマンス監視とアラート設定に役立ちます。また、FMONはFKEと簡単に連携できるloggingとtracingも提供しています。
