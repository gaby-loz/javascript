
// Te dejo el desorden de varios Intentos... quería clasificar notas segun "Aprobado - deficiente - sobresaliente" NUNCA ME SALIO, así que terminé haciendo algo sencillo al final



// // En cada repetición, definimos en qué clasificación está la nota del usuario

// do {
// 	//PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
// 	let Calificacion = Number(prompt("Introduce tu nota"));
// 	//SI SE INTRODUJO UN NÚMERO
// 		//SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
// 	if (calificacion > 0 && calificacion <= 10) {
// 			if (calificacion <= 3) {
// 				alert("Reprobado");
// 			}
// 			else if (calificacion <= 5) {
// 				alert("Regular a deficiente");
// 			}
// 			else if (calificacion <= 6) {
// 				alert("Suficiente");
// 			}
// 			else if (calificacion <= 7) {
// 				alert("Bien");
// 			}
// 			else if (calificacion <= 9) {
// 				alert("Notable"); 5
// 			}
// 			else if (calificacion ==10) {
// 				alert("Sobresaliente");
// 			}
	
// 		//SI LA NOTA NO ES ENTRE 0 Y 10
// 		else {
// 			alert("calificación erronea");
// 		}
//     }
// 	//SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
// 	else {
// 		//SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
// 		if (calificacion != "") {	
// 			alert("Introduce un numero valido");
// 		}
// 	}
// //EL BUCLE VUELVE ARRIBA MIENTRAS NO SE HAYA PULSADO CANCELAR
// } while (nota != "");	


// otro Intento...

// // let calificacion = Number(prompt("Introduce tu nota"));

//     if(calificacion > 0 && calificacion <= 10){
//         if(calificacion>0&&calificacion<=3){
//             console.log("Usted está reprobado");
//         }
//         else if(calificacion>=4&&calificacion<=6){
//             console.log("Su calificación es deficiente");
//         }
//         else if(calificacion>=7&&calificacion<=8){
//             console.log("Usted está aprobado");
//         }
//         else if(calificacion>=9&&calificacion<=10){
//             console.log("Usted es un estudiante sobresaliente");
//         } 

//     }
//     else(calificacion=""){

//     }



// Otro intento más
// let(calificacion=Number(prompt("Ingrese una nota")));

// for(let i=1;i<=10;i++){
//     if(calificacion>0&&calificacion<=3){
//         console.log("Usted está desaprobado");
//         else if(calificacion>=4&&calificacion<=6){
//             console.log("Su calificación es deficiente, debe mejorar");
//         }
//         else if(calificacion>=7&&calificacion<=10){
//             console.log("Usted está aprobado, felicidades");
//         }
//     } 

//     else(calificacion==""){
//         alert("usted ingreso una calificacion invalida");
//     }
// }



// Un ejercicio sencillo para cumplir la entrega
// DIVIDIMOS DE FORMA DECRECIENTE UN NUMERO INGRESADO POR EL USUARIO EN UN BUCLE DEL 1 AL 10
// let ingreseNumero=parseInt(prompt("ingrese un numero"));

// for(let i=10; i>=1; i--){
//     let division= ingreseNumero / i;
//     console.log(ingreseNumero+"/"+i+"="+division);

// }

for (let i=1; i<=3; i++){
    let nombre= prompt("Ingrese nombre del paciente");

    alert("Turno N°" + i + "Nombre: " + nombre);

    if(i===3){
        alert("No hay más turnos");
    }
}
