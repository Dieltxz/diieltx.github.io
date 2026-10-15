const formulario = document.getElementById("miformulario");

formulario.addEventListener("submit", function(event ) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    console.log("nombre:", nombre);

    const password = document.getElementById("password").value;
    console.log("password:", password);

    const email = document.getElementById("email").value;
    console.log("nombre:", nombre);

    const edad = document.getElementById("edad").value;
    console.log("edad:", edad);

    const telefono = document.getElementById("telefono").value;
    console.log("telefono:", telefono);

    const web = document.getElementById("web").value;
    console.log("web:", web);

    const busqueda = document.getElementById("busqueda").value;
    console.log("busqueda:", busqueda);

    const fecha = document.getElementById("fecha").value;
    console.log("fecha:", fecha);

    const hora = document.getElementById("hora").value;
    console.log("hora:", hora);

    const fechahora = document.getElementById("fechahora").value;
    console.log("fechahora:", fechahora);

    const mes = document.getElementById("mes").value;
    console.log("mes:", mes);

    const semana = document.getElementById("semana").value;
    console.log("semana:", semana);

    const rango = document.getElementById("rango").value;
    console.log("rango:", rango);

    const color = document.getElementById("color").value;
    console.log("color:", color);

    const sexoseleccionado = document.querySelector(
        'input(name="sexo"):checked'
    );

    const sexo = sexoseleccionado
        ? sexoseleccionado.value
        : null;

    console.log("sexo:", sexo);

    const lenguajesseleccionados = document.querySelectorAll(
        'input[name="lenguajes": checked'
    );

    const lenguajes= Array.from(lenguajesseleccionados)
          .map(input => input.value);

    console.log("lenguajes:", lenguajes);

    const archivo = document.getElementById("archivo").files[0];

    if (archivo) {
        console.log("archivo:", archivo.name);
        console.log("tipo:", archivo.type);
        console.log("tamaño:", archivo.syze);
    } else { 
        console.log("archivo no seleccionado");
    }

    const idusuario = document.getElementById("idusuario").value;
    console.log("idusuario:", idusuario);

    console.log("------------------------------");
    console.log("formulario listo");
})