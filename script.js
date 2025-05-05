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
  window.location.href = "home.html";
  return false;
}

document.getElementById('formObra').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtendo os valores dos campos

  const titulo = document.getElementById('titulo').value;
  const local = document.getElementById('local').value;
  const data = document.getElementById('data').value;
  const imagemInput = document.getElementById('imagem');

  // Verificando se todos os campos estão preenchidos

  if (!titulo || !local || !data || !imagemInput.files.length) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Formatando a data para o formato DD/MM/YYYY

  const dataFormatada = new Date(data);
  const dia = String(dataFormatada.getDate()).padStart(2, '0');
  const mes = String(dataFormatada.getMonth() + 1).padStart(2, '0');
  const ano = dataFormatada.getFullYear();
  const dataExibicao = `${dia}/${mes}/${ano}`;

 
  const imagemFile = imagemInput.files[0];
  const reader = new FileReader();
  
  reader.onload = function (e) {

    const cardContainer = document.getElementById('cardsContainer');
    
    const newCard = document.createElement('div');
    newCard.classList.add('card', 'col', 'mb-3');
    
    newCard.innerHTML = `
      <img src="${e.target.result}" class="card-img-top" alt="Imagem da Obra" style="width: 400px; height: auto; object-fit: cover;"/>
      <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text">Local: ${local}</p>
        <p class="card-text">Data: ${dataExibicao}</p> <!-- Exibindo a data formatada -->
        <p class="card-text">Descrição: ${document.getElementById('descricao').value}</p>
      </div>
    `;

    cardContainer.appendChild(newCard);

    document.getElementById('formObra').reset();
  };

  reader.readAsDataURL(imagemFile);
});
