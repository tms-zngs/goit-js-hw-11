import{a as c,S as u,i as n}from"./assets/vendor-DEZpR2tN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="49644003-f004b35ee3a715b0e9313818f";function p(i){return c.get("https://pixabay.com/api/",{params:{key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data.hits).catch(t=>(console.log(t),[]))}function d(){document.querySelector(".loader").classList.add("is-visible")}function h(){document.querySelector(".loader").classList.remove("is-visible")}const a=document.querySelector(".gallery");function m(i){const t=i.slice(0,9).map(o=>`<li class="gallery-item">
            <a class="gallery-link" href="${o.largeImageURL}">
                <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}"/>
            </a>
            <ul class="info-list">
                <li class="info-item">
                    <h2 class="info-title">Likes</h2>
                    <p class="info-text">${o.likes}</p>
                </li>
                <li class="info-item">
                    <h2 class="info-title">Views</h2>
                    <p class="info-text">${o.views}</p>
                </li>
                <li class="info-item">
                    <h2 class="info-title">Comments</h2>
                    <p class="info-text">${o.comments}</p>
                </li>
                <li class="info-item">
                    <h2 class="info-title">Downloads</h2>
                    <p class="info-text">${o.downloads}</p>
                </li>
            </ul>
        </li>`).join("");a.innerHTML=t,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}document.querySelector(".form").addEventListener("submit",y);function y(i){i.preventDefault();const t=i.currentTarget.elements["search-text"].value.trim();if(!t){n.error({message:"Please enter a search query.",position:"topRight"});return}a.innerHTML="",d(),p(t).then(s=>{if(console.log(s),s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(s)}).catch(s=>{console.log(s)}).finally(()=>{h()})}
//# sourceMappingURL=index.js.map
