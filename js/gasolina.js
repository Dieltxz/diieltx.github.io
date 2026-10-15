const boton = document.getElementById("miformulario");
const resultado = document.getElementById("resultado");

boton.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const distancia = Number(document.getElementById("distancia").value);
    const litros = Number(document.getElementById("litros").value);
    const precio = Number(document.getElementById("precio").value);
    const gas = document.getElementById("gas").value;

    if (nombre === "") {
        resultado.textContent = "teclea nombre";
        return;
    }

    if (distancia <= 0) {
        resultado.textContent = "distancia debe ser mayor a cero";
        return;
    }

    if (litros <= 0) {
        resultado.textContent = "litros deben ser mayores a 0";
        return;
    }

    if (precio <= 0) {
        resultado.textContent = "el precio debe ser mayor a cero";
        return;
    }

    if (gas === "") {
        resultado.textContent = "selecciona un tipo de gas";
        return;
    }

    const consumo = distancia / litros;

    let mensaje;

    if (consumo >= 15) {
        mensaje = "mejor rendimiento";
    } else if (consumo >= 10) {
        mensaje = "rendimiento aceptable";
    } else {
        mensaje = "consumo elevado";
    }

    resultado.innerHTML = `
        <h3>Resultado</h3>
        <p>Conductor: <strong>${nombre}</strong></p>
        <p>Gasolina: <strong>${gas}</strong></p>
        <p>Distancia: ${distancia} km</p>
        <p>Litros utilizados: ${litros} L</p>
        <p>Consumo: <strong>${consumo.toFixed(2)} km/L</strong></p>
        <p><strong>${mensaje}</strong></p>
    `;
});