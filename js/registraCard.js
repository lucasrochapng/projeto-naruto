let characters = [];

const getAllCharacters = async () => {
    try {
        const response = await fetch("https://dattebayo-api.onrender.com/characters");
        const data = await response.json();
        characters = data.characters;
        const storedCharacters = localStorage.getItem('characters');
        const storedCharactersArray = storedCharacters ? JSON.parse(storedCharacters) : [];
        characters = [...characters, ...storedCharactersArray];
        characters = Array.from(new Set(characters.map(JSON.stringify))).map(JSON.parse);
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        characters = [];
    }
};

window.addEventListener("load", async () => {
    await getAllCharacters();
});

const formularioCard = document.getElementById("formulario");
const nameInput = document.getElementById("nome");
const rankInput = document.getElementById("rank");

formularioCard.addEventListener("submit", (event) => {
    event.preventDefault();

    mostrarMensagem(nameInput.value, rankInput.value);

    const name = nameInput.value.trim();
    const imageUrl = "../img/manny.png";
    const rank = rankInput.value.trim();

    var erroNome = document.getElementById("erroNome");
    var erroRank = document.getElementById("erroRank");

    if (erroNome.textContent != "" ||erroRank.textContent != ""){
        return;
    }

    const newCharacter = {
        id: generateUniqueId(),
        name,
        images: [imageUrl],
        rank: {
            ninjaRank: {
                Gaiden: rank
            }
        }
    };

    characters.push(newCharacter);

    nameInput.value = "";
    rankInput.value = "";

    console.log("Novo Personagem: ", newCharacter);
    console.log("Personagens Atuais: ", characters);

    localStorage.setItem('characters', JSON.stringify(characters));
});

function generateUniqueId() {
    const highestId = characters.reduce((maxId, character) => {
        return character.id > maxId ? character.id : maxId;
    }, 0);

    return highestId + 1;
}

function mostrarMensagem(name, rank) {
    var erroNome = document.getElementById("erroNome");
    var erroRank = document.getElementById("erroRank");
    if (!name || typeof name !== 'string') {
        erroNome.textContent = "Nome inválido!";
        console.error("Nome é obrigatório!");
        return;
    } else if (!rank || typeof rank !== 'string') {
        erroRank.textContent = "Rank inválido!";
        erroNome.textContent ="";
        console.error("Rank é obrigatório!");
        return;
    }

    erroNome.textContent ="";
    erroRank.textContent ="";
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