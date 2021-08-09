// //Determinar la paridad de un numero
// const resto = (a,b) => a%b

// let x=parseInt(prompt("Ingrese un número"));
// const valorResto=resto(x,2);
// if(valorResto==0){
//     console.log("El número ingresado es par")
// }else{
//     console.log("El número ingresado es impar");
// }

//objetos

function Tienda (nombre, direccion, propiedad, rubro){
    this.nombre= nombre;
    this.direccion= direccion;
    this.propiedad= propiedad;
    this.rubro= rubro;
}

const tienda1 = new Tienda ("tienda Gaby", "Buenos Aires", "La tienda es de Gaby", "Ciudado personal");
const tienda2 = new Tienda ("Tienda Dani", "Mendoza", "Tienda de Daniel", "Deportes");
const tienda3 = new Tienda ("Tienda Mati", "Cordoba", "Tienda de Mati", "Belleza");

console.log(tienda1, tienda2, tienda3);