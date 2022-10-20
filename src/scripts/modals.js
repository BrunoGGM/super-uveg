export function setIntervalX(callback, delay, repetitions) {
  var x = 0;
  var intervalID = window.setInterval(function () {
    callback();

    if (++x === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
}

export function searchAndCloseModals() {
  try {
    let modalBtns = document.querySelectorAll(
      ".modal.fade.in div.modal-footer > button.btn.btn-default"
    );
    modalBtns.forEach((e) => {
      e.click();
    });
  } catch {}
}
