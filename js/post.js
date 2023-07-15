import { getToken } from "./api/auth/auth.js";
import { getPostById } from "./api/posts/posts.js";
import { createErrorMessage } from "./utils.js";

const searchParams = new URLSearchParams(window.location.search);
const postId = searchParams.get("id");
const detailsContainer = document.querySelector("#post-container");

const isLoggedIn = getToken() ? true : false;

if (postId) {
  getPostById(postId).then((res) => {
    if (!res) {
      detailsContainer.innerHTML += createErrorMessage(
        "Invalid post",
        "We can't find the post you're looking for. Go back to the home page and try again."
      );
    } else {
      singlePost(res);
    }
  });
} else {
  detailsContainer.innerHTML += createErrorMessage(
    "No post selected",
    "We can't find the post you're looking for. Go back to the home page and try again."
  );
}

function singlePost(post) {
  detailsContainer.innerHTML = `<div class="pt-5 row justify-content-center">
  <div class="col-md-6">
    <div class="card p-4" id="post-content">
      <h3>${post.title.rendered}</h3>
      <p> ${post.excerpt.rendered}</p>
    </div>
  </div>
</div>`;

  if (isLoggedIn)
    document.querySelector(
      "#post-content"
    ).innerHTML += `<a href="create.html?id=${post.id}" class="btn btn-dark">Edit post</a>`;
}

function showErrorMessage() {}
