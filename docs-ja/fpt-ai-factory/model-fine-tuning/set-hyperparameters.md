---
id: "set-hyperparameters"
title: "Set Hyperparameters"
description: "* すべてのトレーナー向け(事前学習、SFT、DPO)"
sidebar_label: "Set Hyperparameters"
sidebar_position: 19
---

# Set Hyperparameters

* すべてのトレーナー向け(事前学習、SFT、DPO) 

  
| **パラメーター**  | **説明**  | **種類**  | **対応値**  | **既定値**  |  
| --- | --- | --- | --- | --- |  
| learning_rate  | トレーニングの学習率  | float  | [0.00001-0.001]  | 0.00001  |  
| batch_size  | トレーニングのバッチ サイズ。分散トレーニングの場合、これは各デバイスのバッチサイズ  | int  | _更新_  | 1  |  
| epochs  | トレーニングエポックの数  | int  | _更新_  | 1  |  
| gradient_accumulation_steps  | 逆方向/更新パスを実行する前に、勾配を蓄積する更新ステップの数  | int  | _更新_  | 4  |  
| checkpoint_steps  | 2 つのチェックポイントが保存される前のトレーニング ステップの数 save_strategy="steps"の場合。  | int  | _更新_  | 1000  |  
| max_sequence_length  | 最大入力長、より長いシーケンスはこの値にカットオフされる  | int  | _更新_  | 2048  |  
| finetuning_type  | 使用するパラメータモード  | enum[string]  | lora/full  | lora  |  
| distributed_backend  | 分散トレーニングに使用するバックエンド。デフォルトは ddp  | enum[string]  | ddp/deepseed  | DDP  |  
| deepspeed_zero_stage  | DeepSpeed ZeROアルゴリズムを適用するステージ。distributed_backend=deepspeedの場合にのみ適用  | enum[int]  | 1/2/3  | 1  |  
| lr_scheduler_type  | 使用する学習率スケジューラ  | enum[int]  | 線形/コサイン/定数  | リニア  |  
| lr_warmup_steps  | 0 から learning_rate までの線形ウォームアップに使用されるステップ数  | int  | _更新_  | 0  |  
| disable_gradient_checkpointing  | グラデーションチェックポイントを無効にするかどうか  | bool  | true/false  | false  |  
| eval_strategy  | トレーニング中に採用する評価戦略。  | enum[string]  | no/epoch/steps  | epoch  |  
| eval_steps  | 2 つの評価間の更新ステップ数 (eval_strategy="steps"の場合)。設定されていない場合は、デフォルトでlogging_stepsと同じ値になります。整数または範囲 [0,1] の浮動小数点数である必要があります。1 より小さい場合は、トレーニング ステップの合計の比率として解釈されます。eval_strategy=stepsの場合にのみ適用  | int  | _更新_  | 1000  |  
| mixed_precision  | 使用する混合精度のタイプ  | enum[string]  | BF16/FP16/なし  | BF16  |  
| オプティマイザ  | トレーニングに使用するオプティマイザー  | enum[string]  | adamw/sgd  | adamw  |  
| lora_alpha  | LoRAのアルファパラメータ  | int  | _更新_  | 32  |  
| lora_dropout  | LoRAのドロップアウト率  | float  | _更新_  | 0.05  |  
| lora_rank  | LoRA行列のランク  | int  | _更新_  | 16  |  
| quantization_bit  | オンザフライ量子化を使用してモデルを量子化するビット数。現在、finetuning_type=LoRA(QLoRAと呼ばれる)の場合にのみ適用  | enum[string]  | int4/int8/なし  | none  |  
| flash_attention_v2  | フラッシュアテンションバージョン2を使用するかどうか  | bool  | false  | false  |  
| logging_steps  | stdout ログと MLflow データ ポイントを含むイベントのログ記録間のステップ数。logging_steps=-1 は、すべてのステップでログを記録することを意味します。  | int  | _更新_  | 10  |  
| checkpoint_strategy  | トレーニング中に採用するチェックポイント保存戦略。「最善」は、eval_strategyが「いいえ」でない場合にのみ適用されます。  | enum[string]  | no/epoch/steps  | epoch  |  
| max_grad_norm  | グラデーションクリッピングの最大ノルム  | float  | _更新_  | 1  |  
| number_of_checkpoints  | 値が渡された場合、チェックポイントの合計量を制限します  | int  | _更新_  | 5  |  
| 種  | 再現性のためのランダムシード  | int  | _更新_  | 1309  |  
| full_determinism  | 分散トレーニングで再現性のある結果を確保します。重要: これはパフォーマンスに悪影響を与えるため、デバッグにのみ使用してください。True の場合、シードの設定は有効になりません。  | bool  | true/false  | false  |  
| weight_decay  | オプティマイザーに適用する重み減衰  | float  | _更新_  | 0  |  
| target_modules  | 量子化または微調整のためのターゲットモジュール  | string  | _更新_  | linear  |  
  * トレーナー = DPOの場合は、標準設定の上にいくつかの追加パラメータを含めるようにしてください 

  
| **パラメーター**  | **説明**  | **種類**  | **対応値**  | **既定値**  |  
| --- | --- | --- | --- | --- |  
| pref_beta  | プリファレンスロスのベータパラメータ  | float  | [0,1]  | 0.1  |  
| pref_loss  | 使用する DPO 損失の種類  | enum[string]  | sigmoid/hinge/ipo/kto_pair/orpo/simpo  | sigmoid  |  
| pref_ftx  | DPOトレーニングにおける監視された微調整損失係数  | float  | _更新_  | 0  |  
| dpo_label_smoothing  | cDPOの堅牢なDPOラベル平滑化パラメータは、0から0.5の間である必要があります  | float  | _更新_  | 0  |  
| simpo_gamma  | SimPO損失の目標報酬マージン期間。pref_loss = "simpo" の場合にのみ使用されます  | float  | _更新_  | 0.5  |
