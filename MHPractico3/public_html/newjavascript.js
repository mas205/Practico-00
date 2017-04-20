$().ready(iniciar);
var numS = 0;
var numP = 0;
var numE = 0;
var div = 0;
var tot = 0;
var totS = 0;
var cant = 0;
var sueMB = 99999999;
function iniciar() {
    $("#btnE1").click(procesarEj1);
    $("#btnE2").click(procesarEj2);
    $("#btnE3").click(procesarEj3);
    $("#btnE4").click(procesarEj4);
    $("#btnE5").click(procesarEj5);
    $("#btnE6").click(procesarEj6);
    $("#btnE7").click(procesarEj7);
    $("#btnE8").click(procesarEj8);
    $("#btnE9").click(procesarEj9);
    $("#btnE10").click(procesarEj10);
    $("#btnE11").click(procesarEj11);
    $("#btnE12").click(procesarEj12);
    $("#btnE13").click(procesarEj13);
    $("#btnE14").click(procesarEj14);
    $("#btnE15").click(procesarEj15);
}
function procesarEj1(){
    var num1=$("#num1").val();
    if (isNaN(num1)){
        $("#pRes1").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        if(nnum1>0){
            $("#pRes1").html("Su número es mayor a 0");
        }
        else if(nnum1<0){
            $("#pRes1").html("Su número es menor a 0");
        }
        else{
            $("#pRes1").html("Su número es 0");
        }
    }
}
function procesarEj2(){
    var num1=$("#num2").val();
    if (isNaN(num1)){
        $("#pRes2").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        if(nnum1>10){
            $("#pRes2").html("Su número es mayor que 10");
        }
        else{
            $("#pRes2").html("");
        }
    }
}
function procesarEj3(){
    var num1=$("#num3").val();
    if (isNaN(num1)){
        $("#pRes3").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        if(nnum1>20){
            $("#pRes3").html("Su número es mayor que 20");
        }
        else{
            $("#pRes3").html("Su número es igual o menor que 20");
        }
    }
}
function procesarEj4(){
    var num1=$("#num4").val();
    if (isNaN(num1)){
        $("#pRes4").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        if(nnum1>0){
            $("#pRes4").html(nnum1);
        }
        else{
            nnum2=-nnum1;
            $("#pRes4").html(nnum2);
        }
    }
}
function procesarEj5(){
    var num1=$("#num5").val();
    if (isNaN(num1)){
        $("#pRes5").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        if(nnum1<20 && nnum1>10){
            $("#pRes5").html("Su número está entre 10 y 20");
        }
        else{
            $("#pRes5").html("Su número no está entre 10 y 20");
        }
    }
}
function procesarEj6(){
    var num1=$("#num6").val();
    if (isNaN(num1)){
        $("#pRes6").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        if(nnum1 % 7 === 0 && nnum1 % 3 === 0){
            $("#pRes6").html("Su número es múltiplo de 3 y 7 simultáneamente");
        }
        else{
            $("#pRes6").html("Su número no es múltiplo de 3 y 7 simultáneamente");
        }
    }
}
function procesarEj7(){
    var num1=$("#num7").val();
    if (isNaN(num1)){
        $("#pRes7").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        if(nnum1<-20 || nnum1>20){
            $("#pRes7").html("CUMPLE");
        }
        else{
            $("#pRes7").html("NO CUMPLE");
        }
    }
}
function procesarEj8(){
    var num1=$("#num8").val();
    if (isNaN(num1)){
        $("#pRes8").html("Error, intente devuelta con números");
    }
    else{
        nnum1=parseFloat(num1);
        if(nnum1>30){
            $("#pRes8").html("Su número es mayor a 30");
        }
        else if(nnum1<10){
            $("#pRes8").html("Su número es menor a 10");
        }
        else{
            $("#pRes8").html("Su número esta entre 10 y 30");
        }
    }
}
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
        switch (true) {
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
function procesarEj14(){
    txt1=$("#txt14").val();
    switch (txt1) {
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
            $("#pRes14").html(txt1 + " es una vocal");
            break;
        default:
            return $("#pRes14").html(txt1 + " es es una vocal");           
    }
}
function procesarEj15(){
    var num1 = $("#num15").val();
    var num2 = $("#num16").val();
    if(isNaN(num1) || isNaN(num2)){
        $("#pRes15").html("Intente devuelta con un número");
    }
    else{
        nnum1=parseFloat(num1);
        nnum2=parseFloat(num2);
        if (nnum1%nnum2===0){
            $("#pRes15").html(nnum1+" y "+nnum2+" son múltiplos");
        }
        else{
            $("#pRes15").html(nnum1+" y "+nnum2+" no son múltiplos");
        }
    }
}
