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



AOS.init({
  delay: 200,
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

// console log current selected language

let language = document.querySelector(".language");






let landingText = document.querySelector(".landing-title");
let landingContent = document.querySelector(".landing-content");
let aboutText = document.querySelector(".about-title");
let aboutContent = document.querySelector(".about-content");
let offersText = document.querySelector(".offre-title");
let offersBac = document.querySelector(".bac");
let offersMaster = document.querySelector(".master");
let offersDoctorat = document.querySelector(".doctorat");

let avisText = document.querySelector(".avis-title");
//get all div with class name usr1

let avisContentUsr1 = document.querySelector(".usr1");
let avisContentUsr2 = document.querySelector(".usr2");
let avisContentUsr3 = document.querySelector(".usr3");
let avisContentUsr4 = document.querySelector(".usr4");


let univText = document.querySelector(".sw-title");

function ChangeLanguagetoEnglosh() {
  landingText.children[0].textContent = "Welcome To Bourseni";
  landingContent.children[0].textContent = "Welcome to the home page of the Overseas Education Scholarship program. Explore scholarship opportunities offered by different universities. Find out details about partner universities, scholarship conditions and start your educational journey abroad today.";
  aboutText.children[0].textContent = "About Us";
  aboutContent.children[0].children[0].textContent = "Are you looking for funding to make your higher education dreams come true? Our website is here to help you! We offer scholarships dedicated to bright and motivated students in Tunisia. These scholarships, offered in partnership with prestigious educational institutions, will allow you to concentrate on your studies and achieve your academic goals without financial constraints. Check out our offers and get started towards a bright future today!";
  offersText.children[0].textContent = "Bourseni Offers";
  offersBac.children[0].children[0].textContent = "Bachelor's Scholarships";
  offersMaster.children[0].children[0].textContent = "Master's Scholarships";
  offersDoctorat.children[0].children[0].textContent = "Doctorate Scholarships";
  offersBac.children[1].children[0].textContent = "Tunisian bachelors, numerous scholarships exist for your higher studies in Tunisia or abroad. Consult the Ministry of Higher Education and Edufrance for more information.";
  offersMaster.children[1].children[0].textContent = "Are you a Tunisian student looking for a scholarship to finance your master's degree? Bourseni offers you a wide range of scholarships to help you achieve your academic goals.";
  offersDoctorat.children[1].children[0].textContent = "Are you a Tunisian student looking for a scholarship to finance your doctorate? Bourseni offers you a wide range of scholarships to help you achieve your academic goals.";
  offersBac.children[1].children[1].textContent ="For further information!";
  offersMaster.children[1].children[1].textContent ="For further information!";
  offersDoctorat.children[1].children[1].textContent ="For further information!";

  avisText.children[0].textContent = "Reviews";
  avisContentUsr1.children[1].children[1].textContent = "I am very happy to have received a scholarship from Bourseni. This scholarship allowed me to pursue my studies in France and I am very grateful for this opportunity.";
  avisContentUsr2.children[1].children[1].textContent = "I am very grateful to Bourseni for helping me finance my Master's studies abroad. Thanks to this scholarship, I was able to realize my dream of studying abroad!";
  avisContentUsr3.children[1].children[1].textContent = "I highly recommend Bourseni to all Tunisian doctoral students who wish to finance their thesis abroad. Thanks to this grant, I was able to carry out my research project in the best conditions!";
  avisContentUsr4.children[1].children[1].textContent = "Thanks to Bourseni, I was able to obtain a scholarship to continue my studies abroad. I highly recommend this program to all ambitious Tunisian students!";
  univText.children[0].textContent = "Our Partner Universities";
}
language.addEventListener("change", () => {
  if (language.value === "en") {
    ChangeLanguagetoEnglosh();
  }
  // if french return to default
  else {
    landingText.children[0].textContent = "Bienvenue sur Bourseni";
    landingContent.children[0].textContent = "Bienvenue sur la page d'accueil du programme de bourses d'études à l'étranger. Explorez les opportunités de bourses offertes par différentes universités. Découvrez les détails sur les universités partenaires, les conditions de bourse et commencez dès aujourd'hui votre parcours éducatif à l'étranger.";
    aboutText.children[0].textContent = "À propos de nous";
    aboutContent.children[0].children[0].textContent = "Vous cherchez un financement pour réaliser vos rêves d'études supérieures ? Notre site web est là pour vous aider ! Nous proposons des bourses d'études dédiées aux étudiants brillants et motivés en Tunisie. Ces bourses, offertes en partenariat avec des institutions éducatives prestigieuses, vous permettront de vous concentrer sur vos études et d'atteindre vos objectifs académiques sans contraintes financières. Découvrez nos offres et lancez-vous vers un avenir radieux dès aujourd'hui !";
    offersText.children[0].textContent = "Offres Bourseni";

    offersBac.children[0].children[0].textContent = "Baccalauréat";
    offersMaster.children[0].children[0].textContent = "Bourses de Master";
    offersDoctorat.children[0].children[0].textContent = "Bourses de Doctorat";
    offersBac.children[1].children[0].textContent = "Bacheliers tunisiens, de nombreuses bourses existent pour vos études supérieures en Tunisie ou à l'étranger. Consultez le Ministère de l'Enseignement Supérieur et Edufrance pour plus d'infos.";
    offersMaster.children[1].children[0].textContent = "Vous êtes étudiant tunisien à la recherche d'une bourse pour financer votre master ? Bourseni vous propose un large choix de bourses pour vous aider à atteindre vos objectifs académiques.";
    offersDoctorat.children[1].children[0].textContent = "Vous êtes étudiant tunisien à la recherche d'une bourse pour financer votre doctorat ? Bourseni vous propose un large choix de bourses pour vous aider à atteindre vos objectifs académiques.";
    offersBac.children[1].children[1].textContent ="Pour plus d'informations!";
    offersMaster.children[1].children[1].textContent ="Pour plus d'informations!";
    offersDoctorat.children[1].children[1].textContent ="Pour plus d'informations!";
    
    
    avisText.children[0].textContent = "Avis";
    avisContentUsr1.children[1].children[1].textContent = "Je suis très heureux d'avoir reçu une bourse de Bourseni. Cette bourse m'a permis de poursuivre mes études en France et je suis très reconnaissant pour cette opportunité.";
    avisContentUsr2.children[1].children[1].textContent = "Je suis très reconnaissant à Bourseni de m'avoir aidé à financer mes études de Master à l'étranger. Grâce à cette bourse, j'ai pu réaliser mon rêve d'étudier à l'étranger !";
    avisContentUsr3.children[1].children[1].textContent = "Je recommande vivement Bourseni à tous les doctorants tunisiens qui souhaitent financer leur thèse à l'étranger. Grâce à cette bourse, j'ai pu réaliser mon projet de recherche dans les meilleures conditions !";
    avisContentUsr4.children[1].children[1].textContent = "Grâce à Bourseni, j'ai pu obtenir une bourse pour poursuivre mes études à l'étranger. Je recommande vivement ce programme à tous les étudiants tunisiens ambitieux !";
    univText.children[0].textContent = "Nos Universités Partenaires";
  }
})