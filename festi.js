const formulario = document.getElementById("formulario");

if (!formulario) {
    alert("Error: no se encontró el formulario.");
} else {
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

        if (!nombre) {
            alert("Debes escribir tu nombre.");
            return;
        }

        if (!apellidos) {
            alert("Debes escribir tus apellidos.");
            return;
        }

        if (!sexo) {
            alert("Debes seleccionar tu sexo.");
            return;
        }

        if (!correo) {
            alert("Debes escribir tu correo.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert("Escribe un correo válido.");
            return;
        }

        if (!estado) {
            alert("Debes seleccionar una población.");
            return;
        }

        if (!descripcion) {
            alert("Debes escribir una descripción.");
            return;
        }

        if (!info) {
            alert("Debes marcar la casilla de información.");
            return;
        }

        if (!condiciones) {
            alert("Debes aceptar las condiciones.");
            return;
        }

        alert("Todos los campos están completos correctamente.");
    });
}