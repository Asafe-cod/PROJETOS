/* ========================= */
/* HEADER EFEITO */
/* ========================= */

window.addEventListener("scroll", ()=>{

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background =
        "rgba(0,0,0,.95)";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.45)";
    }

    else{

        header.style.background =
        "rgba(0,0,0,.82)";

        header.style.boxShadow =
        "none";
    }

});

/* ========================= */
/* ANIMAÇÃO */
/* ========================= */

const elementos = document.querySelectorAll(
'.card, .beneficio'
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

elementos.forEach((el)=>{

    el.style.opacity="0";

    el.style.transform="translateY(60px)";

    el.style.transition="1s";

    observer.observe(el);

});

/* ========================= */
/* STYLE */
/* ========================= */

const style = document.createElement("style");

style.innerHTML = `

.show{

    opacity:1 !important;

    transform:translateY(0) !important;
}

`;

document.head.appendChild(style);