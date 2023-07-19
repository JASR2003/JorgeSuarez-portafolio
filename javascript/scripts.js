const cardsPaginas = document.querySelector("#cards-paginas");

const cardsPaginasContenido = [];

cardsPaginasContenido.push({
    image: './imgs/png/pokedex.jpeg',
    imageAlt: 'img pokedex',
    title: 'pokedex api',
    text: 'Carta Pokemon utilizando la PokeAPI, al cargar la página una función elige un número aleatorio y con ese número trae los valores del pokemon solicitado',
    link: 'https://jasr2003.github.io/pokedex-card/',
})


function renderCards(array){
   for (pages of array) {
        const cardPageContainer = document.createElement('div');
        cardPageContainer.classList.add('col-sm-12','col-md-6','col-lg-4','my-2');

        const cardPage = document.createElement('div');
        cardPage.classList.add('card','w-100','border-dark-subtle');

        const cardImg = document.createElement('img');
        cardImg.classList.add('card-img-top');
        cardImg.setAttribute('src', pages.image);
        cardImg.setAttribute('alt', pages.imageAlt);

        const cardInfoDiv = document.createElement('div');
        cardInfoDiv.classList.add('card-body','pb-4','text-center');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title','text-center','fs-4','text-uppercase','fw-bold','text-bg-white','pt-3');
        cardTitle.innerText = pages.title;
        const cardText = document.createElement('p');
        cardText.classList.add('card-text','text-center','fs-6','fw-normal','text-bg-white','pt-3');
        cardText.innerText = pages.text;

        const cardLink = document.createElement('a');
        cardLink.classList.add('btn','btn-primary');
        cardLink.setAttribute('target', '_blank');
        cardLink.setAttribute('href', pages.link);
        cardLink.innerText = "Visitar website";

        cardInfoDiv.append(cardTitle, cardText, cardLink);

        cardPage.append(cardImg, cardInfoDiv);

        cardPageContainer.append(cardPage);

        cardsPaginas.append(cardPageContainer);
        console.log("gol")
}
}

renderCards(cardsPaginasContenido);