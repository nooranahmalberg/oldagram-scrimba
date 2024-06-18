const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "assets/avatar-vangogh.jpg",
    post: "assets/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "assets/avatar-courbet.jpg",
    post: "assets/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "assets/avatar-ducreux.jpg",
    post: "assets/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const main = document.querySelector("main");
const likeBtn = document.getElementsByClassName("like-button");
const likeIcon = document.getElementsByClassName("like-icon");
const likesCount = document.getElementsByClassName("likes");

function createRender() {
  let postRender = "";
  for (let i = 0; i < posts.length; i++) {
    postRender += `<div class="post-container">
          <div class="post-title">
            <img
              id="avatar"
              class="post-avatar"
              src=${posts[i].avatar}"
            />
            <div class="title-text">
              <span id="name" class="bold-text">${posts[i].name}</span>
              <span id="location" class="location">${posts[i].location}</span>
            </div>
          </div>
          <img id="post" class="post-image" src="assets/${posts[i].post}" />
          <div class="post-details">
            <div class="actions-bar">
              <button class="like-button">
                <img class="like-icon post-action" src="assets/icon-heart.png" />
              </button>
              <img class="post-action" src="assets/icon-comment.png" />
              <img class="post-action" src="assets/icon-dm.png" />
            </div>
            <div class="actions-bar">
              <span class="likes bold-text">${posts[i].likes.toLocaleString(
                "en-US"
              )}</span
              ><span class="bold-text"> likes</span>
            </div>
            <div class="post-description">
              <span id="username" class="bold-text">${posts[i].username}</span>
              <span id="comment">${posts[i].comment}</span>
            </div>
          </div>
        </div>`;
  }
  main.innerHTML = postRender;
}

createRender();

likeBtn[0].addEventListener("click", function () {
  let addLike1 = (posts[0].likes += 1);
  likesCount[0].textContent = addLike1.toLocaleString("en-US");
  likeBtn[0].disabled = true;
  likeIcon[0].src = "assets/red-heart.png";
});

likeBtn[1].addEventListener("click", function () {
  let addLike2 = (posts[1].likes += 1);
  likesCount[1].textContent = addLike2.toLocaleString("en-US");
  likeIcon[1].src = "assets/red-heart.png";
  likeBtn[1].disabled = true;
});

likeBtn[2].addEventListener("click", function () {
  let addLike3 = (posts[2].likes += 1);
  likesCount[2].textContent = addLike3.toLocaleString("en-US");
  likeIcon[2].src = "assets/red-heart.png";
  likeBtn[2].disabled = true;
});
