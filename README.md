# Calendar - 个人工具页

纯前端个人工具集合，零依赖，打开即用。

## 功能

| 页面 | 文件 | 说明 |
|------|------|------|
| 🏠 首页 | [index.html](index.html) | 导航入口，随机励志语 |
| 🎉 快乐倒计时 | [countdown.html](countdown.html) | 翻页时钟 + 9 个倒计时卡片（周末、发薪、生日、节日） |
| 📅 日历 | [calendar.html](calendar.html) | 月历视图，前后翻页，标记重要日期（生日/节日/发薪日） |
| ⏰ 时钟 | [clock.html](clock.html) | 全屏实时时钟，日期、星期、秒数进度条 |
| 📝 待办事项 | [todo.html](todo.html) | 添加/完成/删除待办，localStorage 持久化 |

## 项目结构

```
Calendar/
├── css/
│   └── common.css        # 全局共用样式
├── js/
│   ├── quotes.js         # 励志语录（10 条）
│   └── countdown.js      # 倒计时核心逻辑（事件配置、日期计算）
├── index.html            # 首页（导航）
├── countdown.html        # 快乐倒计时
├── calendar.html         # 日历
├── clock.html            # 时钟
├── todo.html             # 待办事项
└── README.md
```

## 使用

```bash
# 直接打开
open index.html

# 或用本地服务器
npx serve .
```

## 技术

- 纯 HTML / CSS / JavaScript，零框架零依赖
- CSS Grid 响应式布局
- backdrop-filter 毛玻璃效果
- localStorage 数据持久化（待办事项）
- 倒计时事件数据驱动（`js/countdown.js` 中的 `COUNTDOWN_EVENTS` 数组）

## 自定义

修改 `js/countdown.js` 中的 `COUNTDOWN_EVENTS` 数组即可增减倒计时事件：

```js
{ id: "xxx", title: "显示标题", getDate: () => nextFutureDate(月, 日) }
```
