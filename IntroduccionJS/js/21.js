// Arrow Functions
const sumar2 = (n1, n2) => console.log(3 + 3);
    
sumar2(5, 10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');




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
meses.forEach(mes =>
{
    if(mes == 'Marzo')
    {
        console.log('Marzo si existe');
    }
});

let resultado;

// some ideal para arreglo de objetos
resultado = carrito.some(producto => producto.nombre === 'Celular');

// reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


// filter
resultado = carrito.filter(producto => producto.precio > 400);

resultado = carrito.filter(producto => producto.nombre !== 'Celular');

console.log(resultado);