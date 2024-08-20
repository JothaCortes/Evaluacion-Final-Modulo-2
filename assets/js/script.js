

const proyectos =[
    {
        name: 'Preuniversitario Cebal',
        img:'./assets/img/Cebal2.jpeg',
        texto: 'Sistema para la gestión de matriculas de un preuniversitario',
    },
    {
        name: 'Colegio San Francisco',
        img:'./assets/img/proyectosf.jpg',
        texto: 'Sistema creado en GeneXus para la gestión de cursos de un colegio',
    },
    {
        name: 'Sistema de tareas',
        img:'./assets/img/proyectost.png',
        texto: 'Sistema para la gestión de tareas',  
    }
];

	
function modalProyectos(i){
    const modal = document.querySelector('#exampleModal');
    console.log(modal);
    const h1 = modal.querySelector('h1');
    h1.innerHTML = proyectos[i].name;

    const img = modal.querySelector('img');
    img.setAttribute('src', proyectos[i].img);
 
    const p = modal.querySelector('p');
    p.innerHTML = proyectos[i].texto;
}

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

