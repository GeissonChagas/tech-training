const adicionaAtleta = document.querySelector("#adicionar-atleta");

adicionaAtleta.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let tempo = form.tempo.value;
    let objetivo = form.objetivo.value;
    let gordura = form.gordura.value;

    let atletaTr = document.createElement("tr");


    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let objetivoTd = document.createElement("td");
    let tempoTd = document.createElement("td");
    let gorduraTd = document.createElement("td");


    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    objetivoTd.textContent = objetivo;
    tempoTd.textContent = tempo;
    gorduraTd.textContent = gordura;


    atletaTr.appendChild(nomeTd);
    atletaTr.appendChild(pesoTd);
    atletaTr.appendChild(alturaTd);
    atletaTr.appendChild(objetivoTd);
    atletaTr.appendChild(objetivoTd);
    atletaTr.appendChild(gorduraTd);

    let tabela = document.querySelector("#tabela_body")

    tabela.appendChild(atletaTr)

    
})