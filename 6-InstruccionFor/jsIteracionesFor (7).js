function Mostrar()
{
    var ContadorPares = 0;
    var Numero = parseInt (prompt("ingrese un numero : "));     
                                           
    for ( i = 1 ; i<=Numero ; i++){    

        if (Numero % i ==0){                       
            ContadorPares++;                
            console.log (i);               
         
          } 
    
    }
    alert ("la cant de pares es : "+ ContadorPares);        
    
}
