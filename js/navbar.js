import { getToken, logOut } from "./api/auth/auth.js";

const navbarList = document.querySelector("#navbar-list");
const accountContainer = document.querySelector("#account");
const isLoggedIn = getToken() ? true : false;

if (isLoggedIn) {
  accountContainer.innerHTML = "";

  const logOutButton = document.createElement("button");
  logOutButton.innerText = "Log out";
  logOutButton.className = "btn btn-dark";
  accountContainer.appendChild(logOutButton);

  const createPostLink = document.createElement("li");
  createPostLink.className = "nav-item";
  createPostLink.innerHTML = `<a href="create.html" class="nav-link active">Create Post</a>`;
  navbarList.prepend(createPostLink);

  logOutButton.addEventListener("click", () => {
    logOut();
    window.location = "/login.html";
  });
}
