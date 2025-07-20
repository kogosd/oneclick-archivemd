browser.browserAction.onClicked.addListener(tab => {
  browser.tabs.create({
    url: "https://archive.md/newest/" + tab.url,
  });
})
