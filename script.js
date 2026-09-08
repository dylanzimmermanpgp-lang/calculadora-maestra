// Variable para guardar lo que está en la pantalla
let pantalla = document.getElementById('pantalla');

// Función para agregar números y operaciones
function agregar(valor) {
    pantalla.value += valor;  // Añade el valor al final
}

// Función para limpiar todo
function limpiar() {
    pantalla.value = '';  // Borra la pantalla
}

// Función para retroceder (borrar último carácter)
function retroceder() {
    pantalla.value = pantalla.value.slice(0, -1);
    // slice(0, -1) = toma todo MENOS el último carácter
}

// Función para calcular el resultado
function calcular() {
    try {
        // eval() ejecuta la operación matemática
        let resultado = eval(pantalla.value);
        pantalla.value = resultado;
    } catch (error) {
        // Si hay error (ej: operación incompleta), muestra mensaje
        pantalla.value = 'Error';
    }
}
