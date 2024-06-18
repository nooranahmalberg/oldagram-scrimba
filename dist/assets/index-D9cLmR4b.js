(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function d(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=d(e);fetch(e.href,s)}})();const n=[{name:"Vincent van Gogh",username:"vincey1853",location:"Zundert, Netherlands",avatar:"public/avatar-vangogh.jpg",post:"public/post-vangogh.jpg",comment:"just took a few mushrooms lol",likes:21},{name:"Gustave Courbet",username:"gus1819",location:"Ornans, France",avatar:"public/avatar-courbet.jpg",post:"public/post-courbet.jpg",comment:"i'm feelin a bit stressed tbh",likes:4},{name:"Joseph Ducreux",username:"jd1735",location:"Paris, France",avatar:"public/avatar-ducreux.jpg",post:"public/post-ducreux.jpg",comment:"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",likes:152}],u=document.querySelector("main"),o=document.getElementsByClassName("like-button"),c=document.getElementsByClassName("like-icon"),r=document.getElementsByClassName("likes");function p(){let i="";for(let t=0;t<n.length;t++)i+=`<div class="post-container">
          <div class="post-title">
            <img
              id="avatar"
              class="post-avatar"
              src=${n[t].avatar}"
            />
            <div class="title-text">
              <span id="name" class="bold-text">${n[t].name}</span>
              <span id="location" class="location">${n[t].location}</span>
            </div>
          </div>
          <img id="post" class="post-image" src=${n[t].post}" />
          <div class="post-details">
            <div class="actions-bar">
              <button class="like-button">
                <img class="like-icon post-action" src=public/icon-heart.png" />
              </button>
              <img class="post-action" src=public/icon-comment.png" />
              <img class="post-action" src=public/icon-dm.png" />
            </div>
            <div class="actions-bar">
              <span class="likes bold-text">${n[t].likes.toLocaleString("en-US")}</span
              ><span class="bold-text"> likes</span>
            </div>
            <div class="post-description">
              <span id="username" class="bold-text">${n[t].username}</span>
              <span id="comment">${n[t].comment}</span>
            </div>
          </div>
        </div>`;u.innerHTML=i}p();o[0].addEventListener("click",function(){let i=n[0].likes+=1;r[0].textContent=i.toLocaleString("en-US"),o[0].disabled=!0,c[0].src="public/red-heart.png"});o[1].addEventListener("click",function(){let i=n[1].likes+=1;r[1].textContent=i.toLocaleString("en-US"),c[1].src="public/red-heart.png",o[1].disabled=!0});o[2].addEventListener("click",function(){let i=n[2].likes+=1;r[2].textContent=i.toLocaleString("en-US"),c[2].src="public/red-heart.png",o[2].disabled=!0});
