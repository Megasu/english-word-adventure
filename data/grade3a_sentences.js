// 2026秋 人教PEP版 英语三年级上册 句子题库
// 来源：课本 Appendix 5「Useful expressions 常用表达法」第 89-90 页
//       + 各单元 Let's talk / Let's learn / Start to read / Reading time 正文原句
// grade3a_sentences = 三年级上册句子部分；被 data/index.js 的年级注册表（GRADES）引用
// 三份题库分别对应：看中文填词 / 表达填空 / 完整句子
// 注意：words 里的挖空词必须按「在句子中出现的先后」排列（页面按序查找并替换）

// ========== 看中文填词 ==========
// 定位：本单元核心词汇放进句子里考，看中文提示补全单词
const FILL_BLANK_DATA_G3 = {
  1: [
    { en: "What's your name?", cn: "你叫什么名字？", words: ["name"] },
    { en: "I am nice to my friends.", cn: "我对我的朋友们很好。", words: ["nice"] },
    { en: "We can share.", cn: "我们可以分享。", words: ["can", "share"] },
    { en: "I help and share.", cn: "我帮助并分享。", words: ["help", "share"] },
    { en: "I say \"Hi!\" and smile.", cn: "我说“嗨！”并微笑。", words: ["say", "smile"] },
    { en: "I listen with care.", cn: "我认真倾听。", words: ["listen"] },
    { en: "Wave your hand. Hello!", cn: "挥挥你的手。你好！", words: ["hand"] },
    { en: "Point to your ear. Listen!", cn: "指着你的耳朵。听着！", words: ["ear"] },
    { en: "Point to your mouth. Smile!", cn: "指着你的嘴。笑一笑！", words: ["mouth"] },
    { en: "Wave your arm. Bye!", cn: "挥挥你的胳膊。再见！", words: ["arm"] },
    { en: "We are good friends.", cn: "我们是好朋友。", words: ["good"] },
    { en: "Am I a good friend? Yes, I am!", cn: "我是个好朋友吗？是的，我是！", words: ["friend"] }
  ],
  2: [
    { en: "This is my grandma.", cn: "这是我的奶奶。", words: ["grandma"] },
    { en: "This is my grandpa.", cn: "这是我的爷爷。", words: ["grandpa"] },
    { en: "Look! This is my family.", cn: "看！这是我的家庭。", words: ["family"] },
    { en: "Is that your brother?", cn: "那是你弟弟吗？", words: ["brother"] },
    { en: "Is this your sister?", cn: "这是你姐姐吗？", words: ["sister"] },
    { en: "My father and mother love me.", cn: "我的爸爸和妈妈爱我。", words: ["father", "mother", "me"] },
    { en: "I have a big family.", cn: "我有一个大家庭。", words: ["have", "big"] },
    { en: "This is my mum and dad.", cn: "这是我的妈妈和爸爸。", words: ["mum", "dad"] },
    { en: "Look at the baby!", cn: "看那个婴儿！", words: ["baby"] },
    { en: "My uncle and aunt are nice.", cn: "我的叔叔和婶婶很好。", words: ["uncle", "aunt"] },
    { en: "My family is small.", cn: "我的家庭很小。", words: ["small"] },
    { en: "This is me!", cn: "这就是我！", words: ["me"] }
  ],
  3: [
    { en: "Do you have a pet?", cn: "你有宠物吗？", words: ["pet"] },
    { en: "I have a cat.", cn: "我有一只猫。", words: ["cat"] },
    { en: "Let's go to the zoo!", cn: "我们一起去动物园吧！", words: ["go", "zoo"] },
    { en: "It's a fox.", cn: "是只狐狸。", words: ["fox"] },
    { en: "It's a red panda.", cn: "是只小熊猫。", words: ["red panda"] },
    { en: "I like the dog.", cn: "我喜欢这只狗。", words: ["dog"] },
    { en: "Look at the monkey!", cn: "看那只猴子！", words: ["monkey"] },
    { en: "The giraffe is tall.", cn: "长颈鹿很高。", words: ["tall"] },
    { en: "The lion is fast.", cn: "狮子（跑得）很快。", words: ["fast"] },
    { en: "What's this? It's a fish.", cn: "这是什么？是一条鱼。", words: ["fish"] },
    { en: "This is a big elephant.", cn: "这是一头大象。", words: ["elephant"] },
    { en: "The rabbit is cute.", cn: "这只兔子很可爱。", words: ["cute"] },
    { en: "I see a bird.", cn: "我看见一只鸟。", words: ["bird"] },
    { en: "Miss White, what's that?", cn: "怀特老师，那是什么？", words: ["Miss"] }
  ],
  4: [
    { en: "Mike, do you like apples?", cn: "迈克，你喜欢苹果吗？", words: ["like"] },
    { en: "Do you like the farm?", cn: "你们喜欢农场吗？", words: ["farm"] },
    { en: "I like the fresh air.", cn: "我喜欢新鲜的空气。", words: ["air"] },
    { en: "We can plant new trees.", cn: "我们可以新种些树。", words: ["plant", "new"] },
    { en: "Plants can give us many things.", cn: "植物能提供很多东西。", words: ["give"] },
    { en: "Plants need water.", cn: "植物需要水。", words: ["need", "water"] },
    { en: "This is my school garden.", cn: "这是我学校的花园。", words: ["school", "garden"] },
    { en: "Look at the apple tree.", cn: "看那棵苹果树。", words: ["apple", "tree"] },
    { en: "Plants need the sun.", cn: "植物需要阳光。", words: ["sun"] },
    { en: "I give them water.", cn: "我给它们浇水。", words: ["give", "them"] },
    { en: "We can water the grass.", cn: "我们可以给草浇水。", words: ["water"] }
  ],
  5: [
    { en: "What colour is it?", cn: "它是什么颜色？", words: ["colour"] },
    { en: "It's orange.", cn: "它是橙红色。", words: ["orange"] },
    { en: "Red and blue make purple.", cn: "红色加蓝色变成紫色。", words: ["make"] },
    { en: "I like red and pink.", cn: "我喜欢红色和粉色。", words: ["red", "pink"] },
    { en: "Let's draw some purple and brown birds.", cn: "我们一起画一些紫色和棕色的鸟吧。", words: ["draw", "some"] },
    { en: "The sea is blue.", cn: "大海是蓝色的。", words: ["sea", "blue"] },
    { en: "I see a brown bear.", cn: "我看见一只棕熊。", words: ["brown", "bear"] },
    { en: "The duck is yellow.", cn: "鸭子是黄色的。", words: ["duck", "yellow"] },
    { en: "The panda is black and white.", cn: "熊猫是黑白色的。", words: ["black", "white"] },
    { en: "Grass is green.", cn: "草是绿色的。", words: ["green"] }
  ],
  6: [
    { en: "How old are you?", cn: "你几岁了？", words: ["old"] },
    { en: "I'm five years old.", cn: "我五岁了。", words: ["five", "old"] },
    { en: "How many apples? Two.", cn: "几个苹果？两个。", words: ["Two"] },
    { en: "That's ten yuan, please.", cn: "（共）十元，谢谢。", words: ["ten"] },
    { en: "It's seven o'clock. Hurry!", cn: "七点了。快点！", words: ["seven", "o'clock"] },
    { en: "I eat the cake.", cn: "我吃蛋糕。", words: ["eat", "cake"] },
    { en: "One more cut for the dog.", cn: "再切一块给小狗。", words: ["One", "cut"] },
    { en: "I'm nine years old.", cn: "我九岁了。", words: ["nine"] },
    { en: "I have six yuan.", cn: "我有六元钱。", words: ["six"] },
    { en: "Three cuts. Let's eat!", cn: "切三块。我们吃吧！", words: ["eat"] }
  ]
};

