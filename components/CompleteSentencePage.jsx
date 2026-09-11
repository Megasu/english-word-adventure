// 完整句子页：看中文写出完整英文句子（5题）
function CompleteSentencePage({ level, onBack, onComplete }) {
  const [questions, setQuestions] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [userAnswer, setUserAnswer] = React.useState("");
  const [showResult, setShowResult] = React.useState(false);
  const [checkResult, setCheckResult] = React.useState(null);
  const [diffResult, setDiffResult] = React.useState(null);
  const [correctCount, setCorrectCount] = React.useState(0);
  const textareaRef = React.useRef(null);

  React.useEffect(() => {
    const allQuestions = COMPLETE_SENTENCE_DATA[level.id] || [];
    const selected = sampleArray(allQuestions, Math.min(5, allQuestions.length));
    setQuestions(selected);
    setCurrentIndex(0);
    setCorrectCount(0);
    setUserAnswer("");
    setShowResult(false);
    setCheckResult(null);
    setDiffResult(null);
  }, [level.id]);

  React.useEffect(() => {
    if (questions[currentIndex]) {
      setUserAnswer("");
      setShowResult(false);
      setCheckResult(null);
      setDiffResult(null);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }, 100);
    }
  }, [currentIndex, questions]);

  const currentQuestion = questions[currentIndex];

  const handleSubmit = () => {
    if (!userAnswer.trim() || showResult) return;

    const result = checkCompleteSentence(userAnswer, currentQuestion.en);
    const diff = wordDiff(userAnswer, currentQuestion.en);
    
    setCheckResult({
      ...result,
      playerAnswer: userAnswer.trim(),
      correctAnswer: currentQuestion.en
    });
    setDiffResult(diff);
    setShowResult(true);

    if (result.correct) {
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
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

  // 渲染玩家答案的 diff（错误词加删除线）
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

  // 渲染正确答案的 diff（错误位置的词标绿）
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
      "📝 完整句子"
    ),
    React.createElement(
      "div",
      { className: "section-subtitle" },
      "看中文，写出完整的英文句子"
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
      // 文本输入框
      React.createElement(
        "textarea",
        {
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
          disabled: showResult && checkResult?.correct,
          rows: 3
        }
      ),
      // 结果反馈
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
            // 玩家答案 diff
            React.createElement(
              "div",
              { className: "diff-container" },
              React.createElement(
                "div",
                { className: "diff-label" },
                "你的答案："
              ),
              React.createElement(
                "div",
                { className: "diff-row" },
                renderPlayerDiff(),
                diffResult?.playerPunct && React.createElement(
                  "span",
                  { className: diffResult.playerPunct === diffResult.correctPunct ? "diff-same" : "diff-wrong" },
                  diffResult.playerPunct === diffResult.correctPunct
                    ? diffResult.playerPunct
                    : React.createElement("s", null, diffResult.playerPunct)
                )
              )
            ),
            // 正确答案 diff
            React.createElement(
              "div",
              { className: "diff-container" },
              React.createElement(
                "div",
                { className: "diff-label" },
                "正确答案："
              ),
              React.createElement(
                "div",
                { className: "diff-row correct-diff-row" },
                renderCorrectDiff(),
                diffResult?.correctPunct && React.createElement(
                  "span",
                  { className: "diff-correct-word" },
                  diffResult.correctPunct
                )
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

Object.assign(window, { CompleteSentencePage });
