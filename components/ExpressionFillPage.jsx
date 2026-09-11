// 表达填空页：看中文填空补充完整英文句子（多空）
function ExpressionFillPage({ level, onBack, onComplete }) {
  const [questions, setQuestions] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);
  const [checkResults, setCheckResults] = React.useState([]);
  const [correctCount, setCorrectCount] = React.useState(0);
  const inputRefs = React.useRef([]);

  React.useEffect(() => {
    const allQuestions = EXPRESSION_FILL_DATA[level.id] || [];
    const selected = sampleArray(allQuestions, Math.min(6, allQuestions.length));
    setQuestions(selected);
    setCurrentIndex(0);
    setCorrectCount(0);
    setUserAnswers(new Array(selected[0]?.words?.length || 0).fill(""));
    setShowResult(false);
    setCheckResults([]);
  }, [level.id]);

  React.useEffect(() => {
    if (questions[currentIndex]) {
      setUserAnswers(new Array(questions[currentIndex].words.length).fill(""));
      setShowResult(false);
      setCheckResults([]);
      setTimeout(() => {
        if (inputRefs.current[0]) {
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

    const results = currentQuestion.words.map((word, idx) => {
      return checkWord(userAnswers[idx], word);
    });
    setCheckResults(results);
    setShowResult(true);

    const allCorrect = results.every(r => r.correct);
    if (allCorrect) {
      setCorrectCount(c => c + 1);
      setTimeout(() => {
        goNext();
      }, 800);
    }
  };

  const goNext = () => {
    if (currentIndex + 1 >= questions.length) {
      onComplete(correctCount, questions.length);
      return;
    }
    setCurrentIndex(i => i + 1);
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Enter") {
      if (idx < userAnswers.length - 1) {
        inputRefs.current[idx + 1]?.focus();
      } else {
        handleSubmit();
      }
    }
  };

  if (!currentQuestion) {
    return React.createElement("div", null, "加载中...");
  }

  // 渲染带空格的句子（表达填空 - 用玩家答案重建句子，错误词加删除线）
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
        if (idx > 0) {
          parts.push({ type: "text", content: remaining.slice(0, idx) });
        }
        parts.push({
          type: "blank",
          index: wi,
          word: word
        });
        remaining = remaining.slice(idx + word.length);
      }
    });

    if (remaining) {
      parts.push({ type: "text", content: remaining });
    }

    return parts.map((part, i) => {
      if (part.type === "text") {
        return React.createElement("span", { key: i, className: "sentence-text" }, part.content);
      }
      
      const isCorrect = showResult && checkResults[part.index]?.correct;
      const isWrong = showResult && !checkResults[part.index]?.correct;
      
      return React.createElement(
        "span",
        { key: i, className: "blank-input-wrapper" },
        React.createElement(
          "input",
          {
            ref: el => inputRefs.current[part.index] = el,
            type: "text",
            className: `blank-input ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`,
            value: userAnswers[part.index] || "",
            onChange: (e) => handleInputChange(part.index, e.target.value),
            onKeyDown: (e) => handleKeyDown(e, part.index),
            autoComplete: "off",
            autoCapitalize: "off",
            autoCorrect: "off",
            spellCheck: "false",
            disabled: showResult,
            style: { width: Math.max(part.word.length * 12 + 20, 60) + "px" }
          }
        )
      );
    });
  };

  // 用玩家答案重建句子（错误词加删除线）
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
        if (idx > 0) {
          parts.push({ type: "text", content: remaining.slice(0, idx) });
        }
        parts.push({
          type: "answer",
          index: wi,
          word: word,
          playerAnswer: userAnswers[wi]
        });
        remaining = remaining.slice(idx + word.length);
      }
    });

    if (remaining) {
      parts.push({ type: "text", content: remaining });
    }

    return parts.map((part, i) => {
      if (part.type === "text") {
        return React.createElement("span", { key: i }, part.content);
      }
      
      const isCorrect = checkResults[part.index]?.correct;
      
      if (isCorrect) {
        return React.createElement(
          "span",
          { key: i, className: "reconstruct-correct" },
          part.playerAnswer
        );
      } else {
        return React.createElement(
          "span",
          { key: i, className: "reconstruct-wrong" },
          React.createElement("s", null, part.playerAnswer),
          " ",
          React.createElement(
            "span",
            { className: "compare-correct" },
            "(", part.word, ")"
          )
        );
      }
    });
  };

  const allFilled = userAnswers.every(a => a.trim());
  const allCorrect = showResult && checkResults.every(r => r.correct);

  return React.createElement(
    "div",
    { className: "game-page" },
    // 顶部导航
    React.createElement(
      "div",
      { className: "game-header" },
      React.createElement(BackButton, { onBack }),
      React.createElement(
        "div",
        { className: "game-progress-text" },
        currentIndex + 1, " / ", questions.length
      ),
      React.createElement("div", { style: { width: 50 } })
    ),

    // 进度条
    React.createElement(ProgressBar, {
      current: currentIndex + (showResult ? 1 : 0),
      total: questions.length,
      color: level.color
    }),

    // 环节标题
    React.createElement(
      "div",
      { className: "section-title", style: { color: level.color } },
      "💬 表达填空"
    ),
    React.createElement(
      "div",
      { className: "section-subtitle" },
      "看中文，填空补充完整英文句子"
    ),

    // 题目卡片
    React.createElement(
      QuizCard,
      { color: level.color },
      // 中文提示
      React.createElement(
        "div",
        { className: "fill-chinese" },
        "📖 ", currentQuestion.cn
      ),
      // 带空格的英文句子
      React.createElement(
        "div",
        { className: "fill-sentence" },
        renderSentenceWithBlanks()
      ),
      // 结果反馈
      showResult && React.createElement(
        "div",
        { className: `answer-feedback ${allCorrect ? "correct" : "wrong"}` },
        allCorrect
          ? React.createElement(
              "div",
              { className: "feedback-text correct-text" },
              "✓ 答对啦！"
            )
          : React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { className: "feedback-text wrong-text" },
              "✗ 答错了"
            ),
            // 重建的句子
            React.createElement(
              "div",
              { className: "reconstructed-sentence" },
              "你的句子：",
              React.createElement("div", { className: "reconstruct-text" }, renderReconstructedSentence())
            ),
            // 正确句子
            React.createElement(
              "div",
              { className: "full-sentence-correct" },
              "正确句子：", currentQuestion.en
            )
          )
      )
    ),

    // 操作按钮
    React.createElement(
      "div",
      { className: "action-buttons" },
      !showResult
        ? React.createElement(
            PrimaryButton,
            {
              onClick: handleSubmit,
              disabled: !allFilled,
              color: level.color
            },
            "检查 ✓"
          )
        : !allCorrect && React.createElement(
            PrimaryButton,
            { onClick: goNext, color: level.color },
            "下一步 →"
          )
    )
  );
}

Object.assign(window, { ExpressionFillPage });
