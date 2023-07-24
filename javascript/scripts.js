const cardsPaginas = document.querySelector("#cards-paginas");
const cardsCursos = document.querySelector("#cards-cursos");
const modalCursos = document.querySelector("#exampleModal");
const modalBtn = document.querySelector("#modalBtn");
const carouselCard = document.querySelector("#carouselCard");

const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

const cardsPaginasContenido = [];
const cardsCursosContenido = [];

cardsPaginasContenido.push({
    image: './imgs/png/pokedex.jpeg',
    imageAlt: 'img pokedex',
    title: 'pokedex api',
    tag: 'HTML, CSS, JavaScript',
    text: 'Carta Pokemon utilizando la PokeAPI, al cargar la página una función elige un número aleatorio y con ese número trae los valores del pokemon aleatorio',
    link: 'https://jasr2003.github.io/pokedex-card/',
})
cardsPaginasContenido.push({
    image: './imgs/png/calculadora.jpeg',
    imageAlt: 'img calculadora',
    title: 'Calculadora',
    tag: 'HTML, CSS, JavaScript',
    text: 'Calculadora hecha a base de un tutorial con las 4 opciones básicas de una calculadora, sumar, restar, multiplicar y dividir con la opción de cambiar el color de la calculadora',
    link: 'https://jasr2003.github.io/calculadora/',
})
cardsPaginasContenido.push({
    image: './imgs/png/bootstrapPlatzi.jpeg',
    imageAlt: 'img bootstrap Platzi',
    title: 'PlatziConf Hawaii',
    tag: 'HTML, CSS, Bootstrap, JavaScript',
    text: 'Página de ejemplo de platzi para aprender como es el uso de Bootstrap a la hora de escribir código',
    link: 'https://jasr2003.github.io/bootstrap-platzi/',
})

cardsCursosContenido.push({
    title: "Curso Definitivo de HTML y CSS",
    text: "Aprende HTML y CSS desde cero, sin conocimientos previos. Conoce todo sobre etiquetas HTML, semántica, CSS, como dar estilos a los elementos de tu sitio web, medidas EM/REM, modelo de caja y mucho más. Aprenderás todo lo que necesitas para empezar en el desarrollo web online y a construir sitios para internet de manera eficiente.",
    image:"./imgs/png/certificados/diploma-html-css-1.png",
    imageAlt:"diploma html css"
})

cardsCursosContenido.push({
    title: "Curso Práctico de HTML y CSS",
    text: "¡Desarrolla un clon de Google con HTML y CSS! Pon en práctica todo lo que sabes de posicionamiento, modelo de cajas, tipos de display, selectores, flexbox y CSS Grid junto a Diego De Granda.",
    image:"./imgs/png/certificados/diploma-html-practico-1.png",
    imageAlt:"diploma html css practico"
})

cardsCursosContenido.push({
    title: "Curso de Frontend Developer",
    text: "Domina las bases de HTML y CSS. Conoce la anatomía de un documento HTML, sus elementos y las propiedades de CSS. Maqueta las pantallas principales de tu página web con responsive design.",
    link: "https://platzi.com/cursos/frontend-developer/",
    image:"./imgs/png/certificados/diploma-frontend-developer-1.png",
    imageAlt:"diploma frontend developer"
})

cardsCursosContenido.push({
    title: "Curso Práctico de Frontend Developer",
    text: "¡Aprende desarrollo frontend con responsive design! Pon en práctica todo lo que sabes sobre maquetación con HTML y CSS para construir las páginas y componentes de un e-commerce profesional.",
    image:"./imgs/png/certificados/diploma-frontend-developer-practico-1.png",
    imageAlt:"diploma frontend developer curso practico"
})

cardsCursosContenido.push({
    title: "Curso de Responsive Design: Maquetación Mobile First",
    text: "El 50% del tráfico en internet se realiza desde dispositivos móviles, convirtiendo una prioridad el desarrollar frontend para smartphones, tablets y laptops.",
    image:"./imgs/png/certificados/diploma-mobile-first-1.png",
    imageAlt:"diploma mobile first"
})

cardsCursosContenido.push({
    title: "Curso Práctico de Maquetación en CSS",
    text: "La intención del curso es reforzar tus conocimientos en maquetación de HTML 5 semántico mientras creas un espacio para promocionar tu trabajo profesional.",
    image:"./imgs/png/certificados/diploma-practico-css-1.png",
    imageAlt:"diploma maquetacion css"
})

cardsCursosContenido.push({
    title: "Curso de CSS Grid Básico",
    text: "¡Aprende a crear layouts dinámicos con CSS Grid! Aplica diseños complejos en tu sitio web con pocas líneas de código CSS. Construye grillas para distribuir tus contenedores y elementos HTML ágilmente.",
    image:"./imgs/png/certificados/diploma-css-grid-1.png",
    imageAlt:"diploma css grid"
})

cardsCursosContenido.push({
    title: "Curso Profesional de CSS Grid Layout",
    text: "Aprende CSS Grid Layout para maquetar sitios web complejos sin complicaciones. Analiza tus diseños, divide tu aplicación en cuadrículas y conviértelas en estilos CSS. Integra CSS Grid con Flexbox y el modelo de caja para alinear tus elementos exactamente donde deben estar.",
    image:"./imgs/png/certificados/diploma-css-grid-layout-1.png",
    imageAlt:"diploma css grid layout"
})

