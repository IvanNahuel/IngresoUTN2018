function Mostrar()
{

 var Numero = parseInt (prompt("ingrese un numero : ")); 
 var esPrimo = true;    
                                               
for ( i = 2 ; i<=Numero ; i++){    
    
    if (numero % i ==0){
        esPrimo=false;
        break;
    }     
}
if (esPrimo){
    alert (Numero + " es primo");
}else {
    alert (Numero + " No es primo");
}

    



}//FIN DE LA FUNCIÓN