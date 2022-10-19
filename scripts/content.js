import * as modals from "./modals.js";

modals.setIntervalX(
  function () {
    modals.searchAndCloseModals();
  },
  500,
  10
);

alert(chrome.runtime.getURL('scripts/content.js'));