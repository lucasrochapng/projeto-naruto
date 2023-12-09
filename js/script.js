const container = document.getElementById("container");

let characters = [];

const getAllCharacters = async () => {
    try {
        const response = await fetch("https://your-character-api-endpoint.com/characters");
        characters = await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        characters = [];
    }
};

const criarCards = () => {
    characters.forEach((character) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img class="card-img" src="${character.img}" alt="${character.name}" />
            <h2 class="card-title">${character.name}</h2>
            <p class="card-profession">${character.professions.join("\n")}</p>
            <a class="card-botao"> CONTRATAR </a>
        `;
        container.appendChild(card);
    });
};

const deleteCharacterLocally = (characterId) => {
    characters = characters.filter((character) => character._id !== characterId);
    container.innerHTML = "";
    criarCards();
};

const createCharacterLocally = () => {
    const newCharacter = {
        _id: Date.now(),
        name: "New Character",
        img: "url_da_imagem",
        professions: ["New Profession"],
    };

    characters.push(newCharacter);
    criarCards();
};

const criarCardExemplo = () => {
    const exemploCharacter = {
        id: 1,
        img: "../img/manny.png",
        name: "Name",
        professions: ["Profissão 1", "Profissão 2"],
    };

    let i = 0;
    while (i < 5) {
        const newCharacterCopy = { ...exemploCharacter, _id: Date.now() + i };
        characters.push(newCharacterCopy);
        i++;
    }
    criarCards();
};

window.addEventListener("load", async () => {
    //await getAllCharacters();
    //criarCards();

    criarCardExemplo();

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
        menuToggler.style.backgroundColor = 'rgb(146, 36, 36)';
    }
    corAtiva = !corAtiva;
});

//scroll
function scrollDown() {
    var container = document.getElementById("hunter");
    var containerPosition = container.offsetTop;
    window.scrollTo({ top: containerPosition, behavior: "smooth"});

}




