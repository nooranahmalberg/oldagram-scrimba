const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "avatar-vangogh.jpg",
    post: "post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "avatar-courbet.jpg",
    post: "post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "avatar-ducreux.jpg",
    post: "post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const main = document.querySelector("main");

// Render posts
let postContainers = "";
for (let i = 0; i < posts.length; i++) {
  let details = posts[i];
  postContainers += `<div class="post-container">
          <div class="post-title">
            <img
              class="post-avatar"
              src="${posts[i].avatar}"
            />
            <div class="title-text">
              <span class="bold-text">${posts[i].name}</span>
              <span class="location">${posts[i].location}</span>
            </div>
          </div>
          <img class="post-image" src="${posts[i].post}" />
          <div class="post-details">
            <div class="actions-bar">
              <button class="like-button">
                <svg class="like-icon post-action" width="24" height="24" viewBox="0 0 24 24">
                <path d="M3.58447 11.941L11.1465 20.0812C11.6074 20.5773 12.3926 20.5773 12.8535 20.0812L20.4155 11.941C22.5282 9.66689 22.5282 5.97976 20.4155 3.70561C18.3029 1.43146 14.8777 1.43146 12.765 3.70561V3.70561C12.3519 4.1503 11.6481 4.1503 11.235 3.70561V3.70561C9.12233 1.43146 5.69709 1.43146 3.58447 3.70561C1.47184 5.97976 1.47184 9.66689 3.58447 11.941Z" stroke-width="2"/>
                </svg>
              </button>
                <svg class="post-action" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18.258 19.5047L20.0192 19.8825L19.6415 18.1213L19.3575 16.7974C20.4901 15.3331 21.165 13.4942 21.165 11.5C21.165 6.71446 17.2855 2.83502 12.5 2.83502C7.71446 2.83502 3.83502 6.71446 3.83502 11.5C3.83502 16.2855 7.71446 20.165 12.5 20.165C13.9739 20.165 15.3645 19.7961 16.5817 19.1451L18.258 19.5047Z" stroke="black" stroke-width="2"/>
                </svg>
                <svg class="post-action" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8.77778 11.6667L10.6832 20.2411C10.7974 20.755 11.4805 20.8658 11.7513 20.4145L20.4707 5.88218C20.7036 5.49393 20.424 5 19.9712 5H2.57462C2.03383 5 1.78495 5.67281 2.19554 6.02475L8.77778 11.6667ZM8.77778 11.6667L19.8889 5.55556" stroke-width="2"/>
                </svg>
            </div>
            <div class="actions-bar">
              <span class="likes bold-text"><span class="likes-count">${posts[i].likes}</span> likes</span>
            </div>
            <div class="post-description">
              <span id="username" class="bold-text">${posts[i].username}</span>
              <span id="comment">${posts[i].comment}</span>
            </div>
          </div>
        </div>`;
}
main.innerHTML = postContainers;

// Like and unlike post
const postContainersEl = document.querySelectorAll(".post-container");
postContainersEl.forEach((element) => {
  const likeBtn = element.querySelector(".like-button");
  const likesCount = element.querySelector(".likes-count");
  const postImage = element.querySelector(".post-image");
  function likePost() {
    if (likeBtn.classList.contains("active")) {
      likeBtn.classList.remove("active");
      likesCount.textContent = parseFloat(likesCount.textContent) - 1;
    } else {
      likeBtn.classList.add("active");
      likesCount.textContent = parseFloat(likesCount.textContent) + 1;
    }
  }
  likeBtn.addEventListener("click", likePost);
  postImage.addEventListener("dblclick", likePost);
});
