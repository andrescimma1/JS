// Objetos
const producto = 
{
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible: true
}

const medidas = 
{
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = {...producto, ...medidas}; // Combina a los dos objetos

console.log(producto);
console.log(nuevoProducto);