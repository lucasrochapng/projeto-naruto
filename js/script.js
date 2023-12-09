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

const getRandomCharacters = (count) => {
    const shuffledCharacters = characters.sort(() => Math.random() - 0.5);
    return shuffledCharacters.slice(0, count);
};

const criarCards = () => {
    container.innerHTML = ""; // Limpar cartões anteriores
    const randomCharacters = getRandomCharacters(10);

    if (randomCharacters.length > 0) {
        for (const character of randomCharacters) {
            const card = document.createElement("div");
            card.classList.add("card");

            const rankPartI = character.rank.ninjaRank["Part I"];

            card.innerHTML = `
                <div>
                    <img class="card-img" src="${character.images[0]}" alt="${character.name}" />
                </div>
                <div class="card-text">
                    <h2 class="card-title">${character.name}</h2>
                    <p class="card-rank">${rankPartI}</p>
                </div>
                <a class="card-botao"> CONTRATAR </a>
            `;
            container.appendChild(card);
        }
    } else {
        container.innerHTML = "<p style='color: white'>Nenhum personagem disponível.</p>";
    }
};



window.addEventListener("load", async () => {
    await getAllCharacters(); // Aguardar a busca dos personagens
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




