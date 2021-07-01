function calcularIva(){
    let precio = parseFloat(prompt("Ingresar el precio"));
    let iva = precio * 0.21;
    console.log ("El precio con Iva es " + iva);
    return iva;
} 

calcularIva();





