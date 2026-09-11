// 主应用 - 所有组件合并在此文件中
const { useState, useEffect, useCallback, useRef } = React;

// ========== 通用组件 ==========

function BackButton({ onBack }) {
  return React.createElement(
    "button",
    { className: "back-btn", onClick: onBack },
    "← 返回"
  );
}

function ProgressBar({ current, total, color }) {
  const percent = total === 0 ? 0 : (current / total) * 100;
  return React.createElement(
    "div",
    { className: "progress-bar-container" },
    React.createElement(
      "div",
      {
        className: "progress-bar-fill",
        style: { width: percent + "%" }
      }
    )
  );
}

function QuizCard({ children, color }) {
  return React.createElement(
    "div",
    { className: "quiz-card", style: { borderTop: "4px solid " + color } },
    children
  );
}

function PrimaryButton({ children, onClick, disabled, color }) {
  return React.createElement(
    "button",
    {
      className: "primary-btn" + (disabled ? " disabled" : ""),
      onClick: onClick,
      disabled: disabled
    },
    children
  );
}

// ========== 首页 ==========

function HomePage({ grade, grades, progress, onStartLevel, onReset, onSwitchGrade, totalStars }) {
  const [showResetModal, setShowResetModal] = useState(false);

  const handleResetConfirm = () => {
    setShowResetModal(false);
    onReset();
  };

  const maxStars = grade.levels.length * 3;

  return React.createElement(
    "div",
    { className: "home-page" },
    React.createElement(
      "div",
      { className: "home-header" },
      React.createElement(
        "div",
        { className: "star-badge" },
        "⭐ ", totalStars, " / ", maxStars
      ),
      React.createElement("h1", { className: "home-title" }, "🎒 英语词句大闯关"),
      grades.length > 1 && React.createElement(
        "div",
        { className: "grade-switch" },
        grades.map(g => React.createElement(
          "button",
          {
            key: g.id,
            className: "grade-chip" + (g.id === grade.id ? " active" : ""),
            onClick: () => onSwitchGrade(g.id)
          },
          g.emoji, " ", g.label
        ))
      ),
      React.createElement("p", { className: "home-subtitle" }, grade.subtitle),
      React.createElement("p", { className: "home-author" }, "编制者：Miss Liang")
    ),
    React.createElement(
      "div",
      { className: "level-list" },
      grade.levels.map(level => {
        const lp = progress.levels[level.id] || { stars: 0, bestScore: 0, completed: false };
        const isLocked = level.id > progress.unlockedLevel;
        const isCompleted = lp.completed;
        return React.createElement(
          "div",
          {
            key: level.id,
            className: "level-card" + (isLocked ? " locked" : "") + (isCompleted ? " completed" : ""),
            style: { "--level-color": level.color },
            onClick: () => onStartLevel(level.id)
          },
          React.createElement(
            "div",
            { className: "level-card-header" },
            React.createElement("span", { className: "level-emoji" }, level.emoji),
            React.createElement(
              "div",
              { className: "level-card-title" },
              React.createElement("div", { className: "level-number" }, "第", level.id, "关"),
              React.createElement("div", { className: "level-en-name" }, level.name),
              React.createElement("div", { className: "level-cn-name" }, level.chineseName)
            ),
            isLocked && React.createElement("div", { className: "lock-icon" }, "🔒")
          ),
          React.createElement(
            "div",
            { className: "level-card-footer" },
            React.createElement("span", { className: "word-count" }, level.words.length, " 个单词"),
            React.createElement(
              "span",
              { className: "level-stars" },
              lp.stars >= 1 ? "★" : "☆",
              lp.stars >= 2 ? "★" : "☆",
              lp.stars >= 3 ? "★" : "☆"
            ),
            isCompleted && React.createElement("span", { className: "best-score" }, "最高分: ", lp.bestScore)
          )
        );
      })
    ),
    React.createElement(
      "div",
      { className: "home-footer" },
      React.createElement(
        "button",
        { className: "reset-btn", onClick: () => setShowResetModal(true) },
        "🔄 重置进度"
      )
    ),
    showResetModal && React.createElement(
      "div",
      {
        className: "modal-overlay",
        onClick: (e) => e.target.className === "modal-overlay" && setShowResetModal(false)
      },
      React.createElement(
        "div",
        { className: "modal-content" },
        React.createElement("div", { className: "modal-title" }, "确认重置进度？"),
        React.createElement(
          "div",
          { className: "modal-body", style: { textAlign: "center" } },
          "将重置「" + grade.label + "」的全部关卡进度和星星数，此操作不可恢复。",
          React.createElement("br"),
          "其它年级的进度不受影响。"
        ),
        React.createElement(
          "div",
          { className: "modal-actions" },
          React.createElement(
            "button",
            { className: "btn-secondary", onClick: () => setShowResetModal(false) },
            "取消"
          ),
          React.createElement(
            "button",
            { className: "btn-primary", onClick: handleResetConfirm },
            "确认重置"
          )
        )
      )
    )
  );
}

// ========== 拼写页 ==========

