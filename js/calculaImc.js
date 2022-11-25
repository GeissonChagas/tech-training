const atleta = document.querySelector('#atletas');

tdPeso = atleta.querySelector(".info-peso");
peso   = tdPeso.textContent;

tdAltura = atleta.querySelector(".info-altura");
altura   = tdAltura.textContent;

tdImc = atleta.querySelector(".info-imc");
imc   = peso / (altura * altura);
tdImc.textContent = imc.toFixed(2);





