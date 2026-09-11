// 填空页：看中文，在英文句子中填入缺失单词（6题）
function FillBlankPage({ level, onBack, onComplete }) {
  const [questions, setQuestions] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);
  const [checkResults, setCheckResults] = React.useState([]);
  const [correctCount, setCorrectCount] = React.useState(0);
  const inputRefs = React.useRef([]);

  React.useEffect(() => {
    const allQuestions = FILL_BLANK_DATA[level.id] || [];
    const selected = sampleArray(allQuestions, Math.min(6, allQuestions.length));
    setQuestions(selected);
    setCurrentIndex(0);
    setCorrectCount(0);
    setUserAnswers(new Array(selected[0]?.words?.length || 0).fill(""));
    setShowResult(false);
    setCheckResults([]);
  }, [level.id]);

  React.useEffect(() => {
    // 每题重置输入
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
    // 检查所有空是否都填了
    if (userAnswers.some(a => !a.trim())) return;

    const results = currentQuestion.words.map((word, idx) => {
      return checkWord(userAnswers[idx], word);
    });
    setCheckResults(results);
    setShowResult(true);

    // 整题全对才算对
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
      // 如果不是最后一个空，跳到下一个输入框
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

  // 渲染带空格的句子
  const renderSentenceWithBlanks = () => {
    const sentence = currentQuestion.en;
    const words = currentQuestion.words;
    const parts = [];
    let remaining = sentence;
    let blankIndex = 0;

    words.forEach((word, wi) => {
      const lowerRemaining = remaining.toLowerCase();
      const lowerWord = word.toLowerCase();
      const idx = lowerRemaining.indexOf(lowerWord);
      
      if (idx >= 0) {
        // 前面的文本
        if (idx > 0) {
          parts.push({ type: "text", content: remaining.slice(0, idx) });
        }
        // 空格
        parts.push({
          type: "blank",
          index: wi,
          word: word
        });
        remaining = remaining.slice(idx + word.length);
        blankIndex++;
      }
    });

    // 剩余文本
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
      "✏️ 看中文填词"
    ),
    React.createElement(
      "div",
      { className: "section-subtitle" },
      "看中文，在英文句子中填入缺失的单词"
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
            // 每个空的错误提示
            currentQuestion.words.map((word, idx) => {
              const result = checkResults[idx];
              if (result.correct) return null;
              return React.createElement(
                "div",
                { key: idx, className: "blank-error-row" },
                React.createElement(
                  "span",
                  { className: "blank-error-label" },
                  `第${idx + 1}空：`
                ),
                React.createElement(
                  "span",
                  { className: "compare-wrong" },
                  userAnswers[idx]
                ),
                " → ",
                React.createElement(
                  "span",
                  { className: "compare-correct" },
                  word
                ),
                result.hint && React.createElement(
                  "span",
                  { className: "feedback-hint small" },
                  " (", result.hint, ")"
                )
              );
            }),
            // 完整正确句子
            React.createElement(
              "div",
              { className: "full-sentence-correct" },
              "完整句子：", currentQuestion.en
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

Object.assign(window, { FillBlankPage });
