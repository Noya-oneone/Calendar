// Dynamic favicon - shows today's date like macOS Calendar icon
function setDynamicFavicon() {
  const now = new Date();
  const day = now.getDate();
  const monthNames = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const month = monthNames[now.getMonth()];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f5f5f7"/>
        <stop offset="100%" stop-color="#e8e8ed"/>
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#bg)"/>
    <rect width="64" height="20" rx="14" fill="#ff3b30"/>
    <rect x="0" y="10" width="64" height="10" fill="#ff3b30"/>
    <text x="32" y="15" text-anchor="middle" font-family="-apple-system,Helvetica,Arial,sans-serif" font-size="11" font-weight="700" fill="#fff">${month}</text>
    <text x="32" y="52" text-anchor="middle" font-family="-apple-system,Helvetica,Arial,sans-serif" font-size="30" font-weight="700" fill="#333">${day}</text>
  </svg>`;

  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);

  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.type = 'image/svg+xml';
  link.href = url;
}

setDynamicFavicon();
