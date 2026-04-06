---
id: "networking-overview"
title: "Networking Overview"
sidebar_label: "ネットワーキングの詳細"
sidebar_position: 67
---

ネットワーキングの概要


### ネットワーキングの概要
FPT Smart Cloud（FCI）のネットワークシステムは、企業向けの包括的なソリューションを提供し、クラウドネットワークインフラの柔軟かつ安全な構築・管理を可能にします。Virtual Private Cloud（VPC）を基盤として、このシステムは内部リソースの接続、Subnetによるネットワーク分割、そしてFloating IPを通じた外部アクセスをサポートしています。Security Groupなどのセキュリティツールはリソースの制御と保護に役立ち、Identity & Access Management（IAM）はユーザーの適切な権限を確保します。VPN Site-to-Siteによりオンプレミスネットワークとクラウド間の安全な接続が維持され、Load Balancerはトラフィックを効率的に分散して、企業のサービスとアプリケーションの高いパフォーマンスを保証します。

現在のFCIアーキテクチャは、従来のネットワークシステムから仮想プライベートネットワーク、さらにはNo-gatewayのような特殊なモデルまで、多様な要件に対応できるように設計されています。

_No-gatewayモデルでは、お客様がCheck-pointファイアウォールなどのルーターとして機能するサーバーを通じて管理する独自のシステムを構築できます。この構成では、IPはサーバーに直接割り当てられ、すべてのトラフィックはFCIが提供するゲートウェイを経由せずにCheck-pointを通じてルーティングされます。_
