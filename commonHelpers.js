import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{S as g}from"./assets/vendor-870f0eb5.js";const s=[{preview:"/images/schema11.jpg",original:"/images/schema1.4.png",description:"schema"},{preview:"/images/lampa2.1.png",original:"/images/lampa2.4.png",description:"lampa"},{preview:"/images/mobile3.1.png",original:"/images/mobile3.4.png",description:"mobile"},{preview:"/images/mitting_room4.1.png",original:"/images/mitting_room4.4.png",description:"mitting-room"},{preview:"/images/tennis_room5.1.png",original:"/images/tennis__room5.4.png",description:"tennis"},{preview:"/images/work_room6.1.png",original:"/images/work_room6.4.png",description:"workroom"},{preview:"/images/koffe7.1.png",original:"/images/koffe7.4.png",description:"coffe"},{preview:"/images/worker8.1.png",original:"/images/worker8.4.png",description:"worker"},{preview:"/images/lesson9.1.png",original:"/images/lesson9.4.png",description:"lesson"}],m=document.querySelector(".gallery");function l(e){let i="";for(const o of e){const{preview:r,original:n,description:a}=o;i+=`
      <li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img class="gallery-image" src="${r}" alt="${a}" />
  </a>
</li>
    `}m.insertAdjacentHTML("beforeend",i)}l(s);new g(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
