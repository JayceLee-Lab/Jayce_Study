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
    }
];
