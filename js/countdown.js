// 倒计时核心逻辑（去重后的统一版本）

// 春节日期表（农历，需手动维护）
const SPRING_FESTIVAL_TABLE = {
  2025: "2025-01-29",
  2026: "2026-02-17",
  2027: "2027-02-06",
  2028: "2028-01-26",
  2029: "2029-02-13",
  2030: "2030-02-03"
};

// 倒计时事件配置
const COUNTDOWN_EVENTS = [
  { id: "weekend",  title: "最近周末",              getDate: nextWeekend },
  { id: "salary",   title: "下一个发工资（每月5号）", getDate: nextSalary },
  { id: "yuandan",  title: "元旦（1月1日）",         getDate: () => nextFutureDate(1, 1) },
  { id: "baby",     title: "宝宝生日（1月18日）",    getDate: () => nextFutureDate(1, 18) },
  { id: "newyear",  title: "春节",                  getDate: nextSpringFestival },
  { id: "labour",   title: "劳动节（5月1日）",       getDate: () => nextFutureDate(5, 1) },
  { id: "laowang",  title: "老王生日（6月1日）",     getDate: () => nextFutureDate(6, 1) },
  { id: "me",       title: "自己生日（7月30日）",    getDate: () => nextFutureDate(7, 30) },
  { id: "guoqing",  title: "国庆节（10月1日）",      getDate: () => nextFutureDate(10, 1) }
];

/**
 * 格式化毫秒差值为 "X天 X小时 X分 X秒"
 */
function formatCountdown(ms) {
  if (ms <= 0) return "就是今天! 🎉";
  const d = Math.floor(ms / (1000 * 60 * 60 * 24));
  const h = Math.floor(ms / (1000 * 60 * 60)) % 24;
  const m = Math.floor(ms / (1000 * 60)) % 60;
  const s = Math.floor(ms / 1000) % 60;
  return `${d}天 ${h}小时 ${m}分 ${s}秒`;
}

/**
 * 获取下一个指定月日的未来日期
 */
function nextFutureDate(month, day) {
  const now = new Date();
  const year = now.getFullYear();
  const date = new Date(year, month - 1, day);
  if (date <= now) return new Date(year + 1, month - 1, day);
  return date;
}

/**
 * 获取最近的周六
 */
function nextWeekend() {
  const now = new Date();
  const day = now.getDay();
  let diff = (6 - day + 7) % 7;
  if (diff === 0) diff = 7;
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() + diff);
}

/**
 * 获取下一个发薪日（每月5号）
 */
function nextSalary() {
  const now = new Date();
  const target = new Date(now.getFullYear(), now.getMonth(), 5);
  if (target <= now) return new Date(now.getFullYear(), now.getMonth() + 1, 5);
  return target;
}

/**
 * 获取下一个春节日期
 */
function nextSpringFestival() {
  const now = new Date();
  const year = now.getFullYear();
  const thisYear = new Date(SPRING_FESTIVAL_TABLE[year]);
  if (thisYear && thisYear > now) return thisYear;
  const nextYear = new Date(SPRING_FESTIVAL_TABLE[year + 1]);
  if (nextYear) return nextYear;
  // fallback: 如果表里没有，返回明年2月1日
  return new Date(year + 1, 1, 1);
}
