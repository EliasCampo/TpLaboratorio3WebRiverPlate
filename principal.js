function validarDatos(){

    let datosValidos = true;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;

    let mensajeError = "Falta completar ";

    if (nombre == ""){
        datosValidos=false;
        mensajeError = mensajeError + "nombre, ";
    }
    if (apellido == ""){
        datosValidos=false;
        mensajeError = mensajeError + "apellido, ";
    }
    if (direccion == ""){
        datosValidos=false;
        mensajeError = mensajeError + "direccion, ";
    }
    if (correo == ""){
        datosValidos=false;
        mensajeError = mensajeError + "correo, ";
    }
        
    if(!datosValidos){
        mensajeError = mensajeError.substring(0, mensajeError.length - 2);
        document.getElementById("validationError").innerHTML = mensajeError;
    }
    else
        document.getElementById("validationError").innerHTML = "";
        

    return datosValidos;
}

