// 2026秋 人教PEP版 英语四年级上册 句子题库
// 来源：课本 Appendix 4「Useful expressions 常用表达法」第 86-87 页
//       + 各单元 Let's talk / Let's learn / Read and write 正文原句
// grade4a_sentences = 四年级上册句子部分；被 data/index.js 的年级注册表（GRADES）引用
// 三份题库分别对应：看中文填词 / 表达填空 / 完整句子
// 注意：words 里的挖空词必须按「在句子中出现的先后」排列（页面按序查找并替换）

// ========== 看中文填词 ==========
// 定位：本单元核心词汇放进句子里考，看中文提示补全单词
const FILL_BLANK_DATA_G4 = {
  1: [
    { en: "What's your mother's job?", cn: "你妈妈做什么工作？", words: ["job"] },
    { en: "She's a doctor.", cn: "她是位医生。", words: ["doctor"] },
    { en: "He's a PE teacher.", cn: "他是体育老师。", words: ["PE"] },
    { en: "My mother is a nurse.", cn: "我妈妈是护士。", words: ["nurse"] },
    { en: "My grandpa is a farmer.", cn: "我爷爷是农场主。", words: ["farmer"] },
    { en: "He's a factory worker.", cn: "他是工厂工人。", words: ["factory worker"] },
    { en: "He's an office worker.", cn: "他是公司职员。", words: ["office worker"] },
    { en: "Mum and Dad are busy and tired.", cn: "爸爸妈妈又忙又累。", words: ["busy", "tired"] },
    { en: "I can do some chores.", cn: "我可以做一些家务活。", words: ["chores"] },
    { en: "I can cook for my family.", cn: "我可以为家人做饭。", words: ["cook"] },
    { en: "I can clean the room.", cn: "我可以打扫房间。", words: ["clean", "room"] },
    { en: "We sweep the floor.", cn: "我们扫地。", words: ["sweep", "floor"] },
    { en: "I look after my sister.", cn: "我照顾我的妹妹。", words: ["look after"] },
    { en: "We cook together and have fun.", cn: "我们一起做饭，很开心。", words: ["together", "fun"] },
    { en: "I am helpful at home.", cn: "我在家很能帮忙。", words: ["helpful"] },
    { en: "We can also make a gift!", cn: "我们还可以做礼物！", words: ["also"] }
  ],
  2: [
    { en: "His name is Zhang Peng.", cn: "他叫张鹏。", words: ["His"] },
    { en: "He's tall and strong.", cn: "他又高又壮。", words: ["tall", "strong"] },
    { en: "She has long hair.", cn: "她有长头发。", words: ["hair"] },
    { en: "He's also kind.", cn: "他也很友善。", words: ["kind"] },
    { en: "She's quiet and kind.", cn: "她文静又友善。", words: ["quiet"] },
    { en: "Who's your best friend?", cn: "谁是你最好的朋友？", words: ["best"] },
    { en: "He often reads books with me.", cn: "他经常和我一起读书。", words: ["reads"] },
    { en: "We play games together.", cn: "我们一起玩游戏。", words: ["games"] },
    { en: "We play football together.", cn: "我们一起踢足球。", words: ["football"] },
    { en: "We play basketball together.", cn: "我们一起打篮球。", words: ["basketball"] },
    { en: "They are both my friends.", cn: "他们俩都是我的朋友。", words: ["both"] },
    { en: "He always helps me.", cn: "他总是帮助我。", words: ["always"] },
    { en: "She is clever and lovely.", cn: "她聪明又可爱。", words: ["clever"] }
  ],
  3: [
    { en: "Good afternoon!", cn: "下午好！", words: ["afternoon"] },
    { en: "There is a playground.", cn: "这里有个游乐场。", words: ["playground"] },
    { en: "We all play there.", cn: "我们都在那里玩。", words: ["there"] },
    { en: "There is a nice park over there.", cn: "那边有个漂亮的公园。", words: ["park"] },
    { en: "There is a hospital.", cn: "这里有一家医院。", words: ["hospital"] },
    { en: "Look! There is a shop.", cn: "看！这里有一家商店。", words: ["shop"] },
    { en: "There is a toilet.", cn: "这里有个卫生间。", words: ["toilet"] },
    { en: "There is a bus stop.", cn: "这里有个公交车站。", words: ["bus", "stop"] },
    { en: "Let's go to the library.", cn: "我们去图书馆吧。", words: ["library"] },
    { en: "Let's do some sports.", cn: "我们一起做运动吧。", words: ["sports"] },
    { en: "I often take a walk in the park.", cn: "我经常在公园里散步。", words: ["take a walk"] },
    { en: "My favourite place is the museum.", cn: "我最喜欢的地方是博物馆。", words: ["favourite", "place"] },
    { en: "They take photos in the park.", cn: "他们在公园里拍照。", words: ["photos"] },
    { en: "I want to buy a story book.", cn: "我想买一本故事书。", words: ["buy"] }
  ],
  4: [
    { en: "Our neighbour is a firefighter.", cn: "我们的邻居是消防员。", words: ["firefighter"] },
    { en: "He often helps people.", cn: "他经常帮助别人。", words: ["people"] },
    { en: "He's a school bus driver.", cn: "他是校车司机。", words: ["driver"] },
    { en: "He's a cleaner.", cn: "他是清洁工。", words: ["cleaner"] },
    { en: "She's a cook.", cn: "她是厨师。", words: ["cook"] },
    { en: "He's a delivery worker.", cn: "他是快递员。", words: ["delivery worker"] },
    { en: "My neighbour is a police officer.", cn: "我的邻居是警察。", words: ["police officer"] },
    { en: "She helps a lot of people.", cn: "她帮助很多人。", words: ["a lot of"] },
    { en: "I can make the bed.", cn: "我会铺床。", words: ["make the bed"] },
    { en: "He takes us to school every day.", cn: "他每天送我们去学校。", words: ["takes"] },
    { en: "That's an important job too!", cn: "那个工作也很重要！", words: ["job"] },
    { en: "Everyone can be a volunteer.", cn: "每个人都可以当志愿者。", words: ["volunteer"] },
    { en: "Those people are very nice.", cn: "那些人很好。", words: ["Those"] },
    { en: "Mrs Li is our neighbour.", cn: "李太太是我们的邻居。", words: ["Mrs"] },
    { en: "He tells us stories.", cn: "他给我们讲故事。", words: ["tells"] },
    { en: "My grandpa is old.", cn: "我爷爷年纪大了。", words: ["old"] }
  ],
  5: [
    { en: "What's the weather like in Sydney?", cn: "悉尼的天气怎么样？", words: ["weather"] },
    { en: "It's quite sunny today.", cn: "今天是大晴天。", words: ["sunny"] },
    { en: "Is it hot?", cn: "天热吗？", words: ["hot"] },
    { en: "It's cold in Beijing.", cn: "北京很冷。", words: ["cold"] },
    { en: "It's cool and sunny.", cn: "天气凉爽又晴朗。", words: ["cool"] },
    { en: "It's warm and windy.", cn: "天气暖和又有风。", words: ["windy"] },
    { en: "It's cloudy today.", cn: "今天多云。", words: ["cloudy"] },
    { en: "It's rainy.", cn: "下雨了。", words: ["rainy"] },
    { en: "It's cold and snowy.", cn: "天冷还下雪。", words: ["snowy"] },
    { en: "It's raining now.", cn: "现在下雨了。", words: ["raining"] },
    { en: "We can fly a kite.", cn: "我们可以放风筝。", words: ["kite"] },
    { en: "They swim in the pool.", cn: "他们在泳池里游泳。", words: ["swim"] },
    { en: "There is a new film on.", cn: "有一部新电影上映。", words: ["film"] },
    { en: "The shop is closed.", cn: "商店关门了。", words: ["closed"] },
    { en: "Let's make a snowman.", cn: "我们堆雪人吧。", words: ["snowman"] },
    { en: "What's the weather like tomorrow?", cn: "明天天气怎么样？", words: ["tomorrow"] },
    { en: "Their children swim in the pool.", cn: "他们的孩子在泳池里游泳。", words: ["Their", "swim"] },
    { en: "I can speak English.", cn: "我会说英语。", words: ["speak"] }
  ],
  6: [
    { en: "Whose sweater is this, Mum?", cn: "这是谁的毛衣，妈妈？", words: ["Whose"] },
    { en: "It's your dad's.", cn: "是你爸爸的。", words: ["dad's"] },
    { en: "Whose socks are these?", cn: "这些是谁的袜子？", words: ["socks"] },
    { en: "They're mine.", cn: "它们是我的。", words: ["mine"] },
    { en: "Can I wear this new shirt today?", cn: "我今天可以穿这件新衬衫吗？", words: ["wear", "shirt"] },
    { en: "Wear a coat too.", cn: "再穿一件外套吧。", words: ["coat"] },
    { en: "This purple dress is Mum's.", cn: "这条紫色的连衣裙是妈妈的。", words: ["dress"] },
    { en: "This T-shirt is mine.", cn: "这件T恤衫是我的。", words: ["T-shirt"] },
    { en: "Which season do you like?", cn: "你喜欢哪个季节？", words: ["season"] },
    { en: "Winter. It snows a lot.", cn: "冬天。冬天经常下雪。", words: ["snows"] },
    { en: "I can play in the snow.", cn: "我可以在雪地里玩。", words: ["snow"] },
    { en: "Spring is green.", cn: "春天是绿色的。", words: ["Spring"] },
    { en: "Summer is blue.", cn: "夏天是蓝色的。", words: ["Summer"] },
    { en: "Autumn is orange.", cn: "秋天是橙色的。", words: ["Autumn"] },
    { en: "I like the falling leaves.", cn: "我喜欢飘落的叶子。", words: ["leaves"] },
    { en: "I wear warm coats and gloves.", cn: "我穿暖和的外套，戴手套。", words: ["gloves"] },
    { en: "My family often get together.", cn: "我的家人经常聚会。", words: ["get together"] },
    { en: "Then spring comes again.", cn: "接着春天又来了。", words: ["Then"] }
  ]
};

