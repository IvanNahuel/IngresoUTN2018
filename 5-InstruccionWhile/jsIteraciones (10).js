/* 1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/


function Mostrar()
{

	var SumaNegativos=0;
	var SumaPositivos=0;
	var contadorPos=0;
	var contadorNeg=0;
	var contadorCeros=0;
	var contadorPares=0;
	var PromedioPositivo=0;
	var PromedioNegativo=0;

	var Diferencia;
	var respuesta ="si";

	var numero;
	//var contador=0;

	var respuesta="si";

	while (respuesta=="si" || respuesta=="s")
	{
		numero = parseInt(prompt ("ingrese un numero  "));	
		
		if (numero>0){													//si numero es mayor a cero 
			SumaPositivos = numero + SumaPositivos;						//suma de positivos + numero 
			contadorPos++;												//suma uno al contador de positivos

		}else if (numero ==0){											//si numero es igual a cero
			contadorCeros++;											//contador mas uno

		}else {															//si numero no es mayor a cero 
			SumaNegativos = numero + SumaNegativos;						//sumanegativos + numero 
			contadorNeg++;												//suma uno al contador de negativos
		} 
		if (numero%2 ==0){												//si el resto de numero es cero, significa que
			contadorPares++;		//contador de los numeros pares	    //es un numero par,
		}
	respuesta = prompt ("Desa seguir ingresando numero S/N: ");			//pedime la respuesta
	
	}
	if (contadorNeg!=0){												//si el contador negativo es distinto a 0
	PromedioNegativo = SumaNegativos / contadorNeg;						//obtengo el promedio de los negativos
	}
	if (contadorPos!=0){												//si el contador negativo es distinto a 0
	PromedioPositivo = SumaPositivos / contadorPos;						//obtengo el promerio de los positivos
	}
	Diferencia= contadorPos - contadorPos ;


	document.write ("la Suma de los negativos es "+ SumaNegativos + "<br/>");
	document.write ("la Suma de los positivos "+ SumaPositivos + "<br/>");
	document.write ("la Cantidad de positivos "+ contadorPos + "<br/>");
	document.write ("la Cantidad de negativos "+ contadorNeg + "<br/>");
	document.write ("la Cantidad de Ceros es  "+ contadorCeros + "<br/>");
	document.write ("la Cantidad de numeros pares es  "+ contadorPares + "<br/>");
	document.write ("el Promedio de positivos.   "+ PromedioPositivo + "<br/>");
	document.write ("el Promedio de negativos.   "+ PromedioNegativo + "<br/>");
	document.write ("La diferencia entre positivos y negativos es  "+ Diferencia + "<br/>");

}//FIN DE LA FUNCIÓN