---
id: "network-all"
title: "Network All"
sidebar_label: "ネットワーク概要"
sidebar_position: 66
---

Networking


### ネットワーク概要
FPT Smart Cloud（FCI）のネットワークシステムは、企業向けの包括的なソリューションを提供し、クラウドネットワークインフラの柔軟かつ安全な構築・管理を可能にします。Virtual Private Cloud（VPC）を基盤として、このシステムは内部リソースの接続、Subnetによるネットワーク分割、およびFloating IPを通じた外部アクセスをサポートします。Security Groupなどのセキュリティツールがリソースの制御と保護を提供し、Identity & Access Management（IAM）がユーザーの適切な権限管理を保証します。VPN Site-to-Siteによってオンプレミスネットワークとクラウド間の安全な接続が維持され、Load Balancerがトラフィックを効率的に分散させ、企業のサービスおよびアプリケーションの高いパフォーマンスを確保します。

現在のFCIアーキテクチャは、従来のネットワークシステムから仮想プライベートネットワークの構築、さらにはNo-gatewayのような特定モデルまで、多様な要件に対応するよう設計されています。

_No-gatewayモデルでは、お客様は独自のシステムを構築し、Check-pointファイアウォールなどのルーターとして機能するサーバーを通じて管理することができます。この構成では、IPがサーバーに直接割り当てられ、すべてのトラフィックはFCIが提供するゲートウェイを経由せずにCheck-pointを通じてルーティングされます。_
