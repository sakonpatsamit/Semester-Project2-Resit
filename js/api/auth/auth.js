import { baseUrl } from "../constants.js";

export function getToken() {
  const auth = localStorage.getItem("auth");
  if (auth && auth.length > 0) return auth;
  else return null;
}

function setToken(token) {
  localStorage.setItem("auth", token);
}

export async function logIn(username, password) {
  const res = await fetch(baseUrl + "/jwt-auth/v1/token", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });

  if (res.ok) {
    const data = await res.json();

    if (data.token) {
      setToken(data.token);
      return true;
    }
  }

  return false;
}

export function logOut() {
  localStorage.removeItem("auth");
}
