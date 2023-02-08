

// Função para calcular o IMC
function calculaIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
  }
  
  // Adicionando o listener ao botão de adição de atleta
  document.getElementById("adicionar-atleta").addEventListener("click", function(event) {
    event.preventDefault();
  
    // Recuperando valores do formulário
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const objetivo = document.getElementById("objetivo").value;
    const tempo = document.getElementById("tempo").value;
    const gordura = document.getElementById("gordura").value;
  
    // Calculando IMC
    let imc = calculaIMC(peso, altura);
  
    // Criando elementos da linha da tabela
    const tr = document.createElement("tr");
    tr.classList.add("atleta");
  
    const tdNome = document.createElement("td");
    tdNome.classList.add("info-nome");
    tdNome.textContent = nome;
  
    const tdPeso = document.createElement("td");
    tdPeso.classList.add("info-peso");
    tdPeso.textContent = peso;
  
    const tdAltura = document.createElement("td");
    tdAltura.classList.add("info-altura");
    tdAltura.textContent = altura;
  
    const tdObjetivo = document.createElement("td");
    tdObjetivo.classList.add("info-objetivo");
    tdObjetivo.textContent = objetivo;
  
    const tdTempo = document.createElement("td");
    tdTempo.classList.add("info-tempo");
    tdTempo.textContent = tempo;
  
    const tdGordura = document.createElement("td");
    tdGordura.classList.add("info-gordura");
    tdGordura.textContent = gordura;
  
    const tdIMC = document.createElement("td");
    tdIMC.classList.add("info-imc");
    tdIMC.textContent = imc;
  
    // Adicionando elementos na linha da tabela
    tr.appendChild(tdNome);
    tr.appendChild(tdPeso);
    tr.appendChild(tdAltura);
    tr.appendChild(tdObjetivo);
    tr.appendChild(tdTempo);
    tr.appendChild(tdGordura);
    tr.appendChild(tdIMC);
  
    // Adicionando linha na tabela
    document.getElementById("tbody").appendChild(tr);

  });

  //apaga itens for formulário após envio: 

  document.querySelector("#adicionar-atleta").addEventListener("click", function(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll(".form-adiciona input");
    inputs.forEach(function(input) {
        input.value = "";
    });
});