function SpellingPage({ level, onBack, onComplete }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [checkResult, setCheckResult] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const inputRef = useRef(null);
  const resultsRef = useRef([]);

  useEffect(() => {
    const selected = sampleArray(level.words, pickCount("spelling", level.words.length));
    setQuestions(selected);
    setCurrentIndex(0);
    setCorrectCount(0);
    setUserAnswer("");
    setShowResult(false);
    setCheckResult(null);
    resultsRef.current = [];
  }, [level.id]);

  useEffect(() => {
    if (inputRef.current && !showResult) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [currentIndex, showResult]);

  const currentQuestion = questions[currentIndex];

  const handleSubmit = () => {
    if (!userAnswer.trim() || showResult) return;
    const result = checkWord(userAnswer, currentQuestion.en);
    resultsRef.current[currentIndex] = result.correct;
    setCheckResult({
      ...result,
      playerAnswer: userAnswer.trim(),
      correctAnswer: currentQuestion.en
    });
    setShowResult(true);
    if (result.correct) {
      setCorrectCount(c => c + 1);
      setTimeout(() => { goNext(); }, 800);
    }
  };

  const goNext = () => {
    if (currentIndex + 1 >= questions.length) {
      const total = resultsRef.current.filter(Boolean).length;
      onComplete(total, questions.length);
      return;
    }
    setCurrentIndex(i => i + 1);
    setUserAnswer("");
    setShowResult(false);
    setCheckResult(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (showResult && checkResult && !checkResult.correct) {
        goNext();
      } else {
        handleSubmit();
      }
    }
  };

  if (!currentQuestion) return React.createElement("div", null, "加载中...");

  return React.createElement(
    "div",
    { className: "game-page" },
    React.createElement(
      "div",
      { className: "game-header" },
      React.createElement(BackButton, { onBack }),
      React.createElement("div", { className: "game-progress-text" }, currentIndex + 1, " / ", questions.length),
      React.createElement("div", { style: { width: 50 } })
    ),
    React.createElement(ProgressBar, {
      current: currentIndex + (showResult ? 1 : 0),
      total: questions.length,
      color: level.color
    }),
    React.createElement("div", { className: "section-title", style: { color: level.color } }, "📝 拼写测试"),
    React.createElement("div", { className: "section-subtitle" }, "看中文，写出对应的英文单词"),
    React.createElement(
      QuizCard,
      { color: level.color },
      React.createElement("div", { className: "spelling-chinese" }, currentQuestion.cn),
      React.createElement("input", {
        ref: inputRef,
        type: "text",
        className: "spelling-input",
        value: userAnswer,
        onChange: (e) => setUserAnswer(e.target.value),
        onKeyDown: handleKeyDown,
        placeholder: "请输入英文单词",
        autoComplete: "off",
        autoCapitalize: "off",
        autoCorrect: "off",
        spellCheck: "false",
        disabled: showResult && checkResult && checkResult.correct
      }),
      showResult && checkResult && React.createElement(
        "div",
        { className: "answer-feedback " + (checkResult.correct ? "correct" : "wrong") },
        checkResult.correct
          ? React.createElement("div", { className: "feedback-text correct-text" }, "✓ 答对啦！")
          : React.createElement(
            "div",
            null,
            React.createElement("div", { className: "feedback-text wrong-text" }, "✗ 答错了"),
            checkResult.hint && React.createElement("div", { className: "feedback-hint" }, "💡 ", checkResult.hint),
            React.createElement(
              "div",
              { className: "answer-compare" },
              React.createElement(
                "div",
                null,
                React.createElement("span", { className: "compare-label" }, "你的答案："),
                React.createElement("span", { className: "compare-wrong" }, checkResult.playerAnswer)
              ),
              React.createElement(
                "div",
                null,
                React.createElement("span", { className: "compare-label" }, "正确答案："),
                React.createElement("span", { className: "compare-correct" }, checkResult.correctAnswer)
              )
            )
          )
      )
    ),
    React.createElement(
      "div",
      { className: "action-buttons" },
      !showResult
        ? React.createElement(PrimaryButton, {
            onClick: handleSubmit,
            disabled: !userAnswer.trim(),
            color: level.color
          }, "检查 ✓")
        : (checkResult && !checkResult.correct) && React.createElement(PrimaryButton, {
            onClick: goNext, color: level.color
          }, "下一步 →")
    )
  );
}

// ========== 配对页 ==========

function MatchingPage({ level, onBack, onComplete }) {
  const [pairs, setPairs] = useState([]);
  const [chineseList, setChineseList] = useState([]);
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [selectedChinese, setSelectedChinese] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [wrongPair, setWrongPair] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const selected = sampleArray(level.words, pickCount("matching", level.words.length));
    setPairs(selected);
    setChineseList(shuffleArray(selected.map((w, i) => ({ ...w, originalIndex: i }))));
    setMatchedPairs([]);
    setSelectedEnglish(null);
    setSelectedChinese(null);
    setCorrectCount(0);
    setWrongPair(null);
  }, [level.id]);

  const showToastMsg = (msg, type) => {
    setToast({ msg, type: type || "success" });
    setTimeout(() => setToast(null), 1200);
  };

  const tryMatch = (enIndex, chiIndex) => {
    const word = pairs[enIndex];
    const chiItem = chineseList[chiIndex];
    const isCorrect = chiItem.originalIndex === enIndex;
    if (isCorrect) {
      setCorrectCount(c => c + 1);
      setMatchedPairs(prev => [...prev, { enIndex, chiIndex }]);
      setSelectedEnglish(null);
      setSelectedChinese(null);
      showToastMsg("✓ " + word.en + " = " + word.cn, "success");
      if (matchedPairs.length + 1 >= pairs.length) {
        setTimeout(() => { onComplete(correctCount + 1, pairs.length); }, 1000);
      }
    } else {
      setWrongPair({
        enWord: word.en,
        yourChinese: chiItem.cn,
        correctChinese: word.cn
      });
      setSelectedEnglish(null);
      setSelectedChinese(null);
    }
  };

  const handleEnglishClick = (index) => {
    if (matchedPairs.find(p => p.enIndex === index)) return;
    setSelectedEnglish(index);
    if (selectedChinese !== null) {
      tryMatch(index, selectedChinese);
    }
  };

  const handleChineseClick = (chiIndex) => {
    const originalIndex = chineseList[chiIndex].originalIndex;
    if (matchedPairs.find(p => p.enIndex === originalIndex)) return;
    setSelectedChinese(chiIndex);
    if (selectedEnglish !== null) {
      tryMatch(selectedEnglish, chiIndex);
    }
  };

  if (pairs.length === 0) return React.createElement("div", null, "加载中...");

  return React.createElement(
    "div",
    { className: "game-page" },
    React.createElement(
      "div",
      { className: "game-header" },
      React.createElement(BackButton, { onBack }),
      React.createElement("div", { className: "game-progress-text" }, matchedPairs.length, " / ", pairs.length),
      React.createElement("div", { style: { width: 50 } })
    ),
    React.createElement(ProgressBar, {
      current: matchedPairs.length,
      total: pairs.length,
      color: level.color
    }),
    React.createElement("div", { className: "section-title", style: { color: level.color } }, "🔗 英中配对"),
    React.createElement("div", { className: "section-subtitle" }, "点击左侧英文，匹配右侧中文"),
    React.createElement(
      "div",
      { className: "matching-container" },
      React.createElement(
        "div",
        { className: "matching-column" },
        pairs.map((word, index) => {
          const isMatched = matchedPairs.find(p => p.enIndex === index);
          const isSelected = selectedEnglish === index;
          return React.createElement(
            "div",
            {
              key: index,
              className: "match-item" + (isMatched ? " matched" : "") + (isSelected ? " selected" : ""),
              style: isSelected ? { borderColor: level.color, background: level.color + "15" } : {},
              onClick: () => handleEnglishClick(index)
            },
            word.en
          );
        })
      ),
      React.createElement(
        "div",
        { className: "matching-column" },
        chineseList.map((item, chiIndex) => {
          const isMatched = matchedPairs.find(p => p.chiIndex === chiIndex);
          const isSelected = selectedChinese === chiIndex;
          return React.createElement(
            "div",
            {
              key: chiIndex,
              className: "match-item" + (isMatched ? " matched" : "") + (isSelected ? " selected" : ""),
              style: isSelected ? { borderColor: level.color, background: level.color + "15" } : {},
              onClick: () => handleChineseClick(chiIndex)
            },
            item.cn
          );
        })
      )
    ),
    toast && React.createElement(
      "div",
      { className: "toast" + (toast.type === "error" ? " error" : "") },
      toast.msg
    ),
    wrongPair && React.createElement(
      "div",
      {
        className: "modal-overlay",
        onClick: (e) => e.target.className === "modal-overlay" && setWrongPair(null)
      },
      React.createElement(
        "div",
        { className: "modal-content" },
        React.createElement("div", { className: "modal-title" }, "❌ 配对错误"),
        React.createElement(
          "div",
          { className: "modal-body" },
          React.createElement(
            "div",
            { className: "wrong-pair-row" },
            React.createElement("span", { className: "pair-label" }, "你的配对："),
            React.createElement("span", null, wrongPair.enWord, " → ",
              React.createElement("span", { className: "compare-wrong" }, wrongPair.yourChinese)
            )
          ),
          React.createElement(
            "div",
            { className: "wrong-pair-row" },
            React.createElement("span", { className: "pair-label" }, "正确配对："),
            React.createElement("span", null, wrongPair.enWord, " → ",
              React.createElement("span", { className: "compare-correct" }, wrongPair.correctChinese)
            )
          )
        ),
        React.createElement(
          "div",
          { className: "modal-actions" },
          React.createElement("button", { className: "btn-primary", onClick: () => setWrongPair(null) }, "我知道了")
        )
      )
    )
  );
}

