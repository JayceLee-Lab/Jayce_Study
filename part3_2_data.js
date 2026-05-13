// TSC 제 3부분 연습용 데이터베이스
const PART3_2_DATA = [
	{
		"q": "您想买什么？",
		"qP": "Nín xiǎng mǎi shénme?",
		"a": "今天是我爱人的生日，我爱人喜欢红色的，您给我推荐一下。",
		"aP": "Jīntiān shì wǒ àiren de shēngrì, wǒ àiren xǐhuān hóngsè de, nín gěi wǒ tuījiàn yíxià.",
		"hint": "꽃집(花店)에서 판매원(售货员)이 묻는 상황입니다.",
		"keywords": "生日 (shēngrì), 推荐 (tuījiàn), 红色 (hóngsè)",
		"weight": 1
	},
    {
        "q": "你要买什么?",
        "qP": "Nǐ yào mǎi shénme?",
        "a": "我想买一本汉语书, 最近流行什么? 您给我推荐一下。",
        "aP": "Wǒ xiǎng mǎi yì běn Hànyǔ shū, zuìjìn liúxíng shénme? Nín gěi wǒ tuījiàn yíxià.",
        "hint": "서점(书店)에서 책을 추천받는 상황입니다.",
        "keywords": "汉语书 (Hànyǔ shū), 流行 (liúxíng)",
        "weight": 1
    },
    {
        "q": "你喜欢什么颜色的钱包?",
        "qP": "Nǐ xǐhuān shénme yánsè de qiánbāo?",
        "a": "我喜欢黑色的, 最近流行什么? 您给我推荐一下。",
        "aP": "Wǒ xǐhuān hēisè de, zuìjìn liúxíng shénme? Nín gěi wǒ tuījiàn yíxià.",
        "hint": "백화점(百货商店)에서 판매원(收货员)과 지갑 색상에 대해 대화하는 상황입니다.",
        "keywords": "黑色 (hēisè), 钱包 (qiánbāo)",
        "weight": 1
    },
	{
		"q": "这是今年新出的款式，您试试吧。",
		"qP": "Zhè shì jīnnián xīn chū de kuǎnshì, nín shìshì ba.",
		"a": "是吗？颜色、款式我都喜欢。请给我中号的。",
		"aP": "Shì ma? Yánsè, kuǎnshì wǒ dōu xǐhuān. Qǐng gěi wǒ zhōnghào de.",
		"hint": "의류 매장(服装店)에서 신상을 입어보는 상황입니다.",
		"keywords": "款式 (kuǎnshì, 디자인), 中号 (zhōnghào), 颜色 (yánsè, 색상)",
		"weight": 1
	},
	{
		"q": "对不起，这种款式小号的已经卖完了。",
		"qP": "Duìbuqǐ, zhèzhǒng kuǎnshì xiǎohào de yǐjīng màiwán le.",
		"a": "是吗？太可惜了，那我去别的地方看看。",
		"aP": "Shì ma? Tài kěxī le, nà wǒ qù bié de dìfang kànkan.",
		"hint": "신발 가게(鞋店)에서 작은 사이즈가 품절된 상황입니다.",
		"keywords": "小号 (xiǎohào), 卖完 (màiwán), 款式 (kuǎnshì)",
		"weight": 1
	},
    {
        "q": "对不起, 没有您要的号码。",
        "qP": "Duìbuqǐ, méiyǒu nín yào de hàomǎ.",
        "a": "是吗? 太可惜了, 那我去别的地方看看。",
        "aP": "Shì ma? Tài kěxī le, nà wǒ qù bié de dìfang kànkan.",
        "hint": "신발 가게(鞋店)에서 맞는 사이즈가 없는 상황입니다.",
        "keywords": "号码 (hàomǎ), 可惜 (kěxī)",
        "weight": 1
    },
    {
        "q": "不好意思, 您选的果汁卖完了。",
        "qP": "Bù hǎoyìsi, nín xuǎn de guǒzhī màiwán le.",
        "a": "是吗? 太可惜了, 那我去别的地方看看。",
        "aP": "Shì ma? Tài kěxī le, nà wǒ qù bié de dìfang kànkan.",
        "hint": "커피숍(咖啡店)에서 주문한 주스가 품절된 상황입니다.",
        "keywords": "果汁 (guǒzhī), 卖完 (màiwán)",
        "weight": 1
    },
    {
        "q": "鸡肉卖没了, 只有猪肉。",
        "qP": "Jīròu mài méi le, zhǐyǒu zhūròu.",
        "a": "是吗? 那给我一斤猪肉。多少钱?",
        "aP": "Shì ma? Nà gěi wǒ yì jīn zhūròu. Duōshǎo qián?",
        "hint": "정육점(肉店)에서 닭고기가 없어 돼지고기를 사는 상황입니다.",
        "keywords": "猪肉 (zhūròu), 多少钱 (duōshǎo qián)",
        "weight": 1
    },
    {
        "q": "黑色的车卖完了, 你想买黑色的要等六个月。",
        "qP": "Hēisè de chē màiwán le, nǐ xiǎng mǎi hēisè de yào děng liù gè yuè.",
        "a": "六个月, 太长了。那您给我推荐一下别的车。",
        "aP": "Liù gè yuè, tài cháng le. Nà nín gěi wǒ tuījiàn yíxià bié de chē.",
        "hint": "검은색 차를 사려면 6개월을 기다려야 하는 상황입니다.",
        "keywords": "六个月 (liù gè yuè), 推荐 (tuījiàn)",
        "weight": 1
    },
    {
        "q": "这款车是新上市的。您觉得怎么样?",
        "qP": "Zhè kuǎn chē shì xīn shàngshì de. Nín juéde zěnmeyàng?",
        "a": "不过我不喜欢这个颜色, 这款车有黑色吗?",
        "aP": "Búguò wǒ bù xǐhuān zhège yánsè, zhè kuǎn chē yǒu hēisè ma?",
        "hint": "자동차 매장(车行)에서 노란색 신차를 보며 점원(店员)과 대화하는 상황입니다.",
        "keywords": "上市 (shàngshì), 颜色 (yánsè)",
        "weight": 1
    },
    {
        "q": "您买的家具, 什么时候给您送到家啊?",
        "qP": "Nín mǎi de jiājù, shénme shíhou gěi nín sòngdào jiā a?",
        "a": "明天吧, 今天家里没有人, 明天我在家。",
        "aP": "Míngtiān ba, jīntiān jiālǐ méiyǒu rén, míngtiān wǒ zài jiā.",
        "hint": "구매한 가구의 배송 시간을 정하는 상황입니다.",
        "keywords": "家具 (jiājù), 送到家 (sòngdào jiā)",
        "weight": 1
    },
    {
        "q": "这台冰箱什么时候送到您家好呢?",
        "qP": "Zhè tái bīngxiāng shénme shíhou sòngdào nín jiā hǎo ne?",
        "a": "明天吧, 今天家里没有人, 明天我在家。",
        "aP": "Míngtiān ba, jīntiān jiālǐ méiyǒu rén, míngtiān wǒ zài jiā.",
        "hint": "냉장고 배송 시간을 정하는 상황입니다.",
        "keywords": "冰箱 (bīngxiāng), 送到 (sòngdào)",
        "weight": 1
    },
	{
		"q": "这张桌子送到哪儿？",
		"qP": "Zhè zhāng zhuōzi sòngdào nǎr?",
		"a": "送到这里吧。这是我家的地址。",
		"aP": "Sòngdào zhèlǐ ba. Zhè shì wǒ jiā de dìzhǐ.",
		"hint": "탁자를 배달할 주소를 알려주는 상황입니다.",
		"keywords": "桌子 (zhuōzi), 地址 (dìzhǐ), 送到 (sòngdào)",
		"weight": 1
	},
	{
		"q": "你的手表很适合你。",
		"qP": "Nǐ de shǒubiǎo hěn shìhé nǐ.",
		"a": "谢谢！这是我爱人给我买的生日礼物，我很喜欢。",
		"aP": "Xièxie! Zhè shì wǒ àiren gěi wǒ mǎi de shēngrì lǐwù, wǒ hěn xǐhuān.",
		"hint": "두 친구가 서로의 물건에 대해 이야기하는 상황입니다.",
		"keywords": "适合 (shìhé), 礼物 (lǐwù), 手表 (shǒubiǎo)",
		"weight": 1
	},
    {
        "q": "这是昨天新买的衣服, 你觉得怎么样?",
        "qP": "Zhè shì zuótiān xīn mǎi de yīfu, nǐ juéde zěnmeyàng?",
        "a": "非常漂亮, 你穿这个颜色非常好看。",
        "aP": "Fēicháng piàoliang, nǐ chuān zhège yánsè fēicháng hǎokàn.",
        "hint": "새로 산 옷에 대한 의견을 묻고 칭찬하는 상황입니다.",
        "keywords": "漂亮 (piàoliang), 颜色 (yánsè)",
        "weight": 1
    },
    {
        "q": "你看, 我新买的车怎么样?",
        "qP": "Nǐ kàn, wǒ xīn mǎi de chē zěnmeyàng?",
        "a": "哇! 真漂亮。也很舒服, 什么时候买的? 我也想买的。",
        "aP": "Wa! Zhēn piàoliang. Yě hěn shūfu, shénme shíhou mǎi de? Wǒ yě xiǎng mǎi de.",
        "hint": "두 사람이 차 안에서 대화를 나누는 상황입니다.",
        "keywords": "舒服 (shūfu), 什么时候 (shénme shíhou)",
        "weight": 1
    },
    {
        "q": "你喜欢白色还是黑色?",
        "qP": "Nǐ xǐhuān báisè háishì hēisè?",
        "a": "我更喜欢黑色, 黑色看起来很漂亮。",
        "aP": "Wǒ gèng xǐhuān hēisè, hēisè kànqǐlái hěn piàoliang.",
        "hint": "두 가지 선택지 중 선호도를 묻는 '还是' 문장입니다.",
        "keywords": "还是 (háishì), 看起来 (kànqǐlái)",
        "weight": 1
    },
    {
        "q": "这是最近流行的帽子。",
        "qP": "Zhè shì zuìjìn liúxíng de màozi.",
        "a": "是吗? 不过我不喜欢这个颜色。",
        "aP": "Shì ma? Búguò wǒ bù xǐhuān zhège yánsè.",
        "hint": "모자 가게(帽子店)에서 점원의 추천에 자신의 기호를 말하는 상황입니다.",
        "keywords": "流行 (liúxíng), 颜色 (yánsè)",
        "weight": 1
    },
    {
        "q": "你要买什么样的自行车?",
        "qP": "Nǐ yào mǎi shénmeyàng de zìxíngchē?",
        "a": "我要买孩子的自行车。他今年五岁了, 您给我推荐一下。",
        "aP": "Wǒ yào mǎi háizi de zìxíngchē. Tā jīnnián wǔ suì le, nín gěi wǒ tuījiàn yíxià.",
        "hint": "자녀를 위한 자전거를 추천받는 상황입니다.",
        "keywords": "自行车 (zìxíngchē), 推荐 (tuījiàn)",
        "weight": 1
    },
	{
		"q": "您新买包了，真漂亮！",
		"qP": "Nín xīn mǎi bāo le, zhēn piàoliang!",
		"a": "谢谢，昨天去百货商店买的。百货商店的东西正在打折。你也去看看吧。",
		"aP": "Xièxie, zuótiān qù bǎihuò shāngdiàn mǎi de. Bǎihuò shāngdiàn de dōngxi zhèngzài dǎzhé. Nǐ yě qù kànkan ba.",
		"hint": "친구와 가방과 백화점 할인 정보에 대해 이야기하는 상황입니다.",
		"keywords": "百货商店 (bǎihuò shāngdiàn), 打折 (dǎzhé), 包 (bāo)",
		"weight": 1
	},
	{
		"q": "我们商店的帽子正在打折。",
		"qP": "Wǒmen shāngdiàn de màozi zhèngzài dǎzhé.",
		"a": "我想买一顶棒球帽，有白色的吗？可以试试吗？",
		"aP": "Wǒ xiǎng mǎi yì dǐng bàngqiúmào, yǒu báisè de ma? Kěyǐ shìshì ma?",
		"hint": "입구에서 손님을 부르는 판매원에게 특정 모자를 찾는 상황입니다.",
		"keywords": "棒球帽 (bàngqiúmào), 试试 (shìshì), 白色 (báisè)",
		"weight": 1
	},
    {
        "q": "这个戒指真好看, 你觉得呢?",
        "qP": "Zhège jièzhi zhēn hǎokàn, nǐ juéde ne?",
        "a": "我也觉得很漂亮, 你喜欢的话我给你买。你要看看吗?",
        "aP": "Wǒ yě juéde hěn piàoliang, nǐ xǐhuān dehuà wǒ gěi nǐ mǎi. Nǐ yào kànkan ma?",
        "hint": "백화점에서 남녀가 반지를 구경하며 대화하는 상황입니다.",
        "keywords": "戒指 (jièzhi), 漂亮 (piàoliang), 你喜欢的话 (nǐ xǐhuān dehuà, 너가 좋아한다면)",
        "weight": 1
    },
    {
        "q": "你经常来百货商店吗?",
        "qP": "Nǐ jīngcháng lái bǎihuò shāngdiàn ma?",
        "a": "我不常来百货商店, 我觉得这儿的东西太贵了, 我喜欢网购。",
        "aP": "Wǒ bù cháng lái bǎihuò shāngdiàn, wǒ juéde zhèr de dōngxi tài guì le, wǒ xǐhuān wǎnggòu.",
        "hint": "쇼핑 습관(백화점 vs 온라인 쇼핑)에 대해 대화하는 상황입니다.",
        "keywords": "贵 (guì), 网购 (wǎnggòu)",
        "weight": 1
    },
	{
		"q": "你吃早饭了吗?",
		"qP": "Nǐ chī zǎofàn le ma?",
		"a": "吃了。在公司食堂吃的。我每天在公司食堂吃早饭，你呢?",
		"aP": "Chī le. Zài gōngsī shítáng chī de. Wǒ měitiān zài gōngsī shítáng chī zǎofàn, nǐ ne?",
		"hint": "회사 사무실에서 두 사람이 아침 식사에 대해 이야기합니다.",
		"keywords": "早饭 (zǎofàn), 公司 (gōngsī), 食堂 (shítáng)",
		"weight": 1
	},
	{
		"q": "你常来这家餐厅吗?",
		"qP": "Nǐ cháng lái zhè jiā cāntīng ma?",
		"a": "是的，这家餐厅服务很好，而且菜也好吃，我经常来吃。",
		"aP": "Shì de, zhè jiā cāntīng fúwù hěn hǎo, érqiě cài yě hǎochī, wǒ jīngcháng lái chī.",
		"hint": "식당 서비스와 음식 맛에 대해 이야기하는 대화입니다.",
		"keywords": "餐厅 (cāntīng), 服务 (fúwù), 好吃 (hǎochī), 而且 (érqiě, 그리고)",
		"weight": 1
	},
	{
		"q": "这家餐厅太贵了，我们去别的餐厅吧。",
		"qP": "Zhè jiā cāntīng tài guì le, wǒmen qù bié de cāntīng ba.",
		"a": "是啊，我也觉得很贵。我家附近有一个中餐厅，那儿好吃不贵，我们一起去吧。",
		"aP": "Shì a, wǒ yě juéde hěn guì. Wǒ jiā fùjìn yǒu yí gè zhōngcāntīng, nàr hǎochī bú guì, wǒmen yìqǐ qù ba.",
		"hint": "비싼 식당 대신 다른 식당으로 가자고 제안하는 대화입니다.",
		"keywords": "贵 (guì), 中餐厅 (zhōngcāntīng), 一起 (yìqǐ)",
		"weight": 1
	},
	{
		"q": "午饭时间到了，咱们边吃边谈吧。",
		"qP": "Wǔfàn shíjiān dào le, zánmen biān chī biān tán ba.",
		"a": "好的，公司附近有一家中餐厅，那儿的麻辣香锅特别好吃，我们一起去怎么样?",
		"aP": "Hǎo de, gōngsī fùjìn yǒu yì jiā zhōngcāntīng, nàr de málàxiāngguō tèbié hǎochī, wǒmen yìqǐ qù zěnmeyàng?",
		"hint": "점심시간에 같이 식사하며 이야기하자는 직장 동료 간의 대화입니다.",
		"keywords": "午饭 (wǔfàn), 麻辣香锅 (málàxiāngguō), 一起 (yìqǐ), 边吃边谈 (biān chī biān tán, 먹으면서 얘기하다), 特别 (tèbié, 특별히)",
		"weight": 1
	},
	{
		"q": "你为什么吃得这么少?",
		"qP": "Nǐ wèishénme chī de zhème shǎo?",
		"a": "我最近长胖了，正在减肥，你多吃点儿吧。",
		"aP": "Wǒ zuìjìn zhǎng pàng le, zhèngzài jiǎnféi, nǐ duō chī diǎnr ba.",
		"hint": "식당에서 다이어트 때문에 적게 먹는 이유를 설명하는 대화입니다.",
		"keywords": "长胖 (zhǎng pàng), 减肥 (jiǎnféi, 다이어트), 多吃点儿 (duō chī diǎnr, 많이 드세요)",
		"weight": 1
	},
	{
		"q": "这是谁做的？真好吃。",
		"qP": "Zhè shì shuí zuò de? Zhēn hǎochī.",
		"a": "当然是我做的，好吃的话多吃点儿。",
		"aP": "Dāngrán shì wǒ zuò de, hǎochī de huà duō chī diǎnr.",
		"hint": "식사 자리에서 음식이 누구의 요리인지 묻는 대화입니다.",
		"keywords": "拿手菜 (náshǒucài), 好吃 (hǎochī), 好吃的话 (hǎochī de huà, 맛있다면), 多吃点儿 (duō chī diǎnr)",
		"weight": 1
	},
	{
		"q": "这家餐厅的服务态度太差了。",
		"qP": "Zhè jiā cāntīng de fúwù tàidù tài chà le.",
		"a": "是啊，服务很差，我们去别的餐厅吧。",
		"aP": "Shì a, fúwù hěn chà, wǒmen qù bié de cāntīng ba.",
		"hint": "식당 서비스에 불만을 이야기하는 대화입니다.",
		"keywords": "服务态度 (fúwù tàidù, 복무 태도), 差 (chà, 떨어지다)",
		"weight": 1
	},
	{
		"q": "现在没有座位。",
		"qP": "Xiànzài méiyǒu zuòwèi.",
		"a": "哦，那我们可以等吗？要等多长时间？",
		"aP": "Ó, nà wǒmen kěyǐ děng ma? Yào děng duō cháng shíjiān?",
		"hint": "식당에서 자리가 없어서 기다릴 수 있는지 묻는 상황입니다.",
		"keywords": "座位 (zuòwèi, 자리), 等 (děng), 多长时间 (duō cháng shíjiān)",
		"weight": 1
	},
	{
		"q": "你经常自己做菜吗?",
		"qP": "Nǐ jīngcháng zìjǐ zuò cài ma?",
		"a": "我一个人住，经常去外边吃饭，不常做菜。",
		"aP": "Wǒ yí gèrén zhù, jīngcháng qù wàibian chīfàn, bù cháng zuò cài.",
		"hint": "혼자 사는 사람이 요리를 자주 하는지 묻는 대화입니다.",
		"keywords": "自己做菜 (zìjǐ zuò cài, 스스로 요리), 外边 (wàibian), 一个人住 (yí gèrén zhù)",
		"weight": 1
	},
	{
		"q": "这是我做的果汁，你尝尝吧。",
		"qP": "Zhè shì wǒ zuò de guǒzhī, nǐ chángchang ba.",
		"a": "哇！真好喝。怎么做的，你教我吧。",
		"aP": "Wa! Zhēn hǎohē. Zěnme zuò de, nǐ jiāo wǒ ba.",
		"hint": "직접 만든 과일주스를 권하며 이야기하는 대화입니다.",
		"keywords": "果汁 (guǒzhī), 好喝 (hǎohē), 教 (jiāo, 알려주다)",
		"weight": 1
	},
	{
		"q": "你要加糖吗?",
		"qP": "Nǐ yào jiā táng ma?",
		"a": "不用，谢谢，您家的咖啡很好喝。",
		"aP": "Bú yòng, xièxie, nín jiā de kāfēi hěn hǎohē.",
		"hint": "카페에서 손님과 직원이 커피에 설탕을 넣을지 대화하는 상황입니다.",
		"keywords": "加糖 (jiā táng, 설탕 추가), 咖啡 (kāfēi), 好喝 (hǎohē)",
		"weight": 1
	},
	{
		"q": "你喜欢吃酸的还是甜的?",
		"qP": "Nǐ xǐhuan chī suān de háishi tián de?",
		"a": "我喜欢吃甜的，特别喜欢吃蛋糕和巧克力。你喜欢甜食吗?",
		"aP": "Wǒ xǐhuan chī tián de, tèbié xǐhuan chī dàngāo hé qiǎokèlì. Nǐ xǐhuan tiánshí ma?",
		"hint": "음식 취향에 대해 이야기하는 대화입니다.",
		"keywords": "酸 (suān, 시다), 甜 (tián, 달다), 蛋糕 (dàngāo), 巧克力 (qiǎokèlì)",
		"weight": 1
	},
	{
		"q": "你喜欢吃鱼吗?",
		"qP": "Nǐ xǐhuan chī yú ma?",
		"a": "喜欢，我听说吃鱼对身体好，你喜欢吗?",
		"aP": "Xǐhuan, wǒ tīngshuō chī yú duì shēntǐ hǎo, Nǐ xǐhuan ma?",
		"hint": "생선이 건강에 좋다는 이야기를 하는 대화입니다.",
		"keywords": "鱼 (yú, 생선), 身体 (shēntǐ), 经常 (jīngcháng)",
		"weight": 1
	},
	{
		"q": "今天天气真好，我们出去怎么样?",
		"qP": "Jīntiān tiānqì zhēn hǎo, wǒmen chūqù zěnmeyàng?",
		"a": "好的，我们去附近的公园散散步吧。那儿风景很美。",
		"aP": "Hǎo de, wǒmen qù fùjìn de gōngyuán sànsanbù ba. Nàr fēngjǐng hěn měi.",
		"hint": "날씨가 좋아서 밖에 나가자는 제안입니다.",
		"keywords": "天气 (tiānqì), 公园 (gōngyuán), 散步 (sànbù), 风景 (fēngjǐng, 풍경), 美 (měi, 아름답다)",
		"weight": 1
	},
	{
		"q": "我们看这部电影怎么样?",
		"qP": "Wǒmen kàn zhè bù diànyǐng zěnmeyàng?",
		"a": "好啊，我听说这部电影很有意思，买完电影票以后，我们去买咖啡吧。",
		"aP": "Hǎo a, wǒ tīngshuō zhè bù diànyǐng hěn yǒuyìsi, mǎi wán diànyǐngpiào yǐhòu, wǒmen qù mǎi kāfēi ba.",
		"hint": "영화를 보고 커피를 마시자는 친구 사이의 대화입니다.",
		"keywords": "电影 (diànyǐng), 电影票 (diànyǐngpiào), 咖啡 (kāfēi)",
		"weight": 1
	},
	{
		"q": "这儿附近新开了一家川菜馆，我们一起去，怎么样?",
		"qP": "Zhèr fùjìn xīn kāi le yì jiā chuāncàiguǎn, wǒmen yìqǐ qù, zěnmeyàng?",
		"a": "好的，我喜欢川菜。听说那儿的麻辣香锅特别好吃，咱们去尝尝吧。",
		"aP": "Hǎo de, wǒ xǐhuan chuāncài. Tīngshuō nàr de málàxiāngguō tèbié hǎochī, zánmen qù chángchang ba.",
		"hint": "새로 생긴 사천요리 식당에 가자는 제안입니다.",
		"keywords": "川菜馆 (chuāncàiguǎn, 사천요리집), 麻辣香锅 (málàxiāngguō), 尝尝 (chángchang)",
		"weight": 1
	},
	{
		"q": "我有两张电影票，我们一起去看怎么样?",
		"qP": "Wǒ yǒu liǎng zhāng diànyǐngpiào, wǒmen yìqǐ qù kàn zěnmeyàng?",
		"a": "不好意思，我最近很忙，每天都加班，累死了。",
		"aP": "Bù hǎoyìsi, wǒ zuìjìn hěn máng, měitiān dōu jiābān, lèi sǐ le.",
		"hint": "영화 제안을 바빠서 거절하는 대화입니다.",
		"keywords": "电影票 (diànyǐngpiào), 加班 (jiābān, 야근), 累死了 (lèi sǐ le, 힘들어죽겠다)",
		"weight": 1
	},
	{
		"q": "你可以把上次说的那本书借给我吗？",
		"qP": "Nǐ kěyǐ bǎ shàng cì shuō de nà běn shū jiè gěi wǒ ma?",
		"a": "没问题，那本书在家里，我明天给你。",
		"aP": "Méi wèntí, nà běn shū zài jiālǐ, wǒ míngtiān gěi nǐ.",
		"hint": "두 친구가 책을 빌리는 상황의 대화입니다.",
		"keywords": "书 (shū), 借给 (jiè gěi), 明天 (míngtiān)",
		"weight": 1
	},
	{
		"q": "我带了些水果，咱们一起吃吧。",
		"qP": "Wǒ dài le xiē shuǐguǒ, zánmen yìqǐ chī ba.",
		"a": "太好了，你带了这么多！这个苹果真好吃，你在哪儿买的？",
		"aP": "Tài hǎo le, nǐ dài le zhème duō! Zhège píngguǒ zhēn hǎochī, nǐ zài nǎr mǎi de?",
		"hint": "과일을 함께 먹으며 이야기하는 대화입니다.",
		"keywords": "水果 (shuǐguǒ), 苹果 (píngguǒ), 好吃 (hǎochī)",
		"weight": 1
	},
	{
		"q": "你帮我写资料可以吗？",
		"qP": "Nǐ bāng wǒ xiě zīliào kěyǐ ma?",
		"a": "不好意思，我现在要去参加会议，会议结束以后我帮你吧。",
		"aP": "Bù hǎoyìsi, wǒ xiànzài yào qù cānjiā huìyì, huìyì jiéshù yǐhòu wǒ bāng nǐ ba.",
		"hint": "회의 때문에 바로 도와주지 못하는 상황의 대화입니다.",
		"keywords": "资料 (zīliào, 자료), 会议 (huìyì), 参加 (cānjiā), 结束 (jiéshù)",
		"weight": 1
	},
	{
		"q": "您能寄给我新产品的资料吗？",
		"qP": "Nín néng jì gěi wǒ xīn chǎnpǐn de zīliào ma?",
		"a": "好的，没问题。我明天寄给您。然后，我给您发短信。",
		"aP": "Hǎo de, méiwèntí. Wǒ míngtiān jì gěi nín. Ránhòu, wǒ gěi nín fā duǎnxìn.",
		"hint": "신제품 자료를 보내달라고 요청하는 전화 대화입니다.",
		"keywords": "寄 (jì), 新产品 (xīn chǎnpǐn, 신제품), 资料 (zīliào, 자료), 然后 (Ránhòu, 그리고), 短信 (duǎnxìn)",
		"weight": 1
	},
	{
		"q": "考试结束了，周六一起看电影吧。",
		"qP": "Kǎoshì jiéshù le, zhōuliù yìqǐ kàn diànyǐng ba.",
		"a": "不好意思，周六我要去打工。你找别人吧。",
		"aP": "Bù hǎoyìsi, zhōuliù wǒ yào qù dǎgōng. Nǐ zhǎo biérén ba.",
		"hint": "시험 후 영화 제안을 아르바이트 때문에 거절하는 대화입니다.",
		"keywords": "考试 结束 (kǎoshì jiéshù, 시험 종료), 周六 (zhōuliù, 토요일), 打工 (dǎgōng, 아르바이트)",
		"weight": 1
	},
	{
		"q": "我不想喝咖啡，想喝点儿别的，可以吗？",
		"qP": "Wǒ bù xiǎng hē kāfēi, xiǎng hē diǎnr bié de, kěyǐ ma?",
		"a": "当然可以，我们还有绿茶和红茶，您想喝什么？",
		"aP": "Dāngrán kěyǐ, wǒmen hái yǒu lǜchá hé hóngchá, nín xiǎng hē shénme?",
		"hint": "커피 대신 다른 음료를 주문하는 대화입니다.",
		"keywords": "咖啡 (kāfēi), 绿茶 (lǜchá), 红茶 (hóngchá)",
		"weight": 1
	},
	{
		"q": "中午我们一起去吃汉堡包怎么样？",
		"qP": "Zhōngwǔ wǒmen yìqǐ qù chī hànbǎobāo zěnmeyàng?",
		"a": "好啊，吃汉堡又好吃又方便，而且省时。",
		"aP": "Hǎo a, chī hànbǎo yòu hǎochī yòu fāngbiàn, érqiě shěngshí.",
		"hint": "점심에 햄버거를 먹으러 가자는 대화입니다.",
		"keywords": "汉堡包 (hànbǎobāo), 方便 (fāngbiàn), 省时 (shěngshí, 시간 절약)",
		"weight": 1
	},
	{
		"q": "外边很冷，你能帮我关上窗户吗？",
		"qP": "Wàibian hěn lěng, nǐ néng bāng wǒ guānshang chuānghu ma?",
		"a": "好的，我马上去关。",
		"aP": "Hǎo de, wǒ mǎshàng qù guān.",
		"hint": "추워서 창문을 닫아달라고 부탁하는 대화입니다.",
		"keywords": "冷 (lěng), 窗户 (chuānghu), 马上 (mǎshàng)",
		"weight": 1
	},
	{
		"q": "你平时运动吗？",
		"qP": "Nǐ píngshí yùndòng ma?",
		"a": "我下班以后经常去健身房运动，周末去打高尔夫球，运动对身体好。",
		"aP": "Wǒ xiàbān yǐhòu jīngcháng qù jiànshēnfáng yùndòng, zhōumò qù dǎ gāo'ěrfūqiú, yùndòng duì shēntǐ hǎo.",
		"hint": "평소 운동 습관에 대해 이야기하는 대화입니다.",
		"keywords": "运动 (yùndòng), 健身房 (jiànshēnfáng, 헬스장), 高尔夫球 (gāo'ěrfūqiú, 골프치다)",
		"weight": 1
	},
	{
		"q": "我们去哪儿打羽毛球好呢？",
		"qP": "Wǒmen qù nǎr dǎ yǔmáoqiú hǎo ne?",
		"a": "我家附近有一个大公园，那儿有羽毛球场，我们去那儿打吧。",
		"aP": "Wǒ jiā fùjìn yǒu yí ge dà gōngyuán, nàr yǒu yǔmáoqiúchǎng, wǒmen qù nàr dǎ ba.",
		"hint": "배드민턴 칠 장소를 정하는 대화입니다.",
		"keywords": "羽毛球 (yǔmáoqiú, 배드민턴), 公园 (gōngyuán), 球场 (qiúchǎng)",
		"weight": 1
	},
	{
		"q": "现在冬天了，很适合去滑雪，你跟我去滑雪吧。",
		"qP": "Xiànzài dōngtiān le, hěn shìhé qù huáxuě, nǐ gēn wǒ qù huáxuě ba.",
		"a": "不好意思，我不喜欢滑雪，我觉得滑雪很累，没有意思。",
		"aP": "Bù hǎoyìsi, wǒ bù xǐhuan huáxuě, wǒ juéde huáxuě hěn lèi, méiyǒu yìsi.",
		"hint": "스키를 좋아하지 않는다고 말하는 대화입니다.",
		"keywords": "冬天 (dōngtiān), 滑雪 (huáxuě), 累 (lèi)",
		"weight": 1
	},
	{
		"q": "你会游泳吗？",
		"qP": "Nǐ huì yóuyǒng ma?",
		"a": "我不会游泳，我想学游泳。你会吗？",
		"aP": "Wǒ bú huì yóuyǒng, wǒ xiǎng xué yóuyǒng. Nǐ huì ma?",
		"hint": "수영을 배우고 싶다고 말하는 대화입니다.",
		"keywords": "游泳 (yóuyǒng), 学 (xué)",
		"weight": 1
	},
	{
		"q": "你喜欢听歌吗？",
		"qP": "Nǐ xǐhuan tīng gē ma?",
		"a": "喜欢，我最近学汉语，我很喜欢听中国歌。我觉得中国歌很好听。",
		"aP": "Xǐhuan, wǒ zuìjìn xué Hànyǔ, wǒ hěn xǐhuan tīng Zhōngguó gē. Wǒ juéde Zhōngguó gē hěn hǎotīng.",
		"hint": "중국 노래를 좋아한다고 말하는 대화입니다.",
		"keywords": "听歌 (tīng gē), 汉语 (Hànyǔ), 中国歌 (Zhōngguó gē)",
		"weight": 1
	},
	{
		"q": "你喜欢看外国电影吗？",
		"qP": "Nǐ xǐhuan kàn wàiguó diànyǐng ma?",
		"a": "喜欢，特别喜欢看美国电影，我觉得美国电影很有意思。",
		"aP": "Xǐhuan, tèbié xǐhuan kàn Měiguó diànyǐng, wǒ juéde Měiguó diànyǐng hěn yǒuyìsi.",
		"hint": "외국 영화 취향에 대해 이야기하는 대화입니다.",
		"keywords": "外国电影 (wàiguó diànyǐng), 美国电影 (Měiguó diànyǐng), 有意思 (yǒuyìsi)",
		"weight": 1
	},
	{
		"q": "你昨天看新闻了吗？",
		"qP": "Nǐ zuótiān kàn xīnwén le ma?",
		"a": "昨天我很忙，没看新闻。怎么了？有什么特别的新闻吗？",
		"aP": "Zuótiān wǒ hěn máng, méi kàn xīnwén. Zěnme le? Yǒu shénme tèbié de xīnwén ma?",
		"hint": "뉴스를 봤는지 묻는 대화입니다.",
		"keywords": "新闻 (xīnwén, 뉴스), 昨天 (zuótiān), 特别 (tèbié)",
		"weight": 1
	},
	{
		"q": "你喜欢养什么动物？",
		"qP": "Nǐ xǐhuan yǎng shénme dòngwù?",
		"a": "我不喜欢养动物，我喜欢养花草。所以我家里有很多花。",
		"aP": "Wǒ bù xǐhuan yǎng dòngwù, wǒ xǐhuan yǎng huācǎo. Suǒyǐ wǒ jiālǐ yǒu hěn duō huā.",
		"hint": "동물 대신 화초를 좋아한다고 말하는 대화입니다.",
		"keywords": "动物 (dòngwù), 花草 (huācǎo), 家里 (jiālǐ), 所以 (Suǒyǐ, 그래서)",
		"weight": 1
	},
	{
		"q": "你常常拍照吗？",
		"qP": "Nǐ chángcháng pāizhào ma?",
		"a": "我喜欢拍照，特别是去旅行的时候，常常拍照。所以我的手机里有很多照片。",
		"aP": "Wǒ xǐhuan pāizhào, tèbié shì qù lǚxíng de shíhou, chángcháng pāizhào. Suǒyǐ wǒ de shǒujī lǐ yǒu hěn duō zhàopiàn.",
		"hint": "사진 찍는 취미에 대해 이야기하는 대화입니다.",
		"keywords": "拍照 (pāizhào), 旅行 (lǚxíng), 照片 (zhàopiàn), 手机 (shǒujī)",
		"weight": 1
	},
	{
		"q": "你会打乒乓球（保龄球）吗？",
		"qP": "Nǐ huì dǎ pīngpāngqiú (bǎolíngqiú) ma?",
		"a": "我会打一点儿，但是打得不太好。你打得怎么样？有空咱们一起去打吧。",
		"aP": "Wǒ huì dǎ yìdiǎnr, dànshì dǎ de bú tài hǎo. Nǐ dǎ de zěnmeyàng? Yǒu kòng zánmen yìqǐ qù dǎ ba.",
		"hint": "탁구나 볼링 실력에 대해 이야기하는 대화입니다.",
		"keywords": "乒乓球 (pīngpāngqiú), 保龄球 (bǎolíngqiú), 有空 (yǒu kòng, 시간이 있다.)",
		"weight": 1
	},
	{
		"q": "你看起来很累。",
		"qP": "Nǐ kàn qǐlái hěn lèi.",
		"a": "最近我特别忙，每天加班，累死了。我很想休息休息。",
		"aP": "Zuìjìn wǒ tèbié máng, měitiān jiābān, lèi sǐ le. Wǒ hěn xiǎng xiūxi xiūxi.",
		"hint": "피곤한 일상에 대해 이야기하는 대화입니다.",
		"keywords": "看起来 (kàn qǐlái, 보기에), 累 (lèi), 加班 (jiābān), 休息 (xiūxi)",
		"weight": 1
	},
	{
		"q": "你每天早起吗？",
		"qP": "Nǐ měitiān zǎoqǐ ma?",
		"a": "是的，我每天早上六点起床，七点上班。早睡早起对身体好。",
		"aP": "Shì de, wǒ měitiān zǎoshang liù diǎn qǐchuáng, qī diǎn shàngbān. Zǎoshuì zǎoqǐ duì shēntǐ hǎo.",
		"hint": "일찍 자고 일찍 일어나는 습관에 대한 대화입니다.",
		"keywords": "早起 (zǎoqǐ, 일찍 일어나다.), 起床 (qǐchuáng), 上班 (shàngbān), 身体好 (shēntǐ hǎo)",
		"weight": 1
	},
	{
		"q": "你跟家人一起住吗？",
		"qP": "Nǐ gēn jiārén yìqǐ zhù ma?",
		"a": "不，我一个人住。我觉得一个人住比较自由。",
		"aP": "Bù, wǒ yí ge rén zhù. Wǒ juéde yí ge rén zhù bǐjiào zìyóu.",
		"hint": "혼자 사는 생활에 대해 이야기하는 대화입니다.",
		"keywords": "家人 (jiārén), 一个人住 (yí ge rén zhù), 自由 (zìyóu, 자유)",
		"weight": 1
	},
	{
		"q": "这张照片是在哪儿拍的？",
		"qP": "Zhè zhāng zhàopiàn shì zài nǎr pāi de?",
		"a": "在济州岛拍的，我上个月跟家人一起去济州岛旅行了，怎么样？好看吧？",
		"aP": "Zài Jìzhōudǎo pāi de, wǒ shàng ge yuè gēn jiārén yìqǐ qù Jìzhōudǎo lǚxíng le, zěnmeyàng? Hǎokàn ba?",
		"hint": "여행 사진에 대해 이야기하는 대화입니다.",
		"keywords": "照片 (zhàopiàn), 济州岛 (Jìzhōudǎo), 旅行 (lǚxíng)",
		"weight": 1
	},
	{
		"q": "她很可爱，她是谁。",
		"qP": "Tā hěn kě'ài, tā shì shéi.",
		"a": "这是我女儿，今年六岁了。",
		"aP": "Zhè shì wǒ nǚ'ér, jīnnián liù suì le.",
		"hint": "사진 속 아이에 대해 이야기하는 대화입니다.",
		"keywords": "可爱 (kě'ài), 女儿 (nǚ'ér), 六岁 (liù suì)",
		"weight": 1
	},
	{
		"q": "告诉你一个好消息，我买新房子了。",
		"qP": "Gàosu nǐ yí ge hǎo xiāoxi, wǒ mǎi xīn fángzi le.",
		"a": "恭喜恭喜，在哪儿买的？一定很贵吧？ 我也想买房子。",
		"aP": "Gōngxǐ gōngxǐ, zài nǎr mǎi de? Yídìng hěn guì ba? wǒ yě xiǎng mǎi fángzi.",
		"hint": "새 집을 산 것을 축하하는 대화입니다.",
		"keywords": "好消息 (hǎo xiāoxi, 좋은 소식), 新房子 (xīn fángzi, 새 집), 恭喜 (gōngxǐ 축하)",
		"weight": 1
	},
	{
		"q": "你听说了吗？小李生孩子了。",
		"qP": "Nǐ tīngshuō le ma? Xiǎo Lǐ shēng háizi le.",
		"a": "是吗？男孩儿还是女孩儿？周末我们去看她吧。",
		"aP": "Shì ma? Nánháir háishi nǚháir? Zhōumò wǒmen qù kàn tā ba.",
		"hint": "출산 소식에 대해 이야기하는 대화입니다.",
		"keywords": "生孩子 (shēng háizi, 출산), 男孩儿 (nánháir), 女孩儿 (nǚháir)",
		"weight": 1
	},
	{
		"q": "怎么办？我的钱包不见了。",
		"qP": "Zěnmebàn? Wǒ de qiánbāo bújiàn le.",
		"a": "你放哪儿了？好好想想，我帮你找。",
		"aP": "Nǐ fàng nǎr le? Hǎohǎo xiǎngxiang, wǒ bāng nǐ zhǎo.",
		"hint": "지갑을 잃어버린 상황의 대화입니다.",
		"keywords": "钱包 (qiánbāo), 不见了 (bújiàn le), 找 (zhǎo)",
		"weight": 1
	},
	{
		"q": "我的手机又坏（出毛病/出故障）了。",
		"qP": "Wǒ de shǒujī yòu huài (chū máobìng / chū gùzhàng) le.",
		"a": "是吗？你买一个新手机吧。听说三星的新款手机性价比很好。",
		"aP": "Shì ma? Nǐ mǎi yí ge xīn shǒujī ba. Tīngshuō Sānxīng de xīn kuǎn shǒujī xìngjiàbǐ hěn hǎo.",
		"hint": "휴대폰 고장에 대해 이야기하는 대화입니다.",
		"keywords": "手机 (shǒujī), 坏 (huài), 新款 (xīnkuǎn, 새로 출시된), 价格 (jiàgé)",
		"weight": 1
	},
	{
		"q": "你看见今天的报纸了吗？",
		"qP": "Nǐ kànjiàn jīntiān de bàozhǐ le ma?",
		"a": "没有啊，门口没有吗？你去看看吧。",
		"aP": "Méiyǒu a, ménkǒu méiyǒu ma? Nǐ qù kànkan ba.",
		"hint": "신문을 찾는 대화입니다.",
		"keywords": "报纸 (bàozhǐ), 门口 (ménkǒu), 看看 (kànkan)",
		"weight": 1
	},
	{
		"q": "我老公升职当部长了。",
		"qP": "Wǒ lǎogōng shēngzhí dāng bùzhǎng le.",
		"a": "真的吗？太好了！恭喜恭喜，今天你请客。",
		"aP": "Zhēn de ma? Tài hǎo le! Gōngxǐ gōngxǐ, jīntiān nǐ qǐngkè.",
		"hint": "승진 소식을 축하하는 대화입니다.",
		"keywords": "升职 (shēngzhí, 승진), 部长 (bùzhǎng), 请客 (qǐngkè, 한턱내다.)",
		"weight": 1
	},
	{
		"q": "我跟女朋友分手了。",
		"qP": "Wǒ gēn nǚ péngyou fēnshǒu le.",
		"a": "别太伤心，我们一起喝酒，我请你。",
		"aP": "bié tài shāngxīn, wǒmen yìqǐ hējiǔ, wǒ qǐng nǐ.",
		"hint": "헤어진 친구를 위로하는 대화입니다.",
		"keywords": "分手 (fēnshǒu), 难受 (nánshòu), 伤心 (shāngxīn)",
		"weight": 1
	},
	{
		"q": "这个周末我给你介绍男朋友，怎么样？",
		"qP": "Zhège zhōumò wǒ gěi nǐ jièshào nán péngyou, zěnmeyàng?",
		"a": "好啊，他是做什么的？帅不帅？",
		"aP": "Hǎo a, tā shì zuò shénme de? Shuài bú shuài? ",
		"hint": "소개팅에 대해 이야기하는 대화입니다.",
		"keywords": "介绍 (jièshào, 소개), 帅 (shuài)",
		"weight": 1
	},
	{
		"q": "你在看什么书？",
		"qP": "Nǐ zài kàn shénme shū?",
		"a": "我在看汉语书。下个星期我有TSC考试。",
		"aP": "WWǒ zài kàn Hànyǔ shū. Xià ge xīngqī wǒ yǒu TSC kǎoshì.",
		"hint": "읽고 있는 책에 대해 이야기하는 대화입니다.",
		"keywords": "汉语书 (Hànyǔ shū), TSC考试 (TSC kǎoshì), 下个星期 (xià ge xīngqī)",
		"weight": 1
	},
	{
		"q": "这是我送给你的礼物。",
		"qP": "Zhè shì wǒ sòng gěi nǐ de lǐwù.",
		"a": "太谢谢了，这是什么？我可以打开看看吗？",
		"aP": "Tài xièxie le, zhè shì shénme? Wǒ kěyǐ dǎkāi kànkan ma? ",
		"hint": "선물을 주고받는 상황의 대화입니다.",
		"keywords": "礼物 (lǐwù), 打开 (dǎkāi, 열다)",
		"weight": 1
	},
	{
		"q": "你去过外国吗？",
		"qP": "Nǐ qùguo wàiguó ma?",
		"a": "去过，很喜欢旅行，所以我去过很多国家。",
		"aP": "Qùguo, hěn xǐhuan lǚxíng, suǒyǐ wǒ qùguo hěn duō guójiā.",
		"hint": "여행 경험에 대해 이야기하는 대화입니다.",
		"keywords": "外国 (wàiguó), 旅行 (lǚxíng), 国家 (guójiā, 국가)",
		"weight": 1
	},
	{
		"q": "一周中你最喜欢星期几？",
		"qP": "Yì zhōu zhōng nǐ zuì xǐhuan xīngqī jǐ?",
		"a": "我最喜欢星期五，我最不喜欢星期一。",
		"aP": "Wǒ zuì xǐhuan xīngqīwǔ, Wǒ zuì bù xǐhuan xīngqīyī.",
		"hint": "좋아하는 요일에 대해 이야기하는 대화입니다.",
		"keywords": "星期五 (xīngqīwǔ)",
		"weight": 1
	},
	{
		"q": "你决定什么时候结婚了吗？",
		"qP": "Nǐ juédìng shénme shíhou jiéhūn le ma?",
		"a": "定了，打算明年5月结婚，到时候你一定要来啊。",
		"aP": "Dìng le, dǎsuàn míngnián wǔ yuè jiéhūn, dào shíhou nǐ yídìng yào lái a.",
		"hint": "결혼 계획에 대해 이야기하는 대화입니다.",
		"keywords": "结婚 (jiéhūn), 打算 (dǎsuàn, ~할 예정이다.), 到时候 (dào shíhou, 그떄), 一定 (yídìng, 반드시)",
		"weight": 1
	},
	{
		"q": "你参加小李的婚礼吗？",
		"qP": "Nǐ cānjiā Xiǎo Lǐ de hūnlǐ ma?",
		"a": "那天我要去中国出差，不能参加，我已经告诉小李了。",
		"aP": "nà tiān wǒ yào qù Zhōngguó chūchāi, bù néng cānjiā, wǒ yǐjīng gàosu Xiǎo Lǐ le.",
		"hint": "결혼식 참석 여부에 대한 대화입니다.",
		"keywords": "婚礼 (hūnlǐ), 出差 (chūchāi), 参加 (cānjiā), 告诉 (gàosu, 말했다)",
		"weight": 1
	},
	{
		"q": "你常来动物园吗？",
		"qP": "Nǐ cháng lái dòngwùyuán ma?",
		"a": "我常来，因为我儿子喜欢动物。",
		"aP": "Wǒ cháng lái, yīnwèi wǒ érzi xǐhuan dòngwù.",
		"hint": "동물원에 자주 오는 이유를 이야기하는 대화입니다.",
		"keywords": "动物园 (dòngwùyuán), 儿子 (érzi), 动物 (dòngwù), 因为 (yīnwèi, 왜냐하면)",
		"weight": 1
	},
	{
		"q": "春天和秋天你喜欢什么季节？",
		"qP": "Chūntiān hé qiūtiān nǐ xǐhuan shénme jìjié?",
		"a": "我更喜欢秋天。秋天凉快，红叶非常漂亮。",
		"aP": "Wǒ gèng xǐhuan qiūtiān. Qiūtiān liángkuai, hóngyè fēicháng piàoliang.",
		"hint": "좋아하는 계절에 대해 이야기하는 대화입니다.",
		"keywords": "秋天 (qiūtiān), 凉快 (liángkuai), 红叶 (hóngyè)",
		"weight": 1
	},
	{
		"q": "外边天气怎么样？",
		"qP": "Wàibian tiānqì zěnmeyàng?",
		"a": "今天天气很好，不过有点儿热，天气预报说今天最高气温32度。",
		"aP": "Jīntiān tiānqì hěn hǎo, búguò yǒudiǎnr rè, tiānqì yùbào shuō jīntiān zuìgāo qìwēn sānshí'èr dù.",
		"hint": "오늘 날씨에 대해 이야기하는 대화입니다.",
		"keywords": "天气 (tiānqì), 热 (rè), 天气预报 (tiānqì yùbào)",
		"weight": 1
	},
	{
		"q": "听说今天晚上会下雨。",
		"qP": "Tīngshuō jīntiān wǎnshang huì xiàyǔ.",
		"a": "是吗？我儿子早上没带雨伞，我要给他打电话。",
		"aP": "Shì ma? Wǒ érzi zǎoshang méi dài yǔsǎn, wǒ yào gěi tā dǎ diànhuà.",
		"hint": "비 소식에 대해 이야기하는 대화입니다.",
		"keywords": "下雨 (xiàyǔ), 雨伞 (yǔsǎn), 打电话 (dǎ diànhuà)",
		"weight": 1
	},
	{
		"q": "天气太热了。",
		"qP": "Tiānqì tài rè le.",
		"a": "是啊，热死了。我们去咖啡厅喝杯冰咖啡吧。",
		"aP": "Shì a, rè sǐ le. Wǒmen qù kāfēitīng hē bēi bīng kāfēi ba.",
		"hint": "더운 날씨에 대해 이야기하는 대화입니다.",
		"keywords": "热 (rè), 咖啡厅 (kāfēitīng), 冰咖啡 (bīng kāfēi)",
		"weight": 1
	},
	{
		"q": "天冷了，你要注意感冒。",
		"qP": "Tiān lěng le, nǐ yào zhùyì gǎnmào.",
		"a": "谢谢，你也注意感冒。天气预报说明天更冷。",
		"aP": "Xièxie, nǐ yě zhùyì gǎnmào. Tiānqì yùbào shuō míngtiān gèng lěng.",
		"hint": "추운 날씨와 감기에 대해 이야기하는 대화입니다.",
		"keywords": "感冒 (gǎnmào), 天气预报 (tiānqì yùbào), 冷 (lěng)",
		"weight": 1
	},
	{
		"q": "春天到了，我们去哪儿看花？",
		"qP": "Chūntiān dào le, wǒmen qù nǎr kànhuā?",
		"a": "我家附近有一个公园。我们去那儿看花吧。",
		"aP": "Wǒ jiā fùjìn yǒu yí ge gōngyuán. Wǒmen qù nàr kànhuā ba.",
		"hint": "집 근처 공원과 꽃구경에 대해 이야기하는 대화입니다.",
		"keywords": "附近 (fùjìn), 公园 (gōngyuán), 看花 (kànhuā)",
		"weight": 1
	},
	{
		"q": "外边刮风了，你可以关上窗户吗？",
		"qP": "Wàibian guāfēng le, nǐ kěyǐ guānshang chuānghu ma?",
		"a": "当然可以，我帮你关吧。",
		"aP": "Dāngrán kěyǐ, wǒ bāng nǐ guān ba.",
		"hint": "바람이 불어 창문을 닫아 달라고 부탁하는 대화입니다.",
		"keywords": "刮风 (guāfēng), 窗户 (chuānghu), 关上 (guānshang)",
		"weight": 1
	},
	{
		"q": "这附近有医院吗？",
		"qP": "Zhè fùjìn yǒu yīyuàn ma?",
		"a": "不好意思，我不知道。你问别人吧。",
		"aP": "Bù hǎoyìsi, wǒ bù zhīdào. Nǐ wèn biéren ba.",
		"hint": "길을 물어봤지만 모른다고 답하는 상황입니다.",
		"keywords": "不好意思 (bù hǎoyìsi), 不知道 (bù zhīdào), 别人 (biéren)",
		"weight": 1
	},
	{
		"q": "堵车了，我可能要晚了。",
		"qP": "Dǔchē le, wǒ kěnéng yào wǎn le.",
		"a": "没关系，我在咖啡厅等你，路上小心。",
		"aP": "Méiguānxi, wǒ zài kāfēitīng děng nǐ, lùshang xiǎoxīn.",
		"hint": "교통 체증 때문에 늦는 상황의 대화입니다.",
		"keywords": "堵车 (dǔchē, 교통체증), 咖啡厅 (kāfēitīng), 小心 (xiǎoxīn, 조심)",
		"weight": 1
	},
	{
		"q": "你怎么来晚了？路上出了什么事？",
		"qP": "Nǐ zěnme lái wǎn le? Lùshang chū le shénme shì?",
		"a": "真对不起，路上车特别多，下次一定注意。",
		"aP": "Zhēn duìbuqǐ, lùshang chē tèbié duō, xià cì yídìng zhùyì.",
		"hint": "늦은 이유를 설명하는 대화입니다.",
		"keywords": "对不起 (duìbuqǐ), 堵车 (dǔchē), 注意 (zhùyì, 주의)",
		"weight": 1
	},
	{
		"q": "（你）几点从家里出发去公司？",
		"qP": "(Nǐ) jǐ diǎn cóng jiālǐ chūfā qù gōngsī?",
		"a": "我一般早上七点，从家出发，公司离我家有点儿远.",
		"aP": "Wǒ yìbān zǎoshang qī diǎn, cóng jiā chūfā, gōngsī lí wǒ jiā yǒudiǎnr yuǎn.",
		"hint": "출근 시간과 거리 관련 대화입니다.",
		"keywords": "出发 (chūfā), 公司 (gōngsī), 开车 (kāichē)",
		"weight": 1
	},
	{
		"q": "你怎么回家？",
		"qP": "Nǐ zěnme huí jiā?",
		"a": "我坐地铁回家，坐地铁又快又方便，而且不堵车。",
		"aP": "Wǒ zuò dìtiě huí jiā, zuò dìtiě yòu kuài yòu fāngbiàn, érqiě bù dǔchē.",
		"hint": "교통수단에 대해 이야기하는 대화입니다.",
		"keywords": "地铁 (dìtiě), 回家 (huí jiā), 方便 (fāngbiàn)",
		"weight": 1
	},
	{
		"q": "我们好像赶不上火车了。",
		"qP": "Wǒmen hǎoxiàng gǎn bu shàng huǒchē le.",
		"a": "是吗？怎么办？那我们坐出租车去吧。",
		"aP": "Shì ma? Zěnme bàn? Nà wǒmen zuò chūzūchē qù ba.",
		"hint": "기차를 놓칠 상황에 대한 대화입니다.",
		"keywords": "赶不上 (gǎn bu shàng, 늦다), 火车 (huǒchē), 出租车 (chūzūchē), 怎么办 (zěnme bàn)",
		"weight": 1
	},
	{
		"q": "周末咱们坐火车去旅行怎么样？",
		"qP": "Zhōumò zánmen zuò huǒchē qù lǚxíng zěnmeyàng?",
		"a": "好啊，坐火车又快又方便，而且不堵车。",
		"aP": "Hǎo a, zuò huǒchē yòu kuài yòu fāngbiàn, érqiě bù dǔchē.",
		"hint": "주말 여행 계획에 대한 대화입니다.",
		"keywords": "火车 (huǒchē), 旅行 (lǚxíng)",
		"weight": 1
	},
	{
		"q": "我们坐船去中国怎么样？",
		"qP": "Wǒmen zuòchuán qù Zhōngguó zěnmeyàng?",
		"a": "我觉得坐船太慢了，坐飞机吧，又快又方便。",
		"aP": "Wǒ juéde zuòchuán tài màn le, zuò fēijī ba, yòu kuài yòu fāngbiàn.",
		"hint": "중국에 가는 교통수단에 대해 이야기하는 대화입니다.",
		"keywords": "坐船 (zuòchuán), 飞机 (fēijī), 方便 (fāngbiàn)",
		"weight": 1
	},
	{
		"q": "公司附近有银行吗？",
		"qP": "Gōngsī fùjìn yǒu yínháng ma?",
		"a": "有啊，公司对面有一家银行。",
		"aP": "Yǒu a, gōngsī duìmiàn yǒu yì jiā yínháng.",
		"hint": "회사 근처 은행 위치를 묻는 대화입니다.",
		"keywords": "公司 (gōngsī), 银行 (yínháng), 对面 (duìmiàn)",
		"weight": 1
	},
	{
		"q": "你一般什么时候开车？",
		"qP": "Nǐ yìbān shénme shíhou kāichē?",
		"a": "我每天开车上下班。我家离公司比较远，开车要一个小时。",
		"aP": "Wǒ měitiān kāichē shàngxiàbān. Wǒ jiā lí gōngsī bǐjiào yuǎn, kāichē yào yí ge xiǎoshí.",
		"hint": "출퇴근과 운전에 대해 이야기하는 대화입니다.",
		"keywords": "开车 (kāichē), 上下班 (shàngxiàbān), 公司 (gōngsī)",
		"weight": 1
	},
	{
		"q": "对不起，明天的火车票卖完了。",
		"qP": "Duìbuqǐ, míngtiān de huǒchēpiào mài wán le.",
		"a": "是吗？那么后天的票有吗？请给我两张后天早上八点的。",
		"aP": "Shì ma? Nàme hòutiān de piào yǒu ma? Qǐng gěi wǒ liǎng zhāng hòutiān zǎoshang bā diǎn de.",
		"hint": "기차표를 예매하는 상황의 대화입니다.",
		"keywords": "火车票 (huǒchēpiào), 后天 (hòutiān), 两张 (liǎng zhāng)",
		"weight": 1
	},
	{
		"q": "听说你周末搬家了，是吗？",
		"qP": "Tīngshuō nǐ zhōumò bānjiā le, shì ma?",
		"a": "是啊，我买了新房子，有空的时候来我家玩吧。",
		"aP": "Shì a, wǒ mǎi le xīn fángzi, yǒu kòng de shíhou lái wǒ jiā wán ba.",
		"hint": "이사와 새집에 대해 이야기하는 대화입니다.",
		"keywords": "搬家 (bānjiā), 房子 (fángzi), 有空 (yǒu kòng)",
		"weight": 1
	},
	{
		"q": "你开车开得真好！",
		"qP": "Nǐ kāichē kāi de zhēn hǎo!",
		"a": "谢谢，我开车已经15年了。你开车开得怎么样？",
		"aP": "Xièxie, wǒ kāichē yǐjīng shíwǔ nián le. Nǐ kāichē kāi de zěnmeyàng?",
		"hint": "운전 실력에 대해 이야기하는 대화입니다.",
		"keywords": "开车 (kāichē), 十五年 (shíwǔ nián), 怎么样 (zěnmeyàng)",
		"weight": 1
	},
	{
		"q": "你预订什么时候的火车票？",
		"qP": "Nǐ yùdìng shénme shíhou de huǒchēpiào?",
		"a": "明天上午的票有吗？我要两张明天上午8点的，可以刷卡吗？",
		"aP": "Míngtiān shàngwǔ de piào yǒu ma? Wǒ yào liǎng zhāng míngtiān shàngwǔ bā diǎn de, kěyǐ shuākǎ ma?",
		"hint": "기차표 예약과 결제에 대한 대화입니다.",
		"keywords": "预订 (yùdìng), 火车票 (huǒchēpiào), 刷卡 (shuākǎ)",
		"weight": 1
	},
	{
		"q": "你第一次坐船，感觉怎么样？",
		"qP": "Nǐ dì yí cì zuò chuán, gǎnjué zěnmeyàng?",
		"a": "这个船很大，还可以看大海，所以我觉得很舒服。",
		"aP": "Zhège chuán hěn dà, hái kěyǐ kàn dàhǎi, suǒyǐ wǒ juéde hěn shūfu.",
		"hint": "배를 처음 탄 느낌에 대한 대화입니다.",
		"keywords": "坐船 (zuò chuán), 大海 (dàhǎi), 舒服 (shūfu)",
		"weight": 1
	},
	{
		"q": "怎么去机场？",
		"qP": "Zěnme qù jīchǎng?",
		"a": "坐地铁去吧，坐地铁又快又方便，而且不堵车。",
		"aP": "Zuò dìtiě qù ba, zuò dìtiě yòu kuài yòu fāngbiàn, érqiě bù dǔchē.",
		"hint": "공항 가는 교통수단에 대한 대화입니다.",
		"keywords": "机场 (jīchǎng), 地铁 (dìtiě), 方便 (fāngbiàn)",
		"weight": 1
	},
	{
		"q": "最近睡得怎么样？",
		"qP": "Zuìjìn shuì de zěnmeyàng?",
		"a": "我最近睡得不好，常常失眠，所以白天很累。",
		"aP": "Wǒ zuìjìn shuì de bù hǎo, chángcháng shīmián, suǒyǐ báitiān hěn lèi.",
		"hint": "수면 상태와 피로에 대해 이야기하는 대화입니다.",
		"keywords": "睡觉 (shuìjiào), 失眠 (shīmián), 累 (lèi)",
		"weight": 1
	},
	{
		"q": "你的脸色不太好。",
		"qP": "Nǐ de liǎnsè bú tài hǎo.",
		"a": "我头疼、发烧，全身不舒服，我要去医院看看。",
		"aP": "Wǒ tóuténg, fāshāo, quánshēn bù shūfu, wǒ yào qù yīyuàn kànkan.",
		"hint": "몸 상태가 안 좋은 상황의 대화입니다.",
		"keywords": "头疼 (tóuténg), 发烧 (fāshāo), 医院 (yīyuàn)",
		"weight": 1
	},
	{
		"q": "你最近去医院看过医生吗？",
		"qP": "Nǐ zuìjìn qù yīyuàn kàn guò yīshēng ma?",
		"a": "我最近感冒了，昨天去医院看了医生，吃了药，现在好多了。",
		"aP": "Wǒ zuìjìn gǎnmào le, zuótiān qù yīyuàn kàn le yīshēng, chī le yào, xiànzài hǎoduō le.",
		"hint": "병원 진료와 감기 치료에 대한 대화입니다.",
		"keywords": "感冒 (gǎnmào), 医生 (yīshēng), 药 (yào)",
		"weight": 1
	},
	{
		"q": "我好像感冒了，你能帮我买药回来吗？",
		"qP": "Wǒ hǎoxiàng gǎnmào le, nǐ néng bāng wǒ mǎi yào huílai ma?",
		"a": "当然可以，你发烧吗？我马上去药店给你买药。",
		"aP": "Dāngrán kěyǐ, nǐ fāshāo ma? Wǒ mǎshàng qù yàodiàn gěi nǐ mǎi yào.",
		"hint": "감기약을 부탁하는 상황의 대화입니다.",
		"keywords": "感冒 (gǎnmào), 发烧 (fāshāo), 药店 (yàodiàn)",
		"weight": 1
	},
	{
		"q": "这药怎么吃？",
		"qP": "Zhè yào zěnme chī?",
		"a": "这药一天吃三次，一次吃两片，饭后吃。",
		"aP": "Zhè yào yì tiān chī sān cì, yí cì chī liǎng piàn, fànhòu chī.",
		"hint": "약 복용 방법에 대한 대화입니다.",
		"keywords": "药 (yào), 三次 (sān cì), 饭后 (fànhòu)",
		"weight": 1
	},
	{
		"q": "你什么时候能出院？",
		"qP": "Nǐ shénme shíhou néng chūyuàn?",
		"a": "我下个星期就能出院，你不用担心。现在好多了。",
		"aP": "Wǒ xià ge xīngqī jiù néng chūyuàn, nǐ bú yòng dānxīn. Xiànzài hǎoduō le.",
		"hint": "퇴원 시기에 대해 이야기하는 대화입니다.",
		"keywords": "出院 (chūyuàn), 担心 (dānxīn), 星期 (xīngqī)",
		"weight": 1
	},
	{
		"q": "你的狗怎么了？",
		"qP": "Nǐ de gǒu zěnme le?",
		"a": "我的狗好像感冒了，我很担心，你给它看看吧。",
		"aP": "Wǒ de gǒu hǎoxiàng gǎnmào le, wǒ hěn dānxīn, nǐ gěi tā kànkan ba.",
		"hint": "반려견 건강 상태에 대한 대화입니다.",
		"keywords": "狗 (gǒu), 感冒 (gǎnmào), 担心 (dānxīn)",
		"weight": 1
	},
	{
		"q": "小李看起来很累，他怎么了？",
		"qP": "Xiǎo Lǐ kànqǐlái hěn lèi, tā zěnme le?",
		"a": "小李最近每天加班，很晚才回家，他可能劳累过度。",
		"aP": "Xiǎo Lǐ zuìjìn měitiān jiābān, hěn wǎn cái huí jiā, tā kěnéng láolèi guòdù.",
		"hint": "과로 상태에 대해 이야기하는 대화입니다.",
		"keywords": "加班 (jiābān), 回家 (huí jiā), 劳累过度 (láolèi guòdù)",
		"weight": 1
	},
	{
		"q": "体检结果出来了吗？",
		"qP": "Tǐjiǎn jiéguǒ chūlai le ma?",
		"a": "已经出来了，体检结果很好，我很高兴。",
		"aP": "Yǐjīng chūlai le, tǐjiǎn jiéguǒ hěn hǎo, wǒ hěn gāoxìng.",
		"hint": "건강검진 결과에 대해 이야기하는 대화입니다.",
		"keywords": "体检 (tǐjiǎn), 结果 (jiéguǒ), 高兴 (gāoxìng)",
		"weight": 1
	},
	{
		"q": "这周不行，下周怎么样？",
		"qP": "Zhè zhōu bù xíng, xià zhōu zěnmeyàng?",
		"a": "真不好意思，下周也不行，我要出差，下下周行吗？",
		"aP": "Zhēn bù hǎoyìsi, xià zhōu yě bù xíng, wǒ yào chūchāi, xià xià zhōu xíng ma?",
		"hint": "병원 예약 날짜를 조정하는 상황입니다.",
		"keywords": "下周 (xià zhōu), 出差 (chūchāi), 不好意思 (bù hǎoyìsi)",
		"weight": 1
	},
	{
		"q": "你定期去检查身体吗？",
		"qP": "Nǐ dìngqī qù jiǎnchá shēntǐ ma?",
		"a": "是的，我每年都体检，上个月我刚体检了，你呢？",
		"aP": "Shì de, wǒ měinián dōu tǐjiǎn, shàng ge yuè wǒ gāng tǐjiǎn le, nǐ ne?",
		"hint": "정기 건강검진에 대해 이야기하는 대화입니다.",
		"keywords": "定期 (dìngqī), 体检 (tǐjiǎn), 每年 (měinián)",
		"weight": 1
	},
	{
		"q": "你会说几种外语？",
		"qP": "Nǐ huì shuō jǐ zhǒng wàiyǔ?",
		"a": "我会说两种外语，英语和汉语。我英语说得还可以，汉语说得不太好。",
		"aP": "Wǒ huì shuō liǎng zhǒng wàiyǔ, Yīngyǔ hé Hànyǔ. Wǒ Yīngyǔ shuō de hái kěyǐ, Hànyǔ shuō de bú tài hǎo.",
		"hint": "외국어 실력에 대해 이야기하는 대화입니다.",
		"keywords": "外语 (wàiyǔ), 英语 (Yīngyǔ), 汉语 (Hànyǔ)",
		"weight": 1
	},
	{
		"q": "你什么时候可以开始上班？",
		"qP": "Nǐ shénme shíhou kěyǐ kāishǐ shàngbān?",
		"a": "我通过面试了吗？太好了，谢谢您，我明天就可以上班。",
		"aP": "Wǒ tōngguò miànshì le ma? Tài hǎo le, xièxie nín, wǒ míngtiān jiù kěyǐ shàngbān.",
		"hint": "면접 합격 후 출근 가능 날짜를 이야기하는 상황입니다.",
		"keywords": "面试 (miànshì), 上班 (shàngbān), 明天 (míngtiān)",
		"weight": 1
	},
	{
		"q": "你学习汉语的好方法是什么？",
		"qP": "Nǐ xuéxí Hànyǔ de hǎo fāngfǎ shì shénme?",
		"a": "我觉得学习汉语会话最重要，所以我常常找中国朋友聊天。",
		"aP": "Wǒ juéde xuéxí Hànyǔ huìhuà zuì zhòngyào, suǒyǐ wǒ chángcháng zhǎo Zhōngguó péngyou liáotiān.",
		"hint": "중국어 공부 방법에 대해 이야기하는 대화입니다.",
		"keywords": "学习 (xuéxí), 汉语 (Hànyǔ), 聊天 (liáotiān)",
		"weight": 1
	},
	{
		"q": "考试准备得怎么样？",
		"qP": "Kǎoshì zhǔnbèi de zěnmeyàng?",
		"a": "我已经准备好了，不过很紧张。你准备好了吗？",
		"aP": "Wǒ yǐjīng zhǔnbèi hǎo le, búguò hěn jǐnzhāng. Nǐ zhǔnbèi hǎo le ma?",
		"hint": "시험 준비 상태와 긴장감을 이야기하는 대화입니다.",
		"keywords": "考试 (kǎoshì), 准备 (zhǔnbèi), 紧张 (jǐnzhāng)",
		"weight": 1
	},
	{
		"q": "这次考试好像不太难，你觉得呢？",
		"qP": "Zhè cì kǎoshì hǎoxiàng bú tài nán, nǐ juéde ne?",
		"a": "我也觉得不太难。不过考试的时候很紧张，考得不好。",
		"aP": "Wǒ yě juéde bú tài nán. Búguò kǎoshì de shíhou hěn jǐnzhāng, kǎo de bù hǎo.",
		"hint": "시험 난이도와 시험 결과에 대해 이야기하는 대화입니다.",
		"keywords": "考试 (kǎoshì), 紧张 (jǐnzhāng), 考得不好 (kǎo de bù hǎo)",
		"weight": 1
	},
	{
		"q": "你面试准备得怎么样？",
		"qP": "Nǐ miànshì zhǔnbèi de zěnmeyàng?",
		"a": "我已经准备好了，不过很紧张，听说三星公司的面试很难。",
		"aP": "Wǒ yǐjīng zhǔnbèi hǎo le, búguò hěn jǐnzhāng, tīngshuō Sānxīng gōngsī de miànshì hěn nán.",
		"hint": "면접 준비 상태와 긴장감을 이야기하는 대화입니다.",
		"keywords": "面试 (miànshì), 准备 (zhǔnbèi), 紧张 (jǐnzhāng)",
		"weight": 1
	},
	{
		"q": "你昨天的面试怎么样？",
		"qP": "Nǐ zuótiān de miànshì zěnmeyàng?",
		"a": "昨天我去三星公司面试了，面试的时候很紧张，不过我说得不错。",
		"aP": "Zuótiān wǒ qù Sānxīng gōngsī miànshì le, miànshì de shíhou hěn jǐnzhāng, búguò wǒ shuō de búcuò.",
		"hint": "어제 본 면접 경험에 대해 이야기하는 대화입니다.",
		"keywords": "昨天 (zuótiān), 面试 (miànshì), 不错 (búcuò)",
		"weight": 1
	},
	{
		"q": "我面试成功了。",
		"qP": "Wǒ miànshì chénggōng le.",
		"a": "真的吗？太好了！恭喜恭喜，我们出去喝一杯吧。今天你请客。",
		"aP": "Zhēn de ma? Tài hǎo le! Gōngxǐ gōngxǐ, wǒmen chūqù hē yì bēi ba. Jīntiān nǐ qǐngkè.",
		"hint": "면접 합격을 축하하는 대화입니다.",
		"keywords": "成功 (chénggōng), 恭喜 (gōngxǐ), 请客 (qǐngkè)",
		"weight": 1
	},
	{
		"q": "明天就考试了，我很紧张。",
		"qP": "Míngtiān jiù kǎoshì le, wǒ hěn jǐnzhāng.",
		"a": "别紧张，你每天努力学习，一定没问题。",
		"aP": "Bié jǐnzhāng, nǐ měitiān nǔlì xuéxí, yídìng méi wèntí.",
		"hint": "시험 전 긴장을 위로하는 대화입니다.",
		"keywords": "考试 (kǎoshì), 紧张 (jǐnzhāng), 努力学习 (nǔlì xuéxí)",
		"weight": 1
	},
	{
		"q": "今天你有几节课？",
		"qP": "Jīntiān nǐ yǒu jǐ jié kè?",
		"a": "今天我有四节课，12点下课。下课以后我们一起去吃饭吧。",
		"aP": "Jīntiān wǒ yǒu sì jié kè, shí’èr diǎn xiàkè. Xiàkè yǐhòu wǒmen yìqǐ qù chīfàn ba.",
		"hint": "수업 일정과 식사 약속에 대한 대화입니다.",
		"keywords": "节课 (jié kè), 下课 (xiàkè), 吃饭 (chīfàn)",
		"weight": 1
	},
	{
		"q": "你对中国文化感兴趣吗？",
		"qP": "Nǐ duì Zhōngguó wénhuà gǎn xìngqù ma?",
		"a": "我对中国文化很感兴趣，特别喜欢听中国歌。我觉得中国歌很好听。",
		"aP": "Wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù, tèbié xǐhuan tīng Zhōngguó gē. Wǒ juéde Zhōngguó gē hěn hǎotīng.",
		"hint": "중국 문화와 음악에 대한 관심을 이야기하는 대화입니다.",
		"keywords": "中国文化 (Zhōngguó wénhuà), 感兴趣 (gǎn xìngqù), 中国歌 (Zhōngguó gē)",
		"weight": 1
	},
	{
		"q": "你一般在哪儿准备考试？",
		"qP": "Nǐ yìbān zài nǎr zhǔnbèi kǎoshì?",
		"a": "我一般去图书馆准备考试。图书馆离家很近，而且很安静。",
		"aP": "Wǒ yìbān qù túshūguǎn zhǔnbèi kǎoshì. Túshūguǎn lí jiā hěn jìn, érqiě hěn ānjìng.",
		"hint": "시험 공부 장소에 대해 이야기하는 대화입니다.",
		"keywords": "图书馆 (túshūguǎn), 准备考试 (zhǔnbèi kǎoshì), 安静 (ānjìng)",
		"weight": 1
	},
	{
		"q": "你要借的书，现在没有。",
		"qP": "Nǐ yào jiè de shū, xiànzài méiyǒu.",
		"a": "是吗？那我可以预约吗？请帮我查一下。",
		"aP": "Shì ma? Nà wǒ kěyǐ yùyuē ma? Qǐng bāng wǒ chá yíxià.",
		"hint": "도서관에서 책 대출 가능 여부를 묻는 대화입니다.",
		"keywords": "借书 (jiè shū), 预约 (yùyuē), 查一下 (chá yíxià)",
		"weight": 1
	},
	{
		"q": "今天是第一次报名吗？",
		"qP": "Jīntiān shì dì yī cì bàomíng ma?",
		"a": "是的，我第一次学汉语，晚上六点有课吗？",
		"aP": "Shì de, wǒ dì yī cì xué Hànyǔ, wǎnshang liù diǎn yǒu kè ma?",
		"hint": "처음 중국어 수업을 신청하는 상황의 대화입니다.",
		"keywords": "报名 (bàomíng), 第一次 (dì yī cì), 汉语 (Hànyǔ), 课 (kè)",
		"weight": 1
	},
	{
		"q": "图书馆现在没有座位。",
		"qP": "Túshūguǎn xiànzài méiyǒu zuòwèi.",
		"a": "是吗？那我们去哪儿学习好呢？去咖啡厅怎么样？就在附近。",
		"aP": "Shì ma? Nà wǒmen qù nǎr xuéxí hǎo ne? Qù kāfēitīng zěnmeyàng? Jiù zài fùjìn.",
		"hint": "도서관에 자리가 없어 다른 장소를 찾는 대화입니다.",
		"keywords": "图书馆 (túshūguǎn), 座位 (zuòwèi), 学习 (xuéxí), 咖啡厅 (kāfēitīng)",
		"weight": 1
	},
	{
		"q": "最近学习日语的人多吗？",
		"qP": "Zuìjìn xuéxí Rìyǔ de rén duō ma?",
		"a": "最近学日语的人不太多，学英语的人最多，然后汉语。",
		"aP": "Zuìjìn xué Rìyǔ de rén bú tài duō, xué Yīngyǔ de rén zuì duō, ránhòu Hànyǔ.",
		"hint": "요즘 어떤 외국어를 많이 배우는지 이야기하는 대화입니다.",
		"keywords": "日语 (Rìyǔ), 英语 (Yīngyǔ), 汉语 (Hànyǔ), 最近 (zuìjìn)",
		"weight": 1
	},
	{
		"q": "你的报告有很多错误。",
		"qP": "Nǐ de bàogào yǒu hěn duō cuòwù.",
		"a": "对不起，我马上改，下次一定注意。",
		"aP": "Duìbuqǐ, wǒ mǎshàng gǎi, xià cì yídìng zhùyì.",
		"hint": "회사에서 보고서 실수에 대해 이야기하는 상황입니다.",
		"keywords": "报告 (bàogào), 错误 (cuòwù), 改 (gǎi), 注意 (zhùyì)",
		"weight": 1
	},
	{
		"q": "为什么开了这么长时间的会议？",
		"qP": "Wèishénme kāi le zhème cháng shíjiān de huìyì?",
		"a": "我们开会讨论了明年的工作计划，工作计划很复杂，会议还没结束。",
		"aP": "Wǒmen kāihuì tǎolùn le míngnián de gōngzuò jìhuà, gōngzuò jìhuà hěn fùzá, huìyì hái méi jiéshù.",
		"hint": "긴 회의 이유를 설명하는 회사 대화입니다.",
		"keywords": "会议 (huìyì), 工作计划 (gōngzuò jìhuà), 复杂 (fùzá), 结束 (jiéshù)",
		"weight": 1
	},
	{
		"q": "为什么出差？",
		"qP": "Wèishénme chūchāi?",
		"a": "我去上海参加一个重要的会议，明天出发，跟金部长一起去。",
		"aP": "Wǒ qù Shànghǎi cānjiā yí ge zhòngyào de huìyì, míngtiān chūfā, gēn Jīn bùzhǎng yìqǐ qù.",
		"hint": "출장 이유와 일정을 설명하는 대화입니다.",
		"keywords": "出差 (chūchāi), 上海 (Shànghǎi), 会议 (huìyì), 出发 (chūfā)",
		"weight": 1
	},
	{
		"q": "听说你去中国出差，跟谁一起去？",
		"qP": "Tīngshuō nǐ qù Zhōngguó chūchāi, gēn shéi yìqǐ qù?",
		"a": "我跟金部长一起去，金部长的汉语很好，我很放心。",
		"aP": "Wǒ gēn Jīn bùzhǎng yìqǐ qù, Jīn bùzhǎng de Hànyǔ hěn hǎo, wǒ hěn fàngxīn.",
		"hint": "출장 동행자에 대해 이야기하는 회사 대화입니다.",
		"keywords": "中国 (Zhōngguó), 出差 (chūchāi), 部长 (bùzhǎng), 放心 (fàngxīn)",
		"weight": 1
	},
	{
		"q": "你第一次去海外出差，心情怎么样？",
		"qP": "Nǐ dì yī cì qù hǎiwài chūchāi, xīnqíng zěnmeyàng?",
		"a": "我很紧张，但是也很高兴，因为可以了解外国文化。",
		"aP": "Wǒ hěn jǐnzhāng, dànshì yě hěn gāoxìng, yīnwèi kěyǐ liǎojiě wàiguó wénhuà.",
		"hint": "첫 해외 출장을 가는 사람의 기분에 대해 이야기하는 대화입니다.",
		"keywords": "海外 (hǎiwài), 出差 (chūchāi), 紧张 (jǐnzhāng), 外国文化 (wàiguó wénhuà)",
		"weight": 1
	},
	{
		"q": "明天跟客户开会，订好会议室了吗？",
		"qP": "Míngtiān gēn kèhù kāihuì, dìng hǎo huìyìshì le ma?",
		"a": "我已经订好了，三楼的大会议室，会议资料已经准备好了。",
		"aP": "Wǒ yǐjīng dìng hǎo le, sān lóu de dà huìyìshì, huìyì zīliào yǐjīng zhǔnbèi hǎo le.",
		"hint": "고객과의 회의를 준비하는 회사 대화입니다.",
		"keywords": "客户 (kèhù), 会议室 (huìyìshì), 资料 (zīliào), 准备 (zhǔnbèi)",
		"weight": 1
	},
	{
		"q": "会议资料准备好了吗？",
		"qP": "Huìyì zīliào zhǔnbèi hǎo le ma?",
		"a": "已经准备好了，您有空的话帮我看看，好吗？",
		"aP": "Yǐjīng zhǔnbèi hǎo le, nín yǒu kòng de huà bāng wǒ kànkan, hǎo ma?",
		"hint": "회의 자료 검토를 부탁하는 상황입니다.",
		"keywords": "会议资料 (huìyì zīliào), 准备好 (zhǔnbèi hǎo), 有空 (yǒu kòng), 看看 (kànkan)",
		"weight": 1
	},
	{
		"q": "明天的会议，什么时候开始好呢？",
		"qP": "Míngtiān de huìyì, shénme shíhou kāishǐ hǎo ne?",
		"a": "下午三点，怎么样？我明天上午要去见客户。",
		"aP": "Xiàwǔ sān diǎn, zěnmeyàng? Wǒ míngtiān shàngwǔ yào qù jiàn kèhù.",
		"hint": "회의 시간을 조정하는 대화입니다.",
		"keywords": "会议 (huìyì), 下午三点 (xiàwǔ sān diǎn), 客户 (kèhù), 见 (jiàn)",
		"weight": 1
	},
	{
		"q": "下周五我要搬家，我打算下星期请假。",
		"qP": "Xià zhōu wǔ wǒ yào bānjiā, wǒ dǎsuàn xià xīngqī qǐngjià.",
		"a": "应该没问题吧，最近公司不太忙，周末我去帮你吧。",
		"aP": "Yīnggāi méi wèntí ba, zuìjìn gōngsī bú tài máng, zhōumò wǒ qù bāng nǐ ba.",
		"hint": "이사 때문에 휴가를 내는 상황의 대화입니다.",
		"keywords": "应该 (Yīnggāi, 당연히), 搬家 (bānjiā), 请假 (qǐngjià, 휴가를 신청하다.), 公司 (gōngsī), 帮 (bāng)",
		"weight": 1
	},
	{
		"q": "要开会了，金科长去哪儿了？",
		"qP": "Yào kāihuì le, Jīn kēzhǎng qù nǎr le?",
		"a": "金科长去打印资料了，我们部门的打印机坏了，他去别的部门打印。",
		"aP": "Jīn kēzhǎng qù dǎyìn zīliào le, wǒmen bùmén de dǎyìnjī huài le, tā qù bié de bùmén dǎyìn.",
		"hint": "회의 전에 동료의 행방을 묻는 회사 대화입니다.",
		"keywords": "开会 (kāihuì), 打印资料 (dǎyìn zīliào), 打印机 (dǎyìnjī), 部门 (bùmén)",
		"weight": 1
	},
	{
		"q": "快九点了，什么时候下班？",
		"qP": "Kuài jiǔ diǎn le, shénme shíhou xiàbān?",
		"a": "你先下班吧，我正在准备明天的会议资料。",
		"aP": "Nǐ xiān xiàbān ba, Wǒ zhèngzài zhǔnbèi míngtiān de huìyì zīliào.",
		"hint": "야근 중인 동료 사이의 대화입니다.",
		"keywords": "下班 (xiàbān), 会议资料 (huìyì zīliào)",
		"weight": 1
	},
	{
		"q": "听说你们部门来了一个新职员，他怎么样？",
		"qP": "Tīngshuō nǐmen bùmén lái le yí ge xīn zhíyuán, tā zěnmeyàng?",
		"a": "新职员又高又帅，性格也很好。大家都喜欢他。",
		"aP": "Xīn zhíyuán yòu gāo yòu shuài, xìnggé yě hěn hǎo. Dàjiā dōu xǐhuan tā.",
		"hint": "새로 온 직원에 대해 이야기하는 회사 대화입니다.",
		"keywords": "新职员 (xīn zhíyuán, 신입사원), 性格 (xìnggé), 喜欢 (xǐhuan), 部门 (bùmén)",
		"weight": 1
	},
	{
		"q": "你和同事的关系怎么样？",
		"qP": "Nǐ hé tóngshì de guānxì zěnmeyàng?",
		"a": "我和同事的关系很好。我们工作的时候互相帮助。",
		"aP": "Wǒ hé tóngshì de guānxì hěn hǎo. Wǒmen gōngzuò de shíhou hùxiāng bāngzhù.",
		"hint": "직장 동료와의 관계에 대해 이야기하는 대화입니다.",
		"keywords": "同事 (tóngshì), 关系 (guānxì), 工作 (gōngzuò), 帮助 (bāngzhù, 돕다), 互相 (hùxiāng, 서로)",
		"weight": 1
	},
	{
		"q": "我的电脑突然死机了，麻烦你帮我看一下。",
		"qP": "Wǒ de diànnǎo tūrán sǐjī le, máfan nǐ bāng wǒ kàn yíxià.",
		"a": "好的，没问题。不过我不会修，给售后服务中心打电话吧。",
		"aP": "Hǎo de, méi wèntí. Búguò wǒ bú huì xiū, gěi shòuhòu fúwù zhōngxīn dǎ diànhuà ba.",
		"hint": "회사에서 컴퓨터 고장 문제를 이야기하는 상황입니다.",
		"keywords": "电脑 (diànnǎo), 死机 (sǐjī, 고장나다.), 售后服务中心 (shòuhòu fúwù zhōngxīn, 서비스센터), 电话 (diànhuà)",
		"weight": 1
	},
	{
		"q": "今天第一天上班，心情怎么样？",
		"qP": "Jīntiān dì yī tiān shàngbān, xīnqíng zěnmeyàng?",
		"a": "我们部门的同事们都很热情，气氛也很好，我很满意。",
		"aP": "Wǒmen bùmén de tóngshìmen dōu hěn rèqíng, qìfēn yě hěn hǎo, wǒ hěn mǎnyì.",
		"hint": "첫 출근 후 회사 분위기에 대해 이야기하는 대화입니다.",
		"keywords": "上班 (shàngbān), 同事 (tóngshì), 热情 (rèqíng), 满意 (mǎnyì, 만족하다.)",
		"weight": 1
	},
	{
		"q": "你对工资满意吗？",
		"qP": "Nǐ duì gōngzī mǎnyì ma?",
		"a": "我们公司工资高，待遇好。我很满意。",
		"aP": "Wǒmen gōngsī gōngzī gāo, dàiyù hǎo. Wǒ hěn mǎnyì.",
		"hint": "회사 급여와 복지에 대해 이야기하는 대화입니다.",
		"keywords": "工资 (gōngzī, 급여), 待遇 (dàiyù, 대우), 公司 (gōngsī), 满意 (mǎnyì)",
		"weight": 1
	},
	{
		"q": "办公用品都买好了吗？",
		"qP": "Bàngōng yòngpǐn dōu mǎi hǎo le ma?",
		"a": "上午我很忙，我还没买。我马上去买。",
 		"aP": "Shàngwǔ wǒ hěn máng, wǒ hái méi mǎi. Wǒ mǎshàng qù mǎi.",
		"hint": "사무용품 구매 상황을 이야기하는 회사 대화입니다.",
		"keywords": "办公用品 (bàngōng yòngpǐn), 会议 (huìyì), 买 (mǎi), 上午 (shàngwǔ)",
		"weight": 1
	},
	{
		"q": "你去外国出过差吗？",
		"qP": "Nǐ qù wàiguó chū guò chāi ma?",
		"a": "我常常去中国出差，下个星期我也要去上海出差。我觉得出差很累。",
		"aP": "Wǒ chángcháng qù Zhōngguó chūchāi, xià ge xīngqī wǒ yě yào qù Shànghǎi chūchāi. Wǒ juéde chūchāi hěn lèi.",
		"hint": "해외 출장 경험에 대해 이야기하는 대화입니다.",
		"keywords": "外国 (wàiguó), 出差 (chūchāi), 上海 (Shànghǎi), 累 (lèi)",
		"weight": 1
	},
	{
		"q": "我们现在要回公司，怎么走？",
		"qP": "Wǒmen xiànzài yào huí gōngsī, zěnme zǒu?",
		"a": "坐地铁吧，现在是下班时间，坐地铁不堵车。",
		"aP": "Zuò dìtiě ba, xiànzài shì xiàbān shíjiān, zuò dìtiě bú dǔchē.",
		"hint": "퇴근 시간 교통 상황에 대해 이야기하는 대화입니다.",
		"keywords": "公司 (gōngsī), 地铁 (dìtiě), 下班时间 (xiàbān shíjiān), 堵车 (dǔchē)",
		"weight": 1
	},
	{
		"q": "工作的时候，你常用外语吗？",
		"qP": "Gōngzuò de shíhou, nǐ cháng yòng wàiyǔ ma?",
		"a": "在公司不常用外语，不过我经常去国外出差，出差的时候我要说外语。",
		"aP": "Zài gōngsī bù cháng yòng wàiyǔ, búguò wǒ jīngcháng qù guówài chūchāi, chūchāi de shíhou wǒ yào shuō wàiyǔ.",
		"hint": "직장에서 외국어 사용에 대해 이야기하는 대화입니다.",
		"keywords": "工作 (gōngzuò), 外语 (wàiyǔ, 외국어), 国外 (guówài), 出差 (chūchāi)",
		"weight": 1
	},
	{
		"q": "暑假的时候，去海外旅行怎么样？",
		"qP": "Shǔjià de shíhou, qù hǎiwài lǚxíng zěnmeyàng?",
		"a": "不好意思，暑假我要去打工。你找别人吧。",
		"aP": "Bù hǎoyìsi, shǔjià wǒ yào qù dǎgōng. Nǐ zhǎo biérén ba.",
		"hint": "暑假旅行计划에 대해 이야기하는 대화입니다.",
		"keywords": "暑假 (shǔjià), 海外旅行 (hǎiwài lǚxíng), 打工 (dǎgōng)",
		"weight": 1
	},
	{
		"q": "这个假期你有什么特别的计划吗？",
		"qP": "Zhège jiàqī nǐ yǒu shénme tèbié de jìhuà ma?",
		"a": "我要去北京旅行，我听说北京有很多名胜古迹，还有很多好吃的菜。",
		"aP": "Wǒ yào qù Běijīng lǚxíng, wǒ tīngshuō Běijīng yǒu hěnduō hǎochī de cài.",
		"hint": "假期计划과 北京 여행에 대해 이야기하는 대화입니다.",
		"keywords": "计划 (jìhuà, 계획) 假期 (jiàqī), 北京 (Běijīng), 名胜古迹 (míngshèng gǔjì)",
		"weight": 1
	},
	{
		"q": "今年假期你去哪儿旅行了？",
		"qP": "Jīnnián jiàqī nǐ qù nǎr lǚxíng le?",
		"a": "今年我们公司特别忙，所以假期我没去旅行。你呢？",
		"aP": "Jīnnián wǒmen gōngsī tèbié máng, suǒyǐ jiàqī wǒ méi qù lǚxíng. Nǐ ne?",
		"hint": "假期 여행 여부에 대해 이야기하는 대화입니다.",
		"keywords": "假期 (jiàqī), 公司 (gōngsī), 旅行 (lǚxíng)",
		"weight": 1
	},
	{
		"q": "我下个月要去旅行了。",
		"qP": "Wǒ xià ge yuè yào qù lǚxíng le.",
		"a": "是吗？你去哪儿？跟谁一起去？真羡慕你。",
		"aP": "Shì ma? Nǐ qù nǎr? Gēn shéi yìqǐ qù? Zhēn xiànmù nǐ.",
		"hint": "여행 계획에 대해 이야기하는 대화입니다.",
		"keywords": "下个月 (xià ge yuè), 旅行 (lǚxíng), 羡慕 (xiànmù)",
		"weight": 1
	},
	{
		"q": "你想住什么样的宾馆？",
		"qP": "Nǐ xiǎng zhù shénme yàng de bīnguǎn?",
		"a": "我想住五星级的宾馆，因为五星级的宾馆很干净，服务也很好。",
		"aP": "Wǒ xiǎng zhù wǔxīngjí de bīnguǎn, yīnwèi wǔxīngjí de bīnguǎn hěn gānjìng, fúwù yě hěn hǎo.",
		"hint": "선호하는 호텔에 대해 이야기하는 대화입니다.",
		"keywords": "五星级 (wǔxīngjí), 宾馆 (bīnguǎn), 服务 (fúwù)",
		"weight": 1
	},
	{
		"q": "这儿真漂亮啊！",
		"qP": "Zhèr zhēn piàoliang a!",
		"a": "是啊，太漂亮了！来，我们一起拍张照。",
		"aP": "Shì a, tài piàoliang le! Lái, wǒmen yìqǐ pāi zhāng zhào.",
		"hint": "예쁜 장소에서 사진을 찍는 상황의 대화입니다.",
		"keywords": "漂亮 (piàoliang), 拍照 (pāizhào), 一起 (yìqǐ)",
		"weight": 1
	},
	{
		"q": "哥哥，我们一起准备妈妈的生日礼物吧。",
		"qP": "Gēge, wǒmen yìqǐ zhǔnbèi māma de shēngrì lǐwù ba.",
		"a": "好啊，明天星期六，我们一起去百货商店看看吧。",
		"aP": "Hǎo a, míngtiān xīngqīliù, wǒmen yìqǐ qù bǎihuò shāngdiàn kànkan ba.",
		"hint": "妈妈生日礼物을 준비하는 대화입니다.",
		"keywords": "生日礼物 (shēngrì lǐwù), 百货商店 (bǎihuò shāngdiàn), 一起 (yìqǐ)",
		"weight": 1
	},
	{
		"q": "我奶奶的生日快到了，送她什么礼物好呢？",
		"qP": "Wǒ nǎinai de shēngrì kuài dào le, sòng tā shénme lǐwù hǎo ne?",
		"a": "现金怎么样？这样奶奶可以自己买自己喜欢的。",
		"aP": "Xiànjīn zěnmeyàng? Zhèyàng nǎinai kěyǐ zìjǐ mǎi zìjǐ xǐhuan de.",
		"hint": "奶奶 생일 선물에 대해 이야기하는 대화입니다.",
		"keywords": "奶奶 (nǎinai), 礼物 (lǐwù), 现金 (xiànjīn)",
		"weight": 1
	},
	{
		"q": "我哥哥要大学毕业了，送他什么礼物好呢？",
		"qP": "Wǒ gēge yào dàxué bìyè le, sòng tā shénme lǐwù hǎo ne?",
		"a": "送给他苹果手机怎么样？年轻人喜欢苹果手机。",
		"aP": "Sòng gěi tā píngguǒ shǒujī zěnmeyàng? Niánqīngrén xǐhuan píngguǒ shǒujī.",
		"hint": "大学毕业 선물에 대해 이야기하는 대화입니다.",
		"keywords": "大学毕业 (dàxué bìyè), 礼物 (lǐwù), 苹果手机 (píngguǒ shǒujī)",
		"weight": 1
	},
	{
		"q": "哇！你做了最流行的发型。",
		"qP": "Wa! Nǐ zuò le zuì liúxíng de fàxíng.",
		"a": "昨天做的。怎么样？好看吗？",
		"aP": "Zuótiān zuò de. Zěnmeyàng? Hǎokàn ma?",
		"hint": "새로운 헤어스타일에 대해 이야기하는 대화입니다.",
		"keywords": "发型 (fàxíng, 헤어스타일), 流行 (liúxíng), 好看 (hǎokàn)",
		"weight": 1
	},
	{
		"q": "你要做什么？你要剪发还是烫发？",
		"qP": "Nǐ yào zuò shénme? Nǐ yào jiǎnfà háishì tàngfà?",
		"a": "我要剪一下，最近流行什么，您给我推荐一下。",
		"aP": "Wǒ yào jiǎn yíxià, zuìjìn liúxíng shénme, nín gěi wǒ tuījiàn yíxià.",
		"hint": "미용실에서 헤어스타일을 상담하는 대화입니다.",
		"keywords": "剪发 (jiǎnfà), 烫发 (tàngfà, 파마), 推荐 (tuījiàn)",
		"weight": 1
	}	
	
];
