class cursos{
    constructor(id,nombreCurso,precioCurso,categoriaCurso, duracionCurso){
        this.id=id;
        this.nombreCurso=nombreCurso,
        this.precioCurso=parseFloat(precioCurso),
        this.categoriaCurso=categoriaCurso,
        this.duracionCurso=duracionCurso
    }
}


const cursosDisponibles=[];
let curso1= new cursos ("1", "Diferencia sexual", 50, "Filosofía de la sexualidad", "48 horas");
let curso2= new cursos ("2", "Introducción a Zizek", 50, "Filosofía contemporánea", "48 horas");
cursosDisponibles.push(curso1, curso2);

console.log(cursosDisponibles);

//CREAR INTERFAZ HTML
for(const curso of cursosDisponibles){
    let div = document.createElement("div");
    div.innerHTML= `<h2>${curso.nombreCurso}</h2>
                    <h3>${curso.categoriaCurso}</h3>
                    <h4>${curso.precioCurso}</h4>
                    <h5>${curso.categoriaCurso}</h5>
                    <button id="${curso.id}" class="btnComprar">COMPRAR</button>`;
    document.body.appendChild(div);
    
}

//evento en el botón COMPRAR
const botones = document.getElementsByClassName('btnComprar');

const carrito = [];


function comprarCurso(){
    

    const seleccionado = cursosDisponibles.find(curso => curso.id == this.id);
    carrito.push(seleccionado);

    console.log(seleccionado);

    let innerCarrito = '';
    for (const curso of carrito){
        innerCarrito = innerCarrito + `<p>${curso.nombreCurso} - ${curso.precioCurso}</p>`
    }

    const divCarrito = document.getElementById("carrito");
    divCarrito.innerHTML = innerCarrito;

    console.log("respuesta compra")
}

for (const boton of botones){
    boton.addEventListener("click", comprarCurso)
}
   
    


