browser.browserAction.onClicked.addListener(tab => {
  browser.tabs.create({
    url: "https://archive.md/submit/?url=" + tab.url,
  });
})
