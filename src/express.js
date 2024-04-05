//import express from 'express';
const express = require("express");
const app = express();
module.exports = app;

const datos = [  {
    "email": "usuario1@example.com",
    "contrasena": "contrasena123",
    "genero": "Femenino"
  },
  {
    "email": "usuario2@example.com",
    "contrasena": "contrasena456",
    "genero": "Masculino"
  },
  {
    "email": "usuario3@example.com",
    "contrasena": "contrasena789",
    "genero": "No especificado"
  }];

  const fs = require("fs");
  app.get("/express", (req, res) => {
    let index = `
      <h1>Usuarios</h1>
      <table border="1">
        <tr>
          <th>Email</th>
          <th>Contraseña</th>
          <th>Género</th>
        </tr>`;
  
    // Añadir cada usuario a la tabla
    datos.forEach(usuario => {
      index += `
        <tr>
          <td>${usuario.email}</td>
          <td>${usuario.contrasena}</td>
          <td>${usuario.genero}</td>
        </tr>`;
    });
  
    index += `</table>`;

    
    // Leer el archivo index.html y agregar la tabla
    fs.readFile("public/archivos-express/index.html", "utf8", (err, html) => {
        if (err) {
            console.error("Error al leer el archivo index.html:", err);
            res.status(500).send("Error interno del servidor");
            return;
        }

         // Insertar la tabla en el HTML
        const modifiedHTML = html.replace("<!-- TablaDatos -->", index);

        // Enviar la respuesta con el HTML modificado
        res.send(modifiedHTML);
    });
});
