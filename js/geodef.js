const Documento = document;
const provincias = Documento.getElementById("Provincia");

function provincia() {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {

            let opciones = `<option value="Elige una provincia">Elige una provincia</option>`;

            json.provincias.forEach(el => opciones += `<option value="${el.nombre}">${el.nombre}</option>`);

            provincias.innerHTML = opciones;
        })
}
Documento.addEventListener("DOMContentLoaded", provincia)