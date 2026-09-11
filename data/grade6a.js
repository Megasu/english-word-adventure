// 六年级上册 题库数据
// 新版小学六年级上册：单元词汇 + 看中文填词 + 表达填空 + 完整句子
// grade6a = 六年级上册；被 data/index.js 的年级注册表（GRADES）引用

// 全部关卡与题目数据
const LEVEL_DATA = [
  {
    id: 1,
    name: "Amazing landmarks",
    chineseName: "奇妙的地标",
    emoji: "🏔️",
    color: "#FF8C42",
    words: [
      { en: "was", cn: "是(过去式)" },
      { en: "climb", cn: "攀登;爬" },
      { en: "kilometre", cn: "千米;公里" },
      { en: "gingerbread house", cn: "姜饼屋" },
      { en: "send", cn: "邮寄;发送" },
      { en: "go", cn: "去;走" },
      { en: "thousand", cn: "一千" },
      { en: "clay", cn: "黏土;陶土" },
      { en: "see", cn: "看见" },
      { en: "village", cn: "村庄;村镇" },
      { en: "eat", cn: "吃" },
      { en: "dry", cn: "干的" },
      { en: "take", cn: "做(某动作)" },
      { en: "view", cn: "景色" },
      { en: "inspiring", cn: "鼓舞人心的" },
      { en: "bamboo", cn: "竹;竹子" },
      { en: "pumpkin", cn: "南瓜" },
      { en: "restaurant", cn: "餐馆;餐厅" },
      { en: "airport", cn: "机场" }
    ]
  },
  {
    id: 2,
    name: "Getting together",
    chineseName: "欢聚一堂",
    emoji: "🎉",
    color: "#52C41A",
    words: [
      { en: "paste", cn: "粘贴" },
      { en: "dress", cn: "穿衣服" },
      { en: "gala", cn: "演出;庆典" },
      { en: "count down", cn: "倒计时" },
      { en: "marathon", cn: "马拉松赛跑" },
      { en: "as", cn: "作为" },
      { en: "race", cn: "赛跑;速度竞赛" },
      { en: "run", cn: "跑;奔跑" },
      { en: "cheer", cn: "欢呼;加油" },
      { en: "book fair", cn: "书市" },
      { en: "writer", cn: "作家;作者" },
      { en: "read", cn: "阅读" },
      { en: "make", cn: "做;使出现" },
      { en: "sing", cn: "唱;唱歌" },
      { en: "wear", cn: "穿;戴" },
      { en: "yesterday", cn: "昨天" },
      { en: "notice", cn: "通知" },
      { en: "wake", cn: "醒;醒来" },
      { en: "later", cn: "随后;后来" },
      { en: "judge", cn: "裁判" },
      { en: "begin", cn: "开始" },
      { en: "win", cn: "获胜" },
      { en: "winner", cn: "获胜者" },
      { en: "ever", cn: "以往任何时候" },
      { en: "exciting", cn: "令人激动的" }
    ]
  },
  {
    id: 3,
    name: "Healthy life",
    chineseName: "健康生活",
    emoji: "💪",
    color: "#1890FF",
    words: [
      { en: "cold", cn: "感冒" },
      { en: "ill", cn: "不舒服;有病" },
      { en: "head", cn: "头;头部" },
      { en: "runny nose", cn: "流鼻涕" },
      { en: "soon", cn: "很快;马上" },
      { en: "fever", cn: "发烧;发热" },
      { en: "cough", cn: "咳嗽" },
      { en: "discuss", cn: "讨论;商量" },
      { en: "diet", cn: "日常饮食" },
      { en: "stay up", cn: "熬夜" },
      { en: "cry", cn: "哭;哭泣" },
      { en: "another", cn: "另一个" },
      { en: "call", cn: "(给…)打电话" },
      { en: "email", cn: "电子邮件" },
      { en: "unhappy", cn: "不快乐的" },
      { en: "glass", cn: "一杯;玻璃" },
      { en: "may", cn: "也许;可能" },
      { en: "add", cn: "补充说" },
      { en: "video", cn: "视频;录像" },
      { en: "better", cn: "舒畅些的" }
    ]
  },
  {
    id: 4,
    name: "Managing money well",
    chineseName: "理财有道",
    emoji: "💰",
    color: "#FAAD14",
    words: [
      { en: "money", cn: "钱" },
      { en: "pocket money", cn: "零花钱" },
      { en: "schoolbag", cn: "书包" },
      { en: "goods", cn: "商品" },
      { en: "drink", cn: "饮料" },
      { en: "service", cn: "服务" },
      { en: "haircut", cn: "理发" },
      { en: "microscope", cn: "显微镜" },
      { en: "lucky", cn: "幸运的" },
      { en: "save up", cn: "攒钱" },
      { en: "sale", cn: "特价销售" },
      { en: "ticket", cn: "票" },
      { en: "manage", cn: "管理" },
      { en: "difficult", cn: "困难的" },
      { en: "sell", cn: "出售" },
      { en: "jar", cn: "罐子" },
      { en: "half", cn: "一半" },
      { en: "for example", cn: "例如" }
    ]
  },
  {
    id: 5,
    name: "Exploring space",
    chineseName: "探索太空",
    emoji: "🚀",
    color: "#722ED1",
    words: [
      { en: "planet", cn: "行星" },
      { en: "earth", cn: "地球" },
      { en: "sky", cn: "天;天空" },
      { en: "daytime", cn: "白天" },
      { en: "cloud", cn: "云" },
      { en: "moon", cn: "月球;月亮" },
      { en: "star", cn: "恒星;星" },
      { en: "space", cn: "太空;空间" },
      { en: "ocean", cn: "大海" },
      { en: "satellite", cn: "人造卫星" },
      { en: "soil", cn: "土壤" },
      { en: "alien", cn: "外星生物" },
      { en: "sunrise", cn: "日出" },
      { en: "rover", cn: "探测器" },
      { en: "into", cn: "朝;进入" },
      { en: "telescope", cn: "望远镜" },
      { en: "astronaut", cn: "宇航员" },
      { en: "spaceship", cn: "宇宙飞船" },
      { en: "month", cn: "月;月份" },
      { en: "taikonaut", cn: "中国航天员" },
      { en: "sunset", cn: "日落" },
      { en: "time", cn: "次;回" },
      { en: "question", cn: "问题" },
      { en: "Mars", cn: "火星" }
    ]
  },
  {
    id: 6,
    name: "Energy, nature and us",
    chineseName: "能源、自然与我们",
    emoji: "⚡",
    color: "#13C2C2",
    words: [
      { en: "power", cn: "能;能量" },
      { en: "electricity", cn: "电" },
      { en: "solar", cn: "太阳的" },
      { en: "energy", cn: "能源" },
      { en: "source", cn: "来源" },
      { en: "light", cn: "照亮;光" },
      { en: "heat", cn: "加热;热量" },
      { en: "cool", cn: "变凉;冷却" },
      { en: "resource", cn: "资源" },
      { en: "run out", cn: "用完" },
      { en: "change", cn: "改变" },
      { en: "quick", cn: "迅速的" },
      { en: "shower", cn: "淋浴" },
      { en: "unplug", cn: "拔掉电源" },
      { en: "difference", cn: "差别" },
      { en: "reduce", cn: "减少" },
      { en: "air conditioner", cn: "空调机" },
      { en: "drive", cn: "驾驶" },
      { en: "reuse", cn: "再次使用" },
      { en: "own", cn: "自己的" },
      { en: "market", cn: "集市" },
      { en: "bottle", cn: "瓶子" },
      { en: "useful", cn: "有用的" },
      { en: "dirty", cn: "脏的" },
      { en: "side", cn: "一面;一边" }
    ]
  }
];

