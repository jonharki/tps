
function Pelicula (id, titulo) {
    this.id = id;
    this.titulo = titulo;
}; 

var Videoteca = (function() {
     var peliculas = [];

     var compararId = function(a,b) {
       var result;
        if(a.id < b.id){
            result = -1;
        };
        if(a.id === b.id){
            result = 0;
            };
        if(a.id > b.id){
            result = 1;
        }    
        return result;
    }


 var ordenarId = function () {
    peliculas.sort(compararId)
};

var compararTitulo = function(a,b) {
       var result;
        if(a.titulo < b.titulo){
            result = -1;
        };
        if(a.titulo === b.titulo){
            result = 0;
            };
        if(a.titulo > b.titulo){
            result = 1;
        }    
        return result;
    }


var  ordenarTitulo = function () {
    peliculas.sort(compararTitulo)
};



   var agregarPeliculas = function (pelicula) {
        var existe = false;
       for (var i=0;(i < peliculas.length) && !existe; i++) {

            if (peliculas[i].id === pelicula.id) {
                existe = true;
            }
        }
        if (!existe) {
            peliculas.push(pelicula);
        } else {
            alert('esta pelciula ya fue ingresada');
    }
    
        
}

    var quitarPeliculas = function (idPelicula) {
        var existe = false;
        idPelicula = parseInt(prompt('ingrese id'));
        for (i=0; i < peliculas.length && existe === false; i++){
            if(peliculas[i].id===idPelicula){
                existe = true;  
                break;
           }
        } 
      if (existe)
      {peliculas.splice(i, 1);
           }
      else {
           alert('esta pelicula no existe');
           }         
 
    }

    var obtenerPeliculas = function () {

        return peliculas;

    }

    return {
        agregarPeliculas:agregarPeliculas,
        quitarPeliculas:quitarPeliculas,
        ordenarId:ordenarId,
        ordenarTitulo:ordenarTitulo,
        obtenerPeliculas: obtenerPeliculas
    }
})()




