console.log("Script loaded successfully");

document.addEventListener('DOMContentLoaded', function() {
    const usuarios = [
        {
            id: "1",
            nombre: "Roberto Lago",
            puntis: 10,
        },
        {
            id: "2",
            nombre: "Andoni Alvarez",
            puntis: 10,
        }
    ];

cargarTablaUsuarios(usuarios);
   
});

function cargarTablaUsuarios(usuarios) {
    const tbody = document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0];

    usuarios.forEach(usuario => {
        const fila = tbody.insertRow();
        const celdaId = fila.insertCell();
        const celdaNombre = fila.insertCell();
        const celdaPuntos = fila.insertCell();

        
        celdaId.textContent = usuario.id;
        celdaNombre.textContent = usuario.nombre;
        celdaPuntos.textContent = usuario.puntis;
    });
}