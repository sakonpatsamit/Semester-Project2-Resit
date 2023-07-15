import { logIn } from "./api/auth/auth.js";
import { createErrorMessage } from "./utils.js";

const loginForm = document.querySelector("#loginForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const errorContainer = document.querySelector("#login-title");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = loginEmail.value;
  const password = loginPassword.value;

  logIn(username, password).then((res) => {
    if (res) {
      window.location = "index.html";
    } else
      errorContainer.innerHTML += createErrorMessage(
        "Whoops!",
        "Something went wrong. Please try again."
      );
  });
});
