// 2026秋 人教PEP版 英语五年级上册 句子题库
// 来源：课本 Appendix 4「Useful expressions 常用表达法」第 87-88 页
//       + 各单元 Let's talk / Let's learn / Read and write 正文原句
// grade5a_sentences = 五年级上册句子部分；被 data/index.js 的年级注册表（GRADES）引用
// 三份题库分别对应：看中文填词 / 表达填空 / 完整句子
// 注意：words 里的挖空词必须按「在句子中出现的先后」排列（页面按序查找并替换）

// ========== 看中文填词 ==========
// 定位：本单元核心词汇放进句子里考，看中文提示补全单词
const FILL_BLANK_DATA_G5 = {
  1: [
    { en: "Our football team needs more players.", cn: "我们的足球队需要更多队员。", words: ["team", "players"] },
    { en: "He's from Australia.", cn: "他来自澳大利亚。", words: ["Australia"] },
    { en: "Chen Jie is lovely.", cn: "陈杰很可爱。", words: ["lovely"] },
    { en: "She is also clever.", cn: "她也很聪明。", words: ["clever"] },
    { en: "She is young.", cn: "她很年轻。", words: ["young"] },
    { en: "Is she hard-working?", cn: "她勤奋吗？", words: ["hard-working"] },
    { en: "I like science.", cn: "我喜欢科学。", words: ["science"] },
    { en: "I can make a robot.", cn: "我能制作机器人。", words: ["robot"] },
    { en: "He can jump very high.", cn: "他能跳得很高。", words: ["jump"] },
    { en: "We play with a rope.", cn: "我们玩跳绳。", words: ["rope"] },
    { en: "She can play the piano.", cn: "她会弹钢琴。", words: ["piano"] },
    { en: "I can play chess.", cn: "我会下国际象棋。", words: ["chess"] },
    { en: "He stands in front of the class.", cn: "他站在全班前面。", words: ["front"] },
    { en: "Maths is not easy.", cn: "数学不容易。", words: ["easy"] },
    { en: "She is a singing star.", cn: "她是歌唱明星。", words: ["star"] },
    { en: "The show is wonderful.", cn: "表演很精彩。", words: ["wonderful"] },
    { en: "He can help him.", cn: "他可以帮助他。", words: ["him"] }
  ],
  2: [
    { en: "You look sad.", cn: "你看起来不开心。", words: ["sad"] },
    { en: "What's the matter?", cn: "怎么回事？", words: ["matter"] },
    { en: "It's about our school project.", cn: "是关于我们学校的项目。", words: ["project"] },
    { en: "I want to go to the children's centre.", cn: "我想去儿童中心。", words: ["centre"] },
    { en: "So you don't agree with each other?", cn: "所以你俩意见不一致？", words: ["agree"] },
    { en: "We have to finish our project by Monday.", cn: "我们必须在星期一之前完成项目。", words: ["finish", "Monday"] },
    { en: "I'm so worried!", cn: "我很担心！", words: ["worried"] },
    { en: "Why not do both?", cn: "为什么不两个活动都做呢？", words: ["both"] },
    { en: "He's excited.", cn: "他很激动。", words: ["excited"] },
    { en: "Fido does the wrong thing.", cn: "菲多做了错事。", words: ["wrong"] },
    { en: "Mike is angry.", cn: "迈克很生气。", words: ["angry"] },
    { en: "Are you afraid?", cn: "你害怕吗？", words: ["afraid"] },
    { en: "My parent is a teacher.", cn: "我的父亲／母亲是老师。", words: ["parent"] },
    { en: "I want to ask you a question.", cn: "我想问你一个问题。", words: ["ask"] },
    { en: "We will move to a new house.", cn: "我们要搬到新房子。", words: ["move"] },
    { en: "This book is yours.", cn: "这本书是你的。", words: ["yours"] }
  ],
  3: [
    { en: "What do you have on Wednesdays?", cn: "星期三你有什么课？", words: ["Wednesdays"] },
    { en: "What's your favourite subject?", cn: "你最喜欢什么科目？", words: ["subject"] },
    { en: "I have music class on Tuesday.", cn: "我星期二有音乐课。", words: ["Tuesday"] },
    { en: "We have PE on Friday.", cn: "我们星期五有体育课。", words: ["Friday"] },
    { en: "Because I have my taijiquan class!", cn: "因为我有太极拳课！", words: ["Because"] },
    { en: "I have art class on Thursday.", cn: "我星期四有美术课。", words: ["Thursday"] },
    { en: "School starts at eight.", cn: "学校八点开始上课。", words: ["starts"] },
    { en: "What do you usually do at the weekend?", cn: "周末你通常做什么？", words: ["usually", "weekend"] },
    { en: "Sometimes I play Chinese chess with my father.", cn: "有时我和爸爸下中国象棋。", words: ["Sometimes"] },
    { en: "I do my homework on Saturdays.", cn: "我星期六做作业。", words: ["Saturdays"] },
    { en: "I usually have pipa lessons on Sundays.", cn: "我通常星期日上琵琶课。", words: ["lessons"] },
    { en: "I watch TV in the evening.", cn: "我晚上看电视。", words: ["evening"] },
    { en: "Please answer my question.", cn: "请回答我的问题。", words: ["answer"] },
    { en: "I can play ping-pong.", cn: "我会打乒乓球。", words: ["ping-pong"] },
    { en: "I go to bed at night.", cn: "我晚上睡觉。", words: ["night"] },
    { en: "I visit my grandparents on Sunday.", cn: "我星期日去看望祖父母。", words: ["visit", "grandparents"] },
    { en: "Please reply to my letter.", cn: "请回复我的信。", words: ["reply"] }
  ],
  4: [
    { en: "He has to stay at home.", cn: "他不得不待在家里。", words: ["stay"] },
    { en: "We should eat healthy food.", cn: "我们应该吃健康的食物。", words: ["should"] },
    { en: "It's flu season now.", cn: "现在是流感季。", words: ["flu"] },
    { en: "What else should we do?", cn: "我们还应该做什么？", words: ["else"] },
    { en: "We should exercise every day.", cn: "我们应该每天锻炼。", words: ["exercise"] },
    { en: "Please drink enough water.", cn: "请喝足够的水。", words: ["enough"] },
    { en: "If you don't feel well, you should see a doctor.", cn: "如果你感觉不舒服，应该去看医生。", words: ["If"] },
    { en: "It's a good habit.", cn: "这是个好习惯。", words: ["habit"] },
    { en: "My favourite show is on TV.", cn: "我最喜欢的节目在电视上播。", words: ["show"] },
    { en: "Can I play on Mum's phone?", cn: "我可以玩妈妈的手机吗？", words: ["phone"] },
    { en: "You should rest at home.", cn: "你应该在家休息。", words: ["rest"] },
    { en: "We should take care of our eyes.", cn: "我们应该爱护眼睛。", words: ["take care of"] },
    { en: "Let me check your homework.", cn: "让我检查一下你的作业。", words: ["check"] },
    { en: "Eat less sweet food.", cn: "少吃甜食。", words: ["less"] },
    { en: "I brush my teeth twice a day.", cn: "我一天刷两次牙。", words: ["brush", "twice"] },
    { en: "Brush your teeth every day.", cn: "每天刷牙。", words: ["teeth"] },
    { en: "I play football for an hour.", cn: "我踢一小时足球。", words: ["hour"] },
    { en: "Are you free this afternoon?", cn: "你今天下午有空吗？", words: ["free"] },
    { en: "Then you will feel better.", cn: "那么你感觉会好些。", words: ["Then"] }
  ],
  5: [
    { en: "Mum, I'm hungry.", cn: "妈妈，我饿了。", words: ["hungry"] },
    { en: "I'd like beef and rice.", cn: "我想吃牛肉和米饭。", words: ["beef"] },
    { en: "Can I have some ice cream, please?", cn: "我可以吃些冰激凌吗？", words: ["ice cream"] },
    { en: "Yes, but just a little.", cn: "可以，但只能吃一点。", words: ["little"] },
    { en: "I'd like some dumplings.", cn: "我想吃饺子。", words: ["dumplings"] },
    { en: "He wants some green tea too.", cn: "他还想要一些绿茶。", words: ["tea"] },
    { en: "I'd like a hamburger.", cn: "我想要一个汉堡包。", words: ["hamburger"] },
    { en: "Mrs Wang is our teacher.", cn: "王太太是我们的老师。", words: ["Mrs"] },
    { en: "Where does your coconut come from?", cn: "你的椰子是哪里的？", words: ["coconut"] },
    { en: "The book is very interesting.", cn: "这本书很有趣。", words: ["interesting"] },
    { en: "This is a lotus seed.", cn: "这是一颗莲子。", words: ["seed"] },
    { en: "Don't pull the plant.", cn: "不要拔这棵植物。", words: ["pull"] },
    { en: "Pull up the carrot.", cn: "把胡萝卜拔出来。", words: ["Pull up"] },
    { en: "The stem is green.", cn: "茎是绿色的。", words: ["stem"] },
    { en: "The root is long.", cn: "根很长。", words: ["root"] },
    { en: "The lotus is beautiful.", cn: "莲花很美。", words: ["lotus"] },
    { en: "There is a lake in the park.", cn: "公园里有一个湖。", words: ["lake"] },
    { en: "People all over the world eat rice.", cn: "全世界的人都吃米饭。", words: ["world"] },
    { en: "The table is round.", cn: "这张桌子是圆的。", words: ["round"] },
    { en: "We eat different food.", cn: "我们吃不同的食物。", words: ["different"] },
    { en: "It's a good way to stay healthy.", cn: "这是保持健康的好方法。", words: ["way"] }
  ],
  6: [
    { en: "There is a long river in the park.", cn: "公园里有一条长长的河。", words: ["river"] },
    { en: "We are in a nature park.", cn: "我们在一个自然公园里。", words: ["nature"] },
    { en: "Is there a waterfall in the forest?", cn: "森林里有瀑布吗？", words: ["waterfall", "forest"] },
    { en: "Are there any famous mountains?", cn: "有著名的山吗？", words: ["famous"] },
    { en: "There are some beautiful mountains.", cn: "有一些美丽的山。", words: ["mountains"] },
    { en: "Everything is green in spring.", cn: "春天一切都是绿色的。", words: ["Everything"] },
    { en: "The wind is strong.", cn: "风很大。", words: ["wind"] },
    { en: "We have a school trip.", cn: "我们有一次学校旅行。", words: ["trip"] },
    { en: "It is dangerous there.", cn: "那里很危险。", words: ["dangerous"] },
    { en: "There will be heavy rain in the afternoon.", cn: "今天下午将有大雨。", words: ["heavy"] },
    { en: "We stay in a hotel.", cn: "我们住在旅馆里。", words: ["hotel"] },
    { en: "Please close the door.", cn: "请关门。", words: ["close"] },
    { en: "Take your umbrella.", cn: "带上你的雨伞。", words: ["umbrella"] },
    { en: "I wear a raincoat on rainy days.", cn: "下雨天我穿雨衣。", words: ["raincoat"] },
    { en: "Don't worry!", cn: "别担心！", words: ["worry"] },
    { en: "It's a fine day today.", cn: "今天是晴天。", words: ["fine"] },
    { en: "There is thick fog.", cn: "有浓雾。", words: ["fog"] },
    { en: "The flood is very bad.", cn: "洪水很严重。", words: ["flood"] },
    { en: "Be careful with fire.", cn: "小心火。", words: ["fire"] },
    { en: "I know this place.", cn: "我知道这个地方。", words: ["know"] },
    { en: "Wash your hands before dinner.", cn: "饭前洗手。", words: ["before"] },
    { en: "Let's go hiking on Sunday.", cn: "我们星期日去徒步旅行吧。", words: ["go hiking"] },
    { en: "Please bring your raincoat.", cn: "请带上你的雨衣。", words: ["bring"] }
  ]
};

