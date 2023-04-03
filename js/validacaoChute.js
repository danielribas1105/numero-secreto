const elemMaiorMenor = document.getElementById('chute');

function verificaChute(chute){
    const numInt = parseInt(chute);

    if(ChuteValido(numInt)){
        elemMaiorMenor.innerHTML += `<div>Valor Inválido!!!></div>`;
        return;
    }

    if(numInt < menorValor || numInt > maiorValor){
        elemMaiorMenor.innerHTML += `<div>Valor fora do range!!!</div>`;
        return;
    }

    if(numInt === numSecreto){
        document.body.innerHTML = `
            <div>
            <h2>VOCÊ ACERTOU!!!</h2>
            <h3>O número secreto era -> ${numInt}</h3>
            </div>
            <div>
            <input type="submit" value="* RESTART GAME *" id="btn-start">
            </div>
        `;   
    }else if(numInt > numSecreto){
            elemMaiorMenor.innerHTML += `
            <div>O número secreto é menor <i class="fas fa-arrow-circle-down"></i></div>
        `;
    }else{
        elemMaiorMenor.innerHTML += `
            <div>O número secreto é maior <i class="fas fa-arrow-circle-up"></i></div>
        `;
    }
}

function ChuteValido(numInt) {
    return Number.isNaN(numInt);
}
