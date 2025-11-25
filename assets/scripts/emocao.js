const inputs = document.querySelectorAll(".selecionar");

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    inputs.forEach((input2) => {
      input2.removeAttribute("checado");
    });

    input.setAttribute("checado", "");
    console.log(input.getAttribute("checado") == "");
  });
});

document.querySelector(".continuar").addEventListener("click", () => {
  let achou = false;
  inputs.forEach((input) => {
    if (input.getAttribute("checado") == "") {
      enviar(input.innerText);
      achou = true;
    }
  });

  if (!achou) {
    alert("Escolha uma opção");
  }
});

function enviar(escolhidas) {
  console.log(escolhidas);
  if (escolhidas == "Feliz") {
    window.location.href = "/inicial";
    return;
  }

  if (escolhidas == "Triste") {
    window.location.href = "/inicialtriste";
    return;
  }
}
