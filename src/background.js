import {addDarkThemeToCampus, removeDarkThemeToCampus} from './scripts/dark-theme.js';

console.log("[BACKGROUND] Background initialized");

chrome.runtime.onInstalled.addListener(() => {
  console.log("[BACKGROUND] Chrome extension installed");
});

chrome.runtime.onMessage.addListener(async function (message) {
  if (message == "addDarkTheme") {
    await addDarkThemeToCampus();
  }

  if (message == "removeDarkTheme") {
    await removeDarkThemeToCampus();
  }
});
