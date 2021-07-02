//Determinar la paridad de un numero
const resto = (a,b) => a%b

let x=parseInt(prompt("Ingrese un número"));
const valorResto=resto(x,2);
if(valorResto==0){
    console.log("El número ingresado es par")
}else{
    console.log("El número ingresado es impar");
}
