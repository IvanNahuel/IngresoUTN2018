function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
    case "Julio":
  
    case "Agosto":
    alert ("Abrigate que hace frio.");
    break;

    case "Septiembre":
  

    case "Octubre":
  
    case "Noviembre":
  
    case "Diciembre":
    alert ("Ya pasamos el frio, ahora calor ");
    break;

    default :                               //si no es ninguna de las otras condiciones por defecto son estas 
    alert ("Falta para el invierno");
    break;


}


}//FIN DE LA FUNCIÓN