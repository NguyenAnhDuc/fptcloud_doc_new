---
id: "get-started-jp"
title: "AI Notebookについて"
description: "FPT AI Factory上で動作するJupyterベースの開発環境、AI Notebookの概要。"
sidebar_label: "AI Notebookについて"
sidebar_position: 3
---

# AI Notebookについて

## AI Notebookとは？

AI NotebookはFPTのAI Factoryインフラストラクチャ上で動作するJupyterベースの開発環境です。ワンクリックで、GPU/CPUリソースと永続ストレージを備えた事前設定済みのノートブックサーバーを起動できます。

## 仕組み

各AI Notebookは、FPTのGPU/CPUインフラストラクチャに接続された分離されたコンテナ化環境で実行されます。ブラウザ内でコードを記述、実行、可視化するメインインターフェースとしてJupyterLabが使用されます。

## なぜAI Notebookなのか？

1. **ワンクリックデプロイ:** 手動設定なしで即使用可能な環境を起動。
2. **GPU加速:** 計算負荷の高いトレーニングと推論にNVIDIA H100（80GB VRAM）を活用。
3. **永続ワークスペース:** データセット、モデル、実験結果を保存し、セッションをまたいで利用可能。
4. **細分化された課金:** リソースは実際の使用量（CPU、GPU、ストレージ）に基づいて課金されます。
