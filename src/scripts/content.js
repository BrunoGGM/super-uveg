import * as modals from "./modals.js";
import { getStudentInfo } from "./student-info.js";

console.info("SUPER UVEG");

let currentUrl = window.location.href;
if (currentUrl.includes("Contenedor.php")) {
  // Cerrar modals automaticamente
  chrome.storage.sync.get(["autoCloseModals"], function (result) {
    if (result.autoCloseModals) {
      modals.setIntervalX(
        function () {
          modals.searchAndCloseModals();
        },
        1000,
        10
      );
    }
  });

  // Aplicar tema oscuro
  chrome.storage.sync.get(["darkTheme"], async function (result) {
    if (result.darkTheme) {
      chrome.runtime.sendMessage("addDarkTheme");
    } else {
      chrome.runtime.sendMessage("removeDarkTheme");
    }
  });
}

window.onload = function () {
  if (currentUrl.includes("Contenedor.php")) {
    // Recuperar datos del estudiante
    getStudentInfo();
  }
};
