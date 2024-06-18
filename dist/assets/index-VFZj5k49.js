(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=d(e);fetch(e.href,s)}})();const n=[{name:"Vincent van Gogh",username:"vincey1853",location:"Zundert, Netherlands",avatar:"images/avatar-vangogh.jpg",post:"images/post-vangogh.jpg",comment:"just took a few mushrooms lol",likes:21},{name:"Gustave Courbet",username:"gus1819",location:"Ornans, France",avatar:"images/avatar-courbet.jpg",post:"images/post-courbet.jpg",comment:"i'm feelin a bit stressed tbh",likes:4},{name:"Joseph Ducreux",username:"jd1735",location:"Paris, France",avatar:"images/avatar-ducreux.jpg",post:"images/post-ducreux.jpg",comment:"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",likes:152}],m=document.querySelector("main"),i=document.getElementsByClassName("like-button"),r=document.getElementsByClassName("like-icon"),c=document.getElementsByClassName("likes");function u(){let a="";for(let t=0;t<n.length;t++)a+=`<div class="post-container">
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
                <img class="like-icon post-action" src=images/icon-heart.png" />
              </button>
              <img class="post-action" src=images/icon-comment.png" />
              <img class="post-action" src=images/icon-dm.png" />
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
        </div>`;m.innerHTML=a}u();i[0].addEventListener("click",function(){let a=n[0].likes+=1;c[0].textContent=a.toLocaleString("en-US"),i[0].disabled=!0,r[0].src="images/red-heart.png"});i[1].addEventListener("click",function(){let a=n[1].likes+=1;c[1].textContent=a.toLocaleString("en-US"),r[1].src="images/red-heart.png",i[1].disabled=!0});i[2].addEventListener("click",function(){let a=n[2].likes+=1;c[2].textContent=a.toLocaleString("en-US"),r[2].src="images/red-heart.png",i[2].disabled=!0});
