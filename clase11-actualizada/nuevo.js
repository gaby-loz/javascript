const cursosDisponibles=[];
const carrito = [];
const categorias = ["Sexualidad", "Filosofía Contemporanea","Policiales"];


class cursos{
    constructor(id,nombreCurso,precioCurso,categoria, cantidad){
        this.id=id;
        this.nombreCurso=nombreCurso;
        this.precioCurso=parseFloat(precioCurso);
        this.categoria= categoria;
        this.cantidad= cantidad || 1;
    }

    agregarCantidad(valor){
        this.cantidad += valor;
    }
}

cursosDisponibles.push(new cursos ("1", "Diferencia sexual", 50, categorias[0]));
cursosDisponibles.push(new cursos ("2", "Introducción a Zizek", 60, categorias[1]));
cursosDisponibles.push(new cursos ("3", "Tome to Kill", 70, categorias[2]));

console.log(cursosDisponibles);

function cursosjquerry(cursosDisponibles, id){
    $(id).empty();

    for (curso of cursosDisponibles){
        $(id).append(`<div class="card" style="width:18rem; padding:2rem;">
                    <img src="http://via.placeholder.com/150" class="card-img-rop" alt="imagen"></img>
                    <div class="card-body>
                    <h5 class="card-title">${curso.nombreCurso}</h5>
                    <p class="card-text">${curso.precioCurso}</p>
                    <span class="badge bg-info">${curso.categoria}</span>                    
                    <a href="#" id='${curso.id}' class="btn btn-primary btn-compra">COMPRAR</a>
                    </div>
                    </div>`
                    )

    }
    $('.btn-compra').on('click',comprarCursos)
}

cursosjquerry(cursosDisponibles, '#cursoContenedor');
