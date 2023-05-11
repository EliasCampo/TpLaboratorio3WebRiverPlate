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
        document.getElementById("validacionError").innerHTML = mensajeError;
    }
    else
        document.getElementById("validacionError").innerHTML = "";
        

    return datosValidos;
}

function validarDatosContacto(){
    let validar = true;
    let nombreApellido = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    let mensajeErrorContact = "Falta completar ";

    

    if (nombreApellido == ""){
        mensajeErrorContact = mensajeErrorContact + "nombre, ";
        validar = false;
    }

    if (correo == ""){
        mensajeErrorContact = mensajeErrorContact + "correo, ";
        validar = false;
    }

    if (mensaje == ""){
        mensajeErrorContact = mensajeErrorContact + "mensaje, ";
        validar = false;
    }

    if(!validar){
        mensajeErrorContact = mensajeErrorContact.substring(0, mensajeErrorContact.length - 2);
        document.getElementById("validacionContactoError").innerHTML = mensajeErrorContact;
    }
    else
        document.getElementById("validacionContactoError").innerHTML = "";
        

    return validar;
}
