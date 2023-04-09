function registrarse() {
    let nombre = (document.getElementById("nombre").value);
    let apellido = (document.getElementById("apellido").value);
    let email = (document.getElementById("email").value);
    let Provincia = (document.getElementById("Provincia").value);

    document.getElementById("nuevo-usuario").innerHTML = `Hola ${nombre} ${apellido} de ${Provincia} <br>
    tu email es ${email}`;

}
