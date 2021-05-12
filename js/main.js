// 1. REQUISITOS
// TIPS: apuntar todo lo que se dice en la reunión

// --> Necesitamos una web para almacenaar las tareas de los usuarios. API, tematización...

//1.2 Traducir a funcionalidades de HTML, JS partes de la aplicación:
// - Input con el nombre de la tarea
// - Botón para agragar la tarea
// - Listado de tareas
// - Botón eliminar tarea
// - Botón eliminar tareas individuales

// 1.3. Definir acciones de usuario (inputs del programa)
// - Agregar tarea
// - Eliminar (tarea o tareas)

// 1.4. Definir resultado a mostrar (API + acciones usuario -> output)
// - Lista de tareas

/* ------------------ 
2. PLANIFICACIÓN
------------------ */
// APLICACIONES DE CONTROL DE TIEMPO PARA TAREAS --> POMOCODE??

// 2.1. HITOS DE LA APLICACIÓN:
// - Crear un HTML estatico
// - Montar la base de JavaScript -> estructura &pseudocódigo
// - Rellenar las diferentes partes de JS
// - Lindar & degugar JS + HTML
// - Mejorar maquetación

// 2.2. Tareas Concretas -> ganar focus
// - C1 - [HTML] Crear input y button boostrap y dejar espacio para el listado <ul>
// - C2 - [JS] Definir las variables que necesitará el programa
// - C3 - [JS] Escribir todas las funciones cavias de javascript
// - C4 - [JS] Rellenar lógica de funciones: una a una!! ->probar -> siguiente
// - C5 - [HTML] Mejorar la interficie

/* 1. VARIABLES */
var input = document.getElementById("userInput");
// variable para que se añada cada vez que el usuario de entrar al boton
var enterButton = document.getElementById("button");
var ul = document.querySelector("ul");

/*  2. FUNCIONES */
// Agregar tareas
//cuando se ejecuta una funcion se dice hanle
function handleClick() {
    if(input.value.length > 0) {
     createListElement();
    }
 }


//Añadir tarea en HTML tarea 
 function createListElement() {
    var li = document.createElement('li'); // create li element.
    li.innerHTML = input.value; // assigning text input to li element
    li.classList.add("list-group-item"); // Add styles
    ul.appendChild(li); // append li to ul.
} 

//Limpiar tarea 
function cleanList (){
}

//Modificar tarea ?
function modifyList (){
}

//Eliminar tarea 
 function removeList (){
}


/* 3. EVENTOS*/ 
//click 
button.addEventListener("click", handleClick)

//apretar tecla?