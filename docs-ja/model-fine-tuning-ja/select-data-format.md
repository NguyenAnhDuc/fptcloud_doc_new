---
id: "select-data-format"
title: "Select Data Format"
description: "**1. データとは何ですか?**"
sidebar_label: "Select Data Format"
sidebar_position: 9
---

# Select Data Format

**1. データとは何ですか?**
微調整プロセスでは、データは、**事前学習済みの AI モデル** の再トレーニングに使用される**、キュレーションされた一連のサンプル入力とアウトプット** となります。このデータは、特定の**ドメイン、タスク、または音声のトーン** に合わせて動作を適応させるようにモデルに教えます。
**2. なぜトレーニングでデータが重要なのですか?**
データは、微調整において**中心的な役割を果たします** 。これは、意図したユースケースでモデルがどの程度適切に実行されるかに直接影響します。
優れたデータによってできることは次のとおりです。
  * このモデルは、企業のトーン、医療用語、カスタマーサービスのスクリプトなど、コンテキストを理解できます。
  * あなたのタスク(分類、質問応答、要約など)を学習し、専門化することができます。
  * より正確で関連性の高い応答が生成されます。
  * これにより、複雑なプロンプトの必要性が最小限に抑えられます — モデルがすでに構造を学習しているからです

**3. データを適切に選択して構造化する**
適切なデータを選択してフォーマットすることは**キーステップ** です。その理由は、
  * モデルが適切な目標を学習するのに役立ちます
  * トレーニングパイプライン(トークナイザー、損失関数など)に簡単に統合
  * トレーニングの効率を向上させ、処理エラーを削減
  * 微調整プロセスのスケーラビリティと保守性を確保

**4.サポートデータ形式**
現在、微調整用のデータ形式には、次のものがあります。 ![file](/img/migrated/image-1744846094591.46.53-3072b275.png)
**1. Alpaca**
**Alpaca** は、非常に単純な構造を使用して、監視された微調整タスクの**インプットとアウトプットのペアを持つ命令追従形式でモデルを微調整** します。基本構造には次のものが含まれます。
  * **命令** : モデルが実行する必要がある特定のタスクまたは要求を含む文字列。
  * **インプット** ：モデルがタスクを実行するために処理する必要がある情報を含む文字列。
  * **アウトプット：** モデルが返す結果を表す文字列で、命令と入力の処理から生成されます。

**詳細な構造:**
[ { “instruction”: “string”, “input”: “string”, “output” “string” } ]
**例**

```
Copy[
    {
        "instruction": "In this task, you are given Wikipedia articles on a range of topics as passages and a question from the passage. We ask you to answer the question by classifying the answer as 0 (False) or 1 (True)\n\nNow complete the following instance -\nInput: Passage: Missouri River -- Tonnage of goods shipped by barges on the Missouri River has seen a serious decline from the 1960s to the present. In the 1960s, the USACE predicted an increase to 12 million short tons (11 Mt) per year by 2000, but instead the opposite has happened. The amount of goods plunged from 3.3 million short tons (3.0 Mt) in 1977 to just 1.3 million short tons (1.2 Mt) in 2000. One of the largest drops has been in agricultural products, especially wheat. Part of the reason is that irrigated land along the Missouri has only been developed to a fraction of its potential. In 2006, barges on the Missouri hauled only 200,000 short tons (180,000 t) of products which is equal to the amount of daily freight traffic on the Mississippi.\nQuestion: is there barge traffic on the missouri river\nOutput:",
        "input": "",
        "output": "1"
    },
    {
        "instruction": "CARAÏBES Communauté des Caraïbes (CARICOM) Aperçu Les 15 membres de la Communauté des Caraïbes (CARICOM) sont Antigua et Barbuda, les Bahamas, la Barbade, le Belize, la République dominicaine, la Grenade, la Guyane, Haïti, la Jamaïque, Saint-Kitts-et-Nevis, Sainte-Lucie, Saint Vincent et les Grenadines, le Suriname, Trinité-et-Tobago, ainsi que Montserrat (sous la dépendance du Royaume-Uni).\n\nWhich language is this?",
        "input": "",
        "output": "French"
    }
]
```

