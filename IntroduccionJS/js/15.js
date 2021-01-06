// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 1000},
    { nombre: 'Audífonos', precio: 120},
    { nombre: 'Mouse', precio: 90},
    { nombre: 'Teclado', precio: 150}
];

// forEach
meses.forEach(function(mes)
{
    if(mes == 'Marzo')
    {
        console.log('Marzo si existe');
    }
});

// includes
let resultado = meses.includes('Marzo');

// some ideal para arreglo de objetos
resultado = carrito.some(function(producto)
{
    return producto.nombre === 'Celular'
});

// reduce
resultado = carrito.reduce(function(total, producto)
{
    return total + producto.precio
}, 0);


console.log(resultado);


// filter
resultado = carrito.filter(function(producto)
{
    return producto.precio > 400
});

resultado = carrito.filter(function(producto)
{
    return producto.nombre !== 'Celular'
});



console.log(resultado);