// ========== 表达填空 ==========
// 定位：教材「常用表达法」交际用语，挖掉关键词，看中文补全
const EXPRESSION_FILL_DATA_G4 = {
  1: [
    { en: "You have a big family.", cn: "你有一个大家庭。", words: ["family"] },
    { en: "Is this your father?", cn: "这是你爸爸吗？", words: ["father"] },
    { en: "Yes, it is. He's a PE teacher.", cn: "是的。他是体育老师。", words: ["PE"] },
    { en: "What's your mother's job?", cn: "你妈妈做什么工作？", words: ["mother's"] },
    { en: "She's a doctor.", cn: "她是位医生。", words: ["doctor"] },
    { en: "My father is a doctor too.", cn: "我爸爸也是医生。", words: ["too"] },
    { en: "Mum and Dad are busy and tired.", cn: "爸爸妈妈又忙又累。", words: ["tired"] },
    { en: "What can we do for them?", cn: "我们能为他们做些什么？", words: ["can"] },
    { en: "We can do some chores.", cn: "我们可以做一些家务活。", words: ["chores"] },
    { en: "I can clean the room.", cn: "我可以打扫房间。", words: ["room"] },
    { en: "We can also make a gift!", cn: "我们还可以做礼物！", words: ["gift"] },
    { en: "You are a great nurse.", cn: "你是一位很棒的护士。", words: ["nurse"] }
  ],
  2: [
    { en: "Mum, I have a new friend.", cn: "妈妈，我有一个新朋友。", words: ["friend"] },
    { en: "What's your friend's name?", cn: "你的朋友叫什么名字？", words: ["name"] },
    { en: "His name is Zhang Peng.", cn: "他叫张鹏。", words: ["Zhang Peng"] },
    { en: "Look! He's tall and strong.", cn: "看！他又高又壮。", words: ["tall"] },
    { en: "He has nice short hair too.", cn: "他还有好看的短发。", words: ["hair"] },
    { en: "He's also kind.", cn: "他也很友善。", words: ["kind"] },
    { en: "He often helps me.", cn: "他经常帮助我。", words: ["helps"] },
    { en: "Who's your best friend?", cn: "谁是你最好的朋友？", words: ["best"] },
    { en: "She often makes me smile.", cn: "她经常让我开心。", words: ["smile"] },
    { en: "He often helps me with English.", cn: "他经常帮我学英语。", words: ["English"] },
    { en: "We play games together.", cn: "我们一起玩游戏。", words: ["together"] },
    { en: "I know. It's Zhang Peng.", cn: "我知道了。是张鹏。", words: ["know"] }
  ],
  3: [
    { en: "Good afternoon!", cn: "下午好！", words: ["afternoon"] },
    { en: "Your neighbours are very friendly.", cn: "你们的邻居很友好。", words: ["friendly"] },
    { en: "There is a playground.", cn: "这里有个游乐场。", words: ["playground"] },
    { en: "We all play there.", cn: "我们都在那里玩儿。", words: ["there"] },
    { en: "There is also a nice park over there.", cn: "那边还有个漂亮的公园。", words: ["park"] },
    { en: "Let's go and see!", cn: "我们去看看吧！", words: ["see"] },
    { en: "I often play there with my friends.", cn: "我经常和朋友在那里玩。", words: ["often"] },
    { en: "There is a Taiji club.", cn: "这里有一个太极俱乐部。", words: ["Taiji"] },
    { en: "There are many people.", cn: "这里有好多人。", words: ["people"] },
    { en: "There is a gym too.", cn: "这里还有一个体育馆。", words: ["gym"] },
    { en: "Great! Let's do some sports.", cn: "太棒了！我们一起做运动吧。", words: ["sports"] },
    { en: "My favourite place is the museum.", cn: "我最喜欢的地方是博物馆。", words: ["museum"] }
  ],
  4: [
    { en: "Our neighbour is a firefighter.", cn: "我们的邻居是消防员。", words: ["neighbour"] },
    { en: "He often helps people.", cn: "他经常帮助别人。", words: ["people"] },
    { en: "Yes, he's a very nice man.", cn: "是的，他是个非常好的人。", words: ["nice"] },
    { en: "He's a school bus driver.", cn: "他是校车司机。", words: ["driver"] },
    { en: "He takes us to school every day.", cn: "他每天送我们去学校。", words: ["every day"] },
    { en: "That's an important job too!", cn: "那个工作也很重要！", words: ["important"] },
    { en: "He cleans the community.", cn: "他打扫社区。", words: ["community"] },
    { en: "She helps a lot of people.", cn: "她帮助很多人。", words: ["people"] },
    { en: "Chen Jie is making the bed.", cn: "陈杰正在铺床。", words: ["making"] },
    { en: "They are singing songs together.", cn: "他们在一起唱歌。", words: ["singing"] },
    { en: "Everyone can help.", cn: "每个人都能帮忙。", words: ["Everyone"] },
    { en: "Miss you!", cn: "想你！", words: ["Miss"] }
  ],
  5: [
    { en: "Hello! Mark speaking.", cn: "你好！我是马克。", words: ["speaking"] },
    { en: "Hi, Mark! This is John.", cn: "嗨，马克！我是约翰。", words: ["This"] },
    { en: "What's the weather like in Sydney?", cn: "悉尼的天气怎么样？", words: ["Sydney"] },
    { en: "Well, it's quite sunny today.", cn: "噢，今天是大晴天。", words: ["sunny"] },
    { en: "Is it hot?", cn: "天热吗？", words: ["hot"] },
    { en: "No, it isn't. It's 21 degrees.", cn: "不热。（气温）21度。", words: ["degrees"] },
    { en: "It's only two degrees in Beijing.", cn: "北京只有两度。", words: ["Beijing"] },
    { en: "Wow. It's cold!", cn: "哇。真冷！", words: ["cold"] },
    { en: "It's raining now.", cn: "现在下雨了。", words: ["raining"] },
    { en: "We can't play basketball in the park.", cn: "我们不能在公园打篮球了。", words: ["basketball"] },
    { en: "It's OK. We can go to the library.", cn: "没关系。我们可以去图书馆。", words: ["library"] },
    { en: "There is a new film on.", cn: "有一部新电影上映。", words: ["film"] },
    { en: "Let's go and see it.", cn: "我们一起去看吧。", words: ["see"] }
  ],
  6: [
    { en: "Whose sweater is this, Mum?", cn: "这是谁的毛衣，妈妈？", words: ["Whose"] },
    { en: "It's your dad's.", cn: "是你爸爸的。", words: ["dad's"] },
    { en: "Put it there, please.", cn: "请把它放在那里。", words: ["there"] },
    { en: "Can I wear this new shirt today?", cn: "我今天可以穿这件新衬衫吗？", words: ["wear"] },
    { en: "Yes, but wear a coat too.", cn: "可以，但是再穿一件外套吧。", words: ["coat"] },
    { en: "It's cold and windy outside.", cn: "外面有风，很冷。", words: ["windy"] },
    { en: "Whose socks are these?", cn: "这些是谁的袜子？", words: ["socks"] },
    { en: "They're mine.", cn: "它们是我的。", words: ["mine"] },
    { en: "Sarah, which season do you like?", cn: "萨拉，你喜欢哪个季节？", words: ["season"] },
    { en: "Winter. It snows a lot.", cn: "冬天。冬天经常下雪。", words: ["snows"] },
    { en: "I can play in the snow.", cn: "我可以在雪地里玩。", words: ["snow"] },
    { en: "I like winter too.", cn: "我也喜欢冬天。", words: ["winter"] },
    { en: "There are many festivals.", cn: "（在冬天）有很多节日。", words: ["festivals"] },
    { en: "My family often get together and have fun.", cn: "我的家人经常聚在一起玩。", words: ["get together"] },
    { en: "Then spring comes again.", cn: "接着春天又来了。", words: ["spring"] },
    { en: "You like winter. You're right!", cn: "你喜欢冬天。你猜对了！", words: ["right"] }
  ]
};

