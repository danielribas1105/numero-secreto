const menorValor = 1;
const maiorValor = 1000;
const numSecreto = sortearNumero();

const elemMenorValor = document.getElementById('menor-valor');
elemMenorValor.innerHTML = menorValor;

const elemMaiorValor = document.getElementById('maior-valor');
elemMaiorValor.innerHTML = maiorValor;

function sortearNumero(){
    return parseInt(Math.random() * (maiorValor + 1));
}

console.log(numSecreto);