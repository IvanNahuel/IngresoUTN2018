function Mostrar()
{
//tomo la edad  

var edades;

edades = document.getElementById("edad").value;

if (edades<13){                          //si la edad es menor a 13
    alert("es niño");
    
} else if (edades <18){
    alert("es adolescente");             //si la edad es menor a 18

} else {                                 //si no es todo eso, es esto 
    alert("es adulto");
}

}//FIN DE LA FUNCIÓN