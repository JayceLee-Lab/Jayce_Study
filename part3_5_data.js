// TSC 제 3부분 연습용 데이터베이스 - 이미지 원문 답변 + 성조 포함 병음
// a는 이미지 오른쪽 긴 답변을 유지하고, aP는 성조 포함 병음으로 채웠습니다.
const PART3_5_DATA = [
    {
        "q": "我有两张电影票，一起看电影吧。",
        "qP": "Wǒ yǒu liǎng zhāng diànyǐngpiào, yìqǐ kàn diànyǐng ba.",
        "a": "好啊，一起去吧。我们八点在公司门口见面吧，不见不散。",
        "aP": "hǎo a， yī qǐ qù ba。 wǒ men bā diǎn zài gōng sī mén kǒu jiàn miàn ba， bù jiàn bù sàn。",
        "hint": "[카테고리: 제안 수락] 영화 보러 가자는 제안에 응답하는 대화입니다.",
        "keywords": "电影票 (diànyǐngpiào), 一起 (yìqǐ), 看电影 (kàn diànyǐng)",
        "weight": 1
    },
    {
        "q": "我有两张票，周末一起去音乐会吧。",
        "qP": "Wǒ yǒu liǎng zhāng piào, zhōumò yìqǐ qù yīnyuèhuì ba.",
        "a": "好啊，一起去吧。我们八点在公司门口见面吧，不见不散。",
        "aP": "hǎo a， yī qǐ qù ba。 wǒ men bā diǎn zài gōng sī mén kǒu jiàn miàn ba， bù jiàn bù sàn。",
        "hint": "[카테고리: 제안 수락] 음악회에 같이 가자는 제안에 응답하는 대화입니다.",
        "keywords": "票 (piào), 周末 (zhōumò), 音乐会 (yīnyuèhuì)",
        "weight": 1
    },
    {
        "q": "咱们今天晚上打网球怎么样？",
        "qP": "Zánmen jīntiān wǎnshang dǎ wǎngqiú zěnmeyàng?",
        "a": "好啊，一起去吧。我们八点在公司门口见面吧，不见不散。",
        "aP": "hǎo a， yī qǐ qù ba。 wǒ men bā diǎn zài gōng sī mén kǒu jiàn miàn ba， bù jiàn bù sàn。",
        "hint": "[카테고리: 제안 수락] 저녁에 테니스를 치자는 제안에 응답하는 대화입니다.",
        "keywords": "今天晚上 (jīntiān wǎnshang), 打网球 (dǎ wǎngqiú), 怎么样 (zěnmeyàng)",
        "weight": 1
    },
    {
        "q": "你喜欢滑雪吗？我们一起去滑雪，怎么样？",
        "qP": "Nǐ xǐhuan huáxuě ma? Wǒmen yìqǐ qù huáxuě, zěnmeyàng?",
        "a": "不好意思，我最近很忙，需要准备很多资料，没有时间。下次吧。",
        "aP": "bù hǎo yì si， wǒ zuì jìn hěn máng， xū yào zhǔn bèi hěn duō zī liào， méi yǒu shí jiān。 xià cì ba。",
        "hint": "[카테고리: 제안 거절] 스키를 타러 가자는 제안을 정중히 거절하는 대화입니다.",
        "keywords": "喜欢 (xǐhuan), 滑雪 (huáxuě), 下次 (xià cì)",
        "weight": 1
    },
    {
        "q": "你下班以后有空吗？",
        "qP": "Nǐ xiàbān yǐhòu yǒu kòng ma?",
        "a": "不好意思，我最近很忙，需要准备很多资料，没有时间。下次吧。",
        "aP": "bù hǎo yì si， wǒ zuì jìn hěn máng， xū yào zhǔn bèi hěn duō zī liào， méi yǒu shí jiān。 xià cì ba。",
        "hint": "[카테고리: 시간 확인/제안] 퇴근 후 시간이 있는지 묻는 대화입니다.",
        "keywords": "下班以后 (xiàbān yǐhòu), 有空 (yǒu kòng), 喝咖啡 (hē kāfēi)",
        "weight": 1
    },
    {
        "q": "我有两张电影票，星期天你有空吗？",
        "qP": "Wǒ yǒu liǎng zhāng diànyǐngpiào, xīngqītiān nǐ yǒu kòng ma?",
        "a": "不好意思，我最近很忙，需要准备很多资料，没有时间。下次吧。",
        "aP": "bù hǎo yì si， wǒ zuì jìn hěn máng， xū yào zhǔn bèi hěn duō zī liào， méi yǒu shí jiān。 xià cì ba。",
        "hint": "[카테고리: 시간 확인/제안] 일요일에 영화 보러 가자는 상황의 대화입니다.",
        "keywords": "电影票 (diànyǐngpiào), 星期天 (xīngqītiān), 有空 (yǒu kòng)",
        "weight": 1
    },
    {
        "q": "我的腿很累，咱们休息一下吧。",
        "qP": "Wǒ de tuǐ hěn lèi, zánmen xiūxi yíxià ba.",
        "a": "好啊，累死了。我正好想喝水。这儿有椅子，我们休息一下吧。",
        "aP": "hǎo a， lèi sǐ le。 wǒ zhèng hǎo xiǎng hē shuǐ。 zhè ér yǒu yǐ zi， wǒ men xiū xī yī xià ba。",
        "hint": "[카테고리: 휴식 제안] 다리가 피곤해서 쉬자고 하는 대화입니다.",
        "keywords": "腿 (tuǐ), 累 (lèi), 休息一下 (xiūxi yíxià)",
        "weight": 1
    },
    {
        "q": "我们休息一会儿吧。",
        "qP": "Wǒmen xiūxi yíhuìr ba.",
        "a": "好啊，累死了。我正好想喝咖啡。我们去咖啡厅休息一下吧。",
        "aP": "hǎo a， lèi sǐ le。 wǒ zhèng hǎo xiǎng hē kā fēi。 wǒ men qù kāfēitīng xiū xī yī xià ba。",
        "hint": "[카테고리: 휴식 제안] 잠깐 쉬자는 제안에 응답하는 대화입니다.",
        "keywords": "休息一会儿 (xiūxi yíhuìr), 咖啡 (kāfēi), 好啊 (hǎo a)",
        "weight": 1
    },
    {
        "q": "我给你介绍一个美国朋友，怎么样？",
        "qP": "Wǒ gěi nǐ jièshào yí ge Měiguó péngyou, zěnmeyàng?",
        "a": "好啊，我正好想交朋友。他叫什么名字？我们八点在公司门口见面吧，不见不散。",
        "aP": "hǎo a， wǒ zhèng hǎo xiǎng jiāo péng yǒu。 tā jiào shén me míng zì？ wǒ men bā diǎn zài gōng sī mén kǒu jiàn miàn ba， bù jiàn bù sàn。",
        "hint": "[카테고리: 소개 제안] 미국 친구를 소개해 주겠다는 제안에 응답하는 대화입니다.",
        "keywords": "介绍 (jièshào), 美国朋友 (Měiguó péngyou), 认识 (rènshi)",
        "weight": 1
    },
    {
        "q": "听说今天下雨，我们改天去爬山吧。",
        "qP": "Tīngshuō jīntiān xià yǔ, wǒmen gǎi tiān qù pá shān ba.",
        "a": "真可惜，我们改天去吧。你周末有时间吗？星期六怎么样？",
        "aP": "zhēn kě xī， wǒ men gǎi tiān qù ba。 nǐ zhōu mò yǒu shí jiān ma？ xīngqīliù zěn me yàng？",
        "hint": "[카테고리: 일정 변경] 비 때문에 등산 일정을 바꾸는 대화입니다.",
        "keywords": "下雨 (xià yǔ), 改天 (gǎi tiān), 爬山 (pá shān)",
        "weight": 1
    },
    {
        "q": "你能帮我修改一下会议资料吗？",
        "qP": "Nǐ néng bāng wǒ xiūgǎi yíxià huìyì zīliào ma?",
        "a": "当然可以，没问题。我现在正好有时间，我帮你吧。",
        "aP": "dāng rán kě yǐ， méi wèn tí。 wǒ xiàn zài zhèng hǎo yǒu shí jiān， wǒ bāng nǐ ba。",
        "hint": "[카테고리: 부탁 수락] 회의 자료 수정을 도와달라는 부탁에 응답하는 대화입니다.",
        "keywords": "帮 (bāng), 修改 (xiūgǎi), 会议资料 (huìyì zīliào)",
        "weight": 1
    },
    {
        "q": "你会说汉语吗？能帮我翻译一下吗？",
        "qP": "Nǐ huì shuō Hànyǔ ma? Néng bāng wǒ fānyì yíxià ma?",
        "a": "当然可以，没问题。我现在正好有时间，我帮你吧。",
        "aP": "dāng rán kě yǐ， méi wèn tí。 wǒ xiàn zài zhèng hǎo yǒu shí jiān， wǒ bāng nǐ ba。",
        "hint": "[카테고리: 부탁 수락] 중국어 번역을 부탁하는 대화입니다.",
        "keywords": "汉语 (Hànyǔ), 翻译 (fānyì), 帮 (bāng)",
        "weight": 1
    },
    {
        "q": "你能帮我做作业吗？",
        "qP": "Nǐ néng bāng wǒ zuò zuòyè ma?",
        "a": "不好意思，我现在很忙，需要准备很多资料，没有时间，你找别人吧。",
        "aP": "bù hǎo yì si， wǒ xiàn zài hěn máng， xū yào zhǔn bèi hěn duō zī liào， méi yǒu shí jiān， nǐ zhǎo bié rén ba。",
        "hint": "[카테고리: 부탁 거절] 숙제를 도와달라는 부탁을 정중히 거절하는 대화입니다.",
        "keywords": "帮 (bāng), 做作业 (zuò zuòyè), 很忙 (hěn máng)",
        "weight": 1
    },
    {
        "q": "我的行李还没有出来，可以帮我找找吗？",
        "qP": "Wǒ de xíngli hái méiyǒu chūlái, kěyǐ bāng wǒ zhǎozhao ma?",
        "a": "不好意思，我现在很忙，需要准备很多资料，没有时间，你找别人吧。",
        "aP": "bù hǎo yì si， wǒ xiàn zài hěn máng， xū yào zhǔn bèi hěn duō zī liào， méi yǒu shí jiān， nǐ zhǎo bié rén ba。",
        "hint": "[카테고리: 부탁 수락] 나오지 않은 짐을 찾아달라는 부탁에 응답하는 대화입니다.",
        "keywords": "行李 (xíngli), 没有出来 (méiyǒu chūlái), 找找 (zhǎozhao)",
        "weight": 1
    },
    {
        "q": "你能帮我还书吗？",
        "qP": "Nǐ néng bāng wǒ huán shū ma?",
        "a": "不好意思，我现在很忙，需要准备很多资料，没有时间，你找别人吧。",
        "aP": "bù hǎo yì si， wǒ xiàn zài hěn máng， xū yào zhǔn bèi hěn duō zī liào， méi yǒu shí jiān， nǐ zhǎo bié rén ba。",
        "hint": "[카테고리: 부탁 수락] 책을 반납해 달라는 부탁에 응답하는 대화입니다.",
        "keywords": "帮 (bāng), 还书 (huán shū), 好的 (hǎo de)",
        "weight": 1
    },
    {
        "q": "周末朋友要来做客，你能帮我做菜吗？",
        "qP": "Zhōumò péngyou yào lái zuò kè, nǐ néng bāng wǒ zuò cài ma?",
        "a": "不好意思，我现在很忙，需要准备很多资料，没有时间，你找别人吧。",
        "aP": "bù hǎo yì si， wǒ xiàn zài hěn máng， xū yào zhǔn bèi hěn duō zī liào， méi yǒu shí jiān， nǐ zhǎo bié rén ba。",
        "hint": "[카테고리: 부탁 수락] 친구 방문 때문에 요리를 도와달라는 대화입니다.",
        "keywords": "周末 (zhōumò), 做客 (zuò kè), 做菜 (zuò cài)",
        "weight": 1
    },
    {
        "q": "上次你读了一本有意思的书，能借给我吗？",
        "qP": "Shàng cì nǐ dú le yì běn yǒu yìsi de shū, néng jiè gěi wǒ ma?",
        "a": "当然可以，没问题，我正好看完了。你需要的话，我借给你吧。",
        "aP": "dāng rán kě yǐ， méi wèn tí， wǒ zhèng hǎo kàn wán le。 nǐ xū yào de huà， wǒ jiè gěi nǐ ba。",
        "hint": "[카테고리: 부탁 수락] 재미있는 책을 빌려달라는 부탁에 응답하는 대화입니다.",
        "keywords": "有意思 (yǒu yìsi), 书 (shū), 借给 (jiè gěi)",
        "weight": 1
    },
    {
        "q": "我们中午一起去吃日本菜吧。",
        "qP": "Wǒmen zhōngwǔ yìqǐ qù chī Rìběn cài ba.",
        "a": "好啊，附近有一家餐厅，又便宜又干净，环境很好。一起去吧，我请客。",
        "aP": "hǎo a， fù jìn yǒu yī jiā cān tīng， yòu piányi yòu gān jìng， huán jìng hěn hǎo。 yī qǐ qù ba， wǒ qǐng kè。",
        "hint": "[카테고리: 식사 제안 수락] 점심에 일본 음식을 먹자는 제안에 응답하는 대화입니다.",
        "keywords": "中午 (zhōngwǔ), 日本菜 (Rìběn cài), 一起 (yìqǐ)",
        "weight": 1
    },
    {
        "q": "中午一起吃饭吧。",
        "qP": "Zhōngwǔ yìqǐ chī fàn ba.",
        "a": "好啊，附近有一家餐厅，又便宜又干净，环境很好。一起去吧，我请客。",
        "aP": "hǎo a， fù jìn yǒu yī jiā cān tīng， yòu piányi yòu gān jìng， huán jìng hěn hǎo。 yī qǐ qù ba， wǒ qǐng kè。",
        "hint": "[카테고리: 식사 제안 수락] 점심을 같이 먹자는 제안에 응답하는 대화입니다.",
        "keywords": "中午 (zhōngwǔ), 吃饭 (chī fàn), 餐厅 (cāntīng)",
        "weight": 1
    },
    {
        "q": "我们一起吃晚饭吧。",
        "qP": "Wǒmen yìqǐ chī wǎnfàn ba.",
        "a": "好啊，附近有一家餐厅，又便宜又干净，环境很好。一起去吧，我请客。",
        "aP": "hǎo a， fù jìn yǒu yī jiā cān tīng， yòu piányi yòu gān jìng， huán jìng hěn hǎo。 yī qǐ qù ba， wǒ qǐng kè。",
        "hint": "[카테고리: 식사 제안 수락] 저녁을 같이 먹자는 제안에 응답하는 대화입니다.",
        "keywords": "一起 (yìqǐ), 晚饭 (wǎnfàn), 去吧 (qù ba)",
        "weight": 1
    },
    {
        "q": "我们一起去吃面条吧。",
        "qP": "Wǒmen yìqǐ qù chī miàntiáo ba.",
        "a": "好啊，附近有一家餐厅，又便宜又干净，环境很好。一起去吧，我请客。",
        "aP": "hǎo a， fù jìn yǒu yī jiā cān tīng， yòu piányi yòu gān jìng， huán jìng hěn hǎo。 yī qǐ qù ba， wǒ qǐng kè。",
        "hint": "[카테고리: 식사 제안 수락] 국수를 먹으러 가자는 제안에 응답하는 대화입니다.",
        "keywords": "一起 (yìqǐ), 吃面条 (chī miàntiáo), 喜欢 (xǐhuan)",
        "weight": 1
    },
    {
        "q": "中午吃米饭还是面条？",
        "qP": "Zhōngwǔ chī mǐfàn háishì miàntiáo?",
        "a": "我想吃面条。附近有一个餐厅，又便宜又干净，环境很好。一起去吧，我请客。",
        "aP": "wǒ xiǎng chī miàn tiáo。 fù jìn yǒu yī gè cān tīng， yòu piányi yòu gān jìng， huán jìng hěn hǎo。 yī qǐ qù ba， wǒ qǐng kè。",
        "hint": "[카테고리: 음식 선택] 점심으로 밥과 국수 중 선택하는 대화입니다.",
        "keywords": "米饭 (mǐfàn), 面条 (miàntiáo), 餐厅 (cāntīng)",
        "weight": 1
    },
    {
        "q": "你喜欢吃面条吗？",
        "qP": "Nǐ xǐhuan chī miàntiáo ma?",
        "a": "我喜欢吃面条。附近有一个餐厅，又便宜又干净，环境很好。一起去吧，我请客。",
        "aP": "wǒ xǐ huān chī miàn tiáo。 fù jìn yǒu yī gè cān tīng， yòu piányi yòu gān jìng， huán jìng hěn hǎo。 yī qǐ qù ba， wǒ qǐng kè。",
        "hint": "[카테고리: 음식 취향] 국수를 좋아하는지 묻는 대화입니다.",
        "keywords": "喜欢 (xǐhuan), 吃面条 (chī miàntiáo), 经常 (jīngcháng)",
        "weight": 1
    },
    {
        "q": "我们星期几聚餐？",
        "qP": "Wǒmen xīngqī jǐ jùcān?",
        "a": "我们星期五聚餐。附近有一个餐厅，又便宜又干净，环境很好。一起去吧。",
        "aP": "wǒ men xīngqīwǔ jù cān。 fù jìn yǒu yī gè cān tīng， yòu piányi yòu gān jìng， huán jìng hěn hǎo。 yī qǐ qù ba。",
        "hint": "[카테고리: 식사 일정] 회식 요일을 정하는 대화입니다.",
        "keywords": "星期几 (xīngqī jǐ), 聚餐 (jùcān), 星期五 (xīngqīwǔ)",
        "weight": 1
    },
    {
        "q": "你要不要喝一杯咖啡？",
        "qP": "Nǐ yào bu yào hē yì bēi kāfēi?",
        "a": "好啊，我正好想喝咖啡。附近有一个咖啡厅，环境很好。一起去吧。",
        "aP": "hǎo a， wǒ zhèng hǎo xiǎng hē kā fēi。 fù jìn yǒu yī gè kāfēitīng， huán jìng hěn hǎo。 yī qǐ qù ba。",
        "hint": "[카테고리: 음료 제안 수락] 커피를 마시자는 제안에 응답하는 대화입니다.",
        "keywords": "要不要 (yào bu yào), 喝咖啡 (hē kāfēi), 一杯 (yì bēi)",
        "weight": 1
    },
    {
        "q": "我们要不要喝茶？",
        "qP": "Wǒmen yào bu yào hē chá?",
        "a": "好啊，我正好想喝茶。附近有一个咖啡厅，环境很好。一起去吧。",
        "aP": "hǎo a， wǒ zhèng hǎo xiǎng hē chá。 fù jìn yǒu yī gè kāfēitīng， huán jìng hěn hǎo。 yī qǐ qù ba。",
        "hint": "[카테고리: 음료 제안 수락] 차를 마시자는 제안에 응답하는 대화입니다.",
        "keywords": "要不要 (yào bu yào), 喝茶 (hē chá), 一起 (yìqǐ)",
        "weight": 1
    },
    {
        "q": "我们吃饭以后，一起去喝咖啡吧。",
        "qP": "Wǒmen chī fàn yǐhòu, yìqǐ qù hē kāfēi ba.",
        "a": "好啊，我正好想喝咖啡。吃完饭以后，我们一起去吧。",
        "aP": "hǎo a， wǒ zhèng hǎo xiǎng hē kā fēi。 chī wán fàn yǐ hòu， wǒ men yī qǐ qù ba。",
        "hint": "[카테고리: 식후 음료 제안] 식사 후 커피를 마시자는 제안에 응답하는 대화입니다.",
        "keywords": "吃饭以后 (chī fàn yǐhòu), 喝咖啡 (hē kāfēi), 正想 (zhèng xiǎng)",
        "weight": 1
    },
    {
        "q": "公司附近新开了一家餐厅/咖啡厅，我们一起去看看吧。",
        "qP": "Gōngsī fùjìn xīn kāi le yì jiā cāntīng/kāfēitīng, wǒmen yìqǐ qù kànkan ba.",
        "a": "好啊，附近有一个咖啡厅，又大又干净，环境很好。下次我们一起去吧。",
        "aP": "hǎo a， fù jìn yǒu yī gè kāfēitīng， yòu dà yòu gān jìng， huán jìng hěn hǎo。 xià cì wǒ men yī qǐ qù ba。",
        "hint": "[카테고리: 새 가게 제안] 회사 근처 새 식당이나 카페에 가보자는 대화입니다.",
        "keywords": "公司附近 (gōngsī fùjìn), 新开 (xīn kāi), 餐厅 (cāntīng), 咖啡厅 (kāfēitīng)",
        "weight": 1
    },
    {
        "q": "那儿有一家新开的咖啡厅，去那儿怎么样？",
        "qP": "Nàr yǒu yì jiā xīn kāi de kāfēitīng, qù nàr zěnmeyàng?",
        "a": "好啊，那里很近，环境很好。一起去吧。",
        "aP": "hǎo a， nà lǐ hěn jìn， huán jìng hěn hǎo。 yī qǐ qù ba。",
        "hint": "[카테고리: 새 카페 제안] 새로 생긴 카페에 가자는 제안에 응답하는 대화입니다.",
        "keywords": "新开的 (xīn kāi de), 咖啡厅 (kāfēitīng), 很近 (hěn jìn)",
        "weight": 1
    },
    {
        "q": "你平时在哪儿吃午饭？",
        "qP": "Nǐ píngshí zài nǎr chī wǔfàn?",
        "a": "我平时在公司食堂吃午饭，又便宜又方便。",
        "aP": "wǒ píng shí zài gōng sī shí táng chī wǔ fàn， yòu piányi yòu fāng biàn。",
        "hint": "[카테고리: 식사 장소] 평소 점심 먹는 장소에 대해 말하는 대화입니다.",
        "keywords": "平时 (píngshí), 吃午饭 (chī wǔfàn), 公司食堂 (gōngsī shítáng)",
        "weight": 1
    },
    {
        "q": "这里很安静，我们一起喝咖啡吧。",
        "qP": "Zhèlǐ hěn ānjìng, wǒmen yìqǐ hē kāfēi ba.",
        "a": "好啊，我们一起喝咖啡吧。这里很安静。",
        "aP": "hǎo a， wǒ men yī qǐ hē kā fēi ba。 zhè lǐ hěn ān jìng。",
        "hint": "[카테고리: 카페 제안 수락] 조용한 곳에서 커피를 마시자는 제안에 응답하는 대화입니다.",
        "keywords": "安静 (ānjìng), 一起 (yìqǐ), 喝咖啡 (hē kāfēi)",
        "weight": 1
    },
    {
        "q": "你饿不饿，要吃点儿面包吗？",
        "qP": "Nǐ è bu è, yào chī diǎnr miànbāo ma?",
        "a": "我有点儿饿。我要吃面包，还要喝水。",
        "aP": "wǒ yǒu diǎn ér è。 wǒ yào chī miàn bāo， hái yào hē shuǐ。",
        "hint": "[카테고리: 음식 제안 수락] 배고픈지 묻고 빵을 권하는 대화입니다.",
        "keywords": "饿 (è), 吃点儿 (chī diǎnr), 面包 (miànbāo)",
        "weight": 1
    },
    {
        "q": "大杯35块，小杯25块，您要喝什么？",
        "qP": "Dà bēi sānshíwǔ kuài, xiǎo bēi èrshíwǔ kuài, nín yào hē shénme?",
        "a": "我要大杯冰咖啡。请多加冰。",
        "aP": "wǒ yào dà bēi bīng kā fēi。 qǐng duō jiā bīng。",
        "hint": "[카테고리: 음료 주문] 음료 크기와 메뉴를 선택하는 대화입니다.",
        "keywords": "大杯 (dà bēi), 小杯 (xiǎo bēi), 冰咖啡 (bīng kāfēi)",
        "weight": 1
    },
    {
        "q": "你要吃面条还是米饭？",
        "qP": "Nǐ yào chī miàntiáo háishì mǐfàn?",
        "a": "我要吃面条。再来一杯水。",
        "aP": "wǒ yào chī miàn tiáo。 zài lái yī bēi shuǐ。",
        "hint": "[카테고리: 음식 선택] 기내식으로 국수와 밥 중 선택하는 대화입니다.",
        "keywords": "面条 (miàntiáo), 米饭 (mǐfàn), 水 (shuǐ)",
        "weight": 1
    },
    {
        "q": "你喜欢吃辣的吗？",
        "qP": "Nǐ xǐhuan chī là de ma?",
        "a": "我喜欢吃辣的，比如麻辣烫、麻辣火锅等。韩国菜也很好吃。",
        "aP": "wǒ xǐ huān chī là de， bǐ rú málàtàng、 má là huǒ guō děng。 Hánguó cài yě hěn hǎo chī。",
        "hint": "[카테고리: 음식 취향] 매운 음식을 좋아하는지 묻는 대화입니다.",
        "keywords": "喜欢 (xǐhuan), 辣的 (là de), 吃 (chī)",
        "weight": 1
    },
    {
        "q": "你喜欢吃甜的吗？",
        "qP": "Nǐ xǐhuan chī tián de ma?",
        "a": "我喜欢吃甜的，比如蛋糕、冰淇淋等。甜的很好吃，但是不能多吃。",
        "aP": "wǒ xǐ huān chī tián de， bǐ rú dàn gāo、 bīng qí lín děng。 tián de hěn hǎo chī， dàn shì bù néng duō chī。",
        "hint": "[카테고리: 음식 취향] 단 음식을 좋아하는지 묻는 대화입니다.",
        "keywords": "喜欢 (xǐhuan), 甜的 (tián de), 蛋糕 (dàngāo)",
        "weight": 1
    },
    {
        "q": "你平时喜欢做菜吗？",
        "qP": "Nǐ píngshí xǐhuan zuò cài ma?",
        "a": "我平时喜欢做菜。我做菜做得很好。我煮过麻辣烫、麻辣香锅等等。",
        "aP": "wǒ píng shí xǐ huān zuò cài。 wǒ zuò cài zuò de hěn hǎo。 wǒ zhǔ guò málàtàng、 málà xiāngguō děng děng。",
        "hint": "[카테고리: 요리 취향] 평소 요리하는 것을 좋아하는지 묻는 대화입니다.",
        "keywords": "平时 (píngshí), 做菜 (zuò cài), 常常 (chángcháng)",
        "weight": 1
    },
    {
        "q": "你的酒量怎么样？",
        "qP": "Nǐ de jiǔliàng zěnmeyàng?",
        "a": "我的酒量很好。我一般喝三瓶啤酒，喜欢喝酒。",
        "aP": "wǒ de jiǔ liàng hěn hǎo。 wǒ yī bān hē sān píng pí jiǔ， xǐ huān hē jiǔ。",
        "hint": "[카테고리: 음주 습관] 주량과 술 취향에 대해 말하는 대화입니다.",
        "keywords": "酒量 (jiǔliàng), 还可以 (hái kěyǐ), 啤酒 (píjiǔ)",
        "weight": 1
    },
    {
        "q": "你常买衣服吗？",
        "qP": "Nǐ cháng mǎi yīfu ma?",
        "a": "我常买衣服。附近有一个百货商店，又大又干净，环境很好。下次我们一起去吧。",
        "aP": "wǒ cháng mǎi yī fú。 fù jìn yǒu yī gè bǎihuò shāngdiàn， yòu dà yòu gān jìng， huán jìng hěn hǎo。 xià cì wǒ men yī qǐ qù ba。",
        "hint": "[카테고리: 생활/쇼핑 습관] 옷을 자주 사는지 묻는 대화입니다.",
        "keywords": "常买 (cháng mǎi), 衣服 (yīfu), 喜欢 (xǐhuan)",
        "weight": 1
    },
    {
        "q": "你经常去百货商店吗？",
        "qP": "Nǐ jīngcháng qù bǎihuò shāngdiàn ma?",
        "a": "我经常去百货商店。附近有一个百货商店，又大又干净，环境很好。下次我们一起去吧。",
        "aP": "wǒ jīng cháng qù bǎihuò shāngdiàn。 fù jìn yǒu yī gè bǎihuò shāngdiàn， yòu dà yòu gān jìng， huán jìng hěn hǎo。 xià cì wǒ men yī qǐ qù ba。",
        "hint": "[카테고리: 생활/쇼핑 장소] 백화점에 자주 가는지 묻는 대화입니다.",
        "keywords": "经常 (jīngcháng), 百货商店 (bǎihuò shāngdiàn), 干净 (gānjìng)",
        "weight": 1
    },
    {
        "q": "休假的时候，我们一起运动吧。",
        "qP": "Xiūjià de shíhou, wǒmen yìqǐ yùndòng ba.",
        "a": "好啊，附近有一个公园，又大又干净，环境很好。休假的时候，我们一起去吧。",
        "aP": "hǎo a， fù jìn yǒu yī gè gōng yuán， yòu dà yòu gān jìng， huán jìng hěn hǎo。 xiū jià de shí hòu， wǒ men yī qǐ qù ba。",
        "hint": "[카테고리: 생활/운동 제안] 휴가 때 같이 운동하자는 제안에 응답하는 대화입니다.",
        "keywords": "休假 (xiūjià), 一起 (yìqǐ), 运动 (yùndòng), 公园 (gōngyuán)",
        "weight": 1
    },
    {
        "q": "你喜欢看书吗？",
        "qP": "Nǐ xǐhuan kàn shū ma?",
        "a": "我喜欢看书，这是我的爱好。不但能放松心情，还能缓解压力，非常有意思。",
        "aP": "wǒ xǐ huān kàn shū， zhè shì wǒ de àihào。 bù dàn néng fàng sōng xīn qíng， hái néng huǎn jiě yā lì， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 취미/독서] 책 읽는 것을 좋아하는지 묻는 대화입니다.",
        "keywords": "喜欢 (xǐhuan), 看书 (kàn shū), 爱好 (àihào)",
        "weight": 1
    },
    {
        "q": "你平时经常拍照吗？",
        "qP": "Nǐ píngshí jīngcháng pāizhào ma?",
        "a": "我经常拍照，这是我的爱好。不但能放松心情，还能缓解压力，非常有意思。",
        "aP": "wǒ jīng cháng pāi zhào， zhè shì wǒ de àihào。 bù dàn néng fàng sōng xīn qíng， hái néng huǎn jiě yā lì， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 취미/사진] 평소 사진을 자주 찍는지 묻는 대화입니다.",
        "keywords": "平时 (píngshí), 经常 (jīngcháng), 拍照 (pāizhào)",
        "weight": 1
    },
    {
        "q": "你学过游泳吗？",
        "qP": "Nǐ xuéguo yóuyǒng ma?",
        "a": "我学过游泳，这是我的爱好。不但能放松心情，还能缓解压力，非常有意思。",
        "aP": "wǒ xué guò yóu yǒng， zhè shì wǒ de àihào。 bù dàn néng fàng sōng xīn qíng， hái néng huǎn jiě yā lì， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 취미/수영] 수영을 배운 적이 있는지 말하는 대화입니다.",
        "keywords": "学过 (xuéguo), 游泳 (yóuyǒng), 喜欢 (xǐhuan)",
        "weight": 1
    },
    {
        "q": "你是第一次学游泳吗？",
        "qP": "Nǐ shì dì yī cì xué yóuyǒng ma?",
        "a": "不是第一次。我以前学过游泳，这是我的爱好。",
        "aP": "bù shì dì yī cì。 wǒ yǐ qián xué guò yóu yǒng， zhè shì wǒ de àihào。",
        "hint": "[카테고리: 취미/수영 경험] 수영을 처음 배우는지 묻는 대화입니다.",
        "keywords": "第一次 (dì yī cì), 学游泳 (xué yóuyǒng), 以前 (yǐqián)",
        "weight": 1
    },
    {
        "q": "你会打乒乓球吗？",
        "qP": "Nǐ huì dǎ pīngpāngqiú ma?",
        "a": "我会打乒乓球，这是我的爱好。不但能放松心情，还能缓解压力，非常有意思。",
        "aP": "wǒ huì dǎ pīng pāng qiú， zhè shì wǒ de àihào。 bù dàn néng fàng sōng xīn qíng， hái néng huǎn jiě yā lì， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 취미/탁구] 탁구를 칠 줄 아는지 말하는 대화입니다.",
        "keywords": "会 (huì), 打乒乓球 (dǎ pīngpāngqiú), 一点儿 (yìdiǎnr)",
        "weight": 1
    },
    {
        "q": "你喜欢打保龄球吗？",
        "qP": "Nǐ xǐhuan dǎ bǎolíngqiú ma?",
        "a": "我喜欢打保龄球，这是我的爱好。不但能放松心情，还能缓解压力，非常有意思。",
        "aP": "wǒ xǐ huān dǎ bǎo líng qiú， zhè shì wǒ de àihào。 bù dàn néng fàng sōng xīn qíng， hái néng huǎn jiě yā lì， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 취미/볼링] 볼링을 좋아하는지 묻는 대화입니다.",
        "keywords": "喜欢 (xǐhuan), 保龄球 (bǎolíngqiú), 有意思 (yǒuyìsi)",
        "weight": 1
    },
    {
        "q": "你每天看报纸吗？",
        "qP": "Nǐ měitiān kàn bàozhǐ ma?",
        "a": "我每天看报纸，这是我的爱好。不但能放松心情，还能缓解压力，非常有意思。",
        "aP": "wǒ měi tiān kàn bào zhǐ， zhè shì wǒ de àihào。 bù dàn néng fàng sōng xīn qíng， hái néng huǎn jiě yā lì， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 생활/신문] 매일 신문을 읽는지 묻는 대화입니다.",
        "keywords": "每天 (měitiān), 看报纸 (kàn bàozhǐ), 习惯 (xíguàn)",
        "weight": 1
    },
    {
        "q": "你一般星期五晚上做什么？",
        "qP": "Nǐ yìbān xīngqīwǔ wǎnshang zuò shénme?",
        "a": "星期五晚上，我和家人一起，一边吃饭一边聊天，非常有意思。",
        "aP": "xīngqīwǔ wǎn shàng， wǒ hé jiā rén yī qǐ， yī biān chī fàn yī biān liáo tiān， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 생활/저녁 활동] 금요일 저녁에 무엇을 하는지 말하는 대화입니다.",
        "keywords": "星期五 (xīngqīwǔ), 晚上 (wǎnshang), 家人 (jiārén), 吃饭 (chīfàn)",
        "weight": 1
    },
    {
        "q": "你平时几点下班？",
        "qP": "Nǐ píngshí jǐ diǎn xiàbān?",
        "a": "我平时五点下班。下班以后，我和家人一起，一边吃饭一边聊天，非常有意思。",
        "aP": "wǒ píng shí wǔ diǎn xià bān。 xià bān yǐ hòu， wǒ hé jiā rén yī qǐ， yī biān chī fàn yī biān liáo tiān， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 생활/퇴근 시간] 평소 몇 시에 퇴근하는지 말하는 대화입니다.",
        "keywords": "平时 (píngshí), 几点 (jǐ diǎn), 下班 (xiàbān), 五点 (wǔ diǎn)",
        "weight": 1
    },
    {
        "q": "上个星期你做什么了？",
        "qP": "Shàng ge xīngqī nǐ zuò shénme le?",
        "a": "上个星期，我和家人一起，一边吃饭一边聊天，非常有意思。",
        "aP": "shàng gè xīng qī， wǒ hé jiā rén yī qǐ， yī biān chī fàn yī biān liáo tiān， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 생활/지난주 활동] 지난주에 무엇을 했는지 말하는 대화입니다.",
        "keywords": "上个星期 (shàng ge xīngqī), 做什么 (zuò shénme), 家人 (jiārén)",
        "weight": 1
    },
    {
        "q": "上个周末，你过得好吗？",
        "qP": "Shàng ge zhōumò, nǐ guò de hǎo ma?",
        "a": "上个周末，我和家人一起，一边吃饭一边聊天，非常有意思。",
        "aP": "shàng gè zhōu mò， wǒ hé jiā rén yī qǐ， yī biān chī fàn yī biān liáo tiān， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 생활/주말] 지난 주말을 잘 보냈는지 말하는 대화입니다.",
        "keywords": "周末 (zhōumò), 过得好 (guò de hǎo), 有意思 (yǒuyìsi)",
        "weight": 1
    },
    {
        "q": "你昨天做什么了？",
        "qP": "Nǐ zuótiān zuò shénme le?",
        "a": "昨天，我和家人一起，一边吃饭一边聊天，非常有意思。",
        "aP": "zuó tiān， wǒ hé jiā rén yī qǐ， yī biān chī fàn yī biān liáo tiān， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 생활/어제 활동] 어제 무엇을 했는지 말하는 대화입니다.",
        "keywords": "昨天 (zuótiān), 做什么 (zuò shénme), 家人 (jiārén)",
        "weight": 1
    },
    {
        "q": "一周中你最喜欢星期几？",
        "qP": "Yì zhōu zhōng nǐ zuì xǐhuan xīngqī jǐ?",
        "a": "我最喜欢星期六。因为星期六我和家人一起，一边吃饭一边聊天，非常有意思。",
        "aP": "wǒ zuì xǐ huān xīngqīliù。 yīn wèi xīngqīliù wǒ hé jiā rén yī qǐ， yī biān chī fàn yī biān liáo tiān， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 생활/요일 취향] 일주일 중 가장 좋아하는 요일을 말하는 대화입니다.",
        "keywords": "一周中 (yì zhōu zhōng), 最喜欢 (zuì xǐhuan), 星期六 (xīngqīliù)",
        "weight": 1
    },
    {
        "q": "圣诞节你打算怎么过？",
        "qP": "Shèngdànjié nǐ dǎsuàn zěnme guò?",
        "a": "我打算和家人一起，一边吃饭一边聊天，一定非常有意思。",
        "aP": "wǒ dǎ suàn hé jiā rén yī qǐ， yī biān chī fàn yī biān liáo tiān， yī dìng fēi cháng yǒu yì si。",
        "hint": "[카테고리: 생활/성탄절 계획] 성탄절을 어떻게 보낼지 말하는 대화입니다.",
        "keywords": "圣诞节 (Shèngdànjié), 打算 (dǎsuàn), 家人 (jiārén), 吃饭 (chīfàn)",
        "weight": 1
    },
    {
        "q": "我们看这部电影怎么样？",
        "qP": "Wǒmen kàn zhè bù diànyǐng zěnmeyàng?",
        "a": "好啊，听说这部电影又浪漫又感动，非常有意思。我们一起看吧。",
        "aP": "hǎo a， tīng shuō zhè bù diàn yǐng yòu làng màn yòu gǎn dòng， fēi cháng yǒu yì si。 wǒ men yī qǐ kàn ba。",
        "hint": "[카테고리: 영화/제안 수락] 이 영화를 보자는 제안에 응답하는 대화입니다.",
        "keywords": "电影 (diànyǐng), 怎么样 (zěnmeyàng), 有意思 (yǒuyìsi)",
        "weight": 1
    },
    {
        "q": "你想看几点的电影？",
        "qP": "Nǐ xiǎng kàn jǐ diǎn de diànyǐng?",
        "a": "我想看八点的电影。听说这部电影又浪漫又感动，非常有意思。我们一起看吧。",
        "aP": "wǒ xiǎng kàn bā diǎn de diàn yǐng。 tīng shuō zhè bù diàn yǐng yòu làng màn yòu gǎn dòng， fēi cháng yǒu yì si。 wǒ men yī qǐ kàn ba。",
        "hint": "[카테고리: 영화/시간 선택] 몇 시 영화를 볼지 말하는 대화입니다.",
        "keywords": "想看 (xiǎng kàn), 几点 (jǐ diǎn), 八点 (bā diǎn), 电影 (diànyǐng)",
        "weight": 1
    },
    {
        "q": "电影有意思吗？",
        "qP": "Diànyǐng yǒu yìsi ma?",
        "a": "我觉得非常有意思，又浪漫又感动。你觉得有意思吗？",
        "aP": "wǒ juéde fēi cháng yǒu yì si， yòu làng màn yòu gǎn dòng。 nǐ juéde yǒu yì si ma？",
        "hint": "[카테고리: 영화/감상] 영화가 재미있었는지 말하는 대화입니다.",
        "keywords": "电影 (diànyǐng), 有意思 (yǒuyìsi), 觉得 (juéde)",
        "weight": 1
    },
    {
        "q": "你想买什么？",
        "qP": "Nǐ xiǎng mǎi shénme?",
        "a": "我要买今年的新款，送给我爱人。你觉得哪一个最好？推荐一下吧。",
        "aP": "wǒ yào mǎi jīn nián de xīn kuǎn， sòng gěi wǒ ài rén。 nǐ juéde nǎ yī gè zuì hǎo？ tuī jiàn yī xià ba。",
        "hint": "[카테고리: 쇼핑/추천 요청] 운동복가게에서 무엇을 살지 말하는 대화입니다.",
        "keywords": "想买 (xiǎng mǎi), 新款 (xīnkuǎn), 推荐 (tuījiàn)",
        "weight": 1
    },
    {
        "q": "你要买什么样的自行车/手机？",
        "qP": "Nǐ yào mǎi shénme yàng de zìxíngchē/shǒujī?",
        "a": "我要买今年的新款，送给我爱人。你觉得哪一个最好？推荐一下吧。",
        "aP": "wǒ yào mǎi jīn nián de xīn kuǎn， sòng gěi wǒ ài rén。 nǐ juéde nǎ yī gè zuì hǎo？ tuī jiàn yī xià ba。",
        "hint": "[카테고리: 쇼핑/추천 요청] 자전거나 휴대폰 종류를 묻는 대화입니다.",
        "keywords": "自行车 (zìxíngchē), 手机 (shǒujī), 新的 (xīn de), 推荐 (tuījiàn)",
        "weight": 1
    },
    {
        "q": "你想买什么颜色的包？",
        "qP": "Nǐ xiǎng mǎi shénme yánsè de bāo?",
        "a": "我想买黑色的包。你觉得哪一个最好？推荐一下吧。",
        "aP": "wǒ xiǎng mǎi hēi sè de bāo。 nǐ juéde nǎ yī gè zuì hǎo？ tuī jiàn yī xià ba。",
        "hint": "[카테고리: 쇼핑/색상 선택] 가방 색상을 선택하는 대화입니다.",
        "keywords": "颜色 (yánsè), 包 (bāo), 黑色 (hēisè)",
        "weight": 1
    },
    {
        "q": "你是自己骑还是送人？",
        "qP": "Nǐ shì zìjǐ qí háishì sòng rén?",
        "a": "我想送给我爱人。你觉得哪一个最好？推荐一下吧。",
        "aP": "wǒ xiǎng sòng gěi wǒ ài rén。 nǐ juéde nǎ yī gè zuì hǎo？ tuī jiàn yī xià ba。",
        "hint": "[카테고리: 쇼핑/선물 용도] 직접 탈 것인지 선물할 것인지 말하는 대화입니다.",
        "keywords": "自己 (zìjǐ), 送人 (sòng rén), 爱人 (àiren)",
        "weight": 1
    },
    {
        "q": "我们商店正在打折，请进来看看吧。",
        "qP": "Wǒmen shāngdiàn zhèngzài dǎzhé, qǐng jìnlái kànkan ba.",
        "a": "好啊，我进去看看。",
        "aP": "hǎo a， wǒ jìn qù kàn kàn。",
        "hint": "[카테고리: 쇼핑/할인] 할인 중인 가게에 들어가 보는 대화입니다.",
        "keywords": "商店 (shāngdiàn), 打折 (dǎzhé), 看看 (kànkan)",
        "weight": 1
    },
    {
        "q": "你要买黑色的还是白色的？",
        "qP": "Nǐ yào mǎi hēisè de háishì báisè de?",
        "a": "我想买黑色的。请推荐一下吧。",
        "aP": "wǒ xiǎng mǎi hēi sè de。 qǐng tuī jiàn yī xià ba。",
        "hint": "[카테고리: 쇼핑/색상 선택] 검정색과 흰색 중 선택하는 대화입니다.",
        "keywords": "黑色 (hēisè), 白色 (báisè), 买 (mǎi)",
        "weight": 1
    },
    {
        "q": "今天的西瓜很甜，进来买一点儿吧。",
        "qP": "Jīntiān de xīguā hěn tián, jìnlái mǎi yìdiǎnr ba.",
        "a": "西瓜看起来很新鲜。能尝尝吗？你觉得哪一个最好？推荐一下吧。",
        "aP": "xī guā kàn qǐ lái hěn xīn xiān。 néng cháng cháng ma？ nǐ juéde nǎ yī gè zuì hǎo？ tuī jiàn yī xià ba。",
        "hint": "[카테고리: 쇼핑/과일 구매] 수박을 권하는 말에 응답하는 대화입니다.",
        "keywords": "西瓜 (xīguā), 甜 (tián), 新鲜 (xīnxiān), 买 (mǎi)",
        "weight": 1
    },
    {
        "q": "你要的手机都卖完了。",
        "qP": "Nǐ yào de shǒujī dōu mài wán le.",
        "a": "真可惜，有别的款式吗？你觉得哪个最好？推荐一下吧。",
        "aP": "zhēn kě xī， yǒu bié de kuǎn shì ma？ nǐ juéde nǎ gè zuì hǎo？ tuī jiàn yī xià ba。",
        "hint": "[카테고리: 쇼핑/품절] 원하는 휴대폰이 품절된 상황에 응답하는 대화입니다.",
        "keywords": "手机 (shǒujī), 卖完 (mài wán), 别的款式 (bié de kuǎnshì)",
        "weight": 1
    },
    {
        "q": "你要的皮鞋款式都卖完了。",
        "qP": "Nǐ yào de píxié kuǎnshì dōu mài wán le.",
        "a": "真可惜，有别的款式吗？你觉得哪个最好？推荐一下吧。",
        "aP": "zhēn kě xī， yǒu bié de kuǎn shì ma？ nǐ juéde nǎ gè zuì hǎo？ tuī jiàn yī xià ba。",
        "hint": "[카테고리: 쇼핑/품절] 원하는 구두 스타일이 품절된 상황에 응답하는 대화입니다.",
        "keywords": "皮鞋 (píxié), 款式 (kuǎnshì), 卖完 (mài wán)",
        "weight": 1
    },
    {
        "q": "你要的颜色卖光了。",
        "qP": "Nǐ yào de yánsè mài guāng le.",
        "a": "真可惜，有别的颜色吗？你觉得哪个最好？推荐一下吧。",
        "aP": "zhēn kě xī， yǒu bié de yán sè ma？ nǐ juéde nǎ gè zuì hǎo？ tuī jiàn yī xià ba。",
        "hint": "[카테고리: 쇼핑/품절] 원하는 색상이 품절된 상황에 응답하는 대화입니다.",
        "keywords": "颜色 (yánsè), 卖光 (mài guāng), 别的颜色 (bié de yánsè)",
        "weight": 1
    },
    {
        "q": "你要借的书没有了。",
        "qP": "Nǐ yào jiè de shū méiyǒu le.",
        "a": "真可惜，有别的书吗？你觉得哪个最好？推荐一下吧。",
        "aP": "zhēn kě xī， yǒu bié de shū ma？ nǐ juéde nǎ gè zuì hǎo？ tuī jiàn yī xià ba。",
        "hint": "[카테고리: 쇼핑/도서관 품절] 빌리려는 책이 없는 상황에 응답하는 대화입니다.",
        "keywords": "借书 (jiè shū), 没有 (méiyǒu), 别的书 (bié de shū)",
        "weight": 1
    },
    {
        "q": "苹果没有了，你买别的水果吧。",
        "qP": "Píngguǒ méiyǒu le, nǐ mǎi bié de shuǐguǒ ba.",
        "a": "真可惜，有别的水果吗？你觉得哪个最好？推荐一下吧。",
        "aP": "zhēn kě xī， yǒu bié de shuǐ guǒ ma？ nǐ juéde nǎ gè zuì hǎo？ tuī jiàn yī xià ba。",
        "hint": "[카테고리: 쇼핑/대체 구매] 사과가 없어 다른 과일을 고르는 대화입니다.",
        "keywords": "苹果 (píngguǒ), 水果 (shuǐguǒ), 真可惜 (zhēn kěxī)",
        "weight": 1
    },
    {
        "q": "西瓜没有了，给你苹果可以吗？",
        "qP": "Xīguā méiyǒu le, gěi nǐ píngguǒ kěyǐ ma?",
        "a": "可以。苹果怎么卖？你觉得哪个最好？推荐一下吧。",
        "aP": "kě yǐ。 píng guǒ zěn me mài？ nǐ juéde nǎ gè zuì hǎo？ tuī jiàn yī xià ba。",
        "hint": "[카테고리: 쇼핑/대체 구매] 수박 대신 사과를 받을지 말하는 대화입니다.",
        "keywords": "西瓜 (xīguā), 苹果 (píngguǒ), 可以 (kěyǐ)",
        "weight": 1
    },
    {
        "q": "你的手机用多久了？",
        "qP": "Nǐ de shǒujī yòng duō jiǔ le?",
        "a": "用了三年，时间很长。",
        "aP": "yòng le sān nián， shí jiān hěn cháng。",
        "hint": "[카테고리: 쇼핑/사용 기간] 휴대폰을 얼마나 오래 사용했는지 말하는 대화입니다.",
        "keywords": "手机 (shǒujī), 用多久 (yòng duō jiǔ), 三年 (sān nián)",
        "weight": 1
    },
    {
        "q": "你的笔记本电脑什么时候买的？",
        "qP": "Nǐ de bǐjìběn diànnǎo shénme shíhou mǎi de?",
        "a": "昨天买的，这是今年的新款，不但质量很好，而且非常漂亮。我很满意。",
        "aP": "zuó tiān mǎi de， zhè shì jīn nián de xīn kuǎn， bù dàn zhì liàng hěn hǎo， ér qiě fēi cháng piào liàng。 wǒ hěn mǎn yì。",
        "hint": "[카테고리: 쇼핑/구매 시기] 노트북을 언제 샀는지 말하는 대화입니다.",
        "keywords": "笔记本电脑 (bǐjìběn diànnǎo), 什么时候 (shénme shíhou), 昨天 (zuótiān)",
        "weight": 1
    },
    {
        "q": "你的鞋子是什么时候买的？",
        "qP": "Nǐ de xiézi shì shénme shíhou mǎi de?",
        "a": "昨天买的，这是今年的新款，不但质量很好，而且非常漂亮。我很满意。",
        "aP": "zuó tiān mǎi de， zhè shì jīn nián de xīn kuǎn， bù dàn zhì liàng hěn hǎo， ér qiě fēi cháng piào liàng。 wǒ hěn mǎn yì。",
        "hint": "[카테고리: 쇼핑/구매 시기] 신발을 언제 샀는지 말하는 대화입니다.",
        "keywords": "鞋子 (xiézi), 什么时候 (shénme shíhou), 满意 (mǎnyì)",
        "weight": 1
    },
    {
        "q": "这辆自行车是什么时候买的？",
        "qP": "Zhè liàng zìxíngchē shì shénme shíhou mǎi de?",
        "a": "昨天买的，这是今年的新款，不但质量很好，而且非常漂亮。我很满意。",
        "aP": "zuó tiān mǎi de， zhè shì jīn nián de xīn kuǎn， bù dàn zhì liàng hěn hǎo， ér qiě fēi cháng piào liàng。 wǒ hěn mǎn yì。",
        "hint": "[카테고리: 쇼핑/구매 시기] 자전거를 언제 샀는지 말하는 대화입니다.",
        "keywords": "自行车 (zìxíngchē), 什么时候 (shénme shíhou), 骑 (qí)",
        "weight": 1
    },
    {
        "q": "那是新买的包吗？很漂亮！",
        "qP": "Nà shì xīn mǎi de bāo ma? Hěn piàoliang!",
        "a": "是的，昨天买的。这是今年的新款，不但质量很好，而且非常漂亮。我很满意。",
        "aP": "shì de， zuó tiān mǎi de。 zhè shì jīn nián de xīn kuǎn， bù dàn zhì liàng hěn hǎo， ér qiě fēi cháng piào liàng。 wǒ hěn mǎn yì。",
        "hint": "[카테고리: 쇼핑/칭찬 반응] 새 가방을 칭찬받았을 때 응답하는 대화입니다.",
        "keywords": "新买 (xīn mǎi), 包 (bāo), 漂亮 (piàoliang)",
        "weight": 1
    },
    {
        "q": "你有自行车吗？",
        "qP": "Nǐ yǒu zìxíngchē ma?",
        "a": "有。昨天买的，这是今年的新款，不但质量很好，而且非常漂亮。我很满意。",
        "aP": "yǒu。 zuó tiān mǎi de， zhè shì jīn nián de xīn kuǎn， bù dàn zhì liàng hěn hǎo， ér qiě fēi cháng piào liàng。 wǒ hěn mǎn yì。",
        "hint": "[카테고리: 쇼핑/소유 여부] 자전거가 있는지 묻는 대화입니다.",
        "keywords": "自行车 (zìxíngchē), 有 (yǒu), 昨天 (zuótiān)",
        "weight": 1
    },
    {
        "q": "我买的裤子太长了，怎么办？",
        "qP": "Wǒ mǎi de kùzi tài cháng le, zěnme bàn?",
        "a": "什么时候买的？能不能退款？不能退款的话，你买新的吧。",
        "aP": "shén me shí hòu mǎi de？ néng bù néng tuì kuǎn？ bù néng tuì kuǎn de huà， nǐ mǎi xīn de ba。",
        "hint": "[카테고리: 쇼핑/교환 환불] 산 바지가 너무 길 때 해결 방법을 말하는 대화입니다.",
        "keywords": "裤子 (kùzi), 太长 (tài cháng), 退款 (tuìkuǎn), 新的 (xīn de)",
        "weight": 1
    },
    {
        "q": "朋友要结婚了，送什么礼物好呢？",
        "qP": "Péngyou yào jiéhūn le, sòng shénme lǐwù hǎo ne?",
        "a": "送红包吧。可以用红包买需要的东西，想买什么就买什么。",
        "aP": "sòng hóng bāo ba。 kě yǐ yòng hóng bāo mǎi xū yào de dōng xī， xiǎng mǎi shén me jiù mǎi shén me。",
        "hint": "[카테고리: 선물/추천] 결혼 선물을 추천하는 대화입니다.",
        "keywords": "朋友 (péngyou), 结婚 (jiéhūn), 礼物 (lǐwù), 红包 (hóngbāo)",
        "weight": 1
    },
    {
        "q": "听说金代理住院了，我们去看望他，送他什么礼物好呢？",
        "qP": "Tīngshuō Jīn dàilǐ zhùyuàn le, wǒmen qù kànwàng tā, sòng tā shénme lǐwù hǎo ne?",
        "a": "送花怎么样？他会喜欢的。",
        "aP": "sòng huā zěn me yàng？ tā huì xǐ huān de。",
        "hint": "[카테고리: 선물/병문안] 병문안 선물을 추천하는 대화입니다.",
        "keywords": "住院 (zhùyuàn), 看望 (kànwàng), 礼物 (lǐwù), 花 (huā)",
        "weight": 1
    },
    {
        "q": "今天是什么特别的日子吗？",
        "qP": "Jīntiān shì shénme tèbié de rìzi ma?",
        "a": "今天是我爱人的生日，我准备了礼物，送给我爱人，想给他一个惊喜。",
        "aP": "jīn tiān shì wǒ ài rén de shēng rì， wǒ zhǔn bèi le lǐ wù， sòng gěi wǒ ài rén， xiǎng gěi tā yī gè jīng xǐ。",
        "hint": "[카테고리: 선물/특별한 날] 특별한 날과 선물을 말하는 대화입니다.",
        "keywords": "特别的日子 (tèbié de rìzi), 爱人 (àiren), 生日 (shēngrì), 礼物 (lǐwù)",
        "weight": 1
    },
    {
        "q": "你在给谁写信？",
        "qP": "Nǐ zài gěi shéi xiě xìn?",
        "a": "我在给朋友写信。明天是我朋友的生日，我想给他一个惊喜。",
        "aP": "wǒ zài gěi péng yǒu xiě xìn。 míng tiān shì wǒ péng yǒu de shēng rì， wǒ xiǎng gěi tā yī gè jīng xǐ。",
        "hint": "[카테고리: 기타/편지] 누구에게 편지를 쓰는지 말하는 대화입니다.",
        "keywords": "给谁 (gěi shéi), 写信 (xiě xìn), 朋友 (péngyou)",
        "weight": 1
    },
    {
        "q": "你有会员卡吗？",
        "qP": "Nǐ yǒu huìyuánkǎ ma?",
        "a": "我有会员卡，我是常客，经常在这儿买东西，可以打折吗？",
        "aP": "wǒ yǒu huì yuán kǎ， wǒ shì cháng kè， jīng cháng zài zhè ér mǎi dōng xī， kě yǐ dǎ zhé ma？",
        "hint": "[카테고리: 쇼핑/회원카드] 상점에서 회원카드가 있는지 묻는 대화입니다.",
        "keywords": "会员卡 (huìyuánkǎ), 常客 (chángkè), 打折 (dǎzhé)",
        "weight": 1
    },
    {
        "q": "你今天工作忙吗？",
        "qP": "Nǐ jīntiān gōngzuò máng ma?",
        "a": "别提了，我最近工作很忙，每天加班，需要准备很多资料。累死了。",
        "aP": "bié tí le， wǒ zuì jìn gōng zuò hěn máng， měi tiān jiā bān， xū yào zhǔn bèi hěn duō zī liào。 lèi sǐ le。",
        "hint": "[카테고리: 업무/바쁨] 오늘 일이 바쁜지 묻는 대화입니다.",
        "keywords": "今天 (jīntiān), 工作 (gōngzuò), 忙 (máng), 加班 (jiābān)",
        "weight": 1
    },
    {
        "q": "你们部门最近忙吗？",
        "qP": "Nǐmen bùmén zuìjìn máng ma?",
        "a": "别提了，我最近工作很忙，每天加班，需要准备很多资料。累死了。",
        "aP": "bié tí le， wǒ zuì jìn gōng zuò hěn máng， měi tiān jiā bān， xū yào zhǔn bèi hěn duō zī liào。 lèi sǐ le。",
        "hint": "[카테고리: 업무/부서] 부서가 요즘 바쁜지 묻는 대화입니다.",
        "keywords": "部门 (bùmén), 最近 (zuìjìn), 忙 (máng), 资料 (zīliào)",
        "weight": 1
    },
    {
        "q": "你平时工作很忙吗？",
        "qP": "Nǐ píngshí gōngzuò hěn máng ma?",
        "a": "别提了，我最近工作很忙，每天加班，需要准备很多资料。累死了。",
        "aP": "bié tí le， wǒ zuì jìn gōng zuò hěn máng， měi tiān jiā bān， xū yào zhǔn bèi hěn duō zī liào。 lèi sǐ le。",
        "hint": "[카테고리: 업무/평소 바쁨] 평소 일이 바쁜지 묻는 대화입니다.",
        "keywords": "平时 (píngshí), 工作 (gōngzuò), 忙 (máng), 加班 (jiābān)",
        "weight": 1
    },
    {
        "q": "昨天加班了吗？",
        "qP": "Zuótiān jiābān le ma?",
        "a": "别提了，我最近工作很忙，每天加班，需要准备很多资料。累死了。",
        "aP": "bié tí le， wǒ zuì jìn gōng zuò hěn máng， měi tiān jiā bān， xū yào zhǔn bèi hěn duō zī liào。 lèi sǐ le。",
        "hint": "[카테고리: 업무/야근] 어제 야근했는지 묻는 대화입니다.",
        "keywords": "昨天 (zuótiān), 加班 (jiābān), 工作 (gōngzuò)",
        "weight": 1
    },
    {
        "q": "时间太晚了，你怎么还不下班呢？",
        "qP": "Shíjiān tài wǎn le, nǐ zěnme hái bù xiàbān ne?",
        "a": "我最近工作很忙，每天加班，需要准备很多资料。累死了。",
        "aP": "wǒ zuì jìn gōng zuò hěn máng， měi tiān jiā bān， xū yào zhǔn bèi hěn duō zī liào。 lèi sǐ le。",
        "hint": "[카테고리: 업무/퇴근 지연] 시간이 늦었는데 아직 퇴근하지 못한 이유를 말하는 대화입니다.",
        "keywords": "时间 (shíjiān), 晚 (wǎn), 下班 (xiàbān), 资料 (zīliào)",
        "weight": 1
    },
    {
        "q": "你几点回家？",
        "qP": "Nǐ jǐ diǎn huí jiā?",
        "a": "我打算九点回家。我最近工作很忙，每天加班，需要准备很多资料。累死了。",
        "aP": "wǒ dǎ suàn jiǔ diǎn huí jiā。 wǒ zuì jìn gōng zuò hěn máng， měi tiān jiā bān， xū yào zhǔn bèi hěn duō zī liào。 lèi sǐ le。",
        "hint": "[카테고리: 업무/퇴근 시간] 몇 시에 집에 가는지 말하는 대화입니다.",
        "keywords": "几点 (jǐ diǎn), 回家 (huí jiā), 九点 (jiǔ diǎn), 忙 (máng)",
        "weight": 1
    },
    {
        "q": "明天的报告，你准备好了吗？",
        "qP": "Míngtiān de bàogào, nǐ zhǔnbèi hǎo le ma?",
        "a": "还没准备好。我最近工作很忙，每天加班，需要准备很多资料。累死了。",
        "aP": "hái méi zhǔn bèi hǎo。 wǒ zuì jìn gōng zuò hěn máng， měi tiān jiā bān， xū yào zhǔn bèi hěn duō zī liào。 lèi sǐ le。",
        "hint": "[카테고리: 업무/보고서 준비] 내일 보고서 준비 여부를 묻는 대화입니다.",
        "keywords": "明天 (míngtiān), 报告 (bàogào), 准备好 (zhǔnbèi hǎo)",
        "weight": 1
    },
    {
        "q": "我今天也要加班。",
        "qP": "Wǒ jīntiān yě yào jiābān.",
        "a": "真的吗？你最近工作很忙，每天加班，需要准备很多资料吗？我帮你吧。",
        "aP": "zhēn de ma？ nǐ zuì jìn gōng zuò hěn máng， měi tiān jiā bān， xū yào zhǔn bèi hěn duō zī liào ma？ wǒ bāng nǐ ba。",
        "hint": "[카테고리: 업무/도움 제안] 상대방이 야근해야 한다는 말에 도움을 제안하는 대화입니다.",
        "keywords": "今天 (jīntiān), 加班 (jiābān), 帮 (bāng)",
        "weight": 1
    },
    {
        "q": "今天的会议几点开始？",
        "qP": "Jīntiān de huìyì jǐ diǎn kāishǐ?",
        "a": "会议三点开始，在七层会议室。需要准备很多资料，累死了。",
        "aP": "huì yì sān diǎn kāi shǐ， zài qī céng huìyìshì。 xū yào zhǔn bèi hěn duō zī liào， lèi sǐ le。",
        "hint": "[카테고리: 회사/회의] 회의 시작 시간과 장소를 말하는 대화입니다.",
        "keywords": "会议 (huìyì), 三点 (sān diǎn), 七楼 (qī lóu), 会议室 (huìyìshì)",
        "weight": 1
    },
    {
        "q": "你去外国出过差吗？",
        "qP": "Nǐ qù wàiguó chū guo chāi ma?",
        "a": "我去中国出过差，和中国客户一起开会，工作很忙，累死了。",
        "aP": "wǒ qù Zhōngguó chū guò chāi， hé Zhōngguó kè hù yī qǐ kāi huì， gōng zuò hěn máng， lèi sǐ le。",
        "hint": "[카테고리: 회사/출장 경험] 해외 출장 경험을 묻는 대화입니다.",
        "keywords": "外国 (wàiguó), 出差 (chūchāi), 中国 (Zhōngguó)",
        "weight": 1
    },
    {
        "q": "你去过中国吗？",
        "qP": "Nǐ qùguo Zhōngguó ma?",
        "a": "我去过中国。中国客户很亲切。",
        "aP": "wǒ qù guò Zhōngguó。 Zhōngguó kè hù hěn qīn qiè。",
        "hint": "[카테고리: 회사/출장 경험] 중국에 가 본 경험을 묻는 대화입니다.",
        "keywords": "中国 (Zhōngguó), 去过 (qùguo), 出差 (chūchāi)",
        "weight": 1
    },
    {
        "q": "你从什么时候开始第一天上班的？",
        "qP": "Nǐ cóng shénme shíhou kāishǐ dì yī tiān shàngbān de?",
        "a": "我从昨天开始上班的。同事们经常帮助我，我一定努力工作。",
        "aP": "wǒ cóng zuó tiān kāi shǐ shàng bān de。 tóng shì men jīng cháng bāng zhù wǒ， wǒ yī dìng nǔ lì gōng zuò。",
        "hint": "[카테고리: 회사/첫 출근] 첫 출근 시점을 말하는 대화입니다.",
        "keywords": "什么时候 (shénme shíhou), 昨天 (zuótiān), 上班 (shàngbān)",
        "weight": 1
    },
    {
        "q": "你从什么时候开始可以上班？",
        "qP": "Nǐ cóng shénme shíhou kāishǐ kěyǐ shàngbān?",
        "a": "我马上可以上班。我已经准备好了。如果有机会的话，一定努力工作！",
        "aP": "wǒ mǎ shàng kě yǐ shàng bān。 wǒ yǐ jīng zhǔn bèi hǎo le。 rú guǒ yǒu jī huì de huà， yī dìng nǔ lì gōng zuò！",
        "hint": "[카테고리: 회사/출근 가능] 언제부터 출근 가능한지 묻는 대화입니다.",
        "keywords": "明天 (míngtiān), 上班 (shàngbān), 准备好 (zhǔnbèi hǎo)",
        "weight": 1
    },
    {
        "q": "这次面试准备好了吗？",
        "qP": "Zhè cì miànshì zhǔnbèi hǎo le ma?",
        "a": "已经准备好了。我平时很努力，一定没问题！但是我很紧张，给我加油。",
        "aP": "yǐ jīng zhǔn bèi hǎo le。 wǒ píng shí hěn nǔ lì， yī dìng méi wèn tí！ dàn shì wǒ hěn jǐn zhāng， gěi wǒ jiā yóu。",
        "hint": "[카테고리: 시험/면접] 면접 준비 상태를 묻는 대화입니다.",
        "keywords": "面试 (miànshì), 准备好 (zhǔnbèi hǎo), 紧张 (jǐnzhāng)",
        "weight": 1
    },
    {
        "q": "你的考试成绩怎么样？",
        "qP": "Nǐ de kǎoshì chéngjì zěnmeyàng?",
        "a": "别提了，这次考试很难，而且考试的时候，我很紧张，考砸了。",
        "aP": "bié tí le， zhè cì kǎo shì hěn nán， ér qiě kǎo shì de shí hòu， wǒ hěn jǐn zhāng， kǎo zá le。",
        "hint": "[카테고리: 시험/성적] 시험 성적에 대해 말하는 대화입니다.",
        "keywords": "考试成绩 (kǎoshì chéngjì), 怎么样 (zěnmeyàng), 不错 (búcuò)",
        "weight": 1
    },
    {
        "q": "今天的考试很容易，你觉得呢？",
        "qP": "Jīntiān de kǎoshì hěn róngyì, nǐ juéde ne?",
        "a": "别提了，这次考试很难，而且考试的时候，我很紧张，考砸了。",
        "aP": "bié tí le， zhè cì kǎo shì hěn nán， ér qiě kǎo shì de shí hòu， wǒ hěn jǐn zhāng， kǎo zá le。",
        "hint": "[카테고리: 시험/의견] 시험 난이도에 대해 말하는 대화입니다.",
        "keywords": "考试 (kǎoshì), 容易 (róngyì), 难 (nán)",
        "weight": 1
    },
    {
        "q": "你今天考试考得怎么样？",
        "qP": "Nǐ jīntiān kǎoshì kǎo de zěnmeyàng?",
        "a": "没汉语说得很好。考试得还可以。",
        "aP": "méi Hànyǔ shuō de hěn hǎo。 kǎo shì de hái kě yǐ。",
        "hint": "[카테고리: 시험/결과] 오늘 시험을 어떻게 봤는지 말하는 대화입니다.",
        "keywords": "今天 (jīntiān), 考试 (kǎoshì), 还可以 (hái kěyǐ)",
        "weight": 1
    },
    {
        "q": "这次休假你打算怎么过？",
        "qP": "Zhè cì xiūjià nǐ dǎsuàn zěnme guò?",
        "a": "我打算去海南岛旅游。海南岛风景很美，可以看大海，非常有意思。",
        "aP": "wǒ dǎ suàn qù Hǎinándǎo lǚ yóu。 Hǎinándǎo fēng jǐng hěn měi， kě yǐ kàn dà hǎi， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 여행/휴가 계획] 휴가 계획을 말하는 대화입니다.",
        "keywords": "休假 (xiūjià), 打算 (dǎsuàn), 海南岛 (Hǎinándǎo), 旅游 (lǚyóu)",
        "weight": 1
    },
    {
        "q": "新年快乐，你新年有什么打算？",
        "qP": "Xīnnián kuàilè, nǐ xīnnián yǒu shénme dǎsuàn?",
        "a": "我想和家人一起去旅行。",
        "aP": "wǒ xiǎng hé jiā rén yī qǐ qù lǚ xíng。",
        "hint": "[카테고리: 여행/새해 계획] 새해 계획을 묻는 대화입니다.",
        "keywords": "新年 (xīnnián), 打算 (dǎsuàn), 旅行 (lǚxíng), 朋友 (péngyou)",
        "weight": 1
    },
    {
        "q": "你打算什么时候休假？",
        "qP": "Nǐ dǎsuàn shénme shíhou xiūjià?",
        "a": "我打算下个月休假。我想去海南岛旅游，海南岛风景很美，可以看大海，非常有意思。",
        "aP": "wǒ dǎ suàn xià gè yuè xiū jià。 wǒ xiǎng qù Hǎinándǎo lǚ yóu， Hǎinándǎo fēng jǐng hěn měi， kě yǐ kàn dà hǎi， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 여행/휴가 시기] 휴가 시기를 말하는 대화입니다.",
        "keywords": "打算 (dǎsuàn), 什么时候 (shénme shíhou), 下个月 (xià ge yuè), 休假 (xiūjià)",
        "weight": 1
    },
    {
        "q": "我下周打算和家人一起去旅行，去哪儿好呢？",
        "qP": "Wǒ xià zhōu dǎsuàn hé jiārén yìqǐ qù lǚxíng, qù nǎr hǎo ne?",
        "a": "去海南岛旅游吧。海南岛风景很美，可以看大海，非常有意思。",
        "aP": "qù Hǎinándǎo lǚ yóu ba。 Hǎinándǎo fēng jǐng hěn měi， kě yǐ kàn dà hǎi， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 여행/장소 추천] 가족 여행 장소를 추천하는 대화입니다.",
        "keywords": "下周 (xià zhōu), 家人 (jiārén), 旅行 (lǚxíng), 海南岛 (Hǎinándǎo)",
        "weight": 1
    },
    {
        "q": "你喜欢夏天还是喜欢冬天？",
        "qP": "Nǐ xǐhuan xiàtiān háishì xǐhuan dōngtiān?",
        "a": "我喜欢夏天。因为夏天可以去海南岛旅游。海南岛风景很美，可以看大海，非常有意思。",
        "aP": "wǒ xǐ huān xià tiān。 yīn wèi xià tiān kě yǐ qù Hǎinándǎo lǚ yóu。 Hǎinándǎo fēng jǐng hěn měi， kě yǐ kàn dà hǎi， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 계절/취향] 여름과 겨울 중 좋아하는 계절을 말하는 대화입니다.",
        "keywords": "夏天 (xiàtiān), 冬天 (dōngtiān), 海边 (hǎibiān)",
        "weight": 1
    },
    {
        "q": "你喜欢海边吗？",
        "qP": "Nǐ xǐhuan hǎibiān ma?",
        "a": "我喜欢海边。海边风景很美，可以看大海。在海边一边游泳一边玩儿，非常有意思。",
        "aP": "wǒ xǐ huān hǎi biān。 hǎi biān fēng jǐng hěn měi， kě yǐ kàn dà hǎi。 zài hǎi biān yī biān yóu yǒng yī biān wán ér， fēi cháng yǒu yì si。",
        "hint": "[카테고리: 여행/취향] 해변을 좋아하는지 묻는 대화입니다.",
        "keywords": "海边 (hǎibiān), 喜欢 (xǐhuan), 大海 (dàhǎi)",
        "weight": 1
    },
    {
        "q": "下雨了，我们坐出租车还是公共汽车？",
        "qP": "Xià yǔ le, wǒmen zuò chūzūchē háishì gōnggòng qìchē?",
        "a": "坐出租车吧。下雨不方便。",
        "aP": "zuò chū zū chē ba。 xià yǔ bù fāng biàn。",
        "hint": "[카테고리: 교통/선택] 비 오는 날 교통수단을 선택하는 대화입니다.",
        "keywords": "下雨 (xià yǔ), 出租车 (chūzūchē), 公共汽车 (gōnggòng qìchē)",
        "weight": 1
    },
    {
        "q": "美术馆太远了，我们坐出租车去吧。",
        "qP": "Měishùguǎn tài yuǎn le, wǒmen zuò chūzūchē qù ba.",
        "a": "坐出租车吧。美术馆太远了。",
        "aP": "zuò chū zū chē ba。 měi shù guǎn tài yuǎn le。",
        "hint": "[카테고리: 교통/제안 수락] 미술관까지 택시를 타자는 제안에 응답하는 대화입니다.",
        "keywords": "美术馆 (měishùguǎn), 太远 (tài yuǎn), 出租车 (chūzūchē)",
        "weight": 1
    },
    {
        "q": "不用着急，我们开车去吧。",
        "qP": "Bú yòng zháojí, wǒmen kāichē qù ba.",
        "a": "好的，我们开车去吧。不用着急。",
        "aP": "hǎo de， wǒ men kāi chē qù ba。 bù yòng zhe jí。",
        "hint": "[카테고리: 교통/제안 수락] 차를 타고 가자는 제안에 응답하는 대화입니다.",
        "keywords": "不用着急 (bú yòng zháojí), 开车 (kāichē), 去吧 (qù ba)",
        "weight": 1
    },
    {
        "q": "我明天出差，你知道怎么去机场吗？",
        "qP": "Wǒ míngtiān chūchāi, nǐ zhīdào zěnme qù jīchǎng ma?",
        "a": "坐地铁吧。地铁站离这儿很近，大概要五分钟，又快又方便。",
        "aP": "zuò dì tiě ba。 dìtiězhàn lí zhè ér hěn jìn， dà gài yào wǔ fēnzhōng， yòu kuài yòu fāng biàn。",
        "hint": "[카테고리: 교통/공항 이동] 공항 가는 교통수단을 알려주는 대화입니다.",
        "keywords": "出差 (chūchāi), 机场 (jīchǎng), 地铁 (dìtiě), 方便 (fāngbiàn)",
        "weight": 1
    },
    {
        "q": "你们公司附近有地铁站吗？",
        "qP": "Nǐmen gōngsī fùjìn yǒu dìtiězhàn ma?",
        "a": "有啊，地铁站离公司很近，大概要五分钟，又快又方便。",
        "aP": "yǒu a， dìtiězhàn lí gōng sī hěn jìn， dà gài yào wǔ fēnzhōng， yòu kuài yòu fāng biàn。",
        "hint": "[카테고리: 교통/위치] 회사 근처 지하철역 여부를 묻는 대화입니다.",
        "keywords": "公司 (gōngsī), 附近 (fùjìn), 地铁站 (dìtiězhàn), 很近 (hěn jìn)",
        "weight": 1
    },
    {
        "q": "上班的时候，你一般坐什么车？",
        "qP": "Shàngbān de shíhou, nǐ yìbān zuò shénme chē?",
        "a": "我一般坐地铁。地铁站离公司很近，大概要五分钟，又快又方便。",
        "aP": "wǒ yī bān zuò dì tiě。 dìtiězhàn lí gōng sī hěn jìn， dà gài yào wǔ fēnzhōng， yòu kuài yòu fāng biàn。",
        "hint": "[카테고리: 교통/출근 수단] 출근할 때 타는 교통수단을 말하는 대화입니다.",
        "keywords": "上班 (shàngbān), 一般 (yìbān), 地铁 (dìtiě), 方便 (fāngbiàn)",
        "weight": 1
    },
    {
        "q": "你平时几点上班？",
        "qP": "Nǐ píngshí jǐ diǎn shàngbān?",
        "a": "我平时八点上班。我一般坐地铁，地铁站离公司很近，大概要五分钟，又快又方便。",
        "aP": "wǒ píng shí bā diǎn shàng bān。 wǒ yī bān zuò dì tiě， dìtiězhàn lí gōng sī hěn jìn， dà gài yào wǔ fēnzhōng， yòu kuài yòu fāng biàn。",
        "hint": "[카테고리: 회사/출근 시간] 평소 출근 시간을 말하는 대화입니다.",
        "keywords": "平时 (píngshí), 几点 (jǐ diǎn), 八点 (bā diǎn), 上班 (shàngbān)",
        "weight": 1
    },
    {
        "q": "从你家到公共汽车站需要多长时间？",
        "qP": "Cóng nǐ jiā dào gōnggòng qìchēzhàn xūyào duō cháng shíjiān?",
        "a": "从我家到公共汽车站很近，大概需要五分钟，又快又方便。",
        "aP": "cóng wǒ jiā dào gōnggòng qìchēzhàn hěn jìn， dà gài xū yào wǔ fēnzhōng， yòu kuài yòu fāng biàn。",
        "hint": "[카테고리: 교통/소요 시간] 집에서 버스 정류장까지 걸리는 시간을 말하는 대화입니다.",
        "keywords": "家 (jiā), 公共汽车站 (gōnggòng qìchēzhàn), 五分钟 (wǔ fēnzhōng), 很近 (hěn jìn)",
        "weight": 1
    },
    {
        "q": "从这儿到火车站需要多长时间？",
        "qP": "Cóng zhèr dào huǒchēzhàn xūyào duō cháng shíjiān?",
        "a": "火车站离这儿很近，大概需要五分钟，又快又方便。",
        "aP": "huǒchēzhàn lí zhè ér hěn jìn， dà gài xū yào wǔ fēnzhōng， yòu kuài yòu fāng biàn。",
        "hint": "[카테고리: 교통/소요 시간] 여기서 기차역까지 걸리는 시간을 말하는 대화입니다.",
        "keywords": "这儿 (zhèr), 火车站 (huǒchēzhàn), 五分钟 (wǔ fēnzhōng), 方便 (fāngbiàn)",
        "weight": 1
    },
    {
        "q": "附近有邮局吗？",
        "qP": "Fùjìn yǒu yóujú ma?",
        "a": "邮局离这儿很近，走路大概需要五分钟，在图书馆对面。",
        "aP": "yóu jú lí zhè ér hěn jìn， zǒu lù dà gài xū yào wǔ fēnzhōng， zài tú shū guǎn duì miàn。",
        "hint": "[카테고리: 위치/장소] 근처 우체국 위치를 묻는 대화입니다.",
        "keywords": "附近 (fùjìn), 邮局 (yóujú), 很近 (hěn jìn)",
        "weight": 1
    },
    {
        "q": "这附近有没有医院？",
        "qP": "Zhè fùjìn yǒu méiyǒu yīyuàn?",
        "a": "医院离这儿很近，走路大概需要五分钟，在图书馆对面。",
        "aP": "yī yuàn lí zhè ér hěn jìn， zǒu lù dà gài xū yào wǔ fēnzhōng， zài tú shū guǎn duì miàn。",
        "hint": "[카테고리: 위치/병원] 근처 병원이 있는지 묻는 대화입니다.",
        "keywords": "附近 (fùjìn), 医院 (yīyuàn), 很近 (hěn jìn)",
        "weight": 1
    },
    {
        "q": "银行怎么走？",
        "qP": "Yínháng zěnme zǒu?",
        "a": "一直往前走。银行在右边。",
        "aP": "yī zhí wǎng qián zǒu。 yínháng zài yòu biān。",
        "hint": "[카테고리: 길 안내] 은행 가는 길을 알려주는 대화입니다.",
        "keywords": "银行 (yínháng), 怎么走 (zěnme zǒu), 往前走 (wǎng qián zǒu), 右边 (yòubian)",
        "weight": 1
    },
    {
        "q": "你们公司附近常常堵车吗？",
        "qP": "Nǐmen gōngsī fùjìn chángcháng dǔchē ma?",
        "a": "我们公司附近经常堵车，所以我一般坐地铁上班。大概需要五分钟，又快又方便。",
        "aP": "wǒ men gōng sī fù jìn jīng cháng dǔ chē， suǒ yǐ wǒ yī bān zuò dì tiě shàng bān。 dà gài xū yào wǔ fēnzhōng， yòu kuài yòu fāng biàn。",
        "hint": "[카테고리: 교통/교통 체증] 회사 근처 교통 체증에 대해 말하는 대화입니다.",
        "keywords": "公司附近 (gōngsī fùjìn), 堵车 (dǔchē), 地铁 (dìtiě)",
        "weight": 1
    },
    {
        "q": "我不喜欢下雨天，你呢？",
        "qP": "Wǒ bù xǐhuan xià yǔ tiān, nǐ ne?",
        "a": "我也不喜欢下雨天。因为下雨的时候，我们公司附近经常堵车，非常不方便。",
        "aP": "wǒ yě bù xǐ huān xià yǔ tiān。 yīn wèi xià yǔ de shí hòu， wǒ men gōng sī fù jìn jīng cháng dǔ chē， fēi cháng bù fāng biàn。",
        "hint": "[카테고리: 날씨/교통] 비 오는 날에 대한 생각을 말하는 대화입니다.",
        "keywords": "下雨天 (xià yǔ tiān), 不喜欢 (bù xǐhuan), 堵车 (dǔchē)",
        "weight": 1
    },
    {
        "q": "小王在哪儿？他怎么没来上班？",
        "qP": "Xiǎo Wáng zài nǎr? Tā zěnme méi lái shàngbān?",
        "a": "别提了，他身体不舒服，头疼、发烧，好像感冒了，在家休息。",
        "aP": "bié tí le， tā shēn tǐ bù shū fú， tóu téng、 fā shāo， hǎo xiàng gǎn mào le， zài jiā xiū xī。",
        "hint": "[카테고리: 건강/결근 이유] 몸이 안 좋아 출근하지 못한 이유를 말하는 대화입니다.",
        "keywords": "小王 (Xiǎo Wáng), 上班 (shàngbān), 身体不舒服 (shēntǐ bù shūfu), 休息 (xiūxi)",
        "weight": 1
    },
    {
        "q": "下星期我要请假。",
        "qP": "Xià xīngqī wǒ yào qǐngjià.",
        "a": "你怎么了？有什么事？身体不舒服吗？你不用担心这儿，休息一下吧。",
        "aP": "nǐ zěn me le？ yǒu shén me shì？ shēn tǐ bù shū fú ma？ nǐ bù yòng dān xīn zhè ér， xiū xī yī xià ba。",
        "hint": "[카테고리: 건강/휴가] 휴가를 내겠다는 말에 응답하는 대화입니다.",
        "keywords": "下星期 (xià xīngqī), 请假 (qǐngjià), 休息 (xiūxi)",
        "weight": 1
    },
    {
        "q": "我身体不舒服，我们改天见面吧。",
        "qP": "Wǒ shēntǐ bù shūfu, wǒmen gǎi tiān jiànmiàn ba.",
        "a": "没关系，你好好休息吧。身体重要。",
        "aP": "méi guān xì， nǐ hǎo hǎo xiū xī ba。 shēn tǐ zhòng yào。",
        "hint": "[카테고리: 건강/일정 변경] 몸이 안 좋아 약속을 미루는 대화입니다.",
        "keywords": "身体不舒服 (shēntǐ bù shūfu), 改天 (gǎi tiān), 休息 (xiūxi)",
        "weight": 1
    },
    {
        "q": "今天的同学聚会，我去不了了。",
        "qP": "Jīntiān de tóngxué jùhuì, wǒ qù bùliǎo le.",
        "a": "没关系，下次见吧。",
        "aP": "méi guān xì， xià cì jiàn ba。",
        "hint": "[카테고리: 일정/불참] 동창 모임에 갈 수 없다는 말에 응답하는 대화입니다.",
        "keywords": "同学聚会 (tóngxué jùhuì), 去不了 (qù bùliǎo), 下次 (xià cì)",
        "weight": 1
    },
    {
        "q": "昨天睡了多长时间？",
        "qP": "Zuótiān shuì le duō cháng shíjiān?",
        "a": "我昨天睡了八个小时。我有早睡早起的好习惯，对身体很好。",
        "aP": "wǒ zuó tiān shuì le bā ge xiǎoshí。 wǒ yǒu zǎo shuì zǎo qǐ de hǎo xí guàn， duì shēn tǐ hěn hǎo。",
        "hint": "[카테고리: 건강/수면] 어제 잠잔 시간을 말하는 대화입니다.",
        "keywords": "昨天 (zuótiān), 睡 (shuì), 八个小时 (bā ge xiǎoshí)",
        "weight": 1
    },
    {
        "q": "办公室太冷了，关上空调吧。",
        "qP": "Bàngōngshì tài lěng le, guān shàng kōngtiáo ba.",
        "a": "好啊，我也很冷，我去关空调吧。最近天气越来越冷，小心感冒。",
        "aP": "hǎo a， wǒ yě hěn lěng， wǒ qù guān kōngtiáo ba。 zuì jìn tiān qì yuè lái yuè lěng， xiǎo xīn gǎn mào。",
        "hint": "[카테고리: 부탁 수락/환경] 사무실이 추워 에어컨을 끄자는 대화입니다.",
        "keywords": "办公室 (bàngōngshì), 冷 (lěng), 空调 (kōngtiáo)",
        "weight": 1
    },
    {
        "q": "你最近看过医生吗？",
        "qP": "Nǐ zuìjìn kànguo yīshēng ma?",
        "a": "我昨天检查身体了。医生说，我身体很好，非常健康。但是最近天气越来越冷，小心感冒。",
        "aP": "wǒ zuó tiān jiǎn chá shēn tǐ le。 yī shēng shuō， wǒ shēn tǐ hěn hǎo， fēi cháng jiàn kāng。 dàn shì zuì jìn tiān qì yuè lái yuè lěng， xiǎo xīn gǎn mào。",
        "hint": "[카테고리: 건강/진료] 최근 의사를 만난 적이 있는지 묻는 대화입니다.",
        "keywords": "最近 (zuìjìn), 医生 (yīshēng), 健康 (jiànkāng)",
        "weight": 1
    },
    {
        "q": "今年你检查身体了吗？",
        "qP": "Jīnnián nǐ jiǎnchá shēntǐ le ma?",
        "a": "我昨天检查身体了。医生说，我身体很好，非常健康。但是最近天气越来越冷，小心感冒。",
        "aP": "wǒ zuó tiān jiǎn chá shēn tǐ le。 yī shēng shuō， wǒ shēn tǐ hěn hǎo， fēi cháng jiàn kāng。 dàn shì zuì jìn tiān qì yuè lái yuè lěng， xiǎo xīn gǎn mào。",
        "hint": "[카테고리: 건강/검진] 건강검진 여부와 결과를 말하는 대화입니다.",
        "keywords": "今年 (jīnnián), 检查身体 (jiǎnchá shēntǐ), 身体很好 (shēntǐ hěn hǎo)",
        "weight": 1
    },
    {
        "q": "什么时候开始头疼的？",
        "qP": "Shénme shíhou kāishǐ tóuténg de?",
        "a": "我昨天开始头疼的。一晚上没睡觉。我怎么了？需要检查身体吗？",
        "aP": "wǒ zuó tiān kāi shǐ tóu téng de。 yī wǎn shàng méi shuìjiào。 wǒ zěn me le？ xū yào jiǎn chá shēn tǐ ma？",
        "hint": "[카테고리: 건강/증상] 머리가 언제부터 아팠는지 말하는 대화입니다.",
        "keywords": "什么时候 (shénme shíhou), 头疼 (tóuténg), 昨天 (zuótiān)",
        "weight": 1
    },
    {
        "q": "你经常喝牛奶吗？",
        "qP": "Nǐ jīngcháng hē niúnǎi ma?",
        "a": "我经常喝牛奶。每天起床以后喝一杯牛奶，对身体很好。",
        "aP": "wǒ jīng cháng hē niú nǎi。 měi tiān qǐ chuáng yǐ hòu hē yī bēi niú nǎi， duì shēn tǐ hěn hǎo。",
        "hint": "[카테고리: 건강/습관] 우유를 자주 마시는지 묻는 대화입니다.",
        "keywords": "经常 (jīngcháng), 牛奶 (niúnǎi), 每天 (měitiān)",
        "weight": 1
    },
    {
        "q": "听说多喝水对身体很好。",
        "qP": "Tīngshuō duō hē shuǐ duì shēntǐ hěn hǎo.",
        "a": "是啊，所以我每天起床以后喝一杯水，对身体很好。",
        "aP": "shì a， suǒ yǐ wǒ měi tiān qǐ chuáng yǐ hòu hē yī bēi shuǐ， duì shēn tǐ hěn hǎo。",
        "hint": "[카테고리: 건강/습관] 물을 많이 마시는 것이 좋다는 말에 응답하는 대화입니다.",
        "keywords": "多喝水 (duō hē shuǐ), 身体 (shēntǐ), 很好 (hěn hǎo)",
        "weight": 1
    },
    {
        "q": "照片里的孩子真可爱，他是谁啊？",
        "qP": "Zhàopiàn lǐ de háizi zhēn kě'ài, tā shì shéi a?",
        "a": "他是我的孩子，叫明明。他眼睛大大的，个子高高的，又可爱又聪明。",
        "aP": "tā shì wǒ de hái zi， jiào Míngming。 tā yǎn jīng dà dà de， gè zi gāo gāo de， yòu kě ài yòu cōng míng。",
        "hint": "[카테고리: 인물/가족] 사진 속 아이가 누구인지 말하는 대화입니다.",
        "keywords": "照片 (zhàopiàn), 孩子 (háizi), 可爱 (kě'ài), 明明 (Míngming)",
        "weight": 1
    },
    {
        "q": "你长得更像爸爸还是更像妈妈？",
        "qP": "Nǐ zhǎng de gèng xiàng bàba háishì gèng xiàng māma?",
        "a": "我跟妈妈像。我眼睛大大的像妈妈，个子高高的像爸爸。你呢？",
        "aP": "wǒ gēn mā mā xiàng。 wǒ yǎn jīng dà dà de xiàng mā mā， gè zi gāo gāo de xiàng bà bà。 nǐ ne？",
        "hint": "[카테고리: 인물/외모] 부모 중 누구를 더 닮았는지 말하는 대화입니다.",
        "keywords": "长得像 (zhǎng de xiàng), 爸爸 (bàba), 妈妈 (māma)",
        "weight": 1
    },
    {
        "q": "你养过动物吗？",
        "qP": "Nǐ yǎngguo dòngwù ma?",
        "a": "我养过小狗，叫小白。小小的，白白的，又可爱又聪明。",
        "aP": "wǒ yǎng guò xiǎo gǒu， jiào Xiǎobái。 xiǎo xiǎo de， bái bái de， yòu kě ài yòu cōng míng。",
        "hint": "[카테고리: 동물/경험] 동물을 키워 본 적이 있는지 말하는 대화입니다.",
        "keywords": "养过 (yǎngguo), 动物 (dòngwù), 小狗 (xiǎogǒu)",
        "weight": 1
    },
    {
        "q": "你知道今天的报纸在哪儿吗？",
        "qP": "Nǐ zhīdào jīntiān de bàozhǐ zài nǎr ma?",
        "a": "在房间里。桌子上没有吗？我去帮你找吧。",
        "aP": "zài fáng jiān lǐ。 zhuō zi shàng méi yǒu ma？ wǒ qù bāng nǐ zhǎo ba。",
        "hint": "[카테고리: 기타/물건 위치] 신문이 어디 있는지 알려주는 대화입니다.",
        "keywords": "报纸 (bàozhǐ), 在哪儿 (zài nǎr), 桌子上 (zhuōzi shàng)",
        "weight": 1
    },
    {
        "q": "我的手机不见了。",
        "qP": "Wǒ de shǒujī bú jiàn le.",
        "a": "在房间里。你去找找吧。我帮你吧。",
        "aP": "zài fáng jiān lǐ。 nǐ qù zhǎo zhǎo ba。 wǒ bāng nǐ ba。",
        "hint": "[카테고리: 기타/분실 도움] 휴대폰을 잃어버린 상황에 응답하는 대화입니다.",
        "keywords": "手机 (shǒujī), 不见了 (bú jiàn le), 找找 (zhǎozhao)",
        "weight": 1
    },
    {
        "q": "你没看见我的手机吗？",
        "qP": "Nǐ méi kànjiàn wǒ de shǒujī ma?",
        "a": "没看见。你再找找吧。",
        "aP": "méi kàn jiàn。 nǐ zài zhǎo zhǎo ba。",
        "hint": "[카테고리: 기타/분실 확인] 휴대폰을 봤는지 묻는 대화입니다.",
        "keywords": "看见 (kànjiàn), 手机 (shǒujī), 找找 (zhǎozhao)",
        "weight": 1
    },
    {
        "q": "听说你要搬家，你打算什么时候搬家？",
        "qP": "Tīngshuō nǐ yào bānjiā, nǐ dǎsuàn shénme shíhou bānjiā?",
        "a": "我周末搬家。你有时间的话，可以帮我吗？",
        "aP": "wǒ zhōu mò bān jiā。 nǐ yǒu shí jiān de huà， kě yǐ bāng wǒ ma？",
        "hint": "[카테고리: 기타/이사] 이사 예정 시기를 말하는 대화입니다.",
        "keywords": "搬家 (bānjiā), 打算 (dǎsuàn), 周末 (zhōumò), 时间 (shíjiān)",
        "weight": 1
    },
    {
        "q": "我明天打算去百货商店，你想要什么？",
        "qP": "Wǒ míngtiān dǎsuàn qù bǎihuò shāngdiàn, nǐ xiǎng yào shénme?",
        "a": "谢谢，我没有需要的东西。回来以后，我们一起吃饭吧。",
        "aP": "xiè xiè， wǒ méi yǒu xū yào de dōng xī。 huí lái yǐ hòu， wǒ men yī qǐ chī fàn ba。",
        "hint": "[카테고리: 기타/구매 확인] 백화점에 갈 때 필요한 물건을 묻는 대화입니다.",
        "keywords": "百货商店 (bǎihuò shāngdiàn), 想要 (xiǎng yào), 需要 (xūyào)",
        "weight": 1
    },
    {
        "q": "办公室的空调坏了，怎么办？",
        "qP": "Bàngōngshì de kōngtiáo huài le, zěnme bàn?",
        "a": "真的吗？你有时间的话，去修理中心修理一下吧。",
        "aP": "zhēn de ma？ nǐ yǒu shí jiān de huà， qù xiūlǐ zhōngxīn xiū lǐ yī xià ba。",
        "hint": "[카테고리: 기타/고장 대응] 사무실 에어컨 고장에 대해 말하는 대화입니다.",
        "keywords": "办公室 (bàngōngshì), 空调 (kōngtiáo), 坏了 (huài le), 修理 (xiūlǐ)",
        "weight": 1
    },
    {
        "q": "我的手机出问题了，怎么办？",
        "qP": "Wǒ de shǒujī chū wèntí le, zěnme bàn?",
        "a": "真的吗？你有时间的话，去修理中心修理一下吧。",
        "aP": "zhēn de ma？ nǐ yǒu shí jiān de huà， qù xiūlǐ zhōngxīn xiū lǐ yī xià ba。",
        "hint": "[카테고리: 기타/고장 대응] 휴대폰 문제에 대해 말하는 대화입니다.",
        "keywords": "手机 (shǒujī), 出问题 (chū wèntí), 修理中心 (xiūlǐ zhōngxīn)",
        "weight": 1
    },
    {
        "q": "听说你丢了手机，我怎么联系你？",
        "qP": "Tīngshuō nǐ diū le shǒujī, wǒ zěnme liánxì nǐ?",
        "a": "给我爱人打电话吧。电话号码是010-1234-5678。",
        "aP": "gěi wǒ ài rén dǎ diàn huà ba。 diàn huà hào mǎ shì líng yī líng - 1 2 3 4 - 5 6 7 8。",
        "hint": "[카테고리: 기타/연락 방법] 휴대폰을 잃어버렸을 때 연락 방법을 알려주는 대화입니다.",
        "keywords": "丢 (diū), 手机 (shǒujī), 联系 (liánxì), 打电话 (dǎ diànhuà)",
        "weight": 1
    },
    {
        "q": "你有几张信用卡？",
        "qP": "Nǐ yǒu jǐ zhāng xìnyòngkǎ?",
        "a": "我有三张信用卡，在餐厅、咖啡厅，用信用卡可以打折，非常方便。",
        "aP": "wǒ yǒu sān zhāng xìnyòngkǎ， zài cān tīng、 kāfēitīng， yòng xìnyòngkǎ kě yǐ dǎ zhé， fēi cháng fāng biàn。",
        "hint": "[카테고리: 기타/카드] 신용카드가 몇 장 있는지 말하는 대화입니다.",
        "keywords": "几张 (jǐ zhāng), 信用卡 (xìnyòngkǎ), 三张 (sān zhāng)",
        "weight": 1
    },
    {
        "q": "你喜欢用现金还是信用卡？",
        "qP": "Nǐ xǐhuan yòng xiànjīn háishì xìnyòngkǎ?",
        "a": "我有三张信用卡，在餐厅、咖啡厅，用信用卡可以打折，非常方便。",
        "aP": "wǒ yǒu sān zhāng xìnyòngkǎ， zài cān tīng、 kāfēitīng， yòng xìnyòngkǎ kě yǐ dǎ zhé， fēi cháng fāng biàn。",
        "hint": "[카테고리: 기타/결제 수단] 현금과 신용카드 중 선호하는 결제 수단을 말하는 대화입니다.",
        "keywords": "现金 (xiànjīn), 信用卡 (xìnyòngkǎ), 方便 (fāngbiàn)",
        "weight": 1
    },
    {
        "q": "您预定了吗？",
        "qP": "Nín yùdìng le ma?",
        "a": "我昨天打电话预定了，我叫金一兵，一共三个人，有座位吗？",
        "aP": "wǒ zuó tiān dǎ diàn huà yù dìng le， wǒ jiào Jīn Yībīng， yī gòng sān ge rén， yǒu zuò wèi ma？",
        "hint": "[카테고리: 기타/식당 예약] 식당에서 예약 여부를 말하는 대화입니다.",
        "keywords": "预定 (yùdìng), 一共 (yígòng), 三个人 (sān ge rén)",
        "weight": 1
    },
    {
        "q": "图书馆现在没有座位。",
        "qP": "Túshūguǎn xiànzài méiyǒu zuòwèi.",
        "a": "没关系。附近有一个咖啡厅，又大又安静。我们去那儿学习吧。",
        "aP": "méi guān xì。 fù jìn yǒu yī gè kāfēitīng， yòu dà yòu ān jìng。 wǒ men qù nà ér xué xí ba。",
        "hint": "[카테고리: 기타/장소 대체] 도서관에 자리가 없을 때 다른 장소를 제안하는 대화입니다.",
        "keywords": "图书馆 (túshūguǎn), 没有座位 (méiyǒu zuòwèi), 咖啡厅 (kāfēitīng)",
        "weight": 1
    },
    {
        "q": "需要什么时候送到你家？",
        "qP": "Xūyào shénme shíhou sòng dào nǐ jiā?",
        "a": "明天送到我家可以吗？我明天在家，你到了以后，给我打电话吧。",
        "aP": "míng tiān sòng dào wǒ jiā kě yǐ ma？ wǒ míng tiān zài jiā， nǐ dào le yǐ hòu， gěi wǒ dǎ diàn huà ba。",
        "hint": "[카테고리: 기타/배송 시간] 집으로 배송할 시간을 말하는 대화입니다.",
        "keywords": "什么时候 (shénme shíhou), 送到 (sòng dào), 家 (jiā), 明天 (míngtiān)",
        "weight": 1
    },
    {
        "q": "你要送到哪儿？",
        "qP": "Nǐ yào sòng dào nǎr?",
        "a": "明天送到我家可以吗？我明天在家，你到了以后，给我打电话吧。",
        "aP": "míng tiān sòng dào wǒ jiā kě yǐ ma？ wǒ míng tiān zài jiā， nǐ dào le yǐ hòu， gěi wǒ dǎ diàn huà ba。",
        "hint": "[카테고리: 기타/배송 장소] 어디로 배송할지 말하는 대화입니다.",
        "keywords": "送到 (sòng dào), 哪儿 (nǎr), 我家 (wǒ jiā)",
        "weight": 1
    },
    {
        "q": "沙发放在哪儿？",
        "qP": "Shāfā fàng zài nǎr?",
        "a": "放在房间里，桌子的对面。沙发很贵，小心点儿吧。",
        "aP": "fàng zài fáng jiān lǐ， zhuō zi de duì miàn。 shā fā hěn guì， xiǎo xīn diǎn ér ba。",
        "hint": "[카테고리: 기타/물건 위치] 소파를 어디에 둘지 말하는 대화입니다.",
        "keywords": "沙发 (shāfā), 放在 (fàng zài), 房间 (fángjiān)",
        "weight": 1
    },
    {
        "q": "你周末参加婚礼吗？",
        "qP": "Nǐ zhōumò cānjiā hūnlǐ ma?",
        "a": "我周末参加婚礼。小王是我的好朋友，他结婚，我一定去。我们一起去吧。",
        "aP": "wǒ zhōu mò cān jiā hūn lǐ。 Xiǎo Wáng shì wǒ de hǎo péng yǒu， tā jié hūn， wǒ yī dìng qù。 wǒ men yī qǐ qù ba。",
        "hint": "[카테고리: 기타/행사 참석] 주말 결혼식 참석 여부를 말하는 대화입니다.",
        "keywords": "周末 (zhōumò), 参加 (cānjiā), 婚礼 (hūnlǐ)",
        "weight": 1
    },
    {
        "q": "你要买什么？",
        "qP": "Nǐ yào mǎi shénme?",
        "a": "我要买雨伞。外面下雨了，我没带雨伞。多少钱？",
        "aP": "wǒ yào mǎi yǔ sǎn。 wài miàn xià yǔ le， wǒ méi dài yǔ sǎn。 duō shǎo qián？",
        "hint": "[카테고리: 기타/우산 구매] 우산가게에서 무엇을 살지 말하는 대화입니다.",
        "keywords": "买 (mǎi), 雨伞 (yǔsǎn), 下雨 (xià yǔ)",
        "weight": 1
    },
    {
        "q": "我把钱包放在办公室了，怎么办？",
        "qP": "Wǒ bǎ qiánbāo fàng zài bàngōngshì le, zěnme bàn?",
        "a": "真的吗？没关系。我们是好朋友，这次我请客。下次你请客。",
        "aP": "zhēn de ma？ méi guān xì。 wǒ men shì hǎo péng yǒu， zhè cì wǒ qǐng kè。 xià cì nǐ qǐng kè。",
        "hint": "[카테고리: 기타/도움] 사무실에 두고 온 지갑을 가져다주겠다는 대화입니다.",
        "keywords": "钱包 (qiánbāo), 办公室 (bàngōngshì), 怎么办 (zěnme bàn), 拿来 (ná lái)",
        "weight": 1
    }
];