例： 
**サンプル** : <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/alpaca>
**2. Corpus**
**Corpus** は、言語モデルのトレーニングまたは微調整に使用されるテキストのコレクションです。
コーパス内の各データ ポイントには、テキストの文字列を含む "text" フィールドが含まれています。この形式は、**命令** と**アウトプット** を区別する必要はなく、モデルが学習するための生のテキスト データを提供するだけの場合によく使用されます
**詳細な構造:**
[ { “text”: “string” } ]
**例**

```
Copy[
    {
        "text": "Film colorization (American English; or colourisation [British English], or colourization [Canadian English and Oxford English]) is any process that adds color to black-and-white, sepia, or other monochrome moving-picture images. It may be done as a special effect, to \"modernize\" black-and-white films, or to restore color films. The first examples date from the early 20th century, but colorization has become common with the advent of digital image processing. Early techniques Hand colorization The first film colorization methods were hand done by individuals. For example, at least 4% of George Méliès' output, including some prints of A Trip to the Moon from 1902 and other major films such as The Kingdom of the Fairies, The Impossible Voyage, and The Barber of Seville were individually hand-colored by Elisabeth Thuillier's coloring lab in Paris. Thuillier, a former colorist of glass and celluloid products, directed a studio of two hundred people painting directly on film stock with brushes, in the colors she chose and specified; each worker was assigned a different color in assembly line style, with more than twenty separate colors often used for a single film. Thuillier's lab produced about sixty hand-colored copies of A Trip to the Moon, but only one copy is known to still exist today. The first full-length feature film made by a hand-colored process was The Miracle of 1912. The process was always done by hand, sometimes using a stencil cut from a second print of the film, such as the Pathécolor process. As late as the 1920s, hand coloring processes were used for individual shots in Greed (1924) and The Phantom of the Opera (1925) (both utilizing the Handschiegl color process); and rarely, an entire feature-length movie such as Cyrano de Bergerac (1925) and The Last Days of Pompeii (1926). These colorization methods were employed until effective color film processes were developed. Around 1968-1972, black-and-white Betty Boop, Krazy Kat and Looney Tunes cartoons and among others were redistributed in color. Supervised by Fred Ladd, color was added by tracing the original black-and-white frames onto new animation cels, and then adding color to the new cels in South Korea. To cut time and expense, Ladd's process skipped every other frame, cutting the frame rate in half; this technique considerably degraded the quality and timing of the original animation, to the extent that some animation was not carried over or mistakenly altered. The most recent redrawn colorized black-and-white cartoons"
    },
    {
        "text": "examples where the doubling does affect the meaning in most accents: ten nails versus ten ales this sin versus this inn five valleys versus five alleys his zone versus his own mead day versus me-day unnamed versus unaimed forerunner versus foreigner (only in some varieties of General American) In some dialects gemination is also found for some words when the suffix -ly follows a root ending in -l or -ll, as in: solely but not usually In some varieties of Welsh English, the process takes place indiscriminately between vowels, e.g. in money but it also applies with graphemic duplication (thus, orthographically dictated), e.g. butter French In French, gemination is usually not phonologically relevant and therefore does not allow words to be distinguished: it mostly corresponds to an accent of insistence (\"c'est terrifiant\" realised [ˈtɛʁ.ʁi.fjɑ̃]), or meets hyper-correction criteria: one \"corrects\" one's pronunciation, despite the usual phonology, to be closer to a realization that one imagines to be more correct: thus, the word illusion is sometimes pronounced [il.lyˈzjɔ̃] by influence of the spelling. However, gemination is distinctive in a few cases. Statements such as She said ~ She said it /ɛl a di/ ~ /ɛl l‿a di/ can commonly be distinguished by gemination. In a more sustained pronunciation, gemination distinguishes the conditional (and possibly the future tense) from the imperfect: courrai (will run) /kuʁ.ʁɛ/ vs. courais (ran) /ku.ʁɛ/, or the indicative from the subjunctive, as in croyons (we believe) /kʁwa.jɔ̃ / vs. croyions (we believed) /kʁwaj.jɔ̃ /. Greek In Ancient Greek, consonant length was distinctive, e.g., 'I am of interest' vs. 'I am going to'. The distinction has been lost in the standard and most other varieties, with the exception of Cypriot (where it might carry over from Ancient Greek or arise from a number of synchronic and diachronic assimilatory processes, or even spontaneously), some varieties of the southeastern Aegean, and Italy. Hindustani Gemination is common in both Hindi and Urdu. It does not occur after long vowels and is found in words of both Indic and Arabic origin, but not in those of Persian origin. In Urdu, gemination is represented by the Shadda diacritic, which is usually omitted from writings, and mainly written to clear ambiguity. In Hindi, gemination is represented by doubling the geminated consonant, enjoined with the Virama diacritic. Aspirated consonants Gemination of aspirated consonants in Hindi are formed by combining the corresponding non-aspirated consonant followed by its"
    }
]
```