// 填空题库
const FILL_BLANK_DATA = {
  1: [
    { en: "Let us climb the Great Wall tomorrow.", cn: "我们明天去爬长城吧。", words: ["climb"] },
    { en: "I want to send a letter to my friend.", cn: "我想给朋友寄一封信。", words: ["send"] },
    { en: "The airport is very far from my home.", cn: "机场离我家很远。", words: ["airport"] },
    { en: "My dad likes to eat at the restaurant with us.", cn: "爸爸喜欢和我们去餐馆吃饭。", words: ["eat", "restaurant"] },
    { en: "What a beautiful view from the top!", cn: "从顶上看到的景色真美！", words: ["view"] },
    { en: "One kilometre is one thousand metres long.", cn: "一千米就是一千米长。", words: ["kilometre", "thousand"] },
    { en: "I can make a small gingerbread house at home.", cn: "我能在家里做一个小姜饼屋。", words: ["gingerbread house"] },
    { en: "We can see the beautiful village life.", cn: "我们能看见美丽的村庄生活。", words: ["see", "village"] },
    { en: "The clay is hard and dry.", cn: "这个黏土是硬的、是干的。", words: ["clay", "dry"] },
    { en: "The view from the top is very inspiring.", cn: "从顶上看到的景色非常鼓舞人心。", words: ["view", "inspiring"] },
    { en: "Pandas love to eat bamboo.", cn: "熊猫喜欢吃竹子。", words: ["bamboo"] }
  ],
  2: [
    { en: "I wear a red shirt to the party.", cn: "我穿了一件红衬衫去聚会。", words: ["wear"] },
    { en: "Let us sing a happy song together.", cn: "让我们一起唱一首欢乐的歌。", words: ["sing"] },
    { en: "The race will begin at nine o'clock.", cn: "比赛将在九点开始。", words: ["race", "begin"] },
    { en: "My mom asked me to paste the picture on the paper.", cn: "妈妈让我把图片粘在纸上。", words: ["paste"] },
    { en: "They cheer and clap for the runners.", cn: "他们为跑步选手欢呼鼓掌。", words: ["cheer"] },
    { en: "I went to the book fair yesterday.", cn: "我昨天去了书市。", words: ["book fair"] },
    { en: "My favourite writer writes good books.", cn: "我最喜欢的作家写好书。", words: ["writer"] },
    { en: "The judge gave us the notice for the race.", cn: "裁判宣布了比赛的通知。", words: ["judge", "notice", "race"] },
    { en: "I wake up early every morning.", cn: "我每天早上醒得很早。", words: ["wake"] },
    { en: "The race is so exciting! I am the winner!", cn: "比赛太令人激动了！我是获胜者！", words: ["race", "exciting", "winner"] },
    { en: "I run in the marathon to win the race.", cn: "我参加马拉松赛跑想赢。", words: ["run", "marathon"] },
    { en: "We will count down before the show.", cn: "我们将在演出前倒计时。", words: ["count down"] }
  ],
  3: [
    { en: "I have a cold and a fever today.", cn: "我今天感冒发烧了。", words: ["cold", "fever"] },
    { en: "You should not stay up too late.", cn: "你不应该熬夜太晚。", words: ["stay up"] },
    { en: "A healthy diet is very important.", cn: "健康的饮食非常重要。", words: ["diet"] },
    { en: "I will send you an email soon.", cn: "我很快会给你发邮件。", words: ["email"] },
    { en: "Drink a glass of water, please.", cn: "请喝一杯水。", words: ["glass"] },
    { en: "My head hurts and I have a runny nose.", cn: "我头疼而且流鼻涕。", words: ["head", "runny nose"] },
    { en: "She feels ill and unhappy.", cn: "她感觉不舒服也不开心。", words: ["ill", "unhappy"] },
    { en: "I have a bad cough and cry a lot.", cn: "我咳嗽得厉害，哭个不停。", words: ["cough", "cry"] },
    { en: "You may feel better after taking the medicine.", cn: "你吃药后可能很快就会好转。", words: ["may", "better"] },
    { en: "Please call me when you feel better.", cn: "感觉好转时请给我打电话。", words: ["call", "better"] },
    { en: "I want to discuss this with you soon.", cn: "我想不久就和你讨论这个。", words: ["discuss", "soon"] },
    { en: "I will send a video to you.", cn: "我会给你发一段视频。", words: ["send", "video"] }
  ],
  4: [
    { en: "I spent all my pocket money on a new schoolbag.", cn: "我把所有的零花钱都花在了新书包上。", words: ["pocket money", "schoolbag"] },
    { en: "I want to buy a drink, please.", cn: "我想买一杯饮料。", words: ["drink"] },
    { en: "This store is having a big sale.", cn: "这家商店正在大减价。", words: ["sale"] },
    { en: "I am so lucky to get the concert ticket!", cn: "我真幸运拿到了演唱会门票！", words: ["lucky", "ticket"] },
    { en: "For example, I bought a new jar today.", cn: "例如，我今天买了一个新罐子。", words: ["For example", "jar"] },
    { en: "My father will manage my money for me.", cn: "我爸爸会为我管理我的钱。", words: ["manage", "money"] },
    { en: "They sell fresh goods at the market.", cn: "他们在市场卖新鲜的商品。", words: ["sell", "goods"] },
    { en: "It is difficult to save up enough money.", cn: "攒够钱很困难。", words: ["difficult", "save up"] },
    { en: "I want to get a haircut and use the good service.", cn: "我想理个发并享受优质的服务。", words: ["haircut", "service"] },
    { en: "I look at things through the microscope.", cn: "我通过显微镜看东西。", words: ["microscope"] }
  ],
  5: [
    { en: "The Earth is a planet in space.", cn: "地球是太空中的一颗行星。", words: ["planet", "space"] },
    { en: "The moon goes around the Earth.", cn: "月球绕着地球转。", words: ["moon"] },
    { en: "I want to be an astronaut when I grow up.", cn: "我长大后想当宇航员。", words: ["astronaut"] },
    { en: "We can see a star in the sky at night.", cn: "晚上我们能在天空中看到一颗星星。", words: ["star", "sky"] },
    { en: "We can see the Sun and the cloud in the daytime.", cn: "白天我们能看到太阳和云。", words: ["cloud", "daytime"] },
    { en: "China has put a rover on Mars.", cn: "中国已经在火星上放置了探测器。", words: ["rover"] },
    { en: "A taikonaut rides a spaceship into space.", cn: "中国航天员乘宇宙飞船进入太空。", words: ["taikonaut", "spaceship", "space"] },
    { en: "We watch the sunrise and the sunset every day.", cn: "我们每天看日出和日落。", words: ["sunrise", "sunset"] },
    { en: "I look into the telescope to find an alien.", cn: "我通过望远镜寻找外星生物。", words: ["into", "telescope", "alien"] },
    { en: "The satellite orbits the Earth every month.", cn: "人造卫星每个月绕地球运行。", words: ["satellite", "month"] },
    { en: "Mars has soil but no big ocean.", cn: "火星有土壤但没有大的海洋。", words: ["soil", "ocean"] },
    { en: "I have a question about space.", cn: "我有一个关于太空的问题。", words: ["question"] }
  ],
  6: [
    { en: "The light comes from the Sun.", cn: "光来自太阳。", words: ["light"] },
    { en: "We use electricity to power our TVs.", cn: "我们用电给电视供电。", words: ["electricity"] },
    { en: "Solar energy is clean and green.", cn: "太阳能是清洁绿色的能源。", words: ["Solar"] },
    { en: "Open the window to cool the room.", cn: "打开窗户让房间凉快一下。", words: ["cool"] },
    { en: "A quick shower saves water.", cn: "快速淋浴节约用水。", words: ["shower"] },
    { en: "Wind is a source of clean energy.", cn: "风是清洁能源的一种来源。", words: ["source", "energy"] },
    { en: "We use solar power to heat the house.", cn: "我们用太阳能给房子加热。", words: ["power", "heat"] },
    { en: "Please unplug the TV to save power.", cn: "请拔掉电视的电源插头以节约能源。", words: ["unplug", "power"] },
    { en: "Many resources will run out soon.", cn: "很多资源很快就会用完。", words: ["resources", "run out"] },
    { en: "We should reduce the use of air conditioner.", cn: "我们应该减少使用空调。", words: ["reduce", "air conditioner"] },
    { en: "A quick shower uses less water.", cn: "快速的淋浴用更少的水。", words: ["quick"] },
    { en: "It is useful to reuse bottles.", cn: "自己重复使用瓶子是有用的。", words: ["useful", "reuse"] },
    { en: "I go to the market to buy a bottle of water.", cn: "我去市场买一瓶水。", words: ["market", "bottle"] },
    { en: "The side of the bottle is dirty.", cn: "瓶子的这一边是脏的。", words: ["side", "dirty"] },
    { en: "I drive to school in my own car.", cn: "我开自己的车去学校。", words: ["drive", "own"] }
  ]
};

