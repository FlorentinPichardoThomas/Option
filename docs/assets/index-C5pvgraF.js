(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function f(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=f(e);fetch(e.href,s)}})();const d=[{url:"https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",title:"Anime Scenery"},{url:"https://images.unsplash.com/photo-1565204256578-db2626bf8420?auto=format&fit=crop&w=800&q=80",title:"Japanese Temple"},{url:"https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&w=800&q=80",title:"Cherry Blossoms"},{url:"https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800&q=80",title:"Tokyo Night"},{url:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",title:"Japanese Garden"}];document.querySelector("#app").innerHTML=`
  <div class="header">
    <h1>Anime Gallery</h1>
  </div>
  <div class="slideshow-container">
    ${d.map((o,t)=>`
      <div class="slide ${t===0?"active":""}">
        <img src="${o.url}" alt="${o.title}">
        <div class="slide-title">${o.title}</div>
      </div>
    `).join("")}
    <button class="prev-btn">←</button>
    <button class="next-btn">→</button>
    <div class="dots-container">
      ${d.map((o,t)=>`
        <div class="dot ${t===0?"active":""}" data-index="${t}"></div>
      `).join("")}
    </div>
  </div>
`;let r=0;const i=document.querySelectorAll(".slide"),n=document.querySelectorAll(".dot");function l(o){o>=i.length&&(r=0),o<0&&(r=i.length-1),i.forEach(t=>t.classList.remove("active")),n.forEach(t=>t.classList.remove("active")),i[r].classList.add("active"),n[r].classList.add("active")}function u(){r++,l(r)}function p(){r--,l(r)}document.querySelector(".next-btn").addEventListener("click",u);document.querySelector(".prev-btn").addEventListener("click",p);n.forEach(o=>{o.addEventListener("click",()=>{r=parseInt(o.dataset.index),l(r)})});setInterval(u,5e3);
