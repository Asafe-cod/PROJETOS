// =========================
// CARROSSEL DE DEPOIMENTOS
// =========================

const cards = document.querySelectorAll('.card');

const nextBtn = document.querySelector('.next');

const prevBtn = document.querySelector('.prev');

let current = 0;

// FUNÇÃO MOSTRAR CARD

function showCard(index){

    cards.forEach((card)=>{

        card.classList.remove('active');

    });

    cards[index].classList.add('active');

}

// BOTÃO NEXT

nextBtn.addEventListener('click', ()=>{

    current++;

    if(current >= cards.length){

        current = 0;

    }

    showCard(current);

});

// BOTÃO PREV

prevBtn.addEventListener('click', ()=>{

    current--;

    if(current < 0){

        current = cards.length - 1;

    }

    showCard(current);

});

// AUTO PLAY

setInterval(()=>{

    current++;

    if(current >= cards.length){

        current = 0;

    }

    showCard(current);

}, 5000);

// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

const animar = document.querySelectorAll('.stat-box, .card');

animar.forEach((el)=>{

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = "all 1s ease";

    observer.observe(el);

});