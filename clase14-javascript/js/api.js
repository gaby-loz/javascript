//CARGAR DATA DE ORIGEN LOCAL
$.get("data/api.json", function(datos, estado){
    console.log(datos);
    console.log(estado);
    if(estado=="success"){
        for(const literal of datos){
            cursosDisponibles.push(new cursos(literal.id, literal.nombreCurso, literal.precioCurso, literal.categoria, literal.cantidad, literal.img));
        }
    }
    console.log(cursosDisponibles);
    cursosjquerry(cursosDisponibles, '#cursoContenerdor');
});