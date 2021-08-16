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

const listaDeProductos=[];
function crearProducto(){

    for(let i=0; i<4; i++){
        let nombre = prompt("INGRESAR NOMBRE DE PRODUCTO");
        let tipo   = prompt("INGRESAR TIPO DE PRODUCTO");
        let precio    = prompt("INGRESAR PRECIO DEL PRODUCTO");
        let nuevoProd = new Producto(nombre, tipo, precio);
        listaDeProductos.push(nuevoProd);
        return console.log(nuevoProd.mostrarProducto() , nuevoProd.iva());
    }   
}
const producto1 = (crearProducto());
const producto2 = (crearProducto());
const producto3 = (crearProducto());
const producto4 =(crearProducto());

console.log(listaDeProductos)









