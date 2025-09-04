// Seleccionamos el elemento con el ID "ele1" y lo guardamos en una constante.
// Esto nos permite referirnos a él fácilmente más adelante en el código.
const ele = document.getElementById("ele1");

// Definimos la función "pintar". Esta función recibe dos argumentos:
// 1. "elemento": Una referencia al elemento HTML cuyo color queremos cambiar.
// 2. "color": El nuevo color que queremos aplicar. Por defecto, si no se
//             le pasa un color, usará el color 'green'.
function pintar(elemento, color = 'green') {
    // Aquí cambiamos el estilo de fondo del elemento al color que se pasó como argumento.
    elemento.style.backgroundColor = color;
}

// Añadimos un "escuchador de eventos" al elemento que seleccionamos.
// Cuando el usuario haga clic en el 'div', se ejecutará la
// función anónima que le pasamos.
ele.addEventListener("click", function() {
    // Dentro de esta función, llamamos a la función "pintar".
    // Pasamos el elemento "ele" y el color 'yellow' como argumentos.
    // Esto hace que, al hacer clic, el color de fondo cambie a amarillo.
    pintar(ele, 'yellow');
});