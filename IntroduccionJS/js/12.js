"use strict"; // Ejecuta el codigo de js de forma extricta

// Objetos
const producto = 
{
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible: true
}

//Object.freeze(producto); // Congela al objeto y no deja agregar, modificar o
                         //  eliminar sus propiedades.

Object.seal(producto) // Permite solo modificar las propiedades del objeto.

producto.precio = 'NUEVO PRECIO';

delete producto.precio;

console.log(producto);