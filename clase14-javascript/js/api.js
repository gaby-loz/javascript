const urlGet = "https://jsonplaceholder.typicode.com/posts";

$.get(urlGet, function(respuesta, estado){
    if(estado=="success"){
        for(const elemento of respuesta){
            console.log(elemento);
            $('body').append(elemento.title);
        }
    }
});