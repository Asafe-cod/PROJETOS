/* =========================
   MENU MOBILE
========================= */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateY(-3px)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateY(0)";
  });

});


/* =========================
   EFEITO NOS CARDS
========================= */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.boxShadow =
      "0 0 25px rgba(214,164,41,0.4)";

    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {

    card.style.boxShadow = "none";

    card.style.transform = "translateY(0)";
  });

});


/* =========================
   BOTÃO WHATSAPP
========================= */

const whatsappButtons =
  document.querySelectorAll(
    ".btn-whatsapp, .cta-btn"
  );

whatsappButtons.forEach(button => {

  button.addEventListener("click", (e) => {

    e.preventDefault();

    alert(
      "Você será redirecionado para o WhatsApp!"
    );

    window.open(
      "https://wa.me/5500000000000",
      "_blank"
    );

  });

});


/* =========================
   ANIMAÇÃO AO ROLAR
========================= */

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";

      entry.target.style.transform =
        "translateY(0)";
    }

  });

});


cards.forEach(card => {

  card.style.opacity = "0";

  card.style.transform =
    "translateY(50px)";

  card.style.transition =
    "0.6s ease";

  observer.observe(card);

});


/* =========================
   EFEITO DIGITAÇÃO
========================= */

const title =
  document.querySelector(".hero h2");

const originalText = title.innerHTML;

title.innerHTML = "";

let index = 0;

function typeEffect(){

  if(index < originalText.length){

    title.innerHTML += originalText.charAt(index);

    index++;

    setTimeout(typeEffect, 40);
  }

}

typeEffect();
