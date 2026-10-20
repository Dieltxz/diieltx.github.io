const boton = document.getElementById("btnlogin");

boton.addEventListener("click", validarlogin);

function validarlogin() {
    const correo = document.getElementById("correoinput").value;
    const clave = document.getElementById("claveinput").value;
    const mensaje = document.getElementById("mensaje");

    if (!correo.trim() || !clave.trim()) {
        mensaje.style.color = "red";
        mensaje.innerText = "Por favor, completa todos los campos";
        return;
    }

    if (!correo.includes("@")) {
        mensaje.style.color = "red";
        mensaje.innerText = "Ingresa un correo válido";
        return;
    }

    mensaje.style.color = "green";
    mensaje.innerText = "Ingreso exitoso, redirigiendo...";

    window.location.href = "moneda.html";
}