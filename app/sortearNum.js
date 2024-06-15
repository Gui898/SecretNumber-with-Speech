const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
}

document.getElementById("maior-valor").textContent = maiorValor;
document.getElementById("menor-valor").textContent = menorValor;

