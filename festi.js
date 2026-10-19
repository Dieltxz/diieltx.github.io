const formulario = document.getElementById("formulario");

if (!formulario) {
    console.error("Error: no se encontró el formulario.");
} else {
    console.log("Formulario encontrado correctamente.");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const sexo = document.querySelector('input[name="sexo"]:checked');
        const estado = document.getElementById("estado").value;
        const descripcion = document.getElementById("descripcion").value.trim();
        const info = document.getElementById("info").checked;
        const condiciones = document.getElementById("condiciones").checked;

        console.log("=== DATOS DEL FORMULARIO ===");
        console.log("Nombre:", nombre);
        console.log("Apellidos:", apellidos);
        console.log("Correo:", correo);
        console.log("Sexo:", sexo ? sexo.value : "No seleccionado");
        console.log("Población:", estado);
        console.log("Descripción:", descripcion);
        console.log("Recibir información:", info);
        console.log("Aceptó las condiciones:", condiciones);

        if (!nombre) {
            console.error("Debes escribir tu nombre.");
            alert("Debes escribir tu nombre.");
            return;
        }

        if (!apellidos) {
            console.error("Debes escribir tus apellidos.");
            alert("Debes escribir tus apellidos.");
            return;
        }

        if (!sexo) {
            console.error("Debes seleccionar tu sexo.");
            alert("Debes seleccionar tu sexo.");
            return;
        }

        if (!correo) {
            console.error("Debes escribir tu correo.");
            alert("Debes escribir tu correo.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            console.error("El correo electrónico no es válido.");
            alert("Escribe un correo válido.");
            return;
        }

        if (!estado) {
            console.error("Debes seleccionar una población.");
            alert("Debes seleccionar una población.");
            return;
        }

        if (!descripcion) {
            console.error("Debes escribir una descripción.");
            alert("Debes escribir una descripción.");
            return;
        }

        if (!info) {
            console.error("Debes marcar la casilla de información.");
            alert("Debes marcar la casilla de información.");
            return;
        }

        if (!condiciones) {
            console.error("Debes aceptar las condiciones.");
            alert("Debes aceptar las condiciones.");
            return;
        }

        console.log("¡Formulario validado correctamente!");
        console.table({
            Nombre: nombre,
            Apellidos: apellidos,
            Correo: correo,
            Sexo: sexo.value,
            Población: estado,
            Descripción: descripcion,
            Información: info ? "Sí" : "No",
            Condiciones: condiciones ? "Aceptadas" : "No aceptadas"
        });

        alert("Todos los campos están completos correctamente.");
    });
}
