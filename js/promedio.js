document.getElementById('botoncalcular').addEventListener('click', function() {
    let p1 = parseFloat(document.getElementById('parcial1').value);
    let p2 = parseFloat(document.getElementById('parcial2').value);
    let p3 = parseFloat(document.getElementById('parcial3').value);

    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
        alert("teclea las tres calificaciones");
        return;
    }

    let promedio = (p1 + p2 + p3) / 3;
    let cajaresultado = document.getElementById('resultado');

    if (promedio >= 6.0) {
        //comilla invertida ` al inicio y al final alt + 96
        cajaresultado.innerHTML = `Tu promedio es: ${promedio.toFixed(1)} <br> <span style="color: green;">Pasaste, ¡Felicidades! </span>`;
    } else {
        cajaresultado.innerHTML = `Tu promedio es: ${promedio.toFixed(1)} <br> <span style="color: red;">Reprobaste, a recursar</span>`;
    }
});