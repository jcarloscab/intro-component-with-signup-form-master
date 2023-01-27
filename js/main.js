// Variables
let inputContainer = document.querySelectorAll(".sign-up__input-container");
let errorImage = document.querySelectorAll(".sign-up__error-image");
let errorMessage = document.querySelectorAll(".sign-up__error");
let inputField = document.querySelectorAll(".sign-up__input");
let dataForm = document.getElementById("personal-datas");

//  Inputs
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");

// functions
function errorEmptyField(i, field) {
  inputContainer[i].classList.add("sign-up__input-container--error");
  errorImage[i].classList.add("sign-up__error-image--visible");
  errorMessage[i].textContent = `${field} can not be empty`;
}

function clearField(i) {
  inputContainer[i].classList.remove("sign-up__input-container--error");
  errorImage[i].classList.remove("sign-up__error-image--visible");
  errorMessage[i].textContent = "";
}

function testInputs(callback) {
  let isCorrect = true;

  if (firstName.value == "") {
    callback(0, "First Name");
    isCorrect = false;
  }
  if (lastName.value == "") {
    callback(1, "Last Name");
    isCorrect = false;
  }
  if (email.value == "") {
    callback(2, "email");
    isCorrect = false;
  }
  if (password.value == "") {
    callback(3, "password");
    isCorrect = false;
  }
  return isCorrect;
}

function testEmail(em) {
  let regExp = /^\D[a-z,A-Z,0-9]+[@][a-z,A-Z,0-9]+[.]\D{2,}$/;
  let isCorrect = true;
  if (!regExp.test(em)) {
    errorMessage[2].textContent = "Looks like this is not an email";
    inputContainer[2].classList.add("sign-up__input-container--error");
    errorImage[2].classList.add("sign-up__error-image--visible");
    isCorrect = false;
  }
  return isCorrect;
}

// Listeners
dataForm.addEventListener("submit", (e) => {
  if (!testInputs(errorEmptyField) || !testEmail(email.value)) {
    e.preventDefault();
    return;
  }
});

for (let i = 0; i < inputField.length; i++) {
  inputField[i].addEventListener("focus", () => {
    //limpiamos los mensajes de error al recibir el campo el enfoque
    clearField(i);
  });
}
