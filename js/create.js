import { getPostById } from "./api/posts/posts.js";

const searchParams = new URLSearchParams();
const postId = searchParams.get("id");

console.log(postId);

getPostById(33).then((res) => {
  console.log(res);
});
