function Mostrar()
{

var ContadorPares = 0;
var Numero = parseInt (prompt("ingrese un numero : "));     //al iniciar el Segundo frame se ejecutara esta linea
                                        //crea una variable, la parsea, pide que ingresemos un numero
for ( i = 1 ; i<=Numero ; i++){         //varriable iniciada en 1 que recorre hasta la variable "numero" ingresada
    
    if (i%2 ==0){                       
        ContadorPares++;                
        console.log (i);               
      //  continue;                       //variable salteadora de sentecia, a la siguiente Iteracion
    }

}
alert ("la cant de pares es : "+ ContadorPares);        //muestro al final la cannt de numeros pares

}