// ========== 填空页 ==========

function FillBlankPage({ level, onBack, onComplete }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [checkResults, setCheckResults] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const inputRefs = useRef([]);
  const resultsRef = useRef([]);

  useEffect(() => {
    const allQuestions = getFillBlankData()[level.id] || [];
    const selected = sampleArray(allQuestions, Math.min(6, allQuestions.length));
    setQuestions(selected);
    setCurrentIndex(0);
    setCorrectCount(0);
    setUserAnswers([]);
    setShowResult(false);
    setCheckResults([]);
    resultsRef.current = [];
  }, [level.id]);

  useEffect(() => {
    if (questions[currentIndex]) {
      const len = questions[currentIndex].words.length;
      setUserAnswers(new Array(len).fill(""));
      setShowResult(false);
      setCheckResults([]);
      setTimeout(() => {
        if (inputRefs.current && inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }, 100);
    }
  }, [currentIndex, questions]);

  const currentQuestion = questions[currentIndex];

  const handleInputChange = (idx, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[idx] = value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (showResult) return;
    if (userAnswers.some(a => !a.trim())) return;
    const results = currentQuestion.words.map((word, idx) => checkWord(userAnswers[idx], word));
    const allCorrect = results.every(r => r.correct);
    resultsRef.current[currentIndex] = allCorrect;
    setCheckResults(results);
    setShowResult(true);
    if (allCorrect) {
      setCorrectCount(c => c + 1);
      setTimeout(() => { goNext(); }, 800);
    }
  };

  const goNext = () => {
    if (currentIndex + 1 >= questions.length) {
      const total = resultsRef.current.filter(Boolean).length;
      onComplete(total, questions.length);
      return;
    }
    setCurrentIndex(i => i + 1);
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Enter") {
      if (idx < userAnswers.length - 1) {
        inputRefs.current[idx + 1] && inputRefs.current[idx + 1].focus();
      } else {
        handleSubmit();
      }
    }
  };

  if (!currentQuestion) return React.createElement("div", null, "加载中...");

  const renderSentenceWithBlanks = () => {
    const sentence = currentQuestion.en;
    const words = currentQuestion.words;
    const parts = [];
    let remaining = sentence;
    words.forEach((word, wi) => {
      const lowerRemaining = remaining.toLowerCase();
      const lowerWord = word.toLowerCase();
      const idx = lowerRemaining.indexOf(lowerWord);
      if (idx >= 0) {
        if (idx > 0) parts.push({ type: "text", content: remaining.slice(0, idx) });
        parts.push({ type: "blank", index: wi, word: word });
        remaining = remaining.slice(idx + word.length);
      }
    });
    if (remaining) parts.push({ type: "text", content: remaining });
    return parts.map((part, i) => {
      if (part.type === "text") {
        return React.createElement("span", { key: i, className: "sentence-text" }, part.content);
      }
      const isCorrect = showResult && checkResults[part.index] && checkResults[part.index].correct;
      const isWrong = showResult && checkResults[part.index] && !checkResults[part.index].correct;
      return React.createElement(
        "span",
        { key: i, className: "blank-input-wrapper" },
        React.createElement("input", {
          ref: el => { inputRefs.current[part.index] = el; },
          type: "text",
          className: "blank-input" + (isCorrect ? " correct" : "") + (isWrong ? " wrong" : ""),
          value: userAnswers[part.index] || "",
          onChange: (e) => handleInputChange(part.index, e.target.value),
          onKeyDown: (e) => handleKeyDown(e, part.index),
          autoComplete: "off",
          autoCapitalize: "off",
          autoCorrect: "off",
          spellCheck: "false",
          disabled: showResult,
          style: { width: Math.max(part.word.length * 12 + 20, 60) + "px" }
        })
      );
    });
  };

  const allFilled = userAnswers.length > 0 && userAnswers.every(a => a.trim());
  const allCorrect = showResult && checkResults.length > 0 && checkResults.every(r => r.correct);

  return React.createElement(
    "div",
    { className: "game-page" },
    React.createElement(
      "div",
      { className: "game-header" },
      React.createElement(BackButton, { onBack }),
      React.createElement("div", { className: "game-progress-text" }, currentIndex + 1, " / ", questions.length),
      React.createElement("div", { style: { width: 50 } })
    ),
    React.createElement(ProgressBar, {
      current: currentIndex + (showResult ? 1 : 0),
      total: questions.length,
      color: level.color
    }),
    React.createElement("div", { className: "section-title", style: { color: level.color } }, "✏️ 看中文填词"),
    React.createElement("div", { className: "section-subtitle" }, "看中文，在英文句子中填入缺失的单词"),
    React.createElement(
      QuizCard,
      { color: level.color },
      React.createElement("div", { className: "fill-chinese" }, "📖 ", currentQuestion.cn),
      React.createElement("div", { className: "fill-sentence" }, renderSentenceWithBlanks()),
      showResult && React.createElement(
        "div",
        { className: "answer-feedback " + (allCorrect ? "correct" : "wrong") },
        allCorrect
          ? React.createElement("div", { className: "feedback-text correct-text" }, "✓ 答对啦！")
          : React.createElement(
            "div",
            null,
            React.createElement("div", { className: "feedback-text wrong-text" }, "✗ 答错了"),
            currentQuestion.words.map((word, idx) => {
              const result = checkResults[idx];
              if (!result || result.correct) return null;
              return React.createElement(
                "div",
                { key: idx, className: "blank-error-row" },
                React.createElement("span", { className: "blank-error-label" }, "第" + (idx + 1) + "空："),
                React.createElement("span", { className: "compare-wrong" }, userAnswers[idx]),
                " → ",
                React.createElement("span", { className: "compare-correct" }, word),
                result.hint && React.createElement("span", { className: "feedback-hint small" }, " (" + result.hint + ")")
              );
            }),
            React.createElement("div", { className: "full-sentence-correct" }, "完整句子：", currentQuestion.en)
          )
      )
    ),
    React.createElement(
      "div",
      { className: "action-buttons" },
      !showResult
        ? React.createElement(PrimaryButton, {
            onClick: handleSubmit,
            disabled: !allFilled,
            color: level.color
          }, "检查 ✓")
        : !allCorrect && React.createElement(PrimaryButton, {
            onClick: goNext, color: level.color
          }, "下一步 →")
    )
  );
}

