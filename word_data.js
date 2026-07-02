const WORD_DATA = [
    {
        "hanzi": "最近 流行",
        "pinyin": "zuìjìn liúxíng",
        "meaning": "최근 유행",
        "a": "最近流行什么?",
        "aP": "zuìjìn liúxíng shénme?",
        "weight": 1
    },
    {
        "hanzi": "新出 的 款式",
        "pinyin": "xīn chū de kuǎnshì",
        "meaning": "새로 나온 디자인",
        "a": "这是今年新出的款式，您试试吧",
        "aP": "Zhè shì jīnnián xīn chū de kuǎnshì, nín shìshì ba.",
        "weight": 1
    },
    {
        "hanzi": "不过",
        "pinyin": "Búguò",
        "meaning": "하지만",
        "a": "不过我不喜欢这个颜色",
        "aP": "Búguò wǒ bù xǐhuān zhège yánsè",
        "weight": 1
    },
    {
        "hanzi": "家具",
        "pinyin": "家具",
        "meaning": "가구",
        "a": "您买的家具",
        "aP": "Nín mǎi de jiājù",
        "weight": 1
    },
    {
        "hanzi": "地址",
        "pinyin": "dìzhǐ",
        "meaning": "주소",
        "a": "这是我家的地址",
        "aP": "Zhè shì wǒ jiā de dìzhǐ",
        "weight": 1
    },
        {
        "hanzi": "生日礼物",
        "pinyin": "shēngrì lǐwù",
        "meaning": "생일 선물",
        "a": "这是我爱人给我买的生日礼物",
        "aP": "Zhè shì wǒ àiren gěi wǒ mǎi de shēngrì lǐwù",
        "weight": 1
    },
    {
        "hanzi": "穿",
        "pinyin": "chuān",
        "meaning": "입다.",
        "a": "你穿这个颜色非常好看",
        "aP": "nǐ chuān zhège yánsè fēicháng hǎokàn",
        "weight": 1
    },
    {
        "hanzi": "看起来",
        "pinyin": "kànqǐlái",
        "meaning": "그렇게 보이다.",
        "a": "黑色看起来很漂亮",
        "aP": "hēisè kànqǐlái hěn piàoliang",
        "weight": 1
    },
    {
        "hanzi": "试试",
        "pinyin": "shìshì",
        "meaning": "시험삼아 해보다.",
        "a": "可以试试吗?",
        "aP": "Kěyǐ shìshì ma?",
        "weight": 1
    },
    {
        "hanzi": "喜欢的话",
        "pinyin": "xǐhuān dehuà",
        "meaning": "좋아한다면 (的话 : 만약에)",
        "a": "你喜欢的话我给你买",
        "aP": "nǐ xǐhuān dehuà wǒ gěi nǐ mǎi.",
        "weight": 1
    },
    {
        "hanzi": "网购",
        "pinyin": "wǎnggòu",
        "meaning": "온라인쇼핑",
        "a": "我喜欢网购",
        "aP": "wǒ xǐhuān wǎnggòu",
        "weight": 1
    },
    {
        "hanzi": "而且",
        "pinyin": "érqiě",
        "meaning": "그리고",
        "a": "而且菜也好吃",
        "aP": "érqiě cài yě hǎochī",
        "weight": 1
    },
    {
        "hanzi": "午饭时间",
        "pinyin": "Wǔfàn shíjiān",
        "meaning": "점심 시간",
        "a": "午饭时间到了",
        "aP": "Wǔfàn shíjiān dào le",
        "weight": 1
    },
    {
        "hanzi": "边吃边谈",
        "pinyin": "biān chī biān tán",
        "meaning": "먹으면서 얘기하다",
        "a": "咱们边吃边谈吧",
        "aP": "zánmen biān chī biān tán ba",
        "weight": 1
    },
    {
        "hanzi": "差",
        "pinyin": "chà",
        "meaning": "끔찍하다. 수준이 떨어지다.",
        "a": "服务态度太差了",
        "aP": "fúwù tàidù tài chà le",
        "weight": 1
    },
        {
        "hanzi": "酸",
        "pinyin": "suān",
        "meaning": "시다.",
        "a": "你喜欢吃酸的还是甜的?",
        "aP": "Nǐ xǐhuan chī suān de háishi tián de?",
        "weight": 1
    },
    {
        "hanzi": "甜",
        "pinyin": "tián",
        "meaning": "달다.",
        "a": "你喜欢吃酸的还是甜的?",
        "aP": "Nǐ xǐhuan chī suān de háishi tián de?",
        "weight": 1
    },
    {
        "hanzi": "散散步",
        "pinyin": "sànsanbù",
        "meaning": "산책하다.",
        "a": "我们去附近的公园散散步吧",
        "aP": "wǒmen qù fùjìn de gōngyuán sànsanbù ba",
        "weight": 1
    },
    {
        "hanzi": "加班",
        "pinyin": "jiābān",
        "meaning": "초과근무 (야근)",
        "a": "每天都加班",
        "aP": "měitiān dōu jiābān",
        "weight": 1
    },
    {
        "hanzi": "会议 结束",
        "pinyin": "huìyì jiéshù",
        "meaning": "회의를 마치다.",
        "a": "会议结束以后我帮你吧",
        "aP": "huìyì jiéshù yǐhòu wǒ bāng nǐ ba.",
        "weight": 1
    },
    {
        "hanzi": "写 资料",
        "pinyin": "xiě zīliào",
        "meaning": "자료를 정리하다.",
        "a": "你帮我写资料可以吗？",
        "aP": "Nǐ bāng wǒ xiě zīliào kěyǐ ma?",
        "weight": 1
    },
    {
        "hanzi": "寄",
        "pinyin": "jì",
        "meaning": "보내다",
        "a": "您能寄给我新产品的资料吗？",
        "aP": "Nín néng jì gěi wǒ xīn chǎnpǐn de zīliào ma?",
        "weight": 1
    },
    {
        "hanzi": "新产品",
        "pinyin": "xīn chǎnpǐn",
        "meaning": "신제품",
        "a": "您能寄给我新产品的资料吗？",
        "aP": "Nín néng jì gěi wǒ xīn chǎnpǐn de zīliào ma?",
        "weight": 1
    },
    {
        "hanzi": "考试结束",
        "pinyin": "Kǎoshì jiéshù",
        "meaning": "시험 종료",
        "a": "考试结束了，周六一起看电影吧",
        "aP": "Kǎoshì jiéshù le, zhōuliù yìqǐ kàn diànyǐng ba.",
        "weight": 1
    },
    {
        "hanzi": "打工",
        "pinyin": "dǎgōng",
        "meaning": "아르바이트",
        "a": "周六我要去打工。",
        "aP": "zhōuliù wǒ yào qù dǎgōng.",
        "weight": 1
    },
    {
        "hanzi": "找",
        "pinyin": "zhǎo",
        "meaning": "찾다.",
        "a": "你找别人吧。",
        "aP": "Nǐ zhǎo biérén ba.",
        "weight": 1
    },
    {
        "hanzi": "方便",
        "pinyin": "fāngbiàn",
        "meaning": "편리하다.",
        "a": "吃汉堡又好吃又方便，而且省时。",
        "aP": "chī hànbǎo yòu hǎochī yòu fāngbiàn, érqiě shěngshí.",
        "weight": 1
    },
    {
        "hanzi": "而且",
        "pinyin": "érqiě",
        "meaning": "또한",
        "a": "吃汉堡又好吃又方便，而且省时。",
        "aP": "chī hànbǎo yòu hǎochī yòu fāngbiàn, érqiě shěngshí.",
        "weight": 1
    },
    {
        "hanzi": "省时",
        "pinyin": "shěngshí",
        "meaning": "시간을 절약하다.",
        "a": "吃汉堡又好吃又方便，而且省时。",
        "aP": "chī hànbǎo yòu hǎochī yòu fāngbiàn, érqiě shěngshí.",
        "weight": 1
    },
    {
        "hanzi": "关上窗户",
        "pinyin": "guānshang chuānghu",
        "meaning": "창문을 닫다.",
        "a": "你能帮我关上窗户吗？",
        "aP": "nǐ néng bāng wǒ guānshang chuānghu ma?",
        "weight": 1
    },
    {
        "hanzi": "健身房",
        "pinyin": "jiànshēnfán",
        "meaning": "헬스장",
        "a": "我下班以后经常去健身房运动",
        "aP": "Wǒ xiàbān yǐhòu jīngcháng qù jiànshēnfáng yùndòng",
        "weight": 1
    },
    {
        "hanzi": "新闻",
        "pinyin": "xīnwén",
        "meaning": "뉴스",
        "a": "你昨天看新闻了吗？",
        "aP": "Nǐ zuótiān kàn xīnwén le ma?",
        "weight": 1
    },
    {
        "hanzi": "所以",
        "pinyin": "Suǒyǐ",
        "meaning": "그래서",
        "a": "所以我的手机里有很多照片。",
        "aP": "Suǒyǐ wǒ de shǒujī lǐ yǒu hěn duō zhàopiàn.",
        "weight": 1
    },
    {
        "hanzi": "看起来",
        "pinyin": "kàn qǐlái",
        "meaning": "보기에",
        "a": "你看起来很累。",
        "aP": "Nǐ kàn qǐlái hěn lèi.",
        "weight": 1
    },
    {
        "hanzi": "早睡早起",
        "pinyin": "Zǎoshuì zǎoqǐ",
        "meaning": "일찍 자고 일찍 일어나다.",
        "a": "早睡早起对身体好。",
        "aP": "Zǎoshuì zǎoqǐ duì shēntǐ hǎo.",
        "weight": 1
    },
    {
        "hanzi": "自由",
        "pinyin": "zìyóu",
        "meaning": "자유롭다",
        "a": "我觉得一个人住比较自由。",
        "aP": "Wǒ juéde yí ge rén zhù bǐjiào zìyóu.",
        "weight": 1
    },
    {
        "hanzi": "早起",
        "pinyin": "zǎoqǐ",
        "meaning": "일찍 일어나다.",
        "a": "你每天早起吗？",
        "aP": "Nǐ měitiān zǎoqǐ ma?",
        "weight": 1
    },
    {
        "hanzi": "早睡早起",
        "pinyin": "Zǎoshuì zǎoqǐ",
        "meaning": "일찍 자고, 일찍 일어나다.",
        "a": "早睡早起对身体好。",
        "aP": "Zǎoshuì zǎoqǐ duì shēntǐ hǎo.",
        "weight": 1
    },
    {
        "hanzi": "自由",
        "pinyin": "zìyóu.",
        "meaning": "자유롭다.",
        "a": "我觉得一个人住比较自由。",
        "aP": "Wǒ juéde yí ge rén zhù bǐjiào zìyóu.",
        "weight": 1
    },
    {
        "hanzi": "上个月",
        "pinyin": "shàng ge yuè",
        "meaning": "지난 달",
        "a": "我上个月跟家人一起去济州岛旅行了.",
        "aP": "wǒ shàng ge yuè gēn jiārén yìqǐ qù Jìzhōudǎo lǚxíng le.",
        "weight": 1
    },
    {
        "hanzi": "可爱",
        "pinyin": "kě'ài",
        "meaning": "귀엽다.",
        "a": "她很可爱，她是谁。",
        "aP": "Tā hěn kě'ài, tā shì shéi.",
        "weight": 1
    },
    {
        "hanzi": "好消息",
        "pinyin": "hǎo xiāoxi",
        "meaning": "좋은 소식",
        "a": "告诉你一个好消息，我买新房子了。",
        "aP": "Gàosu nǐ yí ge hǎo xiāoxi, wǒ mǎi xīn fángzi le.",
        "weight": 1
    },
    {
        "hanzi": "新房子",
        "pinyin": "xīn fángzi",
        "meaning": "새 집",
        "a": "我买新房子了。",
        "aP": "wǒ mǎi xīn fángzi le.",
        "weight": 1
    },
    {
        "hanzi": "告诉",
        "pinyin": "Gàosu",
        "meaning": "말하다.",
        "a": "告诉你一个好消息.",
        "aP": "Gàosu nǐ yí ge hǎo xiāoxi.",
        "weight": 1
    },
    {
        "hanzi": "不见了",
        "pinyin": "bújiàn le.",
        "meaning": "사라졌다.",
        "a": "我的钱包不见了。",
        "aP": "Wǒ de qiánbāo bújiàn le.",
        "weight": 1
    },
    {
        "hanzi": "好好想想",
        "pinyin": "Hǎohǎo xiǎngxiang",
        "meaning": "잘 생각해보세요.",
        "a": "好好想想，我帮你找。",
        "aP": "Hǎohǎo xiǎngxiang, wǒ bāng nǐ zhǎo.",
        "weight": 1
    },
    {
        "hanzi": "又坏",
        "pinyin": "yòu huài",
        "meaning": "또 고장나다.",
        "a": "我的手机又坏（出毛病/出故障）了。",
        "aP": "Wǒ de shǒujī yòu huài (chū máobìng / chū gùzhàng) le.",
        "weight": 1
    },
    {
        "hanzi": "升职",
        "pinyin": "shēngzhí",
        "meaning": "승진",
        "a": "我老公升职当部长了。",
        "aP": "Wǒ lǎogōng shēngzhí dāng bùzhǎng le.",
        "weight": 1
    },
    {
        "hanzi": "请客",
        "pinyin": "qǐngkè.",
        "meaning": "한턱내다.",
        "a": "真的吗？太好了！恭喜恭喜，今天你请客。",
        "aP": "Zhēn de ma? Tài hǎo le! Gōngxǐ gōngxǐ, jīntiān nǐ qǐngkè.",
        "weight": 1
    },
    {
        "hanzi": "分手了",
        "pinyin": "fēnshǒu le.",
        "meaning": "헤어졌다.",
        "a": "我跟女朋友分手了。",
        "aP": "Wǒ gēn nǚ péngyou fēnshǒu le.",
        "weight": 1
    },
    {
        "hanzi": "别太伤心",
        "pinyin": "bié tài shāngxīn",
        "meaning": "너무 슬퍼하지 마세요.",
        "a": "别太伤心，我们一起喝酒，我请你。",
        "aP": "bié tài shāngxīn, wǒmen yìqǐ hējiǔ, wǒ qǐng nǐ.",
        "weight": 1
    },
    {
        "hanzi": "介绍",
        "pinyin": "jièshào",
        "meaning": "소개하다.",
        "a": "这个周末我给你介绍男朋友，怎么样？",
        "aP": "Zhège zhōumò wǒ gěi nǐ jièshào nán péngyou, zěnmeyàng?",
        "weight": 1
    },
    {
        "hanzi": "打开",
        "pinyin": "dǎkāi",
        "meaning": "열다",
        "a": "太谢谢了，这是什么？我可以打开看看吗？",
        "aP": "Tài xièxie le, zhè shì shénme? Wǒ kěyǐ dǎkāi kànkan ma?",
        "weight": 1
    },
    {
        "hanzi": "所以",
        "pinyin": "suǒyǐ",
        "meaning": "그래서",
        "a": "去过，很喜欢旅行，所以我去过很多国家。",
        "aP": "Qùguo, hěn xǐhuan lǚxíng, suǒyǐ wǒ qùguo hěn duō guójiā.",
        "weight": 1
    },
    {
        "hanzi": "国家",
        "pinyin": "guójiā.",
        "meaning": "국가",
        "a": "去过，很喜欢旅行，所以我去过很多国家。",
        "aP": "Qùguo, hěn xǐhuan lǚxíng, suǒyǐ wǒ qùguo hěn duō guójiā.",
        "weight": 1
    },
    {
        "hanzi": "一定",
        "pinyin": "yídìng",
        "meaning": "반드시",
        "a": "定了，打算明年5月结婚，到时候你一定要来啊。",
        "aP": "Dìng le, dǎsuàn míngnián wǔ yuè jiéhūn, dào shíhou nǐ yídìng yào lái a.",
        "weight": 1
    },
    {
        "hanzi": "到时候",
        "pinyin": "dào shíhou",
        "meaning": "그때가 되면",
        "a": "定了，打算明年5月结婚，到时候你一定要来啊。",
        "aP": "Dìng le, dǎsuàn míngnián wǔ yuè jiéhūn, dào shíhou nǐ yídìng yào lái a.",
        "weight": 1
    },
    {
        "hanzi": "参加",
        "pinyin": "cānjiā",
        "meaning": "참석하다",
        "a": "你参加小李的婚礼吗？",
        "aP": "Nǐ cānjiā Xiǎo Lǐ de hūnlǐ ma?",
        "weight": 1
    },
    {
        "hanzi": "告诉",
        "pinyin": "gàosu",
        "meaning": "말하다",
        "a": "那天我要去中国出差，不能参加，我已经告诉小李了。",
        "aP": "nà tiān wǒ yào qù Zhōngguó chūchāi, bù néng cānjiā, wǒ yǐjīng gàosu Xiǎo Lǐ le.",
        "weight": 1
    },
    {
        "hanzi": "因为",
        "pinyin": "yīnwèi",
        "meaning": "왜냐하면",
        "a": "我常来，因为我儿子喜欢动物。",
        "aP": "Wǒ cháng lái, yīnwèi wǒ érzi xǐhuan dòngwù.",
        "weight": 1
    },
    {
        "hanzi": "凉快",
        "pinyin": "liángkuai",
        "meaning": "시원하다.",
        "a": "我更喜欢秋天。秋天凉快，红叶非常漂亮。",
        "aP": "Wǒ gèng xǐhuan qiūtiān. Qiūtiān liángkuai, hóngyè fēicháng piàoliang.",
        "weight": 1
    },
    {
        "hanzi": "不过",
        "pinyin": "búguò",
        "meaning": "하지만",
        "a": "今天天气很好，不过有点儿热，天气预报说今天最高气温32度。",
        "aP": "Jīntiān tiānqì hěn hǎo, búguò yǒudiǎnr rè, tiānqì yùbào shuō jīntiān zuìgāo qìwēn sānshí'èr dù.",
        "weight": 1
    },
    {
        "hanzi": "会下雨",
        "pinyin": "huì xiàyǔ.",
        "meaning": "비가 올 것이다.",
        "a": "听说今天晚上会下雨。",
        "aP": "Tīngshuō jīntiān wǎnshang huì xiàyǔ.",
        "weight": 1
    },
    {
        "hanzi": "注意",
        "pinyin": "zhùyì",
        "meaning": "주의하다.",
        "a": "天冷了，你要注意感冒。",
        "aP": "Tiān lěng le, nǐ yào zhùyì gǎnmào.",
        "weight": 1
    },
    {
        "hanzi": "堵车",
        "pinyin": "Dǔchē",
        "meaning": "교통 체증",
        "a": "堵车了，我可能要晚了。",
        "aP": "Dǔchē le, wǒ kěnéng yào wǎn le.",
        "weight": 1
    },
    {
        "hanzi": "路上小心",
        "pinyin": "lùshang xiǎoxīn",
        "meaning": "가시는 길 조심하세요.",
        "a": "没关系，我在咖啡厅等你，路上小心。",
        "aP": "Méiguānxi, wǒ zài kāfēitīng děng nǐ, lùshang xiǎoxīn.",
        "weight": 1
    },
    {
        "hanzi": "路上",
        "pinyin": "Lùshang",
        "meaning": "가는 길에",
        "a": "你怎么来晚了？路上出了什么事？",
        "aP": "Nǐ zěnme lái wǎn le? Lùshang chū le shénme shì?",
        "weight": 1
    },
    {
        "hanzi": "好像赶不上",
        "pinyin": "hǎoxiàng gǎn bu shàng",
        "meaning": "도저히 따라잡을 수 없다.",
        "a": "我们好像赶不上火车了。",
        "aP": "Wǒmen hǎoxiàng gǎn bu shàng huǒchē le.",
        "weight": 1
    },
    {
        "hanzi": "坐船",
        "pinyin": "zuòchuán",
        "meaning": "배를 타다.",
        "a": "我觉得坐船太慢了，坐飞机吧，又快又方便。",
        "aP": "Wǒ juéde zuòchuán tài màn le, zuò fēijī ba, yòu kuài yòu fāngbiàn.",
        "weight": 1
    },
    {
        "hanzi": "开车",
        "pinyin": "kāichē",
        "meaning": "운전하다.",
        "a": "你一般什么时候开车？",
        "aP": "Nǐ yìbān shénme shíhou kāichē?",
        "weight": 1
    },
    {
        "hanzi": "一个小时",
        "pinyin": "yí ge xiǎoshí.",
        "meaning": "한 시간",
        "a": "我每天开车上下班。我家离公司比较远，开车要一个小时。",
        "aP": "Wǒ měitiān kāichē shàngxiàbān. Wǒ jiā lí gōngsī bǐjiào yuǎn, kāichē yào yí ge xiǎoshí.",
        "weight": 1
    },
    {
        "hanzi": "有空的时",
        "pinyin": "yǒu kòng de shíhou",
        "meaning": "시간이 날 때",
        "a": "是啊，我买了新房子，有空的时候来我家玩吧。",
        "aP": "Shì a, wǒ mǎi le xīn fángzi, yǒu kòng de shíhou lái wǒ jiā wán ba.",
        "weight": 1
    },
    {
        "hanzi": "玩吧",
        "pinyin": "wán ba.",
        "meaning": "놀자",
        "a": "是啊，我买了新房子，有空的时候来我家玩吧。",
        "aP": "Shì a, wǒ mǎi le xīn fángzi, yǒu kòng de shíhou lái wǒ jiā wán ba.",
        "weight": 1
    },
    {
        "hanzi": "预订",
        "pinyin": "yùdìng",
        "meaning": "예약하다.",
        "a": "你预订什么时候的火车票？",
        "aP": "Nǐ yùdìng shénme shíhou de huǒchēpiào?",
        "weight": 1
    },
    {
        "hanzi": "刷卡",
        "pinyin": "shuākǎ",
        "meaning": "카드 결제",
        "a": "我要两张明天上午8点的，可以刷卡吗？",
        "aP": "Wǒ yào liǎng zhāng míngtiān shàngwǔ bā diǎn de, kěyǐ shuākǎ ma?",
        "weight": 1
    },
    {
        "hanzi": "感觉怎么样",
        "pinyin": "gǎnjué zěnmeyàng?",
        "meaning": "느낌이 어때요?",
        "a": "你第一次坐船，感觉怎么样？",
        "aP": "Nǐ dì yí cì zuò chuán, gǎnjué zěnmeyàng?",
        "weight": 1
    },
    {
        "hanzi": "睡",
        "pinyin": "shuì",
        "meaning": "수면",
        "a": "最近睡得怎么样？",
        "aP": "Zuìjìn shuì de zěnmeyàng?",
        "weight": 1
    },
    {
        "hanzi": "失眠",
        "pinyin": "shīmián",
        "meaning": "불면증",
        "a": "我最近睡得不好，常常失眠，所以白天很累。",
        "aP": "Wǒ zuìjìn shuì de bù hǎo, chángcháng shīmián, suǒyǐ báitiān hěn lèi.",
        "weight": 1
    },
    {
        "hanzi": "白天",
        "pinyin": "báitiān",
        "meaning": "낮에",
        "a": "我最近睡得不好，常常失眠，所以白天很累。",
        "aP": "Wǒ zuìjìn shuì de bù hǎo, chángcháng shīmián, suǒyǐ báitiān hěn lèi.",
        "weight": 1
    },
    {
        "hanzi": "脸色",
        "pinyin": "liǎnsè",
        "meaning": "얼굴",
        "a": "你的脸色不太好。",
        "aP": "Nǐ de liǎnsè bú tài hǎo.",
        "weight": 1
    },
    {
        "hanzi": "发烧",
        "pinyin": "fāshāo",
        "meaning": "발열",
        "a": "我头疼、发烧，全身不舒服，我要去医院看看。",
        "aP": "Wǒ tóuténg, fāshāo, quánshēn bù shūfu, wǒ yào qù yīyuàn kànkan.",
        "weight": 1
    },
    {
        "hanzi": "全身",
        "pinyin": "quánshēn",
        "meaning": "전신",
        "a": "我头疼、发烧，全身不舒服，我要去医院看看。",
        "aP": "Wǒ tóuténg, fāshāo, quánshēn bù shūfu, wǒ yào qù yīyuàn kànkan.",
        "weight": 1
    },
    {
        "hanzi": "看过医生",
        "pinyin": "kàn guò yīshēng",
        "meaning": "의사의 진찰을 받았다.",
        "a": "你最近去医院看过医生吗？",
        "aP": "Nǐ zuìjìn qù yīyuàn kàn guò yīshēng ma?",
        "weight": 1
    },
    {
        "hanzi": "出院",
        "pinyin": "chūyuàn",
        "meaning": "퇴원",
        "a": "你什么时候能出院？",
        "aP": "Nǐ shénme shíhou néng chūyuàn?",
        "weight": 1
    },
    {
        "hanzi": "担心",
        "pinyin": "dānxīn",
        "meaning": "걱정하다.",
        "a": "你不用担心。现在好多了。",
        "aP": "nǐ bú yòng dānxīn. Xiànzài hǎoduō le.",
        "weight": 1
    },
    {
        "hanzi": "好像",
        "pinyin": "hǎoxiàng",
        "meaning": "~ 한 것 같다.",
        "a": "我的狗好像感冒了",
        "aP": "Wǒ de gǒu hǎoxiàng gǎnmào le.",
        "weight": 1
    },
    {
        "hanzi": "看起来",
        "pinyin": "kànqǐlái",
        "meaning": "~ 한 것 처럼 보이다.",
        "a": "小李看起来很累，他怎么了？",
        "aP": "Xiǎo Lǐ kànqǐlái hěn lèi, tā zěnme le?",
        "weight": 1
    },
    {
        "hanzi": "加班",
        "pinyin": "jiābān",
        "meaning": "야근",
        "a": "小李最近每天加班",
        "aP": "Xiǎo Lǐ zuìjìn měitiān jiābān",
        "weight": 1
    },
    {
        "hanzi": "劳累过度",
        "pinyin": "láolèi guòdù.",
        "meaning": "과로하다.",
        "a": "很晚才回家，他可能劳累过度。",
        "aP": "hěn wǎn cái huí jiā, tā kěnéng láolèi guòdù.",
        "weight": 1
    },
    {
        "hanzi": "很晚才",
        "pinyin": "hěn wǎn cái",
        "meaning": "아주 늦게서야 비로소",
        "a": "很晚才回家，他可能劳累过度。",
        "aP": "hěn wǎn cái huí jiā, tā kěnéng láolèi guòdù.",
        "weight": 1
    },
    {
        "hanzi": "体检 结果",
        "pinyin": "Tǐjiǎn jiéguǒ",
        "meaning": "건강검진 결과",
        "a": "体检结果出来了吗？",
        "aP": "Tǐjiǎn jiéguǒ chūlai le ma?",
        "weight": 1
    },
    {
        "hanzi": "不行",
        "pinyin": "bù xíng",
        "meaning": "불가능하다.",
        "a": "这周不行，下周怎么样？",
        "aP": "Zhè zhōu bù xíng, xià zhōu zěnmeyàng?",
        "weight": 1
    },
    {
        "hanzi": "定期",
        "pinyin": "dìngqī",
        "meaning": "정기적으로",
        "a": "你定期去检查身体吗？",
        "aP": "Nǐ dìngqī qù jiǎnchá shēntǐ ma?",
        "weight": 1
    },
    {
        "hanzi": "检查身体",
        "pinyin": "jiǎnchá shēntǐ",
        "meaning": "건강검진",
        "a": "你定期去检查身体吗？",
        "aP": "Nǐ dìngqī qù jiǎnchá shēntǐ ma?",
        "weight": 1
    },
    {
        "hanzi": "通过面试",
        "pinyin": "tōngguò miànshì",
        "meaning": "면접 합격",
        "a": "我通过面试了吗？太好了，谢谢您，我明天就可以上班。",
        "aP": "Wǒ tōngguò miànshì le ma? Tài hǎo le, xièxie nín, wǒ míngtiān jiù kěyǐ shàngbān.",
        "weight": 1
    },
    {
        "hanzi": "方法",
        "pinyin": "fāngfǎ",
        "meaning": "방법",
        "a": "你学习汉语的好方法是什么？",
        "aP": "Nǐ xuéxí Hànyǔ de hǎo fāngfǎ shì shénme?",
        "weight": 1
    },
    {
        "hanzi": "重要",
        "pinyin": "zhòngyào",
        "meaning": "중요하다.",
        "a": "我觉得学习汉语会话最重要",
        "aP": "Wǒ juéde xuéxí Hànyǔ huìhuà zuì zhòngyào",
        "weight": 1
    },
    {
        "hanzi": "聊天",
        "pinyin": "liáotiān.",
        "meaning": "채팅",
        "a": "所以我常常找中国朋友聊天。",
        "aP": "suǒyǐ wǒ chángcháng zhǎo Zhōngguó péngyou liáotiān.",
        "weight": 1
    },
    {
        "hanzi": "考试准备",
        "pinyin": "Kǎoshì zhǔnbèi",
        "meaning": "시험 준비",
        "a": "考试准备得怎么样？",
        "aP": "Kǎoshì zhǔnbèi de zěnmeyàng?",
        "weight": 1
    },
    {
        "hanzi": "紧张",
        "pinyin": "jǐnzhāng",
        "meaning": "긴장하다.",
        "a": "我已经准备好了，不过很紧张",
        "aP": "Wǒ yǐjīng zhǔnbèi hǎo le, búguò hěn jǐnzhāng.",
        "weight": 1
    },
    {
        "hanzi": "好像不太难",
        "pinyin": "hǎoxiàng bú tài nán",
        "meaning": "어렵지 않은 것 같다.",
        "a": "这次考试好像不太难，你觉得呢？",
        "aP": "Zhè cì kǎoshì hǎoxiàng bú tài nán, nǐ juéde ne?",
        "weight": 1
    },
    {
        "hanzi": "面试",
        "pinyin": "miànshì",
        "meaning": "면접",
        "a": "你面试准备得怎么样？",
        "aP": "Nǐ miànshì zhǔnbèi de zěnmeyàng?",
        "weight": 1
    },
    {
        "hanzi": "成功",
        "pinyin": "chénggōng",
        "meaning": "성공",
        "a": "我面试成功了。",
        "aP": "Wǒ miànshì chénggōng le.",
        "weight": 1
    },
    {
        "hanzi": "请客",
        "pinyin": "Jīntiān nǐ qǐngkè.",
        "meaning": "한턱내다.",
        "a": "今天你请客。",
        "aP": "Jīntiān nǐ qǐngkè.",
        "weight": 1
    },
    {
        "hanzi": "努力",
        "pinyin": "nǔlì",
        "meaning": "노력",
        "a": "别紧张，你每天努力学习，一定没问题。",
        "aP": "Bié jǐnzhāng, nǐ měitiān nǔlì xuéxí, yídìng méi wèntí.",
        "weight": 1
    },
    {
        "hanzi": "一定没问题",
        "pinyin": "yídìng méi wèntí.",
        "meaning": "분명히 문제가 없을 것이다.",
        "a": "一定没问题。",
        "aP": "yídìng méi wèntí.",
        "weight": 1
    },
    {
        "hanzi": "节课",
        "pinyin": "jié kè?",
        "meaning": "수업",
        "a": "今天你有几节课？",
        "aP": "Jīntiān nǐ yǒu jǐ jié kè?",
        "weight": 1
    },
    {
        "hanzi": "兴趣",
        "pinyin": "xìngqù",
        "meaning": "관심",
        "a": "你对中国文化感兴趣吗？",
        "aP": "Nǐ duì Zhōngguó wénhuà gǎn xìngqù ma?",
        "weight": 1
    },
    {
        "hanzi": "感兴趣吗?",
        "pinyin": "gǎn xìngqù ma?",
        "meaning": "관심 있나요?",
        "a": "你对中国文化感兴趣吗？",
        "aP": "Nǐ duì Zhōngguó wénhuà gǎn xìngqù ma?",
        "weight": 1
    },
    {
        "hanzi": "借的书",
        "pinyin": "jiè de shū",
        "meaning": "대출한 책",
        "a": "你要借的书，现在没有。",
        "aP": "Nǐ yào jiè de shū, xiànzài méiyǒu.",
        "weight": 1
    },
    {
        "hanzi": "第一次",
        "pinyin": "dì yī cì",
        "meaning": "첫번째",
        "a": "今天是第一次报名吗？",
        "aP": "Jīntiān shì dì yī cì bàomíng ma?",
        "weight": 1
    },
    {
        "hanzi": "报名",
        "pinyin": "bàomíng",
        "meaning": "방문",
        "a": "今天是第一次报名吗？",
        "aP": "Jīntiān shì dì yī cì bàomíng ma?",
        "weight": 1
    },
    {
        "hanzi": "报告",
        "pinyin": "bàogào",
        "meaning": "보고서",
        "a": "你的报告有很多错误。",
        "aP": "Nǐ de bàogào yǒu hěn duō cuòwù.",
        "weight": 1
    },
    {
        "hanzi": "错误",
        "pinyin": "cuòwù",
        "meaning": "실수",
        "a": "你的报告有很多错误。",
        "aP": "Nǐ de bàogào yǒu hěn duō cuòwù.",
        "weight": 1
    },
    {
        "hanzi": "改",
        "pinyin": "gǎi",
        "meaning": "변화, 수정",
        "a": "对不起，我马上改",
        "aP": "Duìbuqǐ, wǒ mǎshàng gǎi",
        "weight": 1
    },
    {
        "hanzi": "这么长时间",
        "pinyin": "zhème cháng shíjiān",
        "meaning": "그렇게 오랫동안",
        "a": "为什么开了这么长时间的会议？",
        "aP": "Wèishénme kāi le zhème cháng shíjiān de huìyì?",
        "weight": 1
    },
    {
        "hanzi": "还没",
        "pinyin": "hái méi",
        "meaning": "아직 아니다.",
        "a": "会议还没结束。",
        "aP": "huìyì hái méi jiéshù.",
        "weight": 1
    },
    {
        "hanzi": "复杂",
        "pinyin": "fùzá,",
        "meaning": "복잡하다.",
        "a": "工作计划很复杂",
        "aP": "gōngzuò jìhuà hěn fùzá",
        "weight": 1
    },
    {
        "hanzi": "参加",
        "pinyin": "cānjiā",
        "meaning": "참가하다.",
        "a": "我去上海参加一个重要的会议",
        "aP": "Wǒ qù Shànghǎi cānjiā yí ge zhòngyào de huìyì",
        "weight": 1
    },
    {
        "hanzi": "放心",
        "pinyin": "fàngxīn",
        "meaning": "안심하다.",
        "a": "我跟金部长一起去，金部长的汉语很好，我很放心。",
        "aP": "Wǒ gēn Jīn bùzhǎng yìqǐ qù, Jīn bùzhǎng de Hànyǔ hěn hǎo, wǒ hěn fàngxīn.",
        "weight": 1
    },
    {
        "hanzi": "心情",
        "pinyin": "xīnqíng",
        "meaning": "심정, 기분",
        "a": "你第一次去海外出差，心情怎么样？",
        "aP": "Nǐ dì yī cì qù hǎiwài chūchāi, xīnqíng zěnmeyàng?",
        "weight": 1
    },
    {
        "hanzi": "但是",
        "pinyin": "dànshì",
        "meaning": "하지만",
        "a": "但是也很高兴，因为可以了解外国文化。",
        "aP": "dànshì yě hěn gāoxìng, yīnwèi kěyǐ liǎojiě wàiguó wénhuà.",
        "weight": 1
    },
    {
        "hanzi": "因为",
        "pinyin": "yīnwèi",
        "meaning": "왜냐하면",
        "a": "因为可以了解外国文化。",
        "aP": "yīnwèi kěyǐ liǎojiě wàiguó wénhuà.",
        "weight": 1
    },
    {
        "hanzi": "了解",
        "pinyin": "liǎojiě",
        "meaning": "배우다.",
        "a": "因为可以了解外国文化。",
        "aP": "yīnwèi kěyǐ liǎojiě wàiguó wénhuà.",
        "weight": 1
    },
    {
        "hanzi": "客户开会",
        "pinyin": "kèhù kāihuì",
        "meaning": "고객 미팅",
        "a": "明天跟客户开会，订好会议室了吗？",
        "aP": "Míngtiān gēn kèhù kāihuì, dìng hǎo huìyìshì le ma?",
        "weight": 1
    },
    {
        "hanzi": "订好",
        "pinyin": "dìng hǎo",
        "meaning": "예약 확정",
        "a": "明天跟客户开会，订好会议室了吗？",
        "aP": "Míngtiān gēn kèhù kāihuì, dìng hǎo huìyìshì le ma?",
        "weight": 1
    },
    {
        "hanzi": "有空的话",
        "pinyin": "yǒu kòng de huà",
        "meaning": "시간이 있으시다면",
        "a": "已经准备好了，您有空的话帮我看看，好吗？",
        "aP": "Yǐjīng zhǔnbèi hǎo le, nín yǒu kòng de huà bāng wǒ kànkan, hǎo ma?",
        "weight": 1
    },
    {
        "hanzi": "客户",
        "pinyin": "kèhù.",
        "meaning": "고객",
        "a": "我明天上午要去见客户。",
        "aP": "Wǒ míngtiān shàngwǔ yào qù jiàn kèhù.",
        "weight": 1
    },
    {
        "hanzi": "请假",
        "pinyin": "qǐngjià.",
        "meaning": "휴가를 신청하다.",
        "a": "下周五我要搬家，我打算下星期请假。",
        "aP": "Xià zhōu wǔ wǒ yào bānjiā, wǒ dǎsuàn xià xīngqī qǐngjià.",
        "weight": 1
    },
    {
        "hanzi": "应该",
        "pinyin": "Yīnggāi",
        "meaning": "~ 해야한다.",
        "a": "应该没问题吧",
        "aP": "Yīnggāi méi wèntí ba",
        "weight": 1
    },
    {
        "hanzi": "打印",
        "pinyin": "dǎyìn",
        "meaning": "인쇄하다.",
        "a": "金科长去打印资料了",
        "aP": "Jīn kēzhǎng qù dǎyìn zīliào le",
        "weight": 1
    },
    {
        "hanzi": "快",
        "pinyin": "Kuài",
        "meaning": "거의",
        "a": "快九点了，什么时候下班？",
        "aP": "Kuài jiǔ diǎn le, shénme shíhou xiàbān?",
        "weight": 1
    },
    {
        "hanzi": "新职员",
        "pinyin": "xīn zhíyuán",
        "meaning": "신입사원",
        "a": "听说你们部门来了一个新职员，他怎么样？",
        "aP": "Tīngshuō nǐmen bùmén lái le yí ge xīn zhíyuán, tā zěnmeyàng?",
        "weight": 1
    },
    {
        "hanzi": "互相帮助",
        "pinyin": "hùxiāng bāngzhù.",
        "meaning": "서로 돕는다.",
        "a": "我们工作的时候互相帮助。",
        "aP": "Wǒmen gōngzuò de shíhou hùxiāng bāngzhù.",
        "weight": 1
    },
    {
        "hanzi": "突然死机",
        "pinyin": "tūrán sǐjī",
        "meaning": "갑작스러운 시스템 충돌",
        "a": "我的电脑突然死机了，麻烦你帮我看一下。",
        "aP": "Wǒ de diànnǎo tūrán sǐjī le, máfan nǐ bāng wǒ kàn yíxià.",
        "weight": 1
    },
    {
        "hanzi": "售后服务中心",
        "pinyin": "shòuhòu fúwù zhōngxīn",
        "meaning": "AS 센터",
        "a": "好的，没问题。不过我不会修，给售后服务中心打电话吧。",
        "aP": "Hǎo de, méi wèntí. Búguò wǒ bú huì xiū, gěi shòuhòu fúwù zhōngxīn dǎ diànhuà ba.",
        "weight": 1
    },
    {
        "hanzi": "心情",
        "pinyin": "xīnqíng",
        "meaning": "기분, 심정",
        "a": "今天第一天上班，心情怎么样？",
        "aP": "Jīntiān dì yī tiān shàngbān, xīnqíng zěnmeyàng?",
        "weight": 1
    },
    {
        "hanzi": "部门",
        "pinyin": "bùmén",
        "meaning": "부서",
        "a": "我们部门的同事们都很热情",
        "aP": "Wǒmen bùmén de tóngshìmen dōu hěn rèqíng",
        "weight": 1
    },
    {
        "hanzi": "热情",
        "pinyin": "rèqíng",
        "meaning": "열광하다.",
        "a": "我们部门的同事们都很热情",
        "aP": "Wǒmen bùmén de tóngshìmen dōu hěn rèqíng",
        "weight": 1
    },
    {
        "hanzi": "满意",
        "pinyin": "mǎnyì.",
        "meaning": "만족하다.",
        "a": "气氛也很好，我很满意。",
        "aP": "qìfēn yě hěn hǎo, wǒ hěn mǎnyì.",
        "weight": 1
    }
];
