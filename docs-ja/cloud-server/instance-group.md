---
id: "instance-group"
title: "Instance Group"
sidebar_label: "Instance Group — Affinity & Anti-Affinity"
sidebar_position: 76
---

Affinity & Anti-Affinity ポリシーによる Instance Group の管理


  * Affinity（アフィニティ）と Anti-Affinity（アンチアフィニティ）は、仮想マシンを物理ホストに配置する際の重要な概念です。現在、システムは Soft Affinity / Anti-Affinity Instance Group のみをサポートしています。

    * **Soft Affinity**: アフィニティ Instance Group 内のすべての仮想マシンを同じホストに配置します。システム全体のパフォーマンス向上を目的として使用されることが多いです。

    * **Soft Anti-Affinity**: アンチアフィニティ Instance Group 内の仮想マシンをそれぞれ異なるホストに配置します。収容可能なホストがなくなった場合、Instance はランダムな場所に配置されます。

  * これを実現するために、ユーザーは Affinity または Anti-Affinity ポリシーを持つ Instance Group を作成できます。仮想マシンを起動する際に、Instance Group の情報をヒントとして渡すことで、希望するポリシーに従って仮想マシンを配置できます。
