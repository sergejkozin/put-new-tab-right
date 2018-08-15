console.log(`[${chrome.runtime.getManifest().name}] - background.js`);


function getTabPosition(tabId) {
    if (!tabId)
        return Promise.resolve(null)

    return new Promise(resolve => {
        chrome.tabs.get(tabId, tab => {
            resolve({windowId: tab.windowId, index: tab.index})
        })
    })
}


chrome.tabs.onCreated.addListener(newTab => {
    getTabPosition(newTab.openerTabId)
        .then(details => {
            if (!details) return;
            if (newTab.windowId !== details.windowId) return;

            details.index += 1;
            chrome.tabs.move(newTab.id, details);
        })
})
