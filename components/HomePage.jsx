// 首页关卡地图
function HomePage({ progress, onStartLevel, onReset, totalStars }) {
  const [showResetModal, setShowResetModal] = React.useState(false);

  const handleResetConfirm = () => {
    setShowResetModal(false);
    onReset();
  };

  return React.createElement(
    "div",
    { className: "home-page" },
    // 顶部标题区
    React.createElement(
      "div",
      { className: "home-header" },
      React.createElement(
        "div",
        { className: "star-badge" },
        "⭐ ", totalStars, " / 18"
      ),
      React.createElement(
        "h1",
        { className: "home-title" },
        "🎒 英语词句大闯关"
      ),
      React.createElement(
        "p",
        { className: "home-subtitle" },
        "新版小学六年级上册重点词句"
      ),
      React.createElement(
        "p",
        { className: "home-author" },
        "编制者：Miss Liang"
      )
    ),

    // 关卡列表
    React.createElement(
      "div",
      { className: "level-list" },
      LEVEL_DATA.map(level => {
        const levelProgress = progress.levels[level.id] || { stars: 0, bestScore: 0, completed: false };
        const isLocked = level.id > progress.unlockedLevel;
        const isCompleted = levelProgress.completed;

        return React.createElement(
          "div",
          {
            key: level.id,
            className: `level-card ${isLocked ? "locked" : ""} ${isCompleted ? "completed" : ""}`,
            style: { "--level-color": level.color },
            onClick: () => onStartLevel(level.id)
          },
          React.createElement(
            "div",
            { className: "level-card-header" },
            React.createElement(
              "span",
              { className: "level-emoji" },
              level.emoji
            ),
            React.createElement(
              "div",
              { className: "level-card-title" },
              React.createElement("div", { className: "level-number" }, "第", level.id, "关"),
              React.createElement("div", { className: "level-en-name" }, level.name),
              React.createElement("div", { className: "level-cn-name" }, level.chineseName)
            ),
            isLocked && React.createElement(
              "div",
              { className: "lock-icon" },
              "🔒"
            )
          ),
          React.createElement(
            "div",
            { className: "level-card-footer" },
            React.createElement(
              "span",
              { className: "word-count" },
              level.words.length, " 个单词"
            ),
            React.createElement(
              "span",
              { className: "level-stars" },
              levelProgress.stars >= 1 ? "★" : "☆",
              levelProgress.stars >= 2 ? "★" : "☆",
              levelProgress.stars >= 3 ? "★" : "☆"
            ),
            isCompleted && React.createElement(
              "span",
              { className: "best-score" },
              "最高分: ", levelProgress.bestScore
            )
          )
        );
      })
    ),

    // 底部重置按钮
    React.createElement(
      "div",
      { className: "home-footer" },
      React.createElement(
        "button",
        {
          className: "reset-btn",
          onClick: () => setShowResetModal(true)
        },
        "🔄 重置进度"
      )
    ),

    // 重置确认弹窗
    showResetModal && React.createElement(
      "div",
      { className: "modal-overlay", onClick: (e) => e.target.className === "modal-overlay" && setShowResetModal(false) },
      React.createElement(
        "div",
        { className: "modal-content" },
        React.createElement(
          "div",
          { className: "modal-title" },
          "确认重置进度？"
        ),
        React.createElement(
          "div",
          { className: "modal-body", style: { textAlign: "center" } },
          "重置后所有关卡进度和星星数都将清零，此操作不可恢复。"
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

// 顶部返回按钮组件（通用）
function BackButton({ onBack }) {
  return React.createElement(
    "button",
    { className: "back-btn", onClick: onBack },
    "← 返回"
  );
}

// 进度条组件（通用）
function ProgressBar({ current, total, color = "#FF8C42" }) {
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

// 题目卡片组件（通用）
function QuizCard({ children, color = "#FF8C42" }) {
  return React.createElement(
    "div",
    { className: "quiz-card", style: { borderTop: `4px solid ${color}` } },
    children
  );
}

// 主按钮组件（通用）
function PrimaryButton({ children, onClick, disabled, color = "#FF8C42" }) {
  return React.createElement(
    "button",
    {
      className: `primary-btn ${disabled ? "disabled" : ""}`,
      onClick: onClick,
      disabled: disabled
    },
    children
  );
}

Object.assign(window, {
  HomePage,
  BackButton,
  ProgressBar,
  QuizCard,
  PrimaryButton
});
