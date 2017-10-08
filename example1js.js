mi_funcion = function(obj){

	var obj = {};

	this.miCiclo = function(){
		for (var i = 0; i < obj.length; i++) {
			obj[i] = i + 1;
		} 
	};

};


instanciando = mi_funcion();