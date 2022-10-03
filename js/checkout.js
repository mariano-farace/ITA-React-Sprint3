function validate() {
  let error = 0;

  // All fields are valid by default:
  let allFeedbacks = document.querySelectorAll("input ~ div");
  let allInputs = document.querySelectorAll("input");

  for (let i = 0; i < allFeedbacks.length; i++) {
    allFeedbacks[i].classList.replace("d-block", "d-none");
  }

  for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].className = "form-control is-valid";
  }

  // Get the input fields
  let fName = document.getElementById("fName");
  let fEmail = document.getElementById("fEmail");
  let fAddress = document.getElementById("fAddress");
  let fLastN = document.getElementById("fLastN");
  let fPassword = document.getElementById("fPassword");
  let fPhone = document.getElementById("fPhone");

  // Get the error elements
  let errorName = document.getElementById("errorName");
  let errorEmail = document.getElementById("errorEmail");
  let errorAddress = document.getElementById("errorAddress");
  let errorLastN = document.getElementById("errorLastN");
  let errorPassword = document.getElementById("errorPassword");
  let errorPhone = document.getElementById("errorPhone");

  //Patterns for validation:
  let patternLettersOnly = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s*]{3,}$/; //Includes compound names (with space), accents and ñ
  let patternMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let patternPassword = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]{4,8}$/;
  let patternNumbersOnly = /^[\d]{9}$/;

  // Validate fields entered by the user: name, email, address, lastname, password and phone
  if (!patternLettersOnly.test(fName.value)) {
    fName.classList.replace("is-valid", "is-invalid");
    errorName.classList.replace("d-none", "d-block");
    error++;
  }

  if (!patternMail.test(fEmail.value)) {
    fEmail.classList.replace("is-valid", "is-invalid");
    errorEmail.classList.replace("d-none", "d-block");
    error++;
  }

  if (fAddress.value.length < 3) {
    fAddress.classList.replace("is-valid", "is-invalid");
    errorAddress.classList.replace("d-none", "d-block");
    error++;
  }

  if (!patternLettersOnly.test(fLastN.value)) {
    fLastN.classList.replace("is-valid", "is-invalid");
    errorLastN.classList.replace("d-none", "d-block");
    error++;
  }

  if (!patternPassword.test(fPassword.value)) {
    fPassword.classList.replace("is-valid", "is-invalid");
    errorPassword.classList.replace("d-none", "d-block");
    error++;
  }

  if (!patternNumbersOnly.test(fPhone.value)) {
    fPhone.classList.replace("is-valid", "is-invalid");
    errorPhone.classList.replace("d-none", "d-block");
    error++;
  }

  if (error > 0) {
  } else {
    alert("OK");
  }
}
