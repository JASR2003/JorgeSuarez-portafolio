const cardsPaginas = document.querySelector("#cards-paginas");
const cardsCursos = document.querySelector("#cards-cursos");
const modalCursos = document.querySelector("#exampleModal");
const modalBtn = document.querySelector("#modalBtn");
const carouselCard = document.querySelector("#carouselCard");
const header = document.querySelector("#header");

const seeMoreBtn = document.getElementById("btn-courses");
const seeMoreBtnClose = document.getElementById("btn-courses-close");
const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

const cardsPaginasContenido = [];
const cardsCursosContenido = [];

let maxCards = 6;

seeMoreBtn.innerText = "Ver más";
seeMoreBtnClose.innerText = "Ver menos";

seeMoreBtn.addEventListener('click', () => {
  seeMoreBtn.classList.add("d-none");
  seeMoreBtnClose.classList.remove("d-none");
  maxCards = cardsCursosContenido.length;
  cardsCursos.innerHTML = "";
  renderCardsCursos(cardsCursosContenido);
})
seeMoreBtnClose.addEventListener('click', () => {
  seeMoreBtnClose.classList.add("d-none");
  seeMoreBtn.classList.remove("d-none");
  maxCards = 6;
  cardsCursos.innerHTML = "";
  renderCardsCursos(cardsCursosContenido);
})

cardsPaginasContenido.push({
    image: './imgs/png/pokedex.jpeg',
    imageAlt: 'img pokedex',
    title: 'pokedex api',
    tag: 'HTML, CSS, JavaScript',
    text: 'Presento una carta Pokémon utilizando la PokeAPI. Al cargar la página, una función elige un número aleatorio y muestra los valores del Pokémon correspondiente.',
    link: 'https://jasr2003.github.io/pokedex-card/',
})
cardsPaginasContenido.push({
    image: './imgs/png/calculadora.jpeg',
    imageAlt: 'img calculadora',
    title: 'Calculadora',
    tag: 'HTML, CSS, JavaScript',
    text: 'Desarrollé una calculadora basada en un tutorial, con las cuatro operaciones básicas. Además, agregué la opción de cambiar el color de la misma.',
    link: 'https://jorgesuarez-calculadora.netlify.app/',
})
cardsPaginasContenido.push({
    image: './imgs/png/taxiGame.jpeg',
    imageAlt: 'img taxi game',
    title: 'Taxi Game',
    tag: 'HTML, CSS, JavaScript',
    text: 'Hice un juego en el que debes llevar un vehículo del punto A al punto B en honor a una de mis páginas favoritas, Friv.com. El objetivo era aprender a utilizar Canva JavaScript.',
    link: 'https://jorgesuarez-taxigame.netlify.app/',
})
cardsPaginasContenido.push({
    image: './imgs/png/bootstrapPlatzi.jpeg',
    imageAlt: 'img bootstrap Platzi',
    title: 'PlatziConf Hawaii',
    tag: 'HTML, CSS, Bootstrap, JavaScript',
    text: 'Esta página de ejemplo recrea el diseño de PlatziConf, y fue desarrollada para aprender cómo utilizar Bootstrap en la escritura de código.',
    link: 'https://jorgesuarez-bootstrap.netlify.app/',
})
cardsPaginasContenido.push({
    image: './imgs/png/piedra-papel-tijera.jpeg',
    imageAlt: 'img Piedra Papel Tijera',
    title: 'Piedra,Papel,Tijera',
    tag: 'HTML, CSS, JavaScript',
    text: 'El clásico Piedra Papel o Tijera de toda la vida, Intenta ganarle a la máquina, es al mejor de 5',
  link: 'https://jorgesuarez-piedra-papel-tijera.netlify.app/',
})

cardsCursosContenido.push({
    title: "Curso Definitivo de HTML y CSS",
    // image:"./imgs/png/certificados/diploma-html-css-1.png",
    // imageAlt:"diploma html css"
})

cardsCursosContenido.push({
    title: "Curso Práctico de HTML y CSS",
    // image:"./imgs/png/certificados/diploma-html-practico-1.png",
    // imageAlt:"diploma html css practico"
})

cardsCursosContenido.push({
    title: "Curso de Frontend Developer",
    // image:"./imgs/png/certificados/diploma-frontend-developer-1.png",
    // imageAlt:"diploma frontend developer"
})

cardsCursosContenido.push({
    title: "Curso Práctico de Frontend Developer",
    // image:"./imgs/png/certificados/diploma-frontend-developer-practico-1.png",
    // imageAlt:"diploma frontend developer curso practico"
})

cardsCursosContenido.push({
    title: "Curso de Responsive Design: Maquetación Mobile First",
    // image:"./imgs/png/certificados/diploma-mobile-first-1.png",
    // imageAlt:"diploma mobile first"
})

cardsCursosContenido.push({
    title: "Curso Práctico de Maquetación en CSS",
    // image:"./imgs/png/certificados/diploma-practico-css-1.png",
    // imageAlt:"diploma maquetacion css"
})

cardsCursosContenido.push({
    title: "Curso de CSS Grid Básico",
    // image:"./imgs/png/certificados/diploma-css-grid-1.png",
    // imageAlt:"diploma css grid"
})

cardsCursosContenido.push({
    title: "Curso Profesional de CSS Grid Layout",
    // image:"./imgs/png/certificados/diploma-css-grid-layout-1.png",
    // imageAlt:"diploma css grid layout"
})

cardsCursosContenido.push({
    title: "Curso de Diseño Web con CSS Grid y Flexbox",
    // image:"./imgs/png/certificados/diploma-flexbox-css-grid-1.png",
    // imageAlt:"diploma css grid y flexbox"
})