// ========== 表达填空页 ==========

function ExpressionFillPage({ level, onBack, onComplete }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [checkResults, setCheckResults] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const inputRefs = useRef([]);
  const resultsRef = useRef([]);

  useEffect(() => {
    const allQuestions = getExpressionFillData()[level.id] || [];
    const selected = sampleArray(allQuestions, Math.min(6, allQuestions.length));
    setQuestions(selected);
    setCurrentIndex(0);
    setCorrectCount(0);
    setUserAnswers([]);
    setShowResult(false);
    setCheckResults([]);
    resultsRef.current = [];
  }, [level.id]);

  useEffect(() => {
    if (questions[currentIndex]) {
      const len = questions[currentIndex].words.length;
      setUserAnswers(new Array(len).fill(""));
      setShowResult(false);
      setCheckResults([]);
      setTimeout(() => {
        if (inputRefs.current && inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }, 100);
    }
  }, [currentIndex, questions]);

  const currentQuestion = questions[currentIndex];

  const handleInputChange = (idx, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[idx] = value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (showResult) return;
    if (userAnswers.some(a => !a.trim())) return;
    const results = currentQuestion.words.map((word, idx) => checkWord(userAnswers[idx], word));
    const allCorrect = results.every(r => r.correct);
    resultsRef.current[currentIndex] = allCorrect;
    setCheckResults(results);
    setShowResult(true);
    if (allCorrect) {
      setCorrectCount(c => c + 1);
      setTimeout(() => { goNext(); }, 800);
    }
  };

  const goNext = () => {
    if (currentIndex + 1 >= questions.length) {
      const total = resultsRef.current.filter(Boolean).length;
      onComplete(total, questions.length);
      return;
    }
    setCurrentIndex(i => i + 1);
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Enter") {
      if (idx < userAnswers.length - 1) {
        inputRefs.current[idx + 1] && inputRefs.current[idx + 1].focus();
      } else {
        handleSubmit();
      }
    }
  };

  if (!currentQuestion) return React.createElement("div", null, "加载中...");

  const renderSentenceWithBlanks = () => {
    const sentence = currentQuestion.en;
    const words = currentQuestion.words;
    const parts = [];
    let remaining = sentence;
    words.forEach((word, wi) => {
      const lowerRemaining = remaining.toLowerCase();
      const lowerWord = word.toLowerCase();
      const idx = lowerRemaining.indexOf(lowerWord);
      if (idx >= 0) {
        if (idx > 0) parts.push({ type: "text", content: remaining.slice(0, idx) });
        parts.push({ type: "blank", index: wi, word: word });
        remaining = remaining.slice(idx + word.length);
      }
    });
    if (remaining) parts.push({ type: "text", content: remaining });
    return parts.map((part, i) => {
      if (part.type === "text") {
        return React.createElement("span", { key: i, className: "sentence-text" }, part.content);
      }
      const isCorrect = showResult && checkResults[part.index] && checkResults[part.index].correct;
      const isWrong = showResult && checkResults[part.index] && !checkResults[part.index].correct;
      return React.createElement(
        "span",
        { key: i, className: "blank-input-wrapper" },
        React.createElement("input", {
          ref: el => { inputRefs.current[part.index] = el; },
          type: "text",
          className: "blank-input" + (isCorrect ? " correct" : "") + (isWrong ? " wrong" : ""),
          value: userAnswers[part.index] || "",
          onChange: (e) => handleInputChange(part.index, e.target.value),
          onKeyDown: (e) => handleKeyDown(e, part.index),
          autoComplete: "off",
          autoCapitalize: "off",
          autoCorrect: "off",
          spellCheck: "false",
          disabled: showResult,
          style: { width: Math.max(part.word.length * 12 + 20, 60) + "px" }
        })
      );
    });
  };

  const renderReconstructedSentence = () => {
    const sentence = currentQuestion.en;
    const words = currentQuestion.words;
    const parts = [];
    let remaining = sentence;
    words.forEach((word, wi) => {
      const lowerRemaining = remaining.toLowerCase();
      const lowerWord = word.toLowerCase();
      const idx = lowerRemaining.indexOf(lowerWord);
      if (idx >= 0) {
        if (idx > 0) parts.push({ type: "text", content: remaining.slice(0, idx) });
        parts.push({ type: "answer", index: wi, word: word, playerAnswer: userAnswers[wi] });
        remaining = remaining.slice(idx + word.length);
      }
    });
    if (remaining) parts.push({ type: "text", content: remaining });
    return parts.map((part, i) => {
      if (part.type === "text") {
        return React.createElement("span", { key: i }, part.content);
      }
      const isCorrect = checkResults[part.index] && checkResults[part.index].correct;
      if (isCorrect) {
        return React.createElement("span", { key: i, className: "reconstruct-correct" }, part.playerAnswer);
      } else {
        return React.createElement(
          "span",
          { key: i, className: "reconstruct-wrong" },
          React.createElement("s", null, part.playerAnswer),
          " ",
          React.createElement("span", { className: "compare-correct" }, "(", part.word, ")")
        );
      }
    });
  };

  const allFilled = userAnswers.length > 0 && userAnswers.every(a => a.trim());
  const allCorrect = showResult && checkResults.length > 0 && checkResults.every(r => r.correct);

  return React.createElement(
    "div",
    { className: "game-page" },
    React.createElement(
      "div",
      { className: "game-header" },
      React.createElement(BackButton, { onBack }),
      React.createElement("div", { className: "game-progress-text" }, currentIndex + 1, " / ", questions.length),
      React.createElement("div", { style: { width: 50 } })
    ),
    React.createElement(ProgressBar, {
      current: currentIndex + (showResult ? 1 : 0),
      total: questions.length,
      color: level.color
    }),
    React.createElement("div", { className: "section-title", style: { color: level.color } }, "💬 表达填空"),
    React.createElement("div", { className: "section-subtitle" }, "看中文，填空补充完整英文句子"),
    React.createElement(
      QuizCard,
      { color: level.color },
      React.createElement("div", { className: "fill-chinese" }, "📖 ", currentQuestion.cn),
      React.createElement("div", { className: "fill-sentence" }, renderSentenceWithBlanks()),
      showResult && React.createElement(
        "div",
        { className: "answer-feedback " + (allCorrect ? "correct" : "wrong") },
        allCorrect
          ? React.createElement("div", { className: "feedback-text correct-text" }, "✓ 答对啦！")
          : React.createElement(
            "div",
            null,
            React.createElement("div", { className: "feedback-text wrong-text" }, "✗ 答错了"),
            React.createElement(
              "div",
              { className: "reconstructed-sentence" },
              "你的句子：",
              React.createElement("div", { className: "reconstruct-text" }, renderReconstructedSentence())
            ),
            React.createElement("div", { className: "full-sentence-correct" }, "正确句子：", currentQuestion.en)
          )
      )
    ),
    React.createElement(
      "div",
      { className: "action-buttons" },
      !showResult
        ? React.createElement(PrimaryButton, {
            onClick: handleSubmit,
            disabled: !allFilled,
            color: level.color
          }, "检查 ✓")
        : !allCorrect && React.createElement(PrimaryButton, {
            onClick: goNext, color: level.color
          }, "下一步 →")
    )
  );
}

