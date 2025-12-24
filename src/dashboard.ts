console.log("Hello,my-dev");


chrome.history.search({ text: '', maxResults: 5 }, (results) => {
	console.log("最近の履歴:", results);
});