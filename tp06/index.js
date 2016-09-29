
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

var validarPelicula = function(id){
    var existe = -1;
    for (i = 0; i < peliculas.length  && existe === -1; i++){
        if (id === peliculas[i].id){
            existe = i ;            
        }
    }
    return existe;
}

var agregarPelicula = function (pelicula) {

var existe = validarPelicula(pelicula.id);

    
        if (existe === -1) {
            peliculas.push(pelicula);
        } else {
            alert('esta pelciula ya fue ingresada');
    }
            
}

var quitarPelicula = function (id) {

var existe = validarPelicula(id);
       
      if (existe != -1)
      {peliculas.splice(existe, 1);
           }
      else {
           alert('esta pelicula no existe');
           }         
 
    }

    var obtenerPeliculas = function () {

        return peliculas;

    }

    return {
        agregarPelicula:agregarPelicula,
        quitarPelicula:quitarPelicula,
        ordenarId:ordenarId,
        ordenarTitulo:ordenarTitulo,
        obtenerPeliculas: obtenerPeliculas
    }
})()




