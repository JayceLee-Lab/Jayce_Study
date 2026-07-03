const PART2_DATA = [
    {
        "q": "他手里拿着什么？",
        "qP": "Tā shǒulǐ názhe shénme?",
        "a": "他手里拿着两个苹果。",
        "aP": "Tā shǒulǐ názhe liǎng gè píngguǒ.",
        "hint": "손에 쥐고 있는 상태(~着) 표현, 拿着 (názhe, 갖다)",
        "keywords": "사과 두 개 (两个苹果)",
        "weight": 1,
        "image": "part2_picture/p2_001.svg"
    },
    {
        "q": "狗在哪儿？",
        "qP": "Gǒu zài nǎr?",
        "a": "狗在床上。",
        "aP": "Gǒu zài chuángshàng.",
        "hint": "장소(~在)와 위치 표현",
        "keywords": "침대 위 (床上)",
        "weight": 1,
        "image": "part2_picture/p2_002.svg"
    },
    {
        "q": "一本词典多少钱？",
        "qP": "Yì běn cídiǎn duōshǎo qián?",
        "a": "一本词典五十九块钱。",
        "aP": "Yì běn cídiǎn wǔshíjiǔ kuài qián.",
        "hint": "가격 단위 '块' 사용",
        "keywords": "59위안 (五十九块)",
        "weight": 1,
        "image": "part2_picture/p2_003.svg"
    },
    {
        "q": "他们在散步吗？",
        "qP": "Tāmen zài sànbù ma?",
        "a": "不，他们在骑自行车。",
        "aP": "Bù, tāmen zài qí zìxíngchē.",
        "hint": "아니요(不)로 시작하는 부정 답변",
        "keywords": "자전거 타기 (骑自行车)",
        "weight": 1,
        "image": "part2_picture/p2_004.svg"
    },
    {
        "q": "女人有几个孩子？",
        "qP": "Nǚrén yǒu jǐ gè háizi?",
        "a": "女人有两个孩子。",
        "aP": "Nǚrén yǒu liǎng gè háizi.",
        "hint": "숫자 2의 양사 앞 변형 '两'",
        "keywords": "아이 두 명 (两个孩子)",
        "weight": 1,
        "image": "part2_picture/p2_005.svg"
    },
    {
        "q": "这儿有几个人？",
        "qP": "Zhèr yǒu jǐ gè rén?",
        "a": "这儿有三个人。",
        "aP": "Zhèr yǒu sān gè rén.",
        "hint": "사람 수 세기 (양사 个)",
        "keywords": "세 명 (三个人)",
        "weight": 1,
        "image": "part2_picture/p2_006.svg"
    },
    {
        "q": "他在做什么？",
        "qP": "Tā zài zuò shénme?",
        "a": "他在看报纸。",
        "aP": "Tā zài kàn bàozhǐ.",
        "hint": "진행형 '~하고 있다' (在)",
        "keywords": "신문 보기 (看报纸)",
        "weight": 1,
        "image": "part2_picture/p2_007.svg"
    },
    {
        "q": "现在几点？",
        "qP": "Xiànzài jǐ diǎn?",
        "a": "现在十点十分。",
        "aP": "Xiànzài shí diǎn shí fēn.",
        "hint": "시(点)와 분(分) 표현",
        "keywords": "10시 10분 (十点十分)",
        "weight": 1,
        "image": "part2_picture/p2_008.svg"
    },
    {
        "q": "你想买什么？",
        "qP": "Nǐ xiǎng mǎi shénme?",
        "a": "我想买一些苹果。",
        "aP": "Wǒ xiǎng mǎi yìxiē píngguǒ.",
        "hint": "희망(~想) 표현",
        "keywords": "사과 사기 (买苹果)",
        "weight": 1,
        "image": "part2_picture/p2_009.svg"
    },
    {
        "q": "今天天气怎么样？",
        "qP": "Jīntiān tiānqì zěnmeyàng?",
        "a": "今天天气很好，是晴天。",
        "aP": "Jīntiān tiānqì hěn hǎo, shì qíngtiān.",
        "hint": "날씨 상태 묘사",
        "keywords": "맑음 (晴天)",
        "weight": 1,
        "image": "part2_picture/p2_010.svg"
    },
    {
        "q": "那个人是谁？",
        "qP": "Nàge rén shì shéi?",
        "a": "那个人是我哥哥。",
        "aP": "Nàge rén shì wǒ gēge.",
        "hint": "사람 신분 답변",
        "keywords": "오빠/형 (哥哥)",
        "weight": 1,
        "image": "part2_picture/p2_011.svg"
    },
    {
        "q": "你什么时候下班？",
        "qP": "Nǐ shénme shíhou xiàbān?",
        "a": "我下午六点下班。",
        "aP": "Wǒ xiàwǔ liù diǎn xiàbān.",
        "hint": "시간 명사 위치 주의",
        "keywords": "6시 퇴근 (六点下班)",
        "weight": 1,
        "image": "part2_picture/p2_012.svg"
    },
    {
        "q": "你会说汉语吗？",
        "qP": "Nǐ huì shuō Hànyǔ ma?",
        "a": "我会说一点儿汉语。",
        "aP": "Wǒ huì shuō yìdiǎnr Hànyǔ.",
        "hint": "능력(~会) 표현",
        "keywords": "조금 가능 (一点儿, yìdiǎnr)",
        "weight": 1,
        "image": "part2_picture/p2_013.svg"
    },
    {
        "q": "这双鞋多少钱？",
        "qP": "Zhè shuāng xié duōshao qián?",
        "a": "这双鞋两百块钱。",
        "aP": "Zhè shuāng xié liǎngbǎi kuài qián.",
        "hint": "가격 묻고 답하기",
        "keywords": "200위안 (两百块)",
        "weight": 1,
        "image": "part2_picture/p2_014.svg"
    },
    {
        "q": "你去哪儿？",
        "qP": "Nǐ qù nǎr?",
        "a": "我去超市买东西。",
        "aP": "Wǒ qù chāoshì mǎi dōngxi.",
        "hint": "목적지 이동 표현",
        "keywords": "마트 (超市)",
        "weight": 1,
        "image": "part2_picture/p2_015.svg"
    },
    {
        "q": "杯子在那儿？",
        "qP": "Bēizi zài nàr?",
        "a": "杯子在桌子上面。",
        "aP": "Bēizi zài zhuōzi shàngmiàn.",
        "hint": "사물의 위치 표현",
        "keywords": "테이블 위 (桌子上面)",
        "weight": 1,
        "image": "part2_picture/p2_016.svg"
    },
    {
        "q": "你哪儿不舒服？",
        "qP": "Nǐ nǎr bù shūfu?",
        "a": "我嗓子疼。",
        "aP": "Wǒ sǎngzi téng.",
        "hint": "신체 통증 부위 말하기",
        "keywords": "목이 아픔 (嗓子疼)",
        "weight": 1,
        "image": "part2_picture/p2_017.svg"
    },
    {
        "q": "她去过中国吗？",
        "qP": "Tā qùguo Zhōngguó ma?",
        "a": "她没去过中国。",
        "aP": "Tā méi qùguo Zhōngguó.",
        "hint": "과거 경험(~过)의 부정",
        "keywords": "가본 적 없음 (没去过)",
        "weight": 1,
        "image": "part2_picture/p2_018.svg"
    },
    {
        "q": "他在哪儿工作？",
        "qP": "Tā zài nǎr gōngzuò?",
        "a": "他在银行工作。",
        "aP": "Tā zài yínháng gōngzuò.",
        "hint": "직장 위치 설명",
        "keywords": "은행 (银行)",
        "weight": 1,
        "image": "part2_picture/p2_019.svg"
    },
    {
        "q": "你想喝点儿什么？",
        "qP": "Nǐ xiǎng hē diǎnr shénme?",
        "a": "我想喝咖啡。",
        "aP": "Wǒ xiǎng hē kāfēi.",
        "hint": "음료 제안에 대한 답변",
        "keywords": "커피 (咖啡)",
        "weight": 1,
        "image": "part2_picture/p2_020.svg"
    },
    {
        "q": "你怎么了？",
        "qP": "Nǐ zěnme le?",
        "a": "我感冒了。",
        "aP": "Wǒ gǎnmào le.",
        "hint": "상태의 변화(~了) 표현",
        "keywords": "감기 걸림 (感冒了)",
        "weight": 1,
        "image": "part2_picture/p2_021.svg"
    },
    {
        "q": "这儿能不能抽烟？",
        "qP": "Zhèr néng bu néng chōuyān?",
        "a": "这儿不能抽烟。",
        "aP": "Zhèr bù néng chōuyān.",
        "hint": "금지 및 허가 답변",
        "keywords": "흡연 금지 (不能抽烟)",
        "weight": 1,
        "image": "part2_picture/p2_022.svg"
    },
    {
        "q": "你要买什么样的衣服？",
        "qP": "Nǐ yào mǎi shénmeyàng de yīfu?",
        "a": "我要买黑色的衣服。",
        "aP": "Wǒ yào mǎi hēisè de yīfu.",
        "hint": "색상 등 특징 묘사",
        "keywords": "검은색 (黑色)",
        "weight": 1,
        "image": "part2_picture/p2_023.svg"
    },
    {
        "q": "谁比男的高？",
        "qP": "Shéi bǐ nán de gāo?",
        "a": "女的比男的高。",
        "aP": "Nǚ de bǐ nán de gāo.",
        "hint": "비교문 (比) 사용",
        "keywords": "여자 (女的)",
        "weight": 1,
        "image": "part2_picture/p2_024.svg"
    },
    {
        "q": "这儿离车站远吗？",
        "qP": "Zhèr lí chēzhàn yuǎn ma?",
        "a": "这儿离车站不远。",
        "aP": "Zhèr lí chēzhàn bù yuǎn.",
        "hint": "거리(~离) 표현",
        "keywords": "멀지 않음 (不远)",
        "weight": 1,
        "image": "part2_picture/p2_025.svg"
    },
    {
        "q": "你觉得这家饭店怎么样？",
        "qP": "Nǐ juéde zhè jiā fàndiàn zěnmeyàng?",
        "a": "我觉得这家饭店很好。",
        "aP": "Wǒ juéde zhè jiā fàndiàn hěn hǎo.",
        "hint": "의견 말하기 (我觉得)",
        "keywords": "매우 좋음 (很好), 饭店 (fàndiàn, 식당)",
        "weight": 1,
        "image": "part2_picture/p2_026.svg"
    },
    {
        "q": "外面天气怎么样？",
        "qP": "Wàimiàn tiānqì zěnmeyàng?",
        "a": "外面在下雨。",
        "aP": "Wàimiàn zài xiàyǔ.",
        "hint": "현재 날씨 묘사",
        "keywords": "비 오는 중 (下雨)",
        "weight": 1,
        "image": "part2_picture/p2_027.svg"
    },
    {
        "q": "你家离公司多远？",
        "qP": "Nǐ jiā lí gōngsī duō yuǎn?",
        "a": "我家离公司很近。",
        "aP": "Wǒ jiā lí gōngsī hěn jìn.",
        "hint": "거리의 정도 표현",
        "keywords": "가까움 (近)",
        "weight": 1,
        "image": "part2_picture/p2_028.svg"
    },
    {
        "q": "你什么时候给妈妈打电话？",
        "qP": "Nǐ shénme shíhou gěi māma dǎ diànhuà?",
        "a": "我晚上给妈妈打电话。",
        "aP": "Wǒ wǎnshang gěi māma dǎ diànhuà.",
        "hint": "대상(~给)과 동작 표현",
        "keywords": "저녁 (晚上)",
        "weight": 1,
        "image": "part2_picture/p2_029.svg"
    },
    {
        "q": "你昨天去哪儿了？",
        "qP": "Nǐ zuótiān qù nǎr le?",
        "a": "我昨天去书店了。",
        "aP": "Wǒ zuótiān qù shūdiàn le.",
        "hint": "과거 행적 답변",
        "keywords": "서점 (书店)",
        "weight": 1,
        "image": "part2_picture/p2_030.svg"
    },
    {
        "q": "你要去几楼？",
        "qP": "Nǐ yào qù jǐ lóu?",
        "a": "我要去五楼。",
        "aP": "Wǒ yào qù wǔ lóu.",
        "hint": "층수 표현 (楼)",
        "keywords": "5층 (五楼)",
        "weight": 1,
        "image": "part2_picture/p2_031.svg"
    },
    {
        "q": "那个饭店在那儿？",
        "qP": "Nàge fàndiàn zài nàr?",
        "a": "那个饭店在电影院旁边。",
        "aP": "Nàge fàndiàn zài diànyǐngyuàn pángbiān.",
        "hint": "상대적 위치 표현",
        "keywords": "영화관 옆 (옆)",
        "weight": 1,
        "image": "part2_picture/p2_032.svg"
    },
    {
        "q": "她在做什么呢？",
        "qP": "Tā zài zuò shénme ne?",
        "a": "她在做菜呢。",
        "aP": "Tā zài zuò cài ne.",
        "hint": "지속적 진행 표현",
        "keywords": "요리 중 (做菜)",
        "weight": 1,
        "image": "part2_picture/p2_033.svg"
    },
    {
        "q": "你想吃什么？",
        "qP": "Nǐ xiǎng chī shénme?",
        "a": "我想吃面条。",
        "aP": "Wǒ xiǎng chī miàntiáo.",
        "hint": "음식 메뉴 답변",
        "keywords": "국수 (面条)",
        "weight": 1,
        "image": "part2_picture/p2_034.svg"
    },
    {
        "q": "这儿离超市远吗？",
        "qP": "Zhèr lí chāoshì yuǎn ma?",
        "a": "这儿离超市很远。",
        "aP": "Zhèr lí chāoshì hěn yuǎn.",
        "hint": "거리 묘사",
        "keywords": "매우 멂 (很远)",
        "weight": 1,
        "image": "part2_picture/p2_035.svg"
    },
    {
        "q": "今天几号？",
        "qP": "Jīntiān jǐ hào?",
        "a": "今天十月二十五号。",
        "aP": "Jīntiān shíyuè èrshíwǔ hào.",
        "hint": "날짜 표현 (月, 号)",
        "keywords": "10월 25일",
        "weight": 1,
        "image": "part2_picture/p2_036.svg"
    },
    {
        "q": "他怎么去公司？",
        "qP": "Tā zěnme qù gōngsī?",
        "a": "他坐地铁去公司。",
        "aP": "Tā zuò dìtiě qù gōngsī.",
        "hint": "이동 수단(坐) 표현",
        "keywords": "지하철 (地铁)",
        "weight": 1,
        "image": "part2_picture/p2_037.svg"
    },
    {
        "q": "哪个苹果比较大？",
        "qP": "Nǎge píngguǒ bǐjiào dà?",
        "a": "左边的苹果比较大。",
        "aP": "Zuǒbiān de píngguǒ bǐjiào dà.",
        "hint": "비교 및 방위사 활용",
        "keywords": "왼쪽 (左边)",
        "weight": 1,
        "image": "part2_picture/p2_038.svg"
    },
    {
        "q": "你要去哪儿旅行？",
        "qP": "Nǐ yào qù nǎr lǚxíng?",
        "a": "我要去中国旅行。",
        "aP": "Wǒ yào qù Zhōngguó lǚxíng.",
        "hint": "여행지 답변",
        "keywords": "중국 (中国)",
        "weight": 1,
        "image": "part2_picture/p2_039.svg"
    },
    {
        "q": "他在家做什么？",
        "qP": "Tā zàijiā zuò shénme?",
        "a": "他在家休息。",
        "aP": "Tā zàijiā xiūxi.",
        "hint": "활동 내용 답변",
        "keywords": "휴식 (休息)",
        "weight": 1,
        "image": "part2_picture/p2_040.svg"
    },
    {
        "q": "桌子上有几本书？",
        "qP": "Zhuōzi shàng yǒu jǐ běn shū?",
        "a": "桌子上有五本书。",
        "aP": "Zhuōzi shàng yǒu wǔ běn shū.",
        "hint": "권수 양사 '本' 사용",
        "keywords": "다섯 권 (五本)",
        "weight": 1,
        "image": "part2_picture/p2_041.svg"
    },
    {
        "q": "他在哪儿喝咖啡？",
        "qP": "Tā zài nǎr hē kāfēi?",
        "a": "他在办公室喝咖啡。",
        "aP": "Tā zài bàngōngshì hē kāfēi.",
        "hint": "특정 장소 강조",
        "keywords": "사무실 (办公室)",
        "weight": 1,
        "image": "part2_picture/p2_042.svg"
    },
    {
        "q": "外面有没有人？",
        "qP": "Wàimiàn yǒu méiyǒu rén?",
        "a": "外面没有人。",
        "aP": "Wàimiàn méiyǒu rén.",
        "hint": "존재 여부 답변",
        "keywords": "없음 (没有)",
        "weight": 1,
        "image": "part2_picture/p2_043.svg"
    },
    {
        "q": "这儿离饭店远不远？",
        "qP": "Zhèr lí fàndiàn yuǎn bù yuǎn?",
        "a": "这儿离饭店很近。",
        "aP": "Zhèr lí fàndiàn hěn jìn.",
        "hint": "거리 정도 답변",
        "keywords": "가까움 (很近)",
        "weight": 1,
        "image": "part2_picture/p2_044.svg"
    },
    {
        "q": "他现在在做什么？",
        "qP": "Tā xiànzài zài zuò shénme?",
        "a": "他现在在打篮球。",
        "aP": "Tā xiànzài zài dǎ lánqiú.",
        "hint": "운동 종목 답변",
        "keywords": "농구 (打篮球)",
        "weight": 1,
        "image": "part2_picture/p2_045.svg"
    },
    {
        "q": "你要买哪件衣服？",
        "qP": "Nǐ yào mǎi nǎ jiàn yīfu?",
        "a": "我要买那件白色的衣服。",
        "aP": "Wǒ yào mǎi nà jiàn báisè de yīfu.",
        "hint": "선택 및 특징 표현",
        "keywords": "흰색 (白色)",
        "weight": 1,
        "image": "part2_picture/p2_046.svg"
    },
    {
        "q": "现在天气怎么样？",
        "qP": "Xiànzài tiānqì zěnmeyàng?",
        "a": "现在下雪了。",
        "aP": "Xiànzài xiàxuě le.",
        "hint": "기상 변화 표현",
        "keywords": "눈 옴 (下雪)",
        "weight": 1,
        "image": "part2_picture/p2_047.svg"
    },
    {
        "q": "你在等谁？",
        "qP": "Nǐ zài děng shéi?",
        "a": "我在等朋友。",
        "aP": "Wǒ zài děng péngyǒu.",
        "hint": "대상 답변",
        "keywords": "친구 (朋友)",
        "weight": 1,
        "image": "part2_picture/p2_048.svg"
    },
    {
        "q": "谁比姐姐高？",
        "qP": "Shéi bǐ jiějie gāo?",
        "a": "哥哥比姐姐高。",
        "aP": "Gēge bǐ jiějie gāo.",
        "hint": "비교 대상 설정",
        "keywords": "오빠 (哥哥)",
        "weight": 1,
        "image": "part2_picture/p2_049.svg"
    },
    {
        "q": "你想买几斤苹果？",
        "qP": "Nǐ xiǎng mǎi jǐ jīn píngguǒ?",
        "a": "我想买三斤苹果。",
        "aP": "Wǒ xiǎng mǎi sān jīn píngguǒ.",
        "hint": "무게 양사 '斤' 사용",
        "keywords": "3근 (三斤)",
        "weight": 1,
        "image": "part2_picture/p2_050.svg"
    },
    {
        "q": "他在做什么？",
        "qP": "Tā zài zuò shénme?",
        "a": "他在玩电脑游戏。",
        "aP": "Tā zài wán diànnǎo yóuxì.",
        "hint": "활동 구체화",
        "keywords": "게임 (玩游戏)",
        "weight": 1,
        "image": "part2_picture/p2_051.svg"
    },
    {
        "q": "这儿离机场多远？",
        "qP": "Zhèr lí jīchǎng duō yuǎn?",
        "a": "这儿离机场不远。",
        "aP": "Zhèr lí jīchǎng bù yuǎn.",
        "hint": "거리감 답변",
        "keywords": "멀지 않음 (不远)",
        "weight": 1,
        "image": "part2_picture/p2_052.svg"
    },
    {
        "q": "你觉得那个电影怎么样？",
        "qP": "Nǐ juéde nàge diànyǐng zěnmeyàng?",
        "a": "我觉得那个电影很有趣。",
        "aP": "Wǒ juéde nàge diànyǐng hěn yǒuqù.",
        "hint": "감상 표현",
        "keywords": "재미있음 (有趣)",
        "weight": 1,
        "image": "part2_picture/p2_053.svg"
    },
    {
        "q": "他在哪儿看书？",
        "qP": "Tā zài nǎr kàn shū?",
        "a": "他在图书馆看书。",
        "aP": "Tā zài túshūguǎn kàn shū.",
        "hint": "장소 답변",
        "keywords": "도서관 (图书馆)",
        "weight": 1,
        "image": "part2_picture/p2_054.svg"
    },
    {
        "q": "你要去哪儿买东西？",
        "qP": "Nǐ yào qù nǎr mǎi dōngxi?",
        "a": "我要去商场买东西。",
        "aP": "Wǒ yào qù shāngchǎng mǎi dōngxi.",
        "hint": "장소 답변",
        "keywords": "쇼핑몰 (商场)",
        "weight": 1,
        "image": "part2_picture/p2_055.svg"
    },
    {
        "q": "现在几点几分？",
        "qP": "Xiànzài jǐ diǎn jǐ fēn?",
        "a": "现在三点三十分。",
        "aP": "Xiànzài sān diǎn sān shí fēn.",
        "hint": "정확한 시각 답변",
        "keywords": "3시 30분",
        "weight": 1,
        "image": "part2_picture/p2_056.svg"
    },
    {
        "q": "你什么时候去超市？",
        "qP": "Nǐ shénme shíhou qù chāoshì?",
        "a": "我明天下午去超市。",
        "aP": "Wǒ míngtiān xiàwǔ qù chāoshì.",
        "hint": "미래 시간 부사 사용",
        "keywords": "내일 오후 (明天下午)",
        "weight": 1,
        "image": "part2_picture/p2_057.svg"
    },
    {
        "q": "他在和谁说话？",
        "qP": "Tā zài hé shéi shuōhuà?",
        "a": "他在和老师说话。",
        "aP": "Tā zài hé lǎoshī shuōhuà.",
        "hint": "대화 상대 표현",
        "keywords": "선생님 (老师)",
        "weight": 1,
        "image": "part2_picture/p2_058.svg"
    },
    {
        "q": "哪个苹果比较红？",
        "qP": "Nǎge píngguǒ bǐjiào hóng?",
        "a": "右边的苹果比较红。",
        "aP": "Yòu biān de píngguǒ bǐjiào hóng.",
        "hint": "색상 비교",
        "keywords": "오른쪽 (右边)",
        "weight": 1,
        "image": "part2_picture/p2_059.svg"
    },
    {
        "q": "你打算什么时候去中国？",
        "qP": "Nǐ dǎsuàn shénme shíhou qù Zhōngguó?",
        "a": "我打算明年三月去中国。",
        "aP": "Wǒ dǎsuàn míngnián sān yuè qù Zhōngguó.",
        "hint": "계획된 일정 답변",
        "keywords": "내년 3월 (明年三月)",
        "weight": 1,
        "image": "part2_picture/p2_060.svg"
    },
    {
        "q": "他在哪儿游泳？",
        "qP": "Tā zài nǎr yóuyǒng?",
        "a": "他在游泳池游泳。",
        "aP": "Tā zài yóuyǒngchí yóuyǒng.",
        "hint": "장소 명사 활용",
        "keywords": "수영장 (游泳池)",
        "weight": 1,
        "image": "part2_picture/p2_061.svg"
    },
    {
        "q": "你在做什么呢？",
        "qP": "Nǐ zài zuò shénme ne?",
        "a": "我在洗衣服呢。",
        "aP": "Wǒ zài xǐ yīfu ne.",
        "hint": "현재 동작 답변",
        "keywords": "빨래 (洗衣服)",
        "weight": 1,
        "image": "part2_picture/p2_062.svg"
    },
    {
        "q": "桌子上有多少个苹果？",
        "qP": "Zhuōzi shàng yǒu duōshao gè píngguǒ?",
        "a": "桌子上有六个苹果。",
        "aP": "Zhuōzi shàng yǒu liù gè píngguǒ.",
        "hint": "개수 답변",
        "keywords": "여섯 개 (六个)",
        "weight": 1,
        "image": "part2_picture/p2_063.svg"
    },
    {
        "q": "外面冷不冷？",
        "qP": "Wàimiàn lěng bù lěng?",
        "a": "外面很冷。",
        "aP": "Wàimiàn hěn lěng.",
        "hint": "기온 답변",
        "keywords": "매우 추움 (很冷)",
        "weight": 1,
        "image": "part2_picture/p2_064.svg"
    },
    {
        "q": "你在找什么？",
        "qP": "Nǐ zài zhǎo shénme?",
        "a": "我在找手机。",
        "aP": "Wǒ zài zhǎo shǒujī.",
        "hint": "찾는 대상 답변",
        "keywords": "휴대폰 (手机)",
        "weight": 1,
        "image": "part2_picture/p2_065.svg"
    },
    {
        "q": "今天星期几？",
        "qP": "Jīntiān xīngqījǐ?",
        "a": "今天星期五。",
        "aP": "Jīntiān xīngqīwǔ.",
        "hint": "요일 답변",
        "keywords": "금요일 (星期五)",
        "weight": 1,
        "image": "part2_picture/p2_066.svg"
    },
    {
        "q": "你想买哪双鞋？",
        "qP": "Nǐ xiǎng mǎi nǎ shuāng xié?",
        "a": "我想买那双黑色的鞋。",
        "aP": "Wǒ xiǎng mǎi nà shuāng hēisè de xié.",
        "hint": "양사 '双'과 특징 표현",
        "keywords": "검은 신발 (黑色鞋)",
        "weight": 1,
        "image": "part2_picture/p2_067.svg"
    },
    {
        "q": "他在家看什么？",
        "qP": "Tā zàijiā kàn shénme?",
        "a": "他在家看电视。",
        "aP": "Tā zàijiā kàn diànshì.",
        "hint": "활동 답변",
        "keywords": "TV 보기 (看电视)",
        "weight": 1,
        "image": "part2_picture/p2_068.svg"
    },
    {
        "q": "这儿离公司近不近？",
        "qP": "Zhèr lí gōngsī jìn bu jìn?",
        "a": "这儿离公司很远。",
        "aP": "Zhèr lí gōngsī hěn yuǎn.",
        "hint": "거리 답변",
        "keywords": "매우 멂 (很远)",
        "weight": 1,
        "image": "part2_picture/p2_069.svg"
    },
    {
        "q": "你要买几瓶水？",
        "qP": "Nǐ yào mǎi jǐ píng shuǐ?",
        "a": "我要买两瓶水。",
        "aP": "Wǒ yào mǎi liǎng píng shuǐ.",
        "hint": "병 양사 '瓶' 사용",
        "keywords": "두 병 (两瓶)",
        "weight": 1,
        "image": "part2_picture/p2_070.svg"
    },
    {
        "q": "谁比弟弟胖？",
        "qP": "Shéi bǐ dìdi pàng?",
        "a": "哥哥比弟弟胖。",
        "aP": "Gēge bǐ dìdi pàng.",
        "hint": "비교 답변",
        "keywords": "형/오빠 (哥哥)",
        "weight": 1,
        "image": "part2_picture/p2_071.svg"
    },
    {
        "q": "他在做什么？",
        "qP": "Tā zài zuò shénme?",
        "a": "他在听音乐。",
        "aP": "Tā zài tīng yīnyuè.",
        "hint": "활동 답변",
        "keywords": "음악 감상 (听音乐)",
        "weight": 1,
        "image": "part2_picture/p2_072.svg"
    },
    {
        "q": "你想吃什么样子的面条？",
        "qP": "Nǐ xiǎng chī shénmeyàngzi de miàntiáo?",
        "a": "我想吃辣的面条。",
        "aP": "Wǒ xiǎng chī là de miàntiáo.",
        "hint": "기호 표현",
        "keywords": "매운 맛 (辣)",
        "weight": 1,
        "image": "part2_picture/p2_073.svg"
    },
    {
        "q": "你在等公交车吗？",
        "qP": "Nǐ zài děng gōngjiāochē ma?",
        "a": "是的，我在等公交车。",
        "aP": "Shì de, wǒ zài děng gōngjiāochē.",
        "hint": "긍정 답변",
        "keywords": "버스 대기 (等公交车)",
        "weight": 1,
        "image": "part2_picture/p2_074.svg"
    },
    {
        "q": "他在哪儿喝茶？",
        "qP": "Tā zài nǎr hē chá?",
        "a": "他在客厅喝茶。",
        "aP": "Tā zài kètīng hē chá.",
        "hint": "장소 답변",
        "keywords": "거실 (客厅)",
        "weight": 1,
        "image": "part2_picture/p2_075.svg"
    },
    {
        "q": "你要买哪件衣服？",
        "qP": "Nǐ yào mǎi nǎ jiàn yīfu?",
        "a": "我要买那件红色的衣服。",
        "aP": "Wǒ yào mǎi nà jiàn hóngsè de yīfu.",
        "hint": "색상 답변",
        "keywords": "빨간색 (红色)",
        "weight": 1,
        "image": "part2_picture/p2_076.svg"
    },
    {
        "q": "他在家做什么？",
        "qP": "Tā zàijiā zuò shénme?",
        "a": "他在家打扫卫生。",
        "aP": "Tā zàijiā dǎsǎo wèishēng.",
        "hint": "활동 답변",
        "keywords": "청소 (打扫)",
        "weight": 1,
        "image": "part2_picture/p2_077.svg"
    },
    {
        "q": "你想喝点什么饮料？",
        "qP": "Nǐ xiǎng hē diǎn shénme yǐnliào?",
        "a": "我想喝果汁。",
        "aP": "Wǒ xiǎng hē guǒzhī.",
        "hint": "음료 답변",
        "keywords": "과일주스 (果汁)",
        "weight": 1,
        "image": "part2_picture/p2_078.svg"
    },
    {
        "q": "你在找谁？",
        "qP": "Nǐ zài zhǎo shéi?",
        "a": "我在找王老师。",
        "aP": "Wǒ zài zhǎo Wáng lǎoshī.",
        "hint": "대상 답변",
        "keywords": "왕 선생님",
        "weight": 1,
        "image": "part2_picture/p2_079.svg"
    },
    {
        "q": "他怎么去学校？",
        "qP": "Tā zěnme qù xuéxiào?",
        "a": "他骑自行车去学校。",
        "aP": "Tā qí zìxíngchē qù xuéxiào.",
        "hint": "수단 답변",
        "keywords": "자전거 (骑自行车)",
        "weight": 1,
        "image": "part2_picture/p2_080.svg"
    },
    {
        "q": "谁比你高？",
        "qP": "Shéi bǐ nǐ gāo?",
        "a": "我哥哥比我高。",
        "aP": "Wǒ gēge bǐ wǒ gāo.",
        "hint": "비교 답변",
        "keywords": "형/오빠 (哥哥)",
        "weight": 1,
        "image": "part2_picture/p2_081.svg"
    },
    {
        "q": "外面有没有风？",
        "qP": "Wàimiàn yǒu méiyǒu fēng?",
        "a": "外面风很大。",
        "aP": "Wàimiàn fēng hěn dà.",
        "hint": "바람 상태 답변",
        "keywords": "바람이 셈 (风大)",
        "weight": 1,
        "image": "part2_picture/p2_082.svg"
    },
    {
        "q": "他在做什么？",
        "qP": "Tā zài zuò shénme?",
        "a": "他在写作业。",
        "aP": "Tā zài xiě zuòyè.",
        "hint": "활동 답변",
        "keywords": "숙제 (写作业)",
        "weight": 1,
        "image": "part2_picture/p2_083.svg"
    },
    {
        "q": "现在几点几刻？",
        "qP": "Xiànzài jǐ diǎn jǐ kè?",
        "a": "现在两点一刻。",
        "aP": "Xiànzài liǎng diǎn yí kè.",
        "hint": "'刻'(15분) 단위 사용",
        "keywords": "2시 15분 (两点一刻)",
        "weight": 1,
        "image": "part2_picture/p2_084.svg"
    },
    {
        "q": "你想买哪件毛衣？",
        "qP": "Nǐ xiǎng mǎi nǎ jiàn máoyī?",
        "a": "我想买这件黄色的毛衣。",
        "aP": "Wǒ xiǎng mǎi zhè jiàn huángsè de máoyī.",
        "hint": "색상 답변",
        "keywords": "노란 스웨터 (黄色毛衣)",
        "weight": 1,
        "image": "part2_picture/p2_085.svg"
    },
    {
        "q": "你打算什么时候回家？",
        "qP": "Nǐ dǎsuàn shénme shíhou huíjiā?",
        "a": "我打算下个月回家。",
        "aP": "Wǒ dǎsuàn xià gè yuè huíjiā.",
        "hint": "미래 시간 답변",
        "keywords": "다음 달 (下个月)",
        "weight": 1,
        "image": "part2_picture/p2_086.svg"
    },
    {
        "q": "他在和谁一起吃饭？",
        "qP": "Tā zài hé shéi yìqǐ chīfàn?",
        "a": "他在和朋友一起吃饭。",
        "aP": "Tā zài hé péngyǒu yìqǐ chīfàn.",
        "hint": "동행인 답변",
        "keywords": "친구와 함께 (和朋友一起)",
        "weight": 1,
        "image": "part2_picture/p2_087.svg"
    },
    {
        "q": "他在哪儿工作？",
        "qP": "Tā zài nǎr gōngzuò?",
        "a": "他在医院工作。",
        "aP": "Tā zài yīyuàn gōngzuò.",
        "hint": "직업 위치 답변",
        "keywords": "병원 (医院)",
        "weight": 1,
        "image": "part2_picture/p2_088.svg"
    },
    {
        "q": "你想吃什么样子的蛋糕？",
        "qP": "Nǐ xiǎng chī shénmeyàngzi de dàngāo?",
        "a": "我想吃巧克力蛋糕。",
        "aP": "Wǒ xiǎng chī qiǎokèlì dàngāo.",
        "hint": "종류 답변",
        "keywords": "초콜릿 케이크",
        "weight": 1,
        "image": "part2_picture/p2_089.svg"
    },
    {
        "q": "你在看什么书？",
        "qP": "Nǐ zài kàn shénme shū?",
        "a": "我在看汉语书。",
        "aP": "Wǒ zài kàn Hànyǔ shū.",
        "hint": "책 종류 답변",
        "keywords": "중국어 책 (汉语书)",
        "weight": 1,
        "image": "part2_picture/p2_090.svg"
    },
    {
        "q": "这儿离公园多远？",
        "qP": "Zhèr lí gōngyuán duō yuǎn?",
        "a": "这儿离公园很近。",
        "aP": "Zhèr lí gōngyuán hěn jìn.",
        "hint": "거리 답변",
        "keywords": "가까움 (近)",
        "weight": 1,
        "image": "part2_picture/p2_091.svg"
    },
    {
        "q": "你要买几件衣服？",
        "qP": "Nǐ yào mǎi jǐ jiàn yīfu?",
        "a": "我要买三件衣服。",
        "aP": "Wǒ yào mǎi sān jiàn yīfu.",
        "hint": "양사 '件' 사용",
        "keywords": "세 벌 (三件)",
        "weight": 1,
        "image": "part2_picture/p2_092.svg"
    },
    {
        "q": "谁比他瘦？",
        "qP": "Shéi bǐ tā shòu?",
        "a": "他弟弟比他瘦。",
        "aP": "Tā dìdi bǐ tā shòu.",
        "hint": "비교 답변",
        "keywords": "남동생 (弟弟)",
        "weight": 1,
        "image": "part2_picture/p2_093.svg"
    },
    {
        "q": "他在做什么？",
        "qP": "Tā zài zuò shénme?",
        "a": "他在洗澡。",
        "aP": "Tā zài xǐzǎo.",
        "hint": "활동 답변",
        "keywords": "목욕/샤워 (洗澡)",
        "weight": 1,
        "image": "part2_picture/p2_094.svg"
    },
    {
        "q": "你想买哪把雨伞？",
        "qP": "Nǐ xiǎng mǎi nǎ bǎ yǔsǎn?",
        "a": "我想买那把蓝色的雨伞。",
        "aP": "Wǒ xiǎng mǎi nà bǎ lánsè de yǔsǎn.",
        "hint": "양사 '把'와 색상",
        "keywords": "파란 우산 (蓝色雨伞)",
        "weight": 1,
        "image": "part2_picture/p2_095.svg"
    },
    {
        "q": "你在等出租车吗？",
        "qP": "Nǐ zài děng chūzūchē ma?",
        "a": "是的，我在等出租车。",
        "aP": "Shì de, wǒ zài děng chūzūchē.",
        "hint": "상태 답변",
        "keywords": "택시 대기 (等出租车)",
        "weight": 1,
        "image": "part2_picture/p2_096.svg"
    },
    {
        "q": "她在做什么？",
        "qP": "Tā zài zuò shénme?",
        "a": "她在打电话。",
        "aP": "Tā zài dǎ diànhuà.",
        "hint": "활동 답변",
        "keywords": "전화 중 (打电话)",
        "weight": 1,
        "image": "part2_picture/p2_097.svg"
    },
    {
        "q": "他在哪儿买书？",
        "qP": "Tā zài nǎr mǎi shū?",
        "a": "他在书店买书。",
        "aP": "Tā zài shūdiàn mǎi shū.",
        "hint": "장소 답변",
        "keywords": "서점 (书店)",
        "weight": 1,
        "image": "part2_picture/p2_098.svg"
    },
    {
        "q": "你要去几层？",
        "qP": "Nǐ yào qù jǐ céng?",
        "a": "我要去八层。",
        "aP": "Wǒ yào qù bā céng.",
        "hint": "'层'(층) 단위 사용",
        "keywords": "8층 (八层)",
        "weight": 1,
        "image": "part2_picture/p2_099.svg"
    },
    {
        "q": "你想喝什么样子的茶？",
        "qP": "Nǐ xiǎng hē shénmeyàngzi de chá?",
        "a": "我想喝绿茶。",
        "aP": "Wǒ xiǎng hē lǜchá.",
        "hint": "종류 답변",
        "keywords": "녹차 (绿茶)",
        "weight": 1,
        "image": "part2_picture/p2_100.svg"
    },
    {
        "q": "你在找哪本书？",
        "qP": "Nǐ zài zhǎo nǎ běn shū?",
        "a": "我在找那本红色的书。",
        "aP": "Wǒ zài zhǎo nà běn hóngsè de shū.",
        "hint": "특정 대상 지칭",
        "keywords": "빨간 책 (红色书)",
        "weight": 1,
        "image": "part2_picture/p2_101.svg"
    },
    {
        "q": "谁比李老师忙？",
        "qP": "Shéi bǐ Lǐ lǎoshī máng?",
        "a": "王老师比李老师忙。",
        "aP": "Wáng lǎoshī bǐ Lǐ lǎoshī máng.",
        "hint": "비교 답변",
        "keywords": "왕 선생님 (王老师)",
        "weight": 1,
        "image": "part2_picture/p2_102.svg"
    },
    {
        "q": "他在做什么？",
        "qP": "Tā zài zuò shénme?",
        "a": "他在跑步。",
        "aP": "Tā zài pǎobù.",
        "hint": "활동 답변",
        "keywords": "달리기 (跑步)",
        "weight": 1,
        "image": "part2_picture/p2_103.svg"
    },
    {
        "q": "现在几点半？",
        "qP": "Xiànzài jǐ diǎn bàn?",
        "a": "现在四点半。",
        "aP": "Xiànzài sì diǎn bàn.",
        "hint": "'半'(30분) 사용",
        "keywords": "4시 반 (四点半)",
        "weight": 1,
        "image": "part2_picture/p2_104.svg"
    },
    {
        "q": "你想买哪件大衣？",
        "qP": "Nǐ xiǎng mǎi nǎ jiàn dàyī?",
        "a": "我想买这件黑色的大衣。",
        "aP": "Wǒ xiǎng mǎi zhè jiàn hēisè de dàyī.",
        "hint": "특징 답변",
        "keywords": "검은 코트 (黑色大衣)",
        "weight": 1,
        "image": "part2_picture/p2_105.svg"
    },
    {
        "q": "你打算什么时候去旅行？",
        "qP": "Nǐ dǎsuàn shénme shíhou qù lǚxíng?",
        "a": "我打算下周五去旅行。",
        "aP": "Wǒ dǎsuàn xià zhōuwǔ qù lǚxíng.",
        "hint": "시간 답변",
        "keywords": "다음 주 금요일",
        "weight": 1,
        "image": "part2_picture/p2_106.svg"
    },
    {
        "q": "他在和谁一起打球？",
        "qP": "Tā zài hé shéi yìqǐ dǎqiú?",
        "a": "他在和同学一起打球。",
        "aP": "Tā zài hé tóngxué yìqǐ dǎqiú.",
        "hint": "동행인 답변",
        "keywords": "동창과 함께 (和同学一起)",
        "weight": 1,
        "image": "part2_picture/p2_107.svg"
    },
    {
        "q": "他在哪儿休息？",
        "qP": "Tā zài nǎr xiūxi?",
        "a": "他在房间里休息。",
        "aP": "Tā zài fángjiān lǐ xiūxi.",
        "hint": "장소 답변",
        "keywords": "방 안 (房间里)",
        "weight": 1,
        "image": "part2_picture/p2_108.svg"
    },
    {
        "q": "你想吃什么样子的面包？",
        "qP": "Nǐ xiǎng chī shénmeyàngzi de miànbāo?",
        "a": "我想吃甜的面包。",
        "aP": "Wǒ xiǎng chī tián de miànbāo.",
        "hint": "맛 답변",
        "keywords": "단 빵 (甜面包)",
        "weight": 1,
        "image": "part2_picture/p2_109.svg"
    },
    {
        "q": "你在听什么音乐？",
        "qP": "Nǐ zài tīng shénme yīnyuè?",
        "a": "我在听中国音乐。",
        "aP": "Wǒ zài tīng Zhōngguó yīnyuè.",
        "hint": "종류 답변",
        "keywords": "중국 음악",
        "weight": 1,
        "image": "part2_picture/p2_110.svg"
    },
    {
        "q": "这儿离火车站远吗？",
        "qP": "Zhèr lí huǒchēzhàn yuǎn ma?",
        "a": "这儿离火车站不远。",
        "aP": "Zhèr lí huǒchēzhàn bù yuǎn.",
        "hint": "거리 답변",
        "keywords": "멀지 않음 (不远)",
        "weight": 1,
        "image": "part2_picture/p2_111.svg"
    },
    {
        "q": "你要买几支笔？",
        "qP": "Nǐ yào mǎi jǐ zhī bǐ?",
        "a": "我要买四支笔。",
        "aP": "Wǒ yào mǎi sì zhī bǐ.",
        "hint": "펜 양사 '支' 사용",
        "keywords": "네 자루 (四支)",
        "weight": 1,
        "image": "part2_picture/p2_112.svg"
    },
    {
        "q": "谁比姐姐漂亮？",
        "qP": "Shéi bǐ jiějie piàoliang?",
        "a": "妹妹比姐姐漂亮。",
        "aP": "Mèimei bǐ jiějie piàoliang.",
        "hint": "비교 답변",
        "keywords": "여동생 (妹妹)",
        "weight": 1,
        "image": "part2_picture/p2_113.svg"
    },
    {
        "q": "他在做什么？",
        "qP": "Tā zài zuò shénme?",
        "a": "他在照相。",
        "aP": "Tā zài zhàoxiàng.",
        "hint": "활동 답변",
        "keywords": "사진 찍기 (照相)",
        "weight": 1,
        "image": "part2_picture/p2_114.svg"
    },
    {
        "q": "你想买哪瓶水？",
        "qP": "Nǐ xiǎng mǎi nǎ píng shuǐ?",
        "a": "我想买这瓶矿泉水。",
        "aP": "Wǒ xiǎng mǎi zhè píng kuàngquánshuǐ.",
        "hint": "종류 답변",
        "keywords": "광천수 (矿泉水)",
        "weight": 1,
        "image": "part2_picture/p2_115.svg"
    },
    {
        "q": "他在哪儿等朋友？",
        "qP": "Tā zài nǎr děng péngyǒu?",
        "a": "他在公司门口等朋友。",
        "aP": "Tā zài gōngsī ménkǒu děng péngyǒu.",
        "hint": "구체적 장소 답변",
        "keywords": "회사 입구 (公司门口)",
        "weight": 1,
        "image": "part2_picture/p2_116.svg"
    },
    {
        "q": "你要买什么样的桌子？",
        "qP": "Nǐ yào mǎi shénmeyàng de zhuōzi?",
        "a": "我要买木头的桌子。",
        "aP": "Wǒ yào mǎi mùtou de zhuōzi.",
        "hint": "재질 답변",
        "keywords": "나무 책상 (木头桌子)",
        "weight": 1,
        "image": "part2_picture/p2_117.svg"
    },
    {
        "q": "他在家做什么？",
        "qP": "Tā zàijiā zuò shénme?",
        "a": "他在家洗碗。",
        "aP": "Tā zàijiā xǐwǎn.",
        "hint": "활동 답변",
        "keywords": "설거지 (洗碗)",
        "weight": 1,
        "image": "part2_picture/p2_118.svg"
    },
    {
        "q": "你想喝什么样子的果汁？",
        "qP": "Nǐ xiǎng hē shénmeyàngzi de guǒzhī?",
        "a": "我想喝苹果汁。",
        "aP": "Wǒ xiǎng hē píngguǒzhī.",
        "hint": "종류 답변",
        "keywords": "사과 주스 (苹果汁)",
        "weight": 1,
        "image": "part2_picture/p2_119.svg"
    },
    {
        "q": "你在等哪辆公交车？",
        "qP": "Nǐ zài děng nǎ liàng gōngjiāochē?",
        "a": "我在等一百路公交车。",
        "aP": "Wǒ zài děng yìbǎi lù gōngjiāochē.",
        "hint": "버스 번호 답변",
        "keywords": "100번 버스 (一百路)",
        "weight": 1,
        "image": "part2_picture/p2_120.svg"
    },
    {
        "q": "他怎么去饭店？",
        "qP": "Tā zěnme qù fàndiàn?",
        "a": "他走着去饭店。",
        "aP": "Tā zǒuzhe qù fàndiàn.",
        "hint": "수단 답변",
        "keywords": "걸어서 감 (走着去)",
        "weight": 1,
        "image": "part2_picture/p2_121.svg"
    },
    {
        "q": "谁比王经理忙？",
        "qP": "Shéi bǐ Wáng jīnglǐ máng?",
        "a": "张经理比王经理忙。",
        "aP": "Zhāng jīnglǐ bǐ Wáng jīnglǐ máng.",
        "hint": "비교 답변",
        "keywords": "장 매니저 (张经理)",
        "weight": 1,
        "image": "part2_picture/p2_122.svg"
    },
    {
        "q": "外面有没有云？",
        "qP": "Wàimiàn yǒu méiyǒu yún?",
        "a": "外面云很多。",
        "aP": "Wàimiàn yún hěn duō.",
        "hint": "상태 답변",
        "keywords": "구름 많음 (云多)",
        "weight": 1,
        "image": "part2_picture/p2_123.svg"
    },
    {
        "q": "他在做什么？",
        "qP": "Tā zài zuò shénme?",
        "a": "他在画画儿。",
        "aP": "Tā zài huàhuàr.",
        "hint": "활동 답변",
        "keywords": "그림 그리기 (画画儿)",
        "weight": 1,
        "image": "part2_picture/p2_124.svg"
    },
    {
        "q": "你想买哪件衬衫？",
        "qP": "Nǐ xiǎng mǎi nǎ jiàn chènshān?",
        "a": "我想买这件蓝色的衬衫。",
        "aP": "Wǒ xiǎng mǎi zhè jiàn lánsè de chènshān.",
        "hint": "색상 답변",
        "keywords": "파란 셔츠 (蓝色衬衫)",
        "weight": 1,
        "image": "part2_picture/p2_125.svg"
    },
    {
        "q": "你打算什么时候去公司？",
        "qP": "Nǐ dǎsuàn shénme shíhou qù gōngsī?",
        "a": "我打算明天早上八点去公司。",
        "aP": "Wǒ dǎsuàn míngtiān zǎoshang bā diǎn qù gōngsī.",
        "hint": "시간 답변",
        "keywords": "내일 오전 8시",
        "weight": 1,
        "image": "part2_picture/p2_126.svg"
    },
    {
        "q": "他在和谁一起看电影？",
        "qP": "Tā zài hé shéi yìqǐ kàn diànyǐng?",
        "a": "他在和女朋友一起看电影。",
        "aP": "Tā zài hé nǚpéngyǒu yìqǐ kàn diànyǐng.",
        "hint": "동행인 답변",
        "keywords": "여자친구와 함께",
        "weight": 1,
        "image": "part2_picture/p2_127.svg"
    },
    {
        "q": "他在哪儿买东西？",
        "qP": "Tā zài nǎr mǎi dōngxi?",
        "a": "他在超市买东西。",
        "aP": "Tā zài chāoshì mǎi dōngxi.",
        "hint": "장소 답변",
        "keywords": "마트 (超市)",
        "weight": 1,
        "image": "part2_picture/p2_128.svg"
    },
    {
        "q": "你想吃什么样子的水果？",
        "qP": "Nǐ xiǎng chī shénmeyàngzi de shuǐguǒ?",
        "a": "我想吃新鲜的水果。",
        "aP": "Wǒ xiǎng chī xīnxiān de shuǐguǒ.",
        "hint": "상태 답변",
        "keywords": "신선한 과일 (新鲜)",
        "weight": 1,
        "image": "part2_picture/p2_129.svg"
    },
    {
        "q": "你在看什么电视节目？",
        "qP": "Nǐ zài kàn shénme diànshì jiémù?",
        "a": "我在看新闻节目。",
        "aP": "Wǒ zài kàn xīnwén jiémù.",
        "hint": "종류 답변",
        "keywords": "뉴스 프로그램 (新闻)",
        "weight": 1,
        "image": "part2_picture/p2_130.svg"
    },
    {
        "q": "这儿离银行远不远？",
        "qP": "Zhèr lí yínháng yuǎn bù yuǎn?",
        "a": "这儿离银行很近。",
        "aP": "Zhèr lí yínháng hěn jìn.",
        "hint": "거리 답변",
        "keywords": "가까움 (近)",
        "weight": 1,
        "image": "part2_picture/p2_131.svg"
    },
    {
        "q": "你要买几把椅子？",
        "qP": "Nǐ yào mǎi jǐ bǎ yǐzi?",
        "a": "我要买六把椅子。",
        "aP": "Wǒ yào mǎi liù bǎ yǐzi.",
        "hint": "의자 양사 '把' 사용",
        "keywords": "여섯 개 (六把)",
        "weight": 1,
        "image": "part2_picture/p2_132.svg"
    },
    {
        "q": "谁比李先生胖？",
        "qP": "Shéi bǐ Lǐ xiānsheng pàng?",
        "a": "王先生比李先生胖。",
        "aP": "Wáng xiānsheng bǐ Lǐ xiānsheng pàng.",
        "hint": "비교 답변",
        "keywords": "왕 선생 (王先生)",
        "weight": 1,
        "image": "part2_picture/p2_133.svg"
    },
    {
        "q": "他在做什么？",
        "qP": "Tā zài zuò shénme?",
        "a": "他在刷牙。",
        "aP": "Tā zài shuāyá.",
        "hint": "활동 답변",
        "keywords": "양치질 (刷牙)",
        "weight": 1,
        "image": "part2_picture/p2_134.svg"
    },
    {
        "q": "你想买哪瓶饮料？",
        "qP": "Nǐ xiǎng mǎi nǎ píng yǐnliào?",
        "a": "我想买这瓶可乐。",
        "aP": "Wǒ xiǎng mǎi zhè píng kělè.",
        "hint": "종류 답변",
        "keywords": "콜라 (可乐)",
        "weight": 1,
        "image": "part2_picture/p2_135.svg"
    },
    {
        "q": "你在哪儿等公交车？",
        "qP": "Nǐ zài nǎr děng gōngjiāochē?",
        "a": "我在校门口等公交车。",
        "aP": "Wǒ zài xiàoménkǒu děng gōngjiāochē.",
        "hint": "장소 답변",
        "keywords": "교문 입구 (校门口)",
        "weight": 1,
        "image": "part2_picture/p2_136.svg"
    },
    {
        "q": "你要买什么样的床？",
        "qP": "Nǐ yào mǎi shénmeyàng de chuáng?",
        "a": "我要买大的床。",
        "aP": "Wǒ yào mǎi dà de chuáng.",
        "hint": "크기 답변",
        "keywords": "큰 침대 (大床)",
        "weight": 1,
        "image": "part2_picture/p2_137.svg"
    },
    {
        "q": "她在做什么？",
        "qP": "Tā zài zuò shénme?",
        "a": "她在唱歌。",
        "aP": "Tā zài chànggē.",
        "hint": "활동 답변",
        "keywords": "노래 부르기 (唱歌)",
        "weight": 1,
        "image": "part2_picture/p2_138.svg"
    },
    {
        "q": "男的在做什么？",
        "qP": "Nán de zài zuò shénme?",
        "a": "男的在散步。",
        "aP": "Nán de zài sànbù.",
        "hint": "활동 답변",
        "keywords": "산책 (散步)",
        "weight": 1,
        "image": "part2_picture/p2_139.svg"
    },
    {
        "q": "电影什么时候开始？",
        "qP": "Diànyǐng shénme shíhou kāishǐ?",
        "a": "九点四十五分开始。",
        "aP": "Jiǔ diǎn sìshíwǔ fēn kāishǐ.",
        "hint": "시간 답변",
        "keywords": "9시 45분",
        "weight": 1,
        "image": "part2_picture/p2_140.svg"
    },
    {
        "q": "哪个水果比较少？",
        "qP": "Nǎ ge shuǐguǒ bǐjiào shǎo?",
        "a": "香蕉比较少。",
        "aP": "Xiāngjiāo bǐjiào shǎo.",
        "hint": "비교 답변",
        "keywords": "바나나가 적음 (香蕉少)",
        "weight": 1,
        "image": "part2_picture/p2_141.svg"
    },
    {
        "q": "床上有什么？",
        "qP": "Chuángshàng yǒu shénme?",
        "a": "床上有裤子。",
        "aP": "Chuángshàng yǒu kùzi.",
        "hint": "존재 답변",
        "keywords": "바지 (裤子)",
        "weight": 1,
        "image": "part2_picture/p2_142.svg"
    },
    {
        "q": "门前面有什么？",
        "qP": "Mén qiánmiàn yǒu shénme?",
        "a": "门前面有一把雨伞。",
        "aP": "Mén qiánmiàn yǒu yì bǎ yǔsǎn.",
        "hint": "존재 답변",
        "keywords": "우산 한 개 (一把雨伞)",
        "weight": 1,
        "image": "part2_picture/p2_143.svg"
    }
];
