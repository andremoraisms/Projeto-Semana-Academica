const links = document.querySelectorAll(".nav-link");
const paginaAtual = window.location.pathname.split("/").pop();

links.forEach(link => {

  const href = link.getAttribute("href");
  if (href === paginaAtual || (href === "index.html" && paginaAtual === "")) {
    link.classList.add("active", "barra-ativa");
    link.style.fontWeight = "bold";

  } else {

    link.classList.remove("active", "barra-ativa");
    link.style.fontWeight = "normal";

  }
});

function enviarCadastro() {
  const senha = document.getElementById("senha").value;
  const confirma = document.getElementById("confirmaSenha").value;

  if (senha !== confirma) {
    alert("As senhas não coincidem!");
    return false;
  }

  alert("Cadastro realizado com sucesso!");

  setTimeout(() => {
    window.location.assign("home.html");
  }, 100); 

  return false; 
}