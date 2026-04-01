---
id: "select-dataset-format"
title: "Select Dataset Format"
description: "The dataset format depends on the selected trainer."
sidebar_label: "Select Dataset Format"
sidebar_position: 12
---

# Select Dataset Format

The dataset format depends on the selected trainer.  
| Trainer  | Supported data format  | Supported file format  | Supported file size  |  
| --- | --- | --- | --- |  
| **SFT**  | Alpaca  | CSV  
JSON  
JSONLINES  
ZIP  
PARQUET  | Limit 100MB  |  
| **SFT**  | ShareGPT  | JSON  
JSONLINES  
ZIP  
PARQUET  | Limit 100MB  |  
| **SFT**  | ShareGPT_Image  | ZIP  
PARQUET  | Limit 100MB  |  
| **DPO**  | ShareGPT  | JSON  
JSONLINES  
ZIP  
PARQUET  | Limit 100MB  |  
| **Pre-training**  | Corpus  | TXT  
JSON  
JSONLINES  
ZIP  
PARQUET  | Limit 100MB  |  
[![Alt text](https://fptcloud.com/wp-content/uploads/2025/02/Data-format.png)](https://fptcloud.com/wp-content/uploads/2025/02/Data-format.png)
We currently support data formats for fine-tuning include:
### a/ Alpaca
**Alpaca** uses a very simple structure to fine-tune the model with Instruction-following format with input, output pairs for **supervised fine-tuning** tasks. The basic structure includes:
  * **Instruction** : A string containing the specific task or request that the model needs to perform.
  * **Input** : A string containing the information that the model needs to process in order to carry out the task.
  * **Output** : A string representing the result the model should return, generated from processing the instruction and input.

**Detailed Structure:**

```
Copy[
   {
      “instruction”: “string”,
      “input”: “string”,
      “output” “string”
  }
]

```

**Examples** :

```
Copy[
    {
        "instruction": "In this task, you are given Wikipedia articles on a range of topics as passages and a question from the passage. We ask you to answer the question by classifying the answer as 0 (False) or 1 (True)\\n\\nNow complete the following instance -\\nInput: Passage: Missouri River -- Tonnage of goods shipped by barges on the Missouri River has seen a serious decline from the 1960s to the present. In the 1960s, the USACE predicted an increase to 12 million short tons (11 Mt) per year by 2000, but instead the opposite has happened. The amount of goods plunged from 3.3 million short tons (3.0 Mt) in 1977 to just 1.3 million short tons (1.2 Mt) in 2000. One of the largest drops has been in agricultural products, especially wheat. Part of the reason is that irrigated land along the Missouri has only been developed to a fraction of its potential. In 2006, barges on the Missouri hauled only 200,000 short tons (180,000 t) of products which is equal to the amount of daily freight traffic on the Mississippi.\\nQuestion: is there barge traffic on the missouri river\\nOutput:",
        "input": "",
        "output": "1"
    },
    {
        "instruction": "CARAÏBES Communauté des Caraïbes (CARICOM) Aperçu Les 15 membres de la Communauté des Caraïbes (CARICOM) sont Antigua et Barbuda, les Bahamas, la Barbade, le Belize, la République dominicaine, la Grenade, la Guyane, Haïti, la Jamaïque, Saint-Kitts-et-Nevis, Sainte-Lucie, Saint Vincent et les Grenadines, le Suriname, Trinité-et-Tobago, ainsi que Montserrat (sous la dépendance du Royaume-Uni).\\n\\nWhich language is this?",
        "input": "",
        "output": "French"
    }
]

```

**Samples:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/alpaca>
**Supported file format:** .csv, .json, .jsonlines, .zip, .parquet
### b/ ShareGPT
### b.1/ Trainer = SFT
**ShareGPT** is designed to represent multi-turn conversations (back-and-forth chats) between a user and an AI assistant. It is commonly used when training or fine-tuning models for dialogue systems or chatbots that need to handle contextual conversation over multiple turns.
Each data sample consists of a `conversations` array, where each turn in the chat includes:
  * **from** : Who is speaking — usually `"human"` or `"gpt"`.
  * **value** : The actual message text from that speaker.

**Detailed Structure:**

```
Copy[
   {
      “conversations”: [
         {
            “from”: “string”,
            “value”: “string”
         }
      ]
   }
]

```

**Examples** :

```
Copy[
  {
    "conversations": [
      {
        "from": "human",
        "value": "You are a powerful Ai that will detail Character Biographies in succinct and detailed manner. You WILL cover their Personality, Age, Physical Appearance, Attire, Background, and Abilities to the highest degree of accuracy. Use explicit and visceral and graphic descriptions for appearances, clothes, sight, smell, texture, taste, feelings, actions.\nGenerate a profile of “Sona Sitri” from “Highschool DxD”"
      },
      {
        "from": "gpt",
        "value": "Name: Sona Sitri\nFranchise: Highschool DxD\nSpecies: Devil\n\nPersonality:\nSona Sitri is a highly intelligent, poised, and reserved individual. As the heir to the Sitri clan, she carries herself with an air of noble grace and exhibits impeccable manners. She is diligent, resourceful, and has an unwavering dedication to duty, remaining steadfast in her decisions.\n\nAlthough Sona is often perceived as cold due to her formal demeanor, she is shown to care deeply for her peers and possesses a strong sense of responsibility towards her clan and fellow devils. She is often seen mentoring her classmates, demonstrating her willingness to provide guidance and assistance.\n\nAge:\nSona is in her late teens; however, as a devil, her lifespan greatly exceeds that of a human.\n\nPhysical Appearance:\nSona is a strikingly beautiful young woman. Her ethereal beauty is embodied in her delicate features: large, expressive, violet-blue eyes framed by soft, charcoal-black hair that cascades to her waist in gentle waves. Her complexion is flawless and porcelain-like, accentuating her alluring and dignified aura.\n\nHer curved figure is slender, yet well-toned, an indication of the physical strength and durability embedded within her. Sona stands at an average height, with legs that seem to stretch for miles, adding to her overall allure.\n\nAttire:\nSona's attire exudes elegance, reflecting her noble background and personal tastes. She dons the Kuoh Academy girls’ uniform with perfection, consisting of a crisp, white collared blouse, a black ribbon tied elegantly around her slender neck, and a dark maroon blazer with gold trimmings.\n\nHer ensemble is completed with a modest, black knee-length skirt that both accents and mirrors the mystery and beauty of her eyes. Sona's attire is impeccably well-maintained, embodying her impressive discipline and attention to detail.\n\nBackground:\nSona Sitri is the next in line to inherit the governance of the Sitri clan, one of the 72 Pillars of the Devil society. Born into a life of wealth, power, and nobility, Sona has been groomed from a young age to one day lead the clan. She enrolls as a student at Kuoh Academy, a formerly all-girls school that has recently begun to admit male students.\n\nDespite her noble heritage, Sona strives to maintain a sense of normalcy in her life, even if only at school. While attending Kuoh Academy, she forms the Student Council, further showcasing her leadership capabilities.\n\nAbilities:\nAs a high-ranking devil of the Sitri clan, Sona possesses impressive powers and abilities. Her most unique ability is the control and manipulation of vast amounts of water. She is capable of bending water at her will, wielding it as both a weapon and a shield. This ability to control water also grants her the power to create barriers that can imprison her enemies or protect her allies.\n\nSona has demonstrated tremendous magical aptitude, able to create intricate and potent spells with ease. Her intelligence and strategic prowess make her adaptive to any situation, allowing her to design detailed plans and strategies to defeat her enemies.\n\nIn terms of physical capabilities, Sona possesses strength and agility that surpasses those of a human. As a devil, she also has heightened senses and the ability to regenerate from wounds more rapidly than a human.\n\nIn conclusion, Sona Sitri is a captivating devil with a multitude of talents within her arsenal. She is fiercely intelligent, incredibly disciplined, and possesses a near-flawless balance of sophistication and power. Sona ultimately defies expectations through her enigmatic blend of elegance and ferocity, ensuring her place as an unforgettable character within the Highschool DxD universe."
      }
    ]
  },
  {
    "conversations": [
      {
        "from": "human",
        "value": "Write a speech Donnel Udina would have given to justify his coup in Mass Effect 3 that he would have broadcast on the extranet in an attempt to get the people to support his coup against the Council and legitimize his new regime. Have him be vague in his goals and plans but make sure that he would make clear a new order will be set up under his rule."
      },
      {
        "from": "gpt",
        "value": "Ladies and gentlemen, citizens of the galaxy, I am <PRESIDIO_ANONYMIZED_PERSON>. Today, I stand before you to address a critical matter - a decision I have had to make to ensure the survival and future of our galaxy. It is no secret that the galaxy is under grave threat posed by the Reapers, and it is in these trying times that we must evaluate our past, present, and future. It is clear that our past and present courses have led us to the precipice of total annihilation.\n\nFor years, the current Council has made decisions that, though well-intended, have resulted in the weakening of our galactic community. Under their leadership, we have seen power centralized among a few select species, while others have been left to fend for themselves; we have seen bureaucracy take precedence over swift and decisive action; we have seen our defenses languish due to backroom politics and the preservation of personal interest.\n\nThe Reapers have arrived, and all the Council has done so far is to cling to old, failing ways. Now is the time to look to our future - a future where we must rise above our divisions, look beyond petty differences and unite as one to face the greatest darkness that has ever descended upon our galaxy.\n\nSo today, I have made the difficult decision to break free of the Council's stagnation and inertia. I want to be clear: this is not a coup; this is a reformation of our leadership to save our galaxy, and to ensure that our collective strength and potential are used to their fullest. I have decided to establish a new order, one that will emphasize unity, efficiency and strength in our response to the Reaper threat. An order that understands the need for unity above all, and that is willing to take strong, decisive steps.\n\nI know that this decision may be met with skepticism and even hostility. But I implore you, citizens of the galaxy, to consider this - isn't it important to give ourselves the best chance at survival? Would you rather go down fighting, knowing that we pushed ourselves to the limit, or would you perish in bitter resignation, cursing the Council for their indecision and lack of foresight?\n\nI understand that change is frightening, especially change of this magnitude; however, we must face our fears and move forward. I am not asking for immediate, blind loyalty - all I ask is for your consideration, for a chance to show you that this new order will be better equipped to face the challenges ahead.\n\nTogether, the galaxy will stand united, and in unity we will find the power to end this war. Under this new order, I pledge to do everything in my power to ensure that we stand strong in the face of the Reapers, united in our purpose and undivided in our resolve.\n\nToday, we face the greatest challenge our galaxy has ever known, but we are not defeated; we have simply begun a new chapter in our evolution. A chapter where we reject the old ways of division, bureaucracy, and weakened defences.\n\nJoin me, citizens of the galaxy, as we embrace this new, unified purpose. Together, we will emerge victorious - not only against the darkness that threatens us this day, but against all challenges that come to pass, for as long as our light shines bright. Stand with me, and together, we shall create a new legacy for our generations to come.\n\nThank you."
      },
      {
        "from": "human",
        "value": "Write down a Modern AU news article for Game of Thrones which talks about the Green Trial (including the purge of the High Sparrows and Tyrells) and the Coronation of Queen Cersei from the perspective of a modern Westeros, modernizing the events of Game of Thrones to a war torn Westeros inspired by modern civil wars in the process. Have there be a rigged referendum where Cersei seizing control of the throne after Tommen’s death was “approved” by an “overwhelming majority” of voters and “unanimously approved” by a (purged and puppeted) legislature which also approved other amendments to the constitution, with one of said measures an amendment which formalized the one-party nature of the Westerosi state under the Lannisters (even though the country had de facto functioned as such for years). Mention other measures that could be taken by the Lannister regime in such a scenario. Finally, feel free to name the Party the one-party state has and its (official) ideology. "
      },
      {
        "from": "gpt",
        "value": "Headline: Queen Cersei Seizes Powers in Green Trial, Westeros Moves to One-Party State\n\nKING'S LANDING - The Green Trial marked a significant turning point in Westeros's modern civil wars as it saw the Queen Mother, Cersei Lannister, purge the High Sparrows and effectively wipe out House Tyrell. Dramatic events unfolded in the capital, culminating in the Coronation of Queen Cersei after the tragic death of King Tommen Baratheon in the course of the purge.\n\nIn the days following the Green Trial, a nationwide referendum was hastily organized, where citizens of Westeros were asked to approve the seizure of control by Queen Cersei. This referendum saw an overwhelming majority vote in favor of Cersei's rule, with the subsequent unanimous approval by a purged and puppeted legislature. Critics argue that the referendum and parliamentary proceedings were rigged, voicing concerns about the swift and uncompromising nature of these events.\n\nThe same legislative session also approved amendments to the Westerosi constitution, most notably transforming the nation into a one-party state under the control of the Lannister Party. This move further cements the Lannister grip on power, while any remaining opposition will be forced underground, despite the fact that Westeros had been functioning de facto as a one-party state led by the Lannisters for years.\n\nThe new one-party state has adopted the ideology of Lannisterism, which entails the preservation of the Lannister rule, with a focus on stability and economy industry, albeit with a disregard for individual freedoms and political dissent. \n\nOther measures enacted under this new regime include the consolidation of Lannister loyalists in the military and the centralization of political and economic control, all in the name of stability and security. It is said that spies and informants have been deployed across Westeros, ensuring that any form of dissent will be rooted out swiftly and effectively. Cultural measures, such as the promotion of the Lannister lion as a symbol of national pride and unity, have also been introduced to solidify the Lannister's dominance.\n\nInternational reactions have been mixed, with some neighboring nations voicing concerns about the lack of transparency in Cersei's recent power grab, and others remaining silent, perhaps out of fear or a desire to maintain political alliances with the increasingly powerful Lannister regime.\n\nWesteros's future remains uncertain, as the specter of civil wars and violence looms large, and opposition to Cersei's rule simmers beneath the surface. Regime opponents are likely to consist of a fragile alliance of various factions, all with different agendas - from democrats seeking greater political pluralism to regional separatists looking for increased autonomy or independence. The Lannisters, however, stand stronger than ever, with their regime poised to further entrench its power across the realm.\n\nWill the Lannister hegemony bring peace and stability to the war-torn Westeros, or will it only fan the flames of division and conflict? The answer remains to be seen, but it is clear that the world will be watching Westeros closely in the coming months and years, as the machinations of Queen Cersei and her Lannister regime continue to unfold."
      }
    ]
  }
]

```

**Samples:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt>
**Supported file format:** .json, .jsonlines, .zip, .parquet
### b.2 / Trainer = DPO
**ShareGPT_DPO** is a dataset consisting of conversations (prompt + response) collected from ShareGPT, along with pairs of responses that have been ranked by humans based on which one is better. It is used to:
  * Train language models like GPT to respond in ways that align with human preferences.
  * Optimize response quality using the DPO (Direct Preference Optimization) method.

**Detailed Structures:**

```
Copy[
   {
      “conversations”: [
         {
            “from”: “string”,
            “value”: “string”
         }
],
      “chosen”: {
         “from”: “string”,
         “value”: “string”
},
      “rejected”: {
         “from”: “string”,
         “value”: “string”
      }
   }
]

```

**Examples:**

```
Copy[
    {
        "conversations": [
            {
                "from": "human",
                "value": "Q: Based on this review, would the user recommend this product? === Review: Recommended by a friend that I will never again trust, I quit on this book half-way through. It is utterly pointless garbage. What is most offensive about it is that it isn't even well-written. This guy sounds like a frat-boy braggart, and his stories are no more creative than those you might overhear in a bar. Answer:\\nA:"
            }
        ],
        "chosen": {
            "from": "gpt",
            "value": "Based on this review, the user would not recommend this product. The review is overwhelmingly negative, describing the book as \\"utterly pointless garbage\\" and stating that it is not well-written. The user also mentions that they quit reading the book halfway through, which suggests that they did not find it engaging or worthwhile. Overall, this review would likely deter potential buyers from purchasing the product."
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
                "value": "What Swift code can be used to display a UIAlertController with a text field and a \\"reset\\" button to reset a specific setting in a mobile app?\\nHere's the current implementation:\\nfunc resetSetting() {\\n    let alert = UIAlertController(title: \\"Reset Setting\\", message: \\"Enter the setting you want to reset:\\", preferredStyle: .alert)\\n    alert.addTextField(configurationHandler: { textField in\\n        textField.placeholder = \\"Setting Name\\"\\n    })\\n    alert.addAction(UIAlertAction(title: \\"Cancel\\", style: .cancel, handler: nil))\\n    alert.addAction(UIAlertAction(title: \\"Reset\\", style: .destructive, handler: { action in\\n        // Code to reset setting goes here\\n    }))\\n    present(alert, animated: true, completion: nil)\\n}\\nHow can this be modified to allow for the user to enter a specific setting and then reset it without losing any other customizations or preferences in the app?"
            }
        ],
        "chosen": {
            "from": "gpt",
            "value": "To modify the `resetSetting` function to allow the user to enter a specific setting and then reset it without losing other customizations or preferences in the app, you can use the following code:\\n```swift\\nimport UIKit\\n\\nfunc resetSetting(_ settingIdentifier: String) {\\n    let alert = UIAlertController(title: \\"Reset Setting\\", message: \\"Enter the setting you want to reset:\\", preferredStyle: .alert)\\n    alert.addTextField(configurationHandler: { textField in\\n        textField.placeholder = \\"Setting Name\\"\\n        textField.text = settingIdentifier\\n    })\\n    alert.addAction(UIAlertAction(title: \\"Cancel\\", style: .cancel, handler: nil))\\n    alert.addAction(UIAlertAction(title: \\"Reset\\", style: .destructive, handler: { action in\\n        if let settingName = alert.textFields?.first?.text {\\n            // Code to reset the specific setting goes here, using settingName as the identifier\\n        }\\n    }))\\n    present(alert, animated: true, completion: nil)\\n}\\n```\\nThis modified function now takes a `settingIdentifier` string parameter, which represents the specific setting you want to reset. The text field in the alert controller will now pre-fill with this setting identifier. When the user taps the \\"Reset\\" button, the code inside the `handler` for the `UIAlertAction` checks if the text field contains a setting name and resets the specified setting accordingly.\\n\\nMake sure to replace the comment inside the \\"Reset\\" action's handler with the actual code to reset the specific setting based on the `settingName` variable."
        },
        "rejected": {
            "from": "gpt",
            "value": "To add a text field to a UIAlertController in Swift, you can use the following code:\\n\\n```\\nlet alert = UIAlertController(title: \\"Reset Setting\\", message: \\"Enter the setting you want to reset:\\", preferredStyle:.alert)\\nlet textField = UITextField()\\nalert.addTextField(textField)\\n```\\n\\nTo add a \\"Reset\\" button to the UIAlertController that resets the specified setting, you can use the following code:\\n\\n```\\nlet alert = UIAlertController(title: \\"Reset Setting\\", message: \\"Enter the setting you want to reset:\\", preferredStyle:.alert)\\nlet textField = UITextField()\\nalert.addTextField(textField)\\n\\nlet resetAction = UIAlertAction(title: \\"Reset\\", style:.destructive, handler: { (action) in\\n   // Code to reset the specified setting goes here\\n})\\n\\nalert.addAction(resetAction)\\n```\\n\\nYou can modify the alert message and button text as needed. You can also add additional actions to the alert, such as a \\"Cancel\\" button or an \\"OK\\" button to apply the changes.\\n\\nCan you provide a basic example of the entire modified function?"
        }
    }
]

```

**Samples** : <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt-dpo>
**Supported file format:** .json, .jsonlines, .zip, .parquet
### c/ ShareGPT_Image
**ShareGPT_Image** is an extension of the ShareGPT multi-turn chat format, designed specifically for multi-modal training — that is, training models that handle both text and images in conversations.
It’s used in fine-tuning vision-language models (VLMs), which need to process images alongside natural language.
The structure includes:
  * A list of **chat turns** under `"message"` (same as ShareGPT).
  * A field called `"image"` or `"image_path"` that points to the image used in the conversation (using format png, jpg, jpeg)

**Notice:**
  * **Must include the`image` token** in the chat content where an image should appear.
  * If there are **multiple images** : 
    * Image paths must be defined in an **`images`array**.
    * The **positions of the images** in the chat flow are indicated by the **`image`tokens**
    * The **number of`image` tokens** in the chat must **match the number of items in the`images` array**.
    * Images will be **mapped in order of appearance** , with each `image` token replaced by the corresponding image from the `images` array.

**Detailed Structures:**

```
Copy[
   {
      “message”: [
         {
            “role”: “string”, “content”: “<image>string”
         }
      ],
      “images”: [
         “images/0.jpg”
      ]
   }
]

```

**Examples:**

```
Copy[
    {
        "messages": [
            {
                "role": "user",
                "content": "<image>How many baseball players are visible in the image?"
            },
            {
                "role": "assistant",
                "content": "There are three baseball players visible in the image."
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
                "content": "What is the man wearing in the image?<image>"
            },
            {
                "role": "assistant",
                "content": "The man in the image is wearing chaps, a cowboy hat, and is dressed like a cowboy."
            }
        ],
        "images": [
            "images/1.jpg"
        ]
    },
    {
        "messages": [
            {
                "role": "user",
                "content": "<image>Explain the visual content of the image in great detail."
            },
            {
                "role": "assistant",
                "content": "The image presents a view of a hotel room, showing both the bathroom and bedroom areas. In the bathroom, there is a white sink under a mirror, accompanied by several bottles placed on the counter, and two cups nearby. \\n\\nLooking through a doorway into the bedroom area, a large bed can be seen dominating the space. A chair is also visible within the room, situated near the foot of the bed. The hair drier is located in the foreground, implying that it likely belongs to the bathroom area as well. The arrangement of the objects and the furniture suggests a comfortable and well-equipped hotel room."
            }
        ],
        "images": [
            "images/2.jpg"
        ]
    }
]

```

**Samples** : <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt-image>
**Supported file format:** .zip, .parquet
### d/ Corpus
**Corpus** is a collection of text used for training or fine-tuning language models.
Each data point in the corpus includes a `"text"` field with a string of text. This format is commonly used when you don't need to distinguish between **instruction** and **output** , but just want to provide raw text data for the model to learn from
**Detailed Structure:**

```
Copy[
   {
      “text”: “string”
   }
]

```

**Examples** :

```
Copy[
    {
        "text": "Film colorization (American English; or colourisation [British English], or colourization [Canadian English and Oxford English]) is any process that adds color to black-and-white, sepia, or other monochrome moving-picture images. It may be done as a special effect, to \\"modernize\\" black-and-white films, or to restore color films. The first examples date from the early 20th century, but colorization has become common with the advent of digital image processing. Early techniques Hand colorization The first film colorization methods were hand done by individuals. For example, at least 4% of George Méliès' output, including some prints of A Trip to the Moon from 1902 and other major films such as The Kingdom of the Fairies, The Impossible Voyage, and The Barber of Seville were individually hand-colored by Elisabeth Thuillier's coloring lab in Paris. Thuillier, a former colorist of glass and celluloid products, directed a studio of two hundred people painting directly on film stock with brushes, in the colors she chose and specified; each worker was assigned a different color in assembly line style, with more than twenty separate colors often used for a single film. Thuillier's lab produced about sixty hand-colored copies of A Trip to the Moon, but only one copy is known to still exist today. The first full-length feature film made by a hand-colored process was The Miracle of 1912. The process was always done by hand, sometimes using a stencil cut from a second print of the film, such as the Pathécolor process. As late as the 1920s, hand coloring processes were used for individual shots in Greed (1924) and The Phantom of the Opera (1925) (both utilizing the Handschiegl color process); and rarely, an entire feature-length movie such as Cyrano de Bergerac (1925) and The Last Days of Pompeii (1926). These colorization methods were employed until effective color film processes were developed. Around 1968-1972, black-and-white Betty Boop, Krazy Kat and Looney Tunes cartoons and among others were redistributed in color. Supervised by Fred Ladd, color was added by tracing the original black-and-white frames onto new animation cels, and then adding color to the new cels in South Korea. To cut time and expense, Ladd's process skipped every other frame, cutting the frame rate in half; this technique considerably degraded the quality and timing of the original animation, to the extent that some animation was not carried over or mistakenly altered. The most recent redrawn colorized black-and-white cartoons"
    },
    {
        "text": "examples where the doubling does affect the meaning in most accents: ten nails versus ten ales this sin versus this inn five valleys versus five alleys his zone versus his own mead day versus me-day unnamed versus unaimed forerunner versus foreigner (only in some varieties of General American) In some dialects gemination is also found for some words when the suffix -ly follows a root ending in -l or -ll, as in: solely but not usually In some varieties of Welsh English, the process takes place indiscriminately between vowels, e.g. in money but it also applies with graphemic duplication (thus, orthographically dictated), e.g. butter French In French, gemination is usually not phonologically relevant and therefore does not allow words to be distinguished: it mostly corresponds to an accent of insistence (\\"c'est terrifiant\\" realised [ˈtɛʁ.ʁi.fjɑ̃]), or meets hyper-correction criteria: one \\"corrects\\" one's pronunciation, despite the usual phonology, to be closer to a realization that one imagines to be more correct: thus, the word illusion is sometimes pronounced [il.lyˈzjɔ̃] by influence of the spelling. However, gemination is distinctive in a few cases. Statements such as She said ~ She said it /ɛl a di/ ~ /ɛl l‿a di/ can commonly be distinguished by gemination. In a more sustained pronunciation, gemination distinguishes the conditional (and possibly the future tense) from the imperfect: courrai (will run) /kuʁ.ʁɛ/ vs. courais (ran) /ku.ʁɛ/, or the indicative from the subjunctive, as in croyons (we believe) /kʁwa.jɔ̃ / vs. croyions (we believed) /kʁwaj.jɔ̃ /. Greek In Ancient Greek, consonant length was distinctive, e.g., 'I am of interest' vs. 'I am going to'. The distinction has been lost in the standard and most other varieties, with the exception of Cypriot (where it might carry over from Ancient Greek or arise from a number of synchronic and diachronic assimilatory processes, or even spontaneously), some varieties of the southeastern Aegean, and Italy. Hindustani Gemination is common in both Hindi and Urdu. It does not occur after long vowels and is found in words of both Indic and Arabic origin, but not in those of Persian origin. In Urdu, gemination is represented by the Shadda diacritic, which is usually omitted from writings, and mainly written to clear ambiguity. In Hindi, gemination is represented by doubling the geminated consonant, enjoined with the Virama diacritic. Aspirated consonants Gemination of aspirated consonants in Hindi are formed by combining the corresponding non-aspirated consonant followed by its"
    }
]

```

**Samples:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/corpus>
**Supported file format:** .txt, .json, .jsonlines, .zip, .parquet
