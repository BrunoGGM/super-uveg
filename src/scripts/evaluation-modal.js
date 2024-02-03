var sleep = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export function createBtnToEvaluate() {
  const element = document.createElement("button");
  element.className = "btn btn-primary evaluation-btn";
  element.innerHTML = `Comenzar evaluación`;
  element.addEventListener("click", async () => {


    let fBtn = document.querySelector(".btnRealizar");
    if (fBtn) {
      fBtn.click();
    }
    await sleep(1500);
    /*
      1 = Nunca
      2 = Casi nunca
      3 = Algunas veces
      4 = Casi siempre
      5 = Siempre
    */
    let radios = document.querySelectorAll(`#tablaPreguntas input[type="radio"][value="${5}"]`);
    radios.forEach(async (radio) => {
      radio.click();
      await sleep(50);
    });

    /*
      ¿Volverías a cursar otra asignatura con este asesor/a?
      Si = 1
      No = 0
    */
    let radiosOpt88 = document.querySelector(`#tablaPreguntas input[type="radio"][data-numpre="8"][value="${1}"]`);
    if (radiosOpt88) {
      radiosOpt88.click();
    }
    await sleep(50);
    let optionOtro = document.querySelector('#cmbCategoria option[value="Otro"]');
    if (optionOtro) {
      optionOtro.selected = true;
    }
    await sleep(50);
    let optionFelicitacion = document.querySelector('#cmbTipoComentario option[value="Felicitación"]');
    if (optionFelicitacion) {
      optionFelicitacion.selected = true;
    }
    await sleep(50);
    let textArea = document.querySelector('#txtComentario');
    if (textArea) {
      // textArea.value = "Excelente asesoría, gracias por su tiempo y dedicación.";
    }
    await sleep(50);
    let submitBtn = document.querySelector("#enviarDatos");
    if (submitBtn) {
      submitBtn.click();
    }



    /** AREA TUTOR */

    await sleep(1200);

    let btnTutor = document.querySelector(".btnRealizarTutor");
    if (btnTutor) {
      btnTutor.click();
    }

    await sleep(1200);

    let radiosTutor = document.querySelectorAll(`#tablaPreguntasTutor input[type="radio"][value="${5}"]`);
    radiosTutor.forEach(async (radio) => {
      radio.click();
      await sleep(50);
    });

    let optionOtroTutor = document.querySelector('#cmbCategoria option[value="Otro"]');
    if (optionOtroTutor) {
      optionOtroTutor.selected = true;
    }
    await sleep(50);
    let optionFelicitacionTutor = document.querySelector('#cmbTipoComentario option[value="Felicitación"]');
    if (optionFelicitacionTutor) {
      optionFelicitacionTutor.selected = true;
    }
    await sleep(50);
    let textAreaTutor = document.querySelector('#txtComentarioTutor');
    if (textAreaTutor) {
      // textAreaTutor.value = "Excelente asesoría, gracias por su tiempo y dedicación.";
    }
    await sleep(50);
    let submitBtnTutor = document.querySelector("#enviarDatosTutor");
    if (submitBtnTutor) {
      submitBtnTutor.click();
    }

    /* AREA CURSO */
    await sleep(1200);

    let btnCurso = document.querySelector(".btnRealizarCurso");
    if (btnCurso) {
      btnCurso.click();
    }

    await sleep(1200);

    let radiosCurso = document.querySelectorAll(`#tablaPreguntasCurso input[type="radio"][value="${5}"]`);

    radiosCurso.forEach(async (radio) => {
      radio.click();
      await sleep(50);
    });

    let textAreaCurso = document.querySelector('#txtComentarioCurso');
    if (textAreaCurso) {
      textAreaCurso.value = "Excelente asesoría, gracias por su tiempo y dedicación.";
    }

    await sleep(50);

    let submitBtnCurso = document.querySelector("#enviarDatosCurso");
    if (submitBtnCurso) {
      submitBtnCurso.click();
    }
    await sleep(1200);

    let closeModalProgreso = document.querySelector("#btn-modalProgreso");
    if (closeModalProgreso) {
      closeModalProgreso.click();
    }

    await sleep(1200);

    let paso4Btn = document.querySelector("#enviarPaso4");
    if (paso4Btn) {
      paso4Btn.click();
    }

    await sleep(1200);

    /** AREA SERVICIOS */

    let btnServicios = document.querySelector(".btnRealizarServicios");
    if (btnServicios) {
      btnServicios.click();
    }

    await sleep(1200);

    /*
    ¿Solicitaste el apoyo de los servicios de mesa de ayuda?
    */
    let radioCurso1 = document.querySelector(`input[id="rdMesaNo"][value="${0}"]`);
    if (radioCurso1) {
      radioCurso1.click();
    }

    /*
      ¿Tienes instalado en tu dispositivo móvil la App de campus virtual?
    */
    let radioCurso2 = document.querySelector(`input[id="rdTecNo"][value="${0}"]`);
    if (radioCurso2) {
      radioCurso2.click();
    }

    /*El diseño y funcionalidad del campus virtual web (Computadora) y las plataformas educativas me resulta fácil de utilizar. */
    let r = document.querySelector(`input[type="radio"][data-idpre="56"][value="${1}"]`);
    if (r) {
      r.click();
    }

    /*Las plataformas tecnológicas estuvieron disponibles cuando requerí sus servicios. */
    let r2 = document.querySelector(`input[type="radio"][data-idpre="57"][value="${1}"]`);
    if (r2) {
      r2.click();
    }

    /*	El tiempo de respuesta del campus virtual y plataformas educativas es adecuado. */
    let r3 = document.querySelector(`input[type="radio"][data-idpre="58"][value="${1}"]`);
    if (r3) {
      r3.click();
    }

    /*
      ¿Haz utilizado el Centro de Información Digital (Biblioteca Digital)?
    */
    let radioCurso3 = document.querySelector(`input[id="rdCIDNo"][value="${0}"]`);
    if (radioCurso3) {
      radioCurso3.click();
    }

    let enviarDatosServicios = document.querySelector("#enviarDatosServicios");
    if (enviarDatosServicios) {
      enviarDatosServicios.click();
    }

    await sleep(1200);

    if (closeModalProgreso) {
      closeModalProgreso.click();
    }

    await sleep(1200);

  });


  return element;
}

export async function addCssBtnEvaluation() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["/styles/evaluationModal.css"],
  });
}


export function insertBtnToEvaluate() {
  const element = createBtnToEvaluate();
  const modal = document.getElementById("WiredWizardsteps");
  modal.parentNode.insertBefore(element, modal);
}