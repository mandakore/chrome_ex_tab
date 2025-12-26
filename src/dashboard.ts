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

// 検索機能
const setupSearch = () => {
  const searchForm = document.getElementById('search-form') as HTMLFormElement | null;
  const searchInput = document.getElementById('search-input') as HTMLInputElement | null;

  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
      }
    });
  }
};

setupSearch();

updateHistory();