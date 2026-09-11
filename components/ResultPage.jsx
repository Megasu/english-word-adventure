// 结算页：闯关完成评价
function ResultPage({ level, result, onReplay, onGoHome, onNextLevel, isLastLevel }) {
  if (!result) return null;

  const { stars, totalCorrect, totalQuestions, sectionScores, isFirstClear } = result;
  const rate = totalQuestions === 0 ? 0 : totalCorrect / totalQuestions;

  // 根据正确率获取鼓励语和图标
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
  } else {
    emojiIcon = "💪";
    encourageText = "再试一次,你一定可以的!💖";
    titleText = "再接再厉!";
  }

  // 五个环节数据
  const sections = [
    { key: "spelling", name: "拼写测试", emoji: "📝" },
    { key: "matching", name: "英中配对", emoji: "🔗" },
    { key: "fillblank", name: "看中文填词", emoji: "✏️" },
    { key: "expression", name: "表达填空", emoji: "💬" },
    { key: "complete", name: "完整句子", emoji: "📜" }
  ];

  return React.createElement(
    "div",
    { className: "result-page" },
    // 顶部
    React.createElement(
      "div",
      { className: "result-header" },
      React.createElement(
        "div",
        { className: "result-emoji" },
        emojiIcon
      ),
      React.createElement(
        "div",
        { className: "result-title", style: { color: level.color } },
        titleText
      ),
      // 星级
      React.createElement(
        "div",
        { className: "result-stars" },
        React.createElement("span", { className: stars >= 1 ? "star-filled" : "star-empty" }, "★"),
        React.createElement("span", { className: stars >= 2 ? "star-filled" : "star-empty" }, "★"),
        React.createElement("span", { className: stars >= 3 ? "star-filled" : "star-empty" }, "★")
      ),
      // 得分
      React.createElement(
        "div",
        { className: "result-score" },
        "得分 ",
        React.createElement("span", { className: "score-num", style: { color: level.color } }, totalCorrect),
        " / ", totalQuestions
      ),
      // 鼓励语
      React.createElement(
        "div",
        { className: "result-encourage" },
        encourageText
      )
    ),

    // 各环节成绩
    React.createElement(
      "div",
      { className: "result-sections" },
      React.createElement(
        "div",
        { className: "result-section-title" },
        "📊 各环节成绩"
      ),
      sections.map(section => {
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

    // 按钮
    React.createElement(
      "div",
      { className: "result-buttons" },
      React.createElement(
        "button",
        {
          className: "result-btn secondary",
          onClick: onReplay
        },
        "🔄 再玩一次"
      ),
      stars >= 1 && !isLastLevel && React.createElement(
        "button",
        {
          className: "result-btn primary",
          style: { background: `linear-gradient(135deg, ${level.color}, ${level.color}dd)` },
          onClick: onNextLevel
        },
        "下一关 →"
      ),
      React.createElement(
        "button",
        {
          className: "result-btn secondary",
          onClick: onGoHome
        },
        isFirstClear && stars >= 1 ? "🏠 返回主关卡页" : "🏠 返回关卡地图"
      )
    )
  );
}

Object.assign(window, { ResultPage });
