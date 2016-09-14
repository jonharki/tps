function Pelicula(ID, titulo, descripcion, año, duracion, actores, director) {
	this.ID			 = ID;
	this.titulo		 = titulo;
	this.descripcion = descripcion;
	this.año		 = año;
	this.duracion	 = duracion;
    this.actores	 = [];
   	this.director	 = director;	
this.cambiarTitulo = function () {
	this.titulo = prompt('Ingrese nuevo de la pelicula');
	};
this.cambiarDescripcion = function(){
	this.descripcion = prompt('Ingrese una nueva descripcion');
}
this.cambiarAño =function(){
	this.año = prompt('Ingrese el año');
	};
this.cambiarDuracion = function(){
	this.duracion = prompt('Ingrese duracion');
};
this.agregarActor = function() {
    var actor 
	continuar = 1;
    do {
		actor = (prompt('ingrese actor'));
		this.actores.push(actor);
        continuar = parseInt(prompt('para agregar otro actor ingrese 1 de lo contrario 0'))
    } while(continuar);
}


this.cambiarDirector =  function(){
	this.director = prompt('Ingrese director');
};}


	
