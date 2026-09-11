// 数据层核心逻辑：年级注册表、存档、判题辅助
// 依赖：先加载 data/grade3a.js、data/grade6a.js，最后加载本文件

// 工具函数：打乱数组
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 工具函数：从数组中随机取 n 个
function sampleArray(arr, n) {
  return shuffleArray(arr).slice(0, n);
}

// ========== 环节定义 ==========
// 每个环节对应一个页面；题库缺失的环节会被自动跳过
const SECTION_META = [
  { key: "spelling",  name: "拼写测试", emoji: "📝", needData: false },
  { key: "matching",  name: "英中配对", emoji: "🔗", needData: false },
  { key: "fillblank", name: "看中文填词", emoji: "✏️", needData: true },
  { key: "expression",name: "表达填空", emoji: "💬", needData: true },
  { key: "complete",  name: "完整句子", emoji: "📜", needData: true }
];

// ========== 年级/教材注册表 ==========
// 新增年级只需在这里加一项：levels 用词库，sections 保留该年级有题库的环节
// 数组顺序 = 首页展示顺序，同时决定默认选中哪个年级
const GRADES = [
  {
    id: "g3",
    label: "三年级上册",
    tag: "三年级",
    emoji: "🐣",
    subtitle: "人教PEP版三年级上册单元词汇表",
    // LEVEL_DATA_G3 来自 data/grade3a.js（需在本文件之前引入）
    levels: (typeof LEVEL_DATA_G3 !== "undefined" && LEVEL_DATA_G3.length) ? LEVEL_DATA_G3 : [],
    fillBlank: {},
    expressionFill: {},
    completeSentence: {},
    // 三年级目前只有单词，句子类题库为空 → 只跑单词环节
    sections: ["spelling", "matching"]
  },
  {
    id: "g6",
    label: "六年级上册",
    tag: "六年级",
    emoji: "🎓",
    subtitle: "新版小学六年级上册重点词句",
    levels: LEVEL_DATA,
    fillBlank: FILL_BLANK_DATA,
    expressionFill: EXPRESSION_FILL_DATA,
    completeSentence: COMPLETE_SENTENCE_DATA,
    sections: ["spelling", "matching", "fillblank", "expression", "complete"]
  }
].filter(g => g.levels && g.levels.length > 0);

// 旧版（单年级）存档当初记的是六年级进度，迁移目标固定为 g6，
// 不能写成 GRADES[0].id —— 年级顺序调整后会把六年级进度错塞给三年级
const LEGACY_GRADE_ID = "g6";

function getGrade(gradeId) {
  return GRADES.find(g => g.id === gradeId) || GRADES[0];
}

// 当前年级（供各页面读取题库用）
let ACTIVE_GRADE_ID = GRADES[0].id;

function setActiveGrade(gradeId) {
  ACTIVE_GRADE_ID = getGrade(gradeId).id;
}

function getActiveGrade() {
  return getGrade(ACTIVE_GRADE_ID);
}

function getLevels() {
  return getActiveGrade().levels;
}

function getFillBlankData() {
  return getActiveGrade().fillBlank || {};
}

function getExpressionFillData() {
  return getActiveGrade().expressionFill || {};
}

function getCompleteSentenceData() {
  return getActiveGrade().completeSentence || {};
}

// 当前年级实际会跑的环节（剔除题库为空的）
function getActiveSections() {
  const g = getActiveGrade();
  return g.sections.filter(key => {
    const meta = SECTION_META.find(s => s.key === key);
    if (!meta || !meta.needData) return true;
    if (key === "fillblank") return Object.keys(g.fillBlank || {}).length > 0;
    if (key === "expression") return Object.keys(g.expressionFill || {}).length > 0;
    if (key === "complete") return Object.keys(g.completeSentence || {}).length > 0;
    return true;
  });
}

function getSectionMeta(key) {
  return SECTION_META.find(s => s.key === key);
}

