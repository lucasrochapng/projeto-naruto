let formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const validarDados = (nome, recompensa, servico, descricao) => {

        let control = true;

        if(nome.value.trim() == ""){
            nome.style.backgroundColor = "red";
            control = false;
        }

        if(recompensa.value.trim() == ""){
            recompensa.style.backgroundColor = "red";
            control = false;
        }

        if(servico == null) {
            let elementoErro = document.querySelector("#erro-servico");
            elementoErro.classList.add("msg-erro--active");
            control = false;
        }

        if(descricao.value.trim() == ""){
            descricao.style.backgroundColor = "red";
            control = false;
        }

        return control;

    };

    let nome = document.querySelector("#nome");
    let recompensa = document.querySelector("#recompensa");
    let servico = document.querySelector("input[name='servico']:checked");
    let descricao = document.querySelector("#descricao");

    if(validarDados(nome, recompensa, servico, descricao)) {
        let adotante = {
            nome : nome.value.trim(),
            recompensa : recompensa.value.trim(),
            servico : servico.value,
            descricao : descricao.value.trim(),
            id : "1",
        };
        console.log(adotante);
    } else event.preventDefault();
});

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