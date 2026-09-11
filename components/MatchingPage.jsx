// 配对页：左侧英文列表、右侧中文列表（乱序）
function MatchingPage({ level, onBack, onComplete }) {
  const [pairs, setPairs] = React.useState([]); // 6对
  const [chineseList, setChineseList] = React.useState([]); // 乱序的中文
  const [selectedEnglish, setSelectedEnglish] = React.useState(null);
  const [selectedChinese, setSelectedChinese] = React.useState(null);
  const [matchedPairs, setMatchedPairs] = React.useState([]); // 已匹配的索引对
  const [wrongPair, setWrongPair] = React.useState(null); // 错误配对弹窗
  const [correctCount, setCorrectCount] = React.useState(0);
  const [toast, setToast] = React.useState(null);

  React.useEffect(() => {
    // 随机抽取6对
    const selected = sampleArray(level.words, Math.min(6, level.words.length));
    setPairs(selected);
    setChineseList(shuffleArray(selected.map((w, i) => ({ ...w, originalIndex: i }))));
    setMatchedPairs([]);
    setSelectedEnglish(null);
    setSelectedChinese(null);
    setCorrectCount(0);
    setWrongPair(null);
  }, [level.id]);

  const showToastMsg = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 1200);
  };

  const handleEnglishClick = (index) => {
    if (matchedPairs.find(p => p.enIndex === index)) return; // 已匹配
    setSelectedEnglish(index);
    
    // 如果中文也选了，尝试配对
    if (selectedChinese !== null) {
      tryMatch(index, selectedChinese);
    }
  };

  const handleChineseClick = (chiIndex) => {
    const originalIndex = chineseList[chiIndex].originalIndex;
    if (matchedPairs.find(p => p.enIndex === originalIndex)) return; // 已匹配
    setSelectedChinese(chiIndex);
    
    // 如果英文也选了，尝试配对
    if (selectedEnglish !== null) {
      tryMatch(selectedEnglish, chiIndex);
    }
  };

  const tryMatch = (enIndex, chiIndex) => {
    const word = pairs[enIndex];
    const chiItem = chineseList[chiIndex];
    const isCorrect = chiItem.originalIndex === enIndex;

    if (isCorrect) {
      // 正确
      setCorrectCount(c => c + 1);
      setMatchedPairs(prev => [...prev, { enIndex, chiIndex }]);
      setSelectedEnglish(null);
      setSelectedChinese(null);
      showToastMsg(`✓ ${word.en} = ${word.cn}`, "success");

      // 检查是否全部完成
      if (matchedPairs.length + 1 >= pairs.length) {
        setTimeout(() => {
          onComplete(correctCount + 1, pairs.length);
        }, 1000);
      }
    } else {
      // 错误
      setWrongPair({
        enWord: word.en,
        yourChinese: chiItem.cn,
        correctChinese: word.cn
      });
      setSelectedEnglish(null);
      setSelectedChinese(null);
    }
  };

  const closeWrongModal = () => {
    setWrongPair(null);
  };

  if (pairs.length === 0) {
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
        matchedPairs.length, " / ", pairs.length
      ),
      React.createElement("div", { style: { width: 50 } })
    ),

    // 进度条
    React.createElement(ProgressBar, {
      current: matchedPairs.length,
      total: pairs.length,
      color: level.color
    }),

    // 环节标题
    React.createElement(
      "div",
      { className: "section-title", style: { color: level.color } },
        "🔗 英中配对"
    ),
    React.createElement(
      "div",
      { className: "section-subtitle" },
      "点击左侧英文，匹配右侧中文"
    ),

    // 配对容器
    React.createElement(
      "div",
      { className: "matching-container" },
      // 左侧英文
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
              className: `match-item ${isMatched ? "matched" : ""} ${isSelected ? "selected" : ""}`,
              style: isSelected ? { borderColor: level.color, background: level.color + "15" } : {},
              onClick: () => handleEnglishClick(index)
            },
            word.en
          );
        })
      ),
      // 右侧中文
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
              className: `match-item ${isMatched ? "matched" : ""} ${isSelected ? "selected" : ""}`,
              style: isSelected ? { borderColor: level.color, background: level.color + "15" } : {},
              onClick: () => handleChineseClick(chiIndex)
            },
            item.cn
          );
        })
      )
    ),

    // Toast
    toast && React.createElement(
      "div",
      { className: `toast ${toast.type === "error" ? "error" : ""}` },
      toast.msg
    ),

    // 错误配对弹窗
    wrongPair && React.createElement(
      "div",
      { className: "modal-overlay", onClick: (e) => e.target.className === "modal-overlay" && closeWrongModal() },
      React.createElement(
        "div",
        { className: "modal-content" },
        React.createElement(
          "div",
          { className: "modal-title" },
          "❌ 配对错误"
        ),
        React.createElement(
          "div",
          { className: "modal-body" },
          React.createElement(
            "div",
            { className: "wrong-pair-row" },
            React.createElement("span", { className: "pair-label" }, "你的配对："),
            React.createElement("span", null, wrongPair.enWord, " → ", React.createElement("span", { className: "compare-wrong" }, wrongPair.yourChinese))
          ),
          React.createElement(
            "div",
            { className: "wrong-pair-row" },
            React.createElement("span", { className: "pair-label" }, "正确配对："),
            React.createElement("span", null, wrongPair.enWord, " → ", React.createElement("span", { className: "compare-correct" }, wrongPair.correctChinese))
          )
        ),
        React.createElement(
          "div",
          { className: "modal-actions" },
          React.createElement(
            "button",
            { className: "btn-primary", onClick: closeWrongModal },
            "我知道了"
          )
        )
      )
    )
  );
}

Object.assign(window, { MatchingPage });
