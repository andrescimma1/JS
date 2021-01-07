 const carrito = [
     { nombre: 'Monitor 20 Pulgadas', precio: 500},
     { nombre: 'Televisión 50 Pulgadas', precio: 1000},
     { nombre: 'Audífonos', precio: 120},
     { nombre: 'Mouse', precio: 90},
     { nombre: 'Teclado', precio: 150}
 ];

 // forEach (muestra las propiedades de un arreglo)
 carrito.forEach(producto => console.log(producto.nombre));



 // map (crea un nuevo arreglo para filtrar)
 const arreglo2 = carrito.map(producto => producto.nombre);

 console.log(arreglo2);