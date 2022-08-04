window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  const input = document.querySelector("#titulo");

  const palabraSecreta = "secret";
  const oldEstadoSecreto = [];
  let estadoSecreto = 0;

  input.addEventListener("keydown", (e) => {
    const letra = e.key;

    console.log(letra);

    if (palabraSecreta[estadoSecreto] == letra) {
      estadoSecreto++;
    } else {
      estadoSecreto = 0;
    }

    if (estadoSecreto == palabraSecreta.length) {
      estadoSecreto = 0;
      setTimeout(() => {
        alert("SECRETO!!!");
      }, 500);
    }
  });
};
