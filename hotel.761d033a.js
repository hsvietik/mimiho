window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="test-slider"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-pagination"),o=e.querySelector(".swiper-button-left"),l=e.querySelector(".swiper-button-right");swiper=new Swiper(e.querySelector(".swiper"),{speed:1500,slidesPerView:"auto",spaceBetween:25,pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'<li class="'+t+'"></li>'}},navigation:{nextEl:l,prevEl:o},breakpoints:{1023.98:{spaceBetween:40}}})}))}),!1),window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="details-rest"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-button-left"),o=e.querySelector(".swiper-button-right");new Swiper(e.querySelector(".swiper-details-rest"),{speed:1500,slidesPerView:"auto",spaceBetween:20,navigation:{nextEl:o,prevEl:t},breakpoints:{1023.98:{spaceBetween:34},1279.98:{spaceBetween:87}}})}))}),!1),window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="details-hotel"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-button-left"),o=e.querySelector(".swiper-button-right");new Swiper(e.querySelector(".swiper-details-hotel"),{speed:1500,slidesPerView:"auto",spaceBetween:20,swipeDirection:"prev",navigation:{nextEl:o,prevEl:t},breakpoints:{1023.98:{spaceBetween:34},1279.98:{spaceBetween:87}}}).slideTo(12,!1,!1)}))}),!1);new Swiper(".swiper",{direction:"horizontal",slidesPerView:2,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});(()=>{const e={openModalBtns:document.querySelectorAll("[data-modal-open-room]"),closeModalBtns:document.querySelectorAll("[data-modal-close-room]"),modal:document.querySelector("[data-modal-room]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach((e=>{e.addEventListener("click",t)})),e.closeModalBtns.forEach((e=>{e.addEventListener("click",t)}))})(),(()=>{const e={openModalBtns:document.querySelectorAll("[data-modal-open-price]"),closeModalBtns:document.querySelectorAll("[data-modal-close-price]"),modal:document.querySelector("[data-modal-price]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach((e=>{e.addEventListener("click",t)})),e.closeModalBtns.forEach((e=>{e.addEventListener("click",t)}))})();
//# sourceMappingURL=hotel.761d033a.js.map
