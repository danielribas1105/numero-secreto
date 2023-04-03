window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const elemChute = document.getElementById('chute');
const recognition = new SpeechRecognition();

function onSpeak(e){
    const chute = e.results[0][0].transcript;
    exibeChuteTela(chute);
    verificaChute(chute);
}

function exibeChuteTela(chute){
    elemChute.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
    `;
}

recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());
