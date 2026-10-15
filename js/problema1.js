document.addEventListener("DOMContentLoaded", () => {
    const d = document.getElementById("descripcion");
    const da = document.getElementById("datos");
    const f = document.getElementById("formula");
    const p = document.getElementById("procedimiento");
    const r = document.getElementById("resultado");
    const b = document.getElementById("boton");

    d.textContent = "un tren reduce su velocidad de 60 a 20 km/h";
    da.innerHTML = "velocidadinicial = 16.67m/s<br>velocidadfinal = 5.56 m/s<br>tiempo = 8 s";
    f.textContent = "a=(vf-vi)/t";
    p.textContent = "calcular a=(5.56-16.67)/8";
    r.textContent = "";

    console.log("descripcion:", d.textContent);
    console.log("datos:", da.textContent);
    console.log("formula:", f.textContent);
    console.log("calculo:", p.textContent);

    function mostrar() {
        r.textContent = "resultado: -1.39 m/s2";
        console.log("resultado final:", r.textContent);
    }

    b.addEventListener("click", mostrar);
});  