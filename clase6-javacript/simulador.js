
class nuevoInscrito{
    constructor(nombre,apellido,email){
        this.nombre=nombre.toLowerCase(),
        this.apellido=apellido.toLowerCase(),
        this.email=email.toLowerCase()
    }
}

const listaDeInscritos=[];

class cursos{
    constructor(nombreCurso,precioCurso,categoriaCurso, duracionCurso){
        this.nombreCurso=nombreCurso,
        this.precioCurso=number(precioCurso),
        this.categoriaCurso=categoriaCurso,
        this.duracionCurso=duracionCurso
    }
}

function mostrarCurso(){
    return "Curso: " + this.nombreCurso + "Costo del curso: " + this.precioCurso + "Categoría: " + this.categoriaCurso + "Duración: " + this.duracionCurso
}

const cursosDisponibles=[];

let curso1= new cursos ("Diferencia sexual", 50, "Filosofía de la sexualidad", "48 horas");
let curso2= new cursos ("Introducción a Zizek", 50, "Filosofía contemporánea", "48 horas");
cursosDisponibles.push(curso1, curso2)


function inscripcionCurso(){

    let entrada = prompt("¿En qué curso te interesa inscribirte?: 1.- Diferencia sexual, 2.- Introducción a Zizek");

while(entrada!=ESC){
    let contador=0;
    switch(entrada){
        case "Diferencia sexual":
            if(contador <=10){
                let suma= contador + 1;
                let nombre = prompt("Ingrese su nombre");
                let apellido = prompt("Ingrese su apellido");
                let email = prompt("Ingrese su email");
                let nuevoInscrito1 = new nuevoInscrito (nombre, apellido, email);
                listaDeInscritos.push(nuevoInscrito1);
                console.log("Hola " + nombre + "Te inscribirte exitosamente en el curso: Diferencia Sexual")
            }else{
                alert("Curso lleno")
            }
        break;

        case "Intrudcción a Zizek":
            if (contador<= 10){
                let suma= contador + 1;
                let nombre = prompt("Ingrese su nombre");
                let apellido = prompt("Ingrese su apellido");
                let email = prompt("Ingrese su email");
                let nuevoInscrito1 = new nuevoInscrito (nombre, apellido, email);
                listaDeInscritos.push(nuevoInscrito1);
                console.log("Hola " + nombre + "Te inscribirte exitosamente en el curso: Introducción a Zizek")
            }else{
                alert("Curso lleno")
            }
        break;
    
    }

}

inscripcionCurso()