function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';



while (respuesta=='si'){
	numero = parseInt(prompt ("ingrese un numero  "));

	if (numero>=0){
		positivo = positivo + numero;
	} else {
		negativo = negativo * numero;
	}

	respuesta = prompt ("ingrese su respuesta S/N: ");	

}


	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN