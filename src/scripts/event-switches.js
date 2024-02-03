export function eventListenerSwitches() {
  let autoCloseModalsSwitch = document.getElementById("autoCloseModalsSwitch");
  let darkThemeSwitch = document.getElementById("darkThemeSwitch");
  let evaluationSwitch = document.getElementById("evaluationSwitch");

  autoCloseModalsSwitch.addEventListener("change", function () {
    if (this.checked) {
      chrome.storage.sync.set({ autoCloseModals: true });
    } else {
      chrome.storage.sync.set({ autoCloseModals: false });
    }
  });

  darkThemeSwitch.addEventListener("change", async function () {
    if (this.checked) {
      chrome.storage.sync.set({ darkTheme: true });
      chrome.runtime.sendMessage("addDarkTheme");
    } else {
      chrome.storage.sync.set({ darkTheme: false });
      chrome.runtime.sendMessage("removeDarkTheme");
    }
  });

  evaluationSwitch.addEventListener("change", function () {
    if (this.checked) {
      chrome.storage.sync.set({ showEvaluationBtn: true });
    } else {
      chrome.storage.sync.set({ showEvaluationBtn: false });
    }
  });
}
