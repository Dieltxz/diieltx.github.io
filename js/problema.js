document.addEventListener("DOMContentLoaded", () => {
    const d = document.getElementById("descripcion");
    const da = document.getElementById("datos");
    const f = document.getElementById("formula");
    const p = document.getElementById("procedimiento");
    const r = document.getElementById("resultado");
    const b = document.getElementById("boton");

    d.textContent = "un auto experimenta una aceleracion uniforme";
    da.innerHTML = "velocidadinicial = 0 m/s<br>velocidadfinal = 20 m/s<br>tiempo = 4 s";
    f.textContent = "a=(vf-vi)/t";
    p.textContent = "calcular a=(20-0)/4";
    r.textContent = "";

    console.log("descripcion:", d.textContent);
    console.log("datos:", da.textContent);
    console.log("formula:", f.textContent);
    console.log("calculo:", p.textContent);

    function mostrar() {
        r.textContent = "resultado: 5m/s^2";
        console.log("resultado final:", r.textContent);
    }

    b.addEventListener("click", mostrar);
});