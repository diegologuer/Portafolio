//Botón ver más de index
let btnMas = document.getElementById("btnMas");
let sobreMi = document.getElementById("sobreMi");

btnMas.addEventListener("click", function(event){
    event.preventDefault();
    {
        if (sobreMi.style.display === "none") {
          sobreMi.style.display = "block";
        } else {
          sobreMi.style.display = "none";
        }
      }
});
