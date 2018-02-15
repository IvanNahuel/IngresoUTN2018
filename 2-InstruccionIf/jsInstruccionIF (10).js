function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	
	   numero = Math.floor (Math.random()*10)+1;
	   
	if (numero>=9){
		alert ("exelente "+numero)
	} else if (numero >=4){
		alert ("Aprobo "+ numero);
	} else {
		alert ("Desaprobo "+numero);
	}

}//FIN DE LA FUNCIÓN