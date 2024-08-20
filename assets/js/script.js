/*JQuery */


function llamarModal(){
    var nombre = document.getElementById("nombreInput").value;
    var email = document.getElementById("emailInput").value;
    var mensaje = document.getElementById("mensajeInput").value;
    
    if (nombre == "" || email == "" || mensaje == ""){
        alert("Complete todos los campos")
    }else{
        alert("Datos enviados correctamente, " + nombre + " nos pondremos en contacto contigo")
    
    }  
}

