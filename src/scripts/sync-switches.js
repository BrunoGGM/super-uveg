export function syncValueSwitches() {
  let autoCloseModalsSwitch = document.getElementById("autoCloseModalsSwitch");
  let darkThemeSwitch = document.getElementById("darkThemeSwitch");
  let evaluationSwitch = document.getElementById("evaluationSwitch");


  chrome.storage.sync.get(["autoCloseModals"], function (result) {
    autoCloseModalsSwitch.checked = result.autoCloseModals;
  });

  chrome.storage.sync.get(["darkTheme"], async function (result) {
    darkThemeSwitch.checked = result.darkTheme;
  });

  chrome.storage.sync.get(["showEvaluationBtn"], function (result) {
    evaluationSwitch.checked = result.showEvaluationBtn;
  });
}