// ========== 表达填空 ==========
// 定位：教材「常用表达法」交际用语，挖掉关键词，看中文补全
const EXPRESSION_FILL_DATA_G3 = {
  1: [
    { en: "Hello! I'm Mike Black.", cn: "你好！我是迈克·布莱克。", words: ["I'm"] },
    { en: "Hi! My name is Wu Binbin.", cn: "嗨！我叫吴斌斌。", words: ["name"] },
    { en: "Nice to meet you.", cn: "见到你很高兴。", words: ["meet"] },
    { en: "Nice to meet you too.", cn: "见到你（我）也很高兴。", words: ["too"] },
    { en: "We can share.", cn: "我们可以分享。", words: ["share"] },
    { en: "It's OK, Chen Jie.", cn: "没关系，陈杰。", words: ["OK"] },
    { en: "I am nice to my friends.", cn: "我对我的朋友们很好。", words: ["nice"] },
    { en: "I listen and say \"Hi!\"", cn: "我倾听并说“嗨！”", words: ["listen", "say"] },
    { en: "Oh no!", cn: "噢，不！", words: ["no"] }
  ],
  2: [
    { en: "This is my grandma.", cn: "这是我的奶奶。", words: ["grandma"] },
    { en: "Look! This is my family.", cn: "看！这是我的家庭。", words: ["family"] },
    { en: "Is that your brother?", cn: "那是你弟弟吗？", words: ["brother"] },
    { en: "Yes, it is.", cn: "对，是的。", words: ["Yes"] },
    { en: "They love each other.", cn: "他们相互关爱。", words: ["love"] },
    { en: "This is my mum and dad.", cn: "这是我的妈妈和爸爸。", words: ["mum", "dad"] },
    { en: "I have a big family.", cn: "我有一个大家庭。", words: ["big"] },
    { en: "I have a small family.", cn: "我有一个小家庭。", words: ["small"] },
    { en: "I play with my brother.", cn: "我和我弟弟一起玩。", words: ["play"] },
    { en: "Mum! Dad! This is my friend, Sarah Miller.", cn: "妈妈！爸爸！这是我的朋友，萨拉·米勒。", words: ["friend"] }
  ],
  3: [
    { en: "Good morning, Mike!", cn: "早上好，迈克！", words: ["morning"] },
    { en: "Good morning! Come in.", cn: "早上好！进来吧。", words: ["Come", "in"] },
    { en: "Do you have a pet?", cn: "你有宠物吗？", words: ["have"] },
    { en: "No, I don't.", cn: "不，我没有。", words: ["don't"] },
    { en: "Yes, I do. I have a cat.", cn: "是的，我有。我有一只猫。", words: ["do"] },
    { en: "I like your dog.", cn: "我喜欢你的狗。", words: ["like"] },
    { en: "Let's go to the zoo!", cn: "我们一起去动物园吧！", words: ["zoo"] },
    { en: "What's this?", cn: "这是什么？", words: ["this"] },
    { en: "It's a fox.", cn: "是只狐狸。", words: ["fox"] },
    { en: "Miss White, what's that?", cn: "怀特老师，那是什么？", words: ["that"] },
    { en: "It's a red panda.", cn: "是只小熊猫。", words: ["panda"] }
  ],
  4: [
    { en: "Mike, do you like apples?", cn: "迈克，你喜欢苹果吗？", words: ["like", "apples"] },
    { en: "No, I don't. I like bananas.", cn: "不，我不喜欢。我喜欢香蕉。", words: ["bananas"] },
    { en: "Yes, I do. And you?", cn: "是的，我喜欢。你呢？", words: ["you"] },
    { en: "Do you like the farm?", cn: "你们喜欢农场吗？", words: ["farm"] },
    { en: "I like the fresh air.", cn: "我喜欢新鲜的空气。", words: ["fresh"] },
    { en: "We can plant new trees.", cn: "我们可以新种些树。", words: ["new"] },
    { en: "Plants can give us many things.", cn: "植物能提供很多东西。", words: ["many"] },
    { en: "The school gardens need help.", cn: "学校的花园需要帮助。", words: ["help"] },
    { en: "We can water the flowers.", cn: "我们可以给花浇水。", words: ["flowers"] },
    { en: "Let's grow an apple tree!", cn: "我们种一棵苹果树吧！", words: ["tree"] }
  ],
  5: [
    { en: "What colour is it?", cn: "它是什么颜色？", words: ["colour"] },
    { en: "It's orange.", cn: "它是橙红色。", words: ["orange"] },
    { en: "Look! Red and blue make purple.", cn: "看！红色加蓝色变成紫色。", words: ["purple"] },
    { en: "What colours do you like?", cn: "你喜欢什么颜色？", words: ["colours"] },
    { en: "I like red and pink.", cn: "我喜欢红色和粉色。", words: ["pink"] },
    { en: "Let's draw some purple and brown birds.", cn: "我们一起画一些紫色和棕色的鸟吧。", words: ["brown"] },
    { en: "I see a yellow duck.", cn: "我看见一只黄色的鸭子。", words: ["yellow"] },
    { en: "Blue and yellow make green.", cn: "蓝色加黄色变成绿色。", words: ["green"] },
    { en: "Use again!", cn: "再次利用！", words: ["again"] },
    { en: "Be careful!", cn: "小心！", words: ["careful"] }
  ],
  6: [
    { en: "How old are you?", cn: "你几岁了？", words: ["old"] },
    { en: "I'm five years old.", cn: "我五岁了。", words: ["years"] },
    { en: "Me too.", cn: "我也是。", words: ["too"] },
    { en: "How many apples?", cn: "几个苹果？", words: ["many"] },
    { en: "Great! Let's go to the shop!", cn: "好极了！我们一起去商店吧！", words: ["shop"] },
    { en: "I have ten yuan.", cn: "我有十元钱。", words: ["ten"] },
    { en: "That's ten yuan, please.", cn: "（共）十元，谢谢。", words: ["please"] },
    { en: "Here you are.", cn: "给您。", words: ["Here"] },
    { en: "It's seven o'clock. Hurry!", cn: "七点了。快点！", words: ["Hurry"] },
    { en: "Happy birthday!", cn: "生日快乐！", words: ["birthday"] },
    { en: "Oh, one more cut for the dog.", cn: "噢，再切一块给小狗。", words: ["more"] },
    { en: "Dogs don't eat cake!", cn: "小狗不吃蛋糕！", words: ["cake"] }
  ]
};

