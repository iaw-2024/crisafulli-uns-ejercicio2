// Función para cargar el JSON y generar la tabla
function cargarJSONYGenerarTabla() {
    fetch('/datos') // Asegúrate de que la ruta al archivo JSON es correcta
      .then(response => response.json())
      .then(usuarios => {
        const contenedor = document.getElementById('tablaUsuarios');
        const tabla = document.createElement('table');
        tabla.setAttribute('border', '1');
  
        // Crear la cabecera de la tabla
        const cabecera = tabla.createTHead();
        const filaCabecera = cabecera.insertRow();
        ['Email', 'Contraseña', 'Género'].forEach(texto => {
          const celdaCabecera = document.createElement('th');
          celdaCabecera.textContent = texto;
          filaCabecera.appendChild(celdaCabecera);
        });
  
        // Crear el cuerpo de la tabla con los datos
        const cuerpo = tabla.createTBody();
        usuarios.forEach(usuario => {
          const fila = cuerpo.insertRow();
          Object.values(usuario).forEach(valor => {
            const celda = fila.insertCell();
            celda.textContent = valor;
          });
        });
  
        // Agregar la tabla al contenedor
        contenedor.appendChild(tabla);
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }
  
  // Llamar a la función cuando el DOM esté completamente cargado
  document.addEventListener('DOMContentLoaded', cargarJSONYGenerarTabla);
  