//Botón ver más de index
let btnMas = document.getElementById("btnMas");
let sobreMi = document.getElementById("sobreMi");

btnMas.addEventListener("click", function() {
  if (sobreMi.style.display === "none") {
      sobreMi.style.display = "block";
      btnMas.textContent = "Ver Menos";
  } else {
      sobreMi.style.display = "none";
      btnMas.textContent = "Ver Más";
  }
});
