import { logIn } from "./api/auth/auth.js";

const loginForm = document.querySelector("#loginForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = loginEmail.value;
  const password = loginPassword.value;

  console.log(username, password);

  logIn(username, password).then((res) => {
    if (res) {
      window.location = "index.html";
    }
  });
});
