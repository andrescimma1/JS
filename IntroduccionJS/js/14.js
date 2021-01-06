// Arreglos o Arrays

const numeros = [10,20,30,40,50];
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);


// Acceder a los valores de un arreglo
// console.log(numeros[4]); // 50
// console.log(numeros[2]); // 30
// console.log(numeros[200]); // undefined

// Conocer el tamaño de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numero)
// {
//     console.log(numero);
// })

numeros.push(60, 70, 80); // Agrega al final del arreglo

numeros.unshift(-10, -20, -30); // Agrega al inicio del arreglo

meses.pop(); // Elimina el último elemento del arreglo
meses.shift(); // Elimina el primer elemento de un arreglo

meses.splice(2, 1); 

console.table(numeros);

// Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);