**サンプル:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/corpus>
**3. ShareGPT**
**a. Tトレーナー = SFTの場合**
**ShareGPT** は、ユーザーとAIアシスタントとの間のマルチターンの会話(前後のチャット)を表すように設計されています。これは、複数のターンにわたるコンテキスト会話を処理する必要がある対話システムやチャットボットのモデルをトレーニングまたは微調整するときによく使用されます。
各データ サンプルは 会話 配列で構成され、チャットの各ターンには次のものが含まれます。
  * **from** : 誰が話しているか — 通常は 「ユーザー」 または 「アシスタント」。
  * **value** : そのスピーカーからの実際のメッセージテキスト。

**詳細な構造:**
[ { “conversations”: [ { “from”: “string”, “value”: “string” } ] } ]
**例** :

```
Copy[
    {
        "conversations": [
            {
                "from": "system",
                "value": "You are Qwen, created by Alibaba Cloud. You are a helpful assistant."
            },
            {
                "from": "user",
                "value": "Select the latest conversation state of the provided conversation history. Response only with the conversation state index.\n\n# Context\n- Hôm nay: Thứ tư, 19/02\n- Họ tên khách hàng: LÊ HOÀNG LOAN\n- Sản phẩm vay: Điện thoại Samsung\n- Số tiền cần thanh toán kỳ này: 1515000\n- Ngày đến hạn thanh toán kỳ này: 16/02\n- Số ngày đã trễ hạn thanh toán: 3\n- Hạn thanh toán cuối: 21/02\n\n# Conversation history\nTổng đài viên: Dạ có phải Anh LOAN đang nghe máy không ạ?\nNgười nhận cuộc gọi: có gì không em\n\n# Conversation states\n1) Xác nhận danh tính của mình là khách hàng - Ví dụ: \"ừ ai đấy\", \"phải chị\", \"đúng rồi ai gọi thế\", \"ờ vâng\", \"dạ vâng\", \"Anh LOAN đây\", \"sao thế\", \"mình nghe ạ\", \"có chuyện gì\", \"nói đi\"\n2) Hỏi danh tính của tổng đài viên - Ví dụ: \"ai đấy\", \"bạn tên gì\", \"bạn là ai\", \"công ty gì\", \"lừa đảo à\"\n3) Xác nhận là người thân (như ông, bà, bố, mẹ, cô, dì, chú, bác, anh, chị, em, vợ, con) của khách hàng hoặc có quen biết khách hàng - Ví dụ: \"anh là anh nó\", \"mình là chị của LOAN\", \"bác là mẹ nó nghe máy hộ nó đây\", \"cô là dì nó\", \"em là người nhà của Anh LOAN\", \"bạn ấy ra ngoài rồi mình là bạn của bạn ấy\", \"à Anh làm cùng cơ quan với nó\", \"mình là bạn nó\", \"quen biết qua thôi\"\n4) Thông báo không quen biết khách hàng hoặc thông báo nhầm số / nhầm người hoặc thông báo khách hàng đi vắng / chỉ nghe máy hộ và không cung cấp thông tin về mối quan hệ với khách hàng - Ví dụ: \"có quen biết gì đâu\", \"mình không biết bạn đấy\", \"ủa số này của tôi mà có biết đấy là ai đâu\", \"tôi nghe hộ bạn ấy ra ngoài rồi\", \"không nhầm rồi em ơi\", \"LOAN nào nhỉ\", \"LOAN á không phải rồi\", \"ai cơ\"\n5) Đồng ý thanh toán chung chung hoặc thông báo thời điểm hoặc số tiền sẽ thanh toán - Ví dụ: \"à ờ\", \"đúng rồi\", \"biết rồi nhé\", \"lát nữa nhé\", \"tý nữa giả nhé\", \"mai Anh đóng\", \"để tôi sắp xếp\", \"để hỏi nhờ người nhà xem sao\", \"giờ chưa có nhưng mai sẽ trả\", \"ngày kia trả được không nhỉ\"\n6) Đặt câu hỏi hoặc thắc mắc về khoản nợ, số hotline, phương thức thanh toán, ngày tháng - Ví dụ: \"tôi vay sản phẩm nào ấy nhỉ\", \"Anh cần trả bao nhiêu tiền ấy nhỉ\", \"Anh chưa biết cấch thanh toán như thế nào ấy\", \"hợp đồng của tôi còn bao nhiêu kỳ nữa\", \"ơ hạn thanh toán là ngày mùng sáu hàng tháng mà nhỉ\", \"sao lại nhiều tiền thế nhỉ\", \"sao tháng này cần đóng nhiều tiền hơn tháng trước\", \"lãi suất quá hạn là bao nhiêu hả em\", \"Anh đóng luôn mấy kỳ còn lại được không\", \"hôm nay ngày mấy nhỉ\", \"số điện thoại phản ánh là số mấy\", \"không biết đóng ở cửa hàng nào\"\n7) Báo bận hoặc đang không tiện nghe máy hoặc hẹn gọi lại sau - Ví dụ: \"Anh đang bận nhé\", \"tôi đang đi làm bạn ơi\", \"giờ không tiện lắm gọi lại sau đi\", \"tôi đang ngoài đường gọi lại sau nhé\"\n8) Phàn nàn hoặc khiếu nại do bị gọi nhiều - Ví dụ: \"bên em gọi nhiều thế\", \"sao một ngày gọi chục cuộc thế hả em\", \"đừng có gọi nữa mệt lắm rồi\"\n9) Không nghe rõ hoặc yêu cầu nhắc lại thông tin - Ví dụ: \"alo em nói gì thế\", \"Anh chưa nghe được em ơi\", \"ừ cái gì ấy nhỉ\", \"bạn nói lại giúp mình với\", \"ồn quá mình không nghe được ấy\", \"không nói gì à\"\n10) Thông báo khách hàng đã qua đời - Ví dụ: \"bạn ấy bị tại nạn mới mất rồi\", \"nó qua đời rồi em ạ\", \"Anh LOAN chết rồi bạn ơi\"\n11) Muốn gặp tổng đài viên - Ví dụ: \"cho tôi nói chuyện với tổng đài bên bạn nào\", \"Anh muốn gặp tổng đài viên\", \"chuyển máy cho tổng đài xử lý được không\"\n12) Trả lời sai trọng tâm của câu hỏi trước đó hoặc cung cấp thông tin chưa rõ ràng hoặc cần xác nhận lại thông tin hoặc đặt yêu cầu ngoài phạm vi hỗ trợ\n\n# Answer:"
            }
        ]
    }
]
[
    {
        "conversations": [
            {
                "from": "human",
                "value": "Summarize the main ideas of Jeff Walker's Product Launch Formula into bullet points as it pertains to a growth marketing agency implementing these strategies and tactics for their clients..."
            },
            {
                "from": "gpt",
                "value": "Here are the main ideas of Jeff Walker's Product Launch Formula that can be applied by a growth marketing agency for their clients:\n\n1. Identify the target audience and their needs: Understand the ideal customer for the product or service, and create a messaging that resonates with them.\n2. Pre-launch: Build anticipation and excitement for the launch by creating buzz, gathering testimonials and case studies, and using social media to create awareness.\n3. Launch: Use a well-crafted launch sequence to maximize sales and conversions. This can include offering bonuses, creating scarcity, and using a deadline to create urgency.\n4. Post-launch: Follow up with customers, gather feedback, and continue to provide value to keep them engaged and loyal.\n5. Create a product suite: Once the initial product is successful, expand the offering by creating additional products or services that address other needs of the same audience.\n6. Continual optimization: Continually monitor and optimize the launch process and product suite to improve results.\n7. Build a community: Use the launch process to build a community of customers who are passionate about the product and can help spread the word.\n8. Use automation: Use technology and automation to streamline the launch process and improve efficiency."
            }
        ]
    }
]
```

