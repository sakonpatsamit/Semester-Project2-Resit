import { baseUrl } from "../constants.js";

export async function getPosts() {
  const res = await fetch(baseUrl + "/wp/v2/posts");

  console.log(res);

  if (res.ok) {
    return res.json();
  } else {
    return null;
  }
}

export async function getPostById(id) {
  const res = await fetch(baseUrl + "/wp/v2/posts/" + id);

  if (res.ok) {
    return res.json();
  } else {
    return null;
  }
}
