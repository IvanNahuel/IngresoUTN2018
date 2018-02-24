function Mostrar()
{

	var contador=0;
	// declarar variables
	var acomuladorMayores=0;
	var acomuladorMenores=0; 

	var numero;

	var respuesta='si';

	while(respuesta =='s' ||respuesta =='si' )							//mientras la respuesta dada sea s o si 
	{
		contador++;
		numero = parseInt(prompt ("ingrese un numero  "));				//pedime un numero 
		
		if (numero>acomuladorMayores){									//si numero es mayor a acoumulador 
			document.getElementById("maximo").value = numero;			
			acomuladorMayores = numero;									//almacenala en esta variable "numero"
										
		} 		
		if (contador==1){											//si contador vale 1, 
			document.getElementById("maximo").value = numero;			//asigna por defecto el valor minimo
			document.getElementById("minimo").value = numero;			//asigna por defecto el valor maximo
			acomuladorMenores = numero;									//por defecto asigna que acomuladores menores
		}																//valga el numero ingresado por primera vez 

		if (numero< acomuladorMenores){									//si numero es menor acomuladores menores 
			document.getElementById("minimo").value = numero;			
			acomuladorMenores = numero;									//acomuladores menores vale numero 
		} 	
		
	respuesta = prompt ("Desa seguir ingresando numero S/N: ");			//pedime la respuesta
	}

}//FIN DE LA FUNCIÓN