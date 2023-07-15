import { getToken } from "./api/auth/auth.js";
import {
  createPost,
  deletePost,
  getPostById,
  updatePost,
} from "./api/posts/posts.js";
import { createErrorMessage } from "./utils.js";

const searchParams = new URLSearchParams(window.location.search);
const postId = searchParams.get("id");

const btnDelete = document.querySelector("#btn-delete");
const postForm = document.querySelector("#post-form");
const postTitle = document.querySelector("#postTitle");
const postContent = document.querySelector("#postContent");
const pageContainer = document.querySelector("#page-container");

const isLoggedIn = getToken() ? true : false;
let isEditing = false;

if (!isLoggedIn) {
  pageContainer.innerHTML = createErrorMessage(
    "Unauthorized",
    "You must be logged in to create or edit posts."
  );
} else {
  init();
}

function init() {
  if (postId) {
    getPostById(postId).then((res) => {
      if (!res) {
        pageContainer.innerHTML += createErrorMessage(
          "Invalid post",
          "We can't find the post you're looking for. Go back to the home page and try again."
        );
      } else {
        isEditing = true;
        postTitle.value = res.title.rendered;
        postContent.value = res.content.rendered;

        btnDelete.addEventListener("click", () => {
          deletePost(postId).then((res) => {
            window.location = "/index.html";
          });
        });
      }
    });
  } else {
    btnDelete.remove();
  }

  postForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = postTitle.value;
    const content = postContent.value;

    if (isEditing) {
      updatePost(postId, title, content).then(() => {
        window.location = `post.html?id=${postId}`;
      });
    } else {
      createPost(title, content).then((res) => {
        window.location = `post.html?id=${res.id}`;
      });
    }
  });
}
