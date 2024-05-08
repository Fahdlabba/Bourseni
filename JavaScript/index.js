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

let p1= document.querySelector("#p1");
let p2= document.querySelector("#p2");
let p3= document.querySelector("#p3");
let p4= document.querySelector("#p4");

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
  p1.textContent = "I am very grateful for the scholarship I received from Bourseni. It has allowed me to pursue my studies in the field of my choice without worrying about financial constraints. I highly recommend it!";
  p2.textContent = "Thanks to Bourseni, I was able to complete my master's degree in a prestigious university abroad. The scholarship covered all my expenses and allowed me to focus on my studies.";
  p3.textContent = "I am very satisfied with the scholarship I received from Bourseni. It has enabled me to pursue my doctoral studies in a renowned institution without any financial worries. I am grateful for this opportunity.";
  p4.textContent = "I would like to thank Bourseni for the scholarship I received. It has allowed me to pursue my studies in a prestigious university and has opened up new opportunities for me. I am very grateful for this support.";
  
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
    p1.textContent = "Je suis très reconnaissant pour la bourse que j'ai reçue de Bourseni. Elle m'a permis de poursuivre mes études dans le domaine de mon choix sans me soucier des contraintes financières. Je la recommande vivement !";
    p2.textContent = "Grâce à Bourseni, j'ai pu terminer mon master dans une université prestigieuse à l'étranger. La bourse a couvert toutes mes dépenses et m'a permis de me concentrer sur mes études.";
    p3.textContent = "Je suis très satisfait de la bourse que j'ai reçue de Bourseni. Elle m'a permis de poursuivre mes études doctorales dans une institution renommée sans aucune inquiétude financière. Je suis reconnaissant pour cette opportunité.";
    p4.textContent = "Je tiens à remercier Bourseni pour la bourse que j'ai reçue. Elle m'a permis de poursuivre mes études dans une université prestigieuse et m'a ouvert de nouvelles opportunités. Je suis très reconnaissant pour ce soutien.";
    
    univText.children[0].textContent = "Nos Universités Partenaires";
  }
})