const atleta = document.querySelector("#atleta");

const tdPeso = atleta.querySelector(".info-peso");
const peso = tdPeso.textContent;

const tdAltura = atleta.querySelector(".info-altura");
const altura = tdAltura.textContent;

const tdImc = atleta.querySelector(".info-imc");
const imc = (peso / (altura * altura));
tdImc.textContent = imc;


