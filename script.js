const cards = document.querySelectorAll('.memory-card');

let checar = false;
let primeira, segunda;

function flipCard() {
    this.classList.add('flip');

    if (!checar) {
        checar = true;
        primeira = this;
        return;
    }

    segunda = this;
    checar = false;

    iguais();
}

function iguais() {
    if (primeira.dataset.framework === segunda.dataset.framework) {
        confirmou();
        return;
    }

    naoconfirmou();
}

function confirmou() {
    primeira.removeEventListener('click', flipCard);
    segunda.removeEventListener('click', flipCard);
}

function naoconfirmou() {
    setTimeout(() => {
        primeira.classList.remove('flip');
        segunda.classList.remove('flip');
    }, 900);
}

cards.forEach(card => card.addEventListener('click', flipCard));