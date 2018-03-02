/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad = parseInt(document.getElementById("Cantidad").value);
    var marca = document.getElementById("Marca").value;

    var resultado;
   

    switch (cantidad){
        case 6:
        resultado = (6*35)*0.5;
        break;

        case 5:
        if (marca =="ArgentinaLuz"){
        resultado = (5*35)*0.4;
        } else {
            resultado = (5*35)*0.3;
        }

        break; 
        case 4:
        if (marca =="ArgentinaLuz" || marca =="FelipeLamparas"){
            resultado = (4*35)*0.25;
        } else {
            resultado = (4*35)*0.20;
        }
        break;

        case 3:
        if (marca =="ArgentinaLuz"){
            resultado = (3*35)*0.15;

        } else if (marca =="FelipeLamparas"){
            resultado = (3*35)*0.10;
        } else {
            resultado = (3*35)*0.05;
        }
        break;

        default:
        resultado = (cantidad*35);

    }

    if (resultado>=120){
        resultado = resultado*1.1;
        alert ("IIBB Usted pago "+ resultado + " siendo X el impuesto que se pagó");

    }

     var precioDescuento;
     precioDescuento = resultado ;
     document.getElementById("precioDescuento").value = precioDescuento;

   
    


}
