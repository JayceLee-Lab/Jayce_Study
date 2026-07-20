// TSC 제 3부분 연습용 데이터베이스
const PART3_1_DATA = [
    {
        "q": "你喜欢去书店买书吗?",
        "qP": "Nǐ xǐhuān qù shūdiàn mǎi shū ma?",
        "a": "我喜欢去书店买书。",
        "aP": "Wǒ xǐhuān qù shūdiàn mǎi shū.",
        "hint": "좋아하는지 여부를 묻는 질문입니다.",
        "keywords": "喜欢 (xǐhuān), 买书 (mǎi shū)",
        "weight": 1
    },
    {
        "q": "你经常坐出租车吗？",
        "qP": "Nǐ jīngcháng zuò chūzūchē ma?",
        "a": "我经常坐出租车。",
        "aP": "Wǒ jīngcháng zuò chūzūchē.",
        "hint": "빈도를 나타내는 '经常'을 사용해 보세요.",
        "keywords": "经常 (jīngcháng), 出租车 (chūzūchē)",
        "weight": 1
    },
    {
        "q": "这件衣服好看吗?",
        "qP": "Zhè jiàn yīfu hǎokàn ma?",
        "a": "这件衣服好看。",
        "aP": "Zhè jiàn yīfu hǎokàn.",
        "hint": "외모나 상태를 평가하는 답변입니다.",
        "keywords": "好看 (hǎokàn)",
        "weight": 1
    },
    {
        "q": "你通常在哪儿做作业?",
        "qP": "Nǐ tōngcháng zài nǎr zuò zuòyè?",
        "a": "我通常在咖啡厅做作业。",
        "aP": "Wǒ tōngcháng zài kāfēitīng zuò zuòyè.",
        "hint": "장소를 나타내는 '在哪儿'에 주의하세요.",
        "keywords": "通常 (tōngcháng), 咖啡厅 (kāfēitīng)",
        "weight": 1
    },
    {
        "q": "下个月，你打算去哪儿?",
        "qP": "Xià gè yuè, nǐ dǎsuàn qù nǎr?",
        "a": "下个月，我打算去欧洲。",
        "aP": "Xià gè yuè, wǒ dǎsuàn qù Ōuzhōu.",
        "hint": "미래 계획인 '打算'을 사용한 표현입니다.",
        "keywords": "打算 (dǎsuàn), 欧洲 (Ōuzhōu)",
        "weight": 1
    },
    {
        "q": "你一般在哪儿吃饭?",
        "qP": "Nǐ yìbān zài nǎr chī fàn?",
        "a": "我一般在家吃饭。",
        "aP": "Wǒ yìbān zài jiā chī fàn.",
        "hint": "평소 습관인 '一般'을 활용하세요.",
        "keywords": "一般 (yìbān), 在家 (zài jiā)",
        "weight": 1
    },
    {
        "q": "你一般跟谁一起去看电影?",
        "qP": "Nǐ yìbān gēn shéi yìqǐ qù kàn diànyǐng?",
        "a": "我一般跟家人一起去看电影。",
        "aP": "Wǒ yìbān gēn jiārén yìqǐ qù kàn diànyǐng.",
        "hint": "동반자를 나타내는 '跟~一起' 구문입니다.",
        "keywords": "跟家人 (gēn jiārén), 看电影 (kàn diànyǐng)",
        "weight": 1
    },
    {
        "q": "你平时跟谁一起喝酒?",
        "qP": "Nǐ píngshí gēn shéi yìqǐ hē jiǔ?",
        "a": "我平时跟朋友一起喝酒。",
        "aP": "Wǒ píngshí gēn péngyǒu yìqǐ hē jiǔ.",
        "hint": "평소 여가 활동에 대한 질문입니다.",
        "keywords": "平时 (píngshí), 朋友 (péngyǒu)",
        "weight": 1
    },
    {
        "q": "明天的展览会，你要跟谁一起去看?",
        "qP": "Míngtiān de zhǎnlǎnhuì, nǐ yào gēn shéi yìqǐ qù kàn?",
        "a": "我要跟妈妈一起去看。",
        "aP": "Wǒ yào gēn māma yìqǐ qù kàn.",
        "hint": "특정 사건의 계획을 묻고 있습니다.",
        "keywords": "展览会 (zhǎnlǎnhuì), 妈妈 (māma)",
        "weight": 1
    },
    {
        "q": "咱们怎么去机场?",
        "qP": "Zánmen zěnme qù jīchǎng?",
        "a": "坐出租车吧。",
        "aP": "Zuò chūzūchē ba.",
        "hint": "교통수단을 제안할 때 '怎么去'를 씁니다.",
        "keywords": "怎么 (zěnme), 出租车 (chūzūchē)",
        "weight": 1
    },
    {
        "q": "我们怎么去医院比较好呢?",
        "qP": "Wǒmen zěnme qù yīyuàn bǐjiào hǎo ne?",
        "a": "坐地铁吧。",
        "aP": "Zuò dìtiě ba.",
        "hint": "방법의 권유를 나타내는 '~吧'를 사용하세요.",
        "keywords": "比较好 (bǐjiào hǎo), 地铁 (dìtiě)",
        "weight": 1
    },
    {
        "q": "我们怎么回学校呢?",
        "qP": "Wǒmen zěnme huí xuéxiào ne?",
        "a": "坐公共汽车吧。",
        "aP": "Zuò gōnggòng qìchē ba.",
        "hint": "교통수단 제안 답변입니다.",
        "keywords": "回学校 (huí xuéxiào), 公共汽车 (gōnggòng qìchē)",
        "weight": 1
    },
    {
        "q": "这双鞋是什么时候买的?",
        "qP": "Zhè shuāng xié shì shénme shíhou mǎi de?",
        "a": "这双鞋是周末买.",
        "aP": "Zhè shuāng xié shì zhōumò mǎi de.",
        "hint": "과거의 시점을 강조하는 '是~的' 구문입니다.",
        "keywords": "什么时候 (shénme shíhou), 周末 (zhōumò)",
        "weight": 1
    },
    {
        "q": "你是从什么时候开始学游泳?",
        "qP": "Nǐ shì cóng shénme shíhou kāishǐ xué yóuyǒng de?",
        "a": "我是从七岁开始学游泳的。",
        "aP": "Wǒ shì cóng qī suì kāishǐ xué yóuyǒng de.",
        "hint": "시작 시점을 나타내는 '从~开始'입니다.",
        "keywords": "开始 (kāishǐ), 七岁 (qī suì)",
        "weight": 1
    },
    {
        "q": "这台洗衣机什么时候送到您家好呢?",
        "qP": "Zhè tái xǐyījī shénme shíhou sòng dào nín jiā hǎo ne?",
        "a": "这台洗衣机明天早上九点送到我家吧。",
        "aP": "Zhè tái xǐyījī míngtiān zǎoshang jiǔ diǎn sòng dào wǒ jiā ba.",
        "hint": "시간 약속을 정하는 표현입니다.",
        "keywords": "什么时候 (shénme shíhou), 明天早上 (míngtiān zǎoshang)",
        "weight": 1
    },
    {
        "q": "你多长时间做一次运动?",
        "qP": "Nǐ duō cháng shíjiān zuò yí cì yùndòng?",
        "a": "我两天做一次运动。",
        "aP": "Wǒ liǎng tiān zuò yí cì yùndòng.",
        "hint": "주기를 묻는 '多长时间'에 대한 답변입니다.",
        "keywords": "多长时间 (duō cháng shíjiān), 两天 (liǎng tiān)",
        "weight": 1
    },
    {
        "q": "从你家到银行需要多长时间?",
        "qP": "Cóng nǐ jiā dào yínháng xūyào duō cháng shíjiān?",
        "a": "从我家到银行需要三十分钟。",
        "aP": "Cóng wǒ jiā dào yínháng xūyào sānshí fēnzhōng.",
        "hint": "소요 시간을 나타내는 '需要'를 활용하세요.",
        "keywords": "从~到 (cóng~dào), 三十分钟 (sānshí fēnzhōng)",
        "weight": 1
    },
    {
        "q": "你多长时间整理一次桌子?",
        "qP": "Nǐ duō cháng shíjiān zhěnglǐ yí cì zhuōzi?",
        "a": "我一周整理一次桌子。",
        "aP": "Wǒ yì zhōu zhěnglǐ yí cì zhuōzi.",
        "hint": "정리 주기를 답하는 표현입니다.",
        "keywords": "整理 (zhěnglǐ), 一周 (yì zhōu)",
        "weight": 1
    },
    {
        "q": "你要画什么?",
        "qP": "Nǐ yào huà shénme?",
        "a": "我要画苹果。",
        "aP": "Wǒ yào huà píngguǒ.",
        "hint": "의도나 계획을 나타내는 '要'를 씁니다.",
        "keywords": "画 (huà), 苹果 (píngguǒ)",
        "weight": 1
    },
    {
        "q": "业余时间你一般做什么?",
        "qP": "Yèyú shíjiān nǐ yìbān zuò shénme?",
        "a": "业余时间我一般看书。",
        "aP": "Yèyú shíjiān wǒ yìbān kàn shū.",
        "hint": "여가 활동(业余时间)에 대한 대답입니다.",
        "keywords": "业余时间 (yèyú shíjiān), 看书 (kàn shū)",
        "weight": 1
    },
    {
        "q": "我给弟弟送什么礼物好呢?",
        "qP": "Wǒ gěi dìdi sòng shénme lǐwù hǎo ne?",
        "a": "你给弟弟送钱包吧。",
        "aP": "Nǐ gěi dìdi sòng qiánbāo ba.",
        "hint": "선물을 추천하는 대화입니다.",
        "keywords": "送 (sòng), 钱包 (qiánbāo)",
        "weight": 1
    },
    {
        "q": "你想吃米饭还是面条?",
        "qP": "Nǐ xiǎng chī mǐfàn háishì miàntiáo?",
        "a": "我想吃米饭。",
        "aP": "Wǒ xiǎng chī mǐfàn.",
        "hint": "선택 의문문 '还是'에 대한 대답입니다.",
        "keywords": "米饭 (mǐfàn), 还是 (háishì)",
        "weight": 1
    },
    {
        "q": "你现在累不累?",
        "qP": "Nǐ xiànzài lèi bu lèi?",
        "a": "我现在不累。",
        "aP": "Wǒ xiànzài bú lèi.",
        "hint": "정반 의문문 '累不累'에 대한 긍정/부정 답변입니다.",
        "keywords": "现在 (xiànzài), 不累 (bú lèi)",
        "weight": 1
    },
    {
        "q": "你有没有电子词典?",
        "qP": "Nǐ yǒu méiyǒu diànzǐ cídiǎn?",
        "a": "我没有电子词典。",
        "aP": "Wǒ méiyǒu diànzǐ cídiǎn.",
        "hint": "소유 여부를 묻는 '有没有'입니다.",
        "keywords": "电子词典 (diànzǐ cídiǎn)",
        "weight": 1
    },
    {
        "q": "你周末过得怎么样?",
        "qP": "Nǐ zhōumò guò de zěnmeyàng?",
        "a": "我周末过得很好。",
        "aP": "Wǒ zhōumò guò de hěn hǎo.",
        "hint": "정도를 나타내는 보어 '过得'를 사용합니다.",
        "keywords": "过得 (guò de), 很好 (hěn hǎo)",
        "weight": 1
    },
    {
        "q": "你汉语说得怎么样?",
        "qP": "Nǐ Hànyǔ shuō de zěnmeyàng?",
        "a": "我汉语说得很好。",
        "aP": "Wǒ Hànyǔ shuō de hěn hǎo.",
        "hint": "실력이나 상태를 평가하는 구문입니다.",
        "keywords": "说得 (shuō de), 很好 (hěn hǎo)",
        "weight": 1
    },
    {
        "q": "你考试考得怎么样?",
        "qP": "Nǐ kǎoshì kǎo de zěnmeyàng?",
        "a": "我考试考得不好。",
        "aP": "Wǒ kǎoshì kǎo de bù hǎo.",
        "hint": "결과를 나타내는 보어 형태입니다.",
        "keywords": "考得 (kǎo de), 不好 (bù hǎo)",
        "weight": 1
    },
    {
        "q": "这是我做的面条怎么样?",
        "qP": "Zhè shì wǒ zuò de miàntiáo zěnmeyàng?",
        "a": "我觉得你做的面条很不错。",
        "aP": "Wǒ juéde nǐ zuò de miàntiáo hěn búcuò.",
        "hint": "의견을 묻는 '怎么样'에 '我觉得'로 답해 보세요.",
        "keywords": "觉得 (juéde), 不错 (búcuò)",
        "weight": 1
    },
    {
        "q": "这双鞋不错，你觉得呢?",
        "qP": "Zhè shuāng xié búcuò, nǐ juéde ne?",
        "a": "我觉得这双鞋很不错。",
        "aP": "Wǒ juéde zhè shuāng xié hěn búcuò.",
        "hint": "상대방의 의견에 동의하는 답변입니다.",
        "keywords": "双 (shuāng), 觉得 (juéde)",
        "weight": 1
    },
    {
        "q": "你觉得这杯咖啡的味道怎么样?",
        "qP": "Nǐ juéde zhè bēi kāfēi de wèidào zěnmeyàng?",
        "a": "我觉得这杯咖啡的味道很不错。",
        "aP": "Wǒ juéde zhè bēi kāfēi de wèidào hěn búcuò.",
        "hint": "맛이나 느낌을 표현하는 답변입니다.",
        "keywords": "味道 (wèidào), 不错 (búcuò)",
        "weight": 1
    },
    {
        "q": "你生日过得怎么样?",
        "qP": "Nǐ shēngrì guò de zěnmeyàng?",
        "a": "我生日过得很好。",
        "aP": "Wǒ shēngrì guò de hěn hǎo.",
        "hint": "과거 경험의 상태를 묻고 있습니다.",
        "keywords": "生日 (shēngrì), 很好 (hěn hǎo)",
        "weight": 1
    },
    {
        "q": "你想坐地铁去还是坐出租车?",
        "qP": "Nǐ xiǎng zuò dìtiě qù háishì zuò chūzūchē?",
        "a": "我想坐地铁去。",
        "aP": "Wǒ xiǎng zuò dìtiě qù.",
        "hint": "두 가지 중 하나를 선택하는 질문입니다.",
        "keywords": "地铁 (dìtiě), 还是 (háishì)",
        "weight": 1
    },
    {
        "q": "我给老师送什么礼物好呢?",
        "qP": "Wǒ gěi lǎoshī sòng shénme lǐwù hǎo ne?",
        "a": "你给老师送鞋子吧。",
        "aP": "nǐ gěi lǎoshī sòng xiézi ba.",
        "hint": "제안이나 조언을 구하는 질문에 대한 답입니다.",
        "keywords": "老师 (lǎoshī), 鞋子 (xiézi)",
        "weight": 1
    },
    {
        "q": "这次你打算跟谁一起去旅行?",
        "qP": "Zhè cì nǐ dǎsuàn gēn shéi yìqǐ qù lǚxíng?",
        "a": "这次我打算跟家人一起去旅行。",
        "aP": "Zhè cì wǒ dǎsuàn gēn jiārén yìqǐ qù lǚxíng.",
        "hint": "여행 계획과 동행인을 묻고 있습니다.",
        "keywords": "打算 (dǎsuàn), 旅行 (lǚxíng)",
        "weight": 1
    },
    {
        "q": "你想喝饮料吗?",
        "qP": "Nǐ xiǎng hē yǐnliào ma?",
        "a": "我想喝饮料。",
        "aP": "Wǒ xiǎng hē yǐnliào.",
        "hint": "의사를 묻는 질문에 대한 긍정 대답입니다.",
        "keywords": "饮料 (yǐnliào)",
        "weight": 1
    },
    {
        "q": "你觉得这件衣服怎么样?",
        "qP": "Nǐ juéde zhè jiàn yīfu zěnmeyàng?",
        "a": "我觉得这件衣服很不错。",
        "aP": "Wǒ juéde zhè jiàn yīfu hěn búcuò.",
        "hint": "물건에 대한 감상을 묻고 있습니다.",
        "keywords": "这件衣服 (zhè jiàn yīfu), 不错 (búcuò)",
        "weight": 1
    },
    {
        "q": "你从什么时候开始学英语的?",
        "qP": "Nǐ cóng shénme shíhou kāishǐ xué Yīngyǔ de?",
        "a": "我是从八岁开始学英语的。",
        "aP": "Wǒ cóng bā suì kāishǐ xué Yīngyǔ de.",
        "hint": "시점 강조 구문입니다.",
        "keywords": "从 (cóng), 八岁 (bā suì)",
        "weight": 1
    },
    {
        "q": "你多长时间打扫一次房间?",
        "qP": "Nǐ duō cháng shíjiān dǎsǎo yí cì fángjiān?",
        "a": "我三天打扫一次房间。",
        "aP": "Wǒ sān tiān dǎsǎo yí cì fángjiān.",
        "hint": "청소 주기를 묻는 표현입니다.",
        "keywords": "打扫 (dǎsǎo), 三天 (sān tiān)",
        "weight": 1
    },
    {
        "q": "下周末咱们一起去滑雪吧。",
        "qP": "Xià zhōumò zánmen yìqǐ qù huáxuě ba.",
        "a": "好, 一起去滑雪吧。",
        "aP": "Hǎo, yìqǐ qù huáxuě ba.",
        "hint": "제안에 대한 동의(好) 표현입니다.",
        "keywords": "滑雪 (huáxuě)",
        "weight": 1
    },
    {
        "q": "这家超市正在打折，一起去看看吧。",
        "qP": "Zhè jiā chāoshì zhèngzài dǎzhé, yìqǐ qù kànkan ba.",
        "a": "好, 一起去看看吧。",
        "aP": "Hǎo, yìqǐ qù kànkan ba.",
        "hint": "할인(打折) 소식에 대한 반응입니다.",
        "keywords": "打折 (dǎzhé), 看看 (kànkan)",
        "weight": 1
    },
    {
        "q": "这个包子我做的，你尝尝吧。",
        "qP": "Zhè ge bāozi wǒ zuò de, nǐ chángchang ba.",
        "a": "好, 尝尝吧。",
        "aP": "Hǎo, chángchang ba.",
        "hint": "시식 권유에 대한 수락 표현입니다.",
        "keywords": "包子 (bāozi), 尝尝 (chángchang)",
        "weight": 1
    },
    {
        "q": "我们一起去游乐园，怎么样？",
        "qP": "Wǒmen yìqǐ qù yóulèyuán, zěnmeyàng?",
        "a": "好, 我们一起去游乐园吧。",
        "aP": "Hǎo, wǒmen yìqǐ qù yóulèyuán ba.",
        "hint": "장소 제안에 동의하는 답변입니다.",
        "keywords": "游乐园 (yóulèyuán), 怎么样 (zěnmeyàng)",
        "weight": 1
    },
    {
        "q": "下课后一起看足球比赛，好不好?",
        "qP": "Xiàkè hòu yìqǐ kàn zúqiú bǐsài, hǎo bù hǎo?",
        "a": "好, 下课后一起看足球比赛吧。",
        "aP": "Hǎo, xiàkè hòu yìqǐ kàn zúqiú bǐsài ba.",
        "hint": "동의를 구할 때 '好不好'를 씁니다.",
        "keywords": "足球比赛 (zúqiú bǐsài)",
        "weight": 1
    },
    {
        "q": "明天早上去餐厅吃饭, 怎么样?",
        "qP": "Míngtiān zǎoshang qù cāntīng chī fàn, zěnmeyàng?",
        "a": "好, 明天早上去餐厅吃饭吧。",
        "aP": "Hǎo, míngtiān zǎoshang qù cāntīng chīfàn ba.",
        "hint": "식사 제안에 대한 긍정 답변입니다.",
        "keywords": "餐厅 (cāntīng), 吃饭 (chī fàn)",
        "weight": 1
    },
    {
        "q": "这个蛋糕是我同事做的, 要不要尝一尝?",
        "qP": "Zhè ge dàngāo shì wǒ tóngshì zuò de, yào bú yào cháng yì cháng?",
        "a": "我要尝一尝。",
        "aP": "Wǒ yào cháng yì cháng.",
        "hint": "권유에 대한 의지 표현입니다.",
        "keywords": "蛋糕 (dàngāo), 尝一尝 (cháng yì cháng)",
        "weight": 1
    },
    {
        "q": "我有点儿饿了, 想不想吃辣的?",
        "qP": "Wǒ yǒudiǎnr è le, xiǎng bù xiǎng chī là de?",
        "a": "我想吃辣.",
        "aP": "Wǒ xiǎng chī là de.",
        "hint": "입맛이나 기호를 묻는 질문입니다.",
        "keywords": "饿 (è), 辣 (là)",
        "weight": 1
    },
    {
        "q": "我打算明天去爬山, 想不想一起去?",
        "qP": "Wǒ dǎsuàn míngtiān qù páshān, xiǎng bù xiǎng yìqǐ qù?",
        "a": "我想一起去。",
        "aP": "Wǒ xiǎng yìqǐ qù.",
        "hint": "함께 가고 싶은지 묻는 표현입니다.",
        "keywords": "爬山 (páshān), 一起 (yìqǐ)",
        "weight": 1
    },
    {
        "q": "请问, 你能帮我推荐吗?",
        "qP": "Qǐngwèn, nǐ néng bāng wǒ tuījiàn ma?",
        "a": "当然可以, 我帮你推荐。",
        "aP": "Dāngrán kěyǐ, wǒ bāng nǐ tuījiàn.",
        "hint": "도움을 요청할 때 쓰는 '能帮我~吗'입니다.",
        "keywords": "推荐 (tuījiàn), 当然可以 (dāngrán kěyǐ)",
        "weight": 1
    },
    {
        "q": "我现在有点儿饿, 你能帮我买蛋糕吗?",
        "qP": "Wǒ xiànzài yǒudiǎnr è, nǐ néng bāng wǒ mǎi dàngāo ma?",
        "a": "当然可以, 我帮你买蛋糕。",
        "aP": "Dāngrán kěyǐ, wǒ bāng nǐ mǎi dàngāo.",
        "hint": "부탁에 흔쾌히 수락하는 표현입니다.",
        "keywords": "饿 (è), 蛋糕 (dàngāo)",
        "weight": 1
    },
    {
        "q": "你能不能帮我买展览会门票?",
        "qP": "Nǐ néng bù néng bāng wǒ mǎi zhǎnlǎnhuì ménpiào?",
        "a": "当然可以, 我帮你。",
        "aP": "Dāngrán kěyǐ, wǒ bāng nǐ.",
        "hint": "능력이나 가능 여부를 묻는 질문입니다.",
        "keywords": "门票 (ménpiào), 帮你 (bāng nǐ)",
        "weight": 1
    },
    {
        "q": "可以看一下你的橡皮吗?",
        "qP": "Wǒ kěyǐ yòng yíxià nǐ de xiàngpí ma?",
        "a": "橡皮? 当然可以。",
        "aP": "Xiàngpí? Dāngrán kěyǐ.",
        "hint": "허락을 구할 때 '可以~吗'를 씁니다.",
        "keywords": "橡皮 (xiàngpí), 当然可以 (dāngrán kěyǐ)",
        "weight": 1
    },
    {
        "q": "我能借用一下你的洗衣机吗?",
        "qP": "Wǒ néng jièyòng yíxià nǐ de xǐyījī ma?",
        "a": "洗衣机? 当然可以。",
        "aP": "Xǐyījī? Dāngrán kěyǐ.",
        "hint": "물건 대여를 요청하는 대화입니다.",
        "keywords": "借用 (jièyòng), 洗衣机 (xǐyījī)",
        "weight": 1
    },
    {
        "q": "现在只有最后一排的座位, 可以吗?",
        "qP": "Xiànzài zhǐ yǒu zuìhòu yì pái de zuòwèi, kěyǐ ma?",
        "a": "最后一排的座位? 当然可以。",
        "aP": "Zuìhòu yì pái de zuòwèi? Dāngrán kěyǐ.",
        "hint": "조건을 제시하고 동의를 얻는 표현입니다.",
        "keywords": "最后一排 (zuìhòu yì pái), 可以 (kěyǐ)",
        "weight": 1
    },
    {
        "q": "我能借用一下你的雨伞吗?",
        "qP": "Wǒ néng jièyòng yíxià nǐ de yǔsǎn ma?",
        "a": "雨伞? 当然可以。",
        "aP": "Yǔsǎn? Dāngrán kěyǐ.",
        "hint": "우산을 빌리는 상황의 답변입니다.",
        "keywords": "雨伞 (yǔsǎn), 借用 (jièyòng)",
        "weight": 1
    },
    {
        "q": "我没带充电器, 你能不能借给我充电器?",
        "qP": "Wǒ méi dài chōngdiànqì, nǐ néng bù néng jiè gěi wǒ chōngdiànqì?",
        "a": "充电器? 当然可以。",
        "aP": "Chōngdiànqì? Dāngrán kěyǐ.",
        "hint": "충전기를 빌려달라는 요청입니다.",
        "keywords": "充电器 (chōngdiànqì), 借 (jiè)",
        "weight": 1
    },
    {
        "q": "我没有电子词典, 你能不能送给我电子词典?",
        "qP": "Wǒ méiyǒu diànzǐ cídiǎn, nǐ néng bù néng sòng gěi wǒ diànzǐ cídiǎn?",
        "a": "电子词典? 当然可以。",
        "aP": "Diànzǐ cídiǎn? Dāngrán kěyǐ.",
        "hint": "물건을 달라는(送) 요청에 대한 답입니다.",
        "keywords": "电子词典 (diànzǐ cídiǎn), 送 (sòng)",
        "weight": 1
    },
    {
        "q": "我们一起去图书馆, 怎么样?",
        "qP": "Wǒmen yìqǐ qù túshūguǎn, zěnmeyàng?",
        "a": "好, 我们一起去图书馆吧。",
        "aP": "Hǎo, wǒmen yìqǐ qù túshūguǎn ba.",
        "hint": "장소 제안에 흔쾌히 수락하는 표현입니다.",
        "keywords": "图书馆 (túshūguǎn), 吧 (ba)",
        "weight": 1
    },
    {
        "q": "我现在太饿了, 我们吃点儿东西好不好?",
        "qP": "Wǒ xiànzài tài è le, wǒmen chī diǎnr dōngxi hǎo bù hǎo?",
        "a": "好, 我们吃点儿东西吧。",
        "aP": "Hǎo, wǒmen chī diǎnr dōngxi ba.",
        "hint": "배고픔을 표현하며 제안하는 상황입니다.",
        "keywords": "饿 (è), 点儿东西 (diǎnr dōngxi)",
        "weight": 1
    },
    {
        "q": "我能借用一下你的铅笔吗?",
        "qP": "Wǒ kěyǐ jièyòng yíxià nǐ de qiānbǐ ma?",
        "a": "铅笔? 当然可以。",
        "aP": "Qiānbǐ? Dāngrán kěyǐ.",
        "hint": "학용품 대여 요청 대화입니다.",
        "keywords": "铅笔 (qiānbǐ), 借用 (jièyòng)",
        "weight": 1
    },
    {
        "q": "我要去锻炼身体, 要不要一起去?",
        "qP": "Wǒ yào qù duànliàn shēntǐ, yào bú yào yìqǐ qù?",
        "a": "我要一起去。",
        "aP": "Wǒ yào yìqǐ qù.",
        "hint": "운동 권유에 대한 참여 의사 표시입니다.",
        "keywords": "锻炼 (duànliàn), 一起 (yìqǐ)",
        "weight": 1
    },
    {
        "q": "这包子很好吃, 你尝尝吧。",
        "qP": "Zhè bāozi hěn hǎo chī, nǐ chángchang ba.",
        "a": "好, 我尝尝吧。",
        "aP": "Hǎo, wǒ chángchang ba.",
        "hint": "음식을 권유받았을 때의 답변입니다.",
        "keywords": "好吃 (hǎochī), 尝尝 (chángchang)",
        "weight": 1
    },
    {
        "q": "现在只有第一排的位置, 可以吗?",
        "qP": "Xiànzài zhǐ yǒu dìyī pái de wèizhì, kěyǐ ma?",
        "a": "第一排的位置? 当然可以。",
        "aP": "Dìyī pái de wèizhì? Dāngrán kěyǐ.",
        "hint": "좌석 조건에 대한 수락 표현입니다.",
        "keywords": "第一排 (dìyī pái), 位置 (wèizhì)",
        "weight": 1
    },
    {
        "q": "我没带笔记本电脑, 能不能借给我你的笔记本电脑?",
        "qP": "Wǒ méi dài bǐjìběn diànnǎo, néng bù néng jiè gěi wǒ nǐ de bǐjìběn diànnǎo?",
        "a": "笔记本电脑? 当然可以。",
        "aP": "Bǐjìběn diànnǎo? Dāngrán kěyǐ.",
        "hint": "노트북 대여 요청입니다.",
        "keywords": "笔记本电脑 (bǐjìběn diànnǎo)",
        "weight": 1
    },
    {
        "q": "你能帮我去图书馆还书吗?",
        "qP": "Nǐ néng bāng wǒ qù túshūguǎn huán shū ma?",
        "a": "当然可以, 我帮你去图书馆还书。",
        "aP": "Dāngrán kěyǐ, wǒ bāng nǐ qù túshūguǎn huán shū.",
        "hint": "부탁에 대한 적극적인 수락 답변입니다.",
        "keywords": "还书 (huán shū), 帮 (bāng)",
        "weight": 1
    },
    {
        "q": "下周我打算去中国旅行。",
        "qP": "Xià zhōu wǒ dǎsuàn qù zhōngguó lǚxíng.",
        "a": "是吗? 我也打算去中国旅行。",
        "aP": "Shì ma? Wǒ yě dǎsuàn qù zhōngguó lǚxíng.",
        "hint": "상대의 계획에 공감을 표할 때 '我也'를 씁니다.",
        "keywords": "旅行 (lǚxíng), 也 (yě)",
        "weight": 1
    },
    {
        "q": "毕业以后, 我要留学。",
        "qP": "Bìyè yǐhòu, wǒ yào liúxué.",
        "a": "是吗? 我也要留学。",
        "aP": "Shì ma? Wǒ yě yào liúxué.",
        "hint": "장래 계획에 대한 맞장구 표현입니다.",
        "keywords": "留学 (liúxué), 毕业 (bìyè)",
        "weight": 1
    },
    {
        "q": "从明天开始我要锻炼身体。",
        "qP": "Cóng míngtiān kāishǐ wǒ yào duànliàn shēntǐ.",
        "a": "是吗? 我也要锻炼身体。",
        "aP": "Shì ma? Wǒ yě yào duànliàn shēntǐ.",
        "hint": "결심에 대한 동조 표현입니다.",
        "keywords": "锻炼 (duànliàn), 开始 (kāishǐ)",
        "weight": 1
    },
    {
        "q": "我觉得这面包很好吃。",
        "qP": "Wǒ juéde zhè miànbāo hěn hǎochī.",
        "a": "你说得对, 我也觉得这面包很好吃。",
        "aP": "Nǐ shuō de duì, wǒ yě juéde zhè miànbāo hěn hǎochī.",
        "hint": "의견 일치를 표현할 때 '你说得对'를 활용하세요.",
        "keywords": "面包 (miànbāo), 对 (duì)",
        "weight": 1
    },
    {
        "q": "我觉得这件衣服有点儿长。",
        "qP": "Wǒ juéde zhè jiàn yīfu yǒudiǎnr cháng.",
        "a": "你说得对, 我也觉得这件衣服有点儿长。",
        "aP": "Nǐ shuō de duì, wǒ yě juéde zhè jiàn yīfu yǒudiǎnr cháng.",
        "hint": "의견에 동의하는 표현입니다.",
        "keywords": "有点儿 (yǒudiǎnr), 长 (cháng)",
        "weight": 1
    },
    {
        "q": "我觉得这部电影很有意思。",
        "qP": "Wǒ juéde zhè bù diànyǐng hěn yǒu yìsi.",
        "a": "你说得对, 我也觉得这部电影很有意思。",
        "aP": "Nǐ shuō de duì, wǒ yě juéde zhè bù diànyǐng hěn yǒu yìsi.",
        "hint": "영화 감상에 대한 동의입니다.",
        "keywords": "意思 (yìsi), 电影 (diànyǐng)",
        "weight": 1
    },
    {
        "q": "对不起, 您要的裙子现在没有。",
        "qP": "Duìbuqǐ, nín yào de qúnzi xiànzài méiyǒu.",
        "a": "什么? 怎么又没有?",
        "aP": "Shénme? Zěnme yòu méiyǒu?",
        "hint": "반복되는 품절에 실망을 표하는 대화입니다.",
        "keywords": "怎么又 (zěnme yòu), 没有 (méiyǒu)",
        "weight": 1
    },
    {
        "q": "不好意思, 我可能会迟到。",
        "qP": "Bù hǎo yìsi, wǒ kěnéng huì chídào.",
        "a": "什么? 怎么又迟到?",
        "aP": "Shénme? Zěnme yòu chídào?",
        "hint": "지각 소식에 놀라움을 표현합니다.",
        "keywords": "迟到 (chídào), 又 (yòu)",
        "weight": 1
    },
    {
        "q": "不好意思, 今天我不能去上课。",
        "qP": "Bù hǎo yìsi, jīntiān wǒ bù néng qù shàngkè.",
        "a": "没关系。",
        "aP": "Méi guānxi.",
        "hint": "사과를 받아줄 때 쓰는 고정 표현입니다.",
        "keywords": "没关系 (méi guānxi)",
        "weight": 1
    },
    {
        "q": "你唱歌唱得很好。",
        "qP": "Nǐ chàng gē chàng de hěn hǎo.",
        "a": "没有啊, 我唱得不太好。",
        "aP": "Méiyǒu a, wǒ chàng de bù tài hǎo.",
        "hint": "칭찬에 겸손하게 답할 때 '没有啊'를 씁니다.",
        "keywords": "唱歌 (chàng gē), 不太好 (bù tài hǎo)",
        "weight": 1
    },
    {
        "q": "你做菜做得真好。",
        "qP": "Nǐ zuò cài zuò de zhēn hǎo.",
        "a": "没有啊, 我做得不太好。",
        "aP": "Méiyǒu a, wǒ zuò de bù tài hǎo.",
        "hint": "요리 칭찬에 대한 겸손 답변입니다.",
        "keywords": "做菜 (zuò cài), 真的 (zhēn)",
        "weight": 1
    },
    {
        "q": "你画画儿画得真棒。",
        "qP": "Nǐ huà huàr huà de zhēn bàng.",
        "a": "没有啊, 我画得不太好。",
        "aP": "Méiyǒu a, wǒ huà de bù tài hǎo.",
        "hint": "그림 실력 칭찬에 대한 답변입니다.",
        "keywords": "画画儿 (huà huàr), 棒 (bàng)",
        "weight": 1
    },
    {
        "q": "猪肉已经卖完了。",
        "qP": "Zhūròu yǐjīng mài wán le.",
        "a": "猪肉已经卖完了? 那怎么办?",
        "aP": "Zhūròu yǐjīng mài wán le? Nà zěnme bàn?",
        "hint": "품절 소식에 당황하며 방법을 묻는 대화입니다.",
        "keywords": "卖完 (mài wán), 怎么办 (zěnme bàn)",
        "weight": 1
    },
    {
        "q": "小李已经回家了。",
        "qP": "Xiǎolǐ yǐjīng huí jiā le.",
        "a": "是吗? 那怎么办?",
        "aP": "Shì ma? Nà zěnme bàn?",
        "hint": "상대방의 부재 소식에 대한 반응입니다.",
        "keywords": "已经 (yǐjīng), 怎么办 (zěnme bàn)",
        "weight": 1
    },
    {
        "q": "小王已经走了。",
        "qP": "Xiǎo wáng yǐjīng zǒu le.",
        "a": "小王已经走了? 那怎么办?",
        "aP": "Xiǎo wáng yǐjīng zǒu le? Nà zěnme bàn?",
        "hint": "떠났다는 소식에 대한 질문 답변입니다.",
        "keywords": "走了 (zǒu le), 怎么办 (zěnme bàn)",
        "weight": 1
    },
    {
        "q": "三明治已经卖光了。",
        "qP": "Sānmíngzhì yǐjīng mài guāng le.",
        "a": "三明治已经卖光了? 那怎么办?",
        "aP": "Sānmíngzhì yǐjīng mài guāng le? Nà zěnme bàn?",
        "hint": "품절(卖光) 상태에 대한 반응입니다.",
        "keywords": "三明治 (sānmíngzhì), 卖光 (mài guāng)",
        "weight": 1
    },
    {
        "q": "我的笔记本电脑不见了。",
        "qP": "Wǒ de bǐjìběn diànnǎo bù jiàn le.",
        "a": "你的笔记本电脑不见了? 那怎么办?",
        "aP": "Nǐ de bǐjìběn diànnǎo bù jiàn le? Nà zěnme bàn?",
        "hint": "물건 분실 소식에 대한 공감 반응입니다.",
        "keywords": "不见了 (bù jiàn le), 笔记本电脑 (bǐjìběn diànnǎo)",
        "weight": 1
    },
    {
        "q": "您要的果汁卖完了。",
        "qP": "Nín yào de guǒzhī mài wán le.",
        "a": "是吗? 那怎么办?",
        "aP": "Shì ma? Nà zěnme bàn?",
        "hint": "원하는 음료가 없을 때의 답변입니다.",
        "keywords": "果汁 (guǒzhī), 卖完 (mài wán)",
        "weight": 1
    },
    {
        "q": "对不起, 现在没有空位置。",
        "qP": "Duìbuqǐ, xiànzài méiyǒu kòng wèizhì.",
        "a": "什么? 怎么又没有?",
        "aP": "Shénme? Zěnme yòu méiyǒu?",
        "hint": "반복되는 상황에 대한 실망 섞인 질문입니다.",
        "keywords": "空位置 (kòng wèizhì), 又 (yòu)",
        "weight": 1
    },
    {
        "q": "从明天开始我要早点儿睡觉。",
        "qP": "Cóng míngtiān kāishǐ wǒ yào zǎodiǎnr shuìjiào.",
        "a": "是吗? 我也要早点儿睡觉。",
        "aP": "Shì ma? Wǒ yě yào zǎodiǎnr shuìjiào.",
        "hint": "결심에 대한 동조 표현입니다.",
        "keywords": "早点儿 (zǎodiǎnr), 睡觉 (shuìjiào)",
        "weight": 1
    },
    {
        "q": "你写字写得很好。",
        "qP": "Nǐ xiě zì xiě de hěn hǎo.",
        "a": "没有啊, 我写得不太好。",
        "aP": "Méiyǒu a, wǒ xiě de bù tài hǎo.",
        "hint": "글씨 실력 칭찬에 대한 겸손한 대답입니다.",
        "keywords": "写字 (xiě zì), 不太好 (bù tài hǎo)",
        "weight": 1
    },
    {
        "q": "我的手机不见了。",
        "qP": "Wǒ de shǒujī bù jiàn le.",
        "a": "你的手机不见了? 那怎么办?",
        "aP": "Nǐ de shǒujī bù jiàn le? Nà zěnme bàn?",
        "hint": "분실 상황에 대한 맞장구 질문입니다.",
        "keywords": "手机 (shǒujī), 不见了 (bù jiàn le)",
        "weight": 1
    },
    {
        "q": "我觉得演唱会的票有点儿贵。",
        "qP": "Wǒ juéde yǎnchànghuì de piào yǒudiǎnr guì.",
        "a": "你说得对, 我也觉得演唱会的票有点儿贵。",
        "aP": "Nǐ shuō de duì, wǒ yě juéde yǎnchànghuì de piào yǒudiǎnr guì.",
        "hint": "가격에 대한 공통된 의견 표현입니다.",
        "keywords": "演唱会 (yǎnchànghuì), 贵 (guì)",
        "weight": 1
    },
    {
        "q": "小李已经下班了。",
        "qP": "Xiǎo lǐ yǐjīng xiàbān le.",
        "a": "小李已经下班了? 那怎么办?",
        "aP": "Xiǎo lǐ yǐjīng xiàbān le? Nà zěnme bàn?",
        "hint": "퇴근 소식에 대한 질문 답변입니다.",
        "keywords": "下班 (xiàbān), 怎么办 (zěnme bàn)",
        "weight": 1
    },
    {
        "q": "不好意思, 您要的衣服现在没有。",
        "qP": "Bù hǎoyìsi, nín yào de yīfu xiànzài méiyǒu.",
        "a": "什么? 怎么又没有?",
        "aP": "Shénme? Zěnme yòu méiyǒu?",
        "hint": "품절 소식에 대한 반복적인 아쉬움의 표현입니다.",
        "keywords": "衣服 (yīfu), 没有 (méiyǒu)",
        "weight": 1
    },
    {
        "q": "下个月我打算学游泳。",
        "qP": "Xià ge yuè wǒ dǎsuàn xué yóuyǒng.",
        "a": "是吗? 我也打算学游泳。",
        "aP": "Shì ma? Wǒ yě dǎsuàn xué yóuyǒng.",
        "hint": "배움에 대한 계획에 공감하는 답변입니다.",
        "keywords": "打算 (dǎsuàn), 游泳 (yóuyǒng)",
        "weight": 1
    },
    {
        "q": "你经常去书店吗?",
        "qP": "Nǐ jīngcháng qù shūdiàn ma?",
        "a": "我经常去书店。",
        "aP": "Wǒ jīngcháng qù shūdiàn.",
        "hint": "빈도를 나타내는 부사 '经常'을 사용한 질문입니다.",
        "keywords": "经常 (jīngcháng), 书店 (shūdiàn)",
        "weight": 1
    },
    {
        "q": "下周的考试, 你想跟谁一起准备?",
        "qP": "Xiàzhōu de kǎoshì, nǐ xiǎng gēn shéi yìqǐ zhǔnbèi?",
        "a": "下周的考试, 我想跟哥哥一起准备。",
        "aP": "Xiàzhōu de kǎoshì, wǒ xiǎng gēn gēge yìqǐ zhǔnbèi.",
        "hint": "~와 함께(跟~一起) 무엇을 하는지 묻는 표현입니다.",
        "keywords": "准备 (zhǔnbèi), 哥哥 (gēge)",
        "weight": 1
    },
    {
        "q": "明天跟同事们一起去爬山怎么样?",
        "qP": "Míngtiān gēn tóngshìmen yìqǐ qù páshān zěnmeyàng?",
        "a": "好, 一起去爬山吧。",
        "aP": "Hǎo, yìqǐ qù páshān ba.",
        "hint": "상대방에게 제안(怎么样)하고 이에 동의(吧)하는 대화입니다.",
        "keywords": "同事 (tóngshì), 爬山 (páshān)",
        "weight": 1
    },
    {
        "q": "百货商店已经关门了。",
        "qP": "Bǎihuò shāngdiàn yǐjīng guānmén le.",
        "a": "百货商店已经关门了? 那怎么办?",
        "aP": "Bǎihuò shāngdiàn yǐjīng guānmén le? Nà zěnmebàn?",
        "hint": "이미 일어난 상황(已经~了)에 대한 대처를 묻는 표현입니다.",
        "keywords": "百货商店 (bǎihuò shāngdiàn), 怎么办 (zěnmebàn)",
        "weight": 1
    },
    {
        "q": "你多长时间换一次手机?",
        "qP": "Nǐ duō cháng shíjiān huàn yí cì shǒujī?",
        "a": "我一年换一次手机。",
        "aP": "Wǒ yì nián huàn yí cì shǒujī.",
        "hint": "주기나 빈도(多长时间~一次)를 묻고 답하는 문장입니다.",
        "keywords": "换 (huàn), 手机 (shǒujī)",
        "weight": 1
    },
    {
        "q": "你通常在哪儿锻炼身体?",
        "qP": "Nǐ tōngcháng zài nǎr duànliàn shēntǐ?",
        "a": "我通常在家锻炼身体。",
        "aP": "Wǒ tōngcháng zài jiā duànliàn shēntǐ.",
        "hint": "장소를 나타내는 전치사 '在'를 활용한 문장입니다.",
        "keywords": "通常 (tōngcháng), 锻炼 (duànliàn)",
        "weight": 1
    },
    {
        "q": "这家餐厅的菜很好吃, 尝一尝吧。",
        "qP": "Zhè jiā cāntīng de cài hěn hǎochī, cháng yì cháng ba.",
        "a": "好, 尝一尝吧。",
        "aP": "Hǎo, cháng yì cháng ba.",
        "hint": "동사를 중첩(尝一尝)하여 '한 번 해보다'라는 의미를 전달합니다.",
        "keywords": "餐厅 (cāntīng), 尝 (cháng)",
        "weight": 1
    },
    {
        "q": "你汉语说得真棒!",
        "qP": "Nǐ Hànyǔ shuō de zhēn bàng!",
        "a": "没有啊, 我说得不太好。",
        "aP": "Méiyǒu a, wǒ shuō de bú tài hǎo.",
        "hint": "정도를 나타내는 보어 '得'와 겸손한 대답 '没有'가 핵심입니다.",
        "keywords": "汉语 (Hànyǔ), 真棒 (zhēn bàng)",
        "weight": 1
    },
    {
        "q": "我觉得这个帽子很好看。",
        "qP": "Wǒ juéde zhège màozi hěn hǎokàn.",
        "a": "你说得对, 我也觉得这个帽子很好看。",
        "aP": "Nǐ shuō de duì, wǒ yě juéde zhège màozi hěn hǎokàn.",
        "hint": "자신의 의견(我觉得)을 말하고 상대방에게 동의하는 표현입니다.",
        "keywords": "觉得 (juéde), 帽子 (màozi)",
        "weight": 1
    },
    {
        "q": "家人过生日时, 你一般送什么礼物?",
        "qP": "Jiārén guò shēngrì shí, nǐ yìbān sòng shénme lǐwù?",
        "a": "家人过生日时, 我一般送衣服。",
        "aP": "Jiārén guò shēngrì shí, wǒ yìbān sòng yīfu.",
        "hint": "~할 때(~时)를 사용하여 특정 상황의 습관을 묻습니다.",
        "keywords": "生日 (shēngrì), 礼物 (lǐwù)",
        "weight": 1
    },
    {
        "q": "对不起, 现在我们超市没有猪肉。",
        "qP": "Duìbuqǐ, xiànzài wǒmen chāoshì méiyǒu zhūròu.",
        "a": "什么? 怎么又没有?",
        "aP": "Shénme? Zěnme yòu méiyǒu?",
        "hint": "부정문 '没有'와 반복을 나타내는 '又'가 포함된 당황스러운 상황입니다.",
        "keywords": "超市 (chāoshì), 猪肉 (zhūròu)",
        "weight": 1
    },
    {
        "q": "你最近写过信吗?",
        "qP": "Nǐ zuìjìn xiěguò xìn ma?",
        "a": "我最近写过信.",
        "aP": "Wǒ zuìjìn xiěguò xìn.",
        "hint": "경험을 나타내는 '过'를 사용하여 과거의 경험을 묻습니다.",
        "keywords": "最近 (zuìjìn), 写信 (xiě xìn)",
        "weight": 1
    },
    {
        "q": "这是我做的菜, 怎么样?",
        "qP": "Zhè shì wǒ zuò de cài, zěnmeyàng?",
        "a": "我觉得你做的菜很不错。",
        "aP": "Wǒ juéde nǐ zuò de cài hěn búcuò.",
        "hint": "상태를 묻는 '怎么样'과 칭찬의 표현 '不错'이 핵심입니다.",
        "keywords": "做菜 (zuò cài), 不错 (búcuò)",
        "weight": 1
    },
    {
        "q": "你现在有시간的话, 能帮我一下吧。",
        "qP": "Nǐ xiànzài yǒu shíjiān dehuà, néng bāng wǒ yíxià ba.",
        "a": "当然可以, 我帮你。",
        "aP": "Dāngrán kěyǐ, wǒ bāng nǐ.",
        "hint": "가정(~的话)과 조동사(能)를 사용한 정중한 부탁 표현입니다.",
        "keywords": "帮 (bāng), 帮忙 (bāngmáng)",
        "weight": 1
    },
    {
        "q": "我打算下个月去欧洲旅行。",
        "qP": "Wǒ dǎsuàn xià gè yuè qù Ōuzhōu lǚxíng.",
        "a": "是吗? 我야打算下个月去欧洲旅行。",
        "aP": "Shì ma? Wǒ yě dǎsuàn xià gè yuè qù Ōuzhōu lǚxíng.",
        "hint": "계획(打算)을 말하고 상대방의 의견에 동조(也是)하는 대화입니다.",
        "keywords": "打算 (dǎsuàn), 旅行 (lǚxíng)",
        "weight": 1
    },
    {
        "q": "你这次暑假过得怎么样?",
        "qP": "Nǐ zhè cì shǔjià guò de zěnmeyàng?",
        "a": "我这次暑假过得不好。",
        "aP": "Wǒ zhè cì shǔjià guò de bù hǎo.",
        "hint": "시간을 보내다(过) 뒤에 정도보어 '得'를 사용하여 상태를 묘사합니다.",
        "keywords": "暑假 (shǔjià), 过 (guò)",
        "weight": 1
    },
    {
        "q": "你打算什么时候请一天假?",
        "qP": "Nǐ dǎsuàn shénme shíhou qǐng yì tiān jià?",
        "a": "我打算这周五请一天假。",
        "aP": "Wǒ dǎsuàn zhè zhōuwǔ qǐng yì tiān jià.",
        "hint": "휴가를 내다(请假)라는 이합동사를 활용한 문장입니다.",
        "keywords": "请假 (qǐngjià), 时候 (shíhou)",
        "weight": 1
    },
    {
        "q": "咱们怎么去机场?",
        "qP": "Zánmen zěnme qù jīchǎng?",
        "a": "坐地铁吧。",
        "aP": "Zuò dìtiě ba.",
        "hint": "방법을 묻는 '怎么'와 교통수단을 이용할 때 쓰는 '坐'가 핵심입니다.",
        "keywords": "机场 (jīchǎng), 地铁 (dìtiě)",
        "weight": 1
    }
];
