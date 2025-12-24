// src/dashboard.ts
console.log("ダッシュボードが起動しました");

// 履歴
const updateHistory = () => {
  chrome.history.search({ text: '', maxResults: 10 }, (items) => {
    const listElement = document.getElementById('history-list');
    if (!listElement) return;

    listElement.innerHTML = items.map(item => `
      <li>
        <a href="${item.url}" target="_blank">${item.title || '無題'}</a>
      </li>
    `).join('');
  });
};

updateHistory();