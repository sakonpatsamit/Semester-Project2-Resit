import { getToken } from "../auth/auth.js";
import { baseUrl } from "../constants.js";

const detailsContainer = document.querySelector(".results");

export async function getPosts() {
  const res = await fetch(baseUrl + "/wp/v2/posts");

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

export async function updatePost(postId, title, content) {
  const token = getToken();

  if (!token) return null;

  const res = await fetch(baseUrl + "/wp/v2/posts/" + postId, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title: title, content: content }),
  });

  if (res.ok) return await res.json();
  else return null;
}

export async function createPost(title, content) {
  const token = getToken();

  if (!token) return null;

  const res = await fetch(baseUrl + "/wp/v2/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status: "publish", title: title, content: content }),
  });

  if (res.ok) return await res.json();
  else return null;
}

export async function deletePost(postId) {
  const token = getToken();

  if (!token) return false;

  const res = await fetch(baseUrl + "/wp/v2/posts/" + postId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.ok) return true;
  else return false;
}
