
// //FUNCION QUE SE EJECUTA CUANDO SE CARGA EL DOM
$(document).ready (function(){
    if("carrito" in localStorage){
        const arrayLiterales = JSON.parse(localStorage.getItem("carrito"));
        for(const literal of arrayLiterales){

            carrito.push(new cursos(literal.id, literal.nombreCurso, literal.precioCurso, literal.categoria, literal.cantidad));
        
        }
        carritoUI(carrito);
        
    }
    $(".dropdown-menu").click(function(e){
        e.stopPropagation();
    });
});

//Instanciando cusos

cursosDisponibles.push(new cursos ("1", "Diferencia sexual", 50, categorias[0]));
cursosDisponibles.push(new cursos ("2", "Introducción a Zizek", 60, categorias[1]));
cursosDisponibles.push(new cursos ("3", "Crítica a Paul B. Preciado", 70, categorias[0]));

console.log(cursosDisponibles);



cursosjquerry(cursosDisponibles, '#cursoContenedor');

selectUI(categorias, "#filtroCategoria");

$('#filtroCategoria').change(function(e){
    const value = this.value;

    $('#cursoContenedor').fadeOut (600, function(){
        if(value == 'TODOS'){
            cursosjquerry(cursosDisponibles, '#cursoContenedor');
        }else {
            const filtrados= cursosDisponibles.filter (curso => curso.categoria == value);
            cursosjquerry(filtrados, '#cursoContenedor');
        }
        $("#cursoContenedor").fadeIn ();
    })
});


$(".btn-compra").click(function(e){
    $("#cantidadCursos").show(800);
})