// ========== 完整句子 ==========
// 定位：教材「常用表达法」原句默写，看中文写出整句
const COMPLETE_SENTENCE_DATA_G4 = {
  1: [
    { en: "What's your mother's job?", cn: "你妈妈做什么工作？" },
    { en: "She's a doctor.", cn: "她是位医生。" },
    { en: "Is this your father?", cn: "这是你爸爸吗？" },
    { en: "He's a PE teacher.", cn: "他是体育老师。" },
    { en: "He's a factory worker.", cn: "他是工厂工人。" },
    { en: "Mum and Dad are busy and tired.", cn: "爸爸妈妈又忙又累。" },
    { en: "What can we do for them?", cn: "我们能为他们做些什么？" },
    { en: "We can do some chores.", cn: "我们可以做一些家务活。" },
    { en: "I can clean the room.", cn: "我可以打扫房间。" },
    { en: "We sweep the floor.", cn: "我们扫地。" },
    { en: "I look after my sister.", cn: "我照顾我的妹妹。" }
  ],
  2: [
    { en: "Mum, I have a new friend.", cn: "妈妈，我有一个新朋友。" },
    { en: "What's your friend's name?", cn: "你的朋友叫什么名字？" },
    { en: "His name is Zhang Peng.", cn: "他叫张鹏。" },
    { en: "He's tall and strong.", cn: "他又高又壮。" },
    { en: "He's also kind.", cn: "他也很友善。" },
    { en: "He often helps me.", cn: "他经常帮助我。" },
    { en: "Who's your best friend?", cn: "谁是你最好的朋友？" },
    { en: "She's funny. She often makes me smile.", cn: "她很有趣。她经常让我开心。" },
    { en: "We play games together.", cn: "我们一起玩游戏。" },
    { en: "He often reads books with me.", cn: "他经常和我一起读书。" }
  ],
  3: [
    { en: "Good afternoon!", cn: "下午好！" },
    { en: "There is a playground.", cn: "这里有个游乐场。" },
    { en: "We all play there.", cn: "我们都在那里玩儿。" },
    { en: "There is also a nice park over there.", cn: "那边还有个漂亮的公园。" },
    { en: "There is a Taiji club.", cn: "这里有一个太极俱乐部。" },
    { en: "There are many people.", cn: "这里有好多人。" },
    { en: "There is a gym too.", cn: "这里还有一个体育馆。" },
    { en: "Great! Let's do some sports.", cn: "太棒了！我们一起做运动吧。" },
    { en: "My favourite place in my community is the museum.", cn: "在我的社区里，我最喜欢的地方就是博物馆。" }
  ],
  4: [
    { en: "Our neighbour is a firefighter.", cn: "我们的邻居是消防员。" },
    { en: "He often helps people.", cn: "他经常帮助别人。" },
    { en: "He's a school bus driver.", cn: "他是校车司机。" },
    { en: "He takes us to school every day.", cn: "他每天送我们去学校。" },
    { en: "That's an important job too!", cn: "那个工作也很重要！" },
    { en: "Chen Jie is making the bed.", cn: "陈杰正在铺床。" },
    { en: "She helps a lot of people.", cn: "她帮助很多人。" },
    { en: "Miss you!", cn: "想你！" }
  ],
  5: [
    { en: "Hello! Mark speaking.", cn: "你好！我是马克。" },
    { en: "Hi, Mark! This is John.", cn: "嗨，马克！我是约翰。" },
    { en: "What's the weather like in Sydney?", cn: "悉尼的天气怎么样？" },
    { en: "Well, it's quite sunny today.", cn: "噢，今天是大晴天。" },
    { en: "Is it hot?", cn: "天热吗？" },
    { en: "It's only two degrees in Beijing.", cn: "北京只有两度。" },
    { en: "It's raining now.", cn: "现在下雨了。" },
    { en: "We can't play basketball in the park.", cn: "我们不能在公园打篮球了。" },
    { en: "It's OK. We can go to the library.", cn: "没关系。我们可以去图书馆。" },
    { en: "There is a new film on.", cn: "有一部新电影上映。" }
  ],
  6: [
    { en: "Whose sweater is this, Mum?", cn: "这是谁的毛衣，妈妈？" },
    { en: "It's your dad's.", cn: "是你爸爸的。" },
    { en: "Can I wear this new shirt today?", cn: "我今天可以穿这件新衬衫吗？" },
    { en: "Yes, but wear a coat too.", cn: "可以，但是再穿一件外套吧。" },
    { en: "It's cold and windy outside.", cn: "外面有风，很冷。" },
    { en: "Whose socks are these?", cn: "这些是谁的袜子？" },
    { en: "They're mine.", cn: "它们是我的。" },
    { en: "Which season do you like?", cn: "你喜欢哪个季节？" },
    { en: "Winter. It snows a lot.", cn: "冬天。冬天经常下雪。" },
    { en: "I like winter too.", cn: "我也喜欢冬天。" },
    { en: "Then spring comes again.", cn: "接着春天又来了。" }
  ]
};