// ========== 工具函数：进度存储 ==========
// 每个年级一份独立存档，互不干扰
const STORAGE_PREFIX = "englishGame:v1";
const LEGACY_STORAGE_KEY = "englishGameProgress"; // 旧版本（单年级）存档，仅迁移不回写
const CURRENT_GRADE_KEY = STORAGE_PREFIX + ":currentGrade";

function progressKey(gradeId) {
  return STORAGE_PREFIX + ":progress:" + gradeId;
}

function getDefaultProgress(gradeId) {
  const levels = {};
  getGrade(gradeId).levels.forEach(lv => {
    levels[lv.id] = { stars: 0, bestScore: 0, completed: false };
  });
  return {
    unlockedLevel: 1,
    levels: levels
  };
}

function loadProgress(gradeId) {
  const def = getDefaultProgress(gradeId);
  const maxLevel = getGrade(gradeId).levels.length;
  try {
    let raw = localStorage.getItem(progressKey(gradeId));
    // 旧存档属于六年级，读一次并迁移
    if (raw === null && gradeId === LEGACY_GRADE_ID) {
      const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacy) {
        raw = legacy;
        localStorage.setItem(progressKey(gradeId), raw);
      }
    }
    if (!raw) return def;
    const parsed = JSON.parse(raw);
    const unlocked = Math.min(Math.max(parsed.unlockedLevel || def.unlockedLevel, 1), maxLevel);
    return {
      unlockedLevel: unlocked,
      levels: { ...def.levels, ...(parsed.levels || {}) }
    };
  } catch (e) {
    return def;
  }
}

function saveProgress(gradeId, progress) {
  try {
    localStorage.setItem(progressKey(gradeId), JSON.stringify(progress));
  } catch (e) {}
}

function resetProgress(gradeId) {
  try {
    localStorage.removeItem(progressKey(gradeId));
  } catch (e) {}
}

function loadCurrentGrade() {
  try {
    const saved = localStorage.getItem(CURRENT_GRADE_KEY);
    if (saved && GRADES.some(g => g.id === saved)) return saved;
  } catch (e) {}
  return GRADES[0].id;
}

function saveCurrentGrade(gradeId) {
  try {
    localStorage.setItem(CURRENT_GRADE_KEY, gradeId);
  } catch (e) {}
}

// 计算总星数
function getTotalStars(progress) {
  let total = 0;
  Object.values(progress.levels).forEach(lv => {
    total += lv.stars || 0;
  });
  return total;
}

// 根据正确率计算星级
function getStarsFromScore(score, total) {
  const rate = total === 0 ? 0 : score / total;
  if (rate >= 0.9) return 3;
  if (rate >= 0.7) return 2;
  if (rate >= 0.6) return 1;
  return 0;
}

// 答案检查辅助：比较两个单词，返回详细结果
function checkWord(playerAnswer, correctAnswer) {
  const player = playerAnswer.trim();
  const correct = correctAnswer.trim();
  
  if (player === correct) {
    return { correct: true, hint: null };
  }
  
  // 完全小写比较
  if (player.toLowerCase() === correct.toLowerCase()) {
    // 判断大小写问题
    if (correct[0] === correct[0].toUpperCase() && player[0] === player[0].toLowerCase()) {
      // 专有名词判断：常见首字母大写的词
      const properNouns = ["Mars", "Earth", "Sun", "Moon", "Xi'an", "Gingerbread House", "Solar", "For example", "Yes", "Did", "Running"];
      const isProper = properNouns.some(pn => correct.toLowerCase() === pn.toLowerCase());
      if (isProper) {
        return { correct: false, hint: "专有名词需大写" };
      }
      return { correct: false, hint: "首字母需大写" };
    }
    if (correct[0] === correct[0].toLowerCase() && player[0] === player[0].toUpperCase()) {
      return { correct: false, hint: "首字母不应大写" };
    }
    return { correct: false, hint: "大小写有误" };
  }
  
  // 单复数 / 动词形式检查
  const playerLow = player.toLowerCase();
  const correctLow = correct.toLowerCase();
  
  // 差 s / es
  if (playerLow + "s" === correctLow || playerLow + "es" === correctLow) {
    return { correct: false, hint: "复数/第三人称单数形式，需加s/es" };
  }
  if (correctLow + "s" === playerLow || correctLow + "es" === playerLow) {
    return { correct: false, hint: "多余s/es，应为原形" };
  }
  
  // 差 ed / d
  if (playerLow + "ed" === correctLow || playerLow + "d" === correctLow) {
    return { correct: false, hint: "过去式形式，需加ed/d" };
  }
  if (correctLow + "ed" === playerLow || correctLow + "d" === playerLow) {
    return { correct: false, hint: "多余ed/d，应为原形" };
  }
  
  // 差 ing
  if (playerLow + "ing" === correctLow) {
    return { correct: false, hint: "现在分词/动名词形式，需加ing" };
  }
  if (correctLow + "ing" === playerLow) {
    return { correct: false, hint: "多余ing，应为原形" };
  }
  
  return { correct: false, hint: null };
}

