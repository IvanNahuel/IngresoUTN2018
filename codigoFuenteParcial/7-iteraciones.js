//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var notas;
    var sexo;

    var promediototal;                                  //el promedio total 
    var notaMasBaja;                                    //la nota mas baja 
    var CantVarones=0;                                  //cant de varones que su notas es mayor 6 

    var acomulador;

    for (var i=1 ; i<6 ; i++){
        acomulador = notas;

        notas = parseInt(prompt ("ingrese su nota"));
        sexo = prompt ("ingrese su sexo [F/M]");

        if (i==1){
            notaMasBaja = notas;
        }
        if (notas < notaMasBaja){
            notaMasBaja = notas; 
        }
        if (sexo =="m" || sexo == "M" &notas<=6){
            CantVarones++;
        }

        promediototal = acomulador+ notas;


    }  
}