// ========== 表达填空 ==========
// 定位：教材「常用表达法」交际用语，挖掉关键词，看中文补全
const EXPRESSION_FILL_DATA_G5 = {
  1: [
    { en: "What's he like?", cn: "他什么样？", words: ["like"] },
    { en: "He's tall and strong.", cn: "他又高又壮。", words: ["tall"] },
    { en: "Is he good at football?", cn: "他擅长踢足球吗？", words: ["good"] },
    { en: "Yes, I think he is.", cn: "是的，我想他擅长。", words: ["think"] },
    { en: "He can run very fast.", cn: "他跑得很快。", words: ["fast"] },
    { en: "Our football team needs more players.", cn: "我们的足球队需要更多队员。", words: ["players"] },
    { en: "Oliver can't speak Chinese.", cn: "奥利弗不会说中文。", words: ["speak"] },
    { en: "Would you like to help him?", cn: "你愿意帮助他吗？", words: ["help"] },
    { en: "Why not do both?", cn: "为什么不两个活动都做呢？", words: ["both"] },
    { en: "It's important to listen to each other.", cn: "听取彼此的想法很重要。", words: ["important"] },
    { en: "She's lovely and clever.", cn: "她可爱又聪明。", words: ["clever"] },
    { en: "He's from Australia.", cn: "他来自澳大利亚。", words: ["Australia"] }
  ],
  2: [
    { en: "Hi, Mike. You look sad.", cn: "嗨，迈克。你看起来不开心。", words: ["sad"] },
    { en: "What's the matter?", cn: "怎么回事？", words: ["matter"] },
    { en: "It's about our school project.", cn: "是关于我们学校的项目。", words: ["project"] },
    { en: "John wants to go to the children's centre.", cn: "约翰想去儿童中心。", words: ["centre"] },
    { en: "So you don't agree with each other?", cn: "所以你俩意见不一致？", words: ["agree"] },
    { en: "We have to finish our project by Monday.", cn: "我们必须在星期一前完成项目。", words: ["Monday"] },
    { en: "I'm so worried!", cn: "我很担心！", words: ["worried"] },
    { en: "Why not do both? I can help.", cn: "为什么不两个都做呢？我可以帮忙。", words: ["both"] },
    { en: "That's a good idea!", cn: "那是个好主意！", words: ["idea"] },
    { en: "My brother doesn't agree with me.", cn: "我哥哥不同意我的意见。", words: ["agree"] },
    { en: "It is raining. I can't play football.", cn: "下雨了。我不能踢足球。", words: ["raining"] },
    { en: "I'm sorry. You can try again.", cn: "很遗憾。你可以再试一次。", words: ["again"] }
  ],
  3: [
    { en: "What's your favourite day at school?", cn: "你最喜欢上学日中的哪一天？", words: ["favourite"] },
    { en: "What do you have on Wednesdays?", cn: "星期三你有什么课？", words: ["have"] },
    { en: "I have Chinese, maths, music and PE.", cn: "我有语文课、数学课、音乐和体育课。", words: ["music"] },
    { en: "Maths is not easy.", cn: "数学不容易。", words: ["easy"] },
    { en: "Is music your favourite subject?", cn: "音乐是你最喜欢的科目吗？", words: ["subject"] },
    { en: "I really like singing.", cn: "我真的很喜欢唱歌。", words: ["singing"] },
    { en: "Because I have my taijiquan class!", cn: "因为我有太极拳课！", words: ["taijiquan"] },
    { en: "What do you usually do at the weekend?", cn: "周末你通常做什么？", words: ["weekend"] },
    { en: "I often play football.", cn: "我经常踢足球。", words: ["often"] },
    { en: "Sometimes I play Chinese chess with my father.", cn: "有时我和爸爸下中国象棋。", words: ["Sometimes"] },
    { en: "My mother works at the weekend.", cn: "我妈妈周末工作。", words: ["works"] },
    { en: "Does your mother work on Saturdays and Sundays?", cn: "你妈妈周六周日都工作吗？", words: ["Saturdays", "Sundays"] },
    { en: "I usually have pipa lessons on Sundays.", cn: "我通常星期日上琵琶课。", words: ["usually"] },
    { en: "What can you do for the festival?", cn: "你能为科学艺术节做什么？", words: ["festival"] },
    { en: "I can make a robot.", cn: "我能制作机器人。", words: ["robot"] },
    { en: "Can you make robots, Sarah?", cn: "萨拉，你能做机器人吗？", words: ["make"] }
  ],
  4: [
    { en: "How can we all stay healthy?", cn: "我们怎样才能保持健康？", words: ["healthy"] },
    { en: "He has to stay at home.", cn: "他不得不待在家里。", words: ["stay"] },
    { en: "It's flu season now.", cn: "现在是流感季。", words: ["flu"] },
    { en: "We should eat healthy food.", cn: "我们应该吃健康的食物。", words: ["should"] },
    { en: "We should exercise every day.", cn: "我们应该每天锻炼。", words: ["exercise"] },
    { en: "Please drink enough water.", cn: "请喝足够的水。", words: ["enough"] },
    { en: "We should also get enough sleep.", cn: "我们还应该有足够的睡眠。", words: ["sleep"] },
    { en: "And what else?", cn: "还有什么？", words: ["else"] },
    { en: "If you don't feel well, you should see a doctor.", cn: "如果感觉不舒服，你应该去看医生。", words: ["doctor"] },
    { en: "You should wash your hands.", cn: "你应该洗手。", words: ["wash"] },
    { en: "Can I play on Mum's phone?", cn: "我可以玩妈妈的手机吗？", words: ["phone"] },
    { en: "No. You shouldn't play on a phone so often.", cn: "不行。你不应总是玩手机。", words: ["shouldn't"] },
    { en: "It's a good habit.", cn: "这是个好习惯。", words: ["habit"] }
  ],
  5: [
    { en: "Mum, I'm hungry.", cn: "妈妈，我饿了。", words: ["hungry"] },
    { en: "What would you like to eat?", cn: "你想吃些什么？", words: ["eat"] },
    { en: "I'd like beef and rice.", cn: "我想吃牛肉和米饭。", words: ["beef"] },
    { en: "No problem.", cn: "没问题。", words: ["problem"] },
    { en: "Would you like some chicken soup too?", cn: "你还想喝鸡汤吗？", words: ["soup"] },
    { en: "Yes, please.", cn: "是的，请（给我）。", words: ["please"] },
    { en: "Vegetables are good for you.", cn: "蔬菜对你有好处。", words: ["Vegetables"] },
    { en: "Can I have some ice cream, please?", cn: "我可以吃些冰激凌吗？", words: ["ice cream"] },
    { en: "Yes, but just a little.", cn: "可以，但只能吃一点。", words: ["little"] },
    { en: "Where does your coconut come from?", cn: "你的椰子是哪里的？", words: ["come from"] },
    { en: "Hainan!", cn: "海南！", words: ["Hainan"] },
    { en: "What would you like to drink?", cn: "你想喝些什么？", words: ["drink"] },
    { en: "I'd like a hamburger and some ice cream.", cn: "我想要一个汉堡包和一些冰激凌。", words: ["hamburger"] }
  ],
  6: [
    { en: "That lake is really lovely!", cn: "那个湖真美！", words: ["lake"] },
    { en: "There are also many rivers in the nature park.", cn: "这个自然公园还有许多河流。", words: ["rivers"] },
    { en: "Is there a waterfall in the forest?", cn: "森林里有瀑布吗？", words: ["waterfall"] },
    { en: "Yes, there is.", cn: "是的，这里有。", words: ["Yes"] },
    { en: "Are there any famous mountains in the nature park?", cn: "自然公园有名山吗？", words: ["famous"] },
    { en: "Yes, there are.", cn: "是的，这里有。", words: ["Yes"] },
    { en: "There are many flowers too.", cn: "还有很多花。", words: ["flowers"] },
    { en: "There will be heavy rain in the afternoon too.", cn: "今天下午还将有大雨。", words: ["heavy"] },
    { en: "Are there any mountains in the nature park?", cn: "自然公园里有山吗？", words: ["mountains"] },
    { en: "We'll visit one tomorrow.", cn: "我们明天会参观一座。", words: ["tomorrow"] },
    { en: "There is a big forest in the park.", cn: "公园里有一大片森林。", words: ["forest"] }
  ]
};

