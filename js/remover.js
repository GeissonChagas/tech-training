const atletas = document.querySelectorAll(".atleta");
const tabela = document.querySelector('#tbody');

tabela.addEventListener("dblclick", function(event){
    let alvo = event.target;
    let alvoPai = alvo.parentNode;

    alvoPai.remove();

})


