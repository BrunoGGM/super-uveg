export async function addDarkThemeToCampus() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log("Aplicando tema oscuro desde switch");
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["/styles/darkThemeCampus.css"],
  });
}

export async function removeDarkThemeToCampus() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log("Quitando tema oscuro desde switch");
  chrome.scripting.removeCSS({
    target: { tabId: tab.id },
    files: ["/styles/darkThemeCampus.css"],
  });
}