// ========== 完整句子页 ==========

function CompleteSentencePage({ level, onBack, onComplete }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [checkResult, setCheckResult] = useState(null);
  const [diffResult, setDiffResult] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const textareaRef = useRef(null);
  const resultsRef = useRef([]);

  useEffect(() => {
    const allQuestions = getCompleteSentenceData()[level.id] || [];
    const selected = sampleArray(allQuestions, pickCount("complete", allQuestions.length));
    setQuestions(selected);
    setCurrentIndex(0);
    setCorrectCount(0);
    setUserAnswer("");
    setShowResult(false);
    setCheckResult(null);
    setDiffResult(null);
    resultsRef.current = [];
  }, [level.id]);

  useEffect(() => {
    if (questions[currentIndex]) {
      setUserAnswer("");
      setShowResult(false);
      setCheckResult(null);
      setDiffResult(null);
      setTimeout(() => {
        if (textareaRef.current) textareaRef.current.focus();
      }, 100);
    }
  }, [currentIndex, questions]);

  const currentQuestion = questions[currentIndex];

  const handleSubmit = () => {
    if (!userAnswer.trim() || showResult) return;
    const result = checkCompleteSentence(userAnswer, currentQuestion.en);
    const diff = wordDiff(userAnswer, currentQuestion.en);
    resultsRef.current[currentIndex] = result.correct;
    setCheckResult({
      ...result,
      playerAnswer: userAnswer.trim(),
      correctAnswer: currentQuestion.en
    });
    setDiffResult(diff);
    setShowResult(true);
    if (result.correct) {
      setCorrectCount(c => c + 1);
      setTimeout(() => { goNext(); }, 800);
    }
  };

  const goNext = () => {
    if (currentIndex + 1 >= questions.length) {
      const total = resultsRef.current.filter(Boolean).length;
      onComplete(total, questions.length);
      return;
    }
    setCurrentIndex(i => i + 1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (showResult && checkResult && !checkResult.correct) {
        goNext();
      } else {
        handleSubmit();
      }
    }
  };

  if (!currentQuestion) return React.createElement("div", null, "加载中...");

  const renderPlayerDiff = () => {
    if (!diffResult) return null;
    return diffResult.words.map((item, i) => {
      if (item.type === "same") {
        return React.createElement(
          "span",
          { key: i, className: "diff-same" },
          item.word,
          i < diffResult.words.length - 1 ? " " : ""
        );
      } else {
        return React.createElement(
          "span",
          { key: i, className: "diff-wrong" },
          React.createElement("s", null, item.playerWord),
          i < diffResult.words.length - 1 ? " " : ""
        );
      }
    });
  };

  const renderCorrectDiff = () => {
    if (!diffResult) return null;
    return diffResult.words.map((item, i) => {
      if (item.type === "same") {
        return React.createElement(
          "span",
          { key: i, className: "diff-same" },
          item.word,
          i < diffResult.words.length - 1 ? " " : ""
        );
      } else {
        return React.createElement(
          "span",
          { key: i, className: "diff-correct-word" },
          item.correctWord,
          i < diffResult.words.length - 1 ? " " : ""
        );
      }
    });
  };

  return React.createElement(
    "div",
    { className: "game-page" },
    React.createElement(
      "div",
      { className: "game-header" },
      React.createElement(BackButton, { onBack }),
      React.createElement("div", { className: "game-progress-text" }, currentIndex + 1, " / ", questions.length),
      React.createElement("div", { style: { width: 50 } })
    ),
    React.createElement(ProgressBar, {
      current: currentIndex + (showResult ? 1 : 0),
      total: questions.length,
      color: level.color
    }),
    React.createElement("div", { className: "section-title", style: { color: level.color } }, "📝 完整句子"),
    React.createElement("div", { className: "section-subtitle" }, "看中文，写出完整的英文句子"),
    React.createElement(
      QuizCard,
      { color: level.color },
      React.createElement("div", { className: "fill-chinese" }, "📖 ", currentQuestion.cn),
      React.createElement("textarea", {
        ref: textareaRef,
        className: "sentence-textarea",
        value: userAnswer,
        onChange: (e) => setUserAnswer(e.target.value),
        onKeyDown: handleKeyDown,
        placeholder: "请输入完整的英文句子",
        autoComplete: "off",
        autoCapitalize: "off",
        autoCorrect: "off",
        spellCheck: "false",
        disabled: showResult && checkResult && checkResult.correct,
        rows: 3
      }),
      showResult && checkResult && React.createElement(
        "div",
        { className: "answer-feedback " + (checkResult.correct ? "correct" : "wrong") },
        checkResult.correct
          ? React.createElement("div", { className: "feedback-text correct-text" }, "✓ 答对啦！")
          : React.createElement(
            "div",
            null,
            React.createElement("div", { className: "feedback-text wrong-text" }, "✗ 答错了"),
            checkResult.hint && React.createElement("div", { className: "feedback-hint" }, "💡 ", checkResult.hint),
            React.createElement(
              "div",
              { className: "diff-container" },
              React.createElement("div", { className: "diff-label" }, "你的答案："),
              React.createElement(
                "div",
                { className: "diff-row" },
                renderPlayerDiff(),
                diffResult && diffResult.playerPunct && React.createElement(
                  "span",
                  { className: diffResult.playerPunct === diffResult.correctPunct ? "diff-same" : "diff-wrong" },
                  diffResult.playerPunct === diffResult.correctPunct
                    ? diffResult.playerPunct
                    : React.createElement("s", null, diffResult.playerPunct)
                )
              )
            ),
            React.createElement(
              "div",
              { className: "diff-container" },
              React.createElement("div", { className: "diff-label" }, "正确答案："),
              React.createElement(
                "div",
                { className: "diff-row correct-diff-row" },
                renderCorrectDiff(),
                diffResult && diffResult.correctPunct && React.createElement(
                  "span",
                  { className: "diff-correct-word" },
                  diffResult.correctPunct
                )
              )
            )
          )
      )
    ),
    React.createElement(
      "div",
      { className: "action-buttons" },
      !showResult
        ? React.createElement(PrimaryButton, {
            onClick: handleSubmit,
            disabled: !userAnswer.trim(),
            color: level.color
          }, "检查 ✓")
        : (checkResult && !checkResult.correct) && React.createElement(PrimaryButton, {
            onClick: goNext, color: level.color
          }, "下一步 →")
    )
  );
}

