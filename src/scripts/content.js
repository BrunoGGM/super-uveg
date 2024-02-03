import * as modals from "./modals.js";
import * as evalModal from "./evaluation-modal.js";
import { getStudentInfo } from "./student-info.js";


let currentUrl = window.location.href;
if (currentUrl.includes("Contenedor.php")) {
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

    // inserter a element after #WiredWizardsteps element
    chrome.storage.sync.get(["showEvaluationBtn"], function (result) {
      if (result.showEvaluationBtn) {
        chrome.runtime.sendMessage("addCssBtnEvaluation");
        setTimeout(() => {
          evalModal.insertBtnToEvaluate();
        }, 2000);
      }
    });

  }
};