// 表达填空题库
const EXPRESSION_FILL_DATA = {
  1: [
    { en: "How was your weekend?", cn: "你周末过得怎么样？", words: ["was"] },
    { en: "What did you do, Peter?", cn: "你做什么了，彼得？", words: ["did", "do"] },
    { en: 'I visited the "Gingerbread House" last Saturday.', cn: '我上个星期六去参观"姜饼屋"了。', words: ["visited", "Gingerbread House"] },
    { en: "Where did you go over the summer holidays, Binbin?", cn: "你暑假去哪儿了，斌斌？", words: ["did", "go"] },
    { en: "I went to Xi'an with my family.", cn: "我和家人去西安了。", words: ["went", "Xi'an"] }
  ],
  2: [
    { en: "Did you take a trip?", cn: "你们去旅行了吗？", words: ["Did", "take"] },
    { en: "No, we didn't.", cn: "不，我们没有。", words: ["didn't"] },
    { en: "Did you eat mooncakes?", cn: "你们吃月饼了吗？", words: ["Did", "eat"] },
    { en: "Yes, we did.", cn: "是的，吃了。", words: ["Yes", "did"] },
    { en: "What did you do last weekend?", cn: "你上周末做什么了？", words: ["did", "do"] }
  ],
  3: [
    { en: "How do you feel?", cn: "你感觉怎么样？", words: ["do", "feel"] },
    { en: "I feel ill. My head hurts and I have a runny nose.", cn: "我感觉不太好。我头痛还流鼻涕。", words: ["head", "hurts", "runny nose"] },
    { en: "I'm sorry to hear that. Maybe you should see a doctor.", cn: "对此我感到难过，也许你应该看看医生。", words: ["hear", "see", "doctor"] },
    { en: "How can we live a healthy life?", cn: "我们怎样能过健康的生活？", words: ["can", "live", "healthy"] },
    { en: "We need to eat healthy food. We should exercise too.", cn: "我们需要吃健康的食物。我们还需要运动。", words: ["need", "healthy", "exercise"] }
  ],
  4: [
    { en: "How are you going to spend it?", cn: "你打算怎么花（这些钱）？", words: ["going", "spend"] },
    { en: "I'm going to buy a schoolbag.", cn: "我打算买一个书包。", words: ["buy", "schoolbag"] },
    { en: "I also want to buy some books.", cn: "我还想买一些书。", words: ["want", "buy", "books"] }
  ],
  5: [
    { en: "What can you see in the sky?", cn: "你能在天空中看到什么？", words: ["can", "see"] },
    { en: "We can see the Sun and the clouds.", cn: "我们能看到太阳和云。", words: ["can", "see", "clouds"] },
    { en: "At night, we can see the Moon and the stars.", cn: "在晚上，我们能看到月亮和星星。", words: ["night", "can", "see", "stars"] },
    { en: "Is there any water on Mars?", cn: "火星上有水吗？", words: ["any", "water", "Mars"] },
    { en: "Yes, there is. There is soil too.", cn: "是，有的。那里还有土壤。", words: ["Yes", "soil"] }
  ],
  6: [
    { en: "What do you know about it?", cn: "关于它你知道些什么？", words: ["do", "know", "about"] },
    { en: "Running water can make electricity.", cn: "流水可以发电。", words: ["Running", "make", "electricity"] },
    { en: "What else do you want to know about water?", cn: "关于水你还想了解些什么？", words: ["else", "want", "know", "water"] },
    { en: "Where does water come from?", cn: "水从哪儿来？", words: ["does", "come", "from"] },
    { en: "Wind power, solar power and water power are types of green energy.", cn: "风能、太阳能和水能是不同类型的绿色能源。", words: ["solar", "water", "green", "energy"] },
    { en: "But many resources are running out.", cn: "但是很多能源快要耗尽了。", words: ["resources", "running", "out"] }
  ]
};