cardsCursosContenido.push({
    title: "Curso de Bootstrap 4",
    // image:"./imgs/png/certificados/diploma-bootstrap-1.png",
    // imageAlt:"diploma bootstrap"
})
cardsCursosContenido.push({
    title: "Curso de TailwindCSS",
    // image:"./imgs/png/certificados/diploma-bootstrap-1.png",
    // imageAlt:"diploma bootstrap"
})
cardsCursosContenido.push({
    title: "Curso de TailwindCSS 2 y 3",
    // image:"./imgs/png/certificados/diploma-bootstrap-1.png",
    // imageAlt:"diploma bootstrap"
})

cardsCursosContenido.push({
    title: "Curso Básico de JavaScript",
    // image:"./imgs/png/certificados/diploma-basico-javascript-1.png",
    // imageAlt:"diploma basico javascript"
})
cardsCursosContenido.push({
    title: "Fundamentos de JavaScript",
    // image:"./imgs/png/certificados/diploma-basico-javascript-1.png",
    // imageAlt:"diploma basico javascript"
})

cardsCursosContenido.push({
    title: "Curso Práctico de JavaScript",
    // image:"./imgs/png/certificados/diploma-javascript-practico-1.png",
    // imageAlt:"diploma practico javascript"
})

cardsCursosContenido.push({
    title: "Curso de Closures y Scope en JavaScript",
    // image:"./imgs/png/certificados/diploma-javascript-closures-scope-1.png",
    // imageAlt:"diploma closures y scope javascript"
})

cardsCursosContenido.push({
    title: "Curso de ECMAScript: Historia y Versiones de JavaScript",
    // image:"./imgs/png/certificados/diploma-ecmascript-6-1.png",
    // imageAlt:"diploma ecmascript"
})
cardsCursosContenido.push({
    title: "Taller Práctico de JavaScript: Creando videojuegos con Canvas y JavaScript",
    // image:"./imgs/png/certificados/diploma-javascript-practico-videojuegos.png",
    // imageAlt:"diploma videojuego"
})
cardsCursosContenido.push({
    title: "Curso de Transformaciones y Transiciones en CSS",
    // image:"./imgs/png/certificados/diploma-transformaciones-transiciones-css.png",
    // imageAlt:"diploma Transformaciones y Transiciones"
})
cardsCursosContenido.push({
    title: "Curso de Diseño para Developers",
    // image:"./imgs/png/certificados/diploma-diseno-programadores.png",
    // imageAlt:"diploma diseño programadores"
})


function renderCardsPaginas(array){
   for (pages of array) {
        const cardPageContainer = document.createElement('div');
        cardPageContainer.classList.add('col-sm-12','col-md-6','col-lg-4','my-2');

        const cardPage = document.createElement('div');
        cardPage.classList.add('card','h-100','border-dark-subtle', 'd-flex', 'flex-column');

        const cardImg = document.createElement('img');
        cardImg.classList.add('card-img-top','img-change');
        cardImg.setAttribute('src', pages.image);
        cardImg.setAttribute('alt', pages.imageAlt);

        const cardInfoDiv = document.createElement('div');
        cardInfoDiv.classList.add('card-body','pb-4','text-center', 'd-flex', 'flex-column');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title','text-center','fs-4','text-uppercase','fw-bold','text-bg-white-lm','pt-3');
        cardTitle.innerText = pages.title;
        const cardTag = document.createElement('figcaption');
        cardTag.classList.add('text-center','fw-normal','text-bg-white-lm','fs-6','pb-3');
        cardTag.innerText =`Lenguajes utilizados: ${pages.tag}`;
        const cardText = document.createElement('p');
        cardText.classList.add('card-text','text-center','fs-6','fw-normal','text-bg-white-lm','pt-3');
        cardText.innerText = pages.text;

        const cardLink = document.createElement('a');
        cardLink.classList.add('btn','btn-primary', 'mt-auto');
        cardLink.setAttribute('target', '_blank');
        cardLink.setAttribute('href', pages.link);
        cardLink.innerText = "Visitar website";

        cardInfoDiv.append(cardTitle,cardTag, cardText, cardLink);

        cardPage.append(cardImg, cardInfoDiv);

        cardPageContainer.append(cardPage);

        cardsPaginas.append(cardPageContainer);
}
}

function renderCardsCursos(array) {
  for (let i = 0; i < array.length; i++) {
    const courses = array[i];
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card', 'my-3', 'col-10' , 'col-md-5', 'mx-auto','border','border-dark-subtle','rounded-4');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('fs-4', 'text-uppercase', 'fw-bold','card-cursos-header-lm', 'p-3','rounded-top-4');
    cardTitle.innerText = courses.title;

    const cardInfoDiv = document.createElement('div');
    cardInfoDiv.classList.add('card-body');

    const cardText = document.createElement('p');
    cardText.classList.add('card-text', 'fs-5', 'fw-normal', 'text-bg-white-lm');
    cardText.innerText = courses.title;

    if (i >= maxCards) {
      cardContainer.classList.add('d-none')
    }

    cardInfoDiv.append(cardText);

    cardContainer.append(cardInfoDiv);

    cardsCursos.append(cardContainer);
  }
}

renderCardsPaginas(cardsPaginasContenido);
renderCardsCursos(cardsCursosContenido);

$(".smooth-scroll").on("click", function(event) {
  event.preventDefault();
  var target = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(target).offset().top - 90
  }, 200);
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(var(--blue) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;