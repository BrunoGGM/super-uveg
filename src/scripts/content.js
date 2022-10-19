import * as modals from "./modals.js";

let currentUrl = window.location.href;

if(currentUrl.includes('Contenedor.php')){
  modals.setIntervalX(
    function () {
      modals.searchAndCloseModals();
    },
    500,
    10
  );

}