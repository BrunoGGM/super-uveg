import './popup.css';

import { syncValueSwitches } from "./scripts/sync-switches.js";
import { eventListenerSwitches } from "./scripts/event-switches.js";
import { setStudentName } from "./scripts/student-info.js";


document.addEventListener("DOMContentLoaded", function () {
  console.log("[CONTENTSCRIPT] Popup opened");

  setStudentName();
  syncValueSwitches();
  eventListenerSwitches();
});
