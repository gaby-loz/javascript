class Producto {
    constructor(nombre, tipo, precio) {
        this.nombre  = nombre;
        this.tipo = tipo;
        this.precio  = parseFloat(precio);
        
    }

    iva() {
        this.precio = this.precio + (this.precio * 0.21);
        return(this.precio);
    }

    mostrarProducto() {
        return "Nombre: " + this.nombre + "\nTipo de producto: " + this.tipo + "\nPrecio del producto: " + this.precio + "\n";
    }
    
}

function crearProducto(){
    let nombre = prompt("INGRESAR NOMBRE DE PRODUCTO");
    let tipo   = prompt("INGRESAR TIPO DE PRODUCTO");
    let precio    = prompt("INGRESAR PRECIO DEL PRODUCTO");
    return new Producto(nombre, tipo, precio);
}


const producto1 = (crearProducto());
const producto2 = (crearProducto());
producto1.iva();
producto2.iva();
console.log(producto1.mostrarProducto() + producto2.mostrarProducto());


