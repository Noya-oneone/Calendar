// macOS-style Dock component
function renderDock(activePage) {
  const now = new Date();
  const day = now.getDate();
  const monthNames = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  const month = monthNames[now.getMonth()];

  const items = [
    { id: 'calendar', href: 'index.html', icon: 'calendar', label: '日历', emoji: '' },
    { id: 'countdown', href: 'countdown.html', icon: 'countdown', label: '倒计时', emoji: '🎉' },
    { id: 'clock', href: 'clock.html', icon: 'clock', label: '时钟', emoji: '⏰' },
    { id: 'food', href: 'food.html', icon: 'food', label: '今天吃什么', emoji: '🍽' },
    { id: 'todo', href: 'todo.html', icon: 'todo', label: '待办事项', emoji: '📝' },
  ];

  let html = '<div class="dock-wrapper"><div class="dock">';

  items.forEach((item, i) => {
    const isActive = activePage === item.id;
    const activeClass = isActive ? ' active' : '';

    if (item.icon === 'calendar') {
      html += `
        <a class="dock-item${activeClass}" href="${item.href}">
          <span class="dock-tooltip">${item.label}</span>
          <div class="dock-icon icon-calendar" data-day="${day}">
            <span class="month-label">${month}</span>
          </div>
        </a>`;
    } else {
      html += `
        <a class="dock-item${activeClass}" href="${item.href}">
          <span class="dock-tooltip">${item.label}</span>
          <div class="dock-icon icon-${item.icon}">${item.emoji}</div>
        </a>`;
    }

    // Add divider after first item
    if (i === 0) {
      html += '<div class="dock-divider"></div>';
    }
  });

  html += '</div></div>';

  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container.firstElementChild);
}
