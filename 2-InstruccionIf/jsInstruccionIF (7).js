function Mostrar()
{
//tomo la edad  
var edades;
var Estado;

edades = document.getElementById("edad").value;
Estado = document.getElementById("estadoCivil").value;

if (edades <18 & !(Estado== "Soltero")){
    alert ("es muy pequeño para no estar soltero")
}
	


}//FIN DE LA FUNCIÓN