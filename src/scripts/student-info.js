export function getStudentInfo() {
  let studentInfo = document.getElementById("dataApiMateriasRetos");

  if (studentInfo !== null) {
    studentInfo = JSON.parse(studentInfo.innerText);
    chrome.storage.sync.set({ studentInfo: studentInfo });
  }
}

export function setStudentName() {
  chrome.storage.sync.get(["studentInfo"], function (result) {
    if (result.studentInfo !== undefined) {
      let studentName = document.getElementById("studentName");
      studentName.innerText = result.studentInfo.obj.nombre;
    }
  });
}
