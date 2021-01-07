// POO


/** Object Literal **/
const producto = 
{
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre, precio, garantia)
{
    this.nombre = nombre;
    this.precio = precio;
    this.garantia = garantia;
}

// Crear funciones que solo se utilizan en un objeto en específico. (prototype)
Producto.prototype.formatearProducto = function()
{
    return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
}

function Cliente(nombre, apellido)
{
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function()
{
    return `El cliente ${this.nombre} ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo de 24"', 800, true);
const producto3 = new Producto('Laptop', 300, true);
const producto4 = new Producto('Auriculares', 100, true);
const producto5 = new Producto('Teclado', 50, false);
const cliente = new Cliente('Andrés', 'Cimma');

console.log(cliente);

console.log(producto2);
console.log(producto3.formatearProducto());

console.log(formatearProducto(producto2));

