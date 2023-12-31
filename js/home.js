import { getPosts } from "./api/posts/posts.js";

const postContainer = document.querySelector("#post-container");
const searchbar = document.querySelector("#searchbar");
const btnSearch = document.querySelector("#btn-search");

let posts = [];
let filteredPosts = [];

btnSearch.addEventListener("click", () => {
  let searchQuery = searchbar.value;

  if (!searchQuery || searchQuery.length <= 0) filteredPosts = posts;
  else {
    searchQuery = searchQuery.toLowerCase();
    filteredPosts = posts.filter(
      (post) =>
        post.title.rendered.toLowerCase().indexOf(searchQuery) > -1 ||
        post.excerpt.rendered.toLowerCase().indexOf(searchQuery) > -1
    );
  }

  renderPosts();
});

getPosts().then((res) => {
  if (res && res.length > 0) {
    posts = res;
    filteredPosts = res;
    renderPosts();
  }
});

function renderPosts() {
  postContainer.innerHTML = "";

  filteredPosts.forEach((post) => {
    postContainer.innerHTML += renderPost(post);
  });
}

function renderPost(post) {
  if (
    !post.title.rendered ||
    !post.id ||
    !post.excerpt.rendered ||
    post.status != "publish"
  )
    return "";

  return `<div class="col-md-4">
    <div class="card mb-3">
      <div class="card-body">
        <a class="card-title" href="post.html?id=${post.id}"> <h2> ${post.title.rendered} </h2></a>
        <p class="card-text">
          ${post.excerpt.rendered}
        </p>
      </div>
    </div>
  </div>`;
}