cardsCursosContenido.push({
    title: "Curso de Diseño Web con CSS Grid y Flexbox",
    text: "Domina Flexbox y CSS Grid para construir diseños web de nivel superior. Familiarízate con los términos, herramientas, flujos de trabajo y tendencias de diseño más importantes del desarrollo frontend profesional.",
    image:"./imgs/png/certificados/diploma-flexbox-css-grid-1.png",
    imageAlt:"diploma css grid y flexbox"
})

cardsCursosContenido.push({
    title: "Curso de Bootstrap 4",
    text: "Crear un sitio web responsivo que se vea bien en cualquier dispositivo, desde computadoras de escritorio hasta teléfonos inteligentes y tabletas utilizando Bootstrap",
    image:"./imgs/png/certificados/diploma-bootstrap-1.png",
    imageAlt:"diploma bootstrap"
})

cardsCursosContenido.push({
    title: "Curso Básico de JavaScript",
    text: "Conoce los conceptos clave del lenguaje de programación que se está comiendo al mundo. Aprende qué es una variable, una función, un objeto y dónde se guardan esos valores. Descubre qué es Scope y cómo se utilizan los loops. Obtén las herramientas para saber cómo tomar decisiones y validar acciones.",
    image:"./imgs/png/certificados/diploma-basico-javascript-1.png",
    imageAlt:"diploma basico javascript"
})

cardsCursosContenido.push({
    title: "Curso Práctico de JavaScript",
    text: "Aprender un lenguaje de programación requiere de práctica constante, con JavaScript puedes crear proyectos increíbles que logren resolver problemas de la vida real por medio de aplicaciones web.",
    image:"./imgs/png/certificados/diploma-javascript-practico-1.png",
    imageAlt:"diploma practico javascript"
})

cardsCursosContenido.push({
    title: "Curso de Closures y Scope en JavaScript",
    text: "Comprende a la perfección los diferentes alcances que tienen tus variables cuando son declaradas en JavaScript. En este curso aprenderás los conceptos fundamentales de Scope global y local, cómo declarar variables con const, let y var. Con ejercicios prácticos domina el uso de Closures en tus desarrollos.",
    image:"./imgs/png/certificados/diploma-javascript-closures-scope-1.png",
    imageAlt:"diploma closures y scope javascript"
})

cardsCursosContenido.push({
    title: "Curso de ECMAScript: Historia y Versiones de JavaScript",
    text: "JavaScript es el lenguaje más utilizado para desarrollo de aplicaciones web, principalmente en el frontend. Cada año, ECMA International publica una nueva edición de ECMAScript, la especificación a la cual se ajusta JavaScript. Aprende las nuevas características que implementa ECMAScript desde la versión ES6 hasta la versión ES13.",
    image:"./imgs/png/certificados/diploma-ecmascript-6-1.png",
    imageAlt:"diploma ecmascript"
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
        cardTitle.classList.add('card-title','text-center','fs-4','text-uppercase','fw-bold','text-bg-white','pt-3');
        cardTitle.innerText = pages.title;
        const cardTag = document.createElement('figcaption');
        cardTag.classList.add('text-center','fw-normal','text-bg-white','fs-6','pb-3');
        cardTag.innerText ="se usó " + pages.tag;
        const cardText = document.createElement('p');
        cardText.classList.add('card-text','text-center','fs-6','fw-normal','text-bg-white','pt-3');
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
    cardContainer.classList.add('card', 'my-4', 'col-10', 'mx-auto','border','border-dark-subtle','rounded-4');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('fs-4', 'text-uppercase', 'fw-bold','card-cursos-header', 'p-3','rounded-top-4');
    cardTitle.innerText = courses.title;

    const cardInfoDiv = document.createElement('div');
    cardInfoDiv.classList.add('card-body');

    const cardText = document.createElement('p');
    cardText.classList.add('card-text', 'fs-6', 'fw-normal', 'text-bg-white');
    cardText.innerText = courses.text;

    const carouselDiv = document.createElement("div");
    carouselDiv.classList.add("carousel-item");

    const image = document.createElement('img');
    image.classList.add("d-block", "w-100");
    image.setAttribute('src', courses.image);
    image.setAttribute('alt', courses.imageAlt);

    carouselDiv.append(image);

    if (i === 0) {
      carouselDiv.classList.add("active");
    }

    carouselCard.append(carouselDiv);

    cardInfoDiv.append(cardText);

    cardContainer.append(cardTitle, cardInfoDiv);

    cardsCursos.append(cardContainer);
  }
}

renderCardsPaginas(cardsPaginasContenido);
renderCardsCursos(cardsCursosContenido);

$(document).ready(function() {
  // Agrega un desplazamiento suave a los enlaces internos
  $(".smooth-scroll").on("click", function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();

    // Obtiene el destino del enlace
    var target = $(this.hash);

    // Realiza el desplazamiento suave al destino
    $("html, body").animate({
      scrollTop: target.offset().top
    }, 500); // Cambia el valor "1000" para ajustar la duración de la transición
  });
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