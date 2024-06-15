const numeroDeChances = 9;
let numDeTentativas = [];

function VerNumValido(chute){
    const numero = +chute;

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido</div>`;
        return
    }

    if(numeroInRange(numero)){
        elementoChute.innerHTML += `<div>O valor tem que ser entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>VOCÊ ACERTOU!!</h2>
        <h3>O número secreto era ${numeroSecreto}!</h3>

        <button id="botaoReiniciar" class="jogar__novamente">Restart</button>
        `
        reiniciar('botaoReiniciar');
        numDeTentativas = [];
    }

    if (numDeTentativas.length == numeroDeChances) {
        document.body.style.backgroundColor = "red";
        document.body.innerHTML = `
        <h2>VOCÊ PERDEU :(</h2>
        <h3>O número secreto era ${numeroSecreto}!</h3>
    
        <button id="botaoReiniciar" class="jogar__novamente">Restart</button>
        `;
        reiniciar('botaoReiniciar');
        numDeTentativas = [];
        return
    }
    
    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O Número Secreto é menor <i class="fa-solid fa-arrow-down"></i></div>` 
        numDeTentativas.push(numero);
    }else{
        elementoChute.innerHTML += `<div>O Número Secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
        numDeTentativas.push(numero);
    }
}


function numeroInRange(numero) {
    return numero > maiorValor || numero < menorValor 
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

console.log(numDeTentativas);

function reiniciar(classe){
    const btnReniciar = document.getElementById(classe);
    btnReniciar.addEventListener('click', (e) => {
        if(e.target.id == classe){
            window.location.reload();
        }
    })
}