// ========== 结算页 ==========

function ResultPage({ level, result, sections, onReplay, onGoHome, onNextLevel, isLastLevel }) {
  if (!result) return null;

  const { stars, totalCorrect, totalQuestions, sectionScores, isFirstClear } = result;
  const rate = totalQuestions === 0 ? 0 : totalCorrect / totalQuestions;

  let emojiIcon = "💪";
  let encourageText = "再试一次,你一定可以的!💖";
  let titleText = "再接再厉!";

  if (rate >= 0.9) {
    emojiIcon = "🏆";
    encourageText = "太棒了!你是英语小达人!🎉";
    titleText = "闯关完成!";
  } else if (rate >= 0.7) {
    emojiIcon = "🥇";
    encourageText = "不错哦!继续加油!💪";
    titleText = "闯关完成!";
  } else if (rate >= 0.6) {
    emojiIcon = "🎯";
    encourageText = "通过了!再多练习就更好了~🌟";
    titleText = "闯关完成!";
  }

  // 只展示本年级实际闯过的环节
  const sectionList = sections && sections.length
    ? sections
    : SECTION_META;

  return React.createElement(
    "div",
    { className: "result-page" },
    React.createElement("div", { className: "result-emoji" }, emojiIcon),
    React.createElement("div", { className: "result-title", style: { color: level.color } }, titleText),
    React.createElement(
      "div",
      { className: "result-stars" },
      React.createElement("span", { className: stars >= 1 ? "star-filled" : "star-empty" }, "★"),
      React.createElement("span", { className: stars >= 2 ? "star-filled" : "star-empty" }, "★"),
      React.createElement("span", { className: stars >= 3 ? "star-filled" : "star-empty" }, "★")
    ),
    React.createElement(
      "div",
      { className: "result-score" },
      "得分 ",
      React.createElement("span", { className: "score-num", style: { color: level.color } }, totalCorrect),
      " / ", totalQuestions
    ),
    React.createElement("div", { className: "result-encourage" }, encourageText),
    React.createElement(
      "div",
      { className: "result-sections" },
      React.createElement("div", { className: "result-section-title" }, "📊 各环节成绩"),
      sectionList.map(section => {
        const score = sectionScores[section.key] || { correct: 0, total: 0 };
        const percent = score.total === 0 ? 0 : (score.correct / score.total) * 100;
        return React.createElement(
          "div",
          { key: section.key, className: "result-section-row" },
          React.createElement(
            "div",
            { className: "section-row-left" },
            React.createElement("span", { className: "section-emoji" }, section.emoji),
            React.createElement("span", { className: "section-name" }, section.name)
          ),
          React.createElement(
            "div",
            { className: "section-row-right" },
            React.createElement(
              "div",
              { className: "section-progress-bg" },
              React.createElement(
                "div",
                {
                  className: "section-progress-fill",
                  style: { width: percent + "%", background: level.color }
                }
              )
            ),
            React.createElement(
              "span",
              { className: "section-score-text" },
              score.correct, "/", score.total
            )
          )
        );
      })
    ),
    React.createElement(
      "div",
      { className: "result-buttons" },
      React.createElement(
        "button",
        { className: "result-btn secondary", onClick: onReplay },
        "🔄 再玩一次"
      ),
      stars >= 1 && !isLastLevel && React.createElement(
        "button",
        {
          className: "result-btn primary",
          style: { background: "linear-gradient(135deg, " + level.color + ", " + level.color + "dd)" },
          onClick: onNextLevel
        },
        "下一关 →"
      ),
      React.createElement(
        "button",
        { className: "result-btn secondary", onClick: onGoHome },
        isFirstClear && stars >= 1 ? "🏠 返回主关卡页" : "🏠 返回关卡地图"
      )
    )
  );
}

