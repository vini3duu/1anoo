// Data do evento: 23 de Junho de 2034, à meia-noite
const eventDate = new Date("June 23, 2034 00:00:00").getTime();

// Função para atualizar a contagem regressiva
function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownWrapper = document.getElementById("countdown");

    if (distance >= 0) {
        // Atualiza a contagem normalmente
        countdownWrapper.innerHTML = `
            <div class="countdown-block">
                <div class="countdown-inner">${days}</div>
                <div class="countdown-label">Dias</div>
            </div>
            <div class="countdown-block">
                <div class="countdown-inner">${hours}</div>
                <div class="countdown-label">Horas</div>
            </div>
            <div class="countdown-block">
                <div class="countdown-inner">${minutes}</div>
                <div class="countdown-label">Minutos</div>
            </div>
            <div class="countdown-block">
                <div class="countdown-inner">${seconds}</div>
                <div class="countdown-label">Segundos</div>
            </div>
        `;
    } else {
        // Contagem terminou: mostra mensagem especial
        clearInterval(interval);
        countdownWrapper.innerHTML = `
            <div class="final-message">
                <div class="heart"></div>
                <h2>O grande dia chegou!</h2>
                <p>10 anos de nós! Te amo pra sempre ❤️</p>
            </div>
        `;
        document.body.classList.add("celebration");
    }
}

// Atualiza a contagem a cada 1 segundo
const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Executa ao carregar