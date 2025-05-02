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

document.getElementById("uploadLogo").addEventListener("change", function(event) {
  const reader = new FileReader();
  reader.onload = function () {
      const preview = document.getElementById("previewLogo");
      preview.src = reader.result;
      preview.style.display = "block";
  };
  reader.readAsDataURL(event.target.files[0]);
});
