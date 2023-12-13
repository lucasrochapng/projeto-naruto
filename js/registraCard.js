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

    const name = nameInput.value.trim();
    const imageUrl = "../img/manny.png";
    const rank = rankInput.value.trim();

    if (!name) {
        var erroNome = document.getElementById("erroNome");
        erroNome.textContent = "Nome inválido!";
        console.error("Nome é obrigatório!");
        return;
    }

    if (!rank) {
        var erroRank = document.getElementById("erroRank");
        erroRank.textContent = "Rank inválido!";
        console.error("Rank é obrigatório!");
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

function mostrarMensagem() {
    if (!name || typeof name.value !== 'string') {

        var erroNome = document.getElementById("erroNome");
        erroNome.textContent = "Nome inválido!";
        
        console.error("Nome é obrigatório!");
        return;
    }

    else if (!rank || typeof rank.value !== 'string') {

        var erroRank = document.getElementById("erroRank");
        erroRank.textContent = "Rank inválido!";
        
        console.error("Rank é obrigatório!");
        return;
    }
}