const atleta = document.querySelectorAll('.atleta');

for(var i=0; i < atleta.length; i++){

tdPeso = atleta.querySelector(".info-peso");
peso   = tdPeso.textContent;

tdAltura = atleta.querySelector(".info-altura");
altura   = tdAltura.textContent;

tdImc = atleta.querySelector(".info-imc");
imc   = peso / (altura * altura);
tdImc.textContent = imc.toFixed(2);

}

function calculaImc(peso, altura){
    let imc = 0;

    imc   = peso / (altura * altura);

    return imc.toFixed(2);

}







