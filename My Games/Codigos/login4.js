const form = document.getElementById('loginForm');

form.addEventListener('submit', function(e){

  e.preventDefault();

  const usuario = document.querySelector('input[type="text"]').value;
  const senha = document.querySelector('input[type="password"]').value;

  if(usuario === "" || senha === ""){

    alert("Preencha todos os campos!");
    return;
  }

  buttonLoading();

});

function buttonLoading(){

  const button = document.querySelector("button");

  button.innerHTML = "Entrando...";
  button.style.opacity = "0.8";

  setTimeout(() => {

    button.innerHTML = "Acesso liberado ✓";

  }, 1800);

}