**サンプル:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt>
**b. トレーナー=DPOの場合**
**ShareGPT_DPO** は、ShareGPTから収集された会話(プロンプト+レスポンス)と、どちらが優れているかに基づいて人間によってランク付けされたレスポンスのペアで構成されるデータセットです。これは、次の目的で使用されます。
  * GPT のような言語モデルをトレーニングして、人間の好みに沿った方法で応答します。
  * DPO(Direct Preference Optimization)メソッドを使用して応答品質を最適化します。

**詳細な構造:**
[ { “conversations”: [ { “from”: “string”, “value”: “string” } ], “chosen”: { “from”: “string”, “value”: “string” }, “rejected”: { “from”: “string”, “value”: “string” } } ]
**例:**

```
Copy[
    {
        "conversations": [
            {
                "from": "human",
                "value": "Q: Based on this review, would the user recommend this product? === Review: Recommended by a friend that I will never again trust, I quit on this book half-way through. It is utterly pointless garbage. What is most offensive about it is that it isn't even well-written. This guy sounds like a frat-boy braggart, and his stories are no more creative than those you might overhear in a bar. Answer:\nA:"
            }
        ],
        "chosen": {
            "from": "gpt",
            "value": "Based on this review, the user would not recommend this product. The review is overwhelmingly negative, describing the book as \"utterly pointless garbage\" and stating that it is not well-written. The user also mentions that they quit reading the book halfway through, which suggests that they did not find it engaging or worthwhile. Overall, this review would likely deter potential buyers from purchasing the product."
        },
        "rejected": {
            "from": "gpt",
            "value": "No, based on this review, the user would not recommend this product."
        }
    },
    {
        "conversations": [
            {
                "from": "human",
                "value": "What Swift code can be used to display a UIAlertController with a text field and a \"reset\" button to reset a specific setting in a mobile app?\nHere's the current implementation:\nfunc resetSetting() {\n    let alert = UIAlertController(title: \"Reset Setting\", message: \"Enter the setting you want to reset:\", preferredStyle: .alert)\n    alert.addTextField(configurationHandler: { textField in\n        textField.placeholder = \"Setting Name\"\n    })\n    alert.addAction(UIAlertAction(title: \"Cancel\", style: .cancel, handler: nil))\n    alert.addAction(UIAlertAction(title: \"Reset\", style: .destructive, handler: { action in\n        // Code to reset setting goes here\n    }))\n    present(alert, animated: true, completion: nil)\n}\nHow can this be modified to allow for the user to enter a specific setting and then reset it without losing any other customizations or preferences in the app?"
            }
        ],
        "chosen": {
            "from": "gpt",
            "value": "To modify the `resetSetting` function to allow the user to enter a specific setting and then reset it without losing other customizations or preferences in the app, you can use the following code:\n```swift\nimport UIKit\n\nfunc resetSetting(_ settingIdentifier: String) {\n    let alert = UIAlertController(title: \"Reset Setting\", message: \"Enter the setting you want to reset:\", preferredStyle: .alert)\n    alert.addTextField(configurationHandler: { textField in\n        textField.placeholder = \"Setting Name\"\n        textField.text = settingIdentifier\n    })\n    alert.addAction(UIAlertAction(title: \"Cancel\", style: .cancel, handler: nil))\n    alert.addAction(UIAlertAction(title: \"Reset\", style: .destructive, handler: { action in\n        if let settingName = alert.textFields?.first?.text {\n            // Code to reset the specific setting goes here, using settingName as the identifier\n        }\n    }))\n    present(alert, animated: true, completion: nil)\n}\n```\nThis modified function now takes a `settingIdentifier` string parameter, which represents the specific setting you want to reset. The text field in the alert controller will now pre-fill with this setting identifier. When the user taps the \"Reset\" button, the code inside the `handler` for the `UIAlertAction` checks if the text field contains a setting name and resets the specified setting accordingly.\n\nMake sure to replace the comment inside the \"Reset\" action's handler with the actual code to reset the specific setting based on the `settingName` variable."
        },
        "rejected": {
            "from": "gpt",
            "value": "To add a text field to a UIAlertController in Swift, you can use the following code:\n\n```\nlet alert = UIAlertController(title: \"Reset Setting\", message: \"Enter the setting you want to reset:\", preferredStyle:.alert)\nlet textField = UITextField()\nalert.addTextField(textField)\n```\n\nTo add a \"Reset\" button to the UIAlertController that resets the specified setting, you can use the following code:\n\n```\nlet alert = UIAlertController(title: \"Reset Setting\", message: \"Enter the setting you want to reset:\", preferredStyle:.alert)\nlet textField = UITextField()\nalert.addTextField(textField)\n\nlet resetAction = UIAlertAction(title: \"Reset\", style:.destructive, handler: { (action) in\n   // Code to reset the specified setting goes here\n})\n\nalert.addAction(resetAction)\n```\n\nYou can modify the alert message and button text as needed. You can also add additional actions to the alert, such as a \"Cancel\" button or an \"OK\" button to apply the changes.\n\nCan you provide a basic example of the entire modified function?"
        }
    }
]
```

**サンプル** : <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt-dpo>
**4. ShareGPT_Image**
**ShareGPT_Image** は、ShareGPTのマルチターンチャット形式の拡張版で、マルチモーダルトレーニング、つまり、会話のテキストと画像の両方を処理するトレーニングモデルに特化して設計されています。
自然言語と並行して画像を処理する必要があるビジョン言語モデル (VLM) の微調整に使用されます。
構造には次のものが含まれます。
  * 「conversations」の下のチャットターンのリスト(ShareGPTと同じ)。
  * 会話で使用される画像を指す「image」または「image_path」というフィールド (png、jpg、jpeg形式を使用)

**詳細な構造:**
[ { “message”: [ { “role”: “string”, “content”: “string” } ], “images”: [ “images/0.jpg” ] } ]
**例:**

```
Copy[
    {
        "messages": [
            {
                "role": "user",
                "content": "<image>Explain the visual content of the image in great detail."
            },
            {
                "role": "assistant",
                "content": "The image presents a view of a hotel room, showing both the bathroom and bedroom areas. In the bathroom, there is a white sink under a mirror, accompanied by several bottles placed on the counter, and two cups nearby. \n\nLooking through a doorway into the bedroom area, a large bed can be seen dominating the space. A chair is also visible within the room, situated near the foot of the bed. The hair drier is located in the foreground, implying that it likely belongs to the bathroom area as well. The arrangement of the objects and the furniture suggests a comfortable and well-equipped hotel room."
            }
        ],
        "images": [
            "images/0.jpg"
        ]
    },
    {
        "messages": [
            {
                "role": "user",
                "content": "What is this photo about<image>'?"
            },
            {
                "role": "assistant",
                "content": "On a sunny day at the beach, two people can be seen prominently walking across the sand, each carrying a surfboard. They are likely preparing to surf the waves or have just finished a session. Additionally, there are several other people scattered throughout the scene, engaging in various beach activities.\n\nIn total, there are three surfboards visible in the image: one with each of the main two surfers and a third one closer to another person. Among the people present, some are closer to the water, while others are further away, enjoying the pleasant beach atmosphere."
            }
        ],
        "images": [
            "images/1.jpg"
        ]
    }
]
```

**サンプル** : [https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt-image](https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt-dpo)