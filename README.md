# Calendar - 个人工具页

纯前端个人工具集合，零依赖，打开即用。macOS 风格 Dock 导航。

## 功能

| 页面 | 文件 | 说明 |
|------|------|------|
| 📅 日历（首页） | [index.html](index.html) | 月历视图 + 今日信息卡片（距周末/发薪/下一节日） |
| 🎉 快乐倒计时 | [countdown.html](countdown.html) | 翻页时钟 + 9 个倒计时卡片（周末、发薪、生日、节日） |
| ⏰ 时钟 | [clock.html](clock.html) | 全屏实时时钟，日期、星期、秒数进度条 |
| 🍽 今天吃什么 | [food.html](food.html) | 三个随机转盘（早餐/午餐/晚餐），一键决定三餐；自动记录结果，近 3 天吃过的自动避开 |
| 📝 待办事项 | [todo.html](todo.html) | 添加/完成/删除待办，可选关联日期（日历首页显示青色圆点，逾期红色高亮），localStorage 持久化 |

## 项目结构

```
Calendar/
├── css/
│   └── common.css          # 全局样式 + macOS Dock 组件
├── js/
│   ├── quotes.js           # 励志语录（从 docs/quotes.md 动态加载）
│   ├── countdown.js        # 倒计时核心逻辑（事件配置、日期计算）
│   ├── dock.js             # macOS 风格 Dock 导航栏
│   └── favicon.js          # 动态 favicon（显示当天日期）
├── docs/                     # 配置中心（md 格式，可随时编辑）
│   ├── quotes.md           # 励志语录库（按分类维护）
│   └── foods.md            # 食物转盘配置（早餐/午餐/晚餐）
├── index.html              # 日历首页
├── countdown.html          # 快乐倒计时
├── clock.html              # 时钟
├── food.html               # 今天吃什么转盘
├── todo.html               # 待办事项
└── README.md
```

## 使用

```bash
# 推荐用本地服务器（quotes.md 需要 fetch 加载）
npx serve .

# 或直接打开（语录会 fallback 到内置默认列表）
open index.html
```

## 技术

- 纯 HTML / CSS / JavaScript，零框架零依赖
- CSS Grid 响应式布局
- backdrop-filter 毛玻璃效果
- Canvas 2D 转盘绘制与动画
- localStorage 数据持久化（待办事项、食物转盘历史）
- 深色模式（跟随系统 `prefers-color-scheme`）
- 动态 SVG favicon（每天自动更新日期）
- 倒计时事件数据驱动（`js/countdown.js` 中的 `COUNTDOWN_EVENTS` 数组）

## 自定义

### 添加倒计时事件

修改 `js/countdown.js` 中的 `COUNTDOWN_EVENTS` 数组：

```js
{ id: "xxx", title: "显示标题", getDate: () => nextFutureDate(月, 日) }
```

### 添加励志语录

在 `docs/quotes.md` 对应分类下新增一行 `- 你的句子` 即可，程序自动读取。

### 添加转盘食物

在 `docs/foods.md` 对应分类（早餐/午餐/晚餐）下新增一行 `- 食物名称` 即可，转盘自动更新。
