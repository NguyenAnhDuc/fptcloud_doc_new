---
id: "standard-select-data-format"
title: Standard - Select Data Format
description: "Only select data format when you choose **test suite = standard**"
sidebar_label: Standard - Select Data Format
sidebar_position: "11"
---

# Standard - Select Data Format

Chỉ chọn định dạng dữ liệu khi bạn chọn **test suite = standard**  
| Định dạng dữ liệu hỗ trợ  | Định dạng file hỗ trợ  | Kích thước file hỗ trợ  |  
| --- | --- | --- |  
| Alpaca  | - CSV   
- JSON   
- JSONLINES   
- ZIP   
- PARQUET  | Giới hạn 100MB  |  
| ShareGPT  | - JSON   
- JSONLINES   
- ZIP   
- PARQUET  | Giới hạn 100MB  |  
| ShareGPT_Image  | - ZIP   
- PARQUET  | Giới hạn 100MB  |  
[![Alt text](/img/migrated/Data-format-a194722e.png)](/img/migrated/Data-format-a194722e.png)
Hiện tại chúng tôi hỗ trợ các định dạng dữ liệu cho việc kiểm thử bao gồm:

### a/ Alpaca
**Alpaca** sử dụng cấu trúc rất đơn giản để fine-tune mô hình với định dạng Instruction-following kèm các cặp input, output cho các nhiệm vụ **supervised fine-tuning**. Cấu trúc cơ bản bao gồm:
  * **Instruction** : Chuỗi chứa nhiệm vụ hoặc yêu cầu cụ thể mà mô hình cần thực hiện.
  * **Input** : Chuỗi chứa thông tin mô hình cần xử lý để thực hiện nhiệm vụ.
  * **Output** : Chuỗi đại diện cho kết quả mô hình cần trả về, được tạo ra từ việc xử lý instruction và input.

**Cấu trúc chi tiết:**

```
Copy[
   {
      "instruction": "string",
      "input": "string",
      "output" "string"
  }
]
```

**Ví dụ** :

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

**Mẫu:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/alpaca>
**Định dạng file hỗ trợ:** .csv, .json, .jsonlines, .zip, .parquet

### b/ ShareGPT
**ShareGPT** được thiết kế để biểu diễn các cuộc hội thoại nhiều lượt (trò chuyện qua lại) giữa người dùng và trợ lý AI. Định dạng này thường được sử dụng khi huấn luyện hoặc fine-tuning các mô hình cho các hệ thống hội thoại hoặc chatbot cần xử lý hội thoại ngữ cảnh qua nhiều lượt.
Mỗi mẫu dữ liệu bao gồm một mảng `conversations`, trong đó mỗi lượt trong cuộc trò chuyện bao gồm:
  * **from** : Người đang nói — thường là `"human"` hoặc `"system"`.
  * **value** : Nội dung tin nhắn thực tế từ người nói đó.

**Cấu trúc chi tiết:**

```
Copy[
   {
      "conversations": [
         {
            "from": "string",
            "value": "string"
         }
      ]
   }
]
```

**Ví dụ** :

```
Copy[
    {
        "conversations": [
            {
                "from": "system",
                "value": "You are Qwen, created by Alibaba Cloud. You are a helpful assistant."
            },
            {
                "from": "human",
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

**Mẫu:** <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt>
**Định dạng file hỗ trợ:** .json, .jsonlines, .zip, .parquet

### c/ ShareGPT_Image
**ShareGPT_Image** là phần mở rộng của định dạng hội thoại nhiều lượt ShareGPT, được thiết kế đặc biệt cho việc huấn luyện đa phương thức — tức là huấn luyện các mô hình xử lý cả văn bản và hình ảnh trong các cuộc hội thoại.
Định dạng này được sử dụng trong việc fine-tuning các vision-language models (VLMs), cần xử lý hình ảnh cùng với ngôn ngữ tự nhiên.
Cấu trúc bao gồm:
  * Danh sách các **lượt trò chuyện** trong `"message"` (giống như ShareGPT).
  * Một trường gọi là `"image"` hoặc `"image_path"` trỏ đến hình ảnh được sử dụng trong cuộc hội thoại (sử dụng định dạng png, jpg, jpeg)

**Lưu ý:**
  * **Phải bao gồm token`image`** trong nội dung trò chuyện ở vị trí hình ảnh sẽ xuất hiện.
  * Nếu có **nhiều hình ảnh** : 
    * Đường dẫn hình ảnh phải được định nghĩa trong một **mảng`images`**.
    * **Vị trí của hình ảnh** trong luồng trò chuyện được chỉ ra bởi **các token`image`**
    * **Số lượng token`image`** trong trò chuyện phải **khớp với số lượng phần tử trong mảng`images`**.
    * Hình ảnh sẽ được **ánh xạ theo thứ tự xuất hiện**, với mỗi token `image` được thay thế bởi hình ảnh tương ứng từ mảng `images`.

**Cấu trúc chi tiết:**

```
Copy[
   {
      "message": [
         {
            "role": "string", "content": "<image>string"
         }
      ],
      "images": [
         "images/0.jpg"
      ]
   }
]
```

**Ví dụ:**

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
                "content": "The image presents a view of a hotel room, showing both the bathroom and bedroom areas. In the bathroom, there is a white sink under a mirror, accompanied by several bottles placed on the counter, and two cups nearby. \n\nLooking through a doorway into the bedroom area, a large bed can be seen dominating the space. A chair is also visible within the room, situated near the foot of the bed. The hair drier is located in the foreground, implying that it likely belongs to the bathroom area as well. The arrangement of the objects and the furniture suggests a comfortable and well-equipped hotel room."
            }
        ],
        "images": [
            "images/2.jpg"
        ]
    }
]
```

**Mẫu** : <https://github.com/fpt-corp/ai-studio-samples/tree/main/sample-datasets/sharegpt-image>
**Định dạng file hỗ trợ:** .zip, .parquet
