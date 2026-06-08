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
        "meaning": "시험삼아 해보다. (입어보다.)",
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
        "hanzi": "资料",
        "pinyin": "zīliào",
        "meaning": "자료, 재료",
        "a": "你帮我写资料可以吗？",
        "aP": "Nǐ bāng wǒ xiě zīliào kěyǐ ma?",
        "weight": 1
    },
    {
        "hanzi": "新产品",
        "pinyin": "xīn chǎnpǐn",
        "meaning": "신제품",
        "a": "您能寄给我新产品的资料吗？",
        "aP": "Nín néng jì gěi wǒ xīn chǎnpǐn de zīliào ma?",
        "weight": 1
    }
];
