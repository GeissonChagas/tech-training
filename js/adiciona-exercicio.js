// Tabela de informações do treino:

const adicionaTreino = document.querySelector("#adicionar-treino");


adicionaTreino.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona2");

    var segunda = form.segunda.value;
    var terça = form.terça.value;
    var quarta = form.quarta.value;
    var quinta = form.quinta.value;
    var sexta = form.sexta.value;
    var sabado = form.sabado.value;

    var treinoTr = document.createElement("tr");
    treinoTr.setAttribute('class', 'treino')


    var segundaTd = document.createElement("td");
    var terçaTd = document.createElement("td");
    var quartaTd = document.createElement("td");
    var quintaTd = document.createElement("td");
    var sextaTd = document.createElement("td");
    var sabadoTd = document.createElement("td");

    

    segundaTd.textContent = segunda;
    terçaTd.textContent = terça;
    quartaTd.textContent = quarta;
    quintaTd.textContent = quinta;
    sextaTd.textContent = sexta;
    sabadoTd.textContent = sabado;

    
    treinoTr.appendChild(segundaTd);
    treinoTr.appendChild(terçaTd);
    treinoTr.appendChild(quartaTd);
    treinoTr.appendChild(quintaTd);
    treinoTr.appendChild(sextaTd)
    treinoTr.appendChild(sabadoTd);

    

    let tabela2 = document.querySelector("#tbody2")

    tabela2.appendChild(treinoTr)

    
})