const cardsPaginas = document.querySelector("#cards-paginas");

const cardsPaginasContenido = [];

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
    title: 'HawaiiConf Platzi',
    text: 'Página de ejemplo de platzi para aprender como es el uso de Bootstrap a la hora de escribir código',
    link: 'https://jasr2003.github.io/bootstrap-platzi/',
})


function renderCards(array){
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

renderCards(cardsPaginasContenido);

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