// ========== 完整句子 ==========
// 定位：教材「常用表达法」原句默写，看中文写出整句
const COMPLETE_SENTENCE_DATA_G3 = {
  1: [
    { en: "Hello! I'm Mike Black.", cn: "你好！我是迈克·布莱克。" },
    { en: "Hi! My name is Wu Binbin.", cn: "嗨！我叫吴斌斌。" },
    { en: "Nice to meet you.", cn: "见到你很高兴。" },
    { en: "Nice to meet you too.", cn: "见到你（我）也很高兴。" },
    { en: "We can share.", cn: "我们可以分享。" },
    { en: "It's OK, Chen Jie.", cn: "没关系，陈杰。" },
    { en: "I am nice to my friends.", cn: "我对我的朋友们很好。" },
    { en: "Thank you, Chen Jie.", cn: "谢谢你，陈杰。" },
    { en: "Oh no!", cn: "噢，不！" }
  ],
  2: [
    { en: "This is my grandma.", cn: "这是我的奶奶。" },
    { en: "This is my mum.", cn: "这是我妈妈。" },
    { en: "Look! This is my family.", cn: "看！这是我的家庭。" },
    { en: "Is that your brother?", cn: "那是你弟弟吗？" },
    { en: "Yes, it is.", cn: "对，是的。" },
    { en: "No, it's my cousin.", cn: "不，那是我堂（表）兄弟／姐妹。" },
    { en: "They love each other.", cn: "他们相互关爱。" },
    { en: "I have a big family.", cn: "我有一个大家庭。" }
  ],
  3: [
    { en: "Good morning, Mike!", cn: "早上好，迈克！" },
    { en: "Do you have a pet?", cn: "你有宠物吗？" },
    { en: "No, I don't.", cn: "不，我没有。" },
    { en: "Yes, I do. I have a cat.", cn: "是的，我有。我有一只猫。" },
    { en: "Let's go to the zoo!", cn: "我们一起去动物园吧！" },
    { en: "What's this?", cn: "这是什么？" },
    { en: "It's a fox.", cn: "是只狐狸。" },
    { en: "It's a red panda.", cn: "是只小熊猫。" },
    { en: "Miss White, what's that?", cn: "怀特老师，那是什么？" }
  ],
  4: [
    { en: "Mike, do you like apples?", cn: "迈克，你喜欢苹果吗？" },
    { en: "Yes, I do. And you?", cn: "是的，我喜欢。你呢？" },
    { en: "No, I don't.", cn: "不，我不喜欢。" },
    { en: "Do you like the farm?", cn: "你们喜欢农场吗？" },
    { en: "I like the fresh air.", cn: "我喜欢新鲜的空气。" },
    { en: "We can plant new trees.", cn: "我们可以新种些树。" },
    { en: "Plants can give us many things.", cn: "植物能提供很多东西。" }
  ],
  5: [
    { en: "What colour is it?", cn: "它是什么颜色？" },
    { en: "It's orange.", cn: "它是橙红色。" },
    { en: "Red and blue make purple.", cn: "红色加蓝色是紫色。" },
    { en: "What colours do you like?", cn: "你喜欢什么颜色？" },
    { en: "I like red and pink.", cn: "我喜欢红色和粉色。" },
    { en: "Let's draw some purple and brown birds.", cn: "我们一起画一些紫色和棕色的鸟吧。" },
    { en: "Use again!", cn: "再次利用！" },
    { en: "Be careful!", cn: "小心！" }
  ],
  6: [
    { en: "How old are you?", cn: "你几岁了？" },
    { en: "I'm five years old.", cn: "我五岁了。" },
    { en: "Me too.", cn: "我也是。" },
    { en: "How many apples?", cn: "几个苹果？" },
    { en: "Two.", cn: "两个。" },
    { en: "That's ten yuan, please.", cn: "（共）十元，谢谢。" },
    { en: "Here you are.", cn: "给您。" },
    { en: "It's seven o'clock. Hurry!", cn: "七点了。快点！" },
    { en: "Happy birthday!", cn: "生日快乐！" }
  ]
};
