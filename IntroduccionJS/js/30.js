const usuarioAutenticado = new Promise((resolve, reject) => 
{
    const auth = true;

    if(auth)
    {
        resolve('Usuario Autenticado'); // El Promise se cumple
    }
    else
    {
        reject('No se pudo iniciar sesión'); // El Promise no se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(console.error));


// En los Promises existen 3 valores

// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplió
// Rejected: Se ha rechazado o no se pudo cumplir