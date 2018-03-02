//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ventas;

    var menor;
    var mayor = 0;

    
        for (var i = 1; i<7 ;i++ ){
            ventas = prompt ("ingrese los precios de las ventas :");
            if (ventas > 0){
                if (ventas >mayor){
                mayor = ventas;
                }
                if (i ==1){
                menor = ventas;                 //dentro de un contador asi desde el vamos se toma como
                }                               // referencia al primer numero menor
                
                if (ventas <menor){
                menor = ventas;
                }
                   
        }
    }

    alert ("el menor importe de venta fue el :" + menor + " y el mayor importe de ventas fue : "+mayor);



}

	


