chrome.browserAction.onClicked.addListener(function (e) {
    if(e.target.innerHTML === "GO TO COMBINATION DETAILS") {
        console.log("hey inside chrommeee extension")
        chrome.tabs.create({url: chrome.runtime.getURL(`index.html/${e.target.id}`)})
    };
});
