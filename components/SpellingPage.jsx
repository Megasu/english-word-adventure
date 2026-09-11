// 拼写页：看中文写英文单词（8题）
function SpellingPage({ level, onBack, onComplete }) {
  const [questions, setQuestions] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [userAnswer, setUserAnswer] = React.useState("");
  const [showResult, setShowResult] = React.useState(false);
  const [checkResult, setCheckResult] = React.useState(null);
  const [correctCount, setCorrectCount] = React.useState(0);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    // 随机抽取8个单词
    const selected = sampleArray(level.words, Math.min(8, level.words.length));
    setQuestions(selected);
    setCurrentIndex(0);
    setCorrectCount(0);
    setUserAnswer("");
    setShowResult(false);
  }, [level.id]);

  React.useEffect(() => {
    // 每题重置时聚焦输入框
    if (inputRef.current && !showResult) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [currentIndex, showResult]);

  const currentQuestion = questions[currentIndex];

  const handleSubmit = () => {
    if (!userAnswer.trim() || showResult) return;

    const result = checkWord(userAnswer, currentQuestion.en);
    setCheckResult({
      ...result,
      playerAnswer: userAnswer.trim(),
      correctAnswer: currentQuestion.en
    });
    setShowResult(true);

    if (result.correct) {
      setCorrectCount(c => c + 1);
      // 800ms 后自动下一题
      setTimeout(() => {
        goNext();
      }, 800);
    }
  };

  const goNext = () => {
    if (currentIndex + 1 >= questions.length) {
      // 完成
      onComplete(correctCount + (checkResult?.correct ? 0 : 0), questions.length);
      return;
    }
    setCurrentIndex(i => i + 1);
    setUserAnswer("");
    setShowResult(false);
    setCheckResult(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (showResult && !checkResult?.correct) {
        goNext();
      } else {
        handleSubmit();
      }
    }
  };

  if (!currentQuestion) {
    return React.createElement("div", null, "加载中...");
  }

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
      "📝 拼写测试"
    ),
    React.createElement(
      "div",
      { className: "section-subtitle" },
      "看中文，写出对应的英文单词"
    ),

    // 题目卡片
    React.createElement(
      QuizCard,
      { color: level.color },
      React.createElement(
        "div",
        { className: "spelling-chinese" },
        currentQuestion.cn
      ),
      React.createElement(
        "input",
        {
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
          disabled: showResult && checkResult?.correct
        }
      ),
      showResult && checkResult && React.createElement(
        "div",
        { className: `answer-feedback ${checkResult.correct ? "correct" : "wrong"}` },
        checkResult.correct
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
            checkResult.hint && React.createElement(
              "div",
              { className: "feedback-hint" },
              "💡 ", checkResult.hint
            ),
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

    // 操作按钮
    React.createElement(
      "div",
      { className: "action-buttons" },
      !showResult
        ? React.createElement(
            PrimaryButton,
            {
              onClick: handleSubmit,
              disabled: !userAnswer.trim(),
              color: level.color
            },
            "检查 ✓"
          )
        : !checkResult?.correct && React.createElement(
            PrimaryButton,
            { onClick: goNext, color: level.color },
            "下一步 →"
          )
    )
  );
}

Object.assign(window, { SpellingPage });
