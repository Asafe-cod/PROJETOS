// ==========================
// ANIMAÇÃO AO SCROLL
// ==========================

const observer = new IntersectionObserver((entries)=>{
    
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".card, .texto, .imagem")
.forEach((el)=> observer.observe(el));


// ==========================
// EFEITO PARALLAX NA IMAGEM
// ==========================

const section = document.querySelector(".quem-somos");

window.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth - e.pageX * 2) / 90;
    const y = (window.innerHeight - e.pageY * 2) / 90;

    section.style.backgroundPosition = `
    calc(100% + ${x}px)
    calc(100% + ${y}px)
    `;
});


// ==========================
// DIGITAÇÃO AUTOMÁTICA
// ==========================

const titulo = document.querySelector(".texto h1");

const textoOriginal = titulo.innerHTML;

titulo.innerHTML = "";

let i = 0;

function escrever(){

    if(i < textoOriginal.length){

        titulo.innerHTML += textoOriginal.charAt(i);

        i++;

        setTimeout(escrever,30);
    }
}

escrever();


// ==========================
// BRILHO NOS CARDS
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(212,165,74,.25),
        #101010 60%)
        `;
    });

    card.addEventListener("mouseleave",()=>{

        card.style.background = "#101010";
    });

});


// ==========================
// SCROLL SUAVE
// ==========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});


// ==========================
// EFEITO DE ENTRADA
// ==========================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});