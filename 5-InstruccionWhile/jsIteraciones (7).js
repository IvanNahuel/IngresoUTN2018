function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

do {

		numero = parseInt(prompt ("ingrese un numero  "));		//numero ingresado atravez del prompt
		contador++;												//controla la cant de veces que se repite la instruccion
		acumulador = acumulador + numero;						//suma el anterior numero acomulado mas el nuevo numero ingresado 
		respuesta = prompt ("ingrese su respuesta S/N: ");		//pide ingresar respuesta para repetir o no el LOOP

} while (respuesta=='s');										//si la respuesta es si se LOOPEA, si no, avanza 

document.getElementById('suma').value=acumulador;				//muestra el valor del acomulador 
document.getElementById('promedio').value=acumulador/contador;	//saca el porcentaje final mediante los datos del contador

}//FIN DE LA FUNCIÓN