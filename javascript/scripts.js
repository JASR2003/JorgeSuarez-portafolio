const cardsPaginas = document.querySelector("#cards-paginas");
const cardsCursos = document.querySelector("#cards-cursos");

const cardsPaginasContenido = [];
const cardsCursosContenido = [];

cardsPaginasContenido.push({
    image: './imgs/png/pokedex.jpeg',
    imageAlt: 'img pokedex',
    title: 'pokedex api',
    text: 'Carta Pokemon utilizando la PokeAPI, al cargar la página una función elige un número aleatorio y con ese número trae los valores del pokemon solicitado',
    link: 'https://jasr2003.github.io/pokedex-card/',
})
cardsPaginasContenido.push({
    image: './imgs/png/calculadora.jpeg',
    imageAlt: 'img calculadora',
    title: 'Calculadora',
    text: 'Calculadora hecha a base de un tutorial con las 4 opciones básicas de una calculadora, sumar, restar, multiplicar y dividir con la opción de cambiar el color de la calculadora',
    link: 'https://jasr2003.github.io/calculadora/',
})
cardsPaginasContenido.push({
    image: './imgs/png/bootstrapPlatzi.jpeg',
    imageAlt: 'img bootstrap Platzi',
    title: 'PlatziConf Hawaii',
    text: 'Página de ejemplo de platzi para aprender como es el uso de Bootstrap a la hora de escribir código',
    link: 'https://jasr2003.github.io/bootstrap-platzi/',
})

cardsCursosContenido.push({
    title: "Curso Definitivo de HTML y CSS",
    text: "Aprende HTML y CSS desde cero, sin conocimientos previos. Conoce todo sobre etiquetas HTML, semántica, CSS, como dar estilos a los elementos de tu sitio web, medidas EM/REM, modelo de caja y mucho más. Aprenderás todo lo que necesitas para empezar en el desarrollo web online y a construir sitios para internet de manera eficiente.",
    link: "https://platzi.com/cursos/html-css/"
})

cardsCursosContenido.push({
    title: "Curso Práctico de HTML y CSS",
    text: "¡Desarrolla un clon de Google con HTML y CSS! Pon en práctica todo lo que sabes de posicionamiento, modelo de cajas, tipos de display, selectores, flexbox y CSS Grid junto a Diego De Granda.",
    link: "https://platzi.com/cursos/html-practico/"
})

cardsCursosContenido.push({
    title: "Curso de Frontend Developer",
    text: "Domina las bases de HTML y CSS. Conoce la anatomía de un documento HTML, sus elementos y las propiedades de CSS. Maqueta las pantallas principales de tu página web con responsive design.",
    link: "https://platzi.com/cursos/frontend-developer/"
})

cardsCursosContenido.push({
    title: "Curso Práctico de Frontend Developer",
    text: "¡Aprende desarrollo frontend con responsive design! Pon en práctica todo lo que sabes sobre maquetación con HTML y CSS para construir las páginas y componentes de un e-commerce profesional.",
    link: "https://platzi.com/cursos/frontend-developer-practico/"
})

cardsCursosContenido.push({
    title: "Curso de Responsive Design: Maquetación Mobile First",
    text: "El 50% del tráfico en internet se realiza desde dispositivos móviles, convirtiendo una prioridad el desarrollar frontend para smartphones, tablets y laptops.",
    link: "https://platzi.com/cursos/mobile-first/"
})

cardsCursosContenido.push({
    title: "Curso Práctico de Maquetación en CSS",
    text: "La intención del curso es reforzar tus conocimientos en maquetación de HTML 5 semántico mientras creas un espacio para promocionar tu trabajo profesional.",
    link: "https://platzi.com/cursos/practico-css/"
})

cardsCursosContenido.push({
    title: "Curso de CSS Grid Básico",
    text: "¡Aprende a crear layouts dinámicos con CSS Grid! Aplica diseños complejos en tu sitio web con pocas líneas de código CSS. Construye grillas para distribuir tus contenedores y elementos HTML ágilmente.",
    link: "https://platzi.com/cursos/css-grid/"
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
        const cardText = document.createElement('p');
        cardText.classList.add('card-text','text-center','fs-6','fw-normal','text-bg-white','pt-3');
        cardText.innerText = pages.text;

        const cardLink = document.createElement('a');
        cardLink.classList.add('btn','btn-primary', 'mt-auto');
        cardLink.setAttribute('target', '_blank');
        cardLink.setAttribute('href', pages.link);
        cardLink.innerText = "Visitar website";

        cardInfoDiv.append(cardTitle, cardText, cardLink);

        cardPage.append(cardImg, cardInfoDiv);

        cardPageContainer.append(cardPage);

        cardsPaginas.append(cardPageContainer);
}
}

function renderCardsCursos(array){
   for (courses of array) {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card','my-4');

        const cardTitle = document.createElement('div');
        cardTitle.classList.add('card-header','fs-4','text-uppercase','fw-bold','text-bg-white');
        cardTitle.innerText = courses.title;

        const cardInfoDiv = document.createElement('div');
        cardInfoDiv.classList.add('card-body');

        const cardText = document.createElement('p');
        cardText.classList.add('card-text','fs-6','fw-normal','text-bg-white');
        cardText.innerText = courses.text;

        const cardLink = document.createElement('a');
        cardLink.classList.add('btn','btn-primary');
        cardLink.setAttribute('target', '_blank');
        cardLink.setAttribute('href', courses.link);
        cardLink.innerText = "accede al curso";

        cardInfoDiv.append(cardText, cardLink);

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