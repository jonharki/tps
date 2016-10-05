
function Pelicula (id, titulo, descripcion, imagen) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
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
            dibujarPelicula(pelicula);
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

    var dibujarPelicula = function(pelicula){
        var ul = document.getElementById('peliculas');
        var li = document.createElement('li');
        var h2 = document.createElement('h2');
        var titulo = document.createTextNode(pelicula.titulo);
        var p = document.createElement('p');
        var descripcion = document.createTextNode(pelicula.descripcion);
        var imagen = document.createElement('img');

        imagen.setAttribute('src', pelicula.imagen);
        li.setAttribute('id', pelicula.id);
        h2.appendChild(titulo);
        p.appendChild(descripcion);
        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(imagen);
        ul.appendChild(li);

      }

    return {
        agregarPelicula:agregarPelicula,
        quitarPelicula:quitarPelicula,
        ordenarId:ordenarId,
        ordenarTitulo:ordenarTitulo,
        obtenerPeliculas: obtenerPeliculas
        
    }
})()