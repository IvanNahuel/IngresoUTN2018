function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

document.getElementById('Sexo').value=sexo;

//F
//while (!(sexo =="f" || sexo =="m"))
while (sexo!="f" && sexo != "m" & sexo !="F" & sexo !="M"){  //mientras sexo sea distinto a F y sexo sea distinto a M
sexo = prompt ("error reingrese dato")      //mostrame la alerta de que "se han puesto mal los datos"

} 
    if (sexo=="f" ){        //si la caja del prommpt no es nula y vale f en cadena 
    sexo = "sexo femenino ";            //mostra que el sexo es femenino
}        else {                         //si no 
    sexo = "sexo masculino";            //mostrame que el sexo es masculino
}
document.getElementById('Sexo').value=sexo;     //mostrame a travez de texto, los valores que se modificaron 


}//FIN DE LA FUNCIÓN