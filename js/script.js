function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = (parseFloat(document.getElementById("altura").value) / 100);
    let imc = parseFloat((peso / (altura * altura)));
    if (peso < 0 || altura < 0) {
        document.getElementById("mensaje").innerHTML = "algo mal 1";
        document.getElementById("resultado").innerHTML = "";
    } else if (peso > 250 || altura > 2.5) {
        document.getElementById("mensaje").innerHTML = "algo mal 2";
        document.getElementById("resultado").innerHTML = "";
    } else {
        if (isNaN(imc)) {
            document.getElementById("mensaje").innerHTML = "Por favor, completa los campos <br> correctamente.";
            document.getElementById("resultado").innerHTML = "";
        } else if (typeof (imc) == "number" || typeof (imc) == "Number") {
            if (imc < 0) {
                document.getElementById("mensaje").innerHTML = "Por favor, completa los campos <br> correctamente.";
                document.getElementById("resultado").innerHTML = "";
            } else if (imc > 0 && imc <= 16) {
                document.getElementById("mensaje").innerHTML = "Delgadez severa";
                document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
            } else if (imc > 16 && imc <= 17) {
                document.getElementById("mensaje").innerHTML = "Delgadez moderada";
                document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
            } else if (imc > 17 && imc <= 18.5) {
                document.getElementById("mensaje").innerHTML = "Delgadez leve";
                document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
            } else if (imc > 18.5 && imc <= 25) {
                document.getElementById("mensaje").innerHTML = "Peso normal";
                document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
            } else if (imc > 25 && imc <= 26) {
                document.getElementById("mensaje").innerHTML = "Sobrepeso";
                document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
            } else if (imc > 25 && imc <= 29.5) {
                document.getElementById("mensaje").innerHTML = "Preobesidad";
                document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
            } else if (imc > 29.5 && imc <= 31.5) {
                document.getElementById("mensaje").innerHTML = "Obesidad";
                document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
            } else if (imc > 31.5 && imc <= 35) {
                document.getElementById("mensaje").innerHTML = "Obesidad leve";
                document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
            } else if (imc > 35 && imc <= 40) {
                document.getElementById("mensaje").innerHTML = "Obesidad moderada";
                document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
            } else if (imc > 40 && imc <= 70) {
                document.getElementById("mensaje").innerHTML = "Hiperobesidad";
                document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
            } else if (imc > 70) {
                document.getElementById("mensaje").innerHTML = "Los números son muy elevados. Por favor, revisa los datos cargados";
                document.getElementById("resultado").innerHTML = "Su IMC es" + " " + imc.toFixed(2);
            }
        } else {
            alert("No sabemos que paso <br> ¡Comunícate con el grupo 8!")
        }
    }
}