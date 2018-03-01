/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

    var numero1 = parseFloat( document.getElementById("PrecioUno").value);
    var numero2 = parseFloat( document.getElementById("PrecioDos").value);
    var numero3 = parseFloat( document.getElementById("PrecioTres").value);

    var resultado;

    resultado = numero1 + numero2 + numero3;

    alert (resultado);
	
}
function Promedio () 
{
    var numero1 = parseFloat( document.getElementById("PrecioUno").value);
    var numero2 = parseFloat( document.getElementById("PrecioDos").value);
    var numero3 = parseFloat( document.getElementById("PrecioTres").value);

    var resultado;

    resultado = numero1 + numero2 + numero3;

    alert (resultado/3);
}
function PrecioFinal () 
{
    var numero1 = parseFloat( document.getElementById("PrecioUno").value);
    var numero2 = parseFloat( document.getElementById("PrecioDos").value);
    var numero3 = parseFloat( document.getElementById("PrecioTres").value);

    var resultado;

    resultado = numero1 + numero2 + numero3;

    alert (resultado/1.6);
}