// 完整句子题库
const COMPLETE_SENTENCE_DATA = {
  1: [
    { en: "It was great! I climbed the Great Wall.", cn: "非常棒！我去爬长城了。" },
    { en: "What did you do there?", cn: "你们在那儿做了些什么？" },
    { en: "We went to see the Terracotta Warriors.", cn: "我们去看兵马俑了。" },
    { en: "What else did you do?", cn: "你们还做什么了？" }
  ],
  2: [
    { en: "It was great!", cn: "非常棒！" },
    { en: "My mother and I went to a marathon on Sunday.", cn: "我和妈妈上周日参加了一场马拉松活动。" },
    { en: "What did you like about it?", cn: "你喜欢这个活动的哪个方面？" },
    { en: "I liked watching the runners.", cn: "我喜欢看参赛者（跑步）。" }
  ],
  3: [
    { en: "Have a healthy diet.", cn: "（保持）健康的饮食。" },
    { en: "Don't stay up late.", cn: "不要熬夜。" },
    { en: "Think about happy things.", cn: "想开心的事情。" },
    { en: "Join clubs and teams.", cn: "加入俱乐部和团队。" }
  ],
  4: [
    { en: "What else are you going to buy?", cn: "你还打算买什么？" },
    { en: "I'm going to buy a pair of sunglasses for Grandpa.", cn: "我打算给爷爷买一副太阳镜。" },
    { en: "I also want to buy a microscope.", cn: "我还想买一个显微镜。" }
  ],
  5: [
    { en: "Are there any aliens?", cn: "那儿有外星人吗？" },
    { en: "I don't think so. They say there aren't any living things.", cn: "我不这样认为。据说那里没有生物。" },
    { en: "China already put a rover on Mars.", cn: "中国已经在火星上放置了探测器。" },
    { en: "The taikonauts get up early in the morning.", cn: "中国航天员早上起床早。" }
  ],
  6: [
    { en: "What should we do?", cn: "我们该怎么办？" },
    { en: "How can we save energy?", cn: "我们怎样才能节约能源？" },
    { en: "We can take quick showers.", cn: "我们可以快速淋浴。" },
    { en: "We can also use LED lighting.", cn: "我们还可以使用LED照明。" },
    { en: "We should always unplug our computers and TVs.", cn: "我们应该每次都拔掉电脑和电视的电源插头。" },
    { en: "We should use air conditioners less.", cn: "我们应该少用空调。" }
  ]
};
