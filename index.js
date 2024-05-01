const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
});







let landingImage = document.querySelector(".landing");
landingImage.style.backgroundImage = `url(./src/cours-a-distance-scaled.jpg)`;
landingImage.style.backgroundSize = "cover";




let logo = document.createElement("img");

logo.src = "./src/symbole-bourse-etudes-logo-vectoriel-piece-dollar-portant-chapeau-graduation-pret-etudiant-pret-argent-pour-education_642540-247.avif";

let imageConatiner = document.querySelector(".left-footer");

imageConatiner.appendChild(logo);


let logoContainer = document.querySelector(".logo")
logoContainer.appendChild(logo);
