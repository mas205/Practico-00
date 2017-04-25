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
    $("#btnE16").click(procesarEj16);
    $("#btnE17").click(procesarEj17);
    $("#btnE20").click(procesarEj20);
    $("#btnE21").click(procesarEj21);
    $("#btnE22").click(procesarEj22);
    $("#btnE23").click(procesarEj23);
    $("#btnE24").click(procesarEj24);
    $("#btnE25").click(procesarEj25);
    $("#btnE25_2").click(procesarEj25_2);
    $("#btnE25_3").click(procesarEj25_3);
    $("#btnE26").click(procesarEj26);
    $("#btnE27_1").click(procesarEj27_1);
    $("#btnE27_2").click(procesarEj27_2);
    $("#btnE28").click(procesarEj28);
    $("#btnE28_2").click(procesarEj28_2);
}
function procesarEj1() {
    var num1 = $("#num1").val();
    if (isNaN(num1)) {
        $("#pRes1").html("Error, intente devuelta con números");
    } else {
        nnum1 = parseFloat(num1);
        if (nnum1 > 0) {
            $("#pRes1").html("Su número es mayor a 0");
        } else if (nnum1 < 0) {
            $("#pRes1").html("Su número es menor a 0");
        } else {
            $("#pRes1").html("Su número es 0");
        }
    }
}
function procesarEj2() {
    var num1 = $("#num2").val();
    if (isNaN(num1)) {
        $("#pRes2").html("Error, intente devuelta con números");
    } else {
        nnum1 = parseFloat(num1);
        if (nnum1 > 10) {
            $("#pRes2").html("Su número es mayor que 10");
        } else {
            $("#pRes2").html("");
        }
    }
}
function procesarEj3() {
    var num1 = $("#num3").val();
    if (isNaN(num1)) {
        $("#pRes3").html("Error, intente devuelta con números");
    } else {
        nnum1 = parseFloat(num1);
        if (nnum1 > 20) {
            $("#pRes3").html("Su número es mayor que 20");
        } else {
            $("#pRes3").html("Su número es igual o menor que 20");
        }
    }
}
function procesarEj4() {
    var num1 = $("#num4").val();
    if (isNaN(num1)) {
        $("#pRes4").html("Error, intente devuelta con números");
    } else {
        nnum1 = parseFloat(num1);
        if (nnum1 > 0) {
            $("#pRes4").html(nnum1);
        } else {
            nnum2 = -nnum1;
            $("#pRes4").html(nnum2);
        }
    }
}
function procesarEj5() {
    var num1 = $("#num5").val();
    if (isNaN(num1)) {
        $("#pRes5").html("Error, intente devuelta con números");
    } else {
        nnum1 = parseFloat(num1);
        if (nnum1 < 20 && nnum1 > 10) {
            $("#pRes5").html("Su número está entre 10 y 20");
        } else {
            $("#pRes5").html("Su número no está entre 10 y 20");
        }
    }
}
function procesarEj6() {
    var num1 = $("#num6").val();
    if (isNaN(num1)) {
        $("#pRes6").html("Error, intente devuelta con números");
    } else {
        nnum1 = parseFloat(num1);
        if (nnum1 % 7 === 0 && nnum1 % 3 === 0) {
            $("#pRes6").html("Su número es múltiplo de 3 y 7 simultáneamente");
        } else {
            $("#pRes6").html("Su número no es múltiplo de 3 y 7 simultáneamente");
        }
    }
}
function procesarEj7() {
    var num1 = $("#num7").val();
    if (isNaN(num1)) {
        $("#pRes7").html("Error, intente devuelta con números");
    } else {
        nnum1 = parseFloat(num1);
        if (nnum1 < -20 || nnum1 > 20) {
            $("#pRes7").html("CUMPLE");
        } else {
            $("#pRes7").html("NO CUMPLE");
        }
    }
}
function procesarEj8() {
    var num1 = $("#num8").val();
    if (isNaN(num1)) {
        $("#pRes8").html("Error, intente devuelta con números");
    } else {
        nnum1 = parseFloat(num1);
        if (nnum1 > 30) {
            $("#pRes8").html("Su número es mayor a 30");
        } else if (nnum1 < 10) {
            $("#pRes8").html("Su número es menor a 10");
        } else {
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
    if (isNaN(num1)) {
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
        $("#pRes9").html("Levantarse<br>" + tempe + "<br>" + dia + "<br>");
    }
}

function procesarEj10() {
    var num1 = $("#numX").val();

    if (isNaN(num1)) {
        $("#pRes10").html("Error, intente devuelta con números");
    } else {
        nnum1 = parseFloat(num1);
        div++;
        tot += nnum1;
        promN = tot / div;
        prom = promN.toFixed(2);
        if (nnum1 > 90) {
            numE++;
            numS++;
        } else if (nnum1 > 70) {
            numS++;
        } else {
            numP++;
        }
        $("#numX").val("");
        $("#pRes10").html("Cantidad de excelentes: " + numE + "<br>" + "Cantidad de salvados: " + numS + "<br>" + "Cantidad de perdidos: " + numP + "<br>" + "Promedio: " + prom);
    }
}
function procesarEj11() {
    var num1 = $("#numC").val();

    if (isNaN(num1)) {
        $("#pRes11").html("Error, intente devuelta con números");
    } else {
        nnum1 = parseFloat(num1);
        cant++;
        totS += nnum1;
        if (sueMB > nnum1) {
            sueMB = nnum1;
        }
        $("#numC").val("");
        $("#pRes11").html("Total a pagar: " + totS + "<br>" + "Cantidad de sueldos: " + cant + "<br>" + "Sueldo mas bajo: " + sueMB);
    }
}

function procesarEj12() {
    var num1 = $("#numA").val();
    var num2 = $("#numB").val();
    if (isNaN(num1) || isNaN(num2)) {
        $("#pRes12").html("Error, intente devuelta con números");
    } else {
        nnum1 = parseFloat(num1);
        nnum2 = parseFloat(num2);
        if (nnum1 > nnum2) {
            rest = nnum1 - nnum2;
            $("#pRes12").html("Resultado: " + rest);
        } else {
            rest = nnum2 - nnum1;
            $("#pRes12").html("Resultado: " + rest);
        }
    }
}
function procesarEj13() {
    var num1 = $("#numD").val();
    var num2 = $("#numE").val();
    if (isNaN(num1) || isNaN(num2)) {
        $("#pRes13").html("Error, intente devuelta con números");
    } else {
        nnum1 = parseFloat(num1);
        nnum2 = parseFloat(num2);
        switch ($("#txtX").val()) {
            case "S":
                res = nnum1 + nnum2;
                break;
            case "R":
                res = nnum1 - nnum2;
                break;
            case "D":
                res1 = nnum1 / nnum2;
                res = res1.toFixed(2);
                break;
            case "M":
                res = nnum1 * nnum2;
                break;
            default:
                return $("#pRes13").html("Ese operador no es valido, seleccione 'S', 'R', 'D', 'M'");
        }
        $("#pRes13").html("Resultado: " + res);
    }
}
function procesarEj14() {
    txt1 = $("#txt14").val();
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
function procesarEj15() {
    var num1 = $("#num15").val();
    var num2 = $("#num16").val();
    if (isNaN(num1) || isNaN(num2)) {
        $("#pRes15").html("Intente devuelta con un número");
    } else {
        nnum1 = parseFloat(num1);
        nnum2 = parseFloat(num2);
        if (nnum1 % nnum2 === 0) {
            $("#pRes15").html(nnum1 + " y " + nnum2 + " son múltiplos");
        } else {
            $("#pRes15").html(nnum1 + " y " + nnum2 + " no son múltiplos");
        }
    }
}
function procesarEj16() {
    var num1 = $("#num17").val();
    if (isNaN(num1)) {
        $("#pRes16").html("Pruebe nuevamente con números");
    } else {
        nnum1 = parseFloat(num1);
        if ($("#chkB1").prop("checked")) {
            nnum1 = nnum1 * 2;
        }
        if (nnum1 >= 60000) {
            $("#pRes16").html("Puede ir a Europa de forma gratuita (y a los demás destinos)");
        } else if (nnum1 >= 30000) {
            $("#pRes16").html("Puede ir hasta Estados Unidos de forma gratuita(también a America del Sur)");
        } else if (nnum1 >= 15000) {
            $("#pRes16").html("Puede ir solamente a America del Sur de forma gratuita");
        } else {
            $("#pRes16").html("No tiene el minimo de millas para viajar de forma gratuita");
        }
    }
}
function procesarEj17() {
    txt1 = $("#txt17").val();
    switch (txt1) {
        case "A":
            dep = "Canelones";
            break;
        case "B":
            dep = "Maldonado";
            break;
        case "C":
            dep = "Rocha";
            break;
        case "D":
            dep = "Treinta y Tres";
            break;
        case "E":
            dep = "Cerro Largo";
            break;
        case "F":
            dep = "Rivera";
            break;
        case "G":
            dep = "Artigas";
            break;
        case "H":
            dep = "Salto";
            break;
        case "I":
            dep = "Paysandú";
            break;
        case "J":
            dep = "Rio Negro";
            break;
        case "K":
            dep = "Soriano";
            break;
        case "L":
            dep = "Colonia";
            break;
        case "M":
            dep = "San José";
            break;
        case "N":
            dep = "Flores";
            break;
        case "O":
            dep = "Florida";
            break;
        case "P":
            dep = "Lavalleja";
            break;
        case "Q":
            dep = "Durazno";
            break;
        case "R":
            dep = "Tacuarembó";
            break;
        case "S":
            dep = "Montevideo";
            break;
        default:
            $("#pRes17").html("Código incorrecto");
            break;
    }
    $("#pRes17").html(dep);
}
//Ejercicio 18//
var a = 1;
var b = 0;
var c = 0;
if (a > b && a > c) {
    $("#pRes18").html(a + " es el mayor de los 3");
}
//Ejercicio 19//
if (a > 10 || a < 0) {
    $("#pRes18").html(a + " esta fuera del rango");
}
var sumE20 = 0;
var cantE20 = 0;
function procesarEj20() {
    num1 = $("#num20").val();
    if (isNaN(num1)) {
        $("#pRes20").html("Intente nuevamente con números");
    } else {
        numP = parseFloat(num1);
        nnum1 = Math.abs(numP);
        if (cantE20 < 6) {
            sumE20 += nnum1;
            cantE20++;
            $("#num20").val("");
            if (cantE20 === 6) {
                $("#pRes20").html(sumE20);
                sumE20 = 0;
                cantE20 = 0;
            } else {
                $("#pRes20").html("Agregado " + nnum1 + " //Debugg// " + cantE20);
            }
        }
    }
}
var cantE21 = 0;
var multE21 = 0;
var mayoE21 = 0;
var ambaE21 = 0;
function procesarEj21() {
    num1 = $("#num21").val();
    if (isNaN(num1)) {
        $("#pRes21").html("Intente nuevamente con números");
    } else {
        nnum1 = parseFloat(num1);
        if (cantE21 < 5) {
            cantE21++;
            switch (true) {
                case nnum1 > 20 && nnum1 % 5 === 0:
                    ambaE21++;
                    multE21++;
                    mayoE21++;
                    $("#pRes21").html(nnum1 + " Agregado (a)!");
                    break;
                case nnum1 > 20:
                    mayoE21++;
                    $("#pRes21").html(nnum1 + " Agregado (b)!");
                    break;
                case nnum1 % 5 === 0:
                    multE21++;
                    $("#pRes21").html(nnum1 + " Agregado (c)!");
                    break;
                default:
                    $("#pRes21").html(nnum1 + " Agregado (d)!");
                    break;
            }
            if (cantE21 === 5) {
                $("#pRes21").html("Múltiplos de 5: " + multE21 + "<br>" + "Mayores de 20: " + mayoE21 + "<br>" + "Ambos casos: " + ambaE21);
                cantE21 = 0;
                ambaE21 = 0;
                mayoE21 = 0;
                multE21 = 0;
            }
        }
    }
}
function procesarEj22() {
    num1 = $("#num23").val();
    var cantAgua = $("#num22").val();
    var cantHarina = num1 / 100;
    var cantAceite = $("#num24").val();
    var cantAzucar = $("#num25").val();
    if (cantAgua < cantHarina && cantAgua < cantAceite && cantAgua < cantAzucar) {
        //AguaLimitante
        if (cantAgua >= 1) {
            $("#pRes22").html("Puede elaborar " + Math.floor(cantAgua) + " recetas");
        } else {
            $("#pRes22").html("No puede elaborar galletas");
        }
    } else if (cantHarina < cantAgua && cantHarina < cantAzucar && cantHarina < cantAceite) {
        //HarinaLimitante
        if (cantHarina >= 1) {
            $("#pRes22").html("Puede elaborar " + Math.floor(cantHarina) + " recetas");
        } else {
            $("#pRes22").html("No puede elaborar galletas");
        }
    } else if (cantAceite < cantAgua && cantAceite < cantAzucar && cantAceite < cantHarina) {
        //AceiteLimitante
        if (cantAceite >= 1) {
            $("#pRes22").html("Puede elaborar " + Math.floor(cantAceite) + " recetas");
        } else {
            $("#pRes22").html("No puede elaborar galletas");
        }
    } else {
        //AzucarLimitante
        if (cantAzucar >= 1) {
            $("#pRes22").html("Puede elaborar " + Math.floor(cantAzucar) + " recetas");
        } else {
            $("#pRes22").html("No puede elaborar galletas");
        }
    }
}
function procesarEj23() {
    num1 = $("#num26").val();
    num2 = $("#num27").val();
    if (isNaN(num1) || isNaN(num2)) {
        $("#pRes23").html("Intente nuevamente con números");
    } else {
        nnum1 = parseFloat(num1);
        nnum2 = parseFloat(num2);
        if (nnum1 < 20000) {
            primerPago = nnum2 * (15 / 100);
            cuotaPago2 = (nnum2 - primerPago) / 2;
            cuotaPago = Math.round(cuotaPago2);
            $("#pRes23").html("Primer pago de: " + primerPago + "<br>" + "Dos cuotas de: " + cuotaPago);
        } else {
            primerPago = nnum2 * (30 / 100);
            cuotaPago2 = (nnum2 - primerPago) / 84;
            cuotaPago = Math.round(cuotaPago2);
            $("#pRes23").html("Primer pago de: " + primerPago + "<br>" + "84 cuotas de: " + cuotaPago);
        }
    }
}
function procesarEj24() {
    num1 = $("#num28").val();
    if (isNaN(num1)) {
        $("#pRes24").html("Intente nuevamente con números");
    } else {
        nnum1 = parseFloat(num1);
        if ($("#chkB2").prop("checked")) {
            tot = nnum1 * (96 / 100);
        } else {
            tot = nnum1;
        }
        $("#pRes24").html("Total a pagar: " + tot);
    }
}
var stockEj25 = 0;
var mayorCompradorN = 0;
var mayorCompradorS = "";
var cantPedidos = 0;
function procesarEj25_3() {
    //botón para añadir stock
    num1 = $("#num29").val();
    $("#num29").val("");
    if (isNaN(num1)) {
        $("#pRes25").html("Intente nuevamente con números");
    } else {
        stockEj25 = parseFloat(num1);
        $("#pRes25").html("Stock agregado correctamente");
        if ($('#btnE25').attr("disabled", true) && num1 > 0) {
            $('#btnE25').attr("disabled", false);
        }
    }
}
function procesarEj25() {
    //botón para añadir compra
    num2 = $("#num30").val();
    txt1 = $("#txt18").val();
    $("#num30").val("");
    $("#txt18").val("");
    if (isNaN(num2)) {
        $("#pRes25").html("Intente nuevamente con números");
    } else {
        nnum2 = parseFloat(num2);
        if (nnum2 <= stockEj25) {
            stockEj25 -= nnum2;
            if (stockEj25 === 0) {
                $('#btnE25').attr("disabled", true);
            }
            cantPedidos++;
            if (nnum2 > mayorCompradorN) {
                mayorCompradorN = nnum2;
                mayorCompradorS = txt1;
            }
            $("#pRes25").html("Compra efectuada");
        } else {
            $("#pRes25").html("Solo nos quedan " + stockEj25 + " camaras en stock");
        }
    }
}
function procesarEj25_2() {
    //botón de mostrar info
    $("#pRes25").html("Mayor comprador: " + mayorCompradorS + ", " + mayorCompradorN + " camaras"
            + "<br>" + "Cantidad de compras: " + cantPedidos);
}
function procesarEj26() {
    var cantDias = 0;
    num1 = $("#num31").val();
    if (isNaN(num1)) {
        $("#pRes26").html("Intente nuevamente con números");
    } else {
        nnum1 = parseFloat(num1);
        if (nnum1 > 2 && nnum1 < 7) {
            gratisDias = 1;
            cantDias = nnum1 + gratisDias;
        } else if (nnum1 > 6 && $("#chkB3").prop("checked")) {
            gratisDias = 3;
            cantDias = nnum1 + gratisDias;
        } else if (nnum1 > 6) {
            gratisDias = 2;
            cantDias = nnum1 + gratisDias;
        } else {
            gratisDias = 0;
            cantDias = nnum1;
        }
        precioTot = nnum1 * 40;
        $("#pRes26").html("Cantidad de días gratuitos: " + gratisDias + "<br>" +
                "Cantidad de dias en total: " + cantDias + "<br>" +
                "Precio a pagar: " + precioTot);
    }
}
numJugador1 = 0;
intentos = 0;
function procesarEj27_1() {
    num1 = $("#num32").val();
    if (isNaN(num1)) {
        $("#pRes27").html("Intente nuevamente con números");
    } else {
        nnum1 = parseFloat(num1);
        numJugador1 = nnum1;
        $("#pRes27").html("Jugador 1 ha elegido su número! Jugador 2 escoja");
        $("#btnE27_1").attr("disabled", true);
        $("#btnE27_2").attr("disabled", false);
        $("#num32").val("");
    }
}
function procesarEj27_2() {
    num1 = $("#num33").val();
    if (isNaN(num1)) {
        $("#pRes27").html("Intente nuevamente con números");
    } else {
        intentos ++;
        nnum1 = parseFloat(num1);
        dist = Math.abs(numJugador1-nnum1);
        switch (true){
            case dist === 0:
                $("#pRes27").html("Jugador 2 ha ganado tras " + intentos + " intentos!");
                $("#btnE27_1").attr("disabled", false);
                $("#btnE27_2").attr("disabled", true);
                $("#num33").val("");
                break;
            case dist < 5 && dist > 0:
                $("#pRes27").html("Muy pero muy cerca!");
                $("#num33").val("");
                break;
            case dist >= 5 && dist < 10:
                $("#pRes27").html("Cada vez mas cerca!");
                $("#num33").val("");
                break;
            case dist >=10 && dist < 16:
                $("#pRes27").html("Te estás acercando!");
                $("#num33").val("");
                break;
            case dist > 15:
                $("#pRes27").html("Estas lejos!");
                $("#num33").val("");
                break;
            default:
                $("#pRes27").html("Ha ocurrido un error!");
        }
    }
}
var puntajeJugador1 = 0;
var puntajeJugador2 = 0;

function procesarEj28 (){
    num1=$("#num34").val();
    num2=$("#num35").val();
    $("#num34").val("");
    $("#num35").val("");
    if (isNaN(num1) || isNaN(num2)){
        $("#pRes28").html("Intente nuevamente con números");
    } else {
        nnum1=parseFloat(num1);
        nnum2=parseFloat(num2);
        puntajeJugador1+=nnum1;
        puntajeJugador2+=nnum2;
        $("#pRes28").html("Puntaje Jugador 1: " + puntajeJugador1 + "<br>" + 
                "Puntaje Jugador 2: " + puntajeJugador2);
        if (puntajeJugador2 > 29 || puntajeJugador1 > 29){
            if (puntajeJugador1 > puntajeJugador2){
                ganador = "El Jugador 1";
            } else {
                ganador = "El Jugador 2";
            }
            $("#pRes28").html(ganador + " ha ganado");
            $("#btnE28").attr("disabled", true);
        }
    }
}
function procesarEj28_2(){
    $("#btnE28").attr("disabled", false);
    puntajeJugador1 = 0;
    puntajeJugador2 = 0;
}
