// Clases

class Producto
{
    constructor(nombre, precio, garantia) 
    {
        this.nombre = nombre;
        this.precio = precio;
        this.garantia = garantia;
    }

    formatearProducto()
    {
        return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }

    mostrarPrecio()
    {
        return `El precio es de: ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor curvo de 24"', 800, true);
const producto3 = new Producto('Laptop', 300, true);

// Herencia

class Libro extends Producto
{
    constructor(nombre, precio, isbn)
    {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto()
    {
        return `${super.formatearProducto()} y su isbn es: ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la Revolución', 120, '91243010450243');
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());