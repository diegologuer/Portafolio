let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");
let enviar = document.getElementById("enviar");
let asunto = document.getElementById("asunto");
let tel = document.getElementById("tel");
let alertaNombre = document.getElementById("alertaNombre");
let alertaCorreo = document.getElementById("alertaCorreo");
let alertaAsunto = document.getElementById("alertaAsunto");
let alertaMensaje = document.getElementById("alertaMensaje");
let alertaTel = document.getElementById("alertaTel");


let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const regexTel = /^[1-9]\d{9}$/;

//evento 
enviar.addEventListener("click", function(event){
    event.preventDefault();
    
    if(validarDatos()){
       //Se ingresa metodo para mandar los datos 

       Swal.fire({
        icon: 'success',
        title: 'Muchas gracias',
        text: 'Tu mensaje se ha enviado correctamente.',
        
      })
    }
});


//función de validación
function validarDatos(){

resultado = true;

nombre.style.border="";
email.style.border="";
mensaje.style.border="";
asunto.style.border="";
tel.style.border = "";

alertaNombre.style.display = "";
alertaCorreo.style.display = "";
alertaAsunto.style.display = "";
alertaMensaje.style.display = "";
alertaTel.style.display = "";

nombre.value = nombre.value.trim();
email.value = email.value.trim();
asunto.value = asunto.value.trim();
mensaje.value = mensaje.value.trim();

if(nombre.value.length < 3 || !isNaN(nombre.value)){
    
    alertaNombre.style.display = "block";
    nombre.style.border="solid 2px red";
    resultado = false;
}

if(!regexEmail.test(email.value)){
    
    alertaCorreo.style.display = "block";
    email.style.border="solid 2px red";
    resultado = false;

}

if(!regexTel.test(tel.value)){
    alertaTel.style.display = "block";
    tel.style.border = "solid 2px red";
    resultado = false;
}

if(asunto.value.length < 5  ){

    alertaAsunto.style.display = "block";
    asunto.style.border = "solid 2px red";
    resultado = false;

}

if(mensaje.value.length < 20 ){
   
    alertaMensaje.style.display = "block";
    mensaje.style.border="solid 2px red";
    resultado = false;

}

return resultado;
}