// ========== 主应用 ==========

function App() {
  const [page, setPage] = useState("home");
  const [currentLevel, setCurrentLevel] = useState(null);
  // 记住上次玩的年级；存档按年级分开存取
  const [gradeId, setGradeId] = useState(() => {
    const g = loadCurrentGrade();
    setActiveGrade(g);
    return g;
  });
  const [progress, setProgress] = useState(() => loadProgress(gradeId));
  const [toast, setToast] = useState(null);
  const [gameState, setGameState] = useState(null);

  const grade = getGrade(gradeId);
  const sections = getActiveSections();

  const showToast = useCallback((message, type) => {
    setToast({ message, type: type || "success" });
    setTimeout(() => setToast(null), 1800);
  }, []);

  const updateProgress = useCallback((newProgress) => {
    setProgress(newProgress);
    saveProgress(gradeId, newProgress);
  }, [gradeId]);

  const handleReset = useCallback(() => {
    resetProgress(gradeId);
    setProgress(getDefaultProgress(gradeId));
    showToast("「" + getGrade(gradeId).label + "」进度已重置", "success");
  }, [gradeId, showToast]);

  const handleSwitchGrade = useCallback((nextGradeId) => {
    if (nextGradeId === gradeId) return;
    setActiveGrade(nextGradeId);
    saveCurrentGrade(nextGradeId);
    setGradeId(nextGradeId);
    setProgress(loadProgress(nextGradeId));
    setPage("home");
    setCurrentLevel(null);
    setGameState(null);
    showToast("已切换到 " + getGrade(nextGradeId).label, "success");
  }, [gradeId, showToast]);

  const startLevel = useCallback((levelId) => {
    const level = getLevels().find(l => l.id === levelId);
    if (!level) return;
    if (levelId > progress.unlockedLevel) {
      showToast("先通关上一关吧~", "warning");
      return;
    }
    setCurrentLevel(level);
    setGameState({ levelId: level.id, sectionScores: {} });
    setPage(getActiveSections()[0]);
  }, [progress.unlockedLevel, showToast]);

  const goHome = useCallback(() => {
    setPage("home");
    setCurrentLevel(null);
    setGameState(null);
    setProgress(loadProgress(gradeId));
  }, [gradeId]);

  const handleSectionComplete = useCallback((sectionKey, correct, total) => {
    setGameState(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        sectionScores: {
          ...prev.sectionScores,
          [sectionKey]: { correct: correct, total: total }
        }
      };
    });
  }, []);

  const handleGameComplete = useCallback((totalCorrect, totalQuestions, sectionScores) => {
    const stars = getStarsFromScore(totalCorrect, totalQuestions);
    const levelId = currentLevel.id;
    const wasCompleted = progress.levels[levelId] && progress.levels[levelId].completed;

    const newProgress = { ...progress };
    const levelProgress = { ...(newProgress.levels[levelId] || { stars: 0, bestScore: 0, completed: false }) };

    if (stars > levelProgress.stars) levelProgress.stars = stars;
    if (totalCorrect > levelProgress.bestScore) levelProgress.bestScore = totalCorrect;
    if (stars >= 1) {
      levelProgress.completed = true;
      if (levelId === newProgress.unlockedLevel && levelId < getLevels().length) {
        newProgress.unlockedLevel = levelId + 1;
      }
    }

    newProgress.levels = { ...newProgress.levels, [levelId]: levelProgress };
    updateProgress(newProgress);

    setGameState({
      levelId: levelId,
      totalCorrect: totalCorrect,
      totalQuestions: totalQuestions,
      stars: stars,
      sectionScores: sectionScores,
      isFirstClear: stars >= 1 && !wasCompleted
    });
    setPage("result");
  }, [progress, currentLevel, updateProgress]);

  // 按当前年级实际可用的环节依次推进，跑到最后一个环节就结算
  const advanceSection = useCallback((sectionKey, correct, total) => {
    const order = getActiveSections();
    const merged = { ...(gameState ? gameState.sectionScores : {}), [sectionKey]: { correct: correct, total: total } };
    const idx = order.indexOf(sectionKey);
    if (idx >= 0 && idx < order.length - 1) {
      handleSectionComplete(sectionKey, correct, total);
      setPage(order[idx + 1]);
      return;
    }
    let tc = 0, tq = 0;
    Object.values(merged).forEach(s => { tc += s.correct; tq += s.total; });
    handleGameComplete(tc, tq, merged);
  }, [gameState, handleSectionComplete, handleGameComplete]);

  const goNextLevel = useCallback(() => {
    if (!currentLevel) return;
    const nextId = currentLevel.id + 1;
    if (nextId <= getLevels().length) {
      const nextLevel = getLevels().find(l => l.id === nextId);
      setCurrentLevel(nextLevel);
      setGameState({ levelId: nextId, sectionScores: {} });
      setPage(getActiveSections()[0]);
    }
  }, [currentLevel]);

  const handleReplay = useCallback(() => {
    if (!currentLevel) return;
    setGameState({ levelId: currentLevel.id, sectionScores: {} });
    setPage(getActiveSections()[0]);
  }, [currentLevel]);

  const renderPage = () => {
    if (!currentLevel && page !== "home" && page !== "result") return null;

    switch (page) {
      case "home":
        return React.createElement(HomePage, {
          grade: grade,
          grades: GRADES,
          progress: progress,
          onStartLevel: startLevel,
          onReset: handleReset,
          onSwitchGrade: handleSwitchGrade,
          totalStars: getTotalStars(progress)
        });
      case "spelling":
        return React.createElement(SpellingPage, {
          level: currentLevel,
          onBack: goHome,
          onComplete: (c, t) => advanceSection("spelling", c, t)
        });
      case "matching":
        return React.createElement(MatchingPage, {
          level: currentLevel,
          onBack: goHome,
          onComplete: (c, t) => advanceSection("matching", c, t)
        });
      case "fillblank":
        return React.createElement(FillBlankPage, {
          level: currentLevel,
          onBack: goHome,
          onComplete: (c, t) => advanceSection("fillblank", c, t)
        });
      case "expression":
        return React.createElement(ExpressionFillPage, {
          level: currentLevel,
          onBack: goHome,
          onComplete: (c, t) => advanceSection("expression", c, t)
        });
      case "complete":
        return React.createElement(CompleteSentencePage, {
          level: currentLevel,
          onBack: goHome,
          onComplete: (c, t) => advanceSection("complete", c, t)
        });
      case "result":
        return React.createElement(ResultPage, {
          level: currentLevel,
          result: gameState,
          sections: sections.map(key => getSectionMeta(key)).filter(Boolean),
          onReplay: handleReplay,
          onGoHome: goHome,
          onNextLevel: goNextLevel,
          isLastLevel: currentLevel && currentLevel.id === grade.levels.length
        });
      default:
        return null;
    }
  };

  return React.createElement(
    "div",
    { className: "app-container page-enter", key: page },
    renderPage(),
    toast && React.createElement(
      "div",
      {
        className: "toast " +
          (toast.type === "error" ? "error" : toast.type === "warning" ? "warning" : "")
      },
      toast.message
    )
  );
}

// 渲染应用
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
