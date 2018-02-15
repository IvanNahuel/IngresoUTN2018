function Mostrar()
{
//tomo la edad  
var Edades;
var Estado;

Edades= document.getElementById("edad").value;
Estado= document.getElementById("estadoCivil").value;

if (Edades>=18 && Estado=="Soltero"){
    alert ("Es soltero y no es menor");
}
	


}//FIN DE LA FUNCIÓN