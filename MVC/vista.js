class Vista {
    constructor(){}
    init(){

    }
    render(){

    }
}

function cargarArrayPersonas(){
    //var personaActual = new Persona(document.getElementById("nombre").value, document.getElementById("email").value, document.getElementById("edad").value);
      
    var personaActual = new Persona(document.getElementById("nombre").value, document.getElementById("email").value, document.getElementById("edad").value);
     personasArray.push(controlador.obtenerAsistentes());
 }
 
 function cargarArrayPersonas2(){
     var personaActual = new Persona(document.getElementById("nombre").value, document.getElementById("email").value, document.getElementById("edad").value);
     personasArray2.push(personaActual);    
 }
 
 //Con esto espera a cargar, que no se reinicie
 document.addEventListener("DOMContentLoaded", function(){
     document.getElementById("formulario").addEventListener("submit", agregarRegistro);
 }
     );
 
 
 function agregarRegistro(evento){
     evento.preventDefault();   
     evento.target.reset();
 }
 
 
 
 function agregarFilaTabla1(){
     cargarArrayPersonas();
     document.getElementById("tabla1").insertRow(-1).innerHTML = '<th>' + personasArray[personasArray.length-1].name +'</th>' + '<th>' + personasArray[personasArray.length-1].email +'</th>'+ '<th>' + personasArray[personasArray.length-1].edad +'</th>';
 }
 
 
 function agregarFilaTabla2(){
     cargarArrayPersonas2();
         document.getElementById("tabla2").insertRow(-1).innerHTML = '<th>' + personasArray2[personasArray2.length-1].name +'</th>' + '<th>' + personasArray2[personasArray2.length-1].email +'</th>'+ '<th>' + personasArray2[personasArray2.length-1].edad +'</th>';
     
 }
 
 function principal(){
    const edad = document.getElementById("edad").value;
    if(edad <14){
        agregarFilaTabla1();
     }else{
         agregarFilaTabla2();
     } 
 }
export default Vista