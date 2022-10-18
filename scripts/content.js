window.onload = function () {
  let elements = document.querySelectorAll(
    "div.modal-footer > button.btn.btn-default"
  );
  elements.forEach((e) => {
    e.click();
  });

  console.log("Modals cerrados");

};

