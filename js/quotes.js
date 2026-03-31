// 励志语录 - 从 docs/quotes.md 动态加载，或使用内置默认
const DEFAULT_QUOTES = [
  "每天都是新的开始",
  "相信自己，你可以的",
  "快乐来自于每一刻的努力",
  "小步前进，也能走很远",
  "用微笑面对每一天",
  "今天不努力，明天努力也一样",
  "你的努力终将照亮未来",
  "只要坚持，梦想终会实现",
  "微笑面对困难，生活更美好",
  "幸福其实很简单，就是快乐每一天",
];

let _quotesCache = null;

/**
 * 从 docs/quotes.md 解析所有 "- " 开头的句子
 */
function parseQuotesFromMd(text) {
  return text
    .split('\n')
    .filter(line => /^- .+/.test(line.trim()))
    .map(line => line.trim().replace(/^- /, '').trim())
    .filter(q => q.length > 0);
}

/**
 * 异步加载语录（带缓存）
 */
async function loadQuotes() {
  if (_quotesCache) return _quotesCache;
  try {
    const resp = await fetch('docs/quotes.md');
    if (!resp.ok) throw new Error('fetch failed');
    const text = await resp.text();
    const parsed = parseQuotesFromMd(text);
    _quotesCache = parsed.length > 0 ? parsed : DEFAULT_QUOTES;
  } catch {
    _quotesCache = DEFAULT_QUOTES;
  }
  return _quotesCache;
}

/**
 * 同步获取随机语录（用于不支持 async 的场景，使用默认列表）
 */
function getRandomQuote() {
  const list = _quotesCache || DEFAULT_QUOTES;
  return list[Math.floor(Math.random() * list.length)];
}

/**
 * 异步获取随机语录（优先从 md 文件加载）
 */
async function getRandomQuoteAsync() {
  const list = await loadQuotes();
  return list[Math.floor(Math.random() * list.length)];
}
