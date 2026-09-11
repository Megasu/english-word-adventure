# 小学英语词句大闯关

面向小学生的英语词汇与句子闯关网页，包含三年级上册和六年级上册数据。

## 本地运行

在项目目录执行 `python3 -m http.server 8080`，然后打开 http://localhost:8080。

## 部署

纯静态站点，无需构建。Vercel 选择 Other，输出目录为 `.`。
页面通过外部 CDN 加载 React 和 Babel，需要联网使用。
