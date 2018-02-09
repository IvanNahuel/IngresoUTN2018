/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var aumento;
var nuevoSueldo;

sueldo = document.getElementById("sueldo").value;
sueldo = parseInt(sueldo);

aumento = sueldo*0.1;

nuevoSueldo = aumento+sueldo;

document.getElementById("resultado").value = nuevoSueldo;


	
}
