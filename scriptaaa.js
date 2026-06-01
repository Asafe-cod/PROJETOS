//* =========================================



const slides = [

{
    titulo: `
    SEJA REFERÊNCIA
    NO MERCADO DA
    <span class="gold">ESTÉTICA</span>
    `,

    texto: `
    Na Positana você aprende na prática,
    com professores especialistas e uma
    metodologia moderna.
    `,

    imagem:
"url('/Imagens/ChatGPT Image 26 de mai. de 2026, 03_55_32.png')"

    
},

{
    titulo: `
    SEJA REFERÊNCIA
    NO MERCADO DA
    <span class="gold">ESTÉTICA</span>
    `,

    texto: `
    Desenvolva habilidades profissionais
    e transforme sua paixão em profissão.
    `,

    imagem:
    "url('/Imagens/ChatGPT Image 26 de mai. de 2026, 01_31_08.png')"
},

{
    titulo: `
     SEJA REFERÊNCIA
    NO MERCADO DA
    <span class="gold">ESTÉTICA</span>
    `,

    texto: `
    Cursos técnicos e profissionalizantes
    com excelência e reconhecimento.
    `,

    imagem:
    "url('/Imagens/ChatGPT Image 26 de mai. de 2026, 04_02_06.png')"
}

];

/* =========================================
ELEMENTOS
========================================= */

const hero = document.querySelector(".hero");

const titulo = document.querySelector(".hero-title");

const texto = document.querySelector(".hero-text");

let slideAtual = 0;

/* =========================================
FUNÇÃO TROCAR SLIDE
========================================= */

function trocarSlide(){

    hero.classList.add("fade");

    setTimeout(()=>{

        slideAtual++;

        if(slideAtual >= slides.length){

            slideAtual = 0;

        }

        titulo.innerHTML =
        slides[slideAtual].titulo;

        texto.innerHTML =
        slides[slideAtual].texto;

        hero.style.backgroundImage = `
        linear-gradient(
        90deg,
        rgba(0,0,0,0.92) 25%,
        rgba(0,0,0,0.55) 60%,
        rgba(0,0,0,0.25)
        ),
        ${slides[slideAtual].imagem}
        `;

        hero.classList.remove("fade");

    }, 500);

}

/* =========================================
AUTO SLIDE
========================================= */

setInterval(trocarSlide, 5000);


/* =========================================
ANIMAÇÃO DE ENTRADA
========================================= */

window.addEventListener("load", ()=>{

    titulo.classList.add("show");

    texto.classList.add("show");

});
// MENU PORTAIS

const portalBtn = document.getElementById('portalBtn');

const portalMenu = document.getElementById('portalMenu');

portalBtn.addEventListener('click', ()=>{

    portalMenu.classList.toggle('active');

});

// FECHAR AO CLICAR FORA

document.addEventListener('click', (e)=>{

    if(
        !portalBtn.contains(e.target) &&
        !portalMenu.contains(e.target)
    ){

        portalMenu.classList.remove('active');

    }

});