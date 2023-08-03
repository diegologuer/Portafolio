let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");
let enviar = document.getElementById("enviar");

let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//función de validación
function validarDatos(){

nombre.style.border="";
email.style.border="";
mensaje.style.border="";

if(nombre.value.length < 3){
    alert("Ingrese un nombre válido");
    nombre.style.border="solid 2px red";
}

if(!regexEmail.test(email.value)){
    alert("Ingrese un correo electrónico válido");
    email.style.border="solid 2px red";
}

if(mensaje.value.length < 20){
    alert("Ingrese un mensaje de al menos 20 caracteres");
    mensaje.style.border="solid 2px red";
}
}


//evento 
enviar.addEventListener("click", function(event){
event.preventDefault();
validarDatos();
});



