const formulario = document.querySelector(".login-body");

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const nome = formulario
    .querySelector('input[placeholder="Nome de usuário"]')
    .value.trim();
  const email = formulario
    .querySelector('input[placeholder="Email"]')
    .value.trim();
  const senha = formulario
    .querySelector('input[placeholder="Palavra-passe"]')
    .value.trim();

  console.log({ nome, email, senha });

  logar({ nome, email, senha });
});

async function logar(dados) {
  window.location.href = "/idade";
}
