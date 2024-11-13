const username = document.getElementById("username");
const password = document.getElementById("password");
function showValid(input) {
  let success = input.nextElementSibling;
  success.innerText = "";
  input.className = "validInp";
}
function showInvalid(input, mes) {
  let err = input.nextElementSibling;
  err.innerText = mes;
  input.className = "invalidInp";
}
function checkUsername(input) {
  const nameRegex = /^[a-zA-Zа-яА-Я\s]+$/;
  if (input.value === "") showInvalid(input, "Please fill out this field");
  else if (nameRegex.test(input.value)) showValid(input);
  else showInvalid(input, "Use only letters");
}
function checkPassword(input) {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+?]).{8,}$/;
  if (input.value === "") showInvalid(input, "Please fill out this field");
  else if (passwordRegex.test(input.value)) showValid(input);
  else
    showInvalid(
      input,
      "Use minimum 8 characters including letters, numbers and special characters exept -*/|_"
    );
}
document.querySelector("#btnNext").addEventListener("click", function () {
  checkUsername(username);
  checkPassword(password);
});