// 检查完整句子（含标点检查）
function checkCompleteSentence(playerAnswer, correctAnswer) {
  const player = playerAnswer.trim();
  const correct = correctAnswer.trim();
  
  if (player === correct) {
    return { correct: true, hint: null };
  }
  
  // 标点检查
  const lastCharPlayer = player[player.length - 1];
  const lastCharCorrect = correct[correct.length - 1];
  const punctuations = [".", "!", "?", "。", "！", "？"];
  const playerHasPunct = punctuations.includes(lastCharPlayer);
  const correctHasPunct = punctuations.includes(lastCharCorrect);
  
  let hint = null;
  
  if (!playerHasPunct && correctHasPunct) {
    hint = "句末缺少标点";
  } else if (playerHasPunct && !correctHasPunct) {
    hint = "句末多余标点";
  } else if (playerHasPunct && correctHasPunct && lastCharPlayer !== lastCharCorrect) {
    hint = "句末标点用错了";
  }
  
  // 去掉标点再比较单词
  const playerWords = player.replace(/[.?!。！？]$/, "").split(/\s+/);
  const correctWords = correct.replace(/[.?!。！？]$/, "").split(/\s+/);
  
  // 大小写整体比较
  const playerNoPunct = player.replace(/[.?!。！？]$/, "");
  const correctNoPunct = correct.replace(/[.?!。！？]$/, "");
  
  if (playerNoPunct.toLowerCase() === correctNoPunct.toLowerCase()) {
    if (!hint) {
      if (correctNoPunct[0] === correctNoPunct[0].toUpperCase() && playerNoPunct[0] === playerNoPunct[0].toLowerCase()) {
        hint = "首字母需大写";
      } else if (correctNoPunct[0] === correctNoPunct[0].toLowerCase() && playerNoPunct[0] === playerNoPunct[0].toUpperCase()) {
        hint = "首字母不应大写";
      } else {
        hint = "大小写有误";
      }
    }
  }
  
  return { correct: false, hint: hint };
}

// 词级 diff 用于完整句子
function wordDiff(playerAnswer, correctAnswer) {
  const player = playerAnswer.trim().replace(/[.?!。！？]$/, "").split(/\s+/);
  const correct = correctAnswer.trim().replace(/[.?!。！？]$/, "").split(/\s+/);
  
  // 简单的逐个词对比
  const result = [];
  const maxLen = Math.max(player.length, correct.length);
  
  for (let i = 0; i < maxLen; i++) {
    const pw = player[i] || "";
    const cw = correct[i] || "";
    
    if (pw.toLowerCase() === cw.toLowerCase()) {
      result.push({ type: "same", word: cw });
    } else {
      result.push({ type: "diff", playerWord: pw, correctWord: cw });
    }
  }
  
  // 末尾标点
  const playerPunct = playerAnswer.trim().match(/[.?!。！？]$/);
  const correctPunct = correctAnswer.trim().match(/[.?!。！？]$/);
  
  return {
    words: result,
    playerPunct: playerPunct ? playerPunct[0] : "",
    correctPunct: correctPunct ? correctPunct[0] : ""
  };
}
