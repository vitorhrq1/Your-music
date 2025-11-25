const formularioIdade = document.querySelector(".idade-body");
formularioIdade.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  const idade = formularioIdade.querySelector("#idade-input").value.trim();
  console.log({ idade });

  window.location.href = "/genero1";
});
