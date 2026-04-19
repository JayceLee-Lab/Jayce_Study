// TSC 제 3부분 연습용 데이터베이스
const PART3_2_DATA = [
    {
        "q": "您想买什么?",
        "qP": "Nín xiǎng mǎi shénme?",
        "a": "今天是我爱인의生日, 我爱人喜欢红色的, 您给我推荐一下。",
        "aP": "Jīntiān shì wǒ àiren de shēngrì, wǒ àiren xǐhuān hóngsè de, nín gěi wǒ tuījiàn yíxià.",
        "hint": "꽃집(花店)에서 판매원(收货员)이 묻는 상황입니다.",
        "keywords": "生日 (shēngrì), 推荐 (tuījiàn)",
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
        "q": "这是今年新出的款式, 您试试吧。",
        "qP": "Zhè shì jīnnián xīn chū de kuǎnshì, nín shìshì ba.",
        "a": "是吗? 颜色、款式我都喜欢。请给我中号의。",
        "aP": "Shì ma? Yánsè, kuǎnshì wǒ dōu xǐhuān. Qǐng gěi wǒ zhōnghào de.",
        "hint": "의류 매장(服装店)에서 신상을 입어보는 상황입니다.",
        "keywords": "款式 (kuǎnshì), 中号 (zhōnghào)",
        "weight": 1
    },
    {
        "q": "对不起, 这种款式小号的已经卖완了。",
        "qP": "Duìbuqǐ, zhèzhǒng kuǎnshì xiǎohào de yǐjīng màiwán le.",
        "a": "是吗? 太可惜了, 那我去别的地方看看。",
        "aP": "Shì ma? Tài kěxī le, nà wǒ qù bié de dìfang kànkan.",
        "hint": "신발 가게(鞋店)에서 작은 사이즈가 품절된 상황입니다.",
        "keywords": "小号 (xiǎohào), 卖完 (màiwán)",
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
        "q": "这张桌子送到哪儿?",
        "qP": "Zhè zhāng zhuōzi sòngdào nǎr?",
        "a": "送到这里吧。这是我家의 地址。",
        "aP": "Sòngdào zhèlǐ ba. Zhè shì wǒ jiā de dìzhǐ.",
        "hint": "탁자를 배달할 주소를 알려주는 상황입니다.",
        "keywords": "桌子 (zhuōzi), 地址 (dìzhǐ)",
        "weight": 1
    },
    {
        "q": "你的手表很适合你。",
        "qP": "Nǐ de shǒubiǎo hěn shìhé nǐ.",
        "a": "谢谢! 这是我爱인给我买的生日礼物, 我很喜欢。",
        "aP": "Xièxie! Zhè shì wǒ àiren gěi wǒ mǎi de shēngrì lǐwù, wǒ hěn xǐhuān.",
        "hint": "두 친구가 서로의 물건에 대해 이야기하는 상황입니다.",
        "keywords": "适合 (shìhé), 礼物 (lǐwù)",
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
        "q": "您新买包了, 真漂亮!",
        "qP": "Nín xīn mǎi bāo le, zhēn piàoliang!",
        "a": "谢谢, 昨天去百货商店买의。百货商店的东西正在打折。你也去看看吧。",
        "aP": "Xièxie, zuótiān qù bǎihuò shāngdiàn mǎi de. Bǎihuò shāngdiàn de dōngxi zhèngzài dǎzhé. Nǐ yě qù kànkan ba.",
        "hint": "친구와 가방과 백화점 할인 정보에 대해 이야기하는 상황입니다.",
        "keywords": "百货商店 (bǎihuò shāngdiàn), 打折 (dǎzhé)",
        "weight": 1
    },
    {
        "q": "我们商店的帽子正在打折。",
        "qP": "Wǒmen shāngdiàn de màozi zhèngzài dǎzhé.",
        "a": "我想买一顶棒球帽, 有白색의吗? 可以试试吗?",
        "aP": "Wǒ xiǎng mǎi yì dǐng bàngqiúmào, yǒu báisè de ma? Kěyǐ shìshì ma?",
        "hint": "입구에서 손님을 부르는 판매원에게 특정 모자를 찾는 상황입니다.",
        "keywords": "棒球帽 (bàngqiúmào), 试试 (shìshì)",
        "weight": 1
    },
    {
        "q": "这个戒指真好看, 你觉得呢?",
        "qP": "Zhège jièzhi zhēn hǎokàn, nǐ juéde ne?",
        "a": "我也觉得很漂亮, 你喜欢的话我给你买。你要看看吗?",
        "aP": "Wǒ yě juéde hěn piàoliang, nǐ xǐhuān dehuà wǒ gěi nǐ mǎi. Nǐ yào kànkan ma?",
        "hint": "백화점에서 남녀가 반지를 구경하며 대화하는 상황입니다.",
        "keywords": "戒指 (jièzhi), 漂亮 (piàoliang)",
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
    }
];