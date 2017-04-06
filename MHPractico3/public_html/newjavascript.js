/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//$().ready(iniciar);
var numS = 0;
var numP = 0;
var numE = 0;
var div = 0;
var tot = 0;
var totS = 0;
var cant = 0;
var sueMB = 99999999;
////function iniciar() {
//    $("#btnE9").click(procesarEj9);
//    $("#btnE10").click(procesarEj10);
//    //$("#btnE11").click(procesarEj11);
//    $("#btnE12").click(procesarEj12);
//    $("#btnE13").click(procesarEj13);
//}
$("#numC").keyup(function(event){
    if(event.keyCode == 13){
        $("#btnE11").click();
    }
});
function procesarEj9() {
    var dia = "";
    var tempe = "";
    switch ($("#txtZ").val()) {
        case "Lunes":
            dia = "Ir al trabajo";
            break;
        case "Martes":
            dia = "Ir al trabajo";
            break;
        case "Miercoles":
            dia = "Ir al trabajo";
            break;
        case "Jueves":
            dia = "Ir al trabajo";
            break;
        case "Viernes":
            dia = "Ir al trabajo";
            break;
        case "Sabado":
            dia = "Ir al trabajo";
            break;
        case "Domingo":
            dia = "Descansar";
            break;
        default:
            return $("#pRes9").html("Error de formato, ha escrito mal el día");
            
    }
    var num1 = $("#numZ").val();
    if (isNaN(num1)){
        $("#pRes9").html("Error de formato, uso letras en temperatura");
    } else {
        nnum1 = parseFloat(num1);
        switch (nnum1) {
            case nnum1 > 20:
                tempe = "Ponerse ropa comoda";
                break;
            case nnum1 < 10:
                tempe = "Abrigarse mucho";
                break;
            default:
                tempe = "Abrigo moderado";
                break;
        }
        $("#pRes9").html("Levantarse<br>"+tempe+"<br>"+dia+"<br>");
    }   
}

function procesarEj10(){
    var num1 = $("#numX").val();
    
    if(isNaN(num1)){
        $("#pRes10").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        div++;
        tot+=nnum1;
        promN=tot/div;
        prom=promN.toFixed(2);
        if(nnum1>90){
            numE++; 
            numS++;
        }
        else if(nnum1>70){
            numS++;
        }
        else{
            numP++;
        }        
        $("#numX").val("");
        $("#pRes10").html("Cantidad de excelentes: "+numE+"<br>"+"Cantidad de salvados: "+numS+"<br>"+"Cantidad de perdidos: "+numP+"<br>"+"Promedio: "+prom);
    }
}
function procesarEj11(){     
    var num1 = $("#numC").val();
    
    if(isNaN(num1)){
        $("#pRes11").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        cant++;
        totS+=nnum1;
        if(sueMB>nnum1){
            sueMB=nnum1;
        }       
        $("#numC").val("");
        $("#pRes11").html("Total a pagar: "+totS+"<br>"+"Cantidad de sueldos: "+cant+"<br>"+"Sueldo mas bajo: "+sueMB);
    }
}

function procesarEj12(){
    var num1 = $("#numA").val();
    var num2 = $("#numB").val();
    if (isNaN(num1) || isNaN(num2)){
        $("#pRes12").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        nnum2=parseFloat(num2);
        if(nnum1>nnum2){
            rest=nnum1-nnum2;
            $("#pRes12").html("Resultado: "+rest);
        }
        else{
            rest=nnum2-nnum1;
            $("#pRes12").html("Resultado: "+rest);
        }
    }
}
function procesarEj13(){
    var num1=$("#numD").val();
    var num2=$("#numE").val();
    if(isNaN(num1) || isNaN(num2)){
        $("#pRes13").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        nnum2=parseFloat(num2);
        switch($("#txtX").val()){
            case "S":
                res=nnum1+nnum2;
                break;
            case "R":
                res=nnum1-nnum2;
                break;
            case "D":
                res1=nnum1/nnum2;
                res=res1.toFixed(2);
                break;
            case "M":
                res=nnum1*nnum2;
                break;
            default:
                return $("#pRes13").html("Ese operador no es valido, seleccione 'S', 'R', 'D', 'M'");
        }
        $("#pRes13").html("Resultado: "+res);
    }
}