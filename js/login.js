import { logIn } from "./api/auth/auth.js";

const loginForm = document.querySelector("#loginForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const errorContainer = document.querySelector("#error");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = loginEmail.value;
  const password = loginPassword.value;

  logIn(username, password).then((res) => {
    if (res) {
      window.location = "index.html";
    } else
      showErrorMessage("Whoops!", "Something went wrong. Please try again.");
  });
});

function showErrorMessage(title, text) {
  errorContainer.innerHTML = `<h4>${title}</h4><p>${text}</p>`;
  errorContainer.classList.remove("d-none");
}
