const elemMaiorMenor = document.getElementById('chute');

function verificaChute(chute){
    const numInt = parseInt(chute);

    if(ChuteValido(numInt)){
        if(chute === "game over"){
            document.body.innerHTML = `
                <div>
                <h2>-> GAME OVER <-</h2>
                <h4>* Clique no botão abaixo para reiniciar *</h4>
                </br>
                </div>
                <div>
                <button id="jogar-novamente" class="btn-restart">* RESTART GAME *</button>
                </div>
            `; 
            return;
        }else{
            elemMaiorMenor.innerHTML += `<div><h3>Valor Inválido!!!</h3></div>`;
        return;
        }
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
            <button id="jogar-novamente" class="btn-restart">* RESTART GAME *</button>
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

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});
