$.get("data/api.json", function(datos, estado){
    console.log(datos);
    console.log(estado);
    if(estado=="success"){
        let misDatos = respuesta;
        for(const dato of misDatos){
            $("body").prepend(`<div>
                                Guardado:${respuesta.title}
                                </div>`)
        }
    }
});
