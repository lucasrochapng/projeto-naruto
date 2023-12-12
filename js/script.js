const container = document.getElementById("container");
let characters = JSON.parse(localStorage.getItem("characters")) || [];

const getAllCharacters = async () => {
    try {
        const response = await fetch("https://dattebayo-api.onrender.com/characters");
        const data = await response.json();
        if (data && data.characters) {
            characters = data.characters;
            localStorage.setItem("characters", JSON.stringify(characters));
        }
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        characters = [];
    }
};

const criarCard = (character) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const rankPartI =
        character.rank &&
        character.rank.ninjaRank &&
        (character.rank.ninjaRank["Part I"] ||
            character.rank.ninjaRank["Part II"] ||
            character.rank.ninjaRank["Gaiden"]);

    const imageUrl = character.id === 515 ? "../img/jiraiya.jpg" : character.images[0] || "../img/jiraiya.jpg";

    card.innerHTML = `
        <div class="card-button">
            <button onclick="deletarCard(${character.id})">✖</button>
        </div>
        <div>
            <img class="card-img" src="${imageUrl}" alt="${character.name}" onerror="this.onerror=null;this.src='../img/manny.png';">
        </div>
        <div class="card-info">
            <h2 class="card-title">${character.name}</h2>
            <p class="card-rank">${rankPartI}</p>
        </div>
        <a class="card-botao"> CONTRATAR </a>
    `;

    return card;
};

const atualizarCards = () => {
    container.innerHTML = "";
    if (characters.length > 0) {
        characters.forEach((character) => {
            const card = criarCard(character);
            container.appendChild(card);
        });
    } else {
        container.innerHTML = "<p style='color: white'>Nenhum ninja disponível.</p>";
    }
};

window.addEventListener("load", async () => {
    if (characters.length === 0) {
        await getAllCharacters();
    }
    atualizarCards();

    let cards = document.querySelectorAll(".card");
    cards.forEach((elemento) => {
        elemento.addEventListener("mouseover", () => {
            elemento.classList.add("change-scale");
        });

        elemento.addEventListener("mouseout", () => {
            elemento.classList.remove("change-scale");
        });

        elemento.lastElementChild.addEventListener("click", () => {
            window.location.href = "./formulario.html";
        });
    });
});

function deletarCard(characterId) {
    characters = characters.filter((character) => character.id !== characterId);
    localStorage.setItem("characters", JSON.stringify(characters));
    container.innerHTML = "";
    atualizarCards();
}

//input do footer
function limparEMostrarMensagem() {
    var input = document.getElementById("mensagemInput");
    var mensagemUsuario = document.getElementById("mensagemParaUsuario");
    // var balao = document.getElementById("balao");

    input.value = "";
    mensagemUsuario.textContent = "Seu email foi registrado!";
}

const menuToggle = document.querySelector('.menu-toggler');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
});

const menuToggler = document.querySelector('.menu-toggler');
let corAtiva = false;

menuToggler.addEventListener('click', function () {
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
    window.scrollTo({ top: containerPosition, behavior: "smooth" });
}