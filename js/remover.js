const atletas = document.querySelectorAll(".atleta");
const tabela = document.querySelector('#tbody');

tabela.addEventListener("dblclick", function(event){
    let alvo = event.target;
    let alvoPai = alvo.parentNode;

    alvoPai.remove();

})

const treinos = document.querySelectorAll(".treino");
const tabela2 = document.querySelector('#tbody2');

tabela2.addEventListener("dblclick", function(event){
    let alvo = event.target;
    let alvoPai = alvo.parentNode;

    alvoPai.remove();

})


