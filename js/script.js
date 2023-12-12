const container = document.getElementById("container");
let characters = [];

const getAllCharacters = async () => {
    try {
        const response = await fetch("https://dattebayo-api.onrender.com/characters");
        const data = await response.json();
        characters = data.characters;
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        characters = [];
    }
};

const criarCards = () => {
    container.innerHTML = "";
    const randomCharacters = characters;

    if (characters.length > 0) {
        for (const character of randomCharacters) {
            const card = document.createElement("div");
            card.classList.add("card");

            const rankPartI = character.rank && character.rank.ninjaRank && character.rank.ninjaRank["Part I"] || character.rank && character.rank.ninjaRank && character.rank.ninjaRank["Part II"] || character.rank && character.rank.ninjaRank && character.rank.ninjaRank["Gaiden"];

            card.innerHTML = `
                <div class="card-button">
                    <button onclick="deletarCard(${character.id})">✖</button>
                </div>
                <div>
                    <img class="card-img" src="${character.images[0]}" alt="${character.name}" />
                </div>
                <div class="card-info">
                    <h2 class="card-title">${character.name}</h2>
                    <p class="card-rank">${rankPartI}</p>
                </div>
                <a class="card-botao"> CONTRATAR </a>
            `;
            container.appendChild(card);
        }
    } else {
        container.innerHTML = "<p style='color: white'>Nenhum ninja disponível.</p>";
    }
};



window.addEventListener("load", async () => {
    await getAllCharacters();
    criarCards();

    let cards = document.querySelectorAll(".card");
    cards.forEach((elemento) => {
        elemento.addEventListener("mouseover", () => {
            elemento.classList.add("change-scale");
        });

        elemento.addEventListener("mouseout", () => {
            elemento.classList.remove("change-scale");
        });

        elemento.lastElementChild.addEventListener("click", (event) => {
            window.location.href = "./formulario.html";
        });
    });
});

function deletarCard(characterId) {
    characters = characters.filter((character) => character.id !== characterId);
    container.innerHTML = "";
    criarCards();
}

//input do footer
function limparEMostrarMensagem() {
    var input = document.getElementById("mensagemInput");
    var mensagemUsuario = document.getElementById("mensagemParaUsuario");
    var balao = document.getElementById("balao");

    input.value = "";
    mensagemUsuario.textContent = "Seu email foi registrado!";

}



const menuToggle = document.querySelector('.menu-toggler');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
});

const menuToggler = document.querySelector('.menu-toggler');
let corAtiva = false;

menuToggler.addEventListener('click', function() {

    if (corAtiva) {
        menuToggler.style.backgroundColor = '';
    } else {
        menuToggler.style.backgroundColor = 'rgba(241,113,8,1)';
    }
    corAtiva = !corAtiva;
});

//scroll
function scrollDown() {
    var container = document.getElementById("hunter");
    var containerPosition = container.offsetTop;
    window.scrollTo({ top: containerPosition, behavior: "smooth"});

}