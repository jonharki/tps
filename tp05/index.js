/*Crear una funcion que agrege una pelicula al array de peliculas
La pelicula debera tener un ID y un Titulo
Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente
Crear una funcion que ordene las peliculas por Titulo y por ID
Crear una funcion que elimine una pelicula por su Id*/

function Pelicula (id, titulo) {
    this.id = id;
    this.titulo = titulo;
}; 

function Videoteca() {
    this.peliculas = [];

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


this.ordenarId = function () {
    this.peliculas.sort(compararId)
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


this.ordenarTitulo = function () {
    this.peliculas.sort(compararTitulo)
};



   this.agregarPeliculas = function (pelicula) {
        var existe = false;
       for (var i=0;(i < this.peliculas.length) && !existe; i++) {

            if (this.peliculas[i].id === pelicula.id) {
                existe = true;
            }
        }
        if (!existe) {
            this.peliculas.push(pelicula);
        } else {
            alert('esta pelciula ya fue ingresada');
    }
    
        
}

   this.quitarPeliculas = function (idPelicula) {
        var existe = false;
        idPelicula = parseInt(prompt('ingrese id'));
        for (i=0; i < this.peliculas.length && existe === false; i++){
            if(this.peliculas[i].id===idPelicula){
                existe = true;  
                break;
           }
        } 
      if (existe)
      {this.peliculas.splice(i, 1);
           }
      else {
           alert('esta pelicula no existe');
           }         
 
    }   
    
}





