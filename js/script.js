
function calcular() {

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = (parseFloat(document.getElementById("altura").value) / 100);
    let imc = parseFloat((peso / (altura * altura)));

    if (isNaN(imc)) {
        document.getElementById("mensaje").innerHTML = "Por favor, revisa los valores ingresados";
        document.getElementById("resultado").innerHTML = "";
    } else if (peso < 0 || altura < 0) {
        document.getElementById("mensaje").innerHTML = "Por favor, revisa los valores ingresados";
        document.getElementById("resultado").innerHTML = "";
    } else if (peso > 250 || altura > 2.5) {
        document.getElementById("mensaje").innerHTML = "Por favor, revisa los valores ingresados";
        document.getElementById("resultado").innerHTML = "";
    } else if (typeof (imc) == "number" || typeof (imc) == "Number") {
        if (imc < 0) {
            document.getElementById("mensaje").innerHTML = "Por favor, revisa los valores ingresados";
            document.getElementById("resultado").innerHTML = "";
        } else if (imc > 0 && imc <= 15) {
            document.getElementById("mensaje").innerHTML = "Por favor, revisa los valores ingresados";
            document.getElementById("resultado").innerHTML = "";
        } else if (imc > 15 && imc <= 18.5) {
            document.getElementById("mensaje").innerHTML = "Ustede se encuentra <br> en el rango de delgadez.";
            document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
        } else if (imc > 18.5 && imc <= 25) {
            document.getElementById("mensaje").innerHTML = "Ustede se encuentra <br> en el rango de peso normal.";
            document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
        } else if (imc > 25 && imc <= 26) {
            document.getElementById("mensaje").innerHTML = "Ustede se encuentra <br> en el rango de sobrepeso.";
            document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
        } else if (imc > 25 && imc <= 31.5) {
            document.getElementById("mensaje").innerHTML = "Ustede se encuentra <br> en el rango de preobesidad.";
            document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
        } else if (imc > 31.5 && imc <= 40) {
            document.getElementById("mensaje").innerHTML = "Ustede se encuentra <br> en el rango de obesidad.";
            document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
        } else if (imc > 40 && imc <= 65) {
            document.getElementById("mensaje").innerHTML = "Ustede se encuentra <br> en el rango de hiperobesidad.";
            document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
        } else {
            document.getElementById("mensaje").innerHTML = "Por favor, revisa los valores ingresados";
            document.getElementById("resultado").innerHTML = "";
        }
    } else {
        document.getElementById("mensaje").innerHTML = "Sinceramente, no sabemos que pasó <br> ¡Comunícate con el grupo 8!";
        document.getElementById("resultado").innerHTML = "";
    }
}