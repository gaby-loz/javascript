function calcularIva(){
    let precio = parseFloat(prompt("Ingresar el precio"));
    let iva = precio * 0.21;
    let precioConIva = precio + iva;
    console.log ("El precio con IVA es " + precioConIva);
    return precioConIva;
} 

calcularIva();





