// Definindo o tempo inicial de 06:42 em segundos
let time = 6.7 * 60;

const timerElement = document.querySelector('[data-timer]');

function startTimer() {
    const countdown = setInterval(() => {
        // Calcula minutos e segundos
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        // Adiciona zero à esquerda para minutos e segundos menores que 10
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Atualiza o elemento do timer com o tempo restante
        timerElement.textContent = `${minutes}:${seconds}`;

        time--;
    }, 1000);
}

// Inicia o timer
startTimer();