// ========== 完整句子 ==========
// 定位：教材「常用表达法」原句默写，看中文写出整句
const COMPLETE_SENTENCE_DATA_G5 = {
  1: [
    { en: "What's he like?", cn: "他什么样？" },
    { en: "He's tall and strong.", cn: "他又高又壮。" },
    { en: "Is he good at football?", cn: "他擅长踢足球吗？" },
    { en: "Yes, I think he is.", cn: "是的，我想他擅长。" },
    { en: "Why not do both?", cn: "为什么不两个活动都做呢？" },
    { en: "It's important to listen to each other.", cn: "听取彼此的想法很重要。" },
    { en: "He's from Australia.", cn: "他来自澳大利亚。" },
    { en: "She's lovely and clever.", cn: "她可爱又聪明。" }
  ],
  2: [
    { en: "Hi, Mike. You look sad.", cn: "嗨，迈克。你看起来不开心。" },
    { en: "What's the matter?", cn: "怎么回事？" },
    { en: "It's about our school project.", cn: "是关于我们学校的项目。" },
    { en: "So you don't agree with each other?", cn: "所以你俩意见不一致？" },
    { en: "Why not do both? I can help.", cn: "为什么不两个都做呢？我可以帮忙。" },
    { en: "I'm so worried!", cn: "我很担心！" },
    { en: "That's a good idea!", cn: "那是个好主意！" }
  ],
  3: [
    { en: "What's your favourite day at school?", cn: "你最喜欢上学日中的哪一天？" },
    { en: "What do you have on Wednesdays?", cn: "星期三你有什么课？" },
    { en: "I have Chinese, maths, music and PE.", cn: "我有语文课、数学课、音乐和体育课。" },
    { en: "Is music your favourite subject?", cn: "音乐是你最喜欢的科目吗？" },
    { en: "What do you usually do at the weekend, children?", cn: "孩子们，周末你们通常做什么？" },
    { en: "I often play football.", cn: "我经常踢足球。" },
    { en: "Sometimes I play Chinese chess with my father.", cn: "有时我和爸爸下中国象棋。" },
    { en: "Does your mother work on both Saturdays and Sundays?", cn: "你妈妈周六周日都工作吗？" },
    { en: "Yes, she does.", cn: "是的，她（周末两天）都工作。" },
    { en: "What can you do for the festival?", cn: "你能为科学艺术节做什么？" },
    { en: "I can make a robot.", cn: "我能制作机器人。" },
    { en: "No, I can't.", cn: "不，我不能。" }
  ],
  4: [
    { en: "How can we all stay healthy?", cn: "我们怎样才能保持健康？" },
    { en: "We should eat healthy food.", cn: "我们应该吃健康的食物。" },
    { en: "We should exercise every day.", cn: "我们应该每天锻炼。" },
    { en: "We should also get enough sleep.", cn: "我们还应该有足够的睡眠。" },
    { en: "Can I play on Mum's phone?", cn: "我可以玩玩妈妈的手机吗？" },
    { en: "No. You shouldn't play on a phone so often.", cn: "不行。你不应总是玩手机。" }
  ],
  5: [
    { en: "What would you like to eat?", cn: "你想吃些什么？" },
    { en: "I'd like beef and rice.", cn: "我想吃牛肉和米饭。" },
    { en: "Would you like some chicken soup too?", cn: "你还想喝鸡汤吗？" },
    { en: "Yes, please.", cn: "是的，请（给我鸡汤）。" },
    { en: "Where does your coconut come from?", cn: "你的椰子是哪里的？" },
    { en: "Hainan!", cn: "海南！" },
    { en: "Vegetables are good for you.", cn: "蔬菜对你有好处。" }
  ],
  6: [
    { en: "There are also many rivers in the nature park.", cn: "这个自然公园还有许多河流。" },
    { en: "Is there a waterfall in the forest?", cn: "森林里有瀑布吗？" },
    { en: "Yes, there is.", cn: "是的，这里有。" },
    { en: "Are there any famous mountains in the nature park?", cn: "自然公园有名山吗？" },
    { en: "Yes, there are.", cn: "是的，这里有。" },
    { en: "There will be heavy rain in the afternoon too.", cn: "今天下午还将有大雨。" }
  ]
};
