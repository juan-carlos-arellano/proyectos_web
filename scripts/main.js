var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');
function seleccionnombre() {
    var miNombre = prompt('por favor ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Bienbenido a Gatos locos, ' + miNombre;
}
if(!localStorage.getItem('nombre')) {
    seleccionnombre();
}
else {
    var storedName = localStorage.getItem('nombre');
    miTitulo.innerHTML = 'Bienbenido a Gatos locos, ' + storedName;
}
miBoton.onclick = function() {
    seleccionnombre();
}