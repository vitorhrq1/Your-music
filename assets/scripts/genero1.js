const formulario = document.querySelector("form");

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const inputs = document.querySelectorAll("input");
  const minimo = 3;

  const caixas = [
    "Gospel",
    "Samba",
    "Sertanejo",
    "Música clássica",
    "Funk",
    "Hip Hop",
    "Rock",
    "Jazz",
    "Eletrônica",
    "MPB",
    "Pop",
    "Bossa Nova",
    "Pagode",
  ];
  let escolhidas = "";
  let quantidade = 0;
  inputs.forEach((input, index) => {
    if (input.checked) {
      quantidade++;
      escolhidas += caixas[index] + ",";
    }
  });

  if (quantidade < minimo) {
    alert("Escolha no minimo 3 estilos");
    return;
  }

  console.log(escolhidas);

  enviar(escolhidas);
});

function enviar(escolhidas) {
  window.location.href = "/emocao";
}
