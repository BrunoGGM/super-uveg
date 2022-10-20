export function syncValueSwitches() {
  let autoCloseModalsSwitch = document.getElementById("autoCloseModalsSwitch");
  let darkThemeSwitch = document.getElementById("darkThemeSwitch");

  chrome.storage.sync.get(["autoCloseModals"], function (result) {
    autoCloseModalsSwitch.checked = result.autoCloseModals;
  });

  chrome.storage.sync.get(["darkTheme"], async function (result) {
    darkThemeSwitch.checked = result.darkTheme;
  });
}
