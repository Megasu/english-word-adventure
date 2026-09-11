# 小学英语词句大闯关

把单词拼写、英中配对和句子练习变成一关关挑战，帮助孩子巩固课堂所学。

<p align="center">
  <a href="https://english-adventure.uinav.com/">
    <img src="docs/images/qr-code.png" width="360" alt="小学英语词句大闯关访问二维码，扫码打开 https://english-adventure.uinav.com/">
  </a>
  <br>
  <strong>手机扫码，开始闯关</strong>
  <br>
  <a href="https://english-adventure.uinav.com/">点击直接访问网页版</a>
</p>

## 可以练什么

| 年级 | 学习内容 | 练习环节 |
| --- | --- | --- |
| 三年级上册 | 人教 PEP 版单元词汇与常用表达 | 拼写测试、英中配对、看中文填词、表达填空 |
| 六年级上册 | 单元重点词汇与句子 | 拼写测试、英中配对、看中文填词、表达填空、完整句子 |

按单元逐关练习，根据答题成绩获得星星；获得至少一颗星即可通关并解锁下一关，也可以重玩已解锁关卡。

## 怎么使用

1. 扫描上方二维码，或点击网址打开网页，无需安装、无需注册。
2. 选择年级，从已解锁的关卡开始练习。
3. 按提示完成各环节，查看成绩和星星，再继续挑战。

学习进度保存在当前浏览器中，各年级分别记录。更换设备、浏览器或访问域名不会自动同步进度；清除网站数据也会清除存档。

可用于课后复习、亲子练习或课堂巩固。当前题库覆盖上述两个年级上册，并非全部小学英语教材。

## 分享二维码

可下载 [二维码海报原图](docs/images/qr-code.png)，用于分享或打印，二维码指向网站。

## 本地运行

本项目是静态网页，无需构建。在本目录执行：

```bash
python3 -m http.server 8080
```

浏览器打开 http://localhost:8080 。页面通过外部 CDN 加载 React 和 Babel，需要联网使用。

## 项目文件

| 文件 | 用途 |
| --- | --- |
| `index.html` | 页面入口、样式与脚本加载 |
| `app.jsx` | 当前页面组件与闯关流程 |
| `data/grade3a.js` | 三年级上册题库 |
| `data/grade3a_sentences.js` | 三年级上册句子题库 |
| `data/grade6a.js` | 六年级上册题库 |
| `data/index.js` | 年级配置、存档与判题辅助 |
| `icons/` | 网站图标 |
| `docs/images/qr-code.png` | 可分享的二维码海报 |
| `vercel.json` | Vercel 部署配置 |

## 部署与更新

- 日常访问：https://english-adventure.uinav.com/
- Vercel 备用地址：https://english-word-adventure-delta